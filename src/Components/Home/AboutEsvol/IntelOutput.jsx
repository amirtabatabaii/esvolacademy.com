import React, { Component } from "react";
import HomeNavBar from "../../Home/HomeNavBar";
import Footer from "../../Footer/Footer";
import { Container, Accordion, Card } from "react-bootstrap";
import TranslateText from "../../Translate/TranslateText";

import Module1 from "../../../assets/pdf/modules/Module_1.pdf";
import Module2 from "../../../assets/pdf/modules/Module_2.pdf";
import Module3 from "../../../assets/pdf/modules/Module_3.pdf";
import Module4 from "../../../assets/pdf/modules/Module_4.pdf";
import Module5 from "../../../assets/pdf/modules/Module_5.pdf";
import Esvolon from "../../../assets/pdf/Guide-ESVOLON.pdf";
import IO3Report from "../../../assets/pdf/IO_3_Impact_Assessment_Report.pdf";

export class IntelOutput extends Component {
  render() {
    return (
      <div className='main-bg-color'>
        <div id='page-wrap' className='App'>
          <HomeNavBar
            isUserOnline={
              localStorage.getItem("UserID") !== null ? true : false
            }
          />

          <Container className='mt-5 pt-5 mb-5 pb-5 '>
            <div className='m-2 note-txt-esvolon'>
              <Accordion defaultActiveKey='0'>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey='0'>
                    <TranslateText txt='IntelOutput-1' />
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey='0'>
                    <Card.Body>
                      <ul>
                        <li className='m-2'>
                          <a href={Module1}>
                            <TranslateText txt='Module1-text' />
                          </a>
                        </li>
                        <li className='m-2'>
                          <a href={Module2}>
                            <TranslateText txt='Module2-text' />
                          </a>
                        </li>
                        <li className='m-2'>
                          <a href={Module3}>
                            <TranslateText txt='Module3-text' />
                          </a>
                        </li>
                        <li className='m-2'>
                          <a href={Module4}>
                            <TranslateText txt='Module4-text' />
                          </a>
                        </li>
                        <li className='m-2'>
                          <a href={Module5}>
                            <TranslateText txt='Module5-text' />
                          </a>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey='1'>
                    <TranslateText txt='IntelOutput-2' />
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey='1'>
                    <Card.Body>
                      <ul>
                        <li className='m-2'>
                          <a href={Esvolon}>
                            <TranslateText txt='Guide-Esvolon' />
                          </a>
                        </li>
                        <li className='m-2'>
                          <a
                            href='https://play.google.com/store/apps/details?id=com.digico.esvolon&hl=en&gl=US'
                            target='_blank'
                          >
                            <TranslateText txt='Home-Android' />
                          </a>
                        </li>
                        <li className='m-2'>
                          <a
                            href='https://apps.apple.com/tr/app/esvolon/id1561362040'
                            target='_blank'
                          >
                            <TranslateText txt='Home-AppStore' />
                          </a>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey='2'>
                    <TranslateText txt='IntelOutput-3' />
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey='2'>
                    <Card.Body>
                      <ul>
                        <li className='m-2'>
                          <a href={IO3Report}>
                            <TranslateText txt='IntelOutputReport' />
                          </a>
                        </li>
                      </ul>
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

export default IntelOutput;
