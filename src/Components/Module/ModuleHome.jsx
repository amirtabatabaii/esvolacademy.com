import React, { Component } from "react";
// import NavBar from "../Home/NavBar";
import { Navbar, Image, Row, Col } from "react-bootstrap";
import NewMenu from "../NewMenu/NewMenu";
import LanguageSelector from "../Translate/LanguageSelector";
import EsvolLogo from "../../assets/img/logo.png";

// import sm11a from "../../assets/img/sm11a.png";
// import sm11 from "../../assets/img/sm11.png";

import "./Module1.css";
import SubModuleBtn from "./SubModuleBtn";

class ModuleHome extends Component {
  render() {
    return (
      <div className='Module1-bg-color pb-5'>
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

        <Row style={{ paddingTop: "130px" }} className='w-100'>
          <Col lg={2}>
            <div
              className='d-none d-lg-block ml-3'
              style={{
                borderRadius: "19px",
                background: "linear-gradient(136deg, #ff8859, #f47f53)",
                boxShadow: "-5px -5px 8px #ff9a64, 5px 5px 8px #c16442",
              }}
            >
              <h3 className='module-text-active'>Stage 1</h3>
              <h3 className='module-text'>Stage 2</h3>
              <h3 className='module-text'>Stage 3</h3>
              <h3 className='module-text'>Stage 4</h3>
              <h3 className='module-text pb-5'>Stage 5</h3>
            </div>
          </Col>

          <Col lg={10}>
            <SubModuleBtn active='sub1' />
          </Col>
        </Row>
      </div>
    );
  }
}

export default ModuleHome;
