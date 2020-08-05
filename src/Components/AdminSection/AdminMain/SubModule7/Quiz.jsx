import React, { Component } from "react";

class Quiz extends Component {
  render() {
    return (
      <div>
        <h3 className='text-light bg-dark p-5'>
          {this.props.adminActiveSubModule}
        </h3>
      </div>
    );
  }
}
export default Quiz;
