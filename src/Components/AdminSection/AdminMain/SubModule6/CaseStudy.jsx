import React, { Component } from "react";

class CaseStudy extends Component {
  render() {
    return (
      <div>
        <h3 className='bg-secondary p-5'>
          {this.props.adminActiveSubModule}
          {" Component"}
        </h3>
      </div>
    );
  }
}
export default CaseStudy;
