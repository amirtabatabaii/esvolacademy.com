import React, { Component } from "react";
import NavBar from "../Home/NavBar";
// import ReactPageScroller from "react-page-scroller";

class ModuleHome extends Component {
  render() {
    return (
      <div className='Module1-bg-color height'>
        <NavBar
          bgColor='Module1-bg-color'
          MenuItem1='MenuItem-Hakkimizda'
          MenuItem2='MenuItem-GirisYap'
          MenuItem3='MenuItem-Iletisim'
          MenuItem4='MenuItem-Esvol'
        />
        <div style={{ paddingTop: "130px" }}>
          <h1 className='m-5 p-5 text-center'>Module1</h1>
        </div>
      </div>
    );
  }
}

export default ModuleHome;
