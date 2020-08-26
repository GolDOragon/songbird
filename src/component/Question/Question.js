import React from "react";
import defaultImage from "../../assets/img/defaultBird.jpg";
import successSound from "../../assets/sound/success.wav";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import "./Question.scss";
import { useEffect, useState } from "react";

export default function Question({ birdInfo, isDefault }) {
  const [sound, setSound] = useState(birdInfo.audio);

  useEffect(() => {
    if (isDefault) {
      setSound(birdInfo.audio);
    } else {
      setSound(successSound);
    }
  }, [isDefault, birdInfo.audio]);

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

        <li className="bird-details_audio-player">
          <AudioPlayer audio={sound} />
        </li>
      </ul>
    </div>
  );
}
