import React, { Component } from "react";

class InteractiveTool extends Component {
  render() {
    return (
      <div>
        <h3 className='bg-danger p-5'>
          {this.props.adminActiveSubModule}
          {" Component"}
        </h3>
      </div>
    );
  }
}
export default InteractiveTool;
