import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

import HomeNavBar from "../Home/HomeNavBar";
import Footer from "../Footer/Footer";

import "./loginRegister.css";
import TranslateText from "../Translate/TranslateText";
import { Form } from "react-bootstrap";
import { ApiUrlMain2 } from "../Utility/ApiUrl";
import axios from "axios";

class Login extends Component {
  state = { PassError: null, EmailError: null, password: "", email: "" };

  handleSubmit = (event) => {
    event.preventDefault();

    var crypto = require("crypto");
    var shasum = crypto
      .createHash("sha1")
      .update(this.state.password)
      .digest("hex");

    const hashedPass = shasum;
    // console.log(hashedPass);
    // console.log(this.state.email);
    axios
      .post(
        ApiUrlMain2 + "/users/login",
        {
          email: this.state.email,
          password: hashedPass,
        },
        // (axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*"),
        {
          "Content-type": "application/json; charset=iso-8859-1",
          "Access-Control-Allow-Origin": "*",
        }
      )
      .then((res) => {
        if (res.data.status === 200) {
          console.log("res.status", res);

          // localStorage.setItem("jwtToken", res.data.result);
          // setAuthToken(res.data.result);

          // this.props.history.push(`/user`);
          // document.getElementById("login-form").reset();
        }
        // else if (res.data.success === false) {
        //   AuthError("error");
        // }
      });
    // .catch((error) => {});

    // localStorage.setItem("UserToken", "Test_User_Token");
    // this.props.history.push(`/user`);
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
          <p className='login-head text-center pt-4'>
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
                  onChange={this.handleEmailChange}
                  required
                  error={false}
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
