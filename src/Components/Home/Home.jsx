import React, { Component } from "react";
// import ReactPageScroller from "react-page-scroller";
import { Animated } from "react-animated-css";

import Section1 from "./Section1";
import Section2 from "./Section2";
import HomeCard from "./HomeCards";
import Footer from "../Footer/Footer";
import EsvolLogo from "../../assets/img/esvol_black.png";
import { Container, Navbar, Nav, Image } from "react-bootstrap";
import LanguageSelector from "../Translate/LanguageSelector";
import TranslateText from "../Translate/TranslateText";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className='main-bg-color'>
        <div id='page-wrap' className='App'>
          <Container>
            <Navbar
              style={{ backgroundColor: "#f2f3f7" }}
              expand='sm'
              // className='fixed-top pb-0'
            >
              <Navbar.Brand href='/'>
                <Image
                  src={EsvolLogo}
                  width='120'
                  // height='50'
                  className='d-inline-block align-top'
                  alt='esvol'
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />{" "}
              <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto'>
                  <Nav.Link className='Menu-text' href='/'>
                    <TranslateText txt='MenuItem-Kayit' />
                  </Nav.Link>

                  <Nav.Link className='Menu-text' href='/'>
                    <TranslateText txt='MenuItem-Giris' />
                  </Nav.Link>

                  <Nav.Link className='ml-3'>
                    <LanguageSelector />
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Section1 />

            <div className='pb-5'>
              <Animated animationIn='zoomIn' animationInDuration={1500}>
                {/* <HomeCard /> */}
              </Animated>
            </div>

            <div className='pb-5'>{/* <Section2 /> */}</div>
          </Container>
          <Footer />

          {/* </ReactPageScroller> */}
        </div>
      </div>
    );
  }
}

export default Home;
