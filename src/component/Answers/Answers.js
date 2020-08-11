import React, { useState } from "react";
import "./Answers.scss";
import getCSSClass from "../../core/getCSSButton";

export default function Answers(props) {
  const [score, setScore] = useState(5);
  const [birdList, setBirdList] = useState(
    props.birds.map((bird) => ({
      ...bird,
      checked: false,
    }))
  );

  function getStatus(selectBirdID, score) {
    const status = {
      id: selectBirdID,
      score,
      isSuccess: false,
    };
    if (selectBirdID === props.rightAnswer) status.isSuccess = true;
    return status;
  }

  function handleSelectBird(id) {
    setBirdList(
      birdList.map((bird) => {
        const newValue = {
          ...bird,
        };

        if (bird.id === id) newValue.checked = true;
        return newValue;
      })
    );

    const isSuccess = props.rightAnswer === id;

    if (!isSuccess) setScore(score - 1);
    props.onSelectBird(getStatus(id, score));
  }

  return (
    <ul className="birds-list list-group">
      {birdList.map((bird) => (
        <MenuItem
          name={bird.name}
          id={bird.id}
          isRight={props.rightAnswer === bird.id}
          checked={bird.checked}
          onSelectBird={(id) => handleSelectBird(id)}
        />
      ))}
    </ul>
  );
}

function MenuItem(props) {
  const handleClick = (id) => {
    props.onSelectBird(id);
  };

  return (
    <li className="li-group-item" onClick={() => handleClick(props.id)}>
      <span className={getCSSClass(props.isRight, props.checked)}></span>
      {props.name}
    </li>
  );
}
