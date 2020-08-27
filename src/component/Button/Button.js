import React from "react";
import "./Button.scss";

export default function Button(props) {
  const handleNextLevel = () => {
    props.onNextLevel();
  };
  const CSSClass = props.isActive ? " btn-success" : " btn-secondary";

  return (
    <div className="button-container">
      <button
        className={"btn btn-block" + CSSClass}
        onClick={handleNextLevel}
        disabled={!props.isActive}
      >
        {props.isLastRound ? "Результат" : "Следующий уровень"}
      </button>
    </div>
  );
}
