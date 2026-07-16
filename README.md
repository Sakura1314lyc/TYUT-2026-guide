# 太原理工大学 2026 新生实地手册

一个面向太原理工大学新生的非官方校园生活指南，使用原生 HTML、CSS 和 JavaScript 制作，无需构建工具即可运行。

在线访问：[https://tyut-2026-guide.surge.sh](https://tyut-2026-guide.surge.sh)

> 本项目是非官方便民整理。报到、缴费、住宿、军训、学籍及校园设施开放情况，请以录取通知书、学院通知和太原理工大学官方渠道为准。

## 功能

- 明向、迎西、虎峪三个校区切换
- 官方平面图和立体图切换
- 地图拖动、滚轮缩放和一键复位
- 校门、教学楼、食堂、宿舍、运动场及服务设施标记
- 设施搜索、分类筛选和目录快速定位
- 地点实景照片与官方来源链接
- 找不到精确建筑照片时明确标注“校区区域参考”
- 可在浏览器中自动保存的行李清单
- 8 个主题、22 篇按时间顺序编排的新生攻略
- 攻略全文搜索、主题筛选和折叠阅读
- 报到、军训、选课、综测奖助、校园生活与毕业规划等详细说明
- 报到路线和常见问题
- 手机、平板和桌面端响应式布局
- 新生指南宣传海报及网站二维码

## 技术栈

- HTML5
- CSS3
- 原生 JavaScript
- Surge 静态网站部署

项目没有第三方前端依赖，也不需要执行打包或编译。

## 项目结构

```text
.
├─ index.html                 # 网站页面结构
├─ styles.css                # 网站样式与响应式布局
├─ app.js                    # 地图、筛选、清单等交互逻辑
├─ assets/
│  ├─ *-plan.jpg             # 三校区平面图
│  ├─ *-3d.jpg               # 三校区立体图
│  └─ photos/                # 校园及设施实景照片
└─ poster/
   ├─ poster.html            # 海报页面
   ├─ poster.css             # 海报样式
   ├─ poster-background.png  # 海报背景
   └─ *.png                  # 海报成品与网站二维码
```

## 本地预览

在项目根目录启动任意静态文件服务器。

使用 Python：

```powershell
python -m http.server 4173
```

然后访问：

```text
http://localhost:4173
```

也可以直接打开 `index.html`，但建议通过静态服务器预览，以获得更一致的浏览器行为。

## 修改内容

- 页面文字和结构：编辑 `index.html`
- 页面配色、排版和移动端样式：编辑 `styles.css`
- 校区、设施、坐标、实景图和攻略数据：编辑 `app.js`
- 海报内容与排版：编辑 `poster/poster.html` 和 `poster/poster.css`

修改后先在本地刷新页面检查效果，再重新部署。

## 更新线上网站

首次使用 Surge 时安装命令行工具并登录：

```powershell
npm install --global surge
surge login
```

在项目根目录执行：

```powershell
surge . tyut-2026-guide.surge.sh
```

部署成功后，原网址会直接更新。如果浏览器仍显示旧内容，可以使用 `Ctrl + F5` 强制刷新。

## 提交到 GitHub

```powershell
git add .
git commit -m "描述本次修改"
git push
```

## 资料来源

- [太原理工大学校园导览](https://www.tyut.edu.cn/xxgk1/xydl.htm)
- [太原理工大学图书馆](https://lib.tyut.edu.cn/)
- [太原理工大学基本建设部](https://jijianchu.tyut.edu.cn/)
- [新生入学指南大全（腾讯文档）](https://docs.qq.com/aio/DVHZ3bU1yTG5Jb1hM)
- 太原理工大学各学院及部门官方网站

攻略库对参考资料进行了重新分类、删减和改写，不等同于学校正式通知。校园地图、实景图片和学校相关标识来源于太原理工大学官方公开页面，仅用于新生便民展示。若学校政策、设施、道路或管理安排发生变化，请以录取通知书、学校及学院最新通知和现场标识为准。
