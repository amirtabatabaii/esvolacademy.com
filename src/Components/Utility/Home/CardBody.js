import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import HomeImage from "../../Utility/Home/HomeImage";
import CardText from "../../Translate/Home/CardText";

function CardBody(props) {
  return (
    <Card className='m-3 home-card'>
      <Row>
        <Col lg={8} md={8}>
          <Card.Body className='h-100'>
            <Card.Text className='card-txt'>
              <CardText txt={props.txt} />
            </Card.Text>
          </Card.Body>
        </Col>

        <Col className='text-center m-auto p-3'>
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
