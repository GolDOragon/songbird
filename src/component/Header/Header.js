import React from "react";
import "./Header.scss";

export default function Header({ activeCategory, score, categories }) {
  const getCSSClass = (name) => {
    let CSSClass = "categories_item page-link";
    if (name === activeCategory) CSSClass += " active";
    return CSSClass;
  };

  return (
    <header>
      <div className="header_top-panel d-flex">
        <div className="top-panel_logo"></div>
        <h5 className="top-panel_score">Score: {score}</h5>
      </div>
      <ul className="header_categories pagination">
        {categories.map((category, i) => (
          <li className={getCSSClass(category)} key={i}>
            {category}
          </li>
        ))}
      </ul>
    </header>
  );
}
