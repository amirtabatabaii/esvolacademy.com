import React from "react";
import { Row, Col, Image } from "react-bootstrap";

import "./Section1.css";
import ImageLanguage from "../Translate/Home/ImageLanguage";
import Section11 from "../Translate/Home/Section11";
import Esvol from "../../assets/img/home.png";

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
        {/* lg={6} md={12} sm={12} */}
        <Col>
          <p className='m-5'>
            <ImageLanguage />
          </p>

          <p className='note-txt m-5'>
            <Section11 />
          </p>
        </Col>
        {/* lg={6} md={12} sm={12} */}
        <Col>
          <Image src={Esvol} alt='esvol' fluid width='30%' />
        </Col>
      </Row>
    </div>
  );
}

export default Section1;
