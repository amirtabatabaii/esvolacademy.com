import React from "react";
import { Row, Col } from "react-bootstrap";
import { Animated } from "react-animated-css";

import "./Home.css";
import Esvol from "../../assets/img/home1.png";
import HomeImage from "../Utility/HomeImage";
import TranslateText from "../Translate/TranslateText";
import { Link } from "react-router-dom";

function Section1() {
  return (
    <Row className='w-100 text-center'>
      <Col lg={7} md={7} sm={12} xs={12}>
        <div>
          <Animated animationIn='fadeIn' animationInDuration={1500}>
            <div className='note-txt-header1'>
              <TranslateText txt='Home-Section1-HeadText1' />
            </div>
            <div className='note-txt-header2'>
              <TranslateText txt='Home-Section1-HeadText2' />
            </div>
            <div className='note-txt'>
              <TranslateText txt='Home-Section1-text' />
            </div>
          </Animated>

          {/* <div className='wrap'> */}
          <div className='d-flex justify-content-start'>
            <Animated animationIn='shake' animationInDuration={1500}>
              <Link
                to={
                  localStorage.getItem("UserInfo") === null
                    ? "/register"
                    : "/user"
                }
              >
                <button className='button'>
                  {localStorage.getItem("firstName") === null ? (
                    <TranslateText txt='Start-Button' />
                  ) : (
                    <span>
                      <TranslateText txt='Continue-Button' />
                      {/* ({localStorage.getItem("firstName")}) */}
                    </span>
                  )}
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
          width='90%'
        />
      </Col>
    </Row>
  );
}

export default Section1;
