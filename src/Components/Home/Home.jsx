import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
// import ReactPageScroller from "react-page-scroller";
import { Animated } from "react-animated-css";

import Menu from "../LogoMenu/Menu";
import Logo from "../LogoMenu/Logo";
import LanguageSelector from "../Translate/LanguageSelector";
import Section1 from "./Section1";
import Section2 from "./Section2";
import HomeCard from "./HomeCards";

class Home extends Component {
  render() {
    return (
      <div className='main-bg-color'>
        <div id='page-wrap' className='App'>
          {/* <ReactPageScroller> */}
          <div className='App-header'>
            <Navbar
              // className='p-3'
              fixed='top'
              style={{ backgroundColor: "#f2f3f7" }}
            >
              <Navbar.Brand href='/'>
                <Logo />
              </Navbar.Brand>

              <Navbar.Collapse className='justify-content-end p-4'>
                <span className='pr-3'>
                  <LanguageSelector />
                </span>
                <Menu />
              </Navbar.Collapse>
            </Navbar>
          </div>

          <div style={{ paddingTop: "130px" }}>
            <Section1 />
          </div>

          <div className='pb-5'>
            <Animated animationIn='zoomIn' animationInDuration={1500}>
              <HomeCard />
            </Animated>
          </div>

          <div className='pb-5 pr-5'>
            <Section2 />
          </div>

          <div
            className='p-5 text-center'
            style={{ backgroundColor: "rgb(25, 66, 124)", color: "white" }}
          >
            Footer
          </div>

          {/* </ReactPageScroller> */}
        </div>
      </div>
    );
  }
}

export default Home;
