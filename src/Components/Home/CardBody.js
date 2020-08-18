import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import HomeImage from "../Utility/HomeImage";
import TranslateText from "../Translate/TranslateText";

function CardBody(props) {
  return (
    <Card className='m-2 home-card'>
      <Row>
        <Col lg={8} md={8}>
          <Card.Body className='my-auto'>
            <Card.Text className='card-txt m-3'>
              <TranslateText txt={props.txt} />
            </Card.Text>
          </Card.Body>
        </Col>

        <Col className='m-auto p-3'>
          <HomeImage
            ImageSrc={props.ImageSrc}
            alt={props.alt}
            width={props.width}
          />
        </Col>
      </Row>
    </Card>
  );
}
export default CardBody;
