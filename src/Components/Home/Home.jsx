import React, { Component } from "react";

import Menu from "../Menu/Menu";
import Logo from "../Menu/Logo";

class Home extends Component {
  render() {
    return (
      <div className='height main-bg-color'>
        <Logo />
        <Menu />
      </div>
    );
  }
}

export default Home;
