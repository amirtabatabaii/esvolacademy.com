import React from "react";
import { Row, Col } from "react-bootstrap";

import "./Section1.css";
import Esvol from "../../assets/img/home.png";
import HomeImage from "../Utility/Home/HomeImage";
import SectionText from "../Translate/Home/SectionText";

function Section2() {
  return (
    <div>
      <Row className='w-100 text-center'>
        <Col lg={6} md={6} sm={6} xs={6} className='m-auto'>
          <HomeImage
            animationIn='fadeInRight'
            animationInDuration={1000}
            ImageSrc={Esvol}
            alt='esvol'
            width='28%'
          />
        </Col>

        <Col lg={6} md={6} sm={6} xs={6}>
          <div className='note-txt m-auto pr-5'>
            <SectionText HomeSectionText={"Home-Section2-text"} />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Section2;
