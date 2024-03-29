import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import { Link, withRouter } from "react-router-dom";
import { notification, Modal, message } from "antd";
import axios from "axios";
import { ApiUrlMain2 } from "../Utility/ApiUrl";

const key = "updatable";

const CheckMail = (type) => {
  notification[type]({
    message: "Check your Email! ",
    description: "Check your Email, password changing link sent to your email.",
    duration: 10,
  });
};

const ErrRegister = (type) => {
  notification[type]({
    message: "Email Error! ",
    description: "Email does not exist...",
    duration: 10,
  });
};

const ErrSend = (type) => {
  notification[type]({
    message: "Email Error! ",
    description: "There is no user with this email.",
    duration: 10,
  });
};

const Err = (type) => {
  notification[type]({
    message: "Error! ",
    description: "An Error occurred, Please try again later...",
    duration: 10,
  });
};

export class test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      EmailError2: "",
      email2: "",
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleEmail2Change = (e) => {
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
        //console.log("has error");
        this.setState({ EmailError2: true });
      } else {
        //console.log("no error");
        this.setState({ EmailError2: false, email2: e.target.value });
      }
    }
  };

  handleSubmitEmail = (event) => {
    event.preventDefault();

    axios
      .get(ApiUrlMain2 + `/users/change-password/${this.state.email2}`)
      .then((res) => {
        if (res.status === 200) {
          CheckMail("success");
          document.getElementById("reset-form").reset();
        }
      })
      .catch((err) => {
        if (err.response.status === 404) {
          ErrSend("error");
        }
      });
  };

  render() {
    return (
      <div className='text-center'>
        <button
          className='forgot-Btn'
          type='submit'
          to='#'
          onClick={this.showModal}
        >
          {" "}
          Forgot Password?{" "}
        </button>

        <Modal
          visible={this.state.visible}
          title='Forgot Password?'
          // onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[]}
        >
          <Form
            className='text-center'
            onSubmit={this.handleSubmitEmail}
            id='reset-form'
          >
            <p>Enter your Email for resetting password...</p>
            <Form.Group>
              <div className='m-auto'>
                <TextField
                  className='register-field'
                  variant='outlined'
                  label={this.props.LoginEmailTitle}
                  name='email2'
                  onChange={this.handleEmail2Change}
                  required
                  error={this.state.EmailError2 === true ? true : false}
                  helperText={
                    this.state.EmailError2 === true
                      ? " Email is not valid..."
                      : ""
                  }
                />
              </div>
            </Form.Group>

            {!this.state.EmailError2 && this.state.email2 !== "" && (
              <button
                key='submit'
                className='forgot-Btn'
                type='submit'
                loading={this.state.loading}
                //onClick={this.handleOk}
              >
                Reset Password
              </button>
            )}
          </Form>
        </Modal>
      </div>
    );
  }
}

export default test;
