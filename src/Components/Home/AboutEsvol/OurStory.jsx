import React, { Component } from "react";
import HomeNavBar from "../../Home/HomeNavBar";
import Footer from "../../Footer/Footer";
import { Container, Row, Col, CardGroup, Card } from "react-bootstrap";
import TranslateText from "../../Translate/TranslateText";

import bulgar from "../../../assets/img/ourstory/bulgar.png";
import bulgar2 from "../../../assets/img/ourstory/bulgar2.png";
import greece from "../../../assets/img/ourstory/greece.png";
import italy from "../../../assets/img/ourstory/italy.jpg";
import italy2 from "../../../assets/img/ourstory/italy2.jpg";
import spain from "../../../assets/img/ourstory/spain.png";
import turkey from "../../../assets/img/ourstory/turkey.png";

export class OurStory extends Component {
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
            <div className='m-5   note-txt-esvolon'>
              <TranslateText txt='OurStory-Line1' />
              <br />
              <br />
              <TranslateText txt='OurStory-Line2' />
              <br /> <br />
              <ul>
                <li>
                  <TranslateText txt='OurStory-Line3' />
                </li>
                <br />
                <li>
                  <TranslateText txt='OurStory-Line4' />
                </li>
              </ul>
              <br />
              <TranslateText txt='OurStory-Line5' />
              <br /> <br />
              <TranslateText txt='OurStory-Line6' />
              <br /> <br />
              <div className='text-center mt-5'>
                <h3>
                  <TranslateText txt='OurStory-Line7' />
                </h3>

                <CardGroup className='mt-5'>
                  <Card>
                    <Card.Img
                      className='w-50 m-auto p-2'
                      variant='top'
                      src={turkey}
                    />
                    <Card.Body>
                      <Card.Title>
                        <a href='https://trsgd.org/' target='_blank'>
                          <TranslateText txt='OurStory-Line8' />
                        </a>
                      </Card.Title>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Img
                      className='w-50 m-auto p-2'
                      variant='top'
                      src={bulgar2}
                    />
                    <Card.Body>
                      <Card.Title>
                        <a href='https://en.bulsport.bg/' target='_blank'>
                          <TranslateText txt='OurStory-Line9' />
                        </a>
                      </Card.Title>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Img
                      className='w-50 m-auto p-2'
                      variant='top'
                      src={spain}
                    />
                    <Card.Body>
                      <Card.Title>
                        <a
                          href='https://international.ucam.edu/'
                          target='_blank'
                        >
                          <TranslateText txt='OurStory-Line10' />
                        </a>
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </CardGroup>
                <CardGroup>
                  <Card>
                    <Card.Img
                      className='w-50 m-auto p-2'
                      variant='top'
                      src={greece}
                    />
                    <Card.Body>
                      <Card.Title>
                        <a
                          href='https://eurolocaldevelopment.org/index.php/en/'
                          target='_blank'
                        >
                          <TranslateText txt='OurStory-Line11' />
                        </a>
                      </Card.Title>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Img
                      className='w-50 m-auto p-2'
                      variant='top'
                      src={italy2}
                    />
                    <Card.Body>
                      <Card.Title>
                        <a href='https://cesie.org/en/' target='_blank'>
                          <TranslateText txt='OurStory-Line12' />
                        </a>
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </div>
            </div>
          </Container>

          <Footer userActiveModule={"Main"} />
        </div>
      </div>
    );
  }
}

export default OurStory;
