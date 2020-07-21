import React from "react";
import { Image } from "react-bootstrap";
import { Animated } from "react-animated-css";

function HomeImage(props) {
  return (
    <Animated
      animationIn={props.animationIn}
      animationInDuration={props.animationInDuration}
    >
      <Image src={props.ImageSrc} alt={props.alt} fluid width={props.width} />
    </Animated>
  );
}
export default HomeImage;
