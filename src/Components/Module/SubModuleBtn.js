import React, { Component } from "react";
// import styled from "styled-components";
// import styled from "./Module1.css";
import { Row, Image } from "react-bootstrap";

import sub1a from "../../assets/img/sub1a.png";
import sub1 from "../../assets/img/sub1.png";
import sub2a from "../../assets/img/sub2a.png";
import sub2 from "../../assets/img/sub2.png";
import sub3a from "../../assets/img/sub3a.png";
import sub3 from "../../assets/img/sub3.png";
import sub4a from "../../assets/img/sub4a.png";
import sub4 from "../../assets/img/sub4.png";
import sub5a from "../../assets/img/sub5a.png";
import sub5 from "../../assets/img/sub5.png";
import sub6a from "../../assets/img/sub6a.png";
import sub6 from "../../assets/img/sub6.png";
import sub7a from "../../assets/img/sub7a.png";
import sub7 from "../../assets/img/sub7.png";

import SubModuleBtnImage from "./SubModuleBtnImage";

class SubModuleBtn extends Component {
  render() {
    const activeStyle =
      "inset 5px 5px 8px #c16442, inset -5px -5px 8px #ff9a64";
    const normalStyle = "-5px -5px 8px #ff9a64, 5px 5px 8px #c16442";
    const { active } = this.props;

    return (
      <div className='d-none d-lg-block'>
        <Row className='w-10 d-flex justify-content-start'>
          <SubModuleBtnImage
            active={active}
            activeImage={sub1a}
            normalImage={sub1}
            subName='sub1'
          />
        </Row>

        <Row className='w-10 d-flex justify-content-start'>
          <SubModuleBtnImage
            active={active}
            activeImage={sub2a}
            normalImage={sub2}
            subName='sub2'
          />
        </Row>

        <Row className='w-10 d-flex justify-content-start'>
          <SubModuleBtnImage
            active={active}
            activeImage={sub3a}
            normalImage={sub3}
            subName='sub3'
          />
        </Row>

        <Row className='w-10 d-flex justify-content-start'>
          <SubModuleBtnImage
            active={active}
            activeImage={sub4a}
            normalImage={sub4}
            subName='sub4'
          />
        </Row>

        <Row className='w-10 d-flex justify-content-start'>
          <SubModuleBtnImage
            active={active}
            activeImage={sub5a}
            normalImage={sub5}
            subName='sub5'
          />
        </Row>

        <Row className='w-10 d-flex justify-content-start'>
          <SubModuleBtnImage
            active={active}
            activeImage={sub6a}
            normalImage={sub6}
            subName='sub6'
          />
        </Row>

        <Row className='w-10 d-flex justify-content-start'>
          <SubModuleBtnImage
            active={active}
            activeImage={sub7a}
            normalImage={sub7}
            subName='sub7'
          />
        </Row>
      </div>
    );
  }
}
export default SubModuleBtn;
