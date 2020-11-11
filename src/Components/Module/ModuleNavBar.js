import React, { Component } from "react";

import { Navbar, Image, Nav } from "react-bootstrap";
import LanguageSelector from "../Translate/LanguageSelector";
import TranslateText from "../Translate/TranslateText";

import EsvolLogo1 from "../../assets/img/submodules/1/esvol1.png";
import EsvolLogo2 from "../../assets/img/submodules/2/esvol2.png";
import EsvolLogo3 from "../../assets/img/submodules/3/esvol3.png";
import EsvolLogo4 from "../../assets/img/submodules/4/esvol4.png";
import EsvolLogo5 from "../../assets/img/submodules/5/esvol5.png";

import "./ModuleNavBar.css";
import { withRouter } from "react-router-dom";

class ModuleNavBar extends Component {
  handleClick = () => {
    localStorage.removeItem("UserID");
    localStorage.removeItem("UserInfo");
    this.props.history.push(`/login`);
  };

  render() {
    const { userActiveModule } = this.props;

    return (
      <div style={{ marginLeft: "10%", marginRight: "10%" }}>
        <Navbar
          style={{ backgroundColor: "#f2f3f7" }}
          expand='md'
          // className='fixed-top pb-0'
        >
          <Navbar.Brand href=''>
            <Image
              src={
                userActiveModule === "Module1"
                  ? EsvolLogo1
                  : userActiveModule === "Module2"
                  ? EsvolLogo2
                  : userActiveModule === "Module3"
                  ? EsvolLogo3
                  : userActiveModule === "Module4"
                  ? EsvolLogo4
                  : userActiveModule === "Module5"
                  ? EsvolLogo5
                  : null
              }
              width='110'
              // height='50'
              className='d-inline-block align-top'
              alt='esvol'
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav' className='text-center'>
            <Nav className='ml-auto'>
              <Nav.Link
                className={`${userActiveModule}-menu-text ml-4`}
                href='/'
              >
                <TranslateText txt='MenuItem-Anasayfa' />
              </Nav.Link>

              <Nav.Link
                className={`${userActiveModule}-menu-text ml-4`}
                href='/user'
              >
                <TranslateText txt='MenuItem-Profil' />
              </Nav.Link>

              <Nav.Link
                className={`${userActiveModule}-menu-text ml-4`}
                onClick={this.handleClick}
                // href='/'
              >
                <TranslateText txt='MenuItem-Logout' />
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
}

export default withRouter(ModuleNavBar);
