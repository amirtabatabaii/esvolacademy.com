import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { Modal, Radio } from "antd";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import ModuleNavBar from "../Module/ModuleNavBar";
import Footer from "../Footer/Footer";
import TranslateText from "../Translate/TranslateText";

import "./userHome.css";
import { SetEducationWithTasks } from "../../Redux/action";
import avatar from "../../assets/img/img_avatar.png";
import { Link } from "react-router-dom";

import ProgressImage from "./ProgressImage";
import UserModuleActivity from "./UserModuleActivity";
import UserSubModuleActivity from "./UserSubModuleActivity";

const radioStyle = {
  display: "block",
  height: "30px",
  lineHeight: "30px",
};

class UserHome extends Component {
  state = {
    visible: false,
    value: this.props.EducationWithTasks
      ? "CourseWithTasks"
      : "CourseOnlyVideo",
  };

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
    this.setState(
      {
        visible: false,
      },
      () => {
        if (this.state.value === "CourseWithTasks")
          this.props.SetEducationWithTasks(true);
        else this.props.SetEducationWithTasks(false);
      }
    );
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.showModal();
  }

  render() {
    const { value } = this.state;
    const {
      userActiveModule,
      userActiveSubModule,
      EducationWithTasks,
    } = this.props;

    return (
      <div className='main-bg-color'>
        <Modal
          title='I Perfer...'
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Radio.Group
            onChange={this.onChange}
            defaultValue={
              EducationWithTasks ? "CourseWithTasks" : "CourseOnlyVideo"
            }
            Value={value}
          >
            <Radio style={radioStyle} value='CourseWithTasks'>
              <TranslateText txt='Course-With-Tasks' />
            </Radio>
            <Radio style={radioStyle} value='CourseOnlyVideo'>
              <TranslateText txt='Course-Only-Video' />
            </Radio>
          </Radio.Group>

          <p className='m-2 p-2 font-weight-bold'>
            <TranslateText txt='Course-selection-note' />
          </p>
        </Modal>

        <div id='page-wrap' className='App'>
          <ModuleNavBar userActiveModule={userActiveModule} />

          {/* <Container> */}
          <p className='messageTxt text-left pt-5 pl-5'>
            <TranslateText txt='User-Hello-Message' />
            {" Melis"}
          </p>

          <Row className='w-100 p-5'>
            <Col lg={6} md={12} sm={12} className='p-2'>
              <div className='box text-center'>
                <Row className='w-100 m-auto p-5'>
                  <Col
                    lg={6}
                    md={12}
                    sm={12}
                    className='p-3 m-auto text-lg-right'
                  >
                    <Image src={avatar} alt='esvol' className='avatar-box' />
                  </Col>
                  <Col
                    lg={6}
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
                    <button className='continue-Btn mt-5' type='submit'>
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
                  </Col>
                  <Col
                    lg={5}
                    md={12}
                    sm={12}
                    className='p-3 m-auto text-lg-left'
                  >
                    <p className='user-info-head'>
                      <TranslateText txt='User-education-info-Header' />
                    </p>
                    <p className='info-text'>
                      <UserModuleActivity userActiveModule={userActiveModule} />
                    </p>
                    <p className='info-text'>
                      <UserSubModuleActivity
                        userActiveSubModule={userActiveSubModule}
                      />
                    </p>
                    <p className='info-text'>
                      <TranslateText txt='User-education-info-Score' />
                      {" : 200"}
                    </p>

                    <Link to='/modules'>
                      <button className='continue-Btn mt-5' type='submit'>
                        <TranslateText txt='User-Continue-Btn' />
                      </button>
                    </Link>
                  </Col>
                </Row>
              </div>
            </Col>

            <div className='w-100 text-center'>
              <button className='esvolon-Btn' disabled>
                <TranslateText txt='User-Start-Esvolon' />
              </button>
            </div>
          </Row>
          {/* </Container> */}
        </div>

        {/* <Footer userActiveModule={"Main"} /> */}
        <Footer userActiveModule={userActiveModule} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userActiveModule: state.userActiveModule,
  userActiveSubModule: state.userActiveSubModule,
  EducationWithTasks: state.EducationWithTasks,
});

export default connect(mapStateToProps, { SetEducationWithTasks })(
  withRouter(UserHome)
);
