import React, { Component } from "react";

import HomeNavBar from "../Home/HomeNavBar";
import Footer from "../Footer/Footer";

class Register extends Component {
  render() {
    return (
      <div className='main-bg-color'>
        <div id='page-wrap' className='App'>
          <HomeNavBar />
          <h1 className='p-5 m-5'>Register</h1>
        </div>
        <Footer userActiveModule={"Main"} />
      </div>
    );
  }
}
export default Register;
