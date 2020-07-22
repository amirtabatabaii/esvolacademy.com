import React from "react";
import { Animated } from "react-animated-css";
import TranslateText from "../Translate/TranslateText";

const StartButton = () => {
  return (
    <Animated animationIn='shake' animationInDuration={1500}>
      <div className='wrap'>
        <button className='button'>
          <TranslateText txt='Start-Button' />
        </button>
      </div>
    </Animated>
  );
};

export default StartButton;
