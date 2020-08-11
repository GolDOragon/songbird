import React from "react";
import "./BirdCard.scss";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import defaultImage from "../../assets/img/defaultBird.jpg";

/**
 *  Create Bird card
 * @example
 * <BirdCard birdConfig={Object} isFull={Boolean} isDefault={Boolean} isHideCard={Boolean} />
 */
export default function BirdCard(props) {
  const {
    birdInfo,
    isFull = true,
    isDefault = false,
    isHideCard = false,
  } = props;
  return (
    <div className={`bird-card card ${isFull ? "full-height" : ""}`}>
      {isHideCard && <Instruction />}
      {!isHideCard && (
        <CardBody birdInfo={birdInfo} isDefault={isDefault} isFull={isFull} />
      )}
      {isFull && (
        <Description description={birdInfo.description} isDefault={isDefault} />
      )}
    </div>
  );
}

function Instruction() {
  return (
    <p className="instruction">
      <span>Послушайте плеер.</span>
      <span>Выберите птицу из списка.</span>
    </p>
  );
}

function CardBody(props) {
  const { birdInfo, isDefault, isFull } = props;

  return (
    <div className="card-body bird-details">
      {isDefault && (
        <img
          className="bird-details_image"
          src={defaultImage}
          alt="*****"
        ></img>
      )}
      {!isDefault && (
        <img
          className="bird-details_image"
          src={birdInfo.image}
          alt={birdInfo.name}
        />
      )}
      <ul className="list-group list-group-flush">
        {isDefault && (
          <li className="bird-details_name list-group-item">*****</li>
        )}
        {!isDefault && (
          <li className="bird-details_name list-group-item">{birdInfo.name}</li>
        )}
        {isFull && <Species species={birdInfo.species} isDefault={isDefault} />}
        <li className="bird-details_audio-player">
          <AudioPlayer />
        </li>
      </ul>
    </div>
  );
}

function Species(props) {
  const { isDefault, species } = props;
  return (
    <>
      {isDefault && (
        <li className="bird-details_species list-group-item">*****</li>
      )}
      {!isDefault && (
        <li className="bird-details_species list-group-item">{species}</li>
      )}
    </>
  );
}

function Description(props) {
  const { isDefault, description } = props;

  return (
    <>
      {isDefault && (
        <div className="bird-details_description list-group-item">*****</div>
      )}
      {!isDefault && (
        <div className="bird-details_description list-group-item">
          {description}
        </div>
      )}
    </>
  );
}
