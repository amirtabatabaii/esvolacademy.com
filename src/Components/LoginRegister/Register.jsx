import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import HomeNavBar from "../Home/HomeNavBar";
import Footer from "../Footer/Footer";
import TranslateText from "../Translate/TranslateText";
import { Form } from "react-bootstrap";
import { ApiUrlMain2 } from "../Utility/ApiUrl";
import axios from "axios";

import { openNotificationWithIcon } from "../AdminSection/Utility/Error";

import "./loginRegister.css";

class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    EmailError: null,
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
        //console.log(shasum);
        axios
          .post(
            ApiUrlMain2 + "/users",
            {
              firstName: this.state.firstName,
              lastName: this.state.lastName,
              email: this.state.email,
              password: hashedPass,
            },
            // (axios.defaults.headers.common[
            //   "Authorization"
            // ] = this.state.Authorization),
            { "Content-type": "application/json; charset=iso-8859-1" }
          )
          .then((Response) => {
            // console.log("Success res ========>", Response);
            if (Response.status === 200) {
              openNotificationWithIcon("success", "Register", "Register", 10);
              this.setState({ EmailError: null });
              document.getElementById("InsertForm").reset();
            } else {
              openNotificationWithIcon("error", "Error!", "Error!", 3);
            }
          });
      } else {
        openNotificationWithIcon(
          "error",
          "Password Error",
          "Password Has Error",
          3
        );
      }
    } else {
      openNotificationWithIcon("error", "Email Error", "Email Has Error", 3);
    }
  };

  render() {
    return (
      <div className='main-bg-color'>
        <div id='page-wrap' className='App'>
          <HomeNavBar />
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
                  // variant='outlined'
                  label={<TranslateText txt='Register-name' />}
                  name='firstName'
                  onChange={this.handleRegister}
                  required
                  error={false}
                  helperText={<TranslateText txt='Register-name-HelperText' />}
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
                  helperText={<TranslateText txt='Register-email-HelperText' />}
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

            <div className='m-auto'>
              <button className='register-Btn' type='submit'>
                <TranslateText txt='Register-BtnText' />
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
export default Register;
