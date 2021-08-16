import React, { Component } from "react";
import { Form, Button, Row, Col, Image } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import queryString from "query-string";
import jwt_decode from "jwt-decode";
import { notification, message } from "antd";
import { ApiUrlMain2 } from "../Utility/ApiUrl";

const key = "updatable";

const openNotificationWithIconSucc = (type) => {
  notification[type]({
    message: "Your password changed successfully.",
    duration: 20,
  });
};

const openNotificationWithIconErr = (type) => {
  notification[type]({
    message: "Password Error!",
    description:
      "Password is not Strong enough. it should contain digit and uppercase and lowercase characters.\n(Şifre yeterince güçlü değil. En az bir rakam, bir büyük harf ve bir küçük harf içermelidir.)",
    duration: 20,
  });
};

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      PassError: "",
      tokenwithBa: "",
      password: "",
      confirmPassword: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const params = queryString.parse(this.props.location.search);
    localStorage.setItem("ResetPasswordToken", params.token);
    // setAuthToken(params.token);
    const decoded = jwt_decode(localStorage.getItem("ResetPasswordToken"));
    this.setState({ id: decoded.id });
    // console.log(decoded.id);
    // console.log(decoded);
    this.setState({ tokenwithBa: "Bearer " + params.token });
  }

  async handleSubmit(event) {
    event.preventDefault();

    if (this.state.password !== this.state.confirmPassword)
      this.setState({ PassError: true });

    if (this.state.password === this.state.confirmPassword) {
      let pass = this.state.password;
      let reg = /^[A-Z0-9a-z]\w{8,15}$/;
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

        await axios
          .put(
            ApiUrlMain2 + `/users/savepassword/${this.state.id}`,
            {
              password: hashedPass,
              confirmationPassword: hashedPass,
            },
            (axios.defaults.headers.common[
              "Authorization"
            ] = this.state.tokenwithBa),
            (axios.defaults.headers.common["Content-Type"] =
              "application/json; charset=utf-8"),
            (axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*")
          )
          .then((res) => {
            // console.log("Success res ========>", res);

            if (res.data.success === true) {
              openNotificationWithIconSucc("success");
              // this.props.history.push("/forget-password");
            } else {
              this.setState({ SiteError: res.data.errors });
              message.loading({ content: "Processing...", key });
              setTimeout(() => {
                message.error({
                  content: this.state.SiteError,
                  key,
                  duration: 6,
                });
              }, 1000);
            }
          });
        this.setState({ PassError: false });
        // document.getElementById("InsertForm").reset();
        this.props.history.push("/");
      } else {
        openNotificationWithIconErr("error");
      }
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <>
        <div className='m-auto p-5 m-5'>
          {/* <Row className='w-100 text-center p-5'>
            <Image src={logo} fluid width='40%' className='m-auto' />
          </Row> */}
          <Row className='w-100 m-auto'>
            <Col lg={12} md={12} sm={12} xs={12} className='py-5'>
              <Form
                className='text-center'
                onSubmit={this.handleSubmit}
                id='login-form'
              >
                <Form.Group>
                  <div className='m-auto'>
                    <TextField
                      className='register-field'
                      variant='outlined'
                      label='Password'
                      name='password'
                      type='password'
                      onChange={this.handleChange}
                      required
                      error={this.state.PassError === true ? true : false}
                      helperText={
                        this.state.PassError === true
                          ? "Passwords are not same..."
                          : ""
                      }
                    />
                  </div>
                </Form.Group>

                <Form.Group className='mt-4 mb-4'>
                  <div className='m-auto'>
                    <TextField
                      className='register-field'
                      variant='outlined'
                      label='Confirm Password'
                      name='confirmPassword'
                      onChange={this.handleChange}
                      required
                      type='password'
                      error={this.state.PassError === true ? true : false}
                      helperText={
                        this.state.PassError === true
                          ? "Passwords are not same..."
                          : ""
                      }
                    />
                  </div>
                </Form.Group>

                <div className='mt-5'>
                  <button type='submit' className='forgot-Btn'>
                    Save Password
                  </button>
                </div>
              </Form>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
export default ResetPassword;
