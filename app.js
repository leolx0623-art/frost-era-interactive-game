const STORAGE_STORY = "frost-era-story-v4";
const STORAGE_STATE = "frost-era-state-v4";

const defaultStory = {
  start: "c1n1",
  nodes: {
    c1n1: {
      chapter: "第一章 寒潮前72小时",
      title: "重生醒来",
      media: "./assets/scenes/safehouse-awakening.png",
      visual: "你在安全屋地板上惊醒，窗外城市仍灯火通明。墙上日历显示：全球寒潮爆发前三天。",
      dialogue: "上一世，陆寒死在零下七十度的撤离路上。这一次，你带着全部记忆回来了。第一件事，决定庇护所的核心路线。",
      risk: "中",
      countdown: "72:00:00",
      choices: [
        {
          text: "立刻囤积燃料和医疗物资",
          next: "c1n2",
          effects: { 资源: 14, 声望: -3, 领袖值: 4 },
          shelter: { 仓储区: 1, 医疗站: 1 },
          item: "柴油发电机",
          relation: { 林薇: 4 }
        },
        {
          text: "先黑入气象局，拿到寒潮模型",
          next: "c1n3",
          effects: { 资源: -5, 武力: 2, 声望: 5, 黑化值: 3 },
          item: "寒潮路径图",
          achievement: "预知者"
        }
      ]
    },
    c1n2: {
      chapter: "第一章 寒潮前72小时",
      title: "超市封仓",
      media: "./assets/scenes/warehouse-lockdown.png",
      visual: "仓库卷帘门落下，保安和市民同时冲向最后一批压缩食品。",
      dialogue: "你知道再过五小时，城内所有物流会被军方接管。眼前的冲突，是树立领袖声望的第一场试炼。",
      risk: "高",
      countdown: "66:30:12",
      choices: [
        {
          text: "公开分配规则，招募守仓志愿者",
          next: "c2n1",
          effects: { 人口: 8, 声望: 9, 领袖值: 7, 资源: 6 },
          relation: { 赵擎: 3, 林薇: 2 },
          achievement: "第一道秩序"
        },
        {
          text: "趁乱锁仓，只带走关键物资",
          next: "c2n2",
          effects: { 资源: 18, 声望: -9, 黑化值: 9, 武力: 4 },
          item: "军用压缩粮",
          achievement: "冷血库存"
        }
      ]
    },
    c1n3: {
      chapter: "第一章 寒潮前72小时",
      title: "气象局暗线",
      media: "./assets/scenes/safehouse-awakening.png",
      visual: "屏幕上出现红色风暴带，寒潮中心像一把刀切向北境。",
      dialogue: "模型证明官方通告至少晚了三十六小时。你可以拯救更多人，也可以用信息差换来绝对控制权。",
      risk: "中",
      countdown: "68:44:20",
      choices: [
        {
          text: "向社区医生林薇透露真相",
          next: "c2n1",
          effects: { 声望: 6, 领袖值: 5, 黑化值: -2 },
          relation: { 林薇: 10 },
          item: "医疗联络名单"
        },
        {
          text: "出售模型换取武装车辆",
          next: "c2n2",
          effects: { 武力: 12, 资源: 6, 黑化值: 7, 声望: -4 },
          shelter: { 武装岗哨: 1 },
          item: "雪地装甲车"
        }
      ]
    },
    c2n1: {
      chapter: "第二章 建立据点",
      title: "北境庇护所",
      media: "./assets/scenes/metro-shelter.png",
      visual: "废弃地铁站被改造成地下堡垒，暖光沿着铁轨一盏盏亮起。",
      dialogue: "第一批幸存者进入据点。你必须决定庇护所的制度：以信任换协作，或以铁律换效率。",
      risk: "中",
      countdown: "31:09:45",
      choices: [
        {
          text: "建立议事会，关键任务公开投票",
          next: "c3n1",
          effects: { 人口: 10, 声望: 11, 领袖值: 6, 黑化值: -4 },
          relation: { 林薇: 5, 赵擎: -2 },
          shelter: { 居住舱: 1 },
          achievement: "微光议事会"
        },
        {
          text: "签署寒霜戒律，违令者驱逐",
          next: "c3n2",
          effects: { 武力: 8, 领袖值: 9, 黑化值: 8, 声望: -2 },
          relation: { 赵擎: 7, 林薇: -4 },
          achievement: "寒霜戒律"
        }
      ]
    },
    c2n2: {
      chapter: "第二章 建立据点",
      title: "铁门之后",
      media: "./assets/scenes/metro-shelter.png",
      visual: "厚重防爆门关闭，门外的人群拍打金属，声音逐渐被风雪吞没。",
      dialogue: "庇护所资源充足，却开始流传你抛弃弱者的传言。力量可以让人服从，但不一定让人追随。",
      risk: "高",
      countdown: "28:12:03",
      choices: [
        {
          text: "开放临时名额，要求新人完成试炼",
          next: "c3n1",
          effects: { 人口: 6, 武力: 5, 声望: 3, 黑化值: -1 },
          item: "试炼名册"
        },
        {
          text: "启动黑名单制度，清理潜在叛徒",
          next: "c3n2",
          effects: { 武力: 10, 黑化值: 12, 人口: -4, 领袖值: 6 },
          relation: { 赵擎: 8 },
          achievement: "黑名单"
        }
      ]
    },
    c3n1: {
      chapter: "第三章 招募幸存者",
      title: "医生与机械师",
      media: "./assets/scenes/metro-shelter.png",
      visual: "林薇带来医疗队，赵擎带来武装人员，两股力量在指挥室里对峙。",
      dialogue: "救治伤员会消耗物资，训练武装会提高生存率。你的选择将决定北境庇护所的气质。",
      risk: "中",
      countdown: "09:48:11",
      choices: [
        {
          text: "优先救治冻伤者，稳定民心",
          next: "ending-light",
          effects: { 声望: 12, 人口: 8, 资源: -8, 黑化值: -6 },
          relation: { 林薇: 8 },
          shelter: { 医疗站: 1 },
          ending: "微光领主"
        },
        {
          text: "会员支线：派遣精锐寻找前世密钥",
          next: "hidden-key",
          vip: true,
          effects: { 武力: 6, 领袖值: 8, 资源: -5 },
          item: "前世密钥"
        }
      ]
    },
    c3n2: {
      chapter: "第四章 资源战争",
      title: "雪夜夺仓",
      media: "./assets/scenes/warehouse-lockdown.png",
      visual: "装甲车碾过冰层，敌对势力的探照灯扫过你的队伍。",
      dialogue: "北境粮仓被另一支势力占据。你可以谈判换取联盟，也可以在暴风雪里发动突袭。",
      risk: "极高",
      countdown: "02:17:39",
      choices: [
        {
          text: "以寒潮模型交换联盟席位",
          next: "ending-alliance",
          effects: { 声望: 10, 资源: 9, 黑化值: -3, 领袖值: 5 },
          relation: { 林薇: 3, 赵擎: -3 },
          ending: "北境联盟"
        },
        {
          text: "发动突袭，夺取粮仓控制权",
          next: "ending-throne",
          effects: { 资源: 20, 武力: 16, 黑化值: 18, 人口: -8 },
          relation: { 赵擎: 7 },
          ending: "寒霜王座"
        }
      ]
    },
    "hidden-key": {
      chapter: "隐藏支线",
      title: "前世密钥",
      media: "./assets/scenes/safehouse-awakening.png",
      visual: "密钥打开一段前世影像：真正引发叛乱的人，就在第一批幸存者名单中。",
      dialogue: "你获得一次回溯机会，可以改写某个关键选择。但知道未来越多，越容易把人当成棋子。",
      risk: "未知",
      countdown: "??:??:??",
      choices: [
        {
          text: "公开密钥内容，要求所有人共同审判",
          next: "ending-alliance",
          effects: { 声望: 12, 黑化值: -8, 领袖值: 4 },
          achievement: "破冰审判",
          ending: "北境联盟"
        },
        {
          text: "独自利用密钥，提前清除叛乱源头",
          next: "ending-throne",
          effects: { 黑化值: 16, 武力: 10, 声望: -8 },
          achievement: "无声清算",
          ending: "寒霜王座"
        }
      ]
    },
    "ending-light": {
      chapter: "结局",
      title: "微光领主",
      media: "./assets/scenes/metro-shelter.png",
      visual: "暴雪覆盖地表，地下庇护所仍亮着一排排温暖灯光。",
      dialogue: "你没有成为最强的人，却让最多的人活过了第一场寒潮。",
      ending: "微光领主",
      risk: "终局",
      countdown: "00:00:00",
      choices: [{ text: "重新开始", next: "c1n1", reset: true }]
    },
    "ending-alliance": {
      chapter: "结局",
      title: "北境联盟",
      media: "./assets/scenes/metro-shelter.png",
      visual: "多个庇护所旗帜在风雪中升起，新的秩序从冰原上建立。",
      dialogue: "你用信息、信任与让步换来了联盟。寒潮还会继续，但人类不再孤立。",
      ending: "北境联盟",
      risk: "终局",
      countdown: "00:00:00",
      choices: [{ text: "重新开始", next: "c1n1", reset: true }]
    },
    "ending-throne": {
      chapter: "结局",
      title: "寒霜王座",
      media: "./assets/scenes/warehouse-lockdown.png",
      visual: "所有频道都播放你的命令，北境在钢铁纪律下幸存。",
      dialogue: "没有人敢背叛你。也没有人能确定，陆寒是否仍是那个想拯救世界的人。",
      ending: "寒霜王座",
      risk: "终局",
      countdown: "00:00:00",
      choices: [{ text: "重新开始", next: "c1n1", reset: true }]
    }
  }
};

const initialState = {
  nodeId: "c1n1",
  selectedNode: "c1n1",
  vip: false,
  stats: {
    资源: 42,
    人口: 18,
    武力: 24,
    声望: 35,
    寒意值: 61,
    领袖值: 39,
    黑化值: 12
  },
  relations: {
    林薇: 45,
    赵擎: 38,
    周砚: 30
  },
  shelter: {
    仓储区: 1,
    医疗站: 0,
    武装岗哨: 0,
    居住舱: 1
  },
  bag: ["旧世界记忆"],
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
  { id: "med", title: "开放医疗站", need: "医疗站 Lv.1", test: s => s.shelter.医疗站 >= 1 },
  { id: "order", title: "形成可执行秩序", need: "领袖值 >= 50", test: s => s.stats.领袖值 >= 50 },
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
  const basic = ["资源", "人口", "武力", "声望", "寒意值"];
  document.getElementById("basicStats").innerHTML = basic.map(name => {
    const value = clamp(state.stats[name]);
    return `<span class="basic-chip">${name}<div class="basic-chip-bar"><span style="width:${value}%"></span></div><b>${value}</b></span>`;
  }).join("");
}

function renderStats() {
  document.getElementById("stats").innerHTML = Object.entries(state.stats).map(([name, value]) => {
    const color = name === "黑化值" ? "var(--red)" : name === "寒意值" ? "var(--ice)" : "linear-gradient(90deg, var(--ice), var(--amber))";
    return `<div class="stat-row">
      <span>${name}</span>
      <div class="bar"><span style="width:${clamp(value)}%;background:${color}"></span></div>
      <b>${clamp(value)}</b>
    </div>`;
  }).join("");
}

function renderRelations() {
  document.getElementById("relations").innerHTML = Object.entries(state.relations).map(([name, value]) => `
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
    prepareScenePlayback();
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
  document.getElementById("baseMap").innerHTML = Object.entries(state.shelter).map(([name, level]) => `
    <div class="module">
      <strong>${name} <span class="level">Lv.${level}</span></strong>
      <p>${modules[name]}</p>
    </div>
  `).join("");

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
      <div class="panel-card"><strong>NPC 好感</strong><br>${Object.entries(state.relations).map(([key, value]) => `${key}：${value}`).join(" / ")}</div>
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
  if (state.stats.黑化值 >= 70) return "寒霜暴君";
  if (state.stats.声望 >= 60) return "北境盟主";
  if (state.stats.领袖值 >= 55) return "重生领主";
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
  gameStarted = true;
  enterMainGame();
}

function enterMainGame() {
  document.querySelector(".command-bar").style.display = "";
  document.querySelector(".workspace").style.display = "";
  render();
  prepareScenePlayback();
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

function choose(index) {
  if (sceneMode !== "paused") return;
  const current = node();
  const choice = current.choices[index];
  if (!choice) return;
  if (choice.vip && !state.vip) {
    toast("这是会员隐藏剧情。可在商业后台开启会员体验。");
    return;
  }

  if (choice.reset) {
    const keep = { vip: state.vip, sessions: state.sessions + 1 };
    state = { ...structuredClone(window.FROST_INITIAL_STATE || initialState), ...keep };
    story = loadJson(STORAGE_STORY, window.FROST_DEFAULT_STORY || defaultStory);
  } else {
    if (choice.judge) {
      state.nodeId = determineEnding();
      enterNode(state.nodeId);
      saveJson(STORAGE_STATE, state);
      render();
      return;
    }
    applyEffects(choice.effects);
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

function determineEnding() {
  if (state.stats.人口 > 80 && state.stats.声望 > 70) return "ending-emperor";
  if (state.stats.武力 > 80 && state.stats.资源 > 60) return "ending-shadow";
  if (state.stats.资源 > 80 && state.stats.声望 > 60) return "ending-merchant";
  return "ending-lonewolf";
}

function prepareScenePlayback() {
  stopNarration();
  sceneMode = "awaiting";
  document.getElementById("dialogueText").textContent = "点击播放，开始本段影像。";
  applyPlaybackState();
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
    awaiting: "点击播放 · 台词音频",
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
    choices: [{ text: "返回寒潮前72小时", next: story.start, effects: { 领袖值: 1 } }]
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
  const plan = state.stats.黑化值 > 50 ? "武装岗哨" : state.stats.资源 < 50 ? "仓储区" : "医疗站";
  state.shelter[plan] += 1;
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
  if (action === "replayScene") startScenePlayback();
  if (action === "skipScene") finishScenePlayback();
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

// 初始化标题画面，隐藏主界面
document.querySelector(".command-bar").style.display = "none";
document.querySelector(".workspace").style.display = "none";
initTitleScreen();
