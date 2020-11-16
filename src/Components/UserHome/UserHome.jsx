import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import ModuleNavBar from "../Module/ModuleNavBar";
import Footer from "../Footer/Footer";
import TranslateText from "../Translate/TranslateText";

import "./userHome.css";
import { SetEducationWithTasks, SetUserInfo } from "../../Redux/action";
import avatar from "../../assets/img/img_avatar.png";
import { Link } from "react-router-dom";

import ProgressImage from "./ProgressImage";
import UserModuleActivity from "./UserModuleActivity";
import UserSubModuleActivity from "./UserSubModuleActivity";
import axios from "axios";
import { ApiUrlMain2 } from "../Utility/ApiUrl";

import { Switch } from "antd";
import Settings from "./Settings";
import { openNotificationWithIcon } from "../AdminSection/Utility/Error";
import UserAvatarView from "./UserAvatarView";

const radioStyle = {
  display: "block",
  height: "30px",
  lineHeight: "30px",
};

class UserHome extends Component {
  state = {
    visible: false,
    SettingVisible: false,
    AvatarVisible: false,
    imageNum: this.props.UserInfo.avatarNo,
    firstName: this.props.UserInfo.firstName,
    lastName: this.props.UserInfo.lastName,
    password: "",
    avatarStatus: false,
    isEasyModeActive: null,
  };

  hideModal = () => {
    this.setState({
      SettingVisible: false,
      AvatarVisible: false,
    });
  };

  SettingShowModal = () => {
    this.setState({
      visible: false,
      SettingVisible: true,
      AvatarVisible: false,
    });
  };

  AvatarShowModal = () => {
    this.setState({
      visible: false,
      SettingVisible: true,
      AvatarVisible: true,
    });
  };

  handleSettingChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSettingOk = (e) => {
    if (this.state.password !== "") {
      let pass = this.state.password;
      let reg = /^[A-Z0-9a-z]\w{4,30}$/;
      let test = reg.test(pass);
      if (test) {
        // alert("pass");
        var crypto = require("crypto");
        var shasum = crypto
          .createHash("sha1")
          .update(this.state.password)
          .digest("hex");

        const hashedPass = shasum;

        this.setState(
          {
            password: hashedPass,
          },
          () => {
            axios
              .put(
                ApiUrlMain2 + `/users/${this.props.UserInfo.userId}`,
                {
                  firstName:
                    this.state.firstName === undefined
                      ? this.props.UserInfo.firstName
                      : this.state.firstName,
                  lastName:
                    this.state.lastName === undefined
                      ? this.props.UserInfo.lastName
                      : this.state.lastName,
                  avatarNo:
                    this.state.imageNum === undefined
                      ? this.props.UserInfo.avatarNo
                      : this.state.imageNum,
                  password: this.state.password,
                  avatarStatus: this.state.avatarStatus,
                  isEasyModeActive: this.props.UserInfo.isEasyModeActive,
                },

                (axios.defaults.headers.common[
                  "Authorization"
                ] = localStorage.getItem("UserInfo")),
                (axios.defaults.headers.common["Access-Control-Allow-Origin"] =
                  "*"),
                {
                  "Content-Type": "application/json",
                }
              )
              .then((res) => {
                // console.log("res =====> ", res);
                if (res.status === 200) {
                  this.setState(
                    {
                      SettingVisible: false,
                    },
                    () => {
                      window.location.reload(false);
                      //openNotificationWithIcon("success", "Update", "Update ok", 3);
                    }
                  );
                }
              });
          }
        );
      } else {
        openNotificationWithIcon(
          "error",
          "Password Error",
          "Password Has Error",
          3
        );
      }
    } else {
      axios
        .put(
          ApiUrlMain2 + `/users/${this.props.UserInfo.userId}`,
          {
            firstName:
              this.state.firstName === undefined
                ? this.props.UserInfo.firstName
                : this.state.firstName,
            lastName:
              this.state.lastName === undefined
                ? this.props.UserInfo.lastName
                : this.state.lastName,
            avatarNo:
              this.state.imageNum === undefined
                ? this.props.UserInfo.avatarNo
                : this.state.imageNum,
            password: "", //this.state.password,
            avatarStatus: this.state.avatarStatus,
            isEasyModeActive: this.props.UserInfo.isEasyModeActive,
          },

          (axios.defaults.headers.common[
            "Authorization"
          ] = localStorage.getItem("UserInfo")),
          (axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*"),
          {
            "Content-Type": "application/json",
          }
        )
        .then((res) => {
          // console.log("res =====> ", res);
          if (res.status === 200) {
            this.setState(
              {
                SettingVisible: false,
              },
              () => {
                window.location.reload(false);
                //openNotificationWithIcon("success", "Update", "Update ok", 3);
              }
            );
          }
        });
    }
  };

  // async componentDidUpdate(previousProps, previousState) {
  //   console.log(previousProps.UserInfo.firstName);
  //   console.log(this.props.UserInfo.firstName);
  //   if (
  //     previousProps.UserInfo.firstName !== this.props.UserInfo.firstName ||
  //     previousProps.UserInfo.lastName !== this.props.UserInfo.lastName ||
  //     previousProps.UserInfo.avatarNo !== this.props.UserInfo.avatarNo
  //   ) {
  //     console.log("SSSSSSSSSSSSSSSSSsssssss");

  //     // await axios
  //     //   .get(ApiUrlMain2 + `/users/${localStorage.getItem("UserID")}`, {
  //     //     headers: {
  //     //       Authorization: localStorage.getItem("UserInfo"),
  //     //     },
  //     //   })
  //     //   .then((Response) => {
  //     //     if (Response.status === 200) {
  //     //       //console.log(Response.data);
  //     //       this.props.SetUserInfo(Response.data);
  //     //     }
  //     //   });
  //   }
  // }

  handleAvatarOk = (e) => {
    this.setState({
      AvatarVisible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      SettingVisible: false,
      AvatarVisible: false,
    });
  };

  handleImageSelect = (num) => {
    this.setState({ imageNum: num });
  };

  async componentDidMount() {
    window.scrollTo(0, 0);

    await axios
      .get(ApiUrlMain2 + `/users/${localStorage.getItem("UserID")}`, {
        headers: {
          Authorization: localStorage.getItem("UserInfo"),
        },
      })
      .then((Response) => {
        if (Response.status === 200) {
          // console.log(Response.data);
          this.props.SetUserInfo(Response.data);
        }
      });

    // this.showModal();
  }

  // async componentDidUpdate(previousProps, previousState) {
  //   console.log("previousProps", previousProps);
  //   console.log("previousState", previousState);

  //   console.log(previousProps.UserInfo.firstName);
  //   console.log(this.state.firstName);
  // }

  handleEasyMode = (checked) => {
    this.setState(
      {
        isEasyModeActive: checked,
      },
      () => {
        if (
          this.state.isEasyModeActive !== this.props.UserInfo.isEasyModeActive
        ) {
          // console.log(this.state.isEasyModeActive);
          axios
            .put(
              ApiUrlMain2 + `/users/${this.props.UserInfo.userId}`,
              {
                firstName: this.props.UserInfo.firstName,
                lastName: this.props.UserInfo.lastName,
                password: "",
                avatarNo: this.props.UserInfo.avatarNo,
                avatarStatus: this.props.UserInfo.avatarStatus,
                isEasyModeActive: this.state.isEasyModeActive,
              },

              (axios.defaults.headers.common[
                "Authorization"
              ] = localStorage.getItem("UserInfo")),
              (axios.defaults.headers.common["Access-Control-Allow-Origin"] =
                "*"),
              {
                "Content-Type": "application/json",
              }
            )
            .then((res) => {
              // console.log("res =====> ", res);
              if (res.status === 200) {
                window.location.reload(false);
                // openNotificationWithIcon("success", "Update", "Update ok", 3);
              }
            });
        }
      }
    );
  };

  render() {
    const {
      // userActiveModule,
      // userActiveSubModule,
      // EducationWithTasks,
      UserInfo,
      UserStatus,
    } = this.props;

    return (
      <div className='main-bg-color'>
        <div id='page-wrap' className='App'>
          <ModuleNavBar userActiveModule={UserStatus.currentModule} />

          {/* <Container> */}
          <p className='messageTxt text-left pt-5 pl-5'>
            <TranslateText txt='User-Hello-Message' />
            {" " + UserInfo.firstName}
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
                    <UserAvatarView avatarNo={UserInfo.avatarNo} />
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
                    <p className='info-text font-weight-light'>
                      {UserInfo.firstName}
                    </p>
                    <p className='info-text font-weight-light'>
                      {UserInfo.lastName}
                    </p>
                    <p className='info-text font-weight-light'>
                      {UserInfo.email}
                    </p>

                    <div className='info-text'>
                      <TranslateText txt='User-EasyMode' />

                      <Switch
                        onChange={this.handleEasyMode}
                        checked={UserInfo.isEasyModeActive == 1 ? true : false}
                        className={
                          UserInfo.isEasyModeActive == 1
                            ? "ml-3 bg-success"
                            : "ml-3 bg-mute"
                        }
                      />
                    </div>

                    {/* <Link to='/user/setting'> */}
                    {/* <Link onClick={this.SettingShowModal}> */}
                    <button
                      className='continue-Btn mt-5'
                      type='submit'
                      onClick={this.SettingShowModal}
                    >
                      <TranslateText txt='User-Edit-Btn' />
                    </button>
                    {/* </Link> */}

                    <Settings
                      SettingVisible={this.state.SettingVisible}
                      UserInfo={UserInfo}
                      handleSettingOk={this.handleSettingOk}
                      handleCancel={this.handleCancel}
                      AvatarVisible={this.state.AvatarVisible}
                      handleAvatarOk={this.handleAvatarOk}
                      AvatarShowModal={this.AvatarShowModal}
                      handleImageSelect={this.handleImageSelect}
                      imageNum={this.state.imageNum}
                      handleSettingChange={this.handleSettingChange}
                    />
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
                      userActiveModule={UserStatus.currentModule}
                      userActiveSubModule={UserStatus.currentSubModule}
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
                      <UserModuleActivity
                        userActiveModule={UserStatus.currentModule}
                      />
                    </p>
                    <p className='info-text'>
                      <UserSubModuleActivity
                        userActiveSubModule={UserStatus.currentSubModule}
                      />
                    </p>
                    <p className='info-text'>
                      <TranslateText txt='User-education-info-Score' />
                      {" : " + UserStatus.score}
                    </p>

                    <Link to='/modules'>
                      <button className='continue-Btn mt-5' type='submit'>
                        <TranslateText txt='User-Continue-Btn' />
                      </button>
                    </Link>

                    {/* {userActiveModule === "Module5" && (
                      <Link
                        to='/certificate'
                        className='Menu-text ml-4 text-decoration-none'
                      >
                        <button className={`${userActiveModule}-next-btn m-4`}>
                          <TranslateText txt='SubModule7-FinishModule' />
                        </button>
                      </Link>
                    )} */}
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

        <Footer userActiveModule={UserStatus.currentModule} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userActiveModule: state.userActiveModule,
  userActiveSubModule: state.userActiveSubModule,
  EducationWithTasks: state.EducationWithTasks,
  UserInfo: state.UserInfo,
  UserStatus: state.UserStatus,
});

export default connect(mapStateToProps, { SetEducationWithTasks, SetUserInfo })(
  withRouter(UserHome)
);
