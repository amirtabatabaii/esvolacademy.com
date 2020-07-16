import React, { Component } from "react";

import { Navbar } from "react-bootstrap";

import Menu from "../LogoMenu/Menu";
import Logo from "../LogoMenu/Logo";
import LanguageSelector from "../Translate/LanguageSelector";

class Home extends Component {
  render() {
    return (
      <>
        <div className='height main-bg-color'>
          <Navbar className='p-3'>
            <Navbar.Brand href='#home'>
              <Logo />
            </Navbar.Brand>

            <Navbar.Collapse className='justify-content-end p-4'>
              <span className='pr-3'>
                <LanguageSelector />
              </span>
              {/* <span className='pr-3'> */}
              <Menu />
              {/* </span> */}
            </Navbar.Collapse>
          </Navbar>
        </div>
      </>
    );
  }
}

export default Home;
