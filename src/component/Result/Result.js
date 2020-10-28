import React from "react";
import "./Result.scss";

export default function Result({ score, roundCount, onStartNewGame }) {
  const maxScore = roundCount * 5;

  const handleStartNewGame = () => {
    onStartNewGame();
  }

  return (
    <>
      <div className="result card">
        <div className="card-body">
          <h2 className="card-title">Поздравляем!</h2>
          <h3>
            Вы набрали {score} из {maxScore}!
          </h3>
          <h3>
            Это{" "}
            {score === maxScore
              ? "потрясающий"
              : score > maxScore - 5
              ? "превосходный"
              : score > maxScore - 10
              ? "хороший"
              : score > maxScore - 15
              ? "нормальный"
              : "неплохой"}{" "}
            результат. {score < maxScore - 10 && "Но стоит повторить."}
          </h3>
        </div>
      </div>
      <div style={{ padding: "1rem 0" }}>
        <button className="btn btn-block btn-info" onClick={handleStartNewGame}>Новая игра</button>
      </div>
    </>
  );
}
