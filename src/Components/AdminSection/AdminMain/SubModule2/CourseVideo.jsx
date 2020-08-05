import React, { Component } from "react";

class CourseVideo extends Component {
  render() {
    return (
      <div>
        <h3 className='bg-success p-5'>{this.props.adminActiveSubModule}</h3>
      </div>
    );
  }
}
export default CourseVideo;
