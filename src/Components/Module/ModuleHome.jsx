import React, { Component } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";

import "./ModuleHome.css";
import SubModuleBtn from "./SubModuleBtn";
import SubModule1 from "../SubModules/SubModule1/SubModule1";
import SubModule2 from "../SubModules/SubModule2/SubModule2";
import ModuleNavBar from "./ModuleNavBar";

import { withRouter } from "react-router-dom";
import {
  SelectedSubModule,
  UserActiveModuleSubModule,
  SubModule1Detail,
  SubModule2Detail,
} from "../../Redux/action";
import { connect } from "react-redux";
import Footer from "../Footer/Footer";

class ModuleHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userActiveModule: "",
      userActiveSubModule: "",
      //
      SubModule1Title: "",
      SubModule1Url: "",
      SubModule1Ratio: "",
      //
      SubModule2Title: "",
      SubModule2Url: "",
      SubModule2Ratio: "",
    };

    this.handleClickSubModuleNext = this.handleClickSubModuleNext.bind(this);
    this.handleOnClickSubModule = this.handleOnClickSubModule.bind(this);
  }

  componentDidMount() {
    this.props.UserActiveModuleSubModule("Module1", "sub1");

    this.props.SubModule1Detail(
      "SubModule_1_Video",
      "https://www.youtube.com/watch?v=UBMk30rjy0o",
      // "https://www.youtube.com/watch?v=4OkiH2yD-eQ",
      //"https://www.kastanjetextile.com/video/kastanje-en.mp4",
      "80"
    );

    this.props.SubModule2Detail(
      "SubModule_2_Video",
      "https://www.youtube.com/watch?v=6VFLKdfxA24",
      // "https://youtu.be/vcmRk0Mxevk",
      //"https://www.kastanjetextile.com/video/kastanje-en.mp4",
      "60"
    );
  }

  handleOnClickSubModule(ActiveSubName) {
    const UserActiveSubNumber = this.props.userActiveSubModule.substring(3);
    const UserSelectedSubNumber = ActiveSubName.substring(3);
    if (UserSelectedSubNumber <= UserActiveSubNumber)
      this.props.SelectedSubModule(ActiveSubName);
    else alert("YOU CAN NOT ENTER THIS SUBMODULE !!!!!! :-)");
  }

  handleClickSubModuleNext(ActiveSubName) {
    this.props.SelectedSubModule("sub" + ActiveSubName.substring(3));
  }

  render() {
    const {
      userActiveModule,
      userActiveSubModule,
      SubModule1Url,
      SubModule1Ratio,
      SubModule2Url,
      SubModule2Ratio,
    } = this.props;

    return (
      <div className='main-bg-color'>
        <ModuleNavBar userActiveModule={userActiveModule} />

        <Container>
          <Row style={{ paddingTop: "130px" }} className='w-100'>
            {/* Module panel */}
            <Col lg={2} className='d-flex justify-content-end'>
              <div
                className={`${userActiveModule} Module-panel d-none d-lg-block`}
              >
                <h3
                  className={`${
                    userActiveModule === "Module1"
                      ? "Module-text-active Module1-text-active"
                      : "Module-text"
                  }`}
                >
                  Stage 1
                </h3>

                <h3
                  className={`${
                    userActiveModule === "Module2"
                      ? "Module-text-active Module2-text-active"
                      : "Module-text"
                  }`}
                >
                  Stage 2
                </h3>

                <h3
                  className={`${
                    userActiveModule === "Module3"
                      ? "Module-text-active Module3-text-active"
                      : "Module-text"
                  }`}
                >
                  Stage 3
                </h3>

                <h3
                  className={`${
                    userActiveModule === "Module4"
                      ? "Module-text-active Module4-text-active"
                      : "Module-text"
                  }`}
                >
                  Stage 4
                </h3>

                <h3
                  className={`${
                    userActiveModule === "Module5"
                      ? "Module-text-active Module5-text-active"
                      : "Module-text"
                  } pb-5`}
                >
                  Stage 5
                </h3>
              </div>
            </Col>

            <Col lg={10}>
              <div className='d-flex justify-content-start'>
                {/* SubModule panel */}
                <SubModuleBtn
                  userActiveSubModule={userActiveSubModule}
                  userActiveModule={userActiveModule}
                  onClick={this.handleOnClickSubModule}
                />
              </div>

              {/* SubModule Section   */}
              {/* {userActiveSubModule === "sub1" ? (
                <SubModule1
                  userActiveModule={userActiveModule}
                  userActiveSubModule={userActiveSubModule}
                  SubModuleUrl={SubModule1Url}
                  SubModuleRatio={SubModule1Ratio}
                  onClick={this.handleClickSubModuleNext}
                />
              ) : null}
              {userActiveSubModule === "sub2" ? (
                <SubModule2
                  userActiveModule={userActiveModule}
                  userActiveSubModule={userActiveSubModule}
                  SubModuleUrl={SubModule2Url}
                  SubModuleRatio={SubModule2Ratio}
                  onClick={this.handleClickSubModuleNext}
                />
              ) : null}
              {userActiveSubModule === "sub3" ? (
                <div className={`${userActiveModule}-sub-panel mt-4 app`}>
                  <h1 className='m-5'>SubModule 3</h1>
                  <h1 className='m-5'>Interactive Tool</h1>
                  <Button
                    className='m-3'
                    size='lg'
                    onClick={() => this.handleClickSubModuleNext("sub4")}
                  >
                    Next SubModule
                  </Button>
                </div>
              ) : null}
              {userActiveSubModule === "sub4" ? (
                <div className={`${userActiveModule}-sub-panel mt-4 app`}>
                  <h1 className='m-5'>SubModule 4</h1>
                  <h1 className='m-5'>Expert Video 1</h1>
                  <h1 className='m-5'>Expert Video 2</h1>
                  <Button
                    className='m-3'
                    size='lg'
                    onClick={() => this.handleClickSubModuleNext("sub5")}
                  >
                    Next SubModule
                  </Button>
                </div>
              ) : null}
              {userActiveSubModule === "sub5" ? (
                <div className={`${userActiveModule}-sub-panel mt-4 app`}>
                  <h1 className='m-5'>SubModule 5</h1>
                  <h1 className='m-5'>Reading</h1>
                  <Button
                    className='m-3'
                    size='lg'
                    onClick={() => this.handleClickSubModuleNext("sub6")}
                  >
                    Next SubModule
                  </Button>
                </div>
              ) : null}
              {userActiveSubModule === "sub6" ? (
                <div className={`${userActiveModule}-sub-panel mt-4 app`}>
                  <h1 className='m-5'>SubModule 6</h1>
                  <h1 className='m-5'>Case Study</h1>
                  <Button
                    className='m-3'
                    size='lg'
                    onClick={() => this.handleClickSubModuleNext("sub7")}
                  >
                    Next SubModule
                  </Button>
                </div>
              ) : null}
              {userActiveSubModule === "sub7" ? (
                <div className={`${userActiveModule}-sub-panel mt-4 app`}>
                  <h1 className='m-5'>SubModule 7</h1>
                  <h1 className='m-5'>Quiz</h1>
                  <Button
                    className='m-3'
                    size='lg'
                    onClick={() =>
                      this.props.UserActiveModuleSubModule(
                        `Module${parseInt(userActiveModule.substring(6)) + 1}`,
                        "sub1"
                      )
                    }
                  >
                    Next Module
                  </Button>
                </div>
              ) : null}*/}
            </Col>
          </Row>
        </Container>

        <Footer userActiveModule={userActiveModule} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userActiveModule: state.userActiveModule,
  userActiveSubModule: state.userActiveSubModule,
  //
  SubModule1Title: state.SubModule1Title,
  SubModule1Url: state.SubModule1Url,
  SubModule1Ratio: state.SubModule1Ratio,
  //
  SubModule2Title: state.SubModule2Title,
  SubModule2Url: state.SubModule2Url,
  SubModule2Ratio: state.SubModule2Ratio,
});

export default connect(mapStateToProps, {
  SelectedSubModule,
  UserActiveModuleSubModule,
  SubModule1Detail,
  SubModule2Detail,
})(withRouter(ModuleHome));
