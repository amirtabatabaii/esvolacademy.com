import React from "react";
import { Row, Col } from "react-bootstrap";
import { Animated } from "react-animated-css";

import "./Home.css";
import Esvol from "../../assets/img/home-3.png";
import HomeImage from "../Utility/HomeImage";
import TranslateText from "../Translate/TranslateText";
import { Link } from "react-router-dom";

function Section1() {
  return (
    <Row className='w-100 text-center'>
      <Col lg={7} md={7} sm={12} xs={12}>
        <div>
          <Animated animationIn='fadeIn' animationInDuration={1500}>
            <div className='note-txt-header'>
              <TranslateText txt='Home-Section1-HeadText' />
            </div>
            <div className='note-txt'>
              <TranslateText txt='Home-Section1-text' />
            </div>
          </Animated>

          {/* <div className='wrap'> */}
          <div className='d-flex justify-content-start'>
            <Animated animationIn='shake' animationInDuration={1500}>
              <Link to='/modules'>
                <button className='button'>
                  <TranslateText txt='Start-Button' />
                </button>
              </Link>
            </Animated>
          </div>
        </div>
      </Col>

      <Col lg={5} md={5} sm={12} xs={12} className='my-auto'>
        <HomeImage
          animationIn='fadeInLeft'
          animationInDuration={1000}
          ImageSrc={Esvol}
          alt='esvol'
          width='100%'
        />
      </Col>
    </Row>
  );
}

export default Section1;
