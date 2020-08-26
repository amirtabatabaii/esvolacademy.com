import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";

import "./ModuleHome.css";
import SubModuleBtn from "./SubModuleBtn";
import ModuleNavBar from "./ModuleNavBar";

import { withRouter } from "react-router-dom";
import {
  SelectedSubModule,
  UserActiveModuleSubModule,
  SubModule1Detail,
  SubModule2Detail,
  SubModule6Detail,
} from "../../Redux/action";
import { connect } from "react-redux";
import Footer from "../Footer/Footer";
import SubModule from "../SubModules/SubModule";
import ModuleStagesName from "./ModuleStagesName";
import SubModuleNote from "../SubModules/SubModuleNote";

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
      //
      SubModule6Title: "",
      SubModule6Url: "",
      SubModule6Ratio: "",
    };

    this.handleClickSubModuleNext = this.handleClickSubModuleNext.bind(this);
    this.handleOnClickSubModule = this.handleOnClickSubModule.bind(this);
    this.handleClickModuleNext = this.handleClickModuleNext.bind(this);
  }

  componentDidMount() {
    this.props.UserActiveModuleSubModule("Module1", "sub3");

    this.props.SubModule1Detail(
      "SubModule_1_Video",
      "https://www.youtube.com/watch?v=A2pM6u-d-MM",
      //"https://www.kastanjetextile.com/video/kastanje-en.mp4",
      "80"
    );

    this.props.SubModule2Detail(
      "SubModule_2_Video",
      "https://www.youtube.com/watch?v=_npPA9ydDTs",
      // "https://youtu.be/vcmRk0Mxevk",
      //"https://www.kastanjetextile.com/video/kastanje-en.mp4",
      "70"
    );

    this.props.SubModule6Detail(
      "SubModule_6_Video",
      "https://www.youtube.com/watch?v=3_JsyidKdaI",
      "60"
    );
  }

  handleOnClickSubModule(ActiveSubName) {
    const UserActiveSubNumber = this.props.userActiveSubModule.substring(3);
    const UserSelectedSubNumber = ActiveSubName.substring(3);
    if (UserSelectedSubNumber <= UserActiveSubNumber)
      this.props.SelectedSubModule(ActiveSubName);
    else alert("YOU CAN NOT ENTER THIS SUBMODULE !!");
  }

  handleClickSubModuleNext(ActiveSubName) {
    this.props.SelectedSubModule("sub" + ActiveSubName.substring(3));
  }

  handleClickModuleNext(ActiveModuleName, ActiveSubName) {
    this.props.UserActiveModuleSubModule(ActiveModuleName, ActiveSubName);
  }

  render() {
    const {
      userActiveModule,
      userActiveSubModule,
      SubModule1Url,
      SubModule1Ratio,
      SubModule2Url,
      SubModule2Ratio,
      SubModule6Url,
      SubModule6Ratio,
    } = this.props;

    return (
      <div className='main-bg-color'>
        <ModuleNavBar userActiveModule={userActiveModule} />

        <Container>
          <Row
            // style={{ paddingTop: "130px" }}
            className='w-100 pt-5 pb-5'
          >
            {/* Module panel */}
            <Col lg={2} className='d-flex justify-content-end'>
              <ModuleStagesName userActiveModule={userActiveModule} />
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

              {/* SubModule Note Section */}
              <SubModuleNote userActiveSubModule={userActiveSubModule} />

              {/* SubModule Section */}
              <SubModule
                userActiveModule={userActiveModule}
                userActiveSubModule={userActiveSubModule}
                SubModule1Url={SubModule1Url}
                SubModule1Ratio={SubModule1Ratio}
                SubModule2Url={SubModule2Url}
                SubModule2Ratio={SubModule2Ratio}
                SubModule6Url={SubModule6Url}
                SubModule6Ratio={SubModule6Ratio}
                onClick={this.handleClickSubModuleNext}
                onClickNextModule={this.handleClickModuleNext}
              />
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
  //
  SubModule6Title: state.SubModule6Title,
  SubModule6Url: state.SubModule6Url,
  SubModule6Ratio: state.SubModule6Ratio,
});

export default connect(mapStateToProps, {
  SelectedSubModule,
  UserActiveModuleSubModule,
  SubModule1Detail,
  SubModule2Detail,
  SubModule6Detail,
})(withRouter(ModuleHome));
