import React, { Component } from "react";

class ExpertVideo extends Component {
  render() {
    return (
      <div>
        <h3 className='bg-warning p-5'>{this.props.adminActiveSubModule}</h3>
      </div>
    );
  }
}
export default ExpertVideo;
