import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import ReactPageScroller from "react-page-scroller";

import Menu from "../LogoMenu/Menu";
import Logo from "../LogoMenu/Logo";
import LanguageSelector from "../Translate/LanguageSelector";
import Section1 from "./Section1";

class Home extends Component {
  render() {
    return (
      <div className='main-bg-color'>
        <div id='page-wrap' className='App'>
          {/* <ReactPageScroller> */}
          <div className='App-header'>
            <Navbar className='p-3'>
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

            <Section1 />
          </div>

          <div
            style={{
              height: "100%",
              width: "100%",
              position: "relative",
            }}
          >
            sssssss
          </div>
          {/* </ReactPageScroller> */}
        </div>
      </div>
    );
  }
}

export default Home;
