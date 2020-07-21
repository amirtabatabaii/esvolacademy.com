import React from "react";
import { Row, Col } from "react-bootstrap";

import "./Home.css";
import Esvol from "../../assets/img/home.png";
import HomeImage from "../Utility/HomeImage";
import SectionText from "../Translate/Home/SectionText";

function Section2() {
  return (
    <div>
      <Row className='w-100 text-center m-auto'>
        <Col lg={5} md={5} sm={5} xs={12} className='m-auto'>
          <HomeImage
            animationIn='fadeInRight'
            animationInDuration={1000}
            ImageSrc={Esvol}
            alt='esvol'
            width='28%'
          />
        </Col>

        <Col lg={7} md={7} sm={7} xs={12}>
          <div className='note-txt m-auto p-3'>
            <SectionText HomeSectionText={"Home-Section2-text"} />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Section2;
