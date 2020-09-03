import React, { Component } from "react";
// import styled from "styled-components";
// import styled from "./Module1.css";
import { Row, Col } from "react-bootstrap";

import Module1sub1a from "../../assets/img/m1s1a.png";
import Module1sub1 from "../../assets/img/m1s1.png";
import Module1sub2a from "../../assets/img/m1s2a.png";
import Module1sub2 from "../../assets/img/m1s2.png";
import Module1sub3a from "../../assets/img/m1s3a.png";
import Module1sub3 from "../../assets/img/m1s3.png";
import Module1sub4a from "../../assets/img/m1s4a.png";
import Module1sub4 from "../../assets/img/m1s4.png";
import Module1sub5a from "../../assets/img/m1s5a.png";
import Module1sub5 from "../../assets/img/m1s5.png";
import Module1sub6a from "../../assets/img/m1s6a.png";
import Module1sub6 from "../../assets/img/m1s6.png";
import Module1sub7a from "../../assets/img/m1s7a.png";
import Module1sub7 from "../../assets/img/m1s7.png";

import SubModuleBtnImage from "./SubModuleBtnImage";
import "./ModuleHome.css";

class SubModuleBtn extends Component {
  state = {
    ActiveImage: {},
    NormalImage: {},
  };

  // componentDidMount() {
  //   if (this.props.userActiveModule === "Module1") {
  //     console.log("Module11111111");
  //     if (this.props.userActiveSubModule === "SubModule1")
  //       this.setState(
  //         {
  //           ActiveImage: { Module1sub1a },
  //           NormalImage: { Module1sub1 },
  //         },
  //         () => console.log(this.state.activeImage)
  //       );
  //     else if (this.props.userActiveSubModule === "SubModule2")
  //       this.setState({
  //         ActiveImage: { Module1sub2a },
  //         NormalImage: { Module1sub2 },
  //       });
  //     else if (this.props.userActiveSubModule === "SubModule3")
  //       this.setState({
  //         ActiveImage: "Module1sub3a",
  //         NormalImage: "Module1sub3",
  //       });
  //     else if (this.props.userActiveSubModule === "SubModule4")
  //       this.setState({
  //         ActiveImage: "Module1sub4a",
  //         NormalImage: "Module1sub4",
  //       });
  //     else if (this.props.userActiveSubModule === "SubModule5")
  //       this.setState({
  //         ActiveImage: "Module1sub5a",
  //         NormalImage: "Module1sub5",
  //       });
  //     else if (this.props.userActiveSubModule === "SubModule6")
  //       this.setState({
  //         ActiveImage: "Module1sub6a",
  //         NormalImage: "Module1sub6",
  //       });
  //     else if (this.props.userActiveSubModule === "SubModule7")
  //       this.setState({
  //         ActiveImage: "Module1sub7a",
  //         NormalImage: "Module1sub7",
  //       });
  //   }
  // }

  render() {
    const { userActiveSubModule, userActiveModule, onClick } = this.props;

    return (
      <div className={`d-none d-lg-block Sub${userActiveModule}-panel`}>
        <Row className='w-100 m-2'>
          <Col>
            <SubModuleBtnImage
              userActiveSubModule={userActiveSubModule}
              userActiveModule={userActiveModule}
              activeImage={
                userActiveModule === "Module1"
                  ? Module1sub1a
                  : userActiveModule === "Module2"
                  ? Module1sub1a
                  : ""
              }
              normalImage={
                userActiveModule === "Module1"
                  ? Module1sub1
                  : userActiveModule === "Module2"
                  ? Module1sub1a
                  : ""
              }
              subName='sub1'
              onClick={onClick}
            />
          </Col>

          <Col>
            <SubModuleBtnImage
              userActiveSubModule={userActiveSubModule}
              userActiveModule={userActiveModule}
              activeImage={
                userActiveModule === "Module1"
                  ? Module1sub2a
                  : userActiveModule === "Module2"
                  ? Module1sub2a
                  : ""
              }
              normalImage={
                userActiveModule === "Module1"
                  ? Module1sub2
                  : userActiveModule === "Module2"
                  ? Module1sub2
                  : ""
              }
              subName='sub2'
              onClick={onClick}
            />
          </Col>

          <Col>
            <SubModuleBtnImage
              userActiveSubModule={userActiveSubModule}
              userActiveModule={userActiveModule}
              activeImage={
                userActiveModule === "Module1"
                  ? Module1sub3a
                  : userActiveModule === "Module2"
                  ? Module1sub3a
                  : ""
              }
              normalImage={
                userActiveModule === "Module1"
                  ? Module1sub3
                  : userActiveModule === "Module2"
                  ? Module1sub3
                  : ""
              }
              subName='sub3'
              onClick={onClick}
            />
          </Col>

          <Col>
            <SubModuleBtnImage
              userActiveSubModule={userActiveSubModule}
              userActiveModule={userActiveModule}
              activeImage={
                userActiveModule === "Module1"
                  ? Module1sub4a
                  : userActiveModule === "Module2"
                  ? Module1sub4a
                  : ""
              }
              normalImage={
                userActiveModule === "Module1"
                  ? Module1sub4
                  : userActiveModule === "Module2"
                  ? Module1sub4
                  : ""
              }
              subName='sub4'
              onClick={onClick}
            />
          </Col>

          <Col>
            <SubModuleBtnImage
              userActiveSubModule={userActiveSubModule}
              userActiveModule={userActiveModule}
              activeImage={
                userActiveModule === "Module1"
                  ? Module1sub5a
                  : userActiveModule === "Module2"
                  ? Module1sub5a
                  : ""
              }
              normalImage={
                userActiveModule === "Module1"
                  ? Module1sub5
                  : userActiveModule === "Module2"
                  ? Module1sub5
                  : ""
              }
              subName='sub5'
              onClick={onClick}
            />
          </Col>

          <Col>
            <SubModuleBtnImage
              userActiveSubModule={userActiveSubModule}
              userActiveModule={userActiveModule}
              activeImage={
                userActiveModule === "Module1"
                  ? Module1sub6a
                  : userActiveModule === "Module2"
                  ? Module1sub6a
                  : ""
              }
              normalImage={
                userActiveModule === "Module1"
                  ? Module1sub6
                  : userActiveModule === "Module2"
                  ? Module1sub6
                  : ""
              }
              subName='sub6'
              onClick={onClick}
            />
          </Col>

          <Col>
            <SubModuleBtnImage
              userActiveSubModule={userActiveSubModule}
              userActiveModule={userActiveModule}
              activeImage={
                userActiveModule === "Module1"
                  ? Module1sub7a
                  : userActiveModule === "Module2"
                  ? Module1sub7a
                  : ""
              }
              normalImage={
                userActiveModule === "Module1"
                  ? Module1sub7
                  : userActiveModule === "Module2"
                  ? Module1sub7
                  : ""
              }
              subName='sub7'
              onClick={onClick}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
export default SubModuleBtn;
