import React, { Component, useState } from "react";

import { Navbar, Image, Nav } from "react-bootstrap";
import LanguageSelector from "../Translate/LanguageSelector";
import TranslateText from "../Translate/TranslateText";
import axios from "axios";
import { ApiUrlMain2 } from "../Utility/ApiUrl";

import EsvolLogo1 from "../../assets/img/submodules/1/esvol1.png";
import EsvolLogo2 from "../../assets/img/submodules/2/esvol2.png";
import EsvolLogo3 from "../../assets/img/submodules/3/esvol3.png";
import EsvolLogo4 from "../../assets/img/submodules/4/esvol4.png";
import EsvolLogo5 from "../../assets/img/submodules/5/esvol5.png";

import "./ModuleNavBar.css";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";

class ModuleNavBar extends Component {
  handleLogoutClick = () => {
    this.handleClick("/login");
    localStorage.removeItem("UserID");
    localStorage.removeItem("UserInfo");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("UserModule");
    localStorage.removeItem("UserSubModule");
    localStorage.removeItem("UserTempModule");

    //this.props.history.push(`/login`);
  };

  handleClick = (url) => {
    let UserSubModule = "";
    let UserModule = "";
    let OldUserModule = localStorage.getItem("UserModule");
    let OldUserSubModule = localStorage.getItem("UserSubModule");
    let OldUserTempModule = localStorage.getItem("UserTempModule");
    let OldUserInfo = localStorage.getItem("UserInfo");
    let OldUserID = localStorage.getItem("UserID");
    let NewUserModule = this.props.UserStatus.currentModule;
    let NewUserSubModule = this.props.UserStatus.currentSubModule;

    if (
      OldUserModule === "" ||
      OldUserSubModule === "" ||
      OldUserInfo === "" ||
      OldUserID === "" ||
      OldUserTempModule === "" ||
      OldUserModule === null ||
      OldUserSubModule === null ||
      OldUserInfo === null ||
      OldUserID === null ||
      OldUserTempModule === null
    ) {
      this.props.history.push(url);
    } else {
      if (NewUserSubModule.substring(3) > OldUserSubModule.substring(3))
        UserSubModule = NewUserSubModule;
      else if (NewUserSubModule.substring(3) < OldUserSubModule.substring(3))
        UserSubModule = OldUserSubModule;
      else UserSubModule = OldUserSubModule;

      if (NewUserModule.substring(6) > OldUserModule.substring(6))
        UserModule = NewUserModule;
      else if (NewUserModule.substring(6) < OldUserModule.substring(6))
        UserModule = OldUserModule;
      else UserModule = OldUserModule;
      // let UserTempModule = localStorage.getItem("UserTempModule");
      let userId = localStorage.getItem("UserID");

      axios
        .put(
          ApiUrlMain2 + `/users/${userId}/status`,
          {
            userStatus: {
              currentModule: UserModule,
              currentSubModule: UserSubModule, //this.props.UserStatus.currentSubModule,
              score: this.props.UserStatus.score,
              badgeNo: this.props.UserStatus.badgeNo,
            },
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
            this.props.history.push(url);
            // window.location.reload(false);
            //openNotificationWithIcon("success", "Update", "Update ok", 3);
          }
        });
    }
  };

  render() {
    const { userActiveModule } = this.props;

    return (
      <div style={{ marginLeft: "10%", marginRight: "10%" }}>
        <Navbar
          style={{ backgroundColor: "#f2f3f7" }}
          expand='md'
          // className='fixed-top pb-0'
        >
          <Navbar.Brand href=''>
            <Image
              src={
                userActiveModule === "Module1"
                  ? EsvolLogo1
                  : userActiveModule === "Module2"
                  ? EsvolLogo2
                  : userActiveModule === "Module3"
                  ? EsvolLogo3
                  : userActiveModule === "Module4"
                  ? EsvolLogo4
                  : userActiveModule === "Module5"
                  ? EsvolLogo5
                  : null
              }
              width='110'
              // height='50'
              className='d-inline-block align-top'
              alt='esvol'
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav' className='text-center'>
            <Nav className='ml-auto'>
              <Nav.Link
                className={`${userActiveModule}-menu-text ml-4`}
                onClick={() => this.handleClick("/")}
                // href={this.state.OkToReload ? "/" : ""}
              >
                <TranslateText txt='MenuItem-Anasayfa' />
              </Nav.Link>

              <Nav.Link
                className={`${userActiveModule}-menu-text ml-4`}
                onClick={() => this.handleClick("/user")}
                // href={this.state.OkToReload ? "/user" : ""}
              >
                <TranslateText txt='MenuItem-Profil' />
              </Nav.Link>

              <Nav.Link
                className={`${userActiveModule}-menu-text ml-4`}
                onClick={this.handleLogoutClick}
                // href='/'
              >
                <TranslateText txt='MenuItem-Logout' />
              </Nav.Link>

              <Nav.Link className='ml-4'>
                <LanguageSelector />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  UserInfo: state.UserInfo,
  UserStatus: state.UserStatus,
});

export default connect(mapStateToProps, {})(withRouter(ModuleNavBar));
