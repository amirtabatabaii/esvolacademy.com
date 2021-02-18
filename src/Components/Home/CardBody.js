import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import HomeImage from "../Utility/HomeImage";
import TranslateText from "../Translate/TranslateText";

function CardBody(props) {
  return (
    <Card className='m-3 p-3 home-card'>
      {/* <Card.Img> */}
      <HomeImage
        ImageSrc={props.ImageSrc}
        alt={props.alt}
        width={props.width}
      />
      {/* </Card.Img> */}
      {/* variant='top'
        className='p-5'
        src={props.ImageSrc}
        width={props.width}
      /> */}
      <Card.Body>
        {/* <Card.Title>Card title</Card.Title> */}
        <Card.Text>
          <TranslateText txt={props.txt} />
        </Card.Text>
      </Card.Body>
    </Card>
    // <Card className='m-2 home-card'>
    //   <Row>
    //     <Col lg={8} md={8}>
    //       <Card.Body className='my-auto'>
    //         <Card.Text className='card-txt p-2'>
    //           <TranslateText txt={props.txt} />
    //         </Card.Text>
    //       </Card.Body>
    //     </Col>

    //     <Col className='m-auto p-3'>
    //       <HomeImage
    //         ImageSrc={props.ImageSrc}
    //         alt={props.alt}
    //         width={props.width}
    //       />
    //     </Col>
    //   </Row>
    // </Card>
  );
}
export default CardBody;
