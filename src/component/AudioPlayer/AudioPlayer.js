import React from "react";
import ReactPlayer, { RHAP_UI } from "react-h5-audio-player";
import "./AudioPlayer.scss";

export default function AudioPlayer({ audio }) {
  return (
    <ReactPlayer
      src={audio}
      showJumpControls={false}
      autoPlayAfterSrcChange={false}
      autoPlay={false}
      customAdditionalControls={[]}
      customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
      layout={"horizontal-reverse"}
    />
  );
}
