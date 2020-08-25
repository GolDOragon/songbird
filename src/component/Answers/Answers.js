import React, { useState } from "react";
import getCSSClass from "../../core/getCSSButton";
import "./Answers.scss";

export default function Answers(props) {
  const { rightAnswer, birds } = props;
  // const [win, setWin] = useState(false);
  const [score, setScore] = useState(5);

  const handleSelectBird = (id) => {
    if (rightAnswer !== id) setScore(score - 1);

    const report = getReport(rightAnswer, id, score);
    props.onSelectBird(report);
  };

  const handleRepeatBird = (id) => {
    const report = getReport(rightAnswer, id, score, true);
    props.onRepeatBird(report);
  };

  return (
    <div className="card bg-dark">
      <ul className="birds-list list-group card-body">
        {birds.map((bird) => (
          <MenuItem
            key={bird.id.toString()}
            name={bird.name}
            id={bird.id}
            isRight={rightAnswer === bird.id}
            onSelectBird={(id) => handleSelectBird(id)}
            onRepeatBird={(id) => handleRepeatBird(id)}
          />
        ))}
      </ul>
    </div>
  );
}

function MenuItem(props) {
  const [isChecked, setIsChecked] = useState(false);
  const handleClick = (id) => {
    if (!isChecked) {
      setIsChecked(true);
      props.onSelectBird(id);
    } else {
      props.onRepeatBird(id);
    }
  };

  return (
    <li className="li-group-item" onClick={() => handleClick(props.id)}>
      <span className={getCSSClass(props.isRight, isChecked)}></span>
      {props.name}
    </li>
  );
}

function getReport(rightBirdID, id, score, isRepeat = false) {
  const report = {
    id,
    score,
    status: id === rightBirdID ? "success" : "failure",
  };
  if (isRepeat) report.status = "repeat";

  return report;
}
