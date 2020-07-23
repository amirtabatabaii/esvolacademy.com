import React, { Component } from "react";
// import NavBar from "../Home/NavBar";
import { Navbar } from "react-bootstrap";
import NewMenu from "../NewMenu/NewMenu";
import LanguageSelector from "../Translate/LanguageSelector";
import { Image } from "react-bootstrap";
import EsvolLogo from "../../assets/img/logo.png";

import "./Module1.css";

class ModuleHome extends Component {
  render() {
    return (
      <div className='Module1-bg-color height'>
        <Navbar fixed='top' className='Module1-bg-color'>
          <Navbar.Brand href='/'>
            <Image src={EsvolLogo} alt='esvol' />
          </Navbar.Brand>

          <Navbar.Collapse className='justify-content-end p-4'>
            <span className='pr-3'>
              <LanguageSelector />
            </span>

            <NewMenu MenuItem1='MenuItem-Logout' />
          </Navbar.Collapse>
        </Navbar>

        <div style={{ paddingTop: "130px" }}>
          <div className='left-side d-none d-lg-block'>
            <h3 className='text-center pt-5'>Module 1</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default ModuleHome;
