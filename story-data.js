var FROST_DEFAULT_STORY = window.FROST_DEFAULT_STORY = {
  start: "scene1",
  nodes: {
    scene1: {
      chapter: "场景1",
      title: "开场 - 末日寒潮降临",
      media: "./assets/scenes/safehouse-awakening.png",
      visual: "冰雾掠过破碎街道，安全屋的窗玻璃结出白霜，倒计时停在寒潮爆发前三天。",
      narration: "2087年，全球寒潮灾难后第3年。我重生了，回到了这一切开始的地方。这一次，我要改变命运。",
      lines: [
        { speaker: "陆寒", text: "我记得...三天后会有大规模寒流，必须尽快建立据点。" }
      ],
      risk: "中",
      countdown: "72:00:00",
      choices: [
        { text: "救助被困幸存者", next: "scene2a", item: "救援绳索" },
        { text: "继续前进不冒险", next: "scene2b", achievement: "冷静旁观" }
      ]
    },
    scene2a: {
      chapter: "场景2A",
      title: "救助幸存者",
      media: "./assets/scenes/warehouse-lockdown.png",
      visual: "倒塌仓库门后传来敲击声，几束手电在黑暗里晃动，风雪正从破洞灌入。",
      narration: "前世的经验告诉我，这些人里有未来的核心成员。现在投资，未来回报。",
      lines: [
        { speaker: "被困者", text: "救命！我们被困在这里两天了！" },
        { speaker: "陆寒", text: "坚持住，我马上救你们出来！" },
        { speaker: "林雪", text: "谢谢你...我是林雪，这个团队的负责人。" }
      ],
      risk: "高",
      countdown: "68:10:21",
      effectsOnEnter: { 资源: -5, 人口: 8, 声望: 10 },
      relationOnEnter: { 林雪: 18 },
      item: "林雪的信任",
      choices: [
        { text: "带领队伍建立据点", next: "scene3a", shelter: { 居住舱: 1 }, achievement: "第一批追随者" },
        { text: "独自探索寻找资源", next: "scene3b", item: "废城路线图" }
      ]
    },
    scene2b: {
      chapter: "场景2B",
      title: "独自离开",
      media: "./assets/scenes/safehouse-awakening.png",
      visual: "陆寒从求救声旁经过，身后的敲击被风雪一点点吞没。",
      narration: "同情心在末日是奢侈品。我需要先确保自己的生存，再考虑其他。",
      lines: [
        { speaker: "陆寒", text: "不能冒险，我的目标是建立自己的势力。" }
      ],
      risk: "中",
      countdown: "69:02:11",
      effectsOnEnter: { 声望: -5, 黑化值: 3 },
      choices: [
        { text: "用物资招募流浪者", next: "scene4a", item: "招募物资包" },
        { text: "用武力征服小团体", next: "scene4b", item: "旧式步枪" }
      ]
    },
    scene3a: {
      chapter: "场景3A",
      title: "成为领袖",
      media: "./assets/scenes/metro-shelter.png",
      visual: "废弃地铁站里，第一批幸存者围着临时火炉，看向站在铁轨尽头的陆寒。",
      narration: "有了第一批追随者，接下来要建立秩序。在末日，秩序就是力量。",
      lines: [
        { speaker: "陆寒", text: "我们不能再这样散乱下去。我有计划，能带大家活下去。愿意跟随我的，留下来！" },
        { speaker: "幸存者A", text: "我们听你的！" },
        { speaker: "林雪", text: "你有领导力，我支持你。" }
      ],
      risk: "中",
      countdown: "54:20:09",
      effectsOnEnter: { 资源: -10, 人口: 10, 武力: 5 },
      relationOnEnter: { 林雪: 10 },
      shelterOnEnter: { 居住舱: 1 },
      choices: [
        { text: "与其他势力结盟", next: "scene5a", achievement: "秩序初立" },
        { text: "吞并对方势力", next: "scene5b", achievement: "铁腕扩张" }
      ]
    },
    scene3b: {
      chapter: "场景3B",
      title: "武力征服",
      media: "./assets/scenes/warehouse-lockdown.png",
      visual: "旧仓库外，赵铁的人举着武器拦住入口，墙上挂着抢来的补给袋。",
      narration: "在末日，弱小就是罪。要想活下去，必须让所有人知道——我才是最强的。",
      lines: [
        { speaker: "赵铁", text: "你谁啊？敢闯我们的地盘？" },
        { speaker: "陆寒", text: "给你两个选择：臣服，或者消失。" },
        { speaker: "赵铁", text: "...行，你狠。我跟你了。" }
      ],
      risk: "高",
      countdown: "52:41:33",
      effectsOnEnter: { 资源: 15, 武力: -5, 声望: -5, 黑化值: 6 },
      relationOnEnter: { 赵铁: 20 },
      item: "赵铁的投名状",
      choices: [
        { text: "与其他势力结盟", next: "scene5a" },
        { text: "吞并对方势力", next: "scene5b" }
      ]
    },
    scene4a: {
      chapter: "场景4A",
      title: "商业贸易",
      media: "./assets/scenes/warehouse-lockdown.png",
      visual: "临时交易点里，药箱和粮袋摆在桌上，王商的算盘珠子敲得很轻。",
      narration: "资源就是货币。在这个新世界里，谁掌握资源，谁就掌握权力。",
      lines: [
        { speaker: "王商", text: "陆兄，这批药品换你50%的粮食，如何？" },
        { speaker: "陆寒", text: "成交。但下次，我要你的独家渠道。" },
        { speaker: "王商", text: "合作愉快！" }
      ],
      risk: "中",
      countdown: "50:00:08",
      effectsOnEnter: { 资源: -15, 人口: 12, 声望: 8 },
      relationOnEnter: { 王商: 18 },
      item: "独家渠道线索",
      choices: [
        { text: "与其他势力结盟", next: "scene5a" },
        { text: "吞并对方势力", next: "scene5b" }
      ]
    },
    scene4b: {
      chapter: "场景4B",
      title: "军事扩张",
      media: "./assets/scenes/warehouse-lockdown.png",
      visual: "雪夜里，几支小队贴着墙推进，远处的哨灯被风雪切成碎片。",
      narration: "谈判太慢。直接拿，更高效。",
      lines: [
        { speaker: "赵铁", text: "老大，准备好了吗？" },
        { speaker: "陆寒", text: "进攻！" },
        { speaker: "队员们", text: "冲啊！" }
      ],
      risk: "极高",
      countdown: "48:19:40",
      effectsOnEnter: { 资源: 15, 武力: -5, 声望: -5, 黑化值: 5 },
      relationOnEnter: { 赵铁: 10 },
      choices: [
        { text: "与其他势力结盟", next: "scene5a" },
        { text: "吞并对方势力", next: "scene5b" }
      ]
    },
    scene5a: {
      chapter: "场景5A",
      title: "势力扩张",
      media: "./assets/scenes/metro-shelter.png",
      visual: "地铁站外竖起新的旗帜，登记表上的人数一页页翻过。",
      narration: "三个月，从零到百。这不是避难所，这是新世界的起点。",
      lines: [
        { speaker: "林雪", text: "已经有200人了，粮食还够一个月。" },
        { speaker: "陆寒", text: "继续扩张。我们要成为这片区域的主宰。" }
      ],
      risk: "中",
      countdown: "寒潮后第90天",
      effectsOnEnter: { 人口: 15, 声望: 10 },
      shelterOnEnter: { 居住舱: 1, 仓储区: 1 },
      choices: [
        { text: "与其他势力结盟", next: "scene6a" },
        { text: "吞并对方势力", next: "scene6b" }
      ]
    },
    scene5b: {
      chapter: "场景5B",
      title: "防守据点",
      media: "./assets/scenes/metro-shelter.png",
      visual: "庇护所铁门外，火光和雪尘一起升起，防线上的人握紧武器。",
      narration: "扩张太快，树敌太多。现在，只能死守。",
      lines: [
        { speaker: "赵铁", text: "老大，他们来了！" },
        { speaker: "陆寒", text: "各就各位，准备迎战！" }
      ],
      risk: "高",
      countdown: "寒潮后第93天",
      effectsOnEnter: { 武力: 15, 人口: 5, 声望: -10 },
      shelterOnEnter: { 武装岗哨: 1 },
      choices: [
        { text: "与其他势力结盟", next: "scene6a" },
        { text: "吞并对方势力", next: "scene6b" }
      ]
    },
    scene6a: {
      chapter: "场景6A",
      title: "结盟",
      media: "./assets/scenes/metro-shelter.png",
      visual: "长桌两侧的势力代表伸出手，桌面地图上点亮新的补给线。",
      narration: "单打独斗走不远。联合，才能称霸。",
      lines: [
        { speaker: "势力领袖A", text: "陆兄，联合起来吧！" },
        { speaker: "陆寒", text: "共同进退，共享资源。" },
        { speaker: "众人", text: "好！" }
      ],
      risk: "终局前",
      countdown: "结局判定",
      effectsOnEnter: { 声望: 20 },
      choices: [{ text: "进入结局判定", judge: true }]
    },
    scene6b: {
      chapter: "场景6B",
      title: "背叛",
      media: "./assets/scenes/warehouse-lockdown.png",
      visual: "会议室灯光骤灭，武装队员封住出口，敌方领袖的脸色在应急灯下发白。",
      narration: "信任？在末日，信任是最昂贵的奢侈品。",
      lines: [
        { speaker: "敌方领袖", text: "你...你背叛了我们！" },
        { speaker: "陆寒", text: "末日没有朋友，只有利益。" }
      ],
      risk: "终局前",
      countdown: "结局判定",
      effectsOnEnter: { 武力: 20, 声望: -15, 黑化值: 10 },
      choices: [{ text: "进入结局判定", judge: true }]
    },
    "ending-emperor": {
      chapter: "结局1",
      title: "寒霜帝王",
      media: "./assets/scenes/metro-shelter.png",
      visual: "庇护所大厅里，数百人举起火把，冰封城市的中心升起陆寒的旗帜。",
      narration: "从重生那天起，我就知道——我要建立一个帝国。现在，我做到了。",
      lines: [{ speaker: "陆寒", text: "这就是新世界。而我，是它的主宰。" }],
      ending: "寒霜帝王",
      risk: "终局",
      countdown: "00:00:00",
      choices: [{ text: "重新开始", next: "scene1", reset: true }]
    },
    "ending-shadow": {
      chapter: "结局2",
      title: "暗影领主",
      media: "./assets/scenes/warehouse-lockdown.png",
      visual: "巡逻队在雪夜中低头让路，所有频道都沉默等待陆寒的命令。",
      narration: "他们害怕我，这就够了。",
      lines: [{ speaker: "陆寒", text: "他们害怕我，这就够了。" }],
      ending: "暗影领主",
      risk: "终局",
      countdown: "00:00:00",
      choices: [{ text: "重新开始", next: "scene1", reset: true }]
    },
    "ending-merchant": {
      chapter: "结局3",
      title: "商业之王",
      media: "./assets/scenes/warehouse-lockdown.png",
      visual: "药品、燃料和粮食在交易大厅里排成长龙，所有账本最终都指向陆寒。",
      narration: "资源就是权力。而我，掌握了所有的资源。",
      lines: [{ speaker: "陆寒", text: "资源就是权力。而我，掌握了所有的资源。" }],
      ending: "商业之王",
      risk: "终局",
      countdown: "00:00:00",
      choices: [{ text: "重新开始", next: "scene1", reset: true }]
    },
    "ending-lonewolf": {
      chapter: "结局4",
      title: "孤狼幸存者",
      media: "./assets/scenes/safehouse-awakening.png",
      visual: "雪原上只有一串脚印，陆寒背着包，独自走向下一座废城。",
      narration: "也许，孤独才是末日的常态。",
      lines: [{ speaker: "陆寒", text: "也许，孤独才是末日的常态。" }],
      ending: "孤狼幸存者",
      risk: "终局",
      countdown: "00:00:00",
      choices: [{ text: "重新开始", next: "scene1", reset: true }]
    }
  }
};

var FROST_INITIAL_STATE = window.FROST_INITIAL_STATE = {
  nodeId: "scene1",
  selectedNode: "scene1",
  vip: false,
  stats: {
    资源: 100,
    人口: 50,
    武力: 55,
    声望: 45,
    寒意值: 61,
    领袖值: 42,
    黑化值: 8
  },
  relations: {
    林雪: 35,
    赵铁: 30,
    王商: 30
  },
  shelter: {
    仓储区: 1,
    医疗站: 0,
    武装岗哨: 0,
    居住舱: 1
  },
  bag: ["重生记忆"],
  achievements: [],
  endings: [],
  completedTasks: [],
  enteredNodes: ["scene1"],
  sessions: 1
};
