"use client";

import { useState } from "react";
import articles from "../data/articles.json";

export default function Articles() {
  const categories = ["all", ...new Set(articles.map((a) => a.category))];
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? articles : articles.filter((a) => a.category === active);

  return (
    <div>
      <div className="filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={"filter-btn" + (active === cat ? " active" : "")}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.map((a, i) => (
        <div className="article-item" key={i}>
          <a href={a.link} target="_blank" rel="noopener noreferrer">
            {a.title}
          </a>
          <span className="article-date">{a.date}</span>
        </div>
      ))}
    </div>
  );
}
