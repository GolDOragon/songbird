import React from "react";
import defaultImage from "../../assets/img/defaultBird.jpg";
import AudioPlayer from "react-player";
// import BirdCard from "../BirdCard/BirdCard";
import "./Question.scss";

export default function Question(props) {
  const { birdInfo, isDefault } = props;
  return (
    <div className="bird-question card-body">
      <img
        className="bird-details_image"
        src={isDefault ? defaultImage : birdInfo.image}
        alt={isDefault ? "*****" : birdInfo.name}
      />

      <ul className="list-group list-group-flush">
        <li className="bird-details_name list-group-item">
          <h2>{isDefault ? "*****" : birdInfo.name}</h2>
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
