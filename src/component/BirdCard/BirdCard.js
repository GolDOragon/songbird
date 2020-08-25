import React from "react";
import AudioPlayer from "react-player";
import "./BirdCard.scss";

/**
 *  Create Bird card
 * @example
 * <BirdCard birdConfig={Object} isFull={Boolean} isDefault={Boolean} isHideCard={Boolean} />
 */
export default function BirdCard(props) {
  const { birdInfo, isHideCard = false } = props;

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

function CardBody(props) {
  const { birdInfo } = props;

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
          style={{ height: "40px", marginTop: "10px" }}
        >
          <AudioPlayer
            url={birdInfo.audio}
            controls={true}
            width="100%"
            height="100%"
            style={{ color: "black" }}
          />
        </li>
      </ul>
    </div>
  );
}

function Description(props) {
  const { description } = props;

  return (
    <div className="bird-details_description list-group-item">
      {description}
    </div>
  );
}
