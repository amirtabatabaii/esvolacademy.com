import React, { Component } from "react";
import { Navbar, Image, Row, Col } from "react-bootstrap";
import NewMenu from "../NewMenu/NewMenu";
import LanguageSelector from "../Translate/LanguageSelector";
import EsvolLogo from "../../assets/img/logo.png";

import "./ModuleHome.css";
import SubModuleBtn from "./SubModuleBtn";
import SubModule1 from "../SubModules/SubModule1/SubModule1";

import { withRouter } from "react-router-dom";
import {
  SelectedSubModule,
  UserActiveModuleSubModule,
  SubModuleDetail,
} from "../../Redux/action";
import { connect } from "react-redux";

// import ReactPageScroller from "react-page-scroller";

class ModuleHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userActiveModule: "",
      userActiveSubModule: "",
      //
      SubModuleTitle: "",
      SubModuleUrl: "",
      SubModuleRatio: "",
    };

    this.handleOnClickSubModule1Next = this.handleOnClickSubModule1Next.bind(
      this
    );
    this.handleOnClickSubModule = this.handleOnClickSubModule.bind(this);
  }

  componentDidMount() {
    this.props.UserActiveModuleSubModule("Module1", "sub1");
    this.props.SubModuleDetail(
      "SubModule_1_Video",
      "https://www.youtube.com/watch?v=4OkiH2yD-eQ",
      //"https://www.kastanjetextile.com/video/kastanje-en.mp4",
      "80"
    );
  }

  handleOnClickSubModule(ActiveSubName) {
    this.props.SelectedSubModule(ActiveSubName);
  }

  handleOnClickSubModule1Next(ActiveSubName) {
    this.props.SelectedSubModule("sub" + ActiveSubName.substring(3));
  }

  render() {
    const {
      userActiveModule,
      userActiveSubModule,
      SubModuleUrl,
      SubModuleRatio,
    } = this.props;

    return (
      <div className={`${userActiveModule}-bg-color pb-5`}>
        <Navbar fixed='top' className={`${userActiveModule}-bg-color`}>
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
              className={`${userActiveModule}-panel d-none d-lg-block ml-4 `}
            >
              <h3
                className={`${
                  userActiveModule === "Module1"
                    ? "module-text-active Module1-text-active"
                    : "module-text"
                }`}
              >
                Stage 1
              </h3>

              <h3
                className={`${
                  userActiveModule === "Module2"
                    ? "module-text-active Module2-text-active"
                    : "module-text"
                }`}
              >
                Stage 2
              </h3>

              <h3
                className={`${
                  userActiveModule === "Module3"
                    ? "module-text-active"
                    : "module-text"
                }`}
              >
                Stage 3
              </h3>

              <h3
                className={`${
                  userActiveModule === "Module4"
                    ? "module-text-active"
                    : "module-text"
                }`}
              >
                Stage 4
              </h3>

              <h3
                className={`${
                  userActiveModule === "Module5"
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
              userActiveSubModule={userActiveSubModule}
              userActiveModule={userActiveModule}
              onClick={this.handleOnClickSubModule}
              ActiveSubModule
            />

            {userActiveSubModule === "sub1" ? (
              <Col>
                <SubModule1
                  userActiveModule={userActiveModule}
                  userActiveSubModule={userActiveSubModule}
                  SubModuleUrl={SubModuleUrl}
                  SubModuleRatio={SubModuleRatio}
                  onClick={this.handleOnClickSubModule1Next}
                />
              </Col>
            ) : null}

            {userActiveSubModule === "sub2" ? (
              <Col>
                <div className={`${userActiveModule}-sub-panel mt-4 app`}>
                  <h1 className='m-5 p-5'>SubModule 2</h1>
                </div>
              </Col>
            ) : null}

            {userActiveSubModule === "sub3" ? (
              <Col>
                <div className={`${userActiveModule}-sub-panel mt-4 app`}>
                  <h1 className='m-5 p-5'>SubModule 3</h1>
                </div>
              </Col>
            ) : null}

            {userActiveSubModule === "sub4" ? (
              <Col>
                <div className={`${userActiveModule}-sub-panel mt-4 app`}>
                  <h1 className='m-5 p-5'>SubModule 4</h1>
                </div>
              </Col>
            ) : null}

            {userActiveSubModule === "sub5" ? (
              <Col>
                <div className={`${userActiveModule}-sub-panel mt-4 app`}>
                  <h1 className='m-5 p-5'>SubModule 5</h1>
                </div>
              </Col>
            ) : null}

            {userActiveSubModule === "sub6" ? (
              <Col>
                <div className={`${userActiveModule}-sub-panel mt-4 app`}>
                  <h1 className='m-5 p-5'>SubModule 6</h1>
                </div>
              </Col>
            ) : null}

            {userActiveSubModule === "sub7" ? (
              <Col>
                <div className={`${userActiveModule}-sub-panel mt-4 app`}>
                  <h1 className='m-5 p-5'>SubModule 7</h1>
                </div>
              </Col>
            ) : null}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userActiveModule: state.userActiveModule,
  userActiveSubModule: state.userActiveSubModule,
  //
  SubModuleTitle: state.SubModuleTitle,
  SubModuleUrl: state.SubModuleUrl,
  SubModuleRatio: state.SubModuleRatio,
});

export default connect(mapStateToProps, {
  SelectedSubModule,
  UserActiveModuleSubModule,
  SubModuleDetail,
})(withRouter(ModuleHome));
