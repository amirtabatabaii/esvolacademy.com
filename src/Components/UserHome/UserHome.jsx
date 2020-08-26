import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";

import ModuleNavBar from "../Module/ModuleNavBar";
import Footer from "../Footer/Footer";
import TranslateText from "../Translate/TranslateText";

import "./userHome.css";

import avatar from "../../assets/img/img_avatar.png";
import { Link } from "react-router-dom";

import Progress1 from "../../assets/img/progress_chart/progress1.png";

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
            <Col lg={6} md={12} sm={12} className='p-2'>
              <div className='box text-center'>
                <Row className='w-100 m-auto'>
                  <Col lg={5} md={12} sm={12} className='p-3 m-auto'>
                    <Image src={avatar} alt='esvol' className='avatar-box' />
                  </Col>
                  <Col lg={7} md={12} sm={12} className='p-3 m-auto'>
                    <p className='user-info-head'>
                      <TranslateText txt='User-personal-info-Header' />
                    </p>
                    <p className='info-text'>Melis</p>
                    <p className='info-text'>Çaycı</p>
                    <p className='info-text'>melis@gmail.com</p>

                    {/* <Link to='/edit'> */}
                    <button className='continue-Btn' type='submit'>
                      <TranslateText txt='User-Edit-Btn' />
                    </button>
                    {/* </Link> */}
                  </Col>
                </Row>
              </div>
            </Col>

            <Col lg={6} md={12} sm={12} className='p-2'>
              <div className='box text-center'>
                <Row className='w-100 m-auto'>
                  <Col lg={5} md={12} sm={12} className='p-3 m-auto'>
                    <Image src={Progress1} alt='esvol' className='chart-box' />
                  </Col>
                  <Col lg={7} md={12} sm={12} className='p-3 m-auto'>
                    <p className='user-info-head'>
                      <TranslateText txt='User-education-info-Header' />
                    </p>
                    <p className='info-text'>Module 1</p>
                    <p className='info-text'>SubModule 1</p>
                    <p className='info-text'>Score : 200</p>

                    <Link to='/modules'>
                      <button className='continue-Btn' type='submit'>
                        <TranslateText txt='User-Continue-Btn' />
                      </button>
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
