import React from "react";
import { Row, Col } from "react-bootstrap";

import "./Home.css";
import ImageLanguage from "../Translate/Home/ImageLanguage";
import Esvol from "../../assets/img/home.png";
import StartButton from "./StartButton";
import HomeImage from "../Utility/HomeImage";
import SectionText from "../Translate/Home/SectionText";

function Section1() {
  return (
    <Row className='w-100 text-center'>
      <Col lg={7} md={7} sm={7} xs={12}>
        <div className='m-auto pt-3 pb-3 m-auto'>
          <ImageLanguage />
        </div>

        <div className='note-txt m-auto pl-3'>
          <SectionText HomeSectionText={"Home-Section1-text"} />
          <StartButton />
        </div>
      </Col>

      <Col lg={5} md={5} sm={5} xs={12} className='m-auto'>
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
