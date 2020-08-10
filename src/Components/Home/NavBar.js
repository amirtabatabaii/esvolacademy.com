import React from "react";

import { Navbar } from "react-bootstrap";
import NewMenu from "../NewMenu/NewMenu";
import LanguageSelector from "../Translate/LanguageSelector";

import { Image } from "react-bootstrap";
import EsvolLogo from "../../assets/img/esvol_black.png";

function NavBar(props) {
  return (
    <Navbar fixed='top' className={props.bgColor}>
      <Navbar.Brand href='/' className='pl-2'>
        <Image src={EsvolLogo} alt='esvol' width='40%' />
      </Navbar.Brand>

      <Navbar.Collapse className='justify-content-end p-4'>
        <span className='pr-3'>
          <LanguageSelector />
        </span>

        <NewMenu
          MenuItem1={props.MenuItem1}
          MenuItem2={props.MenuItem2}
          MenuItem3={props.MenuItem3}
          MenuItem4={props.MenuItem4}
        />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
