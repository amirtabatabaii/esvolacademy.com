import React from "react";
import { Row, Col } from "react-bootstrap";

import "./Section1.css";
import ImageLanguage from "../Translate/Home/ImageLanguage";
import Esvol from "../../assets/img/home.png";
import StartButton from "./StartButton";
import HomeImage from "../Utility/Home/HomeImage";
import SectionText from "../Translate/Home/SectionText";

function Section1() {
  return (
    <Row className='w-100 text-center'>
      <Col lg={6} md={6} sm={6} xs={6}>
        <div className='m-auto pt-3 pb-3'>
          <ImageLanguage />
        </div>

        <div className='note-txt m-auto pl-3'>
          <SectionText HomeSectionText={"Home-Section1-text"} />
          <StartButton />
        </div>
      </Col>

      <Col lg={6} md={6} sm={6} xs={6} className='m-auto'>
        <HomeImage
          animationIn='fadeInLeft'
          animationInDuration={1000}
          ImageSrc={Esvol}
          alt='esvol'
          width='38%'
        />
      </Col>
    </Row>
  );
}

export default Section1;
