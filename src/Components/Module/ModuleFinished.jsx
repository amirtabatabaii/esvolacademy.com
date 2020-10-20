import React, { Component } from "react";
import Footer from "../Footer/Footer";
import ModuleNavBar from "./ModuleNavBar";

class ModuleFinished extends Component {
  render() {
    const { userActiveModule } = this.props;

    return (
      <div className='main-bg-color'>
        <div id='page-wrap' className='App'>
          <ModuleNavBar userActiveModule='Module1' />
          <h1 className='m-5 p-5 text-center'>Download Certificate!</h1>
          <Footer userActiveModule={"Main"} />
        </div>
      </div>
    );
  }
}
export default ModuleFinished;
