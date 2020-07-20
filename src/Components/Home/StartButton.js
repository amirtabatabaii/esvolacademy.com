import React from "react";
import StartBtn from "../Translate/Home/StartBtn";
import { Animated } from "react-animated-css";

function StartButton() {
  return (
    <Animated animationIn='shake' animationInDuration={1500}>
      <div className='wrap'>
        <button className='button'>
          <StartBtn />
        </button>
      </div>
    </Animated>
  );
}

export default StartButton;
