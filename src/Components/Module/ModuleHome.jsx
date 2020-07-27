import React, { Component } from "react";
import { Navbar, Image, Row, Col } from "react-bootstrap";
import NewMenu from "../NewMenu/NewMenu";
import LanguageSelector from "../Translate/LanguageSelector";
import EsvolLogo from "../../assets/img/logo.png";

import "./ModuleHome.css";
import SubModuleBtn from "./SubModuleBtn";

// import ReactPageScroller from "react-page-scroller";

class ModuleHome extends Component {
  state = {
    activeModule: "Module1",
    activeSubModule: "sub3",
  };

  render() {
    const { activeModule, activeSubModule } = this.state;

    return (
      <div className={`${activeModule}-bg-color pb-5`}>
        <Navbar fixed='top' className={`${activeModule}-bg-color`}>
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
            <div className={`${activeModule}-panel d-none d-lg-block ml-4 `}>
              <h3
                className={`${
                  activeModule === "Module1"
                    ? "module-text-active Module1-text-active"
                    : "module-text"
                }`}
              >
                Stage 1
              </h3>

              <h3
                className={`${
                  activeModule === "Module2"
                    ? "module-text-active Module2-text-active"
                    : "module-text"
                }`}
              >
                Stage 2
              </h3>

              <h3
                className={`${
                  activeModule === "Module3"
                    ? "module-text-active"
                    : "module-text"
                }`}
              >
                Stage 3
              </h3>

              <h3
                className={`${
                  activeModule === "Module4"
                    ? "module-text-active"
                    : "module-text"
                }`}
              >
                Stage 4
              </h3>

              <h3
                className={`${
                  activeModule === "Module5"
                    ? "module-text-active"
                    : "module-text"
                } pb-5`}
              >
                Stage 5
              </h3>
            </div>
          </Col>

          <Col lg={10}>
            <SubModuleBtn
              activeSubModule={activeSubModule}
              activeModule={activeModule}
            />

            <Col
              lg={9}
              // className='w-100'
              // style={{
              //   width: "200%",
              //   height: "100vh",
              //   overflow: "scroll",
              // }}
            >
              <div className={`${activeModule}-sub-panel mt-5`}>
                <h1 className='m-5 p-5'>Content</h1>
              </div>
            </Col>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ModuleHome;
