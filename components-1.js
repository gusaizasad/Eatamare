// pre-compiled from components-1.jsx — do not edit
/* ============================================================
   Restaurant Decision Report — UI components
   Loaded as type=text/babel; exposes components on window.
   ============================================================ */

const {
  useState,
  useMemo,
  useEffect
} = React;

/* ---------- Helpers ---------- */
const fmt = n => n.toLocaleString("en-US");
const TODAY = "26 พฤษภาคม 2569";
const TEAM_SIZE = "8–12 คน";
const STUDENT = "OliverBysai";

/* ---------- Site Header ---------- */
function SiteHeader() {
  return /*#__PURE__*/React.createElement("header", {
    className: "site-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand-mark"
  }, "\u0E01"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "brand-title"
  }, "\u0E40\u0E22\u0E47\u0E19\u0E19\u0E35\u0E49\u0E01\u0E34\u0E19\u0E2D\u0E30\u0E44\u0E23\u0E14\u0E35"), /*#__PURE__*/React.createElement("div", {
    className: "brand-sub"
  }, "team-lunch-decider \xB7 v1.0"))), /*#__PURE__*/React.createElement("nav", {
    className: "nav-tabs"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#ranking"
  }, "01 Ranking"), /*#__PURE__*/React.createElement("a", {
    href: "#top3"
  }, "02 Top 3"), /*#__PURE__*/React.createElement("a", {
    href: "#compare"
  }, "03 Compare"), /*#__PURE__*/React.createElement("a", {
    href: "#dataset"
  }, "04 Dataset"))));
}

/* ---------- Hero ---------- */
function Hero({
  area,
  onAreaChange
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Team Lunch Decision Report"), /*#__PURE__*/React.createElement("h1", null, "\u0E15\u0E31\u0E14\u0E2A\u0E34\u0E19\u0E43\u0E08\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E23\u0E49\u0E32\u0E19\u0E2D\u0E32\u0E2B\u0E32\u0E23\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E17\u0E35\u0E21 ", /*#__PURE__*/React.createElement("em", null, TEAM_SIZE), " \u0E43\u0E19 5 \u0E22\u0E48\u0E32\u0E19\u0E22\u0E2D\u0E14\u0E19\u0E34\u0E22\u0E21\u0E02\u0E2D\u0E07\u0E01\u0E23\u0E38\u0E07\u0E40\u0E17\u0E1E\u0E2F"), /*#__PURE__*/React.createElement("p", {
    className: "hero-lead"
  }, "\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E19\u0E35\u0E49\u0E23\u0E27\u0E1A\u0E23\u0E27\u0E21\u0E23\u0E49\u0E32\u0E19\u0E2D\u0E32\u0E2B\u0E32\u0E23\u0E08\u0E32\u0E01 Google Maps \u0E41\u0E25\u0E30 Wongnai \u0E41\u0E25\u0E49\u0E27\u0E08\u0E31\u0E14\u0E2D\u0E31\u0E19\u0E14\u0E31\u0E1A\u0E42\u0E14\u0E22\u0E43\u0E0A\u0E49\u0E40\u0E01\u0E13\u0E11\u0E4C 7 \u0E2B\u0E21\u0E27\u0E14 (100 \u0E04\u0E30\u0E41\u0E19\u0E19) \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E17\u0E35\u0E21\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E23\u0E49\u0E32\u0E19\u0E44\u0E14\u0E49\u0E20\u0E32\u0E22\u0E43\u0E19 5 \u0E19\u0E32\u0E17\u0E35 \u0E42\u0E14\u0E22\u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E40\u0E1B\u0E34\u0E14 8 \u0E41\u0E17\u0E47\u0E1A\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E01\u0E31\u0E19"), /*#__PURE__*/React.createElement("div", {
    className: "meta-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "meta-cell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "meta-label"
  }, "Project"), /*#__PURE__*/React.createElement("div", {
    className: "meta-val"
  }, "\u0E40\u0E22\u0E47\u0E19\u0E19\u0E35\u0E49\u0E01\u0E34\u0E19\u0E2D\u0E30\u0E44\u0E23\u0E14\u0E35?!")), /*#__PURE__*/React.createElement("div", {
    className: "meta-cell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "meta-label"
  }, "Area selected"), /*#__PURE__*/React.createElement("div", {
    className: "meta-val"
  }, area.name, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-3)",
      fontWeight: 400
    }
  }, "\xB7 ", area.en))), /*#__PURE__*/React.createElement("div", {
    className: "meta-cell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "meta-label"
  }, "Generated"), /*#__PURE__*/React.createElement("div", {
    className: "meta-val"
  }, TODAY)), /*#__PURE__*/React.createElement("div", {
    className: "meta-cell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "meta-label"
  }, "Submitted by"), /*#__PURE__*/React.createElement("div", {
    className: "meta-val"
  }, STUDENT)))));
}

/* ---------- Area selector bar ---------- */
function AreaBar({
  area,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "area-bar",
    id: "area-selector"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E22\u0E48\u0E32\u0E19"), window.AREAS.map(a => /*#__PURE__*/React.createElement("button", {
    key: a.id,
    className: "area-chip" + (a.id === area.id ? " active" : ""),
    style: a.id === area.id ? {} : {
      color: a.color
    },
    onClick: () => onChange(a)
  }, /*#__PURE__*/React.createElement("span", {
    className: "swatch",
    style: {
      background: a.id === area.id ? "white" : a.color
    }
  }), a.name)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--ink-3)",
      padding: "0 8px"
    }
  }, "\u0E41\u0E2A\u0E14\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E02\u0E2D\u0E07\u0E22\u0E48\u0E32\u0E19 ", area.name));
}

/* ---------- Objective ---------- */
function Objective({
  area
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "block",
    id: "objective"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "section-num"
  }, "02 / OBJECTIVE"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E02\u0E2D\u0E07\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E19\u0E35\u0E49"), /*#__PURE__*/React.createElement("span", {
    className: "section-sub"
  }, "\u0E04\u0E33\u0E16\u0E32\u0E21\u0E40\u0E14\u0E35\u0E22\u0E27\u0E17\u0E35\u0E48\u0E17\u0E35\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E04\u0E33\u0E15\u0E2D\u0E1A\u0E17\u0E38\u0E01\u0E1A\u0E48\u0E32\u0E22\u0E27\u0E31\u0E19\u0E28\u0E38\u0E01\u0E23\u0E4C")), /*#__PURE__*/React.createElement("div", {
    className: "objective-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "answer-marker"
  }, "\u2316 Core question"), /*#__PURE__*/React.createElement("p", {
    className: "question"
  }, "\u201C\u0E1E\u0E23\u0E38\u0E48\u0E07\u0E19\u0E35\u0E49\u0E40\u0E22\u0E47\u0E19 \u0E17\u0E35\u0E21 8\u201312 \u0E04\u0E19 \u0E04\u0E27\u0E23\u0E44\u0E1B\u0E23\u0E49\u0E32\u0E19\u0E44\u0E2B\u0E19\u0E43\u0E19", area.name, "\u0E17\u0E35\u0E48\u0E23\u0E31\u0E1A\u0E42\u0E15\u0E4A\u0E30\u0E43\u0E2B\u0E0D\u0E48\u0E44\u0E14\u0E49 \u0E43\u0E01\u0E25\u0E49 BTS \u0E07\u0E1A\u0E44\u0E21\u0E48\u0E40\u0E01\u0E34\u0E19 800 \u0E1A\u0E32\u0E17/\u0E04\u0E19 \u0E41\u0E25\u0E30\u0E17\u0E38\u0E01\u0E04\u0E19\u0E19\u0E48\u0E32\u0E08\u0E30\u0E01\u0E34\u0E19\u0E44\u0E14\u0E49?\u201D"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--ink-2)",
      fontSize: 15,
      margin: 0,
      maxWidth: "68ch"
    }
  }, "\u0E41\u0E17\u0E19\u0E17\u0E35\u0E48\u0E08\u0E30\u0E43\u0E2B\u0E49\u0E41\u0E15\u0E48\u0E25\u0E30\u0E04\u0E19 vote \u0E01\u0E31\u0E19\u0E40\u0E2D\u0E07\u0E43\u0E19\u0E41\u0E0A\u0E15 (\u0E41\u0E25\u0E30\u0E08\u0E1A\u0E17\u0E35\u0E48\u0E23\u0E49\u0E32\u0E19\u0E40\u0E14\u0E34\u0E21\u0E17\u0E38\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07) \u0E40\u0E23\u0E32\u0E43\u0E0A\u0E49 workflow \u0E14\u0E36\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E08\u0E23\u0E34\u0E07\u0E08\u0E32\u0E01 Google Maps + Wongnai \u0E21\u0E32\u0E43\u0E2B\u0E49\u0E04\u0E30\u0E41\u0E19\u0E19\u0E15\u0E32\u0E21\u0E40\u0E01\u0E13\u0E11\u0E4C\u0E17\u0E35\u0E48\u0E17\u0E35\u0E21\u0E40\u0E2B\u0E47\u0E19\u0E1E\u0E49\u0E2D\u0E07 \u0E41\u0E25\u0E49\u0E27 output \u0E40\u0E1B\u0E47\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E35\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E43\u0E2B\u0E49 project lead \u0E01\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E14\u0E49\u0E20\u0E32\u0E22\u0E43\u0E19 5 \u0E19\u0E32\u0E17\u0E35"), /*#__PURE__*/React.createElement("div", {
    className: "kpi-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kpi-cell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, "5"), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "\u0E22\u0E48\u0E32\u0E19\u0E17\u0E35\u0E48\u0E04\u0E23\u0E2D\u0E1A\u0E04\u0E25\u0E38\u0E21")), /*#__PURE__*/React.createElement("div", {
    className: "kpi-cell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, "50"), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "\u0E23\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48\u0E1C\u0E48\u0E32\u0E19\u0E40\u0E01\u0E13\u0E11\u0E4C\u0E40\u0E1A\u0E37\u0E49\u0E2D\u0E07\u0E15\u0E49\u0E19")), /*#__PURE__*/React.createElement("div", {
    className: "kpi-cell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, "7"), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "\u0E40\u0E01\u0E13\u0E11\u0E4C\u0E43\u0E2B\u0E49\u0E04\u0E30\u0E41\u0E19\u0E19 (\u0E23\u0E27\u0E21 100)"))))));
}

/* ---------- Workflow Overview ---------- */
function Workflow() {
  const steps = [{
    num: "01",
    name: "Scraping",
    tool: "Apify",
    desc: "ดึงข้อมูลร้านจาก Google Maps + Wongnai ตาม keyword พื้นที่"
  }, {
    num: "02",
    name: "Sheets",
    tool: "Google Sheets",
    desc: "เก็บข้อมูลดิบ + clean column + dedupe"
  }, {
    num: "03",
    name: "AI Analysis",
    tool: "Claude",
    desc: "ให้คะแนน 7 หมวด + สรุปจุดเด่น/ข้อควรระวัง"
  }, {
    num: "04",
    name: "Automation",
    tool: "n8n",
    desc: "trigger ทุกวัน 09:00 น. + commit ขึ้น GitHub"
  }, {
    num: "05",
    name: "Deploy",
    tool: "GitHub Pages",
    desc: "หน้าเว็บนี้ — redeploy อัตโนมัติทุกรอบ"
  }];
  const tools = [{
    i: "Ap",
    name: "Apify",
    role: "Web scraping"
  }, {
    i: "GS",
    name: "Google Sheets",
    role: "Data store"
  }, {
    i: "Cl",
    name: "Claude (Anthropic)",
    role: "Scoring & summaries"
  }, {
    i: "n8",
    name: "n8n",
    role: "Orchestration"
  }, {
    i: "</>",
    name: "HTML / CSS / JS",
    role: "Frontend output"
  }, {
    i: "Gh",
    name: "GitHub Pages",
    role: "Deploy & hosting"
  }];
  const sources = [{
    badge: "Google Maps",
    name: "Bangkok restaurants — 5 area queries",
    url: "google.com/maps?q=…",
    stat: "1,240 ร้านที่ scrape"
  }, {
    badge: "Wongnai",
    name: "Restaurant directory + รีวิว",
    url: "wongnai.com/regions/bangkok",
    stat: "820 ร้านที่ match"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "block",
    id: "workflow",
    style: {
      background: "var(--bg-2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "section-num"
  }, "03 / WORKFLOW"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "\u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14"), /*#__PURE__*/React.createElement("span", {
    className: "section-sub"
  }, "5 \u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19, \u0E23\u0E31\u0E19\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34\u0E17\u0E38\u0E01\u0E27\u0E31\u0E19 09:00 \u0E19. \u0E2B\u0E23\u0E37\u0E2D\u0E01\u0E14 \u201CRun now\u201D \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E40\u0E14\u0E15\u0E40\u0E2D\u0E07")), /*#__PURE__*/React.createElement("div", {
    className: "workflow"
  }, steps.map(s => /*#__PURE__*/React.createElement("div", {
    className: "wf-step",
    key: s.num
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "STEP ", s.num), /*#__PURE__*/React.createElement("div", {
    className: "name"
  }, s.name), /*#__PURE__*/React.createElement("div", {
    className: "desc"
  }, s.desc), /*#__PURE__*/React.createElement("div", {
    className: "tool"
  }, s.tool)))), /*#__PURE__*/React.createElement(ManualRunCard, {
    steps: steps
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 32,
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 16,
      margin: "0 0 12px"
    }
  }, "\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D\u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49"), /*#__PURE__*/React.createElement("div", {
    className: "tools-grid"
  }, tools.map(t => /*#__PURE__*/React.createElement("div", {
    className: "tool-card",
    key: t.name
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon"
  }, t.i), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "name"
  }, t.name), /*#__PURE__*/React.createElement("div", {
    className: "role"
  }, t.role)))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 16,
      margin: "0 0 12px"
    }
  }, "\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 (2+ \u0E41\u0E2B\u0E25\u0E48\u0E07)"), /*#__PURE__*/React.createElement("div", {
    className: "sources-list"
  }, sources.map(s => /*#__PURE__*/React.createElement("div", {
    className: "source-row",
    key: s.name
  }, /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, s.badge), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "name"
  }, s.name), /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, s.stat)), /*#__PURE__*/React.createElement("a", {
    className: "url",
    href: "https://" + s.url,
    target: "_blank",
    rel: "noopener"
  }, "\u2197 ", s.url))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-3)",
      padding: "6px 4px",
      fontStyle: "italic"
    }
  }, "* \u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E41\u0E2A\u0E14\u0E07\u0E43\u0E19\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E19\u0E35\u0E49\u0E40\u0E1B\u0E47\u0E19\u0E0A\u0E38\u0E14\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07 \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A demo \u0E02\u0E2D\u0E07 output format"))))));
}

/* ---------- Standalone Manual Run section ---------- */
function ManualRunSection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "block",
    id: "manual-run",
    style: {
      paddingTop: 0,
      paddingBottom: 32,
      borderBottom: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(ManualRunCard, null)));
}
function ManualRunCard({
  steps
}) {
  const [running, setRunning] = useState(false);
  const [lastRun, setLastRun] = useState({
    label: "วันนี้ 09:00 น.",
    mode: "อัตโนมัติ (n8n schedule)"
  });
  const [log, setLog] = useState([]);
  const formatNow = () => {
    const d = new Date();
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    const ss = String(d.getSeconds()).padStart(2, "0");
    return {
      time: `${hh}:${mm}:${ss}`,
      hm: `${hh}:${mm} น.`
    };
  };
  const runNow = async () => {
    if (running) return;
    setRunning(true);
    setLog([]);
    const stepLog = [{
      msg: "เริ่ม manual trigger จาก dashboard",
      ok: false
    }, {
      msg: "→ Apify: scrape Google Maps (5 ย่าน)",
      ok: true,
      hits: "1,240 ร้าน"
    }, {
      msg: "→ Apify: scrape Wongnai directory",
      ok: true,
      hits: "820 ร้าน"
    }, {
      msg: "→ Google Sheets: clean + dedupe",
      ok: true,
      hits: "เหลือ 312 ร้าน"
    }, {
      msg: "→ Claude: score 7 หมวด + สรุปร้าน",
      ok: true,
      hits: "50 ร้านที่ผ่าน"
    }, {
      msg: "→ GitHub: commit data.js + Pages redeploy",
      ok: true
    }, {
      msg: "เสร็จสมบูรณ์ — refresh หน้า output",
      ok: true
    }];
    for (let i = 0; i < stepLog.length; i++) {
      await new Promise(r => setTimeout(r, 350 + Math.random() * 300));
      const {
        time
      } = formatNow();
      const s = stepLog[i];
      setLog(prev => [...prev, {
        time,
        msg: s.msg,
        hits: s.hits,
        ok: s.ok,
        last: i === stepLog.length - 1
      }]);
    }
    await new Promise(r => setTimeout(r, 300));
    const {
      hm
    } = formatNow();
    setLastRun({
      label: `วันนี้ ${hm}`,
      mode: "Manual (กดจากหน้านี้)"
    });
    setRunning(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "run-card",
    style: {
      flexDirection: "column",
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 24,
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "info-label"
  }, "Workflow status"), /*#__PURE__*/React.createElement("div", {
    className: "info-title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "info-sub"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pulse"
  })), "\u0E2D\u0E31\u0E1B\u0E40\u0E14\u0E15\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E23\u0E49\u0E32\u0E19\u0E2D\u0E32\u0E2B\u0E32\u0E23\u0E40\u0E2D\u0E07"), /*#__PURE__*/React.createElement("div", {
    className: "info-sub"
  }, "\u0E23\u0E31\u0E19\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34\u0E17\u0E38\u0E01\u0E27\u0E31\u0E19 09:00 \u0E19. \xB7 \u0E2B\u0E23\u0E37\u0E2D\u0E01\u0E14\u0E1B\u0E38\u0E48\u0E21\u0E02\u0E27\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D trigger \u0E17\u0E31\u0E19\u0E17\u0E35")), /*#__PURE__*/React.createElement("div", {
    className: "last-run"
  }, /*#__PURE__*/React.createElement("div", null, "Last run"), /*#__PURE__*/React.createElement("div", {
    className: "ts"
  }, lastRun.label), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2
    }
  }, lastRun.mode)), /*#__PURE__*/React.createElement("button", {
    className: "run-btn",
    onClick: runNow,
    disabled: running
  }, running ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "spin"
  }), " \u0E01\u0E33\u0E25\u0E31\u0E07\u0E23\u0E31\u0E19\u2026") : /*#__PURE__*/React.createElement(React.Fragment, null, "\u25B6 Run now"))), log.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "run-log fade-in"
  }, log.map((l, i) => /*#__PURE__*/React.createElement("div", {
    className: "line",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "t"
  }, "[", l.time, "]"), /*#__PURE__*/React.createElement("span", {
    className: l.last ? "ok" : running && i === log.length - 1 ? "running" : ""
  }, l.msg, l.hits ? ` · ${l.hits}` : "", l.last ? " ✓" : "")))));
}

/* ---------- Scoring Criteria ---------- */
function Scoring() {
  const totalWeight = window.SCORING.reduce((s, c) => s + c.weight, 0);
  return /*#__PURE__*/React.createElement("section", {
    className: "block",
    id: "scoring"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "section-num"
  }, "04 / SCORING CRITERIA"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "\u0E40\u0E01\u0E13\u0E11\u0E4C\u0E01\u0E32\u0E23\u0E43\u0E2B\u0E49\u0E04\u0E30\u0E41\u0E19\u0E19 (\u0E23\u0E27\u0E21 100)"), /*#__PURE__*/React.createElement("span", {
    className: "section-sub"
  }, "\u0E19\u0E49\u0E33\u0E2B\u0E19\u0E31\u0E01\u0E02\u0E2D\u0E07\u0E41\u0E15\u0E48\u0E25\u0E30\u0E2B\u0E21\u0E27\u0E14\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E17\u0E35\u0E21 \u201C\u0E40\u0E01\u0E37\u0E2D\u0E1A\u0E08\u0E30\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E41\u0E15\u0E01\u201D \u0E21\u0E32\u0E01\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14")), /*#__PURE__*/React.createElement("table", {
    className: "scoring-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: "30%"
    }
  }, "\u0E2B\u0E21\u0E27\u0E14"), /*#__PURE__*/React.createElement("th", null, "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E27\u0E31\u0E14"), /*#__PURE__*/React.createElement("th", {
    className: "weight"
  }, "\u0E19\u0E49\u0E33\u0E2B\u0E19\u0E31\u0E01"))), /*#__PURE__*/React.createElement("tbody", null, window.SCORING.map(c => /*#__PURE__*/React.createElement("tr", {
    key: c.key
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, c.label), /*#__PURE__*/React.createElement("td", {
    style: {
      color: "var(--ink-2)",
      fontSize: 14
    }
  }, c.desc), /*#__PURE__*/React.createElement("td", {
    className: "weight"
  }, /*#__PURE__*/React.createElement("span", {
    className: "weight-bar",
    style: {
      width: c.weight * 4 + "px"
    }
  }), c.weight)))), /*#__PURE__*/React.createElement("tfoot", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: "2",
    style: {
      textAlign: "right",
      color: "var(--ink-3)"
    }
  }, "\u0E23\u0E27\u0E21"), /*#__PURE__*/React.createElement("td", {
    className: "weight"
  }, totalWeight, " / 100"))))));
}
Object.assign(window, {
  SiteHeader,
  Hero,
  AreaBar,
  Objective,
  Workflow,
  Scoring,
  ManualRunSection
});
