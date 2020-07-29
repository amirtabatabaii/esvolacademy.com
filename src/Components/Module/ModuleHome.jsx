import React, { Component } from "react";
import { Navbar, Image, Row, Col } from "react-bootstrap";
import NewMenu from "../NewMenu/NewMenu";
import LanguageSelector from "../Translate/LanguageSelector";
import EsvolLogo from "../../assets/img/logo.png";

import "./ModuleHome.css";
import SubModuleBtn from "./SubModuleBtn";
import SubModule1 from "../SubModules/SubModule1/SubModule1";

import { withRouter } from "react-router-dom";
import { registerActiveModule } from "../../Redux/action";
import { connect } from "react-redux";

// import ReactPageScroller from "react-page-scroller";

class ModuleHome extends Component {
  state = {
    activeModule: "",
    activeSubModule: "",
    subModuleComplationRatio: "",
  };

  componentWillMount() {
    this.props.registerActiveModule("Module1", "sub1", "80");
  }

  render() {
    const {
      activeModule,
      activeSubModule,
      subModuleComplationRatio,
    } = this.props;

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

            <Col>
              <SubModule1
                activeModule={activeModule}
                activeSubModule={activeSubModule}
                subModuleComplationRatio={subModuleComplationRatio}
              />
            </Col>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  activeModule: state.activeModule,
  activeSubModule: state.activeSubModule,
  subModuleComplationRatio: state.subModuleComplationRatio,
});

export default connect(mapStateToProps, {
  registerActiveModule,
})(withRouter(ModuleHome));
