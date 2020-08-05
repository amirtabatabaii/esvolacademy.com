import React, { Component } from "react";

class Reading extends Component {
  render() {
    return (
      <div>
        <h3 className='bg-primary p-5'>{this.props.adminActiveSubModule}</h3>
      </div>
    );
  }
}
export default Reading;
