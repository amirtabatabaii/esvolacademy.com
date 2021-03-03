import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import HomeNavBar from "../Home/HomeNavBar";
import Footer from "../Footer/Footer";
import TranslateText from "../Translate/TranslateText";
import { Col, Form, Row } from "react-bootstrap";
import { ApiUrlMain2 } from "../Utility/ApiUrl";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { openNotificationWithIcon } from "../AdminSection/Utility/Error";
import jwt_decode from "jwt-decode";

import "./loginRegister.css";
import { decode } from "punycode";

class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    EmailError: null,
    socialRegister: false,
    captchaError: null,
  };

  CaptchaOnChange = (value) => {
    // console.log("Captcha value:", value);
    if (value === null) {
      this.setState({ captchaError: true });
    } else {
      this.setState({ captchaError: false });
    }
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

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

  handleRegister = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.EmailError === false) {
      if (this.state.captchaError === false) {
        if (this.state.password === this.state.confirmPassword) {
          let pass = this.state.password;
          // let reg = /^[a-z0-9A-Z]\w{5,30}$/;
          let reg = /^[a-z0-9A-Z\s\S\w]{5,30}$/;
          let test = reg.test(pass);
          if (test) {
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
                  .post(
                    this.state.socialRegister
                      ? ApiUrlMain2 + "/users/signup"
                      : ApiUrlMain2 + "/users",
                    {
                      firstName: this.state.firstName,
                      lastName: this.state.lastName,
                      email: this.state.email,
                      password: this.state.password,
                    },

                    (axios.defaults.headers.common[
                      "Authorization"
                    ] = localStorage.getItem("UserInfo")),
                    (axios.defaults.headers.common[
                      "Access-Control-Allow-Origin"
                    ] = "*"),
                    {
                      "Content-Type": "application/json",
                    }
                  )
                  .then((res) => {
                    // console.log("res =====> ", res);
                    if (res.status === 200) {
                      openNotificationWithIcon(
                        "success",
                        <TranslateText txt='Register1' />,
                        <TranslateText txt='Register2' />,
                        3
                      );
                      setTimeout(() => {
                        this.props.history.push("/login");
                      }, 1000);
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                    openNotificationWithIcon(
                      "error",
                      <TranslateText txt='RegisterError1' />,
                      <TranslateText txt='RegisterError1' />,
                      3
                    );
                  });
              }
            );
          } else {
            openNotificationWithIcon(
              "error",
              <TranslateText txt='User-PassError1' />,
              <TranslateText txt='User-PassError2' />,
              3
            );
          }
        } else {
          openNotificationWithIcon(
            "error",
            <TranslateText txt='User-PassError3' />,
            <TranslateText txt='User-PassError4' />,
            3
          );
        }
      } else {
        openNotificationWithIcon(
          "error",
          <TranslateText txt='captchaError' />,
          <TranslateText txt='captchaError' />,
          3
        );
      }
    } else {
      openNotificationWithIcon(
        "error",
        <TranslateText txt='RegisterEmailError1' />,
        <TranslateText txt='RegisterEmailError1' />,
        3
      );
    }
  };

  responseGoogle = (response) => {
    // console.log(response);
    const decoded = jwt_decode(response.tokenId);
    //  console.log(decoded);
    this.setState({
      firstName: decoded.given_name,
      lastName: decoded.family_name,
      email: decoded.email,
      socialRegister: true,
    });
    // this.props.history.push("/user/setpassword");
  };

  responseFacebook = (response) => {
    // console.log(response);
    this.setState({
      firstName: response.name.split(" ")[0],
      lastName: response.name.split(" ")[1],
      email: response.email,
      socialRegister: true,
    });
    // this.props.history.push("/user/setpassword");
  };

  render() {
    return (
      <div className='main-bg-color'>
        <HomeNavBar />

        {this.state.socialRegister === false && (
          <div id='page-wrap' className='App'>
            <p className='register-head text-center pt-4'>
              <TranslateText txt='Register-text' />
            </p>

            <div className='text-center p-4'>
              <p>
                <TranslateText txt='Register-note' />
              </p>
              <Row className='w-lg-50 d-inline-flex'>
                <Col lg={6} md={12} sm={12}>
                  <GoogleLogin
                    clientId='191838383366-2ruv1ocvbd7a81sbq7sr3ggd0jnq496n.apps.googleusercontent.com'
                    render={(renderProps) => (
                      <button
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        className='google-Btn'
                      >
                        <FontAwesomeIcon
                          className='m-2'
                          icon={faGoogle}
                          style={{ color: "#db4437" }}
                          transform='down-2 grow-8'
                          fixedWidth
                        />
                        oogle
                      </button>
                    )}
                    // buttonText='Login with Google'
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={"single_host_origin"}
                    // className='my-google-button-class'
                  />
                </Col>
                <Col lg={6} md={12} sm={12}>
                  <FacebookLogin
                    textButton={"acebook"}
                    appId='388024745493898'
                    autoLoad={false}
                    fields='name,email,picture'
                    // onClick={this.componentClicked}
                    callback={this.responseFacebook}
                    cssClass='facebook-Btn'
                    // icon='fa-facebook'
                    icon={
                      <FontAwesomeIcon
                        className='mb-2'
                        icon={faFacebookF}
                        style={{ color: "#4267b2" }}
                        transform='down-2 grow-8'
                        fixedWidth
                      />
                    }
                  />
                </Col>
              </Row>
            </div>

            <div class='my-divider'>
              <span></span>
              <TranslateText txt='Login-OR' />
              <span></span>
            </div>

            <Form
              className='text-center'
              id='InsertForm'
              onSubmit={this.handleSubmit}
            >
              <Form.Group className='mt-2 mb-2'>
                <div className='m-auto'>
                  <TextField
                    className='register-textField'
                    // variant='outlined'
                    label={<TranslateText txt='Register-name' />}
                    name='firstName'
                    onChange={this.handleRegister}
                    required
                    error={false}
                    helperText={
                      <TranslateText txt='Register-name-HelperText' />
                    }
                  />
                </div>
              </Form.Group>

              <Form.Group className='mt-2 mb-2'>
                <div className='m-auto'>
                  <TextField
                    className='register-textField'
                    // variant='outlined'
                    label={<TranslateText txt='Register-surname' />}
                    name='lastName'
                    onChange={this.handleRegister}
                    required
                    error={false}
                    helperText={
                      <TranslateText txt='Register-surname-HelperText' />
                    }
                  />
                </div>
              </Form.Group>

              <Form.Group className='mt-2 mb-2'>
                <div className='m-auto'>
                  <TextField
                    className='register-textField'
                    // variant='outlined'
                    label={<TranslateText txt='Register-email' />}
                    name='email'
                    onChange={this.handleEmailChange}
                    required
                    error={this.state.EmailError}
                    helperText={
                      <TranslateText txt='Register-email-HelperText' />
                    }
                  />
                </div>
              </Form.Group>

              <Form.Group className='mt-2 mb-2'>
                <div className='m-auto'>
                  <TextField
                    className='register-textField'
                    // variant='outlined'
                    label={<TranslateText txt='Register-password' />}
                    name='password'
                    onChange={this.handleRegister}
                    required
                    type='password'
                    error={false}
                    helperText={
                      <TranslateText txt='Register-password-HelperText' />
                    }
                  />
                </div>
              </Form.Group>

              <Form.Group className='mt-2 mb-2'>
                <div className='m-auto'>
                  <TextField
                    className='register-textField'
                    // variant='outlined'
                    label={<TranslateText txt='Register-ConfirmPassword' />}
                    name='confirmPassword'
                    onChange={this.handleRegister}
                    required
                    type='password'
                    error={false}
                    helperText={
                      <TranslateText txt='Register-password-HelperText' />
                    }
                  />
                </div>
              </Form.Group>

              <div className='d-flex justify-content-center pt-4'>
                <ReCAPTCHA
                  sitekey='6Ldi-m8aAAAAAK1qlOdb7OHXdbNZuFuey456nTPA'
                  onChange={this.CaptchaOnChange}
                />
              </div>

              <div className='m-auto'>
                <button className='register-Btn' type='submit'>
                  <TranslateText txt='Register-BtnText' />
                </button>
              </div>
            </Form>
          </div>
        )}

        {this.state.socialRegister === true && (
          <div id='page-wrap' className='App'>
            <p className='register-head text-center pt-4'>
              <TranslateText txt='Register-text' />
            </p>

            <Form
              className='text-center'
              id='InsertForm'
              onSubmit={this.handleSubmit}
            >
              <Form.Group className='mt-2 mb-2'>
                <div className='m-auto'>
                  <TextField
                    className='register-textField'
                    label={<TranslateText txt='Register-name' />}
                    disabled
                    defaultValue={this.state.firstName}
                  />
                </div>
              </Form.Group>
              <Form.Group className='mt-2 mb-2'>
                <div className='m-auto'>
                  <TextField
                    className='register-textField'
                    label={<TranslateText txt='Register-surname' />}
                    name='lastName'
                    disabled
                    defaultValue={this.state.lastName}
                  />
                </div>
              </Form.Group>
              <Form.Group className='mt-2 mb-2'>
                <div className='m-auto'>
                  <TextField
                    className='register-textField'
                    label={<TranslateText txt='Register-email' />}
                    name='email'
                    defaultValue={this.state.email}
                    disabled
                  />
                </div>
              </Form.Group>
              <Form.Group className='mt-2 mb-2'>
                <div className='m-auto'>
                  <TextField
                    className='register-textField'
                    // variant='outlined'
                    label={<TranslateText txt='Register-password' />}
                    name='password'
                    onChange={this.handleRegister}
                    required
                    type='password'
                    error={false}
                    helperText={
                      <TranslateText txt='Register-password-HelperText' />
                    }
                  />
                </div>
              </Form.Group>

              <Form.Group className='mt-2 mb-2'>
                <div className='m-auto'>
                  <TextField
                    className='register-textField'
                    // variant='outlined'
                    label={<TranslateText txt='Register-password' />}
                    name='confirmPassword'
                    onChange={this.handleRegister}
                    required
                    type='password'
                    error={false}
                    helperText={
                      <TranslateText txt='Register-password-HelperText' />
                    }
                  />
                </div>
              </Form.Group>
              <div className='m-auto'>
                <button className='register-Btn' type='submit'>
                  <TranslateText txt='Register-BtnText' />
                </button>
              </div>
            </Form>
          </div>
        )}

        <div style={{ marginTop: "200px" }}>
          <Footer userActiveModule={"Main"} />
        </div>
      </div>
    );
  }
}
export default Register;
