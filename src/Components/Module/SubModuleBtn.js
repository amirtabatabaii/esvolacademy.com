import React, { Component } from "react";
// import styled from "styled-components";
// import styled from "./Module1.css";
import { Row } from "react-bootstrap";

import Module1sub1a from "../../assets/img/m1sub1a.png";
import Module1sub1 from "../../assets/img/m1sub1.png";
import Module1sub2a from "../../assets/img/m1sub2a.png";
import Module1sub2 from "../../assets/img/m1sub2.png";
import Module1sub3a from "../../assets/img/m1sub3a.png";
import Module1sub3 from "../../assets/img/m1sub3.png";
import Module1sub4a from "../../assets/img/m1sub4a.png";
import Module1sub4 from "../../assets/img/m1sub4.png";
import Module1sub5a from "../../assets/img/m1sub5a.png";
import Module1sub5 from "../../assets/img/m1sub5.png";
import Module1sub6a from "../../assets/img/m1sub6a.png";
import Module1sub6 from "../../assets/img/m1sub6.png";
import Module1sub7a from "../../assets/img/m1sub7a.png";
import Module1sub7 from "../../assets/img/m1sub7.png";

import SubModuleBtnImage from "./SubModuleBtnImage";
import "./ModuleHome.css";

class SubModuleBtn extends Component {
  render() {
    const { activeSubModule, activeModule } = this.props;

    return (
      <div className='d-none d-lg-block'>
        <Row className='w-10'>
          <SubModuleBtnImage
            activeSubModule={activeSubModule}
            activeModule={activeModule}
            activeImage={Module1sub1a}
            normalImage={Module1sub1}
            subName='sub1'
          />
        </Row>

        <Row className='w-10'>
          <SubModuleBtnImage
            activeSubModule={activeSubModule}
            activeModule={activeModule}
            activeImage={Module1sub2a}
            normalImage={Module1sub2}
            subName='sub2'
          />
        </Row>

        <Row className='w-10'>
          <SubModuleBtnImage
            activeSubModule={activeSubModule}
            activeModule={activeModule}
            activeImage={Module1sub3a}
            normalImage={Module1sub3}
            subName='sub3'
          />
        </Row>

        <Row className='w-10'>
          <SubModuleBtnImage
            activeSubModule={activeSubModule}
            activeModule={activeModule}
            activeImage={Module1sub4a}
            normalImage={Module1sub4}
            subName='sub4'
          />
        </Row>

        <Row className='w-10'>
          <SubModuleBtnImage
            activeSubModule={activeSubModule}
            activeModule={activeModule}
            activeImage={Module1sub5a}
            normalImage={Module1sub5}
            subName='sub5'
          />
        </Row>

        <Row className='w-10'>
          <SubModuleBtnImage
            activeSubModule={activeSubModule}
            activeModule={activeModule}
            activeImage={Module1sub6a}
            normalImage={Module1sub6}
            subName='sub6'
          />
        </Row>

        <Row className='w-10'>
          <SubModuleBtnImage
            activeSubModule={activeSubModule}
            activeModule={activeModule}
            activeImage={Module1sub7a}
            normalImage={Module1sub7}
            subName='sub7'
          />
        </Row>
      </div>
    );
  }
}
export default SubModuleBtn;
