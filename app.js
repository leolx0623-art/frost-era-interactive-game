const STORAGE_STORY = "frost-era-story-v5";
const STORAGE_STATE = "frost-era-state-v5";

/* ===================== 字幕数据配置 ===================== */
const subtitleData = {
  "opening": [
    { time: 0, type: "narration", text: "2100年，全球寒潮灾难后3年了。文明崩塌，秩序毁灭。幸存者在寒潮中挣扎求生，而我........竟然重生了" }
  ],
  "scene_01": [
    { time: 1, type: "narration", text: "寒风呼啸，废墟之上，一个身影缓缓站起。三年前的记忆如潮水般涌来。" },
    { time: 9, type: "dialogue", speaker: "陆寒", text: "重生了，我重生了，我一定要成为末日最强者" }
  ],
  "02A": [
    { time: 1, type: "narration", text: "你冲向废墟深处，将一个个被困的幸存者从瓦砾中救出。" },
    { time: 6, type: "dialogue", speaker: "幸存者", text: "谢谢你...谢谢你救了我们！" },
    { time: 10, type: "narration", text: "你的善举在幸存者中传开，越来越多的人愿意追随你。" }
  ],
  "02B": [
    { time: 1, type: "narration", text: "你转身离开呼救声，独自深入废墟寻找物资。" },
    { time: 6, type: "dialogue", speaker: "陆寒", text: "同情心在末日是奢侈品，我要先活下去。" },
    { time: 10, type: "narration", text: "你搜刮到了大量物资，但没有人知道你在这里。" }
  ],
  "03A": [
    { time: 1, type: "narration", text: "你用有限的资源搭建起避难所，越来越多的人前来投奔。" },
    { time: 6, type: "dialogue", speaker: "幸存者", text: "这里有食物和暖气，我们终于安全了！" },
    { time: 10, type: "narration", text: "避难所逐渐壮大，你的声望在废墟中传播。" }
  ],
  "03B": [
    { time: 1, type: "narration", text: "你带领小队突袭了废弃的军火库，获得了大量武器弹药。" },
    { time: 6, type: "dialogue", speaker: "陆寒", text: "有了这些武器，谁也不能威胁我。" },
    { time: 10, type: "narration", text: "武装力量的扩张让周围的势力对你敬而远之。" }
  ],
  "04A": [
    { time: 1, type: "narration", text: "你与其他幸存者势力达成协议，共同抵御即将到来的更大寒潮。" },
    { time: 6, type: "dialogue", speaker: "盟友", text: "陆寒，我们愿意与你并肩作战！" },
    { time: 10, type: "narration", text: "联盟的形成让你的声望达到了新的高度。" }
  ],
  "04B": [
    { time: 1, type: "narration", text: "你趁夜袭击了邻近的据点，将他们并入自己的势力。" },
    { time: 6, type: "dialogue", speaker: "陆寒", text: "弱者没有资格在这片废墟上生存。" },
    { time: 10, type: "narration", text: "吞并扩张让你的武力值大幅提升。" }
  ],
  "05A": [
    { time: 1, type: "narration", text: "你在废墟之上建立了新的秩序，人们称你为领袖。" },
    { time: 6, type: "dialogue", speaker: "民众", text: "陆寒大人，我们愿意追随您！" },
    { time: 10, type: "narration", text: "文明的火种在你的手中重新点燃。" }
  ],
  "05B": [
    { time: 1, type: "narration", text: "你的势力不断扩张，成为这片废墟上最强大的武装集团。" },
    { time: 6, type: "dialogue", speaker: "部下", text: "大人，周边所有势力都已臣服！" },
    { time: 10, type: "narration", text: "武力至上的法则让你成为了末日的霸主。" }
  ],
  "ending1": [
    { time: 1, type: "narration", text: "你以无上的声望和庞大的人口，建立了一个全新的帝国。" },
    { time: 6, type: "dialogue", speaker: "民众", text: "寒霜帝王万岁！" },
    { time: 10, type: "narration", text: "人们尊称你为——寒霜帝王。" }
  ],
  "ending2": [
    { time: 1, type: "narration", text: "你以绝对的武力和无尽的资源，统治着这片废墟。" },
    { time: 6, type: "dialogue", speaker: "陆寒", text: "恐惧，是我最好的武器。" },
    { time: 10, type: "narration", text: "你成为了——暗影领主。" }
  ],
  "ending3": [
    { time: 1, type: "narration", text: "你掌控了资源的命脉，用贸易编织出一张巨大的网络。" },
    { time: 6, type: "dialogue", speaker: "商人", text: "陆老板，您说了算！" },
    { time: 10, type: "narration", text: "你是废墟上的——商业之王。" }
  ],
  "ending4": [
    { time: 1, type: "narration", text: "你没有建立庞大的势力，但你在末世中独自存活了下来。" },
    { time: 6, type: "dialogue", speaker: "陆寒", text: "也许，孤独才是末日的常态。" },
    { time: 10, type: "narration", text: "孤狼，也能在寒霜中前行。" }
  ]
};

function getSubtitleKeyFromPath(path) {
  if (!path) return null;
  const match = path.match(/\/([^\/]+)\.mp4$/);
  return match ? match[1] : null;
}

/* ===================== 剧情数据（PDF 4层二叉树） ===================== */
const defaultStory = {
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

const initialState = {
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

const modules = {
  仓储区: "决定寒潮前72小时能囤下多少燃料、食物和药品。",
  医疗站: "影响冻伤救治、NPC好感和人口稳定。",
  武装岗哨: "提升资源战争胜率，也会推高威慑和黑化倾向。",
  居住舱: "扩大幸存者容量，降低叛乱与疾病风险。"
};

const taskList = [
  { id: "fuel", title: "建立三日燃料储备", need: "资源 >= 50", test: s => s.stats.资源 >= 50 },
  { id: "pop", title: "人口突破50", need: "人口 >= 50", test: s => s.stats.人口 >= 50 },
  { id: "power", title: "武力称霸", need: "武力 >= 60", test: s => s.stats.武力 >= 60 },
  { id: "fame", title: "声望远播", need: "声望 >= 50", need: "声望 >= 50", test: s => s.stats.声望 >= 50 },
  { id: "ending", title: "解锁任意终局", need: "完成一个结局", test: s => s.endings.length > 0 }
];

const shopItems = [
  { name: "剧情解锁券", price: 18, item: "剧情解锁券", desc: "解锁隐藏支线或番外节点。" },
  { name: "回溯卡", price: 30, item: "回溯卡", desc: "商业版中用于返回关键选择。" },
  { name: "北境礼包", price: 68, item: "北境补给箱", desc: "燃料、医疗包、武器皮肤组合。" }
];

let story = loadJson(STORAGE_STORY, window.FROST_DEFAULT_STORY || defaultStory);
let state = loadJson(STORAGE_STATE, window.FROST_INITIAL_STATE || initialState);
let panelTab = "profile";
let sceneMode = "awaiting";
let narrationTimer = null;
let lastRenderedNode = "";
let typewriterTimer = null;

function loadJson(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : structuredClone(fallback);
  } catch {
    return structuredClone(fallback);
  }
}

function saveJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function clamp(value) {
  return Math.max(0, Math.min(100, Number(value) || 0));
}

function node() {
  return story.nodes[state.nodeId] || story.nodes[story.start];
}

function render() {
  renderStats();
  renderBasicStats();
  renderRelations();
  renderPlay();
  renderShelter();
  renderStudio();
  renderOps();
  renderPanel();
  document.getElementById("itemCount").textContent = state.bag.length;
  document.getElementById("achCount").textContent = state.achievements.length;
  document.getElementById("endingCount").textContent = state.endings.length;
}

function renderBasicStats() {
  const basic = ["资源", "人口", "武力", "声望"];
  document.getElementById("basicStats").innerHTML = basic.map(name => {
    const value = clamp(state.stats[name]);
    return `<span class="basic-chip">${name}<div class="basic-chip-bar"><span style="width:${value}%"></span></div><b>${value}</b></span>`;
  }).join("");
}

function renderStats() {
  document.getElementById("stats").innerHTML = Object.entries(state.stats).map(([name, value]) => {
    const color = name === "声望" ? "linear-gradient(90deg, var(--green), var(--ice))" : "linear-gradient(90deg, var(--ice), var(--amber))";
    return `<div class="stat-row">
      <span>${name}</span>
      <div class="bar"><span style="width:${clamp(value)}%;background:${color}"></span></div>
      <b>${clamp(value)}</b>
    </div>`;
  }).join("");
}

function renderRelations() {
  const rels = Object.entries(state.relations);
  if (rels.length === 0) {
    document.getElementById("relations").innerHTML = "<div class='relation'><strong><span>暂无关系</span><span>--</span></strong></div>";
    return;
  }
  document.getElementById("relations").innerHTML = rels.map(([name, value]) => `
    <div class="relation">
      <strong><span>${name}</span><span>${clamp(value)}</span></strong>
      <div class="bar"><span style="width:${clamp(value)}%;background:linear-gradient(90deg,var(--green),var(--ice))"></span></div>
    </div>
  `).join("");
}

function renderPlay() {
  const current = node();
  document.getElementById("currentTitle").textContent = current.title;
  document.getElementById("episodeLabel").textContent = `${current.chapter} / ${state.nodeId}`;
  document.getElementById("riskLabel").textContent = `寒意警戒：${current.risk || "中"}`;
  document.getElementById("countdown").textContent = current.countdown || "72:00:00";
  const chapterLabel = document.getElementById("chapterLabel");
  const sceneLabel = document.getElementById("sceneLabel");
  if (chapterLabel) chapterLabel.textContent = current.chapter.split(" ")[0] || "第一章";
  if (sceneLabel) sceneLabel.textContent = current.title;
  const media = current.media || "./assets/frost-command-bg.png";
  if (media.endsWith('.mp4') || media.endsWith('.webm')) {
    document.getElementById("sceneImg").style.display = 'none';
    const video = document.getElementById("sceneVisual");
    video.style.display = '';
    video.src = media;
  } else {
    document.getElementById("sceneVisual").style.display = 'none';
    const img = document.getElementById("sceneImg");
    img.style.display = '';
    img.src = media;
  }
  document.getElementById("sceneCard").textContent = current.visual;
  document.getElementById("dialogueText").textContent = getSceneScript(current);
  document.getElementById("choices").innerHTML = current.choices.map((choice, index) => {
    const locked = choice.vip && !state.vip;
    return `<button data-choice="${index}" ${locked ? "data-locked='true'" : ""}>
      ${locked ? "◆ 会员支线：" : ""}${choice.text}
    </button>`;
  }).join("");
  if (lastRenderedNode !== state.nodeId) {
    lastRenderedNode = state.nodeId;
    const cur = node();
    // 结局节点和选择节点都直接显示选项（旁白已在分支视频字幕中传达）
    if (cur.ending || state.nodeId === story.start) {
      sceneMode = "paused";
      applyPlaybackState();
    } else {
      sceneMode = "paused";
      applyPlaybackState();
    }
  } else {
    applyPlaybackState();
  }
}

function summarizeChoice(choice, locked) {
  if (locked) return "需会员：隐藏剧情、无限存档、高画质、专属成就";
  if (choice.reset) return "重置角色状态，保留会员与体验次数";
  const stats = choice.effects ? Object.entries(choice.effects).map(([key, value]) => `${key}${value > 0 ? "+" : ""}${value}`).join(" / ") : "剧情推进";
  const extras = [];
  if (choice.item) extras.push(`获得 ${choice.item}`);
  if (choice.achievement) extras.push(`成就 ${choice.achievement}`);
  if (choice.ending) extras.push(`结局 ${choice.ending}`);
  return [stats, ...extras].join(" · ");
}

function renderShelter() {
  const shelterEntries = Object.entries(state.shelter);
  if (shelterEntries.length === 0) {
    document.getElementById("baseMap").innerHTML = "<div class='module'><strong>暂无设施</strong><p>你的势力尚未建立任何设施。</p></div>";
  } else {
    document.getElementById("baseMap").innerHTML = shelterEntries.map(([name, level]) => `
      <div class="module">
        <strong>${name} <span class="level">Lv.${level}</span></strong>
        <p>${modules[name]}</p>
      </div>
    `).join("");
  }

  document.getElementById("tasks").innerHTML = taskList.map(task => {
    const done = task.test(state);
    return `<div class="task">
      <strong><span>${done ? "已完成" : "进行中"} · ${task.title}</span><span>${done ? "✓" : "…"}</span></strong>
      <p>${task.need}</p>
    </div>`;
  }).join("");
}

function renderStudio() {
  const ids = Object.keys(story.nodes);
  if (!story.nodes[state.selectedNode]) state.selectedNode = story.start;
  document.getElementById("nodeList").innerHTML = ids.map(id => {
    const item = story.nodes[id];
    return `<button class="node-card ${id === state.selectedNode ? "active" : ""}" data-node="${id}">
      <strong>${item.title}</strong><br>
      <small>${item.chapter} · ${item.choices.length} 个选项</small>
    </button>`;
  }).join("");

  const selected = story.nodes[state.selectedNode];
  const form = document.getElementById("nodeForm");
  form.title.value = selected.title;
  form.visual.value = selected.visual;
  form.dialogue.value = selected.dialogue || getSceneScript(selected);
  form.choicesRaw.value = JSON.stringify(selected.choices, null, 2);
}

function renderOps() {
  document.getElementById("vipState").innerHTML = [
    ["隐藏剧情", state.vip ? "已解锁" : "未解锁"],
    ["无限存档", state.vip ? "已解锁" : "Demo 单槽"],
    ["高画质播放", state.vip ? "4K 标识" : "标准"],
    ["专属成就", state.vip ? "可触发" : "锁定"]
  ].map(([key, value]) => `<div class="panel-card"><strong>${key}</strong><br>${value}</div>`).join("");

  document.getElementById("shop").innerHTML = shopItems.map((item, index) => `
    <div class="shop-item">
      <span><strong>${item.name}</strong><br><small>${item.desc} · ${item.price} 霜晶</small></span>
      <button data-buy="${index}">入库</button>
    </div>
  `).join("");

  const choiceCount = Object.values(story.nodes).reduce((sum, item) => sum + item.choices.length, 0);
  document.getElementById("metrics").innerHTML = [
    ["剧情节点", Object.keys(story.nodes).length],
    ["分支选项", choiceCount],
    ["已解锁结局", state.endings.length],
    ["体验次数", state.sessions]
  ].map(([label, value]) => `<div class="metric"><strong>${value}</strong><span>${label}</span></div>`).join("");

  document.getElementById("apiSpec").textContent = [
    "POST /api/game/start",
    "GET  /api/game/state",
    "POST /api/story/choice",
    "POST /api/save-slots",
    "GET  /api/character/profile",
    "GET  /api/bag/items",
    "GET  /api/shop/products",
    "POST /api/vip/subscribe",
    "GET  /api/admin/story-nodes"
  ].join("\n");
}

function renderPanel() {
  document.querySelectorAll("[data-panel]").forEach(button => {
    button.classList.toggle("active", button.dataset.panel === panelTab);
  });
  const panels = {
    profile: `
      <div class="panel-card">称号：${getTitle()}</div>
      <div class="panel-card">势力规模：${state.stats.人口} 人 / 武力 ${state.stats.武力} / 声望 ${state.stats.声望}</div>
      <div class="panel-card">成长记录：已完成 ${state.completedTasks.length} 个生存任务，已进入 ${state.endings.length} 个结局。</div>
      <div class="panel-card"><strong>完整属性板</strong><br>${Object.entries(state.stats).map(([key, value]) => `${key}：${value}`).join(" / ")}</div>
    `,
    bag: state.bag.length ? state.bag.map(item => `<div class="panel-card">${item}</div>`).join("") : "<div class='panel-card'>背包为空。</div>",
    achievements: state.achievements.length ? state.achievements.map(item => `<div class="panel-card">${item}</div>`).join("") : "<div class='panel-card'>暂无成就。</div>",
    system: `
      <div class="panel-card">本原型使用浏览器 localStorage 保存进度和剧情配置。</div>
      <button data-action="resetState">重置游戏进度</button>
      <button data-action="resetStory">恢复默认剧情树</button>
    `
  };
  document.getElementById("panelBody").innerHTML = panels[panelTab];
}

function getTitle() {
  if (state.stats.声望 >= 50) return "北境盟主";
  if (state.stats.武力 >= 45) return "重生领主";
  return "灾前预备者";
}

let subtitleTimer = null;
let gameStarted = false;

function initTitleScreen() {
  const titleVideo = document.getElementById("titleVideo");
  if (titleVideo) {
    titleVideo.play().then(() => {
      titleVideo.pause();
    }).catch(() => {});
  }
}

function hideTitleScreen() {
  const titleScreen = document.getElementById("titleScreen");
  if (!titleScreen) return;
  titleScreen.classList.add("fade-out");
  setTimeout(() => {
    titleScreen.classList.remove("active", "fade-out");
  }, 800);
}

function showTitleScreen() {
  const titleScreen = document.getElementById("titleScreen");
  if (titleScreen) {
    titleScreen.classList.add("active");
    initTitleScreen();
  }
}

/* ===================== 开场电影 ===================== */
function playOpeningCinematic() {
  hideTitleScreen();
  const cinematic = document.getElementById("openingCinematic");
  const video = document.getElementById("cinematicVideo");
  const subtitle = document.getElementById("subtitleOverlay");
  if (!cinematic || !video || !subtitle) return;

  cinematic.classList.add("active");
  subtitle.textContent = "";
  video.currentTime = 0;

  const subtitleText = "2100年，全球寒潮灾难后3年了。文明崩塌，秩序毁灭。幸存者在寒潮中挣扎求生，而我........竟然重生了";
  const duration = Math.min(10000, Math.max(5000, subtitleText.length * 110));

  video.play().catch(err => {
    console.log("视频播放失败:", err);
    finishOpeningCinematic();
  });

  startSubtitleTypewriter(subtitleText, duration);

  video.onended = () => {
    finishOpeningCinematic();
  };

  video.onerror = () => {
    finishOpeningCinematic();
  };
}

function startSubtitleTypewriter(text, duration) {
  stopSubtitleTypewriter();
  const target = document.getElementById("subtitleOverlay");
  if (!target) return;
  target.textContent = "";
  let index = 0;
  const interval = Math.max(30, Math.min(80, Math.floor(duration / Math.max(text.length, 1))));
  subtitleTimer = setInterval(() => {
    index += 1;
    target.textContent = text.slice(0, index);
    if (index >= text.length) stopSubtitleTypewriter();
  }, interval);
}

function stopSubtitleTypewriter() {
  clearInterval(subtitleTimer);
  subtitleTimer = null;
}

function finishOpeningCinematic() {
  const cinematic = document.getElementById("openingCinematic");
  const video = document.getElementById("cinematicVideo");
  if (video) {
    video.pause();
    video.onended = null;
    video.onerror = null;
  }
  stopSubtitleTypewriter();
  if (cinematic) {
    cinematic.classList.remove("active");
  }
  // 开场结束后自动播放第二段视频
  playScene01Cinematic();
}

/* ===================== 第一段剧情视频（scene_01） ===================== */
function playScene01Cinematic() {
  const cinematic = document.getElementById("sceneCinematic");
  const video = document.getElementById("sceneCinematicVideo");
  if (!cinematic || !video) {
    gameStarted = true;
    enterMainGame();
    return;
  }

  cinematic.classList.add("active");
  video.currentTime = 0;

  // 字幕系统：根据时间轴显示旁白和对话
  const subs = subtitleData["scene_01"] || [];
  let currentSubIndex = -1;
  let timeUpdateHandler = null;

  if (subs.length > 0) {
    timeUpdateHandler = () => {
      const t = video.currentTime;
      for (let i = subs.length - 1; i >= 0; i--) {
        if (t >= subs[i].time) {
          if (currentSubIndex !== i) {
            currentSubIndex = i;
            showSceneSubtitle(subs[i]);
          }
          break;
        }
      }
    };
    video.addEventListener("timeupdate", timeUpdateHandler);
  }

  // 保留原有的角色对话逻辑作为后备
  const dialogueData = { speaker: "陆寒", text: "重生了，我重生了，我一定要成为末日最强者", triggerTime: 9 };
  let dialogueShown = false;

  video.addEventListener("timeupdate", function onTimeUpdate() {
    if (!dialogueShown && video.currentTime >= dialogueData.triggerTime) {
      dialogueShown = true;
      showCharacterDialogue(dialogueData.speaker, dialogueData.text, 4500);
    }
  });

  const cleanup = () => {
    if (timeUpdateHandler) video.removeEventListener("timeupdate", timeUpdateHandler);
    hideSceneSubtitle();
    hideCharacterDialogue();
  };

  video.play().catch(err => {
    console.log("第二段视频播放失败:", err);
    cleanup();
    finishScene01Cinematic();
  });

  video.onended = () => {
    cleanup();
    finishScene01Cinematic();
  };

  video.onerror = () => {
    cleanup();
    finishScene01Cinematic();
  };
}

/* 场景视频字幕覆盖层 */
function showSceneSubtitle(sub) {
  let overlay = document.getElementById("sceneSubtitleOverlay");
  if (!overlay) return;
  if (sub.type === "dialogue") {
    overlay.innerHTML = `<span style="display:block;color:var(--ice);font-size:13px;margin-bottom:4px;font-weight:700;">${sub.speaker}</span>${sub.text}`;
  } else {
    overlay.textContent = sub.text;
  }
  overlay.style.opacity = "1";
}

function hideSceneSubtitle() {
  const overlay = document.getElementById("sceneSubtitleOverlay");
  if (overlay) overlay.style.opacity = "0";
}

/* 角色对话字幕（左下角） */
function showCharacterDialogue(speaker, text, duration) {
  hideCharacterDialogue();
  const container = document.createElement("div");
  container.className = "dialogue-subtitle show";
  container.id = "activeDialogueSubtitle";
  container.innerHTML = `
    <span class="speaker-tag">${speaker}</span>
    <span class="dialogue-text"></span>
  `;
  document.querySelector(".scene-cinematic")?.appendChild(container);

  const textEl = container.querySelector(".dialogue-text");
  let index = 0;
  const interval = Math.max(30, Math.min(70, Math.floor(duration / Math.max(text.length, 1))));
  const timer = setInterval(() => {
    index += 1;
    textEl.textContent = text.slice(0, index);
    if (index >= text.length) {
      clearInterval(timer);
      setTimeout(() => hideCharacterDialogue(), 1500);
    }
  }, interval);
}

function hideCharacterDialogue() {
  const el = document.getElementById("activeDialogueSubtitle");
  if (el) el.remove();
}

function finishScene01Cinematic() {
  const cinematic = document.getElementById("sceneCinematic");
  const video = document.getElementById("sceneCinematicVideo");
  if (video) {
    video.pause();
    video.onended = null;
    video.onerror = null;
  }
  stopSubtitleTypewriter();
  if (cinematic) {
    cinematic.classList.remove("active");
  }
  gameStarted = true;
  enterMainGame();
}

function enterMainGame() {
  document.querySelector(".command-bar").style.display = "";
  document.querySelector(".workspace").style.display = "";
  render();
  // 第一个节点直接显示为暂停状态，展示选项
  if (state.nodeId === story.start) {
    sceneMode = "paused";
    applyPlaybackState();
  } else {
    prepareScenePlayback();
  }
}

function showGameSubtitle(text, duration = 4000) {
  const overlay = document.getElementById("gameSubtitleOverlay");
  if (!overlay) return;
  overlay.textContent = "";
  overlay.classList.add("show");
  let index = 0;
  const interval = Math.max(25, Math.min(70, Math.floor(duration / Math.max(text.length, 1))));
  const timer = setInterval(() => {
    index += 1;
    overlay.textContent = text.slice(0, index);
    if (index >= text.length) {
      clearInterval(timer);
      setTimeout(() => overlay.classList.remove("show"), 2000);
    }
  }, interval);
}

/* ===================== 选择与分支视频 ===================== */
function choose(index) {
  if (sceneMode !== "paused") return;
  const current = node();
  const choice = current.choices[index];
  if (!choice) return;
  if (choice.vip && !state.vip) {
    toast("这是会员隐藏剧情。可在商业后台开启会员体验。");
    return;
  }

  if (choice.video) {
    const subKey = getSubtitleKeyFromPath(choice.video);
    playBranchCinematic(choice.video, () => applyChoiceEffects(choice), subKey);
    return;
  }

  applyChoiceEffects(choice);
}

function applyChoiceEffects(choice) {
  if (choice.reset) {
    const keep = { vip: state.vip, sessions: state.sessions + 1 };
    state = { ...structuredClone(window.FROST_INITIAL_STATE || initialState), ...keep };
    story = loadJson(STORAGE_STORY, window.FROST_DEFAULT_STORY || defaultStory);
  } else {
    if (choice.judge) {
      const endingId = determineEnding();
      playEndingCinematic(endingId);
      return;
    }
    applyEffects(choice.effects || {});
    applyShelter(choice.shelter);
    applyRelations(choice.relation);
    addUnique("bag", choice.item);
    addUnique("achievements", choice.achievement);
    state.nodeId = choice.next;
    enterNode(state.nodeId);
    const next = node();
    addUnique("endings", choice.ending || next.ending);
    updateCompletedTasks();
  }
  saveJson(STORAGE_STATE, state);
  render();
}

/* ===================== 分支视频播放（增强字幕） ===================== */
function playBranchCinematic(videoSrc, onComplete, subtitleKey) {
  const cinematic = document.getElementById("branchCinematic");
  const video = document.getElementById("branchCinematicVideo");
  if (!cinematic || !video) {
    onComplete();
    return;
  }

  cinematic.classList.add("active");
  video.src = videoSrc;
  video.currentTime = 0;

  // 字幕系统
  let timeUpdateHandler = null;
  const subs = subtitleKey ? (subtitleData[subtitleKey] || []) : [];
  let currentSubIndex = -1;

  if (subs.length > 0) {
    timeUpdateHandler = () => {
      const t = video.currentTime;
      for (let i = subs.length - 1; i >= 0; i--) {
        if (t >= subs[i].time) {
          if (currentSubIndex !== i) {
            currentSubIndex = i;
            updateBranchSubtitle(subs[i]);
          }
          break;
        }
      }
    };
    video.addEventListener("timeupdate", timeUpdateHandler);
  }

  const cleanup = () => {
    if (timeUpdateHandler) video.removeEventListener("timeupdate", timeUpdateHandler);
    hideBranchSubtitle();
  };

  video.play().catch(err => {
    console.log("分支视频播放失败:", err);
    cleanup();
    cinematic.classList.remove("active");
    onComplete();
  });

  video.onended = () => {
    cleanup();
    cinematic.classList.remove("active");
    onComplete();
  };

  video.onerror = () => {
    cleanup();
    cinematic.classList.remove("active");
    onComplete();
  };
}

function updateBranchSubtitle(sub) {
  let el = document.getElementById("branchSubtitle");
  if (!el) {
    el = document.createElement("div");
    el.id = "branchSubtitle";
    el.className = "subtitle-overlay";
    el.style.zIndex = "5";
    el.style.transition = "opacity 0.3s ease";
    document.getElementById("branchCinematic")?.appendChild(el);
  }
  if (!sub) {
    el.style.opacity = "0";
    return;
  }
  if (sub.type === "dialogue") {
    el.innerHTML = `<span style="display:block;color:var(--ice);font-size:13px;margin-bottom:4px;font-weight:700;">${sub.speaker}</span>${sub.text}`;
  } else {
    el.innerHTML = sub.text;
  }
  el.style.opacity = "1";
}

function hideBranchSubtitle() {
  const el = document.getElementById("branchSubtitle");
  if (el) el.style.opacity = "0";
}

/* ===================== 结局视频播放 ===================== */
function playEndingCinematic(endingId) {
  const ending = story.nodes[endingId];
  if (!ending) {
    state.nodeId = endingId;
    saveJson(STORAGE_STATE, state);
    render();
    return;
  }

  // 如果结局有视频，先播放结局视频
  const endingVideoPath = `./videos/${endingId}.mp4`;
  playBranchCinematic(endingVideoPath, () => {
    state.nodeId = endingId;
    enterNode(endingId);
    addUnique("endings", ending.ending);
    saveJson(STORAGE_STATE, state);
    render();
    toast(`结局解锁：${ending.ending}`);
  }, endingId);
}

/* ===================== 结局判定（PDF优先级） ===================== */
function determineEnding() {
  const s = state.stats;
  // 优先级：寒霜帝王 > 暗影领主 > 商业之王 > 孤狼幸存者
  if (s.声望 >= 50 && s.人口 >= 45) return "ending1";
  if (s.武力 >= 60 && s.资源 >= 60) return "ending2";
  if (s.资源 >= 40 && s.人口 >= 30) return "ending3";
  return "ending4";
}

function enterNode(nodeId) {
  const target = story.nodes[nodeId];
  if (!target) return;
  state.enteredNodes ||= [];
  if (state.enteredNodes.includes(nodeId)) return;
  state.enteredNodes.push(nodeId);
  applyEffects(target.effectsOnEnter || {});
  applyShelter(target.shelterOnEnter || {});
  applyRelations(target.relationOnEnter || {});
  addUnique("bag", target.item);
  addUnique("achievements", target.achievement);
  addUnique("endings", target.ending);
}

function prepareScenePlayback() {
  stopNarration();
  sceneMode = "playing";
  document.getElementById("dialogueText").textContent = "";
  applyPlaybackState();
  // 自动开始播放旁白和打字机
  startScenePlayback();
}

function startScenePlayback() {
  stopNarration();
  sceneMode = "playing";
  applyPlaybackState();
  const current = node();
  const script = getSceneScript(current);
  const duration = Math.min(11000, Math.max(5200, script.length * 135));
  startTypewriter(script, duration);
  speakNarration(script, duration);
}

function finishScenePlayback(cancelSpeech = true) {
  sceneMode = "paused";
  stopNarration(cancelSpeech);
  stopTypewriter();
  document.getElementById("dialogueText").textContent = getSceneScript(node());
  applyPlaybackState();
}

function getSceneScript(scene) {
  const lines = (scene.lines || []).map(line => `${line.speaker}：${line.text}`);
  return [scene.narration || scene.dialogue || "", ...lines].filter(Boolean).join("\n");
}

function startTypewriter(text, duration) {
  stopTypewriter();
  const target = document.getElementById("dialogueText");
  target.textContent = "";
  let index = 0;
  const interval = Math.max(22, Math.min(72, Math.floor(duration / Math.max(text.length, 1))));
  typewriterTimer = setInterval(() => {
    index += 1;
    target.textContent = text.slice(0, index);
    if (index >= text.length) stopTypewriter();
  }, interval);
}

function stopTypewriter() {
  clearInterval(typewriterTimer);
  typewriterTimer = null;
}

function applyPlaybackState() {
  const videoWindow = document.querySelector(".video-window");
  const playState = document.getElementById("playState");
  if (!videoWindow || !playState) return;
  videoWindow.classList.toggle("awaiting", sceneMode === "awaiting");
  videoWindow.classList.toggle("playing", sceneMode === "playing");
  videoWindow.classList.toggle("paused", sceneMode === "paused");
  const labels = {
    awaiting: "准备中 · 自动播放",
    playing: "播放中 · 旁白",
    paused: "已暂停 · 等待你的选择"
  };
  playState.textContent = labels[sceneMode];
}

function speakNarration(text, fallbackDuration) {
  narrationTimer = setTimeout(() => {
    if (sceneMode === "playing") finishScenePlayback(false);
  }, fallbackDuration);
  if ("speechSynthesis" in window && "SpeechSynthesisUtterance" in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-CN";
    utterance.rate = 0.92;
    utterance.pitch = 0.82;
    utterance.volume = 0.92;
    utterance.onend = () => finishScenePlayback(false);
    utterance.onerror = () => {
      if (sceneMode === "playing") {
        clearTimeout(narrationTimer);
        narrationTimer = setTimeout(() => finishScenePlayback(false), 5200);
      }
    };
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }
}

function stopNarration(cancelSpeech = true) {
  clearTimeout(narrationTimer);
  narrationTimer = null;
  if (cancelSpeech && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

function applyEffects(effects = {}) {
  Object.entries(effects).forEach(([key, value]) => {
    state.stats[key] = clamp((state.stats[key] || 0) + value);
  });
  pulse("stats");
}

function applyShelter(changes = {}) {
  Object.entries(changes).forEach(([key, value]) => {
    state.shelter[key] = Math.max(0, (state.shelter[key] || 0) + value);
  });
}

function applyRelations(changes = {}) {
  Object.entries(changes).forEach(([key, value]) => {
    state.relations[key] = clamp((state.relations[key] || 30) + value);
  });
}

function addUnique(key, value) {
  if (value && !state[key].includes(value)) state[key].push(value);
}

function updateCompletedTasks() {
  taskList.forEach(task => {
    if (task.test(state) && !state.completedTasks.includes(task.id)) {
      state.completedTasks.push(task.id);
    }
  });
}

function pulse(id) {
  const target = document.getElementById(id);
  target.classList.add("pulse");
  setTimeout(() => target.classList.remove("pulse"), 650);
}

function switchView(view) {
  document.querySelectorAll(".view").forEach(item => item.classList.remove("active"));
  document.querySelectorAll("[data-view]").forEach(button => button.classList.toggle("active", button.dataset.view === view));
  document.getElementById(`view-${view}`).classList.add("active");
  // 控制外部 command-bar 显示/隐藏
  const commandBar = document.querySelector(".command-bar");
  const workspace = document.querySelector(".workspace");
  if (view === "play") {
    if (commandBar) commandBar.style.display = "none";
    if (workspace) workspace.style.padding = "0";
  } else {
    if (commandBar) commandBar.style.display = "";
    if (workspace) workspace.style.padding = "";
  }
  if (view === "play") prepareScenePlayback();
}

function saveNode(event) {
  event.preventDefault();
  const form = event.currentTarget;
  try {
    const choices = JSON.parse(form.choicesRaw.value);
    if (!Array.isArray(choices)) throw new Error("choices must be array");
    story.nodes[state.selectedNode] = {
      ...story.nodes[state.selectedNode],
      title: form.title.value.trim() || "未命名节点",
      visual: form.visual.value.trim(),
      dialogue: form.dialogue.value.trim(),
      choices
    };
    saveJson(STORAGE_STORY, story);
    toast("剧情节点已保存。");
    render();
  } catch {
    toast("选项 JSON 格式无效。");
  }
}

function addNode() {
  const id = `custom-${Date.now().toString().slice(-6)}`;
  story.nodes[id] = {
    chapter: "自定义章节",
    title: "新剧情节点",
    media: "./assets/frost-command-bg.png",
    visual: "描述这一段视频镜头、场景和镜头运动。",
    dialogue: "写入第一人称对白或旁白。",
    risk: "中",
    countdown: "??:??:??",
    choices: [{ text: "返回寒潮前72小时", next: story.start, effects: { 资源: 1 } }]
  };
  state.selectedNode = id;
  saveJson(STORAGE_STORY, story);
  render();
}

function exportStory() {
  const blob = new Blob([JSON.stringify(story, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "frost-era-story-nodes.json";
  link.click();
  URL.revokeObjectURL(link.href);
}

function autoPlan() {
  const plan = state.stats.资源 < 50 ? "仓储区" : "医疗站";
  state.shelter[plan] = (state.shelter[plan] || 0) + 1;
  state.stats.资源 = clamp(state.stats.资源 - 6);
  saveJson(STORAGE_STATE, state);
  toast(`已调度工程队升级 ${plan}。`);
  render();
}

function toast(message) {
  const target = document.getElementById("toast");
  target.textContent = message;
  target.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => target.classList.remove("show"), 2400);
}

/* ===================== 事件监听 ===================== */
document.addEventListener("click", event => {
  const button = event.target.closest("button");
  if (!button) return;

  if (button.dataset.view) switchView(button.dataset.view);
  if (button.dataset.choice) choose(Number(button.dataset.choice));
  if (button.dataset.node) {
    state.selectedNode = button.dataset.node;
    render();
  }
  if (button.dataset.panel) {
    panelTab = button.dataset.panel;
    renderPanel();
  }
  if (button.dataset.buy) {
    addUnique("bag", shopItems[Number(button.dataset.buy)].item);
    saveJson(STORAGE_STATE, state);
    toast("商品已加入背包。");
    render();
  }

  const action = button.dataset.action;
  if (action === "home") switchView("play");
  if (action === "save") {
    saveJson(STORAGE_STATE, state);
    toast("当前进度已存档。");
  }
  if (action === "load") {
    state = loadJson(STORAGE_STATE, initialState);
    toast("已读取最近存档。");
    render();
  }
  if (action === "startGame") {
    playOpeningCinematic();
  }
  if (action === "loadGame") {
    state = loadJson(STORAGE_STATE, initialState);
    hideTitleScreen();
    gameStarted = true;
    enterMainGame();
    toast("已读取存档，欢迎回来，陆寒。");
  }
  if (action === "achievementsView") {
    toast("成就图鉴功能开发中...");
  }
  if (action === "settingsView") {
    toast("游戏设置功能开发中...");
  }
  if (action === "panel") {
    document.getElementById("sidePanel").classList.add("open");
    document.getElementById("sidePanel").setAttribute("aria-hidden", "false");
  }
  if (action === "closePanel") {
    document.getElementById("sidePanel").classList.remove("open");
    document.getElementById("sidePanel").setAttribute("aria-hidden", "true");
  }
  if (action === "toggleVip") {
    state.vip = !state.vip;
    saveJson(STORAGE_STATE, state);
    toast(state.vip ? "会员体验已开启。" : "会员体验已关闭。");
    render();
  }
  if (action === "addNode") addNode();
  if (action === "exportStory") exportStory();
  if (action === "autoPlan") autoPlan();
  if (action === "resetState") {
    state = structuredClone(window.FROST_INITIAL_STATE || initialState);
    saveJson(STORAGE_STATE, state);
    toast("游戏进度已重置。");
    render();
  }
  if (action === "resetStory") {
    story = structuredClone(window.FROST_DEFAULT_STORY || defaultStory);
    saveJson(STORAGE_STORY, story);
    state.selectedNode = story.start;
    toast("剧情树已恢复默认。");
    render();
  }
});

document.getElementById("nodeForm").addEventListener("submit", saveNode);
updateCompletedTasks();

// 开场电影点击跳过
document.getElementById("openingCinematic")?.addEventListener("click", (e) => {
  if (e.target.closest(".subtitle-overlay")) return;
  finishOpeningCinematic();
});

// 第二段视频点击跳过
document.getElementById("sceneCinematic")?.addEventListener("click", (e) => {
  if (e.target.closest(".subtitle-overlay")) return;
  finishScene01Cinematic();
});

// 初始化标题画面，隐藏主界面
document.querySelector(".command-bar").style.display = "none";
document.querySelector(".workspace").style.display = "none";
initTitleScreen();
