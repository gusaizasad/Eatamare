// pre-compiled from components-2.jsx — do not edit
/* ============================================================
   Restaurant Decision Report — Ranking, Top3, Comparison
   ============================================================ */

const {
  useState: useStateR
} = React;
const SORT_OPTIONS = [{
  key: "total",
  label: "คะแนนรวม",
  max: 100,
  suffix: "/100"
}, {
  key: "access",
  label: "การเดินทาง",
  max: 10,
  suffix: "/10",
  sub: "การเดินทาง"
}, {
  key: "ambience",
  label: "บรรยากาศ",
  max: 10,
  suffix: "/10",
  sub: "บรรยากาศ"
}, {
  key: "menu",
  label: "อาหาร",
  max: 10,
  suffix: "/10",
  sub: "ความหลากหลายของเมนู"
}, {
  key: "price",
  label: "ราคา",
  max: 10,
  suffix: "/10",
  sub: "ความคุ้มราคา"
}];
const getScore = (r, key) => key === "total" ? r.total : r.s[key];

/* ---------- Top 10 ranking ---------- */
function Ranking({
  area
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "block",
    id: "ranking",
    style: {
      background: "var(--bg-2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "section-num"
  }, "05 / TOP 10 RANKING"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "\u0E08\u0E31\u0E14\u0E2D\u0E31\u0E19\u0E14\u0E31\u0E1A Top 10 \u0E43\u0E19", area.name), /*#__PURE__*/React.createElement("span", {
    className: "section-sub"
  }, "\u0E04\u0E25\u0E34\u0E01\u0E41\u0E15\u0E48\u0E25\u0E30\u0E41\u0E16\u0E27\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E04\u0E30\u0E41\u0E19\u0E19\u0E22\u0E48\u0E2D\u0E22 \u0E08\u0E38\u0E14\u0E40\u0E14\u0E48\u0E19 \u0E41\u0E25\u0E30\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E23\u0E23\u0E30\u0E27\u0E31\u0E07")), /*#__PURE__*/React.createElement(AreaRanking, {
    area: area
  })));
}
function AreaRanking({
  area
}) {
  const [expanded, setExpanded] = useStateR(null);
  const ranked = [...(window.RESTAURANTS[area.id] || [])].sort((a, b) => b.total - a.total).slice(0, 10);
  return /*#__PURE__*/React.createElement("div", {
    className: "area-section",
    id: "ranking-" + area.id
  }, /*#__PURE__*/React.createElement("div", {
    className: "area-section-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "swatch-lg",
    style: {
      background: area.color
    }
  }), /*#__PURE__*/React.createElement("h3", null, area.name), /*#__PURE__*/React.createElement("span", {
    className: "en"
  }, area.en), /*#__PURE__*/React.createElement("span", {
    className: "count"
  }, ranked.length, " \u0E23\u0E49\u0E32\u0E19")), /*#__PURE__*/React.createElement("div", {
    className: "ranking"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rank-head"
  }, /*#__PURE__*/React.createElement("span", null, "\u0E2D\u0E31\u0E19\u0E14\u0E31\u0E1A"), /*#__PURE__*/React.createElement("span", null, "\u0E23\u0E49\u0E32\u0E19"), /*#__PURE__*/React.createElement("span", null, "\u0E01\u0E32\u0E23\u0E40\u0E14\u0E34\u0E19\u0E17\u0E32\u0E07 / \u0E23\u0E31\u0E1A\u0E01\u0E25\u0E38\u0E48\u0E21"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "right"
    }
  }, "\u0E23\u0E32\u0E04\u0E32/\u0E04\u0E19"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "right"
    }
  }, "\u0E23\u0E35\u0E27\u0E34\u0E27"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "right"
    }
  }, "\u0E01\u0E25\u0E38\u0E48\u0E21"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "right"
    }
  }, "\u0E23\u0E32\u0E04\u0E32"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "right"
    }
  }, "\u0E40\u0E14\u0E34\u0E19\u0E17\u0E32\u0E07"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "right"
    }
  }, "\u0E23\u0E27\u0E21"), /*#__PURE__*/React.createElement("span", null)), ranked.map((r, i) => {
    const isOpen = expanded === r.id;
    const rankClass = i === 0 ? "top1" : i === 1 ? "top2" : i === 2 ? "top3" : "";
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: r.id
    }, /*#__PURE__*/React.createElement("div", {
      className: "rank-row " + rankClass + (isOpen ? " expanded" : ""),
      onClick: () => setExpanded(isOpen ? null : r.id)
    }, /*#__PURE__*/React.createElement("div", {
      className: "rank-num"
    }, /*#__PURE__*/React.createElement("span", {
      className: "hash"
    }, "#"), i + 1), /*#__PURE__*/React.createElement("div", {
      className: "rank-name"
    }, r.name, /*#__PURE__*/React.createElement("div", {
      className: "cuisine"
    }, r.cuisine, " \xB7 ", r.price)), /*#__PURE__*/React.createElement("div", {
      className: "rank-meta"
    }, /*#__PURE__*/React.createElement("div", null, r.bts), /*#__PURE__*/React.createElement("div", {
      className: "small"
    }, r.capacity)), /*#__PURE__*/React.createElement("div", {
      className: "rank-cell"
    }, "\u0E3F", fmt(r.ppp)), /*#__PURE__*/React.createElement("div", {
      className: "rank-cell"
    }, "\u2605 ", r.rating, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: "var(--ink-3)"
      }
    }, "(", fmt(r.reviews), ")")), /*#__PURE__*/React.createElement("div", {
      className: "rank-cell"
    }, r.s.group.toFixed(1)), /*#__PURE__*/React.createElement("div", {
      className: "rank-cell"
    }, r.s.price.toFixed(1)), /*#__PURE__*/React.createElement("div", {
      className: "rank-cell"
    }, r.s.access.toFixed(1)), /*#__PURE__*/React.createElement("div", {
      className: "rank-score"
    }, r.total.toFixed(1), " ", /*#__PURE__*/React.createElement("span", {
      className: "max"
    }, "/100")), /*#__PURE__*/React.createElement("div", {
      className: "chev"
    }, "\u25BE")), isOpen && /*#__PURE__*/React.createElement(RankDetail, {
      r: r
    }));
  })));
}
function RankDetail({
  r
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "rank-detail fade-in"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      color: "var(--ink-3)",
      margin: "0 0 12px"
    }
  }, "\u0E04\u0E30\u0E41\u0E19\u0E19\u0E22\u0E48\u0E2D\u0E22 (\u0E08\u0E32\u0E01 10)"), /*#__PURE__*/React.createElement("div", {
    className: "score-bars"
  }, window.SCORING.map(c => {
    const v = r.s[c.key];
    return /*#__PURE__*/React.createElement("div", {
      className: "score-bar-row",
      key: c.key
    }, /*#__PURE__*/React.createElement("div", {
      className: "score-bar-label"
    }, c.label, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--ink-3)",
        fontSize: 12
      }
    }, "(", c.weight, "%)")), /*#__PURE__*/React.createElement("div", {
      className: "score-bar-track"
    }, /*#__PURE__*/React.createElement("div", {
      className: "score-bar-fill",
      style: {
        width: v * 10 + "%"
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "score-bar-val"
    }, v.toFixed(1)));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "detail-side"
  }, /*#__PURE__*/React.createElement("h4", null, "\u0E08\u0E38\u0E14\u0E40\u0E14\u0E48\u0E19"), /*#__PURE__*/React.createElement("ul", null, r.pros.map((p, i) => /*#__PURE__*/React.createElement("li", {
    className: "pro",
    key: i
  }, p))), /*#__PURE__*/React.createElement("h4", null, "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E23\u0E23\u0E30\u0E27\u0E31\u0E07"), /*#__PURE__*/React.createElement("ul", null, r.cons.map((p, i) => /*#__PURE__*/React.createElement("li", {
    className: "con",
    key: i
  }, p))), /*#__PURE__*/React.createElement("h4", null, "\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19"), /*#__PURE__*/React.createElement("a", {
    href: "https://" + r.source,
    target: "_blank",
    rel: "noopener",
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12
    }
  }, "\u2197 ", r.source)));
}

/* ---------- Top 3 cards ---------- */
function Top3({
  area
}) {
  const [sortKey, setSortKey] = useStateR("total");
  const opt = SORT_OPTIONS.find(o => o.key === sortKey);
  return /*#__PURE__*/React.createElement("section", {
    className: "block",
    id: "top3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "section-num"
  }, "06 / TOP 3 RECOMMENDATION"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "3 \u0E2D\u0E31\u0E19\u0E14\u0E31\u0E1A\u0E41\u0E23\u0E01\u0E43\u0E19", area.name), /*#__PURE__*/React.createElement("span", {
    className: "section-sub"
  }, "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E40\u0E01\u0E13\u0E11\u0E4C\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E2D\u0E31\u0E19\u0E14\u0E31\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07 \xB7 \u0E43\u0E0A\u0E49\u0E15\u0E31\u0E14\u0E2A\u0E34\u0E19\u0E43\u0E08\u0E44\u0E14\u0E49\u0E17\u0E31\u0E19\u0E17\u0E35")), /*#__PURE__*/React.createElement("div", {
    className: "sort-pills"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "\u0E08\u0E31\u0E14\u0E2D\u0E31\u0E19\u0E14\u0E31\u0E1A\u0E15\u0E32\u0E21"), SORT_OPTIONS.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.key,
    className: "sort-pill" + (o.key === sortKey ? " active" : ""),
    onClick: () => setSortKey(o.key)
  }, o.label))), /*#__PURE__*/React.createElement(AreaTop3, {
    area: area,
    sortKey: sortKey,
    opt: opt
  })));
}
function AreaTop3({
  area,
  sortKey,
  opt
}) {
  const list = window.RESTAURANTS[area.id] || [];
  const top3 = [...list].sort((a, b) => getScore(b, sortKey) - getScore(a, sortKey)).slice(0, 3);
  const reasons = (r, rank) => {
    if (sortKey === "total") {
      if (rank === 0) return `ตัวเลือกที่ปลอดภัยที่สุดใน${area.name} — คะแนนสูงทั้ง 3 หมวดหลัก (กลุ่ม ${r.s.group}, เดินทาง ${r.s.access}, รีวิว ${r.s.rating})`;
      if (rank === 1) return `ทางเลือกที่ดีถ้าตัวที่ 1 จองเต็ม — ห่างจากที่ 1 ไม่ถึง 2 คะแนน และ${r.pros[0].toLowerCase()}`;
      return `เลือกตัวนี้ถ้าทีมอยากลองอะไรใหม่ — ${r.pros[0].toLowerCase()} แต่ระวัง: ${r.cons[0].toLowerCase()}`;
    }
    // sub-score reasoning
    const subMap = {
      access: `เด่นที่สุดเรื่องการเดินทาง — ${r.bts}`,
      ambience: `บรรยากาศเด่นที่สุดในย่าน — ${r.pros[0].toLowerCase()}`,
      menu: `เมนูครบและหลากหลายที่สุด — เหมาะสำหรับทีมที่มีข้อจำกัดทางอาหาร`,
      price: `คุ้มราคาที่สุดในย่าน — เพียง ฿${fmt(r.ppp)}/คน`
    };
    return subMap[sortKey] + (rank > 0 ? ` (อันดับ ${rank + 1})` : "");
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "area-section",
    id: "top3-" + area.id
  }, /*#__PURE__*/React.createElement("div", {
    className: "area-section-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "swatch-lg",
    style: {
      background: area.color
    }
  }), /*#__PURE__*/React.createElement("h3", null, area.name), /*#__PURE__*/React.createElement("span", {
    className: "en"
  }, area.en), /*#__PURE__*/React.createElement("span", {
    className: "count"
  }, "\u0E40\u0E23\u0E35\u0E22\u0E07\u0E15\u0E32\u0E21 ", opt.label)), /*#__PURE__*/React.createElement("div", {
    className: "top3-grid"
  }, top3.map((r, i) => {
    const primary = getScore(r, sortKey);
    return /*#__PURE__*/React.createElement("div", {
      key: r.id,
      className: "t3-card " + (i === 0 ? "gold" : "")
    }, /*#__PURE__*/React.createElement("span", {
      className: "medal"
    }, i === 0 ? "★ ที่ 1" : i === 1 ? "ที่ 2" : "ที่ 3"), /*#__PURE__*/React.createElement("div", {
      className: "rk"
    }, "#", i + 1), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 18
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "nm"
    }, r.name), /*#__PURE__*/React.createElement("div", {
      className: "cz"
    }, r.cuisine, " \xB7 ", r.price, " \xB7 \u0E3F", fmt(r.ppp), "/\u0E04\u0E19"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "score-label"
    }, sortKey === "total" ? "คะแนนรวม" : opt.label), /*#__PURE__*/React.createElement("div", {
      className: "score-big"
    }, primary.toFixed(1), " ", /*#__PURE__*/React.createElement("span", {
      className: "max"
    }, opt.suffix)), sortKey !== "total" && /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        color: "var(--ink-3)",
        marginTop: 6
      }
    }, "\u0E04\u0E30\u0E41\u0E19\u0E19\u0E23\u0E27\u0E21 ", r.total.toFixed(1), "/100")), /*#__PURE__*/React.createElement("div", {
      className: "quick-facts"
    }, /*#__PURE__*/React.createElement("div", {
      className: "qf"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k"
    }, "\u0E01\u0E32\u0E23\u0E40\u0E14\u0E34\u0E19\u0E17\u0E32\u0E07"), /*#__PURE__*/React.createElement("div", {
      className: "v"
    }, r.bts)), /*#__PURE__*/React.createElement("div", {
      className: "qf"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k"
    }, "\u0E23\u0E31\u0E1A\u0E01\u0E25\u0E38\u0E48\u0E21"), /*#__PURE__*/React.createElement("div", {
      className: "v"
    }, r.capacity)), /*#__PURE__*/React.createElement("div", {
      className: "qf"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k"
    }, "\u0E23\u0E35\u0E27\u0E34\u0E27"), /*#__PURE__*/React.createElement("div", {
      className: "v"
    }, "\u2605 ", r.rating, " \xB7 (", fmt(r.reviews), ")")), /*#__PURE__*/React.createElement("div", {
      className: "qf"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k"
    }, "\u0E04\u0E30\u0E41\u0E19\u0E19\u0E01\u0E25\u0E38\u0E48\u0E21"), /*#__PURE__*/React.createElement("div", {
      className: "v"
    }, r.s.group.toFixed(1), " / 10"))), /*#__PURE__*/React.createElement("div", {
      className: "why"
    }, /*#__PURE__*/React.createElement("h5", null, "\u0E17\u0E33\u0E44\u0E21\u0E16\u0E36\u0E07\u0E41\u0E19\u0E30\u0E19\u0E33"), /*#__PURE__*/React.createElement("p", null, reasons(r, i))), /*#__PURE__*/React.createElement("div", {
      className: "source-link"
    }, /*#__PURE__*/React.createElement("span", null, "\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19:"), /*#__PURE__*/React.createElement("a", {
      href: "https://" + r.source,
      target: "_blank",
      rel: "noopener"
    }, "\u2197 ", r.source)));
  })));
}

/* ---------- Comparison ---------- */
function Comparison({
  restaurants,
  area
}) {
  const top3 = [...restaurants].sort((a, b) => b.total - a.total).slice(0, 3);
  return /*#__PURE__*/React.createElement("section", {
    className: "block",
    id: "compare",
    style: {
      background: "var(--bg-2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "section-num"
  }, "07 / COMPARISON"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "\u0E40\u0E1B\u0E23\u0E35\u0E22\u0E1A\u0E40\u0E17\u0E35\u0E22\u0E1A 3 \u0E23\u0E49\u0E32\u0E19\u0E40\u0E14\u0E48\u0E19\u0E43\u0E19", area.name), /*#__PURE__*/React.createElement("span", {
    className: "section-sub"
  }, "\u0E21\u0E35 trade-off \u0E17\u0E38\u0E01\u0E15\u0E31\u0E27 \u2014 \u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E0A\u0E21\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E14\u0E35\u0E22\u0E27 \xB7 \u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E22\u0E48\u0E32\u0E19\u0E44\u0E14\u0E49\u0E17\u0E35\u0E48\u0E41\u0E16\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E1A\u0E19")), /*#__PURE__*/React.createElement("table", {
    className: "compare-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null), top3.map((r, i) => /*#__PURE__*/React.createElement("th", {
    key: r.id,
    style: {
      width: "28%"
    }
  }, /*#__PURE__*/React.createElement("div", null, i === 0 ? "★ " : "", r.name), /*#__PURE__*/React.createElement("div", {
    className: "small"
  }, r.cuisine, " \xB7 ", r.total.toFixed(1), "/100"))))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "\u0E23\u0E32\u0E04\u0E32/\u0E04\u0E19"), top3.map(r => /*#__PURE__*/React.createElement("td", {
    key: r.id
  }, "\u0E3F", fmt(r.ppp), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-3)",
      fontSize: 12
    }
  }, "(", r.price, ")")))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "\u0E01\u0E32\u0E23\u0E40\u0E14\u0E34\u0E19\u0E17\u0E32\u0E07"), top3.map(r => /*#__PURE__*/React.createElement("td", {
    key: r.id
  }, r.bts))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "\u0E23\u0E31\u0E1A\u0E01\u0E25\u0E38\u0E48\u0E21 8\u201312"), top3.map(r => /*#__PURE__*/React.createElement("td", {
    key: r.id
  }, r.capacity))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "\u0E23\u0E35\u0E27\u0E34\u0E27"), top3.map(r => /*#__PURE__*/React.createElement("td", {
    key: r.id
  }, "\u2605 ", r.rating, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-3)",
      fontSize: 12
    }
  }, "(", fmt(r.reviews), " \u0E23\u0E35\u0E27\u0E34\u0E27)")))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "\u0E08\u0E38\u0E14\u0E40\u0E14\u0E48\u0E19"), top3.map(r => /*#__PURE__*/React.createElement("td", {
    key: r.id
  }, r.pros.map((p, i) => /*#__PURE__*/React.createElement("span", {
    className: "pro",
    key: i
  }, p))))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E23\u0E23\u0E30\u0E27\u0E31\u0E07"), top3.map(r => /*#__PURE__*/React.createElement("td", {
    key: r.id
  }, r.cons.map((p, i) => /*#__PURE__*/React.createElement("span", {
    className: "con",
    key: i
  }, p))))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "\u0E40\u0E2B\u0E21\u0E32\u0E30\u0E01\u0E31\u0E1A\u0E40\u0E21\u0E37\u0E48\u0E2D\u2026"), top3.map((r, i) => /*#__PURE__*/React.createElement("td", {
    key: r.id,
    style: {
      fontSize: 13,
      color: "var(--ink-2)"
    }
  }, i === 0 && "ทีมอยากเล่นปลอดภัย ไม่อยากเสี่ยง", i === 1 && "ตัวที่ 1 จองเต็ม หรือทีมอยากลองอะไรต่างจากเดิมเล็กน้อย", i === 2 && "ทีมอยากลองของใหม่ และยอมรับ trade-off ข้างต้นได้"))), /*#__PURE__*/React.createElement("tr", {
    className: "verdict-row"
  }, /*#__PURE__*/React.createElement("th", {
    style: {
      background: "transparent"
    }
  }, "\u0E04\u0E33\u0E41\u0E19\u0E30\u0E19\u0E33\u0E2A\u0E38\u0E14\u0E17\u0E49\u0E32\u0E22"), /*#__PURE__*/React.createElement("td", {
    colSpan: "3"
  }, /*#__PURE__*/React.createElement("strong", null, "\u0E40\u0E25\u0E37\u0E2D\u0E01 ", top3[0].name), " \u0E40\u0E1B\u0E47\u0E19\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2B\u0E25\u0E31\u0E01 \u0E41\u0E25\u0E30\u0E08\u0E2D\u0E07 ", top3[1].name, " \u0E40\u0E1B\u0E47\u0E19 backup \u2014 \u0E16\u0E49\u0E32\u0E17\u0E35\u0E21\u0E2D\u0E22\u0E32\u0E01\u0E25\u0E2D\u0E07\u0E2D\u0E30\u0E44\u0E23\u0E43\u0E2B\u0E21\u0E48\u0E1A\u0E48\u0E32\u0E22\u0E27\u0E31\u0E19\u0E28\u0E38\u0E01\u0E23\u0E4C\u0E2B\u0E19\u0E49\u0E32 \u0E04\u0E48\u0E2D\u0E22\u0E40\u0E25\u0E37\u0E2D\u0E01 ", top3[2].name))))));
}
Object.assign(window, {
  Ranking,
  Top3,
  Comparison
});
