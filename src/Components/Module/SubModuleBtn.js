import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
// import { Tooltip } from "antd";

import NormalSub1 from "../../assets/img/submodules/s1.png";
import NormalSub2 from "../../assets/img/submodules/s2.png";
import NormalSub3 from "../../assets/img/submodules/s3.png";
import NormalSub4 from "../../assets/img/submodules/s4.png";
import NormalSub5 from "../../assets/img/submodules/s5.png";
import NormalSub6 from "../../assets/img/submodules/s6.png";
import NormalSub7 from "../../assets/img/submodules/s7.png";
//
import Module1sub1 from "../../assets/img/submodules/1/m1s1.png";
import Module1sub2 from "../../assets/img/submodules/1/m1s2.png";
import Module1sub3 from "../../assets/img/submodules/1/m1s3.png";
import Module1sub4 from "../../assets/img/submodules/1/m1s4.png";
import Module1sub5 from "../../assets/img/submodules/1/m1s5.png";
import Module1sub6 from "../../assets/img/submodules/1/m1s6.png";
import Module1sub7 from "../../assets/img/submodules/1/m1s7.png";
//
import Module2sub1 from "../../assets/img/submodules/2/m2s1.png";
import Module2sub2 from "../../assets/img/submodules/2/m2s2.png";
import Module2sub3 from "../../assets/img/submodules/2/m2s3.png";
import Module2sub4 from "../../assets/img/submodules/2/m2s4.png";
import Module2sub5 from "../../assets/img/submodules/2/m2s5.png";
import Module2sub6 from "../../assets/img/submodules/2/m2s6.png";
import Module2sub7 from "../../assets/img/submodules/2/m2s7.png";
//
import Module3sub1 from "../../assets/img/submodules/3/m3s1.png";
import Module3sub2 from "../../assets/img/submodules/3/m3s2.png";
import Module3sub3 from "../../assets/img/submodules/3/m3s3.png";
import Module3sub4 from "../../assets/img/submodules/3/m3s4.png";
import Module3sub5 from "../../assets/img/submodules/3/m3s5.png";
import Module3sub6 from "../../assets/img/submodules/3/m3s6.png";
import Module3sub7 from "../../assets/img/submodules/3/m3s7.png";
//
import Module4sub1 from "../../assets/img/submodules/4/m4s1.png";
import Module4sub2 from "../../assets/img/submodules/4/m4s2.png";
import Module4sub3 from "../../assets/img/submodules/4/m4s3.png";
import Module4sub4 from "../../assets/img/submodules/4/m4s4.png";
import Module4sub5 from "../../assets/img/submodules/4/m4s5.png";
import Module4sub6 from "../../assets/img/submodules/4/m4s6.png";
import Module4sub7 from "../../assets/img/submodules/4/m4s7.png";
//
import Module5sub1 from "../../assets/img/submodules/5/m5s1.png";
import Module5sub2 from "../../assets/img/submodules/5/m5s2.png";
import Module5sub3 from "../../assets/img/submodules/5/m5s3.png";
import Module5sub4 from "../../assets/img/submodules/5/m5s4.png";
import Module5sub5 from "../../assets/img/submodules/5/m5s5.png";
import Module5sub6 from "../../assets/img/submodules/5/m5s6.png";
import Module5sub7 from "../../assets/img/submodules/5/m5s7.png";

import SubModuleBtnImage from "./SubModuleBtnImage";
import "./ModuleHome.css";

class SubModuleBtn extends Component {
  state = {
    ActiveImage: {},
    NormalImage: {},
    userActiveSubModuleNum: 0,
    UserTempModuleNum: 0,
    UserModuleNum: 0,
  };

  componentDidMount = () => {
    let userActiveSubModule = localStorage.getItem("UserSubModule");
    let UserTempModule = localStorage.getItem("UserTempModule");
    let UserModule = localStorage.getItem("UserModule");
    this.setState(
      {
        userActiveSubModuleNum: userActiveSubModule.substring(3),
        UserTempModuleNum: UserTempModule.substring(6),
        UserModuleNum: UserModule.substring(6),
      }
      // () => {
      //   console.log(this.state);
      // }
    );
  };

  render() {
    const {
      userActiveSubModule,
      userActiveModule,
      onClick,
      isEasyModeActive,
    } = this.props;
    const {
      userActiveSubModuleNum,
      UserTempModuleNum,
      UserModuleNum,
    } = this.state;

    return (
      // <div className={`d-none d-lg-block Sub${userActiveModule}-panel`}>
      <div className={`Sub${userActiveModule}-panel`}>
        <Row className='w-100 m-2'>
          <Col>
            <SubModuleBtnImage
              hoverTitle='SubModule1-mHover'
              userActiveSubModule={userActiveSubModule}
              userActiveModule={userActiveModule}
              activeImage={
                userActiveModule === "Module1" //|| userActiveSubModuleNum >= 1
                  ? Module1sub1
                  : userActiveModule === "Module2"
                  ? Module2sub1
                  : userActiveModule === "Module3"
                  ? Module3sub1
                  : userActiveModule === "Module4"
                  ? Module4sub1
                  : userActiveModule === "Module5"
                  ? Module5sub1
                  : null
              }
              userActiveSubModuleNum={userActiveSubModuleNum}
              UserTempModuleNum={UserTempModuleNum}
              UserModuleNum={UserModuleNum}
              normalImage={NormalSub1}
              subName='sub1'
              subNum='1'
              onClick={onClick}
            />
          </Col>

          <Col>
            <SubModuleBtnImage
              hoverTitle='SubModule2-mHover'
              userActiveSubModule={userActiveSubModule}
              userActiveModule={userActiveModule}
              activeImage={
                userActiveModule === "Module1" //&& userActiveSubModuleNum >= 2
                  ? Module1sub2
                  : userActiveModule === "Module2"
                  ? Module2sub2
                  : userActiveModule === "Module3"
                  ? Module3sub2
                  : userActiveModule === "Module4"
                  ? Module4sub2
                  : userActiveModule === "Module5"
                  ? Module5sub2
                  : null
              }
              userActiveSubModuleNum={userActiveSubModuleNum}
              UserTempModuleNum={UserTempModuleNum}
              UserModuleNum={UserModuleNum}
              normalImage={NormalSub2}
              subName='sub2'
              subNum='2'
              onClick={onClick}
            />
          </Col>

          <Col>
            <SubModuleBtnImage
              hoverTitle='SubModule3-mHover'
              userActiveSubModule={userActiveSubModule}
              userActiveModule={userActiveModule}
              activeImage={
                userActiveModule === "Module1"
                  ? Module1sub3
                  : userActiveModule === "Module2"
                  ? Module2sub3
                  : userActiveModule === "Module3"
                  ? Module3sub3
                  : userActiveModule === "Module4"
                  ? Module4sub3
                  : userActiveModule === "Module5"
                  ? Module5sub3
                  : null
              }
              userActiveSubModuleNum={userActiveSubModuleNum}
              UserTempModuleNum={UserTempModuleNum}
              UserModuleNum={UserModuleNum}
              normalImage={NormalSub3}
              subName='sub3'
              subNum='3'
              onClick={onClick}
              isEasyModeActive={isEasyModeActive}
            />
          </Col>

          <Col>
            <SubModuleBtnImage
              hoverTitle='SubModule4-mHover'
              userActiveSubModule={userActiveSubModule}
              userActiveModule={userActiveModule}
              activeImage={
                userActiveModule === "Module1"
                  ? Module1sub4
                  : userActiveModule === "Module2"
                  ? Module2sub4
                  : userActiveModule === "Module3"
                  ? Module3sub4
                  : userActiveModule === "Module4"
                  ? Module4sub4
                  : userActiveModule === "Module5"
                  ? Module5sub4
                  : null
              }
              userActiveSubModuleNum={userActiveSubModuleNum}
              UserTempModuleNum={UserTempModuleNum}
              UserModuleNum={UserModuleNum}
              normalImage={NormalSub4}
              subName='sub4'
              subNum='4'
              onClick={onClick}
            />
          </Col>

          <Col>
            <SubModuleBtnImage
              hoverTitle='SubModule5-mHover'
              userActiveSubModule={userActiveSubModule}
              userActiveModule={userActiveModule}
              activeImage={
                userActiveModule === "Module1"
                  ? Module1sub5
                  : userActiveModule === "Module2"
                  ? Module2sub5
                  : userActiveModule === "Module3"
                  ? Module3sub5
                  : userActiveModule === "Module4"
                  ? Module4sub5
                  : userActiveModule === "Module5"
                  ? Module5sub5
                  : null
              }
              userActiveSubModuleNum={userActiveSubModuleNum}
              UserTempModuleNum={UserTempModuleNum}
              UserModuleNum={UserModuleNum}
              normalImage={NormalSub5}
              subName='sub5'
              subNum='5'
              onClick={onClick}
            />
          </Col>

          <Col>
            <SubModuleBtnImage
              hoverTitle='SubModule6-mHover'
              userActiveSubModule={userActiveSubModule}
              userActiveModule={userActiveModule}
              activeImage={
                userActiveModule === "Module1"
                  ? Module1sub6
                  : userActiveModule === "Module2"
                  ? Module2sub6
                  : userActiveModule === "Module3"
                  ? Module3sub6
                  : userActiveModule === "Module4"
                  ? Module4sub6
                  : userActiveModule === "Module5"
                  ? Module5sub6
                  : null
              }
              userActiveSubModuleNum={userActiveSubModuleNum}
              UserTempModuleNum={UserTempModuleNum}
              UserModuleNum={UserModuleNum}
              normalImage={NormalSub6}
              subName='sub6'
              subNum='6'
              onClick={onClick}
            />
          </Col>

          <Col>
            <SubModuleBtnImage
              hoverTitle='SubModule7-mHover'
              userActiveSubModule={userActiveSubModule}
              userActiveModule={userActiveModule}
              activeImage={
                userActiveModule === "Module1"
                  ? Module1sub7
                  : userActiveModule === "Module2"
                  ? Module2sub7
                  : userActiveModule === "Module3"
                  ? Module3sub7
                  : userActiveModule === "Module4"
                  ? Module4sub7
                  : userActiveModule === "Module5"
                  ? Module5sub7
                  : null
              }
              userActiveSubModuleNum={userActiveSubModuleNum}
              UserTempModuleNum={UserTempModuleNum}
              UserModuleNum={UserModuleNum}
              normalImage={NormalSub7}
              subName='sub7'
              subNum='7'
              onClick={onClick}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
export default SubModuleBtn;
