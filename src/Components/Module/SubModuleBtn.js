import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import Module1sub1 from "../../assets/img/m1s1.png";
import Module1sub2 from "../../assets/img/m1s2.png";
import Module1sub3 from "../../assets/img/m1s3.png";
import Module1sub4 from "../../assets/img/m1s4.png";
import Module1sub5 from "../../assets/img/m1s5.png";
import Module1sub6 from "../../assets/img/m1s6.png";
import Module1sub7 from "../../assets/img/m1s7.png";
//
import Module1sub1a from "../../assets/img/m1s1a.png";
import Module1sub2a from "../../assets/img/m1s2a.png";
import Module1sub3a from "../../assets/img/m1s3a.png";
import Module1sub4a from "../../assets/img/m1s4a.png";
import Module1sub5a from "../../assets/img/m1s5a.png";
import Module1sub6a from "../../assets/img/m1s6a.png";
import Module1sub7a from "../../assets/img/m1s7a.png";
//
import Module2sub1a from "../../assets/img/m2s1.png";
import Module2sub2a from "../../assets/img/m2s2.png";
import Module2sub3a from "../../assets/img/m2s3.png";
import Module2sub4a from "../../assets/img/m2s4.png";
import Module2sub5a from "../../assets/img/m2s5.png";
import Module2sub6a from "../../assets/img/m2s6.png";
import Module2sub7a from "../../assets/img/m2s7.png";
//
import Module3sub1a from "../../assets/img/m3s1.png";
import Module3sub2a from "../../assets/img/m3s2.png";
import Module3sub3a from "../../assets/img/m3s3.png";
import Module3sub4a from "../../assets/img/m3s4.png";
import Module3sub5a from "../../assets/img/m3s5.png";
import Module3sub6a from "../../assets/img/m3s6.png";
import Module3sub7a from "../../assets/img/m3s7.png";
//
import Module4sub1a from "../../assets/img/m4s1.png";
import Module4sub2a from "../../assets/img/m4s2.png";
import Module4sub3a from "../../assets/img/m4s3.png";
import Module4sub4a from "../../assets/img/m4s4.png";
import Module4sub5a from "../../assets/img/m4s5.png";
import Module4sub6a from "../../assets/img/m4s6.png";
import Module4sub7a from "../../assets/img/m4s7.png";
//
import Module5sub1a from "../../assets/img/m5s1.png";
import Module5sub2a from "../../assets/img/m5s2.png";
import Module5sub3a from "../../assets/img/m5s3.png";
import Module5sub4a from "../../assets/img/m5s4.png";
import Module5sub5a from "../../assets/img/m5s5.png";
import Module5sub6a from "../../assets/img/m5s6.png";
import Module5sub7a from "../../assets/img/m5s7.png";

import SubModuleBtnImage from "./SubModuleBtnImage";
import "./ModuleHome.css";

class SubModuleBtn extends Component {
  state = {
    ActiveImage: {},
    NormalImage: {},
  };

  render() {
    const {
      userActiveSubModule,
      userActiveModule,
      onClick,
      EducationWithTasks,
    } = this.props;

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
                  ? Module2sub1a
                  : userActiveModule === "Module3"
                  ? Module3sub1a
                  : userActiveModule === "Module4"
                  ? Module4sub1a
                  : userActiveModule === "Module5"
                  ? Module5sub1a
                  : null
              }
              normalImage={Module1sub1}
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
                  ? Module2sub2a
                  : userActiveModule === "Module3"
                  ? Module3sub2a
                  : userActiveModule === "Module4"
                  ? Module4sub2a
                  : userActiveModule === "Module5"
                  ? Module5sub2a
                  : null
              }
              normalImage={Module1sub2}
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
                  ? Module2sub3a
                  : userActiveModule === "Module3"
                  ? Module3sub3a
                  : userActiveModule === "Module4"
                  ? Module4sub3a
                  : userActiveModule === "Module5"
                  ? Module5sub3a
                  : null
              }
              normalImage={Module1sub3}
              subName='sub3'
              onClick={onClick}
              EducationWithTasks={EducationWithTasks}
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
                  ? Module2sub4a
                  : userActiveModule === "Module3"
                  ? Module3sub4a
                  : userActiveModule === "Module4"
                  ? Module4sub4a
                  : userActiveModule === "Module5"
                  ? Module5sub4a
                  : null
              }
              normalImage={Module1sub4}
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
                  ? Module2sub5a
                  : userActiveModule === "Module3"
                  ? Module3sub5a
                  : userActiveModule === "Module4"
                  ? Module4sub5a
                  : userActiveModule === "Module5"
                  ? Module5sub5a
                  : null
              }
              normalImage={Module1sub5}
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
                  ? Module2sub6a
                  : userActiveModule === "Module3"
                  ? Module3sub6a
                  : userActiveModule === "Module4"
                  ? Module4sub6a
                  : userActiveModule === "Module5"
                  ? Module5sub6a
                  : null
              }
              normalImage={Module1sub6}
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
                  ? Module2sub7a
                  : userActiveModule === "Module3"
                  ? Module3sub7a
                  : userActiveModule === "Module4"
                  ? Module4sub7a
                  : userActiveModule === "Module5"
                  ? Module5sub7a
                  : null
              }
              normalImage={Module1sub7}
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
