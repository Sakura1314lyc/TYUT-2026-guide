const campuses = {
  mingxiang: {
    index: "01 / 03",
    en: "YUTCI · JINZHONG",
    name: "明向校区",
    address: "山西省晋中市榆次区大学街209号",
    route:
      "榆次火车站可乘 5 路到“太原理工大学东门”；太原南站可参考 902、903、903 支线、909 路。公交线路可能调整，出发当天请再用地图软件核对。",
    tags: ["大学城", "主教学区", "宿舍集中"],
    plan: "./assets/mingxiang-plan.jpg",
    "3d": "./assets/mingxiang-3d.jpg",
    nav: "https://uri.amap.com/search?keyword=太原理工大学明向校区",
    defaultPoint: "mx-admin",
    points: [
      {
        id: "mx-south-gate",
        name: "校区南门",
        category: "校门",
        description: "位于学院街一侧，是平面图下方的主要入口。报到时仍以学院通知指定校门为准。",
        coords: { plan: [51, 94], "3d": [49, 70] },
      },
      {
        id: "mx-admin",
        name: "行政主楼",
        category: "教学",
        description: "位于校园中轴线北段，是明向校区较醒目的核心建筑与辨路参照。",
        coords: { plan: [53, 55], "3d": [53, 43] },
      },
      {
        id: "mx-stadium",
        name: "东侧运动场",
        category: "运动",
        description: "位于校区东侧，平面图和立体图上都很容易识别，可作为寻找东区楼宇的参照。",
        coords: { plan: [88, 34], "3d": [80, 43] },
      },
      {
        id: "mx-east-dorm",
        name: "东区学生公寓",
        category: "生活",
        description: "校园东南侧的学生公寓组团，具体楼号和入住安排以当年学院通知为准。",
        coords: { plan: [84, 68], "3d": [71, 58] },
      },
      {
        id: "mx-west-dorm",
        name: "西区学生公寓",
        category: "生活",
        description: "校园西北侧的学生公寓组团，靠近西侧学院楼与生活区域。",
        coords: { plan: [18, 34], "3d": [38, 35] },
      },
      {
        id: "mx-teaching",
        name: "学院教学楼群",
        category: "教学",
        description: "校园中西部集中分布多座学院楼和教学建筑，新生上课前建议先实地走一次路线。",
        coords: { plan: [39, 63], "3d": [42, 55] },
      },
    ],
  },
  yingxi: {
    index: "02 / 03",
    en: "WANBAILIN · TAIYUAN",
    name: "迎西校区",
    address: "山西省太原市万柏林区迎泽西大街79号",
    route:
      "可参考 1、809、38、822、868、855 路等公交，在“太原理工大学”站附近下车。具体报到校门与接待点以学院通知为准。",
    tags: ["太原市区", "历史校区", "交通便利"],
    plan: "./assets/yingxi-plan.jpg",
    "3d": "./assets/yingxi-3d.jpg",
    nav: "https://uri.amap.com/search?keyword=太原理工大学迎西校区",
    defaultPoint: "yx-library",
    points: [
      {
        id: "yx-main-gate",
        name: "迎泽西大街校门",
        category: "校门",
        description: "平面图下方连接迎泽西大街的主要入口，进校后可沿中轴线辨认办公楼与图书馆。",
        coords: { plan: [51, 94], "3d": [49, 78] },
      },
      {
        id: "yx-library",
        name: "图书馆",
        category: "教学",
        description: "位于迎西校区中部偏东，是校园中轴线附近的重要学习空间和辨路地标。",
        coords: { plan: [52, 54], "3d": [57, 43] },
      },
      {
        id: "yx-qingze-canteen",
        name: "清泽餐厅",
        category: "生活",
        description: "位于运动场东侧、清泽苑南侧附近，是迎西校区重要生活服务点。",
        coords: { plan: [53, 40], "3d": [64, 35] },
      },
      {
        id: "yx-stadium",
        name: "田径运动场",
        category: "运动",
        description: "位于校区中西部，体育馆和运动场区域在地图上非常醒目。",
        coords: { plan: [37, 37], "3d": [47, 33] },
      },
      {
        id: "yx-qingzeyuan",
        name: "清泽苑学生公寓",
        category: "生活",
        description: "位于校区东北部的学生公寓组团，周边分布餐厅和生活服务设施。",
        coords: { plan: [73, 20], "3d": [75, 25] },
      },
      {
        id: "yx-boxue",
        name: "博学馆",
        category: "教学",
        description: "位于迎西校区东部，是地图上体量较大的教学建筑之一。",
        coords: { plan: [69, 50], "3d": [71, 45] },
      },
      {
        id: "yx-machinery",
        name: "机械馆",
        category: "教学",
        description: "位于中轴线西侧的教学实验建筑区域，靠近阶梯教室和材料力学实验室。",
        coords: { plan: [42, 68], "3d": [47, 57] },
      },
    ],
  },
  huyu: {
    index: "03 / 03",
    en: "WANBAILIN · TAIYUAN",
    name: "虎峪校区",
    address: "山西省太原市万柏林区新矿院路18号",
    route:
      "可参考 824、875、823 路，在“千峰南路后王街口”站附近下车。迎西与虎峪距离较近，但报到入口和学院位置不要混淆。",
    tags: ["矿业特色", "太原市区", "毗邻迎西"],
    plan: "./assets/huyu-plan.jpg",
    "3d": "./assets/huyu-3d.jpg",
    nav: "https://uri.amap.com/search?keyword=太原理工大学虎峪校区",
    defaultPoint: "hy-library",
    points: [
      {
        id: "hy-north-gate",
        name: "北侧入口",
        category: "校门",
        description: "靠近移村南街一侧的入口区域，报到或访校时请以当日开放校门为准。",
        coords: { plan: [53, 9], "3d": [70, 22] },
      },
      {
        id: "hy-library",
        name: "图书馆",
        category: "教学",
        description: "位于虎峪校区北部中央，是连接梅花教室、致明楼和运动区域的重要地标。",
        coords: { plan: [51, 36], "3d": [55, 45] },
      },
      {
        id: "hy-stadium",
        name: "同泽田径场",
        category: "运动",
        description: "位于校区西南部，靠近工程训练中心和采矿实验楼。",
        coords: { plan: [28, 68], "3d": [58, 29] },
      },
      {
        id: "hy-basketball",
        name: "同泽篮球场",
        category: "运动",
        description: "位于校区东北部，图书馆东侧，是平面图上较容易识别的橙色场地区域。",
        coords: { plan: [68, 36], "3d": [43, 58] },
      },
      {
        id: "hy-biyuan",
        name: "碧园餐厅",
        category: "生活",
        description: "位于校区东部生活区，与智渊餐厅、学生公寓和后勤楼相邻。",
        coords: { plan: [66, 56], "3d": [62, 43] },
      },
      {
        id: "hy-zhiyuan",
        name: "智渊餐厅",
        category: "生活",
        description: "位于虎峪校区东侧，周边分布学生公寓、厨房和生活服务设施。",
        coords: { plan: [78, 53], "3d": [68, 43] },
      },
      {
        id: "hy-dorm",
        name: "同泽苑学生公寓",
        category: "生活",
        description: "校区东部和南部集中分布同泽苑学生公寓，具体入住楼号以学院通知为准。",
        coords: { plan: [80, 22], "3d": [37, 73] },
      },
      {
        id: "hy-mining",
        name: "采矿馆",
        category: "教学",
        description: "位于田径场东侧，靠近采矿实验楼、采矿工艺研究所与煤机楼。",
        coords: { plan: [44, 54], "3d": [56, 48] },
      },
    ],
  },
};

const extraCampusPoints = {
  mingxiang: [
    {
      id: "mx-east-gate",
      name: "校区东门",
      category: "校门",
      description: "位于校区东侧经一路一带，具体开放情况和迎新入口以现场通知为准。",
      coords: { plan: [95, 51], "3d": [82, 50] },
    },
    {
      id: "mx-xingmian",
      name: "行勉楼",
      category: "教学",
      description: "明向校区常用教学楼之一，教室按字母分区，第一次上课建议提前确认入口。",
      coords: { plan: [43, 76], "3d": [53, 59] },
    },
    {
      id: "mx-xingzhi",
      name: "行知楼",
      category: "教学",
      description: "明向校区常用教学楼之一，考试与公共课程经常使用，注意核对楼区和教室号。",
      coords: { plan: [59, 75], "3d": [58, 60] },
    },
    {
      id: "mx-library",
      name: "明向图书馆",
      category: "教学",
      description: "明向校区主要学习空间，开放安排和入馆要求以图书馆最新通知为准。",
      coords: { plan: [47, 49], "3d": [48, 47] },
    },
    {
      id: "mx-qingyun",
      name: "清韵轩餐厅",
      category: "生活",
      description: "明向校区学生餐厅之一，具体开放楼层和供餐安排会随学期调整。",
      coords: { plan: [79, 62], "3d": [69, 54] },
    },
    {
      id: "mx-jingya",
      name: "静雅轩餐厅",
      category: "生活",
      description: "明向校区学生餐厅之一，靠近学生生活区域。",
      coords: { plan: [70, 76], "3d": [65, 62] },
    },
    {
      id: "mx-ningxin",
      name: "宁馨轩餐厅",
      category: "生活",
      description: "明向校区学生餐厅之一，实际营业区域以当学期后勤通知为准。",
      coords: { plan: [29, 72], "3d": [43, 61] },
    },
    {
      id: "mx-activity",
      name: "学生活动中心",
      category: "服务",
      description: "校园活动和部分学生服务集中区域，迎新期间可能设置咨询点。",
      coords: { plan: [56, 83], "3d": [55, 68] },
    },
    {
      id: "mx-medical",
      name: "医疗服务点",
      category: "服务",
      description: "需要就医或健康咨询时，先查看校医院与学院发布的当日服务安排。",
      coords: { plan: [43, 84], "3d": [48, 68] },
    },
    {
      id: "mx-express",
      name: "快递生活服务区",
      category: "服务",
      description: "快递点位可能按运营情况调整，到校后再确认宿舍对应取件点。",
      coords: { plan: [87, 76], "3d": [75, 63] },
    },
  ],
  yingxi: [
    {
      id: "yx-gym",
      name: "体育馆",
      category: "运动",
      description: "位于迎西校区西侧，靠近田径运动场和逸夫楼。",
      coords: { plan: [23, 39], "3d": [32, 37] },
    },
    {
      id: "yx-zhilin-canteen",
      name: "智林餐厅",
      category: "生活",
      description: "迎西校区学生餐厅之一，位于运动场与清泽餐厅附近区域。",
      coords: { plan: [46, 46], "3d": [56, 38] },
    },
    {
      id: "yx-qingze-1-4",
      name: "清泽苑 1—4",
      category: "生活",
      description: "清泽苑南部学生公寓组团，具体入住楼号以学院安排为准。",
      coords: { plan: [76, 38], "3d": [78, 34] },
    },
    {
      id: "yx-qingze-5-8",
      name: "清泽苑 5—8",
      category: "生活",
      description: "清泽苑中部学生公寓组团，靠近清泽餐厅。",
      coords: { plan: [72, 28], "3d": [76, 29] },
    },
    {
      id: "yx-qingze-9-12",
      name: "清泽苑 9—12",
      category: "生活",
      description: "清泽苑北部学生公寓组团，靠近职工宿舍区域。",
      coords: { plan: [69, 18], "3d": [75, 21] },
    },
    {
      id: "yx-central-square",
      name: "中心广场",
      category: "服务",
      description: "迎西校区中轴线上的开敞空间，可作为寻找办公楼和教学区的参照。",
      coords: { plan: [54, 70], "3d": [51, 57] },
    },
    {
      id: "yx-motor",
      name: "电机馆",
      category: "教学",
      description: "位于校区东部实验教学区域，靠近结构试验室等建筑。",
      coords: { plan: [74, 68], "3d": [75, 57] },
    },
    {
      id: "yx-science",
      name: "科学楼",
      category: "教学",
      description: "位于迎西校区东南侧，是科研与教学建筑之一。",
      coords: { plan: [86, 84], "3d": [83, 65] },
    },
    {
      id: "yx-office",
      name: "办公楼",
      category: "服务",
      description: "位于校区南部中轴线附近，办理具体事务前请先核对部门所在房间。",
      coords: { plan: [68, 86], "3d": [65, 67] },
    },
    {
      id: "yx-hospital",
      name: "校医院",
      category: "服务",
      description: "位于迎西校区西南侧，门诊安排以校医院当日通知为准。",
      coords: { plan: [18, 84], "3d": [20, 63] },
    },
    {
      id: "yx-international",
      name: "国际教育交流学院",
      category: "教学",
      description: "位于迎西校区西侧，靠近外专楼和宿舍区域。",
      coords: { plan: [23, 52], "3d": [26, 47] },
    },
    {
      id: "yx-express",
      name: "迎西快递中心",
      category: "服务",
      description: "公开迎新信息曾将迎西快递中心标注在博学馆北侧附近，现场点位以运营安排为准。",
      coords: { plan: [68, 44], "3d": [67, 40] },
    },
  ],
  huyu: [
    {
      id: "hy-east-gate",
      name: "东侧入口",
      category: "校门",
      description: "靠近王村南路一侧的入口区域，实际开放情况以校区管理通知为准。",
      coords: { plan: [96, 49], "3d": [82, 58] },
    },
    {
      id: "hy-meihua",
      name: "梅花教室",
      category: "教学",
      description: "位于虎峪校区西北部，靠近图书馆与梅花教室组团。",
      coords: { plan: [38, 37], "3d": [57, 42] },
    },
    {
      id: "hy-zhiming",
      name: "致明楼",
      category: "教学",
      description: "位于校区北侧教学区域，是虎峪校区常用教学科研建筑之一。",
      coords: { plan: [48, 20], "3d": [77, 26] },
    },
    {
      id: "hy-zhiyuan-building",
      name: "致远楼 A、B",
      category: "教学",
      description: "位于虎峪校区西侧，靠近工程训练中心与同泽田径场。",
      coords: { plan: [22, 52], "3d": [78, 28] },
    },
    {
      id: "hy-geology",
      name: "地学馆",
      category: "教学",
      description: "位于校区东北部教学区，靠近同泽苑学生公寓。",
      coords: { plan: [68, 28], "3d": [68, 34] },
    },
    {
      id: "hy-training",
      name: "训练馆",
      category: "运动",
      description: "位于虎峪校区中部，立体图中为较醒目的蓝色多边形场馆。",
      coords: { plan: [56, 65], "3d": [49, 42] },
    },
    {
      id: "hy-engineering-training",
      name: "工程训练中心",
      category: "教学",
      description: "位于校区西南侧，靠近同泽田径场。",
      coords: { plan: [15, 68], "3d": [29, 50] },
    },
    {
      id: "hy-mining-lab",
      name: "采矿实验楼",
      category: "教学",
      description: "位于田径场东侧，周边集中分布采矿科研与实验建筑。",
      coords: { plan: [40, 55], "3d": [55, 47] },
    },
    {
      id: "hy-logistics",
      name: "后勤服务区",
      category: "服务",
      description: "位于校区东侧生活区域，具体业务窗口以校内通知为准。",
      coords: { plan: [92, 50], "3d": [74, 48] },
    },
    {
      id: "hy-service",
      name: "生活服务点",
      category: "服务",
      description: "靠近东侧学生生活区，超市、快递等具体点位可能调整。",
      coords: { plan: [90, 68], "3d": [78, 56] },
    },
    {
      id: "hy-dorm-south",
      name: "同泽苑南区",
      category: "生活",
      description: "虎峪校区南部学生公寓组团，具体入住楼号以学院安排为准。",
      coords: { plan: [48, 80], "3d": [41, 73] },
    },
    {
      id: "hy-dorm-east",
      name: "同泽苑东区",
      category: "生活",
      description: "虎峪校区东部学生公寓组团，靠近地学馆和运动区域。",
      coords: { plan: [84, 25], "3d": [40, 35] },
    },
    {
      id: "hy-square",
      name: "东侧校园广场",
      category: "服务",
      description: "东侧入口附近的开敞空间，可作为寻找智渊餐厅和后勤楼的参照。",
      coords: { plan: [80, 45], "3d": [80, 62] },
    },
  ],
};

Object.entries(extraCampusPoints).forEach(([campusId, points]) => {
  campuses[campusId].points.push(...points);
});

const officialCampusPhotoSource = {
  label: "太原理工大学官方校园导览",
  url: "https://www.tyut.edu.cn/xxgk1/xydl.htm",
};

const officialMingxiangConstructionSource = {
  label: "太原理工大学基本建设部",
  url: "https://jijianchu.tyut.edu.cn/info/1012/1245.htm",
};

const campusPhotoFallbacks = {
  mingxiang: [
    {
      src: "./assets/photos/mingxiang-lake.jpg",
      alt: "太原理工大学明向校区明向湖与校园建筑鸟瞰实景",
      caption: "明向湖与校园建筑鸟瞰",
      badge: "校区实景",
      exact: false,
      source: officialCampusPhotoSource,
    },
    {
      src: "./assets/photos/mingxiang-clocktower.jpeg",
      alt: "太原理工大学明向校区钟楼实景",
      caption: "明向校区钟楼",
      badge: "校区地标",
      exact: false,
      source: officialCampusPhotoSource,
    },
  ],
  yingxi: [
    {
      src: "./assets/photos/yingxi-campus.jpg",
      alt: "太原理工大学迎西校区校园实景",
      caption: "迎西校区校园中轴区域",
      badge: "校区实景",
      exact: false,
      source: officialCampusPhotoSource,
    },
    {
      src: "./assets/photos/yingxi-qingze-garden.jpg",
      alt: "太原理工大学迎西校区清泽园实景",
      caption: "迎西校区清泽园",
      badge: "区域参考",
      exact: false,
      source: officialCampusPhotoSource,
    },
  ],
  huyu: [
    {
      src: "./assets/photos/huyu-campus.jpg",
      alt: "太原理工大学虎峪校区林荫道路实景",
      caption: "虎峪校区林荫主路",
      badge: "校区实景",
      exact: false,
      source: officialCampusPhotoSource,
    },
    {
      src: "./assets/photos/huyu-campus-2.jpg",
      alt: "太原理工大学虎峪校区秋日校园实景",
      caption: "虎峪校区秋日校园",
      badge: "区域参考",
      exact: false,
      source: officialCampusPhotoSource,
    },
  ],
};

const facilityPhotoMap = {
  "mx-south-gate": [
    {
      src: "./assets/photos/mingxiang-south-gate.jpg",
      alt: "太原理工大学明向校区南门实景",
      caption: "明向校区南门",
      badge: "地点实景",
      exact: true,
      source: officialCampusPhotoSource,
    },
  ],
  "mx-east-gate": [
    {
      src: "./assets/photos/mingxiang-east-gate.jpg",
      alt: "太原理工大学明向校区东门实景",
      caption: "明向校区东门",
      badge: "地点实景",
      exact: true,
      source: officialCampusPhotoSource,
    },
  ],
  "mx-admin": [
    {
      src: "./assets/photos/mingxiang-main-building.jpg",
      alt: "太原理工大学明向校区主楼实景",
      caption: "明向校区主楼",
      badge: "建筑实景",
      exact: true,
      source: officialCampusPhotoSource,
    },
    {
      src: "./assets/photos/mingxiang-lake.jpg",
      alt: "太原理工大学明向校区主楼与明向湖鸟瞰实景",
      caption: "主楼与明向湖方位关系",
      badge: "校区鸟瞰",
      exact: false,
      source: officialCampusPhotoSource,
    },
  ],
  "mx-library": [
    {
      src: "./assets/photos/mingxiang-library.jpg",
      alt: "太原理工大学明向校区图书馆实景",
      caption: "明向图书馆",
      badge: "建筑实景",
      exact: true,
      source: officialCampusPhotoSource,
    },
    {
      src: "./assets/photos/mingxiang-datongfang.jpeg",
      alt: "太原理工大学明向校区大同坊与图书馆实景",
      caption: "大同坊视角下的图书馆",
      badge: "周边视角",
      exact: true,
      source: officialCampusPhotoSource,
    },
  ],
  "mx-east-dorm": [
    {
      src: "./assets/photos/mingxiang-dorm-service.jpg",
      alt: "太原理工大学明向校区学生宿舍与后勤服务区域实景",
      caption: "学生宿舍与后勤服务区域",
      badge: "生活区参考",
      exact: false,
      source: officialMingxiangConstructionSource,
    },
  ],
  "mx-west-dorm": [
    {
      src: "./assets/photos/mingxiang-dorm-service.jpg",
      alt: "太原理工大学明向校区学生宿舍与后勤服务区域实景",
      caption: "学生宿舍与后勤服务区域",
      badge: "生活区参考",
      exact: false,
      source: officialMingxiangConstructionSource,
    },
  ],
  "mx-stadium": [
    {
      src: "./assets/photos/mingxiang-lake.jpg",
      alt: "太原理工大学明向校区鸟瞰实景，画面下方可见运动区域",
      caption: "明向校区鸟瞰，画面下方为运动区域",
      badge: "方位参考",
      exact: false,
      source: officialCampusPhotoSource,
    },
  ],
  "yx-library": [
    {
      src: "./assets/photos/yingxi-library.jpeg",
      alt: "太原理工大学迎西校区图书馆实景",
      caption: "迎西校区图书馆",
      badge: "建筑实景",
      exact: true,
      source: officialCampusPhotoSource,
    },
    {
      src: "./assets/photos/yingxi-library-garden.jpg",
      alt: "太原理工大学迎西校区图书馆周边实景",
      caption: "图书馆周边校园环境",
      badge: "周边视角",
      exact: true,
      source: officialCampusPhotoSource,
    },
  ],
  "yx-machinery": [
    {
      src: "./assets/photos/yingxi-mechanical-hall.jpg",
      alt: "太原理工大学迎西校区机械馆实景",
      caption: "迎西校区机械馆",
      badge: "建筑实景",
      exact: true,
      source: officialCampusPhotoSource,
    },
  ],
  "yx-office": [
    {
      src: "./assets/photos/yingxi-admin-building.jpg",
      alt: "太原理工大学迎西校区行政楼实景",
      caption: "迎西校区行政楼",
      badge: "建筑实景",
      exact: true,
      source: officialCampusPhotoSource,
    },
  ],
  "yx-central-square": [
    {
      src: "./assets/photos/yingxi-main-building.png",
      alt: "太原理工大学迎西校区主楼与中轴区域实景",
      caption: "迎西主楼与中轴区域",
      badge: "区域参考",
      exact: false,
      source: officialCampusPhotoSource,
    },
  ],
  "yx-qingzeyuan": [
    {
      src: "./assets/photos/yingxi-qingze-garden.jpg",
      alt: "太原理工大学迎西校区清泽园实景",
      caption: "清泽园校园环境",
      badge: "周边参考",
      exact: false,
      source: officialCampusPhotoSource,
    },
  ],
  "hy-stadium": [
    {
      src: "./assets/photos/huyu-stadium-event-2.png",
      alt: "太原理工大学虎峪校区田径场学生活动实景",
      caption: "虎峪校区田径场活动现场",
      badge: "地点实景",
      exact: true,
      source: {
        label: "太原理工大学体育与健康工程学院",
        url: "https://tyxy.tyut.edu.cn/info/1175/11844.htm",
      },
    },
  ],
  "hy-meihua": [
    {
      src: "./assets/photos/huyu-plum-classroom-hq.png",
      alt: "太原理工大学虎峪校区梅花教室实景",
      caption: "虎峪校区梅花教室",
      badge: "建筑实景",
      exact: true,
      source: {
        label: "太原理工大学校友工作办公室",
        url: "https://xiaoyou.tyut.edu.cn/info/1078/1809.htm",
      },
    },
    {
      src: "./assets/photos/huyu-meihua-interior.png",
      alt: "太原理工大学虎峪校区梅花教室内部实景",
      caption: "梅花教室内部",
      badge: "室内实景",
      exact: true,
      source: {
        label: "太原理工大学地球科学与测绘工程学院",
        url: "https://dcxy.tyut.edu.cn/info/1371/6741.htm",
      },
    },
  ],
};

function getMapPointPhotos(point) {
  return facilityPhotoMap[point.id] || campusPhotoFallbacks[activeCampus] || [];
}

const checklistGroups = [
  {
    code: "DOCUMENTS",
    title: "证件资料",
    items: [
      ["notice", "录取通知书"],
      ["id-card", "身份证原件"],
      ["copies", "证件复印件（按通知要求）"],
      ["photos", "近期证件照与电子版"],
      ["bank-card", "本人银行卡与少量现金"],
      ["documents-folder", "透明文件袋 / 资料夹"],
    ],
  },
  {
    code: "DORM LIFE",
    title: "宿舍生活",
    items: [
      ["bedding", "床品（先确认学校统一安排）"],
      ["slippers", "拖鞋与洗漱用品"],
      ["hanger", "衣架与小夹子"],
      ["lock", "小锁 / 钥匙收纳"],
      ["medicine", "常用药与创可贴"],
      ["earplugs", "耳塞 / 眼罩"],
    ],
  },
  {
    code: "STUDY",
    title: "学习数码",
    items: [
      ["phone", "手机、充电器与充电宝"],
      ["computer", "电脑（按专业需求决定）"],
      ["power-strip", "合规插线板"],
      ["stationery", "笔、本子与文件夹"],
      ["headphones", "耳机"],
      ["backup", "重要文件云端备份"],
    ],
  },
  {
    code: "ON THE ROAD",
    title: "路上随身",
    items: [
      ["route", "下载离线地图 / 保存路线"],
      ["campus", "确认校区、学院和校门"],
      ["contact", "保存辅导员官方联系方式"],
      ["water", "水与简单食物"],
      ["weather", "查看太原 / 晋中天气"],
      ["label", "行李写姓名与联系电话"],
    ],
  },
];

const guides = [
  {
    category: "报到",
    title: "通知书拿到后，先做这四次核对",
    summary:
      "很多“报到当天的慌乱”，其实源于出发前没有把通知书、学院、校区和时间放在同一张纸上核对。",
    blocks: [
      {
        title: "核对一：校区",
        text: "看清是明向、迎西还是虎峪。不要只搜“太原理工大学”，导航可能把你带到另一个校区。",
      },
      {
        title: "核对二：日期",
        text: "新生时间以录取通知书和迎新系统为准，不套用在校生返校时间，也不轻信群聊截图。",
      },
      {
        title: "核对三：材料",
        text: "逐项照官方清单准备。需要复印件、照片或档案的，以通知原文为准。",
      },
      {
        title: "核对四：联系人",
        text: "保存学院、辅导员或迎新志愿者的官方联系方式，给家长也留一份。",
      },
      {
        title: "避坑提醒",
        text: "任何临时收费、转账或“代办入学”消息，都先通过学校官网或辅导员二次核验。",
        tip: true,
      },
    ],
  },
  {
    category: "交通",
    title: "三个校区，最重要的是别坐错方向",
    summary:
      "明向校区在晋中市榆次区，迎西和虎峪在太原市万柏林区。看起来只差一个校区名，实际可能是一次跨城折返。",
    blocks: [
      {
        title: "明向校区",
        text: "地址为晋中市榆次区大学街209号。太原南站、太原站和榆次站都有公开公交参考路线。",
      },
      {
        title: "迎西校区",
        text: "地址为太原市迎泽西大街79号，公共交通和生活配套相对集中。",
      },
      {
        title: "虎峪校区",
        text: "地址为太原市新矿院路18号，虽然与迎西相邻，仍要按通知指定入口到校。",
      },
      {
        title: "打车时怎么说",
        text: "把“学校全名 + 校区名 + 指定校门”一起给司机看，不只说“理工大”。",
      },
      {
        title: "实用动作",
        text: "提前截好校门、接待点和宿舍楼信息；手机没网时也能给司机或志愿者看。",
        tip: true,
      },
    ],
  },
  {
    category: "宿舍",
    title: "进宿舍后的第一小时，先检查再收拾",
    summary:
      "新环境里最有效率的顺序不是立刻拆完所有箱子，而是先完成检查、留证、铺床和充电。",
    blocks: [
      {
        title: "先拍照",
        text: "检查门锁、床板、桌椅、灯具和插座；发现损坏先拍照，再向公寓值班人员登记。",
      },
      {
        title: "再铺床",
        text: "把当天一定会用到的床品、洗漱和换洗衣物先拿出来，其他物品慢慢归位。",
      },
      {
        title: "用电规则",
        text: "宿舍功率限制和禁用电器以公寓公告为准，不使用来路不明或破损的插线板。",
      },
      {
        title: "贵重物品",
        text: "证件、现金和电脑不要随手放在门口；离开宿舍养成关门和断电检查习惯。",
      },
      {
        title: "床品怎么买",
        text: "学校若提供统一公寓用品，以当年通知为准。没确认尺寸与安排前，不建议买整套超大件。",
        tip: true,
      },
    ],
  },
  {
    category: "生活",
    title: "校园卡、吃饭和快递，不必一天全搞定",
    summary:
      "报到第一天信息密度很高，把“今晚必须用”和“本周办完”分开，能少排很多没必要的队。",
    blocks: [
      {
        title: "校园卡",
        text: "领取、激活与充值方式以当年学院通知或现场指引为准，遇到异常走校内服务渠道。",
      },
      {
        title: "第一顿饭",
        text: "先跟着志愿者或舍友找到最近的食堂；支付方式暂未开通时，准备备用移动支付。",
      },
      {
        title: "快递地址",
        text: "到宿舍后再问清对应快递点与标准地址，第一周不要急着一次买太多大件。",
      },
      {
        title: "生活采购",
        text: "水盆、纸巾等消耗品可到校后买；贵重数码产品尽量从正规渠道购买并保留凭证。",
      },
      {
        title: "新生防诈",
        text: "推销电话、上门办卡、低价课程和兼职群都要谨慎，凡是催你立刻付款的先停一下。",
        tip: true,
      },
    ],
  },
  {
    category: "学习",
    title: "电脑要不要现在买，先看专业需求",
    summary:
      "不同专业的软件、性能和上机条件差别很大。为了“开学一定要有”而仓促下单，反而容易买错。",
    blocks: [
      {
        title: "先问什么",
        text: "问清专业常用软件、是否依赖独立显卡、学院机房条件，以及高年级的实际使用场景。",
      },
      {
        title: "什么时候买",
        text: "已有可用设备就先带来；没有也可以等专业介绍和课程要求更明确后再决定。",
      },
      {
        title: "账号安全",
        text: "学校相关账号使用独立密码，开启设备锁屏，不把验证码发给任何自称“工作人员”的人。",
      },
      {
        title: "第一周学习",
        text: "先找到教室、图书馆和学院楼，记下课表中的校区、楼号与教室号。",
      },
      {
        title: "文件习惯",
        text: "证件扫描件、课程资料和照片及时备份，重要材料至少保留本地与云端两份。",
        tip: true,
      },
    ],
  },
  {
    category: "军训",
    title: "军训用品别全照短视频清单买",
    summary:
      "军训时间、服装和纪律以学校当年安排为准。最有用的准备通常很朴素：合脚、补水、防晒、休息。",
    blocks: [
      {
        title: "鞋与袜子",
        text: "鞋袜以舒适、合脚为先，新鞋提前磨合；是否允许鞋垫等辅助用品看具体要求。",
      },
      {
        title: "补水防晒",
        text: "准备水杯和适合自己的防晒用品；按要求补水，不用高糖饮料替代全天饮水。",
      },
      {
        title: "身体情况",
        text: "有既往病史、过敏或近期不适，按流程如实报告，不硬撑、不自行停药。",
      },
      {
        title: "作息",
        text: "军训前几天优先把睡眠调整好，少熬夜，鞋袜与第二天用品前一晚收好。",
      },
      {
        title: "别囤太多",
        text: "一次性买大量“军训神器”很容易闲置。先按正式通知准备，再根据实际需要补充。",
        tip: true,
      },
    ],
  },
  {
    category: "安全",
    title: "新生群里最像学长的人，也可能不是学长",
    summary:
      "报到季是诈骗高发期。判断消息是否可靠，不看头像和口吻，看它能不能在官方渠道被验证。",
    blocks: [
      {
        title: "收费消息",
        text: "学费、住宿费等只通过学校公布的正式渠道办理，不向个人账户或临时二维码转账。",
      },
      {
        title: "群聊文件",
        text: "谨慎打开陌生压缩包、安装包和不明小程序，不为了“激活账号”交出验证码。",
      },
      {
        title: "兼职与刷单",
        text: "凡是先交押金、培训费、会员费，或要求垫资刷单的，直接拒绝。",
      },
      {
        title: "行李安全",
        text: "车站和校门口不把手机、证件交给陌生人保管，不让陌生人代办报到。",
      },
      {
        title: "核验顺序",
        text: "先暂停付款，再找辅导员或学校官网核验；哪怕对方说“马上截止”，也不要被催促带走判断力。",
        tip: true,
      },
    ],
  },
  {
    category: "适应",
    title: "第一周不需要立刻成为“很会社交的人”",
    summary:
      "大学生活不是报到当天的一场表现赛。把基本生活安顿好，记住几张脸和几条路，就已经很不错。",
    blocks: [
      {
        title: "和舍友相处",
        text: "先把作息、空调、卫生和值日说清楚；具体、平静的沟通比长期忍耐有效。",
      },
      {
        title: "参加社团",
        text: "先了解时间投入与活动内容，不需要在招新第一天把所有感兴趣的组织都加入。",
      },
      {
        title: "想家很正常",
        text: "规律吃饭、睡觉、运动，多和熟悉的人联系；持续低落时主动寻求学院或心理支持。",
      },
      {
        title: "认识校园",
        text: "每天解锁一个地方：学院楼、食堂、超市、快递点、图书馆，几天后路线就会清楚。",
      },
      {
        title: "给自己一点时间",
        text: "别人看起来适应得快，不代表你落后。把注意力放回今天能完成的三件小事。",
        tip: true,
      },
    ],
  },
];

const faqs = [
  {
    question: "2026 级新生到底哪天报到？",
    answer:
      "请以录取通知书、太原理工大学本科招生网和学校正式迎新通知为准。学校公布的在校生返校日期不能自动等同于新生报到日期；购买车票前建议再核对一次。",
  },
  {
    question: "怎么确认自己在哪个校区？",
    answer:
      "优先看录取通知书和学院迎新通知。只根据专业往年所在校区、网络帖子或同学转述来判断都不够稳妥，因为学院安排和报到点位可能调整。",
  },
  {
    question: "床上用品一定要自己带吗？",
    answer:
      "不一定。学校历年会根据公寓安排发布相关说明，但品类、购买方式和当年政策可能变化。先查看通知书材料或学院通知，确认床型、尺寸和是否统一提供后再买。",
  },
  {
    question: "家长能不能进入校园和宿舍？",
    answer:
      "迎新期间的车辆、家长入校和宿舍管理可能根据当年安保与现场秩序调整。不要依据往年经验判断，出发前看学校通知，到校后服从现场安排。",
  },
  {
    question: "校园卡、宿舍和缴费遇到问题找谁？",
    answer:
      "先找学院接待点、辅导员或对应校内服务窗口。涉及付款时，只使用学校明确公布的正式平台，不通过个人转账解决所谓“系统异常”。",
  },
  {
    question: "这份手册是学校官网吗？",
    answer:
      "不是。本页是基于太原理工大学公开信息制作的非官方便民手册，适合用来建立准备框架。报到、缴费、住宿、军训与学籍等事项必须以学校官方通知为准。",
  },
];

const storageKey = "tyut-2026-checklist";
let activeCampus = "mingxiang";
let activeMapMode = "3d";
let activeCategory = "全部";
let completed = new Set(loadChecklist());
let activeMapCategory = "全部";
let activeMapQuery = "";
let activeMapPointId = campuses[activeCampus].defaultPoint;
let mapView = null;
let mapDrag = null;
let mapTouchEnabled = false;

function loadChecklist() {
  try {
    const stored = JSON.parse(localStorage.getItem(storageKey) || "[]");
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}

function saveChecklist() {
  try {
    localStorage.setItem(storageKey, JSON.stringify([...completed]));
  } catch {
    showToast("浏览器未允许保存，刷新后进度可能消失");
  }
}

function renderChecklist() {
  const container = document.querySelector("[data-checklist]");
  container.innerHTML = checklistGroups
    .map(
      (group) => `
        <article class="check-group reveal">
          <header>
            <span>${group.code}</span>
            <h3>${group.title}</h3>
          </header>
          <ul>
            ${group.items
              .map(([id, label]) => {
                const checked = completed.has(id);
                return `
                  <li class="check-item ${checked ? "is-checked" : ""}">
                    <label>
                      <input type="checkbox" data-check-id="${id}" ${checked ? "checked" : ""}>
                      <span class="custom-check" aria-hidden="true"></span>
                      <span>${label}</span>
                    </label>
                  </li>
                `;
              })
              .join("")}
          </ul>
        </article>
      `,
    )
    .join("");

  updateProgress();
}

function updateProgress() {
  const total = checklistGroups.reduce((sum, group) => sum + group.items.length, 0);
  const validIds = new Set(checklistGroups.flatMap((group) => group.items.map(([id]) => id)));
  completed = new Set([...completed].filter((id) => validIds.has(id)));
  const done = completed.size;
  const percent = total ? Math.round((done / total) * 100) : 0;
  const circumference = 327;

  document.documentElement.style.setProperty(
    "--progress-offset",
    String(circumference - (circumference * percent) / 100),
  );
  document.querySelectorAll("[data-progress-text]").forEach((node) => {
    node.textContent = `${done}/${total}`;
  });
  document.querySelectorAll("[data-progress-percent]").forEach((node) => {
    node.textContent = `${percent}%`;
  });
}

function renderCategoryFilters() {
  const categories = ["全部", ...new Set(guides.map((guide) => guide.category))];
  document.querySelector("[data-category-filters]").innerHTML = categories
    .map(
      (category) => `
        <button type="button" class="${category === activeCategory ? "is-active" : ""}" data-category="${category}">
          ${category}
        </button>
      `,
    )
    .join("");
}

function renderGuides() {
  const query = document.querySelector("[data-guide-search]").value.trim().toLowerCase();
  const visible = guides.filter((guide) => {
    const inCategory = activeCategory === "全部" || guide.category === activeCategory;
    const searchable = [
      guide.category,
      guide.title,
      guide.summary,
      ...guide.blocks.flatMap((block) => [block.title, block.text]),
    ]
      .join(" ")
      .toLowerCase();
    return inCategory && (!query || searchable.includes(query));
  });

  document.querySelector("[data-result-count]").textContent = String(visible.length);
  document.querySelector("[data-guide-list]").innerHTML = visible.length
    ? visible
        .map(
          (guide, index) => `
            <article class="guide-card reveal">
              <div class="guide-number">${String(index + 1).padStart(2, "0")}</div>
              <div class="guide-card-body">
                <div class="guide-meta">
                  <span class="guide-category">${guide.category.toUpperCase()} / GUIDE</span>
                </div>
                <h3>${guide.title}</h3>
                <p class="guide-summary">${guide.summary}</p>
                <div class="guide-blocks">
                  ${guide.blocks
                    .map(
                      (block) => `
                        <div class="guide-block ${block.tip ? "tip" : ""}">
                          <strong>${block.tip ? "★ " : ""}${block.title}</strong>
                          <p>${block.text}</p>
                        </div>
                      `,
                    )
                    .join("")}
                </div>
              </div>
            </article>
          `,
        )
        .join("")
    : `
        <div class="empty-results">
          <strong>暂时没搜到这条</strong>
          <p>换个关键词试试，例如“宿舍”“交通”“校园卡”或“军训”。</p>
        </div>
      `;

  observeReveals();
}

function renderFaqs() {
  document.querySelector("[data-faq-list]").innerHTML = faqs
    .map(
      (item, index) => `
        <article class="faq-item reveal">
          <button type="button" aria-expanded="false" aria-controls="faq-${index}" data-faq-button>
            <span class="faq-question"><i>${String(index + 1).padStart(2, "0")}</i>${item.question}</span>
            <span class="faq-toggle" aria-hidden="true">+</span>
          </button>
          <div class="faq-answer" id="faq-${index}" hidden>
            ${item.answer}
          </div>
        </article>
      `,
    )
    .join("");
}

const MAP_MIN_SCALE = 1;
const MAP_MAX_SCALE = 3.5;

function getMapElements() {
  return {
    panel: document.querySelector(".map-panel"),
    viewport: document.querySelector("[data-map-viewport]"),
    canvas: document.querySelector("[data-map-canvas]"),
    image: document.querySelector("[data-campus-map]"),
    points: document.querySelector("[data-map-points]"),
    scale: document.querySelector("[data-map-scale]"),
    zoomIn: document.querySelector("[data-map-zoom-in]"),
    zoomOut: document.querySelector("[data-map-zoom-out]"),
    resultCount: document.querySelector("[data-map-result-count]"),
    directory: document.querySelector("[data-map-directory]"),
  };
}

function getMapPointIcon(point) {
  if (/餐厅/.test(point.name)) return "食";
  if (/公寓|苑/.test(point.name)) return "住";
  if (/图书馆/.test(point.name)) return "图";
  if (/医院|医疗/.test(point.name)) return "医";
  if (/快递/.test(point.name)) return "快";
  if (/门|入口/.test(point.name)) return "门";
  if (/运动|体育|田径|篮球|训练馆/.test(point.name)) return "运";
  if (point.category === "服务") return "服";
  return "教";
}

function getVisibleMapPoints() {
  const campus = campuses[activeCampus];
  const query = activeMapQuery.trim().toLowerCase();
  return campus.points.filter((point) => {
    const categoryMatch =
      activeMapCategory === "全部" || point.category === activeMapCategory;
    const searchable =
      `${point.name} ${point.category} ${point.description}`.toLowerCase();
    return categoryMatch && (!query || searchable.includes(query));
  });
}

function updateMapPointDetail() {
  const campus = campuses[activeCampus];
  const point =
    campus.points.find((candidate) => candidate.id === activeMapPointId) || null;
  const category = document.querySelector("[data-map-detail-category]");
  const name = document.querySelector("[data-map-detail-name]");
  const description = document.querySelector("[data-map-detail-description]");
  const photoPanel = document.querySelector("[data-map-photo-panel]");
  const photoStatus = document.querySelector("[data-map-photo-status]");
  const photoGallery = document.querySelector("[data-map-photo-gallery]");

  if (!point) {
    category.textContent = "地图搜索";
    name.textContent = "没有匹配地点";
    description.textContent = "清除搜索条件或切换类别后再试。";
    if (photoPanel) photoPanel.hidden = true;
    if (photoGallery) photoGallery.innerHTML = "";
    return;
  }

  category.textContent = `${point.category} · 当前地点`;
  name.textContent = point.name;
  description.textContent = point.description;

  const photos = getMapPointPhotos(point);
  if (!photoPanel || !photoGallery) return;
  photoPanel.hidden = photos.length === 0;
  if (photoStatus) {
    const exactCount = photos.filter((photo) => photo.exact).length;
    photoStatus.textContent = exactCount
      ? `${exactCount} 张地点实景 · 官方来源`
      : "校区区域参考 · 官方来源";
  }
  photoGallery.innerHTML = photos
    .map((photo) => {
      const note = photo.exact
        ? "图片与当前地点对应，可结合立体图辨认建筑外观。"
        : `用于判断“${point.name}”所在校区的环境与方位，不代表该设施建筑本体。`;
      return `
        <article class="map-photo-card">
          <div class="map-photo-frame">
            <img src="${photo.src}" alt="${photo.alt}" loading="lazy" decoding="async">
            <span>${photo.badge}</span>
          </div>
          <div class="map-photo-copy">
            <strong>${photo.caption}</strong>
            <p>${note}</p>
            <a href="${photo.source.url}" target="_blank" rel="noreferrer">${photo.source.label} ↗</a>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderMapPoints() {
  const { points: layer, resultCount, directory } = getMapElements();
  if (!layer) return;
  const visible = getVisibleMapPoints();

  if (!visible.some((point) => point.id === activeMapPointId)) {
    activeMapPointId = visible[0]?.id || null;
  }

  layer.innerHTML = visible.length
    ? visible
        .map((point) => {
          const [x, y] = point.coords[activeMapMode] || point.coords.plan;
          const active = point.id === activeMapPointId;
          const icon = getMapPointIcon(point);
          return `
            <button
              class="map-point ${active ? "is-active" : ""}"
              type="button"
              role="radio"
              aria-checked="${active}"
              aria-label="查看${point.name}"
              data-map-point="${point.id}"
              data-map-point-category="${point.category}"
              style="left:${x}%;top:${y}%"
            >
              <span class="map-point-symbol" aria-hidden="true">${icon}</span>
              <span class="map-point-label">${point.name}</span>
            </button>
          `;
        })
        .join("")
    : `<div class="map-empty-message" role="status">没有匹配地点，换个关键词或类别试试。</div>`;

  if (directory) {
    directory.innerHTML = visible.length
      ? visible
          .map((point) => {
            const active = point.id === activeMapPointId;
            return `
              <button
                class="map-facility-item ${active ? "is-active" : ""}"
                type="button"
                data-map-directory-point="${point.id}"
              >
                <span class="map-facility-icon" data-category="${point.category}">${getMapPointIcon(point)}</span>
                <span><strong>${point.name}</strong><small>${point.category}</small></span>
                <i aria-hidden="true">→</i>
              </button>
            `;
          })
          .join("")
      : `<p class="map-facility-empty">没有符合当前条件的设施。</p>`;
  }

  if (resultCount) resultCount.textContent = `${visible.length} 个地点`;
  document.querySelectorAll("[data-map-category]").forEach((button) => {
    const active = button.dataset.mapCategory === activeMapCategory;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  updateMapPointDetail();
}

function clampMapPosition() {
  const { viewport } = getMapElements();
  if (!viewport || !mapView) return;
  const width = mapView.imageWidth * mapView.fitScale * mapView.scale;
  const height = mapView.imageHeight * mapView.fitScale * mapView.scale;
  mapView.x =
    width <= viewport.clientWidth
      ? (viewport.clientWidth - width) / 2
      : Math.min(0, Math.max(viewport.clientWidth - width, mapView.x));
  mapView.y =
    height <= viewport.clientHeight
      ? (viewport.clientHeight - height) / 2
      : Math.min(0, Math.max(viewport.clientHeight - height, mapView.y));
}

function applyMapView() {
  const { canvas, scale, zoomIn, zoomOut } = getMapElements();
  if (!canvas || !mapView) return;
  clampMapPosition();
  const absoluteScale = mapView.fitScale * mapView.scale;
  canvas.style.transform =
    `translate3d(${mapView.x}px, ${mapView.y}px, 0) scale(${absoluteScale})`;
  canvas.style.setProperty("--map-marker-scale", String(1 / absoluteScale));
  canvas.classList.toggle("is-map-zoomed", mapView.scale >= 1.55);
  if (scale) scale.textContent = `${Math.round(mapView.scale * 100)}%`;
  if (zoomIn) zoomIn.disabled = mapView.scale >= MAP_MAX_SCALE;
  if (zoomOut) zoomOut.disabled = mapView.scale <= MAP_MIN_SCALE;
}

function resetMapView() {
  const { viewport, canvas, image } = getMapElements();
  if (!viewport || !canvas || !image?.naturalWidth || !image?.naturalHeight) return;
  const imageWidth = image.naturalWidth;
  const imageHeight = image.naturalHeight;
  const fitScale = Math.min(
    viewport.clientWidth / imageWidth,
    viewport.clientHeight / imageHeight,
  );
  canvas.style.width = `${imageWidth}px`;
  canvas.style.height = `${imageHeight}px`;
  mapView = {
    imageWidth,
    imageHeight,
    fitScale,
    scale: 1,
    x: (viewport.clientWidth - imageWidth * fitScale) / 2,
    y: (viewport.clientHeight - imageHeight * fitScale) / 2,
  };
  applyMapView();
}

function zoomMap(delta, focalPoint) {
  const { viewport } = getMapElements();
  if (!viewport || !mapView) return;
  const nextScale = Math.min(
    MAP_MAX_SCALE,
    Math.max(MAP_MIN_SCALE, mapView.scale + delta),
  );
  if (nextScale === mapView.scale) return;
  const focal = focalPoint || {
    x: viewport.clientWidth / 2,
    y: viewport.clientHeight / 2,
  };
  const ratio = nextScale / mapView.scale;
  mapView.x = focal.x - (focal.x - mapView.x) * ratio;
  mapView.y = focal.y - (focal.y - mapView.y) * ratio;
  mapView.scale = nextScale;
  applyMapView();
}

function selectMapPoint(pointId, { focus = true } = {}) {
  const campus = campuses[activeCampus];
  const point = campus.points.find((candidate) => candidate.id === pointId);
  if (!point) return;
  activeMapPointId = point.id;
  renderMapPoints();

  if (!focus || !mapView) return;
  const { viewport } = getMapElements();
  const [xPercent, yPercent] = point.coords[activeMapMode] || point.coords.plan;
  mapView.scale = Math.max(mapView.scale, 1.55);
  const absoluteScale = mapView.fitScale * mapView.scale;
  mapView.x =
    viewport.clientWidth / 2 -
    mapView.imageWidth * (xPercent / 100) * absoluteScale;
  mapView.y =
    viewport.clientHeight * 0.52 -
    mapView.imageHeight * (yPercent / 100) * absoluteScale;
  applyMapView();
}

function loadActiveMapImage() {
  const campus = campuses[activeCampus];
  const { panel, image } = getMapElements();
  if (!image) return;
  panel?.classList.toggle("is-map-plan", activeMapMode === "plan");
  panel?.classList.toggle("is-map-3d", activeMapMode === "3d");
  const layerLabel = document.querySelector("[data-map-layer-label]");
  if (layerLabel) {
    layerLabel.textContent =
      activeMapMode === "3d" ? "立体设施标注层" : "平面精确标注层";
  }
  image.classList.add("is-switching");
  let completedLoad = false;
  const finish = () => {
    if (completedLoad || !image.naturalWidth) return;
    completedLoad = true;
    image.classList.remove("is-switching");
    resetMapView();
    renderMapPoints();
  };
  image.onload = finish;
  image.src = campus[activeMapMode];
  image.alt = `${campus.name}${activeMapMode === "plan" ? "平面图" : "立体图"}`;
  if (image.complete) window.setTimeout(finish, 0);
}

function switchCampus(id) {
  if (!campuses[id]) return;
  activeCampus = id;
  const campus = campuses[id];
  activeMapCategory = "全部";
  activeMapQuery = "";
  activeMapPointId = campus.defaultPoint;
  const search = document.querySelector("[data-map-search]");
  if (search) search.value = "";

  document.querySelectorAll("[data-campus]").forEach((button) => {
    const active = button.dataset.campus === id;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });

  document.querySelector("[data-campus-index]").textContent = campus.index;
  document.querySelector("[data-campus-en]").textContent = campus.en;
  document.querySelector("[data-campus-name]").textContent = campus.name;
  document.querySelector("[data-campus-address]").textContent = campus.address;
  document.querySelector("[data-campus-route]").textContent = campus.route;
  document.querySelector("[data-campus-tags]").innerHTML = campus.tags
    .map((tag) => `<span>${tag}</span>`)
    .join("");
  document.querySelector("[data-campus-nav]").href = campus.nav;
  loadActiveMapImage();
}

function switchMapMode(mode) {
  if (!["plan", "3d"].includes(mode)) return;
  activeMapMode = mode;
  document.querySelectorAll("[data-map-mode]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mapMode === mode);
  });
  loadActiveMapImage();
}

function openMapDialog() {
  const campus = campuses[activeCampus];
  const dialog = document.querySelector("[data-map-dialog]");
  const image = document.querySelector("[data-dialog-image]");
  image.src = campus[activeMapMode];
  image.alt = `${campus.name}${activeMapMode === "plan" ? "平面图" : "立体图"}`;
  document.querySelector("[data-dialog-caption]").textContent =
    `${campus.name} · ${activeMapMode === "plan" ? "平面图" : "立体图"}（可滚动查看原图）`;

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
    document.body.classList.add("is-dialog-open");
  } else {
    window.open(campus[activeMapMode], "_blank", "noopener");
  }
}

function closeMapDialog() {
  const dialog = document.querySelector("[data-map-dialog]");
  if (dialog.open) dialog.close();
  document.body.classList.remove("is-dialog-open");
}

function toggleMapTouchInteraction() {
  mapTouchEnabled = !mapTouchEnabled;
  const { panel } = getMapElements();
  const button = document.querySelector("[data-map-touch-toggle]");
  panel?.classList.toggle("is-map-touch-active", mapTouchEnabled);
  if (button) {
    button.setAttribute("aria-pressed", String(mapTouchEnabled));
    button.textContent = mapTouchEnabled ? "退出地图操作" : "开启地图操作";
  }
}

function setupMapInteractions() {
  const { viewport } = getMapElements();
  if (!viewport) return;

  const endDrag = (event) => {
    if (!mapDrag || (event?.pointerId && event.pointerId !== mapDrag.pointerId)) return;
    if (event?.pointerId && viewport.hasPointerCapture?.(event.pointerId)) {
      viewport.releasePointerCapture(event.pointerId);
    }
    mapDrag = null;
    viewport.classList.remove("is-dragging");
  };

  viewport.addEventListener("pointerdown", (event) => {
    if (event.target.closest("button, input, a")) return;
    const coarse = window.matchMedia?.("(hover: none) and (pointer: coarse)")?.matches;
    if (coarse && !mapTouchEnabled) return;
    if (!mapView) return;
    mapDrag = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      mapX: mapView.x,
      mapY: mapView.y,
    };
    viewport.setPointerCapture?.(event.pointerId);
    viewport.classList.add("is-dragging");
  });

  viewport.addEventListener("pointermove", (event) => {
    if (!mapDrag || event.pointerId !== mapDrag.pointerId || !mapView) return;
    mapView.x = mapDrag.mapX + event.clientX - mapDrag.startX;
    mapView.y = mapDrag.mapY + event.clientY - mapDrag.startY;
    applyMapView();
  });

  viewport.addEventListener("pointerup", endDrag);
  viewport.addEventListener("pointercancel", endDrag);

  viewport.addEventListener(
    "wheel",
    (event) => {
      if (!mapView || event.ctrlKey || event.metaKey) return;
      event.preventDefault();
      const bounds = viewport.getBoundingClientRect();
      zoomMap(event.deltaY < 0 ? 0.22 : -0.22, {
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top,
      });
    },
    { passive: false },
  );

  viewport.addEventListener("keydown", (event) => {
    if (!mapView || event.target.closest("button, input, a")) return;
    const pans = {
      ArrowLeft: [45, 0],
      ArrowRight: [-45, 0],
      ArrowUp: [0, 45],
      ArrowDown: [0, -45],
    };
    if (pans[event.key]) {
      event.preventDefault();
      mapView.x += pans[event.key][0];
      mapView.y += pans[event.key][1];
      applyMapView();
    } else if (event.key === "+" || event.key === "=") {
      event.preventDefault();
      zoomMap(0.25);
    } else if (event.key === "-") {
      event.preventDefault();
      zoomMap(-0.25);
    } else if (event.key === "0") {
      event.preventDefault();
      resetMapView();
    }
  });

  let resizeTimer;
  window.addEventListener("resize", () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(resetMapView, 140);
  });
}

function showToast(message) {
  const toast = document.querySelector("[data-toast]");
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

async function sharePage() {
  const data = {
    title: document.title,
    text: "太原理工大学 2026 新生实地手册：校区地图、报到攻略和行李清单。",
    url: window.location.href,
  };

  try {
    if (navigator.share) {
      await navigator.share(data);
      return;
    }
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(window.location.href);
      showToast("链接已复制，可以发给同学了");
      return;
    }
    window.prompt("复制下面的网址分享", window.location.href);
  } catch (error) {
    if (error?.name !== "AbortError") showToast("暂时无法分享，请复制浏览器地址");
  }
}

function handleClick(event) {
  const categoryButton = event.target.closest("[data-category]");
  if (categoryButton) {
    activeCategory = categoryButton.dataset.category;
    renderCategoryFilters();
    renderGuides();
    return;
  }

  const campusButton = event.target.closest("[data-campus]");
  if (campusButton) {
    switchCampus(campusButton.dataset.campus);
    return;
  }

  const modeButton = event.target.closest("[data-map-mode]");
  if (modeButton) {
    switchMapMode(modeButton.dataset.mapMode);
    return;
  }

  const mapCategoryButton = event.target.closest("[data-map-category]");
  if (mapCategoryButton) {
    activeMapCategory = mapCategoryButton.dataset.mapCategory;
    renderMapPoints();
    return;
  }

  const mapDirectoryButton = event.target.closest("[data-map-directory-point]");
  if (mapDirectoryButton) {
    selectMapPoint(mapDirectoryButton.dataset.mapDirectoryPoint);
    return;
  }

  const mapPointButton = event.target.closest("[data-map-point]");
  if (mapPointButton) {
    selectMapPoint(mapPointButton.dataset.mapPoint);
    return;
  }

  if (event.target.closest("[data-map-zoom-in]")) {
    zoomMap(0.25);
    return;
  }

  if (event.target.closest("[data-map-zoom-out]")) {
    zoomMap(-0.25);
    return;
  }

  if (event.target.closest("[data-map-reset]")) {
    resetMapView();
    return;
  }

  if (event.target.closest("[data-map-touch-toggle]")) {
    toggleMapTouchInteraction();
    return;
  }

  if (event.target.closest("[data-map-enlarge]")) {
    openMapDialog();
    return;
  }

  if (event.target.closest("[data-dialog-close]")) {
    closeMapDialog();
    return;
  }

  if (event.target.closest("[data-share]")) {
    sharePage();
    return;
  }

  if (event.target.closest("[data-print]")) {
    window.print();
    return;
  }

  if (event.target.closest("[data-clear-checklist]")) {
    if (!completed.size) {
      showToast("清单现在还是空的");
      return;
    }
    if (!window.confirm("确定清空全部勾选进度吗？")) return;
    completed.clear();
    saveChecklist();
    renderChecklist();
    observeReveals();
    showToast("清单进度已清空");
    return;
  }

  const faqButton = event.target.closest("[data-faq-button]");
  if (faqButton) {
    const expanded = faqButton.getAttribute("aria-expanded") === "true";
    faqButton.setAttribute("aria-expanded", String(!expanded));
    const panel = document.getElementById(faqButton.getAttribute("aria-controls"));
    if (panel) panel.hidden = expanded;
  }
}

function handleChange(event) {
  const checkbox = event.target.closest("[data-check-id]");
  if (!checkbox) return;

  if (checkbox.checked) completed.add(checkbox.dataset.checkId);
  else completed.delete(checkbox.dataset.checkId);

  checkbox.closest(".check-item")?.classList.toggle("is-checked", checkbox.checked);
  saveChecklist();
  updateProgress();
}

let revealObserver;
function observeReveals() {
  const elements = document.querySelectorAll(".reveal:not(.is-visible)");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
  }
  elements.forEach((element) => revealObserver.observe(element));
}

function observeSections() {
  if (!("IntersectionObserver" in window)) return;
  const links = [...document.querySelectorAll(".desktop-nav a")];
  const targets = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (!visible) return;
      links.forEach((link) => {
        link.classList.toggle("is-active", link.hash === `#${visible.target.id}`);
      });
    },
    { rootMargin: "-25% 0px -65% 0px" },
  );
  targets.forEach((target) => observer.observe(target));
}

function init() {
  renderChecklist();
  renderCategoryFilters();
  renderGuides();
  renderFaqs();
  setupMapInteractions();
  switchCampus(activeCampus);

  document.addEventListener("click", handleClick);
  document.addEventListener("change", handleChange);
  document.querySelector("[data-guide-search]").addEventListener("input", renderGuides);
  document.querySelector("[data-map-search]").addEventListener("input", (event) => {
    activeMapQuery = event.target.value;
    renderMapPoints();
  });
  document.querySelector("[data-map-dialog]").addEventListener("click", (event) => {
    if (event.target === event.currentTarget) closeMapDialog();
  });
  document.querySelector("[data-map-dialog]").addEventListener("close", () => {
    document.body.classList.remove("is-dialog-open");
  });

  observeReveals();
  observeSections();
}

init();
