import React, { Component } from "react";

class IntroductionVideo extends Component {
  render() {
    return (
      <div>
        <h3 className='bg-info p-5'>{this.props.adminActiveSubModule}</h3>
      </div>
    );
  }
}
export default IntroductionVideo;
