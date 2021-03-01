import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

import HomeNavBar from "../Home/HomeNavBar";
import Footer from "../Footer/Footer";

import "./loginRegister.css";
import TranslateText from "../Translate/TranslateText";
import { Col, Form, Row } from "react-bootstrap";
import { ApiUrlMain2 } from "../Utility/ApiUrl";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { openNotificationWithIcon } from "../AdminSection/Utility/Error";

class Login extends Component {
  state = { PassError: false, EmailError: false, password: "", email: "" };

  handleSubmit = (event) => {
    event.preventDefault();

    // localStorage.setItem(
    //   "UserInfo",
    //   "Bearer eyJhbGciOiJIUzUxMiJ9.eyJSb2xlIjoiVVNFUiIsInN1YiI6InRlc3RAdGVzdC5jb20iLCJ1c2VyTmFtZSI6InRlc3RAdGVzdC5jb20iLCJleHAiOjE2MDUzNTE5MTcsInVzZXJJRCI6Im1yTGg3YXhObVVBUlc2YSJ9.nKMOk7HMP3xCqJui5k0RiHgGwh_PR7tGLtNSbjy1Vh4WgxbDr5BESWom0-uX25RDV7fqAnbjNanLOaamoZ2Q0g"
    // );
    // localStorage.setItem("UserID", "mrLh7axNmUARW6a");

    // this.props.history.push(`/user`);

    if (this.state.EmailError === false) {
      var crypto = require("crypto");
      var shasum = crypto
        .createHash("sha1")
        .update(this.state.password)
        .digest("hex");

      const hashedPass = shasum;

      axios
        .post(
          ApiUrlMain2 + "/users/login",
          {
            email: this.state.email,
            password: hashedPass,
          },
          (axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*")
        )
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem("UserInfo", res.data);
            const decoded = jwt_decode(res.data);
            localStorage.setItem("UserID", decoded.userID);
            this.props.history.push(`/user`);
          }
        })
        .catch((error) => {
          openNotificationWithIcon(
            "error",
            <TranslateText txt='Login-Error1' />,
            <TranslateText txt='Login-Error2' />,
            3
          );
        });
    }
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handlePassChange = (e) => {
    if (e.target.value === "") {
      this.setState({ PassError: true });
    } else {
      this.setState({ PassError: false, password: e.target.value });
    }
  };

  handleEmailChange = (e) => {
    let lastAtPos = e.target.value.lastIndexOf("@");
    let lastDotPos = e.target.value.lastIndexOf(".");

    if (e.target.value !== "") {
      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          e.target.value.indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          e.target.value.length - lastDotPos > 2
        )
      ) {
        this.setState({ EmailError: true });
        // openNotificationWithIcon("error", "EmailError", "EmailErrorsss", 1);
      } else {
        this.setState({ EmailError: false, email: e.target.value });
        // openNotificationWithIcon("success", "Emailttt", "Emailtttsss", 3);
      }
    }
  };

  render() {
    return (
      <div className='main-bg-color'>
        <div id='page-wrap' className='App'>
          <HomeNavBar />
          <p className='login-head text-center pt-2'>
            <TranslateText txt='Login-text' />
          </p>

          <Form
            className='text-center'
            id='LoginForm'
            onSubmit={this.handleSubmit}
          >
            <Form.Group className='mt-2 mb-2'>
              <div className='m-auto'>
                <TextField
                  className='login-textField'
                  // variant='outlined'
                  label={<TranslateText txt='Login-email' />}
                  name='email'
                  type='email'
                  onChange={this.handleEmailChange}
                  required
                  error={this.state.EmailError}
                  helperText={<TranslateText txt='Login-email-HelperText' />}
                />
              </div>
            </Form.Group>

            <Form.Group className='mt-2 mb-2'>
              <div className='m-auto'>
                <TextField
                  className='login-textField'
                  // variant='outlined'
                  label={<TranslateText txt='Login-password' />}
                  name='password'
                  type='password'
                  onChange={this.handlePassChange}
                  required
                  error={this.state.PassError}
                  helperText={<TranslateText txt='Login-password-HelperText' />}
                />
              </div>
            </Form.Group>

            <div className='m-auto'>
              <button className='login-Btn' type='submit'>
                <TranslateText txt='Login-BtnText' />
              </button>
            </div>
          </Form>
        </div>

        <div style={{ marginTop: "200px" }}>
          <Footer userActiveModule={"Main"} />
        </div>
      </div>
    );
  }
}
export default Login;
