import React from "react";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import "./BirdCard.scss";

/**
 *  Create Bird card
 * @example
 * <BirdCard birdConfig={Object} isFull={Boolean} isDefault={Boolean} isHideCard={Boolean} />
 */
export default function BirdCard({ birdInfo }) {
  const isHideCard = !birdInfo;

  return (
    <div className={"bird-card card full-height"}>
      {isHideCard && <Instruction />}
      {!isHideCard && (
        <>
          <CardBody birdInfo={birdInfo} />
          <Description description={birdInfo.description} />
        </>
      )}
    </div>
  );
}

function Instruction() {
  return (
    <p className="instruction">
      <span>Послушайте плеер. </span>
      <span>Выберите птицу из списка.</span>
    </p>
  );
}

function CardBody({ birdInfo }) {
  return (
    <div className="card-body bird-details">
      <img
        className="bird-details_image"
        src={birdInfo.image}
        alt={birdInfo.name}
      />

      <ul className="list-group list-group-flush">
        <li className="bird-details_name list-group-item">
          <h2>{birdInfo.name}</h2>
        </li>

        <li className="bird-details_species list-group-item">
          <h4>{birdInfo.species}</h4>
        </li>

        <li
          className="bird-details_audio-player"
          style={{ height: "50px", marginTop: "10px" }}
        >
          <AudioPlayer audio={birdInfo.audio} />
        </li>
      </ul>
    </div>
  );
}

function Description({ description }) {
  return (
    <div className="bird-details_description list-group-item">
      {description}
    </div>
  );
}
