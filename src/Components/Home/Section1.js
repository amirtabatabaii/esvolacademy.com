import React from "react";
import { Row, Col } from "react-bootstrap";

import "./Section1.css";
import ImageLanguage from "../Translate/Home/ImageLanguage";
import Section11 from "../Translate/Home/Section11";
import Esvol from "../../assets/img/home.png";
import StartButton from "./StartButton";
import HomeImage from "../Utility/Home/HomeImage";

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
            <ImageLanguage />
          </p>

          <p className='note-txt m-auto pl-3'>
            <Section11 />
            <StartButton />
          </p>
        </Col>

        <Col lg={6} md={6} sm={6} xs={6} className='m-auto'>
          <HomeImage
            animationIn='fadeInLeft'
            animationInDuration='1000'
            ImageSrc={Esvol}
            alt='esvol'
            width='38%'
          />
        </Col>
      </Row>
    </div>
  );
}

export default Section1;
