import React from "react";

import { Navbar, Image, Nav } from "react-bootstrap";
import LanguageSelector from "../Translate/LanguageSelector";
import TranslateText from "../Translate/TranslateText";

import EsvolLogo from "../../assets/img/esvol_black.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div style={{ marginLeft: "3%", marginRight: "3%" }}>
      <Navbar
        style={{ backgroundColor: "#f2f3f7" }}
        expand='sm'
        className='pb-0 pt-3'
        //className='fixed-top pb-0 pt-3'
      >
        <Navbar.Brand href='/'>
          <Image
            src={EsvolLogo}
            width='150'
            // height='50'
            className='d-inline-block align-top'
            alt='esvol'
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='text-center'>
          <Nav className='ml-auto'>
            <Nav.Link>
              <Link to='/' className='Menu-text ml-4 text-decoration-none'>
                <TranslateText txt='MenuItem-Ludus' />
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link
                to='/register'
                className='Menu-text ml-4 text-decoration-none'
              >
                <TranslateText txt='MenuItem-Kayit' />
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link
                to='/login'
                className=' Menu-text ml-4 text-decoration-none'
              >
                <TranslateText txt='MenuItem-Giris' />
              </Link>
            </Nav.Link>

            <Nav.Link className='ml-4'>
              <LanguageSelector />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
