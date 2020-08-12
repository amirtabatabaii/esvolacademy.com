import React from "react";
import { Row, Col } from "react-bootstrap";
import Esvol from "../../assets/img/home.png";
import CardBody from "../Home/CardBody";
import { Animated } from "react-animated-css";

function HomeCards() {
  return (
    <Animated animationIn='zoomIn' animationInDuration={1500}>
      <Row className='w-100 mt-4'>
        <Col lg={4} md={6} sm={6} xs={12}>
          <CardBody
            txt='first-card-text'
            ImageSrc={Esvol}
            alt='esvol'
            width='80%'
          />
        </Col>

        <Col lg={4} md={6} sm={6} xs={12}>
          <CardBody
            txt='second-card-text'
            ImageSrc={Esvol}
            alt='esvol'
            width='80%'
          />
        </Col>

        <Col lg={4} md={6} sm={6} xs={12} className='mx-auto'>
          <CardBody
            txt='third-card-text'
            ImageSrc={Esvol}
            alt='esvol'
            width='80%'
          />
        </Col>
      </Row>
    </Animated>
  );
}
export default HomeCards;
