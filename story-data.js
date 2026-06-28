var FROST_DEFAULT_STORY = window.FROST_DEFAULT_STORY = {
  start: "choice1",
  nodes: {
    choice1: {
      chapter: "第一章 废墟抉择",
      title: "废墟中的抉择",
      media: "./assets/scenes/safehouse-awakening.png",
      visual: "被冰雪覆盖的废墟中，远处传来微弱的呼救声。你握紧了手中的武器，资源所剩无几。",
      dialogue: "寒潮后的世界，每一个选择都关乎生死。救助他人可能会消耗宝贵的资源，但独自前行也许会让你失去最后的人性。",
      risk: "极高",
      countdown: "71:58:33",
      choices: [
        {
          text: "A: 救助被困的幸存者",
          next: "choice2",
          video: "./videos/02A.mp4",
          effects: { 人口: 8, 声望: 10, 资源: -5 }
        },
        {
          text: "B: 独自搜寻资源，保存实力",
          next: "choice2",
          video: "./videos/02B.mp4",
          effects: { 资源: 10, 声望: -5 }
        }
      ]
    },
    choice2: {
      chapter: "第二章 据点建设",
      title: "立足之地",
      media: "./assets/scenes/metro-shelter.png",
      visual: "你需要一个安全的据点来度过这个冬天。建立避难所可以收容更多幸存者，但占领军火库能让你拥有更强的武力。",
      dialogue: "在这个弱肉强食的世界，仁慈和力量，哪一个更重要？",
      risk: "高",
      countdown: "48:00:00",
      choices: [
        {
          text: "A: 建立避难所，收容难民",
          next: "choice3",
          video: "./videos/03A.mp4",
          effects: { 人口: 15, 声望: 5, 资源: -10 }
        },
        {
          text: "B: 占领军火库，武装自己",
          next: "choice3",
          video: "./videos/03B.mp4",
          effects: { 武力: 20, 资源: 15, 声望: -10 }
        }
      ]
    },
    choice3: {
      chapter: "第三章 势力扩张",
      title: "合纵连横",
      media: "./assets/scenes/warehouse-lockdown.png",
      visual: "周围的势力开始注意到你的存在。你可以选择与他们联合，也可以直接吞并他们。",
      dialogue: "盟友还是敌人？在这个末世，今天的盟友可能就是明天的叛徒。",
      risk: "高",
      countdown: "24:00:00",
      choices: [
        {
          text: "A: 联合抵御，共抗寒潮",
          next: "choice4",
          video: "./videos/04A.mp4",
          effects: { 声望: 20, 人口: 10 }
        },
        {
          text: "B: 吞并扩张，一统废墟",
          next: "choice4",
          video: "./videos/04B.mp4",
          effects: { 武力: 15, 资源: 20, 声望: -15 }
        }
      ]
    },
    choice4: {
      chapter: "第四章 最终抉择",
      title: "王者之路",
      media: "./assets/scenes/safehouse-awakening.png",
      visual: "你站在了废墟的顶端。是建立一个秩序井然的新世界，还是继续用武力征服一切？",
      dialogue: "这是你最后的抉择。你的决定将定义这片废墟的未来。",
      risk: "极高",
      countdown: "00:00:00",
      choices: [
        {
          text: "A: 建立秩序，重塑文明",
          next: "ending",
          video: "./videos/05A.mp4",
          effects: { 声望: 30, 人口: 20 },
          judge: true
        },
        {
          text: "B: 继续扩张，以武止戈",
          next: "ending",
          video: "./videos/05B.mp4",
          effects: { 武力: 30, 资源: 20 },
          judge: true
        }
      ]
    },
    "ending1": {
      chapter: "结局",
      title: "寒霜帝王",
      media: "./assets/scenes/metro-shelter.png",
      visual: "庇护所大厅里，数百人举起火把，冰封城市的中心升起你的旗帜。",
      dialogue: "从重生那天起，我就知道——我要建立一个帝国。现在，我做到了。人们尊称你为——寒霜帝王。",
      ending: "寒霜帝王",
      risk: "终局",
      countdown: "00:00:00",
      choices: [{ text: "重新开始", next: "choice1", reset: true }]
    },
    "ending2": {
      chapter: "结局",
      title: "暗影领主",
      media: "./assets/scenes/warehouse-lockdown.png",
      visual: "巡逻队在雪夜中低头让路，所有频道都沉默等待你的命令。",
      dialogue: "他们害怕我，这就够了。在绝对武力面前，没有人敢反抗。你成为了——暗影领主。",
      ending: "暗影领主",
      risk: "终局",
      countdown: "00:00:00",
      choices: [{ text: "重新开始", next: "choice1", reset: true }]
    },
    "ending3": {
      chapter: "结局",
      title: "商业之王",
      media: "./assets/scenes/warehouse-lockdown.png",
      visual: "药品、燃料和粮食在交易大厅里排成长龙，所有账本最终都指向你。",
      dialogue: "资源就是权力。而我，掌握了所有的资源。在废墟之上，你是无可争议的——商业之王。",
      ending: "商业之王",
      risk: "终局",
      countdown: "00:00:00",
      choices: [{ text: "重新开始", next: "choice1", reset: true }]
    },
    "ending4": {
      chapter: "结局",
      title: "孤狼幸存者",
      media: "./assets/scenes/safehouse-awakening.png",
      visual: "雪原上只有一串脚印，你背着包，独自走向下一座废城。",
      dialogue: "也许，孤独才是末日的常态。但你活下来了。在这片废墟上，活着本身就是一种胜利。",
      ending: "孤狼幸存者",
      risk: "终局",
      countdown: "00:00:00",
      choices: [{ text: "重新开始", next: "choice1", reset: true }]
    }
  }
};

var FROST_INITIAL_STATE = window.FROST_INITIAL_STATE = {
  nodeId: "choice1",
  selectedNode: "choice1",
  vip: false,
  stats: {
    资源: 20,
    人口: 10,
    武力: 15,
    声望: 5
  },
  relations: {},
  shelter: {},
  bag: [],
  achievements: [],
  endings: [],
  completedTasks: [],
  sessions: 1
};
