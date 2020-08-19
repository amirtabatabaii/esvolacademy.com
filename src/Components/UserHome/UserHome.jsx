import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { Progress } from "antd";

import ModuleNavBar from "../Module/ModuleNavBar";
import Footer from "../Footer/Footer";
import TranslateText from "../Translate/TranslateText";

import "./userHome.css";

import avatar from "../../assets/img/img_avatar.png";
import { Link } from "react-router-dom";

class UserHome extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className='main-bg-color'>
        <div id='page-wrap' className='App'>
          <ModuleNavBar userActiveModule='Module1' />

          {/* <Container> */}
          <p className='messageTxt text-left pt-5 pl-5'>
            <TranslateText txt='User-Hello-Message' />
          </p>

          <Row className='w-100 p-5'>
            <Col lg={6} md={12} sm={12} className='p-3'>
              <div className='box text-center'>
                <Row className='w-100 m-auto'>
                  <Col lg={4} md={12} sm={12} className='p-3'>
                    <Image className='avatar-box' src={avatar} />
                  </Col>
                  <Col lg={8} md={12} sm={12} className='p-3'>
                    <p className='user-info-head'>
                      <TranslateText txt='User-personal-info-Header' />
                    </p>
                    <p className='info-text'>Melis</p>
                    <p className='info-text'>Çaycı</p>
                    <p className='info-text'>melis@gmail.com</p>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col lg={6} md={12} sm={12} className='p-3'>
              <div className='box text-center'>
                <Row className='w-100 m-auto'>
                  <Col lg={4} md={12} sm={12} className='p-3'>
                    <Progress
                      width='25vh'
                      type='circle'
                      strokeColor={{
                        "0%": "#fe7635",
                        "100%": "#e71980",
                      }}
                      percent={40}
                    />
                  </Col>
                  <Col lg={8} md={12} sm={12} className='p-3'>
                    <p className='user-info-head'>
                      <TranslateText txt='User-education-info-Header' />
                    </p>
                    <p className='info-text'>Module 1</p>
                    <p className='info-text'>SubModule 1</p>
                    <p className='info-text'>Score : 200</p>

                    <Link to='/modules'>
                      <button>continue</button>
                    </Link>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          {/* </Container> */}
        </div>

        <Footer userActiveModule={"Main"} />
      </div>
    );
  }
}
export default UserHome;
