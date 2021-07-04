import React, { Component } from "react";
import HomeNavBar from "../../Home/HomeNavBar";
import Footer from "../../Footer/Footer";
import { Container, Accordion, Card, Image } from "react-bootstrap";
import TranslateText from "../../Translate/TranslateText";

import E11 from "../../../assets/img/events/1/1.jpg";
import E12 from "../../../assets/img/events/1/2.jpg";
import E21 from "../../../assets/img/events/2/1.png";
import E22 from "../../../assets/img/events/2/2.png";
import E31 from "../../../assets/img/events/3/1.png";
import E41 from "../../../assets/img/events/4/1.jpg";
import E51 from "../../../assets/img/events/5/1.jpg";
import E61 from "../../../assets/img/events/6/1.jpg";
import E62 from "../../../assets/img/events/6/2.jpg";
import E63 from "../../../assets/img/events/6/3.jpg";
import E71 from "../../../assets/img/events/7/1.jpg";
import E72 from "../../../assets/img/events/7/2.jpg";
import E73 from "../../../assets/img/events/7/3.jpg";
import E74 from "../../../assets/img/events/7/4.jpg";

export class Events extends Component {
  render() {
    return (
      <div className='main-bg-color'>
        <div id='page-wrap' className='App'>
          <HomeNavBar
            isUserOnline={
              localStorage.getItem("UserID") !== null ? true : false
            }
          />

          <Container>
            <div className='m-5 p-5 note-txt-esvolon'>
              <Accordion defaultActiveKey=''>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey='0'>
                    <TranslateText txt='Event-1' />
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey='0'>
                    <Card.Body className='text-center'>
                      <Image
                        fluid
                        src={E11}
                        width={800}
                        alt='events'
                        className='p-2'
                      />
                      <Image
                        fluid
                        src={E12}
                        width={800}
                        alt='events'
                        className='p-2'
                      />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey='1'>
                    <TranslateText txt='Event-2' />
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey='1'>
                    <Card.Body className='text-center'>
                      <Image
                        fluid
                        src={E21}
                        width={800}
                        alt='events'
                        className='p-2'
                      />
                      <Image
                        fluid
                        src={E22}
                        width={800}
                        alt='events'
                        className='p-2'
                      />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey='2'>
                    <TranslateText txt='Event-3' />
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey='2'>
                    <Card.Body className='text-center'>
                      <Image
                        fluid
                        src={E31}
                        width={800}
                        alt='events'
                        className='p-2'
                      />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey='3'>
                    <TranslateText txt='Event-4' />
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey='3'>
                    <Card.Body className='text-center'>
                      <Image
                        fluid
                        src={E41}
                        width={800}
                        alt='events'
                        className='p-2'
                      />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey='4'>
                    <TranslateText txt='Event-5' />
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey='4'>
                    <Card.Body className='text-center'>
                      <Image
                        fluid
                        src={E51}
                        width={400}
                        alt='events'
                        className='p-2'
                      />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey='5'>
                    <TranslateText txt='Event-6' />
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey='5'>
                    <Card.Body className='text-center'>
                      <Image
                        fluid
                        src={E61}
                        width={800}
                        alt='events'
                        className='p-2'
                      />
                      <Image
                        fluid
                        src={E62}
                        width={800}
                        alt='events'
                        className='p-2'
                      />
                      <Image
                        fluid
                        src={E63}
                        width={800}
                        alt='events'
                        className='p-2'
                      />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey='6'>
                    <TranslateText txt='Event-7' />
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey='6'>
                    <Card.Body className='text-center'>
                      <Image
                        fluid
                        src={E71}
                        width={800}
                        alt='events'
                        className='p-2'
                      />
                      <Image
                        fluid
                        src={E72}
                        width={800}
                        alt='events'
                        className='p-2'
                      />
                      <Image
                        fluid
                        src={E73}
                        width={800}
                        alt='events'
                        className='p-2'
                      />
                      <Image
                        fluid
                        src={E74}
                        width={800}
                        alt='events'
                        className='p-2'
                      />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          </Container>

          <Footer userActiveModule={"Main"} />
        </div>
      </div>
    );
  }
}

export default Events;
