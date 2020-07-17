import React from "react";
import { Row, Col, Image } from "react-bootstrap";

import "./Section1.css";
import ImageLanguage from "../Translate/Home/ImageLanguage";

function Section1() {
  return (
    <div>
      <Row className='w-100 text-center'>
        <Col>
          <div className='m-3'>
            <ImageLanguage />
          </div>
          {/* <p className='head-txt'>
            <p className='head-txt-1'>ESVOL</p>
            <p className='head-txt-2'>ile Geliş</p>
          </p> */}
        </Col>
        <Col>2 of 2</Col>
      </Row>
    </div>
  );
}

export default Section1;
