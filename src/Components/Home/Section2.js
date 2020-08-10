import React from "react";
import { Row, Col } from "react-bootstrap";
import { Animated } from "react-animated-css";

import "./Home.css";
import Esvol from "../../assets/img/home.png";
import HomeImage from "../Utility/HomeImage";
import TranslateText from "../Translate/TranslateText";

function Section2() {
  return (
    <div>
      <Row className='w-100 text-center m-auto'>
        <Col lg={5} md={5} sm={12} xs={12} className='m-auto'>
          <HomeImage
            animationIn='fadeInRight'
            animationInDuration={1000}
            ImageSrc={Esvol}
            alt='esvol'
            width='28%'
          />
        </Col>

        <Col lg={7} md={7} sm={12} xs={12}>
          <div className='note-txt m-auto p-3'>
            <Animated animationIn='fadeIn' animationInDuration={1500}>
              <TranslateText txt='Home-Section2-text' />
            </Animated>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Section2;
