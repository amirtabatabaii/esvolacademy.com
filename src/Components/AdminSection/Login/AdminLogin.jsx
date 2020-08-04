import React, { Component } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
// import { notification, message } from "antd";
// import jwt_decode from "jwt-decode";

import "../Login/AdminLogin.css";
import "../../../css/MyAntd.css";

// const key = "updatable";

// const AuthError = (type) => {
//   notification[type]({
//     message: "Authentication Error!",
//     description:
//       "Your account has not activated Yet by Admin please Contact the company... (Hesabınız Yönetici tarafından aktif olmaya bilir.  lütfen Şirketle iletişime geçin.)",
//     duration: 10,
//   });
// };

class AdminLogin extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       username: "",
  //       password: "",
  //       errors: {
  //         username: null,
  //         password: null,
  //       },
  //       isAuthenticated: "false",
  //     };
  //     this.handleSubmit = this.handleSubmit.bind(this);
  //   }

  handleChange = (event) => {
    // this.setState({ [event.target.name]: event.target.value });
  };

  //   handleSubmit = (event) => {
  //     event.preventDefault();

  //     var crypto = require("crypto");
  //     var shasum = crypto
  //       .createHash("sha1")
  //       .update(this.state.password)
  //       .digest("hex");

  //     const hashedPass = shasum;

  //     axios
  //       .post(ApiLink + "/login", {
  //         username: this.state.username,
  //         password: hashedPass,
  //       })
  //       .then((res) => {
  //         //console.log(res);

  //         if (res.data.success === true) {
  //           //console.log("res.status", res.status);

  //           localStorage.setItem("jwtToken", res.data.result);

  //           const decoded = jwt_decode(res.data.result);

  //           setAuthToken(res.data.result);
  //           if (decoded.role === "USER") {
  //             message.loading({ content: "Processing...", key });
  //             setTimeout(() => {
  //               message.error({
  //                 content: "You do not have permission to access this page...",
  //                 key,
  //                 duration: 6,
  //               });
  //             }, 1000);
  //           }
  //           if (decoded.role === "ADMIN") {
  //             this.props.history.push(`/site/admin-page/main`);
  //           }
  //         } else if (res.data.success === false) {
  //           AuthError("error");
  //         }
  //       })
  //       .catch((error) => {
  //         message.loading({ content: "Processing...", key });
  //         setTimeout(() => {
  //           message.error({
  //             content: "An Error According. Please try again later.",
  //             key,
  //             duration: 6,
  //           });
  //         }, 1000);
  //       });
  //   };

  handleSubmit = (event) => {
    localStorage.setItem("administratorToken", "Test_Administrator_Token");
    this.props.history.push(`/site/admin-page/main`);
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
                  <h1 className='display-4 py-2 text-truncate'>Login</h1>
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
                          name='username'
                          className='form-control'
                          placeholder='Username'
                          //   onChange={this.handleChange}
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
                          //   onChange={this.handleChange}
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
