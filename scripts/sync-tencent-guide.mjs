import fs from "node:fs";
import vm from "node:vm";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const SOURCE_URL = "https://docs.qq.com/aio/DVHZ3bU1yTG5Jb1hM";
const CHROME_PATH = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const DATA_PATH = new URL("../guide-data.js", import.meta.url);
const NESTED_PAGES = {
  "3xGoVZ7dq0RDt2G6SUZ0FK": [
    { id: "iJ0BSX47g9TZQdQshR7TKl", title: "电脑端" },
    { id: "Jnk4pKkKVOobg7rjvpR44c", title: "手机端" },
  ],
  h4w6saYMlIdpW1nQXcnoSN: [
    { id: "JxhxAoTjTKsNuLJChQXp0h", title: "明向校区" },
    { id: "NQX7bsLxq7xi6OiCAXJWrs", title: "迎西校区" },
    { id: "g9u8dSWe2QLaSxKtCayQN3", title: "虎峪校区" },
  ],
  I1wNOvGdO4rGSg1cBypZUP: [
    { id: "kRm0MbxNiJyo6gTwwwqT2v", title: "明向校区与榆次大学城" },
    { id: "hVaGwECmijTl8juTbEq0rp", title: "太原校区" },
  ],
};

function normalize(value) {
  return String(value || "")
    .replace(/[\u200b\u200c\u200d\u2060\ufeff\u200e\u200f\u00ad‌]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function loadExistingGuide() {
  const context = { window: {} };
  vm.createContext(context);
  const source =
    process.env.TYUT_SYNC_BASELINE === "git-head"
      ? execFileSync("git", ["show", "HEAD:guide-data.js"], { encoding: "utf8" })
      : fs.readFileSync(DATA_PATH, "utf8");
  vm.runInContext(source, context);
  return context.window.tyutFullGuide;
}

async function readSidebar(page) {
  return page.evaluate(() => {
    const rows = [];
    const seen = new Set();
    document.querySelectorAll("[data-block-id]").forEach((wrapper) => {
      const tree = wrapper.querySelector(":scope > .sc-smart-content-wrapper > .sc-tree-node");
      const titleNode = tree?.querySelector(".sc-page-item-rich-title");
      const id = wrapper.getAttribute("data-block-id");
      if (!tree || !titleNode || !id || seen.has(id)) return;
      seen.add(id);
      rows.push({
        id,
        title: titleNode.innerText.trim(),
        level: Number.parseFloat(getComputedStyle(tree).paddingLeft) || 0,
      });
    });
    return rows;
  });
}

async function readPageData(page, id) {
  const node = page.locator(`[data-block-id="${id}"] .sc-tree-node`).first();
  if (!(await node.count())) return { lines: [], children: [] };
  await node.click({ force: true });
  // Tencent Docs fills table cells and list blocks shortly after the page shell.
  // Waiting a little longer prevents a partial sync when a page contains tables.
  await page.waitForTimeout(850);
  return page.evaluate(() => ({
    lines: [...document.querySelectorAll(".sc-block-wrapper")]
      .map((block) => {
        const text = (block.innerText || "").trim();
        if (!text) return null;
        if (block.classList.contains("sc-block-header1")) return { type: "header1", text };
        if (block.classList.contains("sc-block-header2")) return { type: "header2", text };
        if (
          block.classList.contains("sc-block-text") ||
          block.classList.contains("sc-block-numbered_list") ||
          block.classList.contains("sc-block-bulleted_list") ||
          block.classList.contains("sc-block-todo") ||
          block.classList.contains("sc-block-toggle")
        ) {
          return { type: "text", text };
        }
        return null;
      })
      .filter(Boolean),
    children: [...document.querySelectorAll(".sc-block-page[data-block-id]")]
      .map((block) => ({
        id: block.getAttribute("data-block-id"),
        title: (block.innerText || "").trim(),
      }))
      .filter((item, index, items) =>
        item.id && item.title && items.findIndex((candidate) => candidate.id === item.id) === index,
      ),
  }));
}

async function readPageTree(page, id, visited = new Set()) {
  if (visited.has(id)) return [];
  visited.add(id);
  const data = await readPageData(page, id);
  const lines = [...data.lines];
  const children = data.children.length ? data.children : NESTED_PAGES[id] || [];
  for (const child of children) {
    const childLines = await readPageTree(page, child.id, visited);
    if (!childLines.some((line) => normalize(line.text) && !/^[●•]$/.test(normalize(line.text)))) continue;
    lines.push({ type: "header1", text: child.title }, ...childLines);
  }
  return lines;
}

async function main() {
  const sections = loadExistingGuide();
  const browser = await chromium.launch({ headless: true, executablePath: CHROME_PATH });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });

  await page.goto(SOURCE_URL, { waitUntil: "commit", timeout: 90_000 });
  await page.waitForSelector("[data-block-id] .sc-tree-node", { timeout: 60_000 });
  await page.waitForTimeout(5_000);

  const sidebar = await readSidebar(page);
  const sidebarIndex = new Map(sidebar.map((item, index) => [item.id, index]));
  const sidebarById = new Map(sidebar.map((item) => [item.id, item]));

  for (const section of sections) {
    section.topics.sort(
      (a, b) => (sidebarIndex.get(a.id) ?? Number.MAX_SAFE_INTEGER) - (sidebarIndex.get(b.id) ?? Number.MAX_SAFE_INTEGER),
    );

    for (const topic of section.topics) {
      const row = sidebarById.get(topic.id);
      if (!row) continue;

      const match = normalize(row.title).match(/^(\d+\.\d+)\s*(.*)$/);
      if (match) {
        topic.code = match[1];
        topic.title = match[2];
      }
      topic.sourceTitle = normalize(row.title);

      const previousLines = topic.lines;
      const lines = await readPageTree(page, topic.id);
      const normalizedLines = lines
        .map((line) => ({ ...line, text: normalize(line.text) }))
        .filter((line) => line.text && !/^[●•]$/.test(line.text));

      const suspiciouslyIncomplete =
        (previousLines.length > 0 && normalizedLines.length === 0) ||
        (previousLines.length >= 8 && normalizedLines.length < previousLines.length * 0.6);
      if (suspiciouslyIncomplete) {
        console.warn(
          `Kept ${topic.code} (${previousLines.length} lines): Tencent page returned only ${normalizedLines.length} lines`,
        );
      } else {
        topic.lines = normalizedLines;
      }
      topic.status = topic.lines.length || topic.images.length ? "complete" : "placeholder";
    }
  }

  let order = 0;
  sections.forEach((section) =>
    section.topics.forEach((topic) => {
      order += 1;
      topic.order = order;
    }),
  );

  const banner = `/* Synced from the public Tencent document on ${new Date().toISOString().slice(0, 10)}.\n * Decorative emoji are not used by the interface. Time-sensitive claims remain\n * labelled for verification against current official notices.\n */\n`;
  fs.writeFileSync(DATA_PATH, `${banner}window.tyutFullGuide = ${JSON.stringify(sections, null, 2)};\n`);
  await browser.close();
  console.log(`Synced ${order} guide topics from ${SOURCE_URL}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
