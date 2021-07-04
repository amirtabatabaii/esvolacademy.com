import React from "react";

import { Navbar, Image, Nav } from "react-bootstrap";
import LanguageSelector from "../Translate/LanguageSelector";
import TranslateText from "../Translate/TranslateText";

import EsvolLogo from "../../assets/img/esvol_black.png";
import { Link } from "react-router-dom";

const handleClick = () => {
  localStorage.removeItem("UserID");
  localStorage.removeItem("UserInfo");
  localStorage.removeItem("firstName");
  localStorage.removeItem("lastName");
  localStorage.removeItem("UserModule");
  localStorage.removeItem("UserSubModule");
  localStorage.removeItem("UserTempModule");
};

function NavBar(props) {
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
          <Nav className='ml-auto nav'>
            <ul className='navbar-nav'>
              <li className='nav-item dropdown'>
                <Link
                  className='nav-link dropdown-toggle Menu-text ml-4 text-decoration-none'
                  to='/'
                  id='navbarDropdownMenuLink'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  <TranslateText txt='MenuItem-Ludus' />
                </Link>
                <ul
                  className='dropdown-menu'
                  aria-labelledby='navbarDropdownMenuLink'
                >
                  <li className='dropdown-submenu'>
                    <Link className='dropdown-item' to='/our-story'>
                      <TranslateText txt='MenuItem-Ludus1' />
                    </Link>
                  </li>
                  <li className='dropdown-submenu'>
                    <Link className='dropdown-item' to='/intellectual-outputs'>
                      <TranslateText txt='MenuItem-Ludus2' />
                    </Link>
                  </li>
                  <li className='dropdown-submenu'>
                    <Link className='dropdown-item' to='/events'>
                      <TranslateText txt='MenuItem-Ludus3' />
                    </Link>
                  </li>
                  <li className='dropdown-submenu'>
                    <a
                      className='dropdown-item'
                      href='mailto:esvolproject@gmail.com'
                    >
                      <TranslateText txt='MenuItem-Ludus4' />
                    </a>
                  </li>
                </ul>
              </li>
              {/* <li className='nav-item dropdown'>
                <Nav.Link>
                  <Link
                    to='/'
                    id='navbarDropdownMenuLink'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                    className='nav-link dropdown-toggle Menu-text ml-4 text-decoration-none'
                  >
                    <TranslateText txt='MenuItem-Ludus' />
                  </Link>
                  <ul
                    className='dropdown-menu'
                    aria-labelledby='navbarDropdownMenuLink'
                  >
                    <li className='dropdown-submenu'>
                      <Link className='dropdown-item' to='/headquarters'>
                        Genel Müdürlük
                      </Link>
                    </li>
                  </ul>
                </Nav.Link>
              </li>
               */}
              {!props.isUserOnline && (
                <>
                  <li className='nav-item'>
                    <Nav.Link>
                      <Link
                        to='/register'
                        className='Menu-text ml-4 text-decoration-none'
                      >
                        <TranslateText txt='MenuItem-Kayit' />
                      </Link>
                    </Nav.Link>
                  </li>
                  <li className='nav-item'>
                    <Nav.Link>
                      <Link
                        to='/login'
                        className=' Menu-text ml-4 text-decoration-none'
                      >
                        <TranslateText txt='MenuItem-Giris' />
                      </Link>
                    </Nav.Link>
                  </li>
                </>
              )}

              {props.isUserOnline && (
                <>
                  <li className='nav-item'>
                    <Nav.Link>
                      <Link
                        to='/user'
                        className='Menu-text ml-4 text-decoration-none'
                      >
                        <TranslateText txt='MenuItem-Profil' />
                      </Link>
                    </Nav.Link>
                  </li>

                  <li className='nav-item'>
                    <Nav.Link>
                      <Link
                        //to='/user'
                        onClick={handleClick}
                        className='Menu-text ml-4 text-decoration-none'
                      >
                        <TranslateText txt='MenuItem-Logout' />
                      </Link>
                    </Nav.Link>
                  </li>
                </>
              )}

              <Nav.Link className='ml-4'>
                <LanguageSelector />
              </Nav.Link>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
