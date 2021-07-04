import React, { Component } from "react";

import Section1 from "./Section1";
import Section2 from "./Section2";
import HomeCard from "./HomeCards";
import HomeNavBar from "./HomeNavBar";
import Footer from "../Footer/Footer";
import { Card, Container } from "react-bootstrap";
import TranslateText from "../Translate/TranslateText";

import "./Home.css";

class Home extends Component {
  componentDidMount() {
    if (localStorage.getItem("lng") === null) localStorage.setItem("lng", "en");
    else {
      localStorage.setItem("lng", "");
      localStorage.setItem("lng", "en");
    }

    // window.location.reload(false);

    // try {
    //   const serializedState = JSON.stringify({
    //     userActiveSubModule: "Module1",
    //     userActiveModule: "sub1",
    //     selectedLanguage: "En",
    //     EducationWithTasks: true,
    //   });
    //   localStorage.setItem("state", serializedState);
    // } catch (e) {
    //   console.log(e);
    // }
  }

  render() {
    return (
      <div className='main-bg-color'>
        <div id='page-wrap' className='App'>
          <HomeNavBar
            isUserOnline={
              localStorage.getItem("UserID") !== null ? true : false
            }
          />

          <div style={{ marginLeft: "5%", marginRight: "5%" }}>
            <div className='pb-5'>
              {/* style={{ paddingTop: "80px" }}> */}
              <Section1 />
            </div>

            <Container>
              <div className='pb-5 text-center'>
                <Card className='m-3 p-3 home-card'>
                  <Card.Body>
                    <Card.Text className='note-txt-esvolon'>
                      <TranslateText txt='Home-Esvolon' />
                    </Card.Text>
                    <a
                      href='https://play.google.com/store/apps/details?id=com.digico.esvolon&hl=en&gl=US'
                      target='_blank'
                    >
                      <button className='button m-3'>
                        <TranslateText txt='Home-Android' />
                      </button>
                    </a>

                    <a
                      href='https://apps.apple.com/tr/app/esvolon/id1561362040'
                      target='_blank'
                    >
                      <button className='button m-3'>
                        <TranslateText txt='Home-AppStore' />
                      </button>
                    </a>
                  </Card.Body>
                </Card>
              </div>
            </Container>

            <div className='pb-5'>
              <HomeCard />
            </div>
            <div className='pb-5 pt-5'>
              <Section2 />
            </div>

            <Container>
              <Card className='m-3 p-3 home-card'>
                <Card.Body>
                  <Card.Text>
                    <TranslateText txt='Home-Disclaimer' />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Container>
          </div>

          <Footer userActiveModule={"Main"} />
        </div>
      </div>
    );
  }
}

export default Home;
