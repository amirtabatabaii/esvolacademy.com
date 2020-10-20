import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { Modal, Radio } from "antd";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import ModuleNavBar from "../Module/ModuleNavBar";
import Footer from "../Footer/Footer";
import TranslateText from "../Translate/TranslateText";

import "./userHome.css";

import avatar from "../../assets/img/img_avatar.png";
import { Link } from "react-router-dom";

import ProgressImage from "./ProgressImage";

const radioStyle = {
  display: "block",
  height: "30px",
  lineHeight: "30px",
};

class UserHome extends Component {
  state = { visible: false, value: "YesGamification" };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    // console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    // console.log(e);
    this.setState({
      visible: false,
    });
  };

  onChange = (e) => {
    // `console`.log(e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  // info() {
  //   Modal.info({
  //     title: "I Perfer...",
  //     content: (
  //       <div>
  //         <Radio.Group
  //           onChange={this.onChange}
  //           value={this.state.value}
  //           defaultValue={"NoGamification"}
  //         >
  //           <Radio style={radioStyle} value={"YesGamification"}>
  //             Taking gamification course
  //           </Radio>
  //           <Radio style={radioStyle} value={"NoGamification"}>
  //             Taking only the videos
  //           </Radio>
  //         </Radio.Group>
  //       </div>
  //     ),
  //     onOk() {
  //       this.setState({
  //         visible: false,
  //       });
  //     },
  //     // onOk() {},
  //   });
  // }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.showModal();
    // this.info();
  }

  render() {
    const { value } = this.state;
    const { userActiveModule, userActiveSubModule } = this.props;

    return (
      <div className='main-bg-color'>
        {/* <Button type='primary' onClick={this.showModal}>
          Open Modal
        </Button> */}

        {/* <Modal
          title='I Perfer...'
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Radio.Group
            onChange={this.onChange}
            value={value}
            defaultValue={"YesGamification"}
          >
            <Radio style={radioStyle} value={"YesGamification"}>
              Taking gamification course
            </Radio>
            <Radio style={radioStyle} value={"NoGamification"}>
              Taking only the videos
            </Radio>
          </Radio.Group>
        </Modal> */}

        <div id='page-wrap' className='App'>
          <ModuleNavBar userActiveModule='Module1' />

          {/* <Container> */}
          <p className='messageTxt text-left pt-5 pl-5'>
            <TranslateText txt='User-Hello-Message' />
            {" Melis"}
          </p>

          <Row className='w-100 p-5'>
            <Col lg={6} md={12} sm={12} className='p-2'>
              <div className='box text-md-center'>
                <Row className='w-100 m-auto'>
                  <Col
                    lg={5}
                    md={12}
                    sm={12}
                    className='p-5 m-auto text-lg-right'
                  >
                    <Image src={avatar} alt='esvol' className='avatar-box' />
                  </Col>
                  <Col
                    lg={7}
                    md={12}
                    sm={12}
                    className='p-3 m-auto text-lg-left'
                  >
                    <p className='user-info-head'>
                      <TranslateText txt='User-personal-info-Header' />
                    </p>
                    <p className='info-text font-weight-light'>Melis</p>
                    <p className='info-text font-weight-light'>Çaycı</p>
                    <p className='info-text font-weight-light'>
                      melis@gmail.com
                    </p>

                    {/* <Link to='/modules'> */}
                    <button className='continue-Btn' type='submit'>
                      <TranslateText txt='User-Edit-Btn' />
                    </button>
                    {/* </Link> */}
                  </Col>
                </Row>
              </div>
            </Col>

            <Col lg={6} md={12} sm={12} className='p-2'>
              <div className='box text-md-center'>
                <Row className='w-100 m-auto'>
                  <Col
                    lg={5}
                    md={12}
                    sm={12}
                    className='p-3 m-auto text-lg-right'
                  >
                    <ProgressImage
                      userActiveModule={userActiveModule}
                      userActiveSubModule={userActiveSubModule}
                    />
                    {/* <Image src={Progress1} alt='esvol' className='chart-box' /> */}
                  </Col>
                  <Col
                    lg={7}
                    md={12}
                    sm={12}
                    className='p-3 m-auto text-lg-left'
                  >
                    <p className='user-info-head'>
                      <TranslateText txt='User-education-info-Header' />
                    </p>
                    <p className='info-text'>
                      {userActiveModule.replace("Module", "Module ")}
                    </p>
                    <p className='info-text'>
                      {userActiveSubModule.replace("sub", "Sub Module ")}
                    </p>
                    <p className='info-text'>
                      <TranslateText txt='User-education-info-Score' />
                      {" : 200"}
                    </p>

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

const mapStateToProps = (state) => ({
  userActiveModule: state.userActiveModule,
  userActiveSubModule: state.userActiveSubModule,
});

export default connect(mapStateToProps, {})(withRouter(UserHome));
