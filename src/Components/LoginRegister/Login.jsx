import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

import HomeNavBar from "../Home/HomeNavBar";
import Footer from "../Footer/Footer";

import "./loginRegister.css";
import TranslateText from "../Translate/TranslateText";
import { Form } from "react-bootstrap";

class Login extends Component {
  handleSubmit = (event) => {
    localStorage.setItem("UserToken", "Test_User_Token");
    this.props.history.push(`/user`);
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

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
            id='InsertForm'
            onSubmit={this.handleSubmit}
          >
            <Form.Group className='mt-2 mb-2'>
              <div className='m-auto'>
                <TextField
                  className='login-textField'
                  // variant='outlined'
                  label={<TranslateText txt='Login-email' />}
                  name='email'
                  //   onChange={this.handleEmailChange}
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
                  //   onChange={this.handleEmailChange}
                  required
                  error={false}
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
