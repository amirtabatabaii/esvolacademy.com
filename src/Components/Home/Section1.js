import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { Animated } from "react-animated-css";

import "./Section1.css";
import ImageLanguage from "../Translate/Home/ImageLanguage";
import Section11 from "../Translate/Home/Section11";
import Esvol from "../../assets/img/home.png";
import StartButton from "./StartButton";

function Section1() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        position: "relative",
      }}
    >
      <Row className='w-100 text-center'>
        <Col lg={6} md={6} sm={6} xs={6}>
          <p className='m-auto pt-3 pb-3'>
            <Animated animationIn='fadeInDown' animationInDuration={1000}>
              <ImageLanguage />
            </Animated>
          </p>

          <p className='note-txt m-auto pl-3'>
            <Animated animationIn='fadeIn' animationInDuration={1500}>
              <Section11 />
            </Animated>

            <Animated animationIn='shake' animationInDuration={1500}>
              <StartButton />
            </Animated>
          </p>
        </Col>

        <Col lg={6} md={6} sm={6} xs={6} className='m-auto'>
          <Animated animationIn='fadeInLeft' animationInDuration={1000}>
            <Image src={Esvol} alt='esvol' width='38%' />
          </Animated>
        </Col>
      </Row>
    </div>
  );
}

export default Section1;
