import React, { Component } from "react";
import { Link } from "react-router-dom";
import { notification, message } from "antd";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { ApiUrlMain2 } from "../../Utility/ApiUrl";

import "../Login/ViewerLogin.css";
import "../../../css/MyAntd.css";

const key = "updatable";

class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {
        username: null,
        password: null,
      },
      isAuthenticated: "false",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

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
        //console.log(res);
        if (res.status === 200) {
          localStorage.setItem("viewerInfo", res.data);
          const decoded = jwt_decode(res.data);
          // console.log(decoded.Role);
          if (decoded.Role === "ADMIN") {
            this.props.history.push(`/site/viewer-page/main`);
          } else {
            message.loading({ content: "Processing...", key });
            setTimeout(() => {
              message.error({
                content: "You do not have permission to access this page...",
                key,
                duration: 6,
              });
            }, 1000);
          }
        }
      })
      .catch((error) => {
        message.loading({ content: "Processing...", key });
        setTimeout(() => {
          message.error({
            content: "An Error Occurred...",
            key,
            duration: 6,
          });
        }, 1000);
      });
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <section id='cover' className='min-vh-100'>
          <div id='cover-caption'>
            <div className='container'>
              <div className='row text-white'>
                <div className='col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4'>
                  <h1 className='display-4 py-2 text-truncate'>Viewer Login</h1>
                  <div className='px-2'>
                    <form
                      onSubmit={this.handleSubmit}
                      id='login-form'
                      className='form justify-content-center'
                    >
                      <div className='form-group'>
                        <label className='sr-only'>Username</label>
                        <input
                          type='text'
                          name='email'
                          className='form-control'
                          placeholder='Username'
                          onChange={this.handleChange}
                          required
                        />
                      </div>
                      <div className='form-group'>
                        <label className='sr-only'>Password</label>
                        <input
                          type='password'
                          className='form-control'
                          name='password'
                          placeholder='Password'
                          onChange={this.handleChange}
                          required
                        />
                      </div>
                      {/* Delete Link after API */}
                      {/* <Link to='/site/admin-page/main'> */}
                      <button type='submit' className='btn btn-primary btn-lg'>
                        Login
                      </button>
                      {/* </Link> */}
                      <Link to='/'>
                        <button
                          type='submit'
                          className='ml-4 btn btn-primary btn-lg'
                        >
                          Website
                        </button>
                      </Link>
                    </form>

                    {/* {this.state.errors.username == null ? (
                      ""
                    ) : (
                      <div className='mt-3'>
                        <span className='p-1 bg-danger rounded'>
                          {this.state.errors.username}
                        </span>
                      </div>
                    )} */}

                    {/* {this.state.errors.password == null ? (
                      ""
                    ) : (
                      <div className='mt-3'>
                        <span className='p-1 bg-danger rounded'>
                          {this.state.errors.password}
                        </span>
                      </div>
                    )} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default AdminLogin;
