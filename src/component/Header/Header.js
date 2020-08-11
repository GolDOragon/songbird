import React from "react";
import "./header.scss";

export default function Header(props) {
  const { activeCategory } = props;
  const getCSSClass = (index) => {
    let CSSClass = "categories_item page-link";
    if (index === activeCategory) CSSClass += " active";
    return CSSClass;
  };

  return (
    <header>
      <div className="header_top-panel d-flex">
        <div className="top-panel_logo"></div>
        <h5 className="top-panel_score">Score: {props.score}</h5>
      </div>
      <ul className="header_categories pagination">
        {props.categories.map((category, i) => (
          <li className={getCSSClass(i)} key={category.id}>
            {category.name}
          </li>
        ))}
      </ul>
    </header>
  );
}
