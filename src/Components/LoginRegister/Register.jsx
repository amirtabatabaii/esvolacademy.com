import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

import HomeNavBar from "../Home/HomeNavBar";
import Footer from "../Footer/Footer";

import TranslateText from "../Translate/TranslateText";
import { Form } from "react-bootstrap";

// import "./register.css";

class Register extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className='main-bg-color'>
        <div id='page-wrap' className='App'>
          <HomeNavBar />
          <p className='register-head text-center pt-5'>
            <TranslateText txt='Register-text' />
          </p>

          <Form
            className='text-center mt-5 mb-5'
            id='InsertForm'
            // onSubmit={this.handleSubmit}
          >
            <Form.Group className='mt-3 mb-3'>
              <div className='m-auto'>
                <TextField
                  className='register-textField'
                  // variant='outlined'
                  label={<TranslateText txt='Register-nameSurname' />}
                  name='name'
                  //   onChange={this.handleEmailChange}
                  required
                  error={false}
                  helperText={
                    <TranslateText txt='Register-nameSurname-HelperText' />
                  }
                />
              </div>
            </Form.Group>

            <Form.Group className='mt-3 mb-3'>
              <div className='m-auto'>
                <TextField
                  className='register-textField'
                  // variant='outlined'
                  label={<TranslateText txt='Register-email' />}
                  name='email'
                  //   onChange={this.handleEmailChange}
                  required
                  error={false}
                  helperText={<TranslateText txt='Register-email-HelperText' />}
                />
              </div>
            </Form.Group>

            <Form.Group className='mt-3 mb-3'>
              <div className='m-auto'>
                <TextField
                  className='register-textField'
                  // variant='outlined'
                  label={<TranslateText txt='Register-password' />}
                  name='password'
                  //   onChange={this.handleEmailChange}
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

        <Footer userActiveModule={"Main"} />
      </div>
    );
  }
}
export default Register;
