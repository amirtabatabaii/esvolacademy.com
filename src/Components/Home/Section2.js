import React from "react";
import { Row, Col } from "react-bootstrap";
import { Animated } from "react-animated-css";

import "./Home.css";
import Esvol from "../../assets/img/home-3.png";
import HomeImage from "../Utility/HomeImage";
import TranslateText from "../Translate/TranslateText";

function Section2() {
  return (
    <Row className='w-100 text-center'>
      <Col lg={5} md={5} sm={12} xs={12} className='my-auto'>
        <HomeImage
          animationIn='fadeInLeft'
          animationInDuration={1000}
          ImageSrc={Esvol}
          alt='esvol'
          width='100%'
        />
      </Col>

      <Col lg={7} md={7} sm={12} xs={12}>
        <div>
          <Animated animationIn='fadeIn' animationInDuration={1500}>
            <div className='note-txt-header2'>
              <TranslateText txt='Home-Section2-HeadText' />
            </div>
            <div className='note-txt'>
              <TranslateText txt='Home-Section2-text' />
            </div>
          </Animated>
        </div>
      </Col>
    </Row>
  );
}

export default Section2;
