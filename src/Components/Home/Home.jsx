import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

import Menu from "../LogoMenu/Menu";
import Logo from "../LogoMenu/Logo";
import LanguageSelector from "../Translate/LanguageSelector";
import Section1 from "./Section1";

class Home extends Component {
  render() {
    return (
      <>
        <div className='height main-bg-color'>
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

          <div>
            <Section1 />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
