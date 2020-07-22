import React from "react";

import { Navbar } from "react-bootstrap";
import Menu from "../LogoMenu/Menu";
import Logo from "../LogoMenu/Logo";
import LanguageSelector from "../Translate/LanguageSelector";

function NavBar(props) {
  return (
    <div>
      <Navbar fixed='top' className={props.bgColor}>
        <Navbar.Brand href='/'>
          <Logo />
        </Navbar.Brand>

        <Navbar.Collapse className='justify-content-end p-4'>
          <span className='pr-3'>
            <LanguageSelector />
          </span>

          <Menu
            MenuItem1={props.MenuItem1}
            MenuItem2={props.MenuItem2}
            MenuItem3={props.MenuItem3}
            MenuItem4={props.MenuItem4}
          />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
