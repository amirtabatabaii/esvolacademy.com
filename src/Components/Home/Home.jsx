import React, { Component } from "react";

import Menu from "../LogoMenu/Menu";
import Logo from "../LogoMenu/Logo";

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
