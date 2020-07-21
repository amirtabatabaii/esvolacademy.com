import React from "react";
import { Row, Col } from "react-bootstrap";
import Esvol from "../../assets/img/home.png";
import CardBody from "../Utility/Home/CardBody";

function HomeCards() {
  return (
    <Row className='w-100 mt-4'>
      <Col lg={6} md={6} sm={6} xs={12}>
        <CardBody
          txt='Left-card-text'
          ImageSrc={Esvol}
          alt='esvol'
          width='50%'
        />
      </Col>

      <Col lg={6} md={6} sm={6} xs={12}>
        <CardBody
          txt='right-card-text'
          ImageSrc={Esvol}
          alt='esvol'
          width='50%'
        />
      </Col>
    </Row>
  );
}
export default HomeCards;
