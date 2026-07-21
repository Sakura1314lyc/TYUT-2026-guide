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
        description: "位于校区东侧，平面图上很容易识别，可作为寻找东区楼宇的参照。",
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
      description: "位于虎峪校区中部，是平面图中较醒目的运动场馆。",
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
    title: "证件材料",
    items: [
      ["notice", "录取通知书"],
      ["exam-admission", "高考准考证（报到时可能需要）"],
      ["id-card", "身份证原件及复印件"],
      ["household-copy", "户口本本人页复印件（按需）"],
      ["league-relation", "团组织关系证明（团员证、介绍信等）"],
      ["student-file", "学籍档案（按学校要求邮寄或自带）"],
      ["photos", "一寸、二寸白/蓝/红底免冠照片若干"],
      ["loan-receipt", "生源地助学贷款回执单（如适用）"],
      ["hardship-proof", "家庭经济困难证明材料（如适用）"],
    ],
  },
  {
    code: "BEDDING",
    title: "床上用品",
    items: [
      ["mattress", "床垫、褥子（先确认床铺尺寸）"],
      ["bed-linen", "床单、被套、枕套各两套"],
      ["pillow", "枕头"],
      ["quilts", "夏凉被和被子"],
      ["wash-basin", "洗脸盆"],
      ["thermos", "暖壶"],
      ["power-strip", "约 3 米的合规排插（先确认宿舍规定）"],
    ],
  },
  {
    code: "WASH & CLOTHES",
    title: "洗漱与衣物",
    items: [
      ["oral-care", "牙刷、牙膏、牙杯"],
      ["face-care", "毛巾、洗面奶、洗脸巾"],
      ["bath-care", "沐浴露、洗发水、护发素"],
      ["laundry", "洗衣液、洗衣盆、洗澡篮"],
      ["skin-care", "护肤品、化妆品、小镜子、防撞贴等（按需）"],
      ["seasonal-clothes", "当季衣物及少量厚衣服"],
      ["personal-clothes", "内衣、袜子、鞋子等"],
    ],
  },
  {
    code: "DORM LIFE",
    title: "宿舍用品与电器",
    items: [
      ["cup", "水杯"],
      ["umbrella", "雨伞"],
      ["lock", "小锁"],
      ["tableware", "饭盒和碗"],
      ["storage", "收纳箱、衣架、粘钩"],
      ["cleaning-kit", "抹布、拖鞋、指甲剪工具包"],
      ["paper-bin", "卫生纸、卫生巾、垃圾桶（按需）"],
      ["wet-wipes-bags", "湿巾、垃圾袋"],
      ["sleep-tools", "耳塞、眼罩"],
      ["scissors", "剪刀等小工具"],
      ["phone-power", "手机、充电器、充电宝"],
      ["headphones", "耳机"],
      ["desk-lamp", "台灯"],
      ["small-fan", "充电小风扇（按宿舍规定使用）"],
    ],
  },
  {
    code: "MEDICINE",
    title: "医药用品",
    items: [
      ["cold-medicine", "感冒药、退烧药"],
      ["stomach-medicine", "肠胃药"],
      ["heatstroke-medicine", "防中暑药"],
      ["first-aid", "创可贴、碘伏棉签"],
      ["sports-spray", "运动损伤喷雾（按个人需要）"],
      ["personal-medicine", "个人常用处方药及用药说明"],
    ],
  },
  {
    code: "MILITARY TRAINING",
    title: "军训专题",
    items: [
      ["sunscreen", "防晒霜、晒后修复产品"],
      ["large-bottle", "大容量水杯"],
      ["sport-shoes", "舒适运动鞋及鞋垫"],
      ["mosquito-cooling", "花露水、清凉油"],
      ["belt", "腰带（军训裤偏大时备用）"],
      ["training-wipes", "小包湿巾、冰凉贴"],
      ["throat-heat", "润喉糖、藿香正气水"],
      ["glasses-bands", "眼镜腿防滑垫、小皮筋（按需）"],
    ],
  },
  {
    code: "STUDY",
    title: "学习用品",
    items: [
      ["computer", "笔记本电脑（按专业要求和个人需求）"],
      ["pens", "笔、笔记本、便签纸"],
      ["usb-drive", "U 盘"],
      ["file-folder", "文件夹"],
      ["glue-stick", "胶棒等文具"],
    ],
  },
];

const checklistGroupMeta = {
  DOCUMENTS: { icon: "证", note: "原件装进随身文件袋，复印件分开放，手机再留一份电子备份。" },
  BEDDING: { icon: "寝", note: "床垫、床帘和大件收纳先确认宿舍尺寸与管理要求，再决定自带或到校购买。" },
  "WASH & CLOTHES": { icon: "衣", note: "按第一周用量准备即可，洗护用品和换季衣物后续补充更省空间。" },
  "DORM LIFE": { icon: "舍", note: "电器必须符合宿舍功率和消防规定，大件用品先与室友沟通。" },
  MEDICINE: { icon: "药", note: "只带自己熟悉的常用药；处方药保留包装、说明和处方信息。" },
  "MILITARY TRAINING": { icon: "训", note: "重点是防晒、补水和合脚鞋垫，军训统一用品以学院通知为准。" },
  STUDY: { icon: "学", note: "电脑按专业需求购买，报到前不必为了“大学必备”一次买齐。" },
};

const quickGuideCategories = [
  "全部",
  "入学准备",
  "报到军训",
  "学习成长",
  "体育健康",
  "奖助发展",
  "校园生活",
  "组织实践",
  "毕业规划",
];

const quickGuides = [
  {
    id: 1,
    category: "入学准备",
    phase: "收到通知书后",
    title: "先核对录取信息，再安排车票和行李",
    summary:
      "把通知书、迎新系统、学院通知放在一起核对，先确认校区、报到时间和报到入口，再做后续安排。",
    blocks: [
      {
        title: "确认四项核心信息",
        text: "逐项确认姓名与专业、所属学院、报到校区、报到日期和时段。新生时间不要套用在校生返校安排，校区也不要只凭往年经验判断。",
      },
      {
        title: "认准通知优先级",
        text: "录取通知书、学校官网、迎新系统和学院辅导员的正式通知优先；群聊截图、个人公众号和往届经验只能作为参考。",
      },
      {
        title: "建立个人迎新清单",
        text: "把需要完成的缴费、信息采集、档案处理、团组织关系等事项抄到一张清单中，标出截止时间和办理渠道，完成一项勾掉一项。",
      },
      {
        title: "出发前再次复核",
        text: "购买车票和预订住宿前再核对一次校区与日期。若通知之间存在冲突，直接联系学院或招生部门确认，不根据猜测做决定。",
        tip: true,
      },
    ],
  },
  {
    id: 2,
    category: "入学准备",
    phase: "出发前一至两周",
    title: "证件、档案与照片这样分类最稳妥",
    summary:
      "原件随身、复印件分装、电子版备份。具体材料以录取通知书中的当年清单为准，不照搬往届数量。",
    blocks: [
      {
        title: "证件原件随身携带",
        text: "录取通知书、身份证等重要原件放入随身文件袋，不放进托运行李。涉及户口迁移、学籍档案的材料按本人实际情况和官方要求准备。",
      },
      {
        title: "纸质材料分袋整理",
        text: "将复印件、证件照、组织关系材料和其他表格分别装袋并贴标签。不要提前在空白处签名，也不要把整套材料交给陌生人代办。",
      },
      {
        title: "保留电子备份",
        text: "将证件扫描件、通知书照片和重要表格保存到手机与可信云盘。电子文件命名写清姓名、材料名称和日期，紧急时更容易找到。",
      },
      {
        title: "档案不要自行拆封",
        text: "若高中将密封档案交给本人，保持封条完整并按学校指定方式移交。邮寄、携带或线上转接要求可能不同，以当年通知为准。",
        tip: true,
      },
    ],
  },
  {
    id: 3,
    category: "入学准备",
    phase: "规划到校路线",
    title: "分清明向、迎西、虎峪三个校区",
    summary:
      "明向校区位于晋中市榆次区，迎西与虎峪位于太原市万柏林区。导航只输入“太原理工大学”很容易走错。",
    blocks: [
      {
        title: "明向校区",
        text: "常用地址为晋中市榆次区大学街 209 号。它与太原市区有一定距离，选择火车站、机场和住宿点时要把跨城通行时间算进去。",
      },
      {
        title: "迎西校区",
        text: "常用地址为太原市迎泽西大街 79 号。到校时仍需确认学院指定校门和接待点，不要只在学校周边任意下车。",
      },
      {
        title: "虎峪校区",
        text: "常用地址为太原市新矿院路 18 号。虽然与迎西校区相邻，但报到入口、宿舍和接待安排并不相同。",
      },
      {
        title: "给司机看的完整信息",
        text: "提前保存“学校全名＋校区名＋指定校门＋学院接待点”的截图，并下载离线地图。公开交通路线只作参考，迎新当天以实时导航和现场指引为准。",
        tip: true,
      },
    ],
  },
  {
    id: 4,
    category: "入学准备",
    phase: "出发前采购",
    title: "电脑、床品和生活用品不要一次买满",
    summary:
      "先带必需品，到校确认专业需求、床铺尺寸和公寓规则后再补购，通常比照着网络清单囤货更省钱。",
    blocks: [
      {
        title: "电脑先问专业需求",
        text: "确认常用软件、是否需要独立显卡、学院机房条件和课程开始使用电脑的时间。已有可用设备可以先带，新购设备不必只追求高配置。",
      },
      {
        title: "床品先看当年安排",
        text: "学校是否提供公寓用品、床铺尺寸及购买方式可能调整。未确认之前优先准备容易替换的基础床品，避免提前购买不合尺寸的大套件。",
      },
      {
        title: "消耗品到校补齐",
        text: "纸巾、衣架、收纳盒、水盆等通常可到校后购买。第一周先观察宿舍空间和舍友已有物品，公共用品可以商量后分担。",
      },
      {
        title: "电器必须符合公寓规定",
        text: "只携带正规合格的充电器和插线板。宿舍功率限制、禁用电器和空调使用方式以所在公寓公告为准，不依据其他校区或往届标准。",
        tip: true,
      },
    ],
  },
  {
    id: 5,
    category: "报到军训",
    phase: "报到当天",
    title: "从校门到宿舍的完整报到顺序",
    summary:
      "按“确认接待点—完成身份核验—领取材料—办理入住—查看后续通知”的顺序走，信息再多也不会乱。",
    blocks: [
      {
        title: "先找学院正式接待点",
        text: "进入指定校门后先看现场指示牌，向佩戴工作证的迎新人员确认学院位置。不要跟随没有明确身份的人离开接待区域。",
      },
      {
        title: "完成身份核验与签到",
        text: "按通知出示录取通知书、身份证等材料，通过迎新系统、企业微信或现场设备完成签到。具体平台和流程以学院当天安排为准。",
      },
      {
        title: "领取材料并核对数量",
        text: "领取校园卡、入住单、军训物品或其他资料时当场核对。暂时缺少某项材料时记下补办地点、负责人和办理时间。",
      },
      {
        title: "警惕报到现场收费",
        text: "正常缴费应通过学校公布的正式渠道。遇到个人收款码、上门办卡、代缴费用、付费拍照或强制推销，先停止操作并找辅导员核验。",
        tip: true,
      },
    ],
  },
  {
    id: 6,
    category: "报到军训",
    phase: "入校第一周",
    title: "校园卡、银行卡和学生证分别怎么用",
    summary:
      "三类卡片用途不同：校园卡负责校内消费和身份服务，银行卡常用于奖助与退款，学生证按学校流程发放和注册。",
    blocks: [
      {
        title: "校园卡",
        text: "常用于食堂、门禁、图书馆、洗浴或校内消费，部分功能可通过学校指定小程序使用虚拟卡。充值、挂失、补卡和退款均走校内正式渠道。",
      },
      {
        title: "银行卡",
        text: "学校可能统一安排合作银行办理，用于奖学金、助学金、勤工助学报酬或费用退回。合作银行和办理方式可能变化，未收到正式通知前不要向陌生链接提交身份证信息。",
      },
      {
        title: "学生证",
        text: "学生证通常由学院按学籍注册流程统一办理或发放。姓名、学号、乘车区间等信息要认真核对，丢失后按学院和教务要求补办。",
      },
      {
        title: "账户安全",
        text: "校园账号、支付密码和验证码不交给任何人。卡片丢失后先挂失，再联系对应服务窗口；不要相信所谓“内部人员远程解冻”。",
        tip: true,
      },
    ],
  },
  {
    id: 7,
    category: "报到军训",
    phase: "军训与体检",
    title: "军训准备、健康申报与入学体检",
    summary:
      "军训通常集中在入学初期，具体天数、训练项目、体检地点和请假规则都以 2026 年正式通知为准。",
    blocks: [
      {
        title: "优先准备真正实用的物品",
        text: "合脚鞋袜、舒适鞋垫、大容量水杯、防晒用品、纸巾和常用药品通常更实用。军训服装及配套物品按学校发放清单确认，不提前囤大量“神器”。",
      },
      {
        title: "身体情况如实报告",
        text: "有既往病史、近期受伤、过敏或正在用药，要在训练前按流程报告。出现胸闷、眩晕、心悸等明显不适立即示意，不硬撑。",
      },
      {
        title: "体检跟随统一安排",
        text: "入学体检可能包含身高体重、血压、视力与色觉、内外科检查及采血等项目。是否空腹、携带何种表格、在哪个校区检查，以当天通知为准。",
      },
      {
        title: "请假或免训必须走流程",
        text: "因健康原因不能参加部分项目时，准备正规医疗证明，联系辅导员并按学校流程申请。口头说明、私自缺席或代签到都不能替代正式审批。",
        tip: true,
      },
    ],
  },
  {
    id: 8,
    category: "学习成长",
    phase: "开课前",
    title: "课表、教材、教室和晚自习先理清",
    summary:
      "大一最容易出错的不是课程难度，而是看错校区、楼号、单双周或临时调课信息。",
    blocks: [
      {
        title: "学会读完整课表",
        text: "同时看课程名称、周次、星期、节次、校区、教学楼和教室号，特别留意单双周、实验课和临时调整。开课前一天再刷新一次。",
      },
      {
        title: "教材按课程要求购买",
        text: "是否统一订购、使用哪个版本、能否购买二手书，由任课教师或学院通知决定。未确认 ISBN 和版本前不要成套购买。",
      },
      {
        title: "晚自习按学院安排参加",
        text: "新生晚自习的时间、地点、考勤和请假方式可能因学院而异。与课程冲突或身体不适时，先联系班委和辅导员办理请假。",
      },
      {
        title: "提前走一遍上课路线",
        text: "第一周每节课至少提前十五分钟出发，先找到教学楼入口和教室。相近楼名、分区编号和跨校区课程尤其需要提前确认。",
        tip: true,
      },
    ],
  },
  {
    id: 9,
    category: "学习成长",
    phase: "选课阶段",
    title: "教务系统选课的标准操作",
    summary:
      "选课前先看培养方案和学院说明，明确哪些是必修、限选、任选，再进入系统操作，避免只凭课程名称做决定。",
    blocks: [
      {
        title: "选课前准备",
        text: "查看本专业培养方案、选课通知、开放时间和容量规则，列出第一选择与备选方案。体育课、通识课或任课教师是否可选，以当学期通知为准。",
      },
      {
        title: "进入正规入口",
        text: "优先从太原理工大学教务部网站进入教学管理系统。校外访问如需校园 VPN，按信息化部门的官方教程配置，不使用陌生人提供的代理。",
      },
      {
        title: "操作后保存证据",
        text: "系统繁忙时提前登录、避免反复刷新。提交后重新进入课表确认结果，并保留成功页面或课表截图，发现异常及时联系教学秘书。",
      },
      {
        title: "退改选要看截止时间",
        text: "试听不代表可以无限期退课。退选、补选和改选都有时间窗口，超过期限可能只能按教务流程申请处理。",
        tip: true,
      },
    ],
  },
  {
    id: 10,
    category: "学习成长",
    phase: "日常学习",
    title: "常用平台、校园网与 VPN 使用清单",
    summary:
      "不同课程会使用不同平台，不必一次安装所有软件；以任课教师、学校信息化部门和课程通知为准。",
    blocks: [
      {
        title: "课程学习平台",
        text: "常见平台可能包括学习通、智慧树、大学慕课、雨课堂或课程指定系统。首次登录后立即核对姓名、学号和班级，防止课程绑定错误。",
      },
      {
        title: "校园服务工具",
        text: "今日校园、企业微信、钉钉、PU 口袋校园、志愿汇、菜鸟等工具可能用于通知、活动或生活服务，是否启用因学院和年份而异。",
      },
      {
        title: "校园网与远程访问",
        text: "校园 Wi-Fi、统一身份认证和 VPN 使用同一或关联账号时，要设置独立强密码。校外访问教务、图书资源等系统，按学校信息化部门说明操作。",
      },
      {
        title: "只从正规渠道下载",
        text: "不要安装群聊中来源不明的“抢课软件”“校园网破解器”或描述文件。出现账号异常先改密码，再联系官方服务渠道。",
        tip: true,
      },
    ],
  },
  {
    id: 11,
    category: "学习成长",
    phase: "大一开始规划",
    title: "转专业、试验班与推免要提前看规则",
    summary:
      "这三条路径都看重长期积累，但每年的名额、年级限制和选拔标准可能调整，不能把往届条件当成承诺。",
    blocks: [
      {
        title: "转专业",
        text: "关注教务部和学院发布的年度通知，重点查看申请年级、成绩或排名要求、可转入专业、考核方式及不允许申请的情形。提交前与原学院和目标学院分别确认。",
      },
      {
        title: "宗复学院与试验班",
        text: "学校的试验班或拔尖培养项目可能采用单独选拔、小班培养、导师制和动态进出机制。招生范围、培养方向和后续分流以当年方案为准。",
      },
      {
        title: "推免与专项项目",
        text: "推免通常综合考察课程成绩、排名、外语、科研实践、纪律与体育等情况，部分专项项目另有要求。大一先把必修课学稳，不为“加分”盲目堆活动。",
      },
      {
        title: "保留每次官方文件",
        text: "将培养方案、选拔通知、成绩单和获奖证明按学期归档。政策变化时，以申请年度最新文件为准，网络经验帖只用于理解流程。",
        tip: true,
      },
    ],
  },
  {
    id: 12,
    category: "体育健康",
    phase: "每学期",
    title: "体育课、体测和校园跑如何安排",
    summary:
      "体育相关要求通常由课程、国家学生体质健康测试和校内跑步任务组成，具体次数、里程与计分规则每学期确认。",
    blocks: [
      {
        title: "体育课程",
        text: "低年级通常有体育必修或专项选修，不同年级安排可能不同。选课前看场地、时间、考核项目和健康要求，身体情况特殊时提前咨询教师。",
      },
      {
        title: "体质健康测试",
        text: "常见项目包括身高体重、肺活量、坐位体前屈、立定跳远、短跑、长跑，以及男生引体向上或女生仰卧起坐等，最终以学校当年测试安排为准。",
      },
      {
        title: "校园跑",
        text: "学校可能通过指定平台布置有效次数、里程、配速和打卡点要求。开始前阅读完整规则，跑后及时确认数据是否上传成功，不找人代跑。",
      },
      {
        title: "伤病和天气优先",
        text: "生病、受伤或遇到极端天气时不要硬撑，按课程要求办理请假、缓测或免测。补测时间和所需证明以体育部门通知为准。",
        tip: true,
      },
    ],
  },
  {
    id: 13,
    category: "奖助发展",
    phase: "大一全过程",
    title: "综合测评不是只看考试成绩",
    summary:
      "综合测评通常把学业、学生工作、创新实践、志愿服务等纳入评价，并影响评奖评优；细则由学院和年级具体执行。",
    blocks: [
      {
        title: "先找到本学院细则",
        text: "开学后保存学院发布的综合测评办法，了解各模块权重、认定范围、上限、材料格式和提交时间。不同学院之间不能直接套用。",
      },
      {
        title: "学业始终是基础",
        text: "按时完成课程、避免挂科、保持稳定成绩比临时堆活动更重要。竞赛、学生工作和志愿服务应建立在不影响正常学习的前提上。",
      },
      {
        title: "材料随做随存",
        text: "证书、获奖文件、活动签到、志愿时长和任职证明按学期分类保存，同时记录活动名称、主办单位、日期和本人角色。",
      },
      {
        title: "认定结果及时核对",
        text: "班级评议、学院审核和公示期间认真核对个人分数，发现漏项按规定提交证明和反馈，不到截止前才集中补材料。",
        tip: true,
      },
    ],
  },
  {
    id: 14,
    category: "奖助发展",
    phase: "评奖评优",
    title: "奖学金、荣誉和竞赛材料怎么准备",
    summary:
      "评定通常以成绩、综合表现和资格条件为基础。奖项名称、金额、名额与评审规则以申请当年的正式通知为准。",
    blocks: [
      {
        title: "区分奖项类型",
        text: "常见类别包括国家奖学金、国家励志奖学金、学校奖学金、社会专项奖学金和各类荣誉称号，适用对象与能否兼得可能不同。",
      },
      {
        title: "竞赛先确认认定范围",
        text: "参加竞赛前确认主办单位、赛事级别、学院是否认定以及团队成员排序规则。不要仅凭“加综测”“保研加分”的宣传报名高价培训。",
      },
      {
        title: "建立个人成果档案",
        text: "保存获奖证书、官网公示、参赛通知、作品材料和指导教师信息。团队项目还要记录本人具体贡献，便于后续审核。",
      },
      {
        title: "以公示和审核为准",
        text: "达到往年标准不等于当年一定获奖。按时提交申请，关注班级评议、学院审核和公示，有疑问在规定时间内反馈。",
        tip: true,
      },
    ],
  },
  {
    id: 15,
    category: "奖助发展",
    phase: "需要帮助时",
    title: "困难认定、助学金与勤工助学办理顺序",
    summary:
      "家庭经济困难学生可以通过学校正式渠道申请认定和资助。按真实情况申报，注意材料隐私，不向任何中介付费。",
    blocks: [
      {
        title: "困难认定",
        text: "通常经历个人申请、班级或年级评议、学院审核、公示和学校备案，并可能进行动态调整。准备材料时以当年通知列出的表格和证明为准。",
      },
      {
        title: "助学金与资助项目",
        text: "资助档次、金额、发放方式和适用条件可能年度调整。困难认定不等于自动获得所有资助，仍需关注每个项目的申请通知。",
      },
      {
        title: "勤工助学",
        text: "优先选择学校或学院发布的校内岗位，了解工作内容、时间、考核和报酬标准，避免影响课程。任何要求先缴押金的“勤工助学”都应警惕。",
      },
      {
        title: "保护个人隐私",
        text: "家庭收入、疾病和身份材料只提交给指定工作人员或系统。遭遇公开传播、索要无关信息或疑似诈骗时，及时联系辅导员和资助管理部门。",
        tip: true,
      },
    ],
  },
  {
    id: 16,
    category: "校园生活",
    phase: "入住当天",
    title: "宿舍检查、门禁、用电与报修",
    summary:
      "先检查设施并留证，再整理行李。门禁时间、用电功率、卫生检查和报修方式都以所在公寓的现场公告为准。",
    blocks: [
      {
        title: "入住先拍照检查",
        text: "检查门锁、床板、桌椅、灯具、插座、窗户和公共设施，发现缺损立即拍照并向值班人员登记，避免后续责任不清。",
      },
      {
        title: "门禁与卫生规则",
        text: "确认门禁、人脸或校园卡进入方式，以及晚归登记、访客、卫生检查和垃圾处理要求。不同校区、楼栋的规定可能不完全一致。",
      },
      {
        title: "安全用电",
        text: "不使用热得快、电锅等违规大功率电器，不私拉电线，不把插线板放在床铺或潮湿区域。离开宿舍前关闭不必要的电源。",
      },
      {
        title: "报修要留工单",
        text: "通过公寓值班室、宿管或学校指定系统报修，说明楼栋、房间、问题和联系方式。涉及公共安全的漏电、漏水或门锁故障要立即报告。",
        tip: true,
      },
    ],
  },
  {
    id: 17,
    category: "校园生活",
    phase: "日常吃饭",
    title: "三校区食堂快速认识",
    summary:
      "先记住所在校区的主要餐厅，再根据宿舍和教学楼位置选择。窗口、营业时间与菜品会调整，以现场为准。",
    blocks: [
      {
        title: "明向校区",
        text: "常见餐厅包括清韵轩、静雅轩、宁馨轩等。面积较大、档口较多，刚入学可先去离宿舍或教学楼最近的一处熟悉支付和就餐动线。",
      },
      {
        title: "迎西校区",
        text: "常见餐厅包括清泽、智林、良馔等。周边生活配套较集中，高峰期可以错开下课后的第一波人流。",
      },
      {
        title: "虎峪校区",
        text: "常见餐厅包括碧园、智渊、智渊汇等。跨到迎西就餐前要先确认校门通行和实际步行距离，不要只看地图直线距离。",
      },
      {
        title: "饮食与支付",
        text: "首次就餐准备校园卡与备用移动支付，留意清真窗口、过敏原和个人饮食需求。若发生消费异常，保存交易记录并到校园卡服务渠道处理。",
        tip: true,
      },
    ],
  },
  {
    id: 18,
    category: "校园生活",
    phase: "生活服务",
    title: "快递、洗衣、洗浴与校医院",
    summary:
      "这些服务的点位和开放时间最容易变化，到校后优先看现场标识、宿舍通知和地图中的最新信息。",
    blocks: [
      {
        title: "快递",
        text: "填写地址时写清校区、楼栋、姓名和手机号。明向校区常用邮编为 030600，迎西与虎峪常用邮编为 030024；具体取件点以快递通知为准。",
      },
      {
        title: "洗衣与洗浴",
        text: "确认楼内洗衣机、公共浴室或校内浴室的位置、支付方式和开放时段。共享设备使用前检查卫生和机器状态，异常扣费及时保留订单。",
      },
      {
        title: "就医与常用药",
        text: "提前找到所在校区医疗点，保存急救和辅导员联系方式。发热、受伤或突发不适应及时就医，不只在群里询问或自行叠加用药。",
      },
      {
        title: "位置变化怎么处理",
        text: "快递柜、浴室入口、维修点和医疗门诊可能临时调整。网站地图用于建立方向感，最终以校园现场标识和学校最新通知为准。",
        tip: true,
      },
    ],
  },
  {
    id: 19,
    category: "校园生活",
    phase: "校内出行",
    title: "小白龙、步行与跨校区出行",
    summary:
      "明向校园范围较大，可结合步行、校内电动接驳车和自行车安排；跨校区时预留充足时间。",
    blocks: [
      {
        title: "明向“小白龙”",
        text: "校内电动接驳车通常连接校门、宿舍、教学区、图书馆、食堂和快递区域。线路、票价、首末班和迎新期间安排可能变化，上车前现场确认。",
      },
      {
        title: "步行与骑行",
        text: "第一次上课提前走一遍路线，雨雪和大风天气增加通行时间。骑行遵守校园交通规则，不在宿舍、楼道或消防通道停放和充电。",
      },
      {
        title: "迎西与虎峪之间",
        text: "两校区地理位置相近，但校门、道路和开放情况会影响实际路线。跨校区上课或办事前查看导航并询问熟悉路线的同学。",
      },
      {
        title: "校区间往返",
        text: "学校班车或公共交通安排可能随学期调整，不能只看往年时刻表。重要考试、报到或活动应预留堵车和换乘时间。",
        tip: true,
      },
    ],
  },
  {
    id: 20,
    category: "组织实践",
    phase: "大一上学期",
    title: "社团、学生组织、PU 与志愿服务",
    summary:
      "先了解组织做什么、每周投入多少时间、成果如何认定，再决定是否加入，不必在招新期把日程全部填满。",
    blocks: [
      {
        title: "社团与学生组织",
        text: "参加宣讲时重点问日常工作、例会频率、考核方式和退出机制。选择一两个真正感兴趣的方向，比同时加入很多组织更可持续。",
      },
      {
        title: "PU 与活动记录",
        text: "部分活动可能通过 PU 口袋校园或学院指定平台报名、签到和记录。参加前确认认定规则，结束后检查学分、时长或活动记录是否完整。",
      },
      {
        title: "志愿服务",
        text: "通过学校、学院或正规平台参加，了解服务内容、保险、负责人和时长认定。不要购买志愿时长，也不要为签到泄露账号。",
      },
      {
        title: "入团、团组织关系与入党申请",
        text: "团组织关系转接、入团或入党申请均按所在团支部、党支部的正式流程进行。材料、培养考察和时间节点以组织通知为准，避免套用网络模板。",
        tip: true,
      },
    ],
  },
  {
    id: 21,
    category: "毕业规划",
    phase: "从第一学期开始",
    title: "学分、绩点、补考与重修必须看培养方案",
    summary:
      "毕业要求不是只看总分，还要完成各类课程、实践环节和学分结构。每学期核对一次，比大四集中补漏更安全。",
    blocks: [
      {
        title: "学分结构",
        text: "培养方案通常区分必修、限选、任选、实践等模块。课程通过不代表所有毕业要求都已满足，要按模块核对已修、在修和欠缺学分。",
      },
      {
        title: "绩点",
        text: "学校采用的绩点换算、平均绩点计算和毕业门槛以现行学籍管理规定及本人培养方案为准。第三方表格只能辅助估算，最终以教务系统为准。",
      },
      {
        title: "补考与重修",
        text: "课程不及格后是否有补考、何时重修、成绩如何记载及对评奖推免的影响，应查看当学期考试和学籍通知，并及时咨询教学秘书。",
      },
      {
        title: "每学期做一次审计",
        text: "保存成绩单和培养方案，检查挂科、缓考、免修、创新学分和实践环节。发现系统记录错误要尽早反馈，不等到毕业资格审核。",
        tip: true,
      },
    ],
  },
  {
    id: 22,
    category: "毕业规划",
    phase: "遇到特殊情况",
    title: "请假、学业预警、休学与毕业资格",
    summary:
      "长期缺课、健康问题或学业困难要尽早求助。很多事项都有明确申请期限和材料要求，拖延往往会缩小可选方案。",
    blocks: [
      {
        title: "日常请假",
        text: "先联系班委和辅导员，按学院要求在企业微信、学工系统或纸质流程中申请。离校时间较长时确认审批层级、销假方式和安全报备。",
      },
      {
        title: "学业预警",
        text: "收到预警后先核对欠缺课程和学分，与辅导员、教学秘书制定可执行的补修计划。不要因为担心被批评而回避联系。",
      },
      {
        title: "休学、复学与保留学籍",
        text: "因健康、创业或其他原因需要中断学习时，必须了解适用条件、办理时间、证明材料、最长年限及复学要求，不以口头请假替代学籍手续。",
      },
      {
        title: "毕业证与学位证",
        text: "毕业和学位授予可能分别审核课程、学分、绩点、纪律和其他条件。具体标准以本人入学年级培养方案及学校现行规定为准。",
        tip: true,
      },
    ],
  },
];

const guideSections = window.tyutFullGuide || [];
const guideCategories = ["全部", ...guideSections.map((section) => section.title)];
const guideSectionNotes = {
  basics: "认识学校、校区与学院",
  enrollment: "报到、军训与入学手续",
  study: "选课、校园网与学习路径",
  sports: "乐跑、体测与体育活动",
  awards: "综测、奖助与组织发展",
  "campus-life": "交通、宿舍与校园服务",
  leisure: "食堂、周边与休闲去处",
  graduation: "学分、学籍与毕业要求",
};
const guides = guideSections.flatMap((section) =>
  section.topics.map((topic) => ({
    ...topic,
    category: section.title,
    sectionId: section.id,
    sectionNumber: section.number,
    sectionEnglish: section.english,
  })),
);

const seniorProfiles = [
  {
    id: "rui",
    name: "Rui",
    location: "百慕大",
    major: "水利",
    photo: "./assets/seniors/rui-photo.jpg",
    qr: "./assets/seniors/rui-qr.jpg",
    strengths: ["爱学习", "搞抽象", "篮球", "瓦", "爱享受自由", "追求心中宁静"],
    tags: ["ENFJ", "万事通", "助人为乐", "被发好人卡", "爱搞抽象", "新生领路人"],
    bio: "大四老登，已入党、保研；转专业、奖学金、竞赛都有过众多经验。做过社团负责人、社团社长，爱打篮球，向往自由和说走就走的旅行，新生宝宝快来找学长玩。",
    roles: ["社团负责人", "社团社长", "新生答疑伙伴"],
    contact: "扫码添加微信",
  },
  {
    id: "left-ear",
    name: "左耳",
    location: "日本 八王子市",
    major: "自动化",
    photo: "./assets/seniors/left-ear-photo.jpg",
    qr: "./assets/seniors/left-ear-qr.jpg",
    strengths: ["聊天", "闲逛"],
    tags: ["INFP", "爱笑", "家教通", "有点子抽象", "讲话很慢聊天秒回", "吃出精品", "踩过雷会避雷"],
    bio: "学自动化的女生，来自山西长治，热爱爬山拍风景照。三言两语并不能代表真实的我。",
    roles: ["曾任心理委员", "现任社团团支书"],
    contact: "扫码添加微信",
  },
  {
    id: "platinum-maple",
    name: "白金与枫树~",
    location: "",
    major: "机械电子工程（卓越班）",
    photo: "./assets/seniors/platinum-photo.jpg",
    strengths: ["擅长理科学习", "擅长各种各样的体育运动"],
    tags: ["兼职", "家教", "期末速成"],
    bio: "精通校内外兼职，有丰富家教资源，经历非常丰富；期末一周复习高数 91、线代 88，已经入选入党积极分子。",
    roles: ["机械学院家教部部长"],
    contact: "微信号：zyq19735025939",
  },
  {
    id: "lonely",
    name: "孤妄のイケメン.",
    location: "重庆 巴南",
    major: "工程力学试验班",
    photo: "./assets/seniors/lonely-photo.jpg",
    qr: "./assets/seniors/lonely-qr.jpg",
    strengths: ["爱运动", "会打篮球", "爱闲逛"],
    tags: ["抽象幽默", "有时 i 有时 e", "网上冲浪", "运动"],
    bio: "来自云南，目前就读于工程力学试验班。个人生性活泼，对任何新鲜事物都有极强的好奇心与探索欲，平时无聊时就爱思考人生，喜欢与人交流沟通探索。",
    roles: [],
    contact: "微信号：15287091180",
  },
  {
    id: "sleeper",
    name: "一天睡11小时",
    location: "希腊",
    major: "数学与应用数学",
    photo: "./assets/seniors/sleeper-art.jpg",
    qr: "./assets/seniors/sleeper-qr.jpg",
    strengths: ["睡得比别人长", "精神状态不太正常"],
    tags: ["不戴耳机不能出门（日常生活需要 BGM）", "王者荣耀", "小区幼儿园篮球王", "老吃家", "离了耳机无法生存"],
    bio: "加权成绩排名专业前 10%，综测排名前 10%。喜欢数学、计算机，不喜欢墨守成规；享受美食，已经吃遍整个榆次大学城校内外的美味。喜欢散步、喜欢刺激、享受当下，说不定明天就死了呢。",
    roles: ["荟萃文创社团负责人之一"],
    contact: "扫码添加微信",
  },
  {
    id: "blue-bench",
    name: "蓝色板凳爱吃面",
    location: "",
    major: "应物2501",
    photo: "./assets/seniors/bluebench-source.png",
    photoClass: "is-bluebench",
    strengths: ["愿意学习一切新鲜事物"],
    tags: ["给我一颗回春丹", "逃出苦难向春山"],
    bio: "学业成绩位于专业前 10%，大一综合素质测评位于专业前 5%。愿意和新生交流转专业、课程学习、评奖评优、科创竞赛及学生工作经验。",
    roles: ["班委", "校级社团组织负责人"],
    contact: "微信号：_Lzy070909",
  },
  {
    id: "guide",
    name: "👠",
    location: "",
    major: "资勘",
    photo: "./assets/seniors/guide-motorcycle-source.png",
    photoClass: "is-guide-motorcycle",
    secondaryPhoto: "./assets/seniors/guide-photo.jpg",
    strengths: ["项目统筹", "政策解读", "校园资源对接", "问题落地解决"],
    tags: ["班级团支书", "校内政策全了解", "四年校区规划指导", "务实不空谈", "新生领路人"],
    bio: "身在理工，眼界不止限于课本。熟悉校内全部规则，吃透评优、保研、评奖所有路径。不做表面工作，只做真正能帮到别人的事。见过弯路，所以愿意为后来人铺平道路。凡事有分寸，做事有结果。",
    roles: ["班级团支书", "新生答疑负责人", "校园新生攻略负责人", "校区多部门对接人"],
    contact: "微信名：👠",
  },
  {
    id: "pogong",
    name: "pogong",
    location: "所罗门群岛",
    major: "安全工程转机器人工程",
    photo: "./assets/seniors/pogong-photo.jpg",
    qr: "./assets/seniors/pogong-qr.jpg",
    strengths: [],
    tags: ["i 人", "INFP", "网上冲浪 🏄"],
    bio: "山西人，有转专业、入团经验，参加了很多社团组织，也当过小队长，成绩不错 🙄。",
    roles: [],
    contact: "扫码添加微信",
  },
  {
    id: "sisyphus",
    name: "Sisyphus",
    location: "",
    major: "制药工程",
    photo: "./assets/seniors/sisyphus-source.png",
    photoClass: "is-sisyphus",
    qr: "./assets/seniors/sisyphus-qr.png",
    strengths: ["喜欢打瓦", "洲", "羽毛球"],
    tags: ["ENTP", "天秤座", "Z 青年团队负责人", "无畏契约", "伦敦未必有我鱿鱼"],
    bio: "我是制药工程大二学生，同时也是 Z 青年团队负责人。本人 ENTP 天秤座，想法跳脱，擅长沟通策划。平时课余爱打羽毛球，休闲时会玩无畏契约锻炼临场应变；既能静下心钻研专业实验，也很乐意和大家交流团队相关问题。",
    roles: ["Z 青年团队负责人"],
    contact: "扫码添加微信",
  },
  {
    id: "poet",
    name: "诗盅",
    location: "",
    major: "自动化",
    photo: "./assets/seniors/poet-photo.jpg",
    qr: "./assets/seniors/poet-qr.jpg",
    strengths: ["篮球", "摄影（佳能 650D）", "三角洲", "瓦", "延长假期的手段"],
    tags: ["只要胆子大，天天在放假", "不上早八之人"],
    bio: "24 届自动化班长，目前是入党积极分子。对于咱们学校入党、奖学金、转专业都比较了解，经手过具体的政策文件，有什么问题都可以来找我；学长有如何当班委的小技巧。喜欢打三角洲、瓦、CF、光遇、王者，也爱好摄影，设备是佳能 650D 的老单反。别欺负学长是个新手，欢迎来找学长玩。",
    roles: ["自动化班长", "入党积极分子"],
    contact: "扫码添加微信",
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
];

const storageKey = "tyut-2026-checklist";
let activeCampus = "mingxiang";
let activeCategory = "全部";
let completed = new Set(loadChecklist());
let activeMapCategory = "全部";
let activeMapQuery = "";
let activeMapPointId = campuses[activeCampus].defaultPoint;
let mapView = null;
let mapDrag = null;
let mapTouchEnabled = false;
let activeSeniorId = seniorProfiles[0].id;

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

function isChecklistOptional(label) {
  return /（[^）]*(?:按需|如适用|可能需要|先确认|按学校要求|按宿舍规定|按专业要求|个人需求|个人需要|备用)[^）]*）/.test(
    label,
  );
}

function renderChecklistItem([id, label]) {
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
}

function renderChecklistBucket(title, items, tone = "primary") {
  if (!items.length) return "";
  return `
    <section class="check-items-block is-${tone}">
      <header><strong>${title}</strong><span>${items.length} 项</span></header>
      <ul>${items.map(renderChecklistItem).join("")}</ul>
    </section>
  `;
}

function renderChecklist() {
  const container = document.querySelector("[data-checklist]");
  container.innerHTML = checklistGroups
    .map((group) => {
      const meta = checklistGroupMeta[group.code] || { icon: "✓", note: "按个人需要准备。" };
      const done = group.items.filter(([id]) => completed.has(id)).length;
      const preview = group.items.slice(0, 2).map(([, label]) => label.replace(/（.*?）/g, "")).join("、");
      const essentials = group.items.filter(([, label]) => !isChecklistOptional(label));
      const optional = group.items.filter(([, label]) => isChecklistOptional(label));
      return `
        <details class="check-group reveal" data-check-group>
          <summary>
            <span class="check-group-icon">${meta.icon}</span>
            <span class="check-group-copy">
              <small>${group.code}</small>
              <strong>${group.title}</strong>
              <em>${preview}${group.items.length > 2 ? ` 等 ${group.items.length} 项` : ""}</em>
            </span>
            <span class="check-group-progress">
              <b><i data-check-group-done>${done}</i> / ${group.items.length}</b>
              <span><i data-check-group-bar style="width:${(done / group.items.length) * 100}%"></i></span>
            </span>
            <i class="check-group-toggle" aria-hidden="true"></i>
          </summary>
          <div class="check-group-body">
            <p>${meta.note}</p>
            ${renderChecklistBucket("优先准备", essentials)}
            ${renderChecklistBucket("按需 / 到校确认", optional, "optional")}
          </div>
        </details>
      `;
    })
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
  document.querySelectorAll("[data-check-group]").forEach((group) => {
    const boxes = [...group.querySelectorAll("[data-check-id]")];
    const groupDone = boxes.filter((box) => box.checked).length;
    const doneNode = group.querySelector("[data-check-group-done]");
    const bar = group.querySelector("[data-check-group-bar]");
    if (doneNode) doneNode.textContent = String(groupDone);
    if (bar) bar.style.width = `${boxes.length ? (groupDone / boxes.length) * 100 : 0}%`;
    group.classList.toggle("is-complete", Boolean(boxes.length && groupDone === boxes.length));
  });
}

function renderCategoryFilters() {
  const overview = document.querySelector("[data-guide-overview]");
  if (overview) {
    overview.innerHTML = guideSections
      .map((section) => {
        const complete = section.topics.filter((topic) => topic.status === "complete").length;
        return `
          <button type="button" class="${section.title === activeCategory ? "is-active" : ""}" data-guide-category="${section.title}">
            <span>${section.number}</span>
            <div><small>${section.english}</small><strong>${section.title}</strong><p>${guideSectionNotes[section.id] || "按章节查看校园攻略"}</p></div>
            <em>${complete}/${section.topics.length} 篇</em>
          </button>
        `;
      })
      .join("");
  }
  document.querySelectorAll('[data-guide-category="全部"]').forEach((button) => {
    button.classList.toggle("is-active", activeCategory === "全部");
  });
}

function escapeGuideText(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatGuideText(value) {
  return escapeGuideText(value).replace(
    /(https?:\/\/[^\s，。；]+)/g,
    '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>',
  );
}

function getGuideExcerpt(guide) {
  if (!guide.lines.length && guide.images.length) {
    return `本篇收录 ${guide.images.length} 张资料图，点开后可查看完整图片。`;
  }
  if (!guide.lines.length) {
    return "该栏目目前尚未补充具体正文。";
  }

  const excerpt = guide.lines
    .filter((line) => line.type === "text")
    .slice(0, 3)
    .map((line) => line.text)
    .join(" ");
  return excerpt.length > 185 ? `${excerpt.slice(0, 185)}……` : excerpt;
}

function getGuideOutline(guide) {
  if (guide.code === "2.5") {
    return buildCampusCardReadingGroups(guide.lines).map((group) => group.title);
  }

  const headings = guide.lines
    .filter((line) => line.type === "header1" || line.type === "header2")
    .map((line) => line.text);

  if (headings.length) return headings.slice(0, 6).map(cleanGuideSectionTitle);

  return guide.lines
    .filter(
      (line) =>
        line.type === "text" &&
        line.text.length <= 24 &&
        (/[:：]$/.test(line.text) || /^[一二三四五六七八九十\d]+[、.．]/.test(line.text)),
    )
    .slice(0, 5)
    .map((line) => cleanGuideSectionTitle(line.text));
}

function cleanGuideSectionTitle(text) {
  return text
    .replace(/^[（(][一二三四五六七八九十\d]+[）)]\s*/, "")
    .replace(/^[一二三四五六七八九十]+[、.．]\s*/, "")
    .replace(/^\d+(?:[、．]|\.(?!\d))\s*/, "")
    .trim();
}

function isGuideSectionLabel(text) {
  if (text.length > 36) return false;
  return (
    /[:：]$/.test(text) ||
    /^[一二三四五六七八九十]+[、.．]\s*[^，。；]{2,30}$/.test(text) ||
    /^\d+(?:[、．]|\.(?!\d))\s*[^，。；]{2,30}$/.test(text) ||
    /^(报名流程|申请流程|推免基本条件|综合成绩计算|保研率数据|学期目标|每日上限|跑步打卡|跑步时长|上传时间|运动员|广播投稿|考试时间|注意事项|办理流程)$/.test(
      text,
    )
  );
}

function getGuideLineKind(line) {
  if (line.type === "link") return "reference";
  if (/^[^，。；：:]{2,14}[：:][^：:]+/.test(line.text)) return "fact";
  if (/^(?:[•●·✓✅]|[-—]\s)|^[（(]?[一二三四五六七八九十\d]+[）)、.．]/.test(line.text)) {
    return "point";
  }
  return "paragraph";
}

function mergeGuideTimelineItems(items) {
  const merged = [];

  items.forEach((item) => {
    const previous = merged[merged.length - 1];
    if (
      previous?.kind === "paragraph" &&
      /^\d{4}年(?:\s*[-—至]\s*\d{4}年)?$/.test(previous.text) &&
      item.kind === "paragraph"
    ) {
      merged[merged.length - 1] = {
        kind: "fact",
        text: `${previous.text}：${item.text}`,
      };
      return;
    }
    merged.push(item);
  });

  return merged;
}

function buildCampusCardReadingGroups(lines) {
  const groupMap = {
    overview: { title: "用途与电子卡", items: [] },
    services: { title: "常用服务入口", items: [] },
    repair: { title: "挂失与补卡", items: [] },
    locations: { title: "自助机分布", items: [] },
    centers: { title: "卡务中心位置", items: [] },
  };
  let active = "overview";

  lines.forEach((line) => {
    const text = line.text.trim();
    if (text === "校园一卡通使用指南") return;

    if (/^(充值大厅|查询大厅|服务大厅)[：:]/.test(text)) {
      active = "services";
    } else if (/卡(?:不小心)?丢|卡遗失|自助机功能/.test(text)) {
      active = "repair";
    } else if (/卡务中心.*位置/.test(text)) {
      active = "centers";
      return;
    } else if (
      active === "repair" &&
      /^(迎西校区|虎峪校区|明向校区)[：:]/.test(text)
    ) {
      active = "locations";
    }

    let kind = getGuideLineKind(line);
    if (kind === "paragraph" && /自助服务$/.test(text)) kind = "point";
    groupMap[active].items.push({ kind, text });
  });

  return Object.values(groupMap).filter((group) => group.items.length);
}

function buildGuideReadingGroups(guide) {
  const { lines } = guide;
  if (guide.code === "2.5") return buildCampusCardReadingGroups(lines);

  const groups = [];
  let current = { title: "", items: [] };

  const flush = () => {
    if (!current.items.length) {
      current = { title: "", items: [] };
      return;
    }
    current.items = mergeGuideTimelineItems(current.items);
    groups.push(current);
    current = { title: "", items: [] };
  };

  lines.forEach((line) => {
    if (line.type === "header1") {
      flush();
      current.title = cleanGuideSectionTitle(line.text);
      return;
    }
    if (line.type === "header2") {
      if (current.items.length) flush();
      current.title = cleanGuideSectionTitle(line.text);
      return;
    }
    if (isGuideSectionLabel(line.text)) {
      if (!current.title && !current.items.length) current.title = cleanGuideSectionTitle(line.text);
      else if (current.items.length) {
        flush();
        current.title = cleanGuideSectionTitle(line.text);
      } else current.items.push({ kind: "subheading", text: line.text });
      return;
    }
    current.items.push({ kind: getGuideLineKind(line), text: line.text });
  });
  flush();

  if (groups.length === 1 && !groups[0].title) groups[0].title = "核心内容";
  return groups;
}

function renderGuideReadingItem(item) {
  const text = formatGuideText(item.text);
  if (item.kind === "subheading") return `<h5>${text}</h5>`;
  if (item.kind === "reference") {
    return `<div class="guide-reading-reference"><span>资料链接</span><strong>${text}</strong></div>`;
  }
  if (item.kind === "fact") {
    const [label, ...rest] = item.text.split(/[：:]/);
    return `<div class="guide-reading-fact"><strong>${escapeGuideText(label)}</strong><p>${formatGuideText(rest.join("："))}</p></div>`;
  }
  if (item.kind === "point") {
    return `<div class="guide-reading-point"><i aria-hidden="true"></i><p>${text}</p></div>`;
  }
  return `<p class="guide-reading-paragraph">${text}</p>`;
}

function renderGuideArticle(guide) {
  const groups = buildGuideReadingGroups(guide);
  return `
    <div class="guide-reading-grid">
      ${groups
        .map((group, index) => {
          const wide = group.items.length <= 1 || group.items.length > 8 || groups.length === 1;
          return `
            <section class="guide-reading-section ${wide ? "is-wide" : ""}">
              <header>
                <span>${String(index + 1).padStart(2, "0")}</span>
                <h4>${escapeGuideText(group.title || "补充说明")}</h4>
              </header>
              <div class="guide-reading-content">
                ${group.items.map(renderGuideReadingItem).join("")}
              </div>
            </section>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderGuideCard(guide) {
  const outline = getGuideOutline(guide);
  const contentCount = guide.lines.length + guide.images.length;

  return `
    <details class="guide-card reveal" id="guide-${guide.id}">
      <summary class="guide-card-summary">
        <span class="guide-card-copy">
          <span class="guide-card-meta">
            <b class="guide-number">${escapeGuideText(guide.code)}</b>
            <small>${escapeGuideText(guide.category)}</small>
            <small>${contentCount ? `${guide.lines.length} 条内容${guide.images.length ? ` / ${guide.images.length} 图` : ""}` : "待补充"}</small>
          </span>
          <strong>${escapeGuideText(guide.title)}</strong>
          <em>${formatGuideText(getGuideExcerpt(guide))}</em>
        </span>
        <span class="guide-card-action">
          <span class="guide-card-state ${guide.status === "complete" ? "is-complete" : "is-placeholder"}">
            ${guide.status === "complete" ? "阅读" : "待补充"}
          </span>
          <i class="guide-card-toggle" aria-hidden="true"></i>
        </span>
      </summary>
      <div class="guide-card-body">
        <div class="guide-reading-head">
          <div><small>${escapeGuideText(guide.code)} / READING MODE</small><strong>${escapeGuideText(guide.title)}</strong></div>
          <button type="button" data-guide-collapse-card>收起本篇</button>
        </div>
        ${
          guide.needsVerification
            ? '<p class="guide-verify-note">含日期、金额或规则等时效信息，办理前请核对学校与学院最新通知。</p>'
            : ""
        }
        ${
          outline.length
            ? `<div class="guide-outline" aria-label="本篇目录">${outline
                .map((item) => `<span>${escapeGuideText(item)}</span>`)
                .join("")}</div>`
            : ""
        }
          ${
            guide.lines.length
              ? renderGuideArticle(guide)
              : !guide.images.length
                ? `
                <div class="guide-placeholder">
                  <strong>该栏目暂未补充正文</strong>
                  <p>后续内容更新后会继续归入「${escapeGuideText(guide.title)}」。</p>
                </div>
              `
                : ""
          }
          ${
            guide.images.length
              ? `
                <section class="guide-appendix">
                  <header><small>REFERENCE</small><strong>原文资料图</strong><span>${guide.images.length} 张</span></header>
                  <div class="guide-image-gallery">
                    ${guide.images
                      .map(
                        (image) => `
                          <a href="${escapeGuideText(image.src)}" target="_blank" rel="noopener">
                            <img src="${escapeGuideText(image.src)}" alt="${escapeGuideText(image.alt)}" loading="lazy">
                            <span>${escapeGuideText(image.alt)}</span>
                          </a>
                        `,
                      )
                      .join("")}
                  </div>
                </section>
              `
              : ""
          }
      </div>
    </details>
  `;
}

function renderGuides() {
  const query = document.querySelector("[data-guide-search]").value.trim().toLowerCase();
  const visible = guides.filter((guide) => {
    const inCategory = activeCategory === "全部" || guide.category === activeCategory;
    const searchable = [
      guide.category,
      guide.code,
      guide.title,
      guide.sourceTitle,
      ...guide.lines.map((line) => line.text),
    ]
      .join(" ")
      .toLowerCase();
    return inCategory && (!query || searchable.includes(query));
  });

  document.querySelector("[data-result-count]").textContent = String(visible.length);
  const visibleIds = new Set(visible.map((guide) => guide.id));
  const chapterMarkup = guideSections
    .map((section) => {
      const sectionGuides = guides.filter(
        (guide) => guide.sectionId === section.id && visibleIds.has(guide.id),
      );
      if (!sectionGuides.length) return "";
      const shouldOpen = Boolean(query || activeCategory !== "全部");

      return `
        <details class="guide-chapter" ${shouldOpen ? "open" : ""}>
          <summary class="guide-chapter-header reveal">
            <span>${section.number}</span>
            <div>
              <small>${section.english}</small>
              <h3>${section.title}</h3>
            </div>
            <p>${sectionGuides.length} / ${section.topics.length} 个栏目</p>
            <i aria-hidden="true"></i>
          </summary>
          <div class="guide-chapter-list">
            ${sectionGuides.map(renderGuideCard).join("")}
          </div>
        </details>
      `;
    })
    .join("");

  document.querySelector("[data-guide-list]").innerHTML = visible.length
    ? chapterMarkup
    : `
        <div class="empty-results">
          <strong>暂时没搜到这条</strong>
          <p>换个关键词试试，例如“试验班”“食堂”“综测”“小白龙”或“绩点”。</p>
        </div>
      `;

  observeReveals();
}

function renderSeniorDirectory() {
  const directory = document.querySelector("[data-senior-directory]");
  const profileView = document.querySelector("[data-senior-profile]");
  if (!directory || !profileView) return;

  const activeIndex = Math.max(
    0,
    seniorProfiles.findIndex((profile) => profile.id === activeSeniorId),
  );
  const activeProfile = seniorProfiles[activeIndex];

  directory.innerHTML = seniorProfiles
    .map((profile, index) => {
      const isActive = profile.id === activeProfile.id;
      const photoClass = profile.photoClass ? ` ${profile.photoClass}` : "";
      return `
        <button
          class="senior-person${isActive ? " is-active" : ""}"
          type="button"
          data-senior-id="${escapeGuideText(profile.id)}"
          aria-pressed="${isActive}"
          aria-label="查看 ${escapeGuideText(profile.name)} 的资料"
        >
          <span class="senior-person-number">${String(index + 1).padStart(2, "0")}</span>
          <span class="senior-avatar${photoClass}" style="background-image: url('${escapeGuideText(profile.photo)}')" role="img" aria-label="${escapeGuideText(profile.name)}的头像"></span>
          <span class="senior-person-copy">
            <strong>${escapeGuideText(profile.name)}</strong>
            <small>${escapeGuideText(profile.major)}</small>
          </span>
          <span class="senior-person-arrow" aria-hidden="true">↗</span>
        </button>
      `;
    })
    .join("");

  const photoClass = activeProfile.photoClass ? ` ${activeProfile.photoClass}` : "";
  const photoGalleryMarkup = `
    <div class="senior-photo-gallery${activeProfile.secondaryPhoto ? " has-multiple" : ""}">
      <div class="senior-selected-photo${photoClass}" style="background-image: url('${escapeGuideText(activeProfile.photo)}')" role="img" aria-label="${escapeGuideText(activeProfile.name)}的照片"></div>
      ${
        activeProfile.secondaryPhoto
          ? `<div class="senior-selected-photo" style="background-image: url('${escapeGuideText(activeProfile.secondaryPhoto)}')" role="img" aria-label="${escapeGuideText(activeProfile.name)}的补充照片"></div>`
          : ""
      }
    </div>
  `;
  const contactMarkup = activeProfile.qr
    ? `
        <div class="senior-contact-qr">
          <a
            class="senior-contact-code"
            href="${escapeGuideText(activeProfile.qr)}"
            target="_blank"
            rel="noopener"
            style="background-image: url('${escapeGuideText(activeProfile.qr)}')"
            aria-label="打开${escapeGuideText(activeProfile.name)}的微信二维码原图"
          ></a>
          <div>
            <span>WECHAT CONTACT</span>
            <strong>${escapeGuideText(activeProfile.contact)}</strong>
            <small>扫描或点击二维码打开原图，添加时请说明“2026 新生手册”。</small>
          </div>
        </div>
      `
    : `
        <div class="senior-contact-text">
          <span>CONTACT</span>
          <strong>${escapeGuideText(activeProfile.contact)}</strong>
        </div>
      `;

  profileView.innerHTML = `
    <article class="senior-selected-media">
      <div class="senior-selected-topline">
        <span>SELECTED MENTOR / ${String(activeIndex + 1).padStart(2, "0")}</span>
        ${activeProfile.location ? `<small>${escapeGuideText(activeProfile.location)}</small>` : ""}
      </div>
      ${photoGalleryMarkup}
      ${contactMarkup}
    </article>
    <article class="senior-selected-info">
      <header>
        <div>
          <span class="senior-profile-kicker">MEET THE SENIOR</span>
          <h3>${escapeGuideText(activeProfile.name)}</h3>
          <p>${escapeGuideText(activeProfile.major)}</p>
        </div>
        <b>${String(activeIndex + 1).padStart(2, "0")}</b>
      </header>
      ${
        activeProfile.strengths.length
          ? `
              <section class="senior-info-block">
                <span class="senior-info-label">特长</span>
                <div class="senior-strength-list">
                  ${activeProfile.strengths.map((item) => `<span>${escapeGuideText(item)}</span>`).join("")}
                </div>
              </section>
            `
          : ""
      }
      <section class="senior-info-block">
        <span class="senior-info-label">个人介绍</span>
        <p class="senior-profile-bio">${escapeGuideText(activeProfile.bio)}</p>
      </section>
      ${
        activeProfile.roles.length
          ? `
              <section class="senior-info-block senior-role-block">
                <span class="senior-info-label">职务</span>
                <ul>
                  ${activeProfile.roles.map((role) => `<li>${escapeGuideText(role)}</li>`).join("")}
                </ul>
              </section>
            `
          : ""
      }
      ${
        activeProfile.tags.length
          ? `<div class="senior-tag-list">${activeProfile.tags.map((tag) => `<span># ${escapeGuideText(tag)}</span>`).join("")}</div>`
          : ""
      }
    </article>
  `;
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
        ? "图片与当前地点对应，可结合平面图和实景照片辨认建筑。"
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
          const [x, y] = point.coords.plan;
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
  const [xPercent, yPercent] = point.coords.plan;
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
  panel?.classList.add("is-map-plan");
  const layerLabel = document.querySelector("[data-map-layer-label]");
  if (layerLabel) layerLabel.textContent = "平面设施标注层";
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
  image.src = campus.plan;
  image.alt = `${campus.name}平面图`;
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

function openMapDialog() {
  const campus = campuses[activeCampus];
  const dialog = document.querySelector("[data-map-dialog]");
  const image = document.querySelector("[data-dialog-image]");
  image.src = campus.plan;
  image.alt = `${campus.name}平面图`;
  document.querySelector("[data-dialog-caption]").textContent =
    `${campus.name} · 平面图（可滚动查看原图）`;

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
    document.body.classList.add("is-dialog-open");
  } else {
    window.open(campus.plan, "_blank", "noopener");
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
    text: "人手一本——太原理工大学 2026 新生必看手册：校区地图、报到攻略和行李清单。",
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
  const seniorButton = event.target.closest("[data-senior-id]");
  if (seniorButton) {
    activeSeniorId = seniorButton.dataset.seniorId;
    renderSeniorDirectory();
    document.querySelector("[data-senior-profile]")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    return;
  }

  const expandButton = event.target.closest("[data-guide-expand]");
  if (expandButton) {
    document.querySelectorAll("[data-guide-list] .guide-card, [data-guide-list] .guide-chapter").forEach((detail) => {
      detail.open = false;
    });
    showToast("已收起全部攻略");
    return;
  }

  if (event.target.closest("[data-guide-reset]")) {
    activeCategory = "全部";
    const search = document.querySelector("[data-guide-search]");
    if (search) search.value = "";
    renderCategoryFilters();
    renderGuides();
    document.querySelector(".guide-directory")?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  const collapseCardButton = event.target.closest("[data-guide-collapse-card]");
  if (collapseCardButton) {
    const card = collapseCardButton.closest(".guide-card");
    if (card) {
      card.open = false;
      card.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    return;
  }

  const categoryButton = event.target.closest("[data-guide-category]");
  if (categoryButton) {
    activeCategory = categoryButton.dataset.guideCategory;
    renderCategoryFilters();
    renderGuides();
    document.querySelector("[data-guide-list]")?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  const campusButton = event.target.closest("[data-campus]");
  if (campusButton) {
    switchCampus(campusButton.dataset.campus);
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
  renderSeniorDirectory();
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
