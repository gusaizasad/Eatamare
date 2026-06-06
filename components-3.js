// pre-compiled from components-3.jsx — do not edit
/* ============================================================
   Restaurant Decision Report — Full Dataset section
   Shows all restaurants in current area, filterable.
   ============================================================ */

const {
  useState: useStateD,
  useMemo: useMemoD
} = React;

// scenario predicates — score thresholds on sub-scores
const SCENARIOS = [{
  key: "all",
  label: "ทั้งหมด",
  test: () => true
}, {
  key: "access",
  label: "เดินทางสะดวก (BTS/MRT)",
  test: r => r.s.access >= 8.5
}, {
  key: "ambience",
  label: "บรรยากาศดี (คุยงานได้)",
  test: r => r.s.ambience >= 8.5
}, {
  key: "group",
  label: "รับกลุ่ม 8–12 คนสบาย",
  test: r => r.s.group >= 8.5
}, {
  key: "value",
  label: "คุ้มราคา",
  test: r => r.s.price >= 8.5
}, {
  key: "menu",
  label: "เมนูครอบคลุมหลากหลาย",
  test: r => r.s.menu >= 8.5
}];
const COLS = [{
  key: "name",
  label: "ร้านอาหาร",
  get: r => r.name,
  align: "left"
}, {
  key: "cuisine",
  label: "ประเภท",
  get: r => r.cuisine,
  align: "left"
}, {
  key: "ppp",
  label: "ราคา/คน",
  get: r => r.ppp,
  align: "right",
  fmt: v => "฿" + fmt(v)
}, {
  key: "rating",
  label: "Rating",
  get: r => r.rating,
  align: "right",
  fmt: v => "★ " + v.toFixed(1)
}, {
  key: "reviews",
  label: "Reviews",
  get: r => r.reviews,
  align: "right",
  fmt: v => fmt(v)
}, {
  key: "total",
  label: "Score",
  get: r => r.total,
  align: "right",
  fmt: v => v.toFixed(1)
}, {
  key: "access",
  label: "เดินทาง",
  get: r => r.s.access,
  align: "right",
  fmt: v => v.toFixed(1)
}, {
  key: "bts",
  label: "ระยะ BTS/MRT",
  get: r => r.bts,
  align: "left"
}];
function Dataset({
  area
}) {
  const all = window.RESTAURANTS[area.id] || [];

  // unique cuisines for this area
  const cuisines = useMemoD(() => {
    const set = new Set(all.map(r => r.cuisine));
    return ["ทั้งหมด", ...Array.from(set).sort()];
  }, [area.id]);

  // price range — derive from data
  const priceMax = useMemoD(() => Math.max(...all.map(r => r.ppp)), [area.id]);
  const priceMin = useMemoD(() => Math.min(...all.map(r => r.ppp)), [area.id]);
  const [cuisine, setCuisine] = useStateD("ทั้งหมด");
  const [scenario, setScenario] = useStateD("all");
  const [maxPrice, setMaxPrice] = useStateD(priceMax);
  const [sortKey, setSortKey] = useStateD("total");
  const [sortDir, setSortDir] = useStateD("desc");

  // reset when area changes
  React.useEffect(() => {
    setCuisine("ทั้งหมด");
    setScenario("all");
    setMaxPrice(priceMax);
  }, [area.id, priceMax]);
  const filtered = useMemoD(() => {
    const sc = SCENARIOS.find(s => s.key === scenario);
    return all.filter(r => cuisine === "ทั้งหมด" || r.cuisine === cuisine).filter(r => sc.test(r)).filter(r => r.ppp <= maxPrice).sort((a, b) => {
      const va = COLS.find(c => c.key === sortKey).get(a);
      const vb = COLS.find(c => c.key === sortKey).get(b);
      const dir = sortDir === "asc" ? 1 : -1;
      if (typeof va === "string") return va.localeCompare(vb, "th") * dir;
      return (va - vb) * dir;
    });
  }, [all, cuisine, scenario, maxPrice, sortKey, sortDir]);
  const toggleSort = key => {
    if (sortKey === key) setSortDir(sortDir === "asc" ? "desc" : "asc");else {
      setSortKey(key);
      setSortDir("desc");
    }
  };
  const reset = () => {
    setCuisine("ทั้งหมด");
    setScenario("all");
    setMaxPrice(priceMax);
  };
  const activeFilters = (cuisine !== "ทั้งหมด" ? 1 : 0) + (scenario !== "all" ? 1 : 0) + (maxPrice < priceMax ? 1 : 0);
  return /*#__PURE__*/React.createElement("section", {
    className: "block",
    id: "dataset"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "section-num"
  }, "08 / FULL DATASET"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "\u0E23\u0E49\u0E32\u0E19\u0E2D\u0E32\u0E2B\u0E32\u0E23\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\u0E43\u0E19", area.name), /*#__PURE__*/React.createElement("span", {
    className: "section-sub"
  }, "filter \u0E15\u0E32\u0E21\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2D\u0E32\u0E2B\u0E32\u0E23, scenario \u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19, \u0E41\u0E25\u0E30\u0E0A\u0E48\u0E27\u0E07\u0E23\u0E32\u0E04\u0E32")), /*#__PURE__*/React.createElement("div", {
    className: "dataset-toolbar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "filter-label"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 4h14l-5 7v5l-4-2v-3L3 4z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  })), "Filter"), /*#__PURE__*/React.createElement("div", {
    className: "filter-group"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2D\u0E32\u0E2B\u0E32\u0E23:"), /*#__PURE__*/React.createElement("select", {
    value: cuisine,
    onChange: e => setCuisine(e.target.value)
  }, cuisines.map(c => /*#__PURE__*/React.createElement("option", {
    key: c,
    value: c
  }, c)))), /*#__PURE__*/React.createElement("div", {
    className: "filter-group"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Scenario:"), /*#__PURE__*/React.createElement("select", {
    value: scenario,
    onChange: e => setScenario(e.target.value)
  }, SCENARIOS.map(s => /*#__PURE__*/React.createElement("option", {
    key: s.key,
    value: s.key
  }, s.label)))), /*#__PURE__*/React.createElement("div", {
    className: "price-slider"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k",
    style: {
      fontSize: 13,
      color: "var(--ink-3)"
    }
  }, "\u0E23\u0E32\u0E04\u0E32\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14:"), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: priceMin,
    max: priceMax,
    step: 50,
    value: maxPrice,
    onChange: e => setMaxPrice(parseInt(e.target.value, 10))
  }), /*#__PURE__*/React.createElement("span", {
    className: "price-val"
  }, "\u0E3F", fmt(maxPrice), "/\u0E04\u0E19")), activeFilters > 0 && /*#__PURE__*/React.createElement("button", {
    className: "reset-btn",
    onClick: reset
  }, "\u21BA \u0E25\u0E49\u0E32\u0E07 filter (", activeFilters, ")"), /*#__PURE__*/React.createElement("div", {
    className: "dataset-meta"
  }, "\u0E41\u0E2A\u0E14\u0E07 ", /*#__PURE__*/React.createElement("strong", null, filtered.length), " / ", all.length, " \u0E23\u0E49\u0E32\u0E19")), filtered.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "empty-state",
    style: {
      background: "var(--paper)",
      border: "1px solid var(--rule)",
      borderRadius: 12
    }
  }, "\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E23\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48\u0E15\u0E23\u0E07\u0E15\u0E32\u0E21 filter \u2014 \u0E25\u0E2D\u0E07\u0E04\u0E25\u0E32\u0E22\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02\u0E14\u0E39\u0E04\u0E23\u0E31\u0E1A") : /*#__PURE__*/React.createElement("table", {
    className: "dataset-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, COLS.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      textAlign: c.align
    },
    className: sortKey === c.key ? "active" : "",
    onClick: () => toggleSort(c.key)
  }, c.label, /*#__PURE__*/React.createElement("span", {
    className: "sort-ind"
  }, sortKey === c.key ? sortDir === "desc" ? "▾" : "▴" : "⇅"))))), /*#__PURE__*/React.createElement("tbody", null, filtered.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.id
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "ds-name"
  }, r.name)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "ds-cuisine"
  }, r.cuisine)), /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, "\u0E3F", fmt(r.ppp)), /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-stars"
  }, "\u2605"), " ", r.rating.toFixed(1)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      color: "var(--ink-3)"
    }
  }, fmt(r.reviews)), /*#__PURE__*/React.createElement("td", {
    className: "num ds-score"
  }, r.total.toFixed(1)), /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, r.s.access.toFixed(1)), /*#__PURE__*/React.createElement("td", {
    style: {
      color: "var(--ink-2)"
    }
  }, r.bts)))))));
}
window.Dataset = Dataset;
