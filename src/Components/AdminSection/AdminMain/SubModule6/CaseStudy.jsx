import React, { Component } from "react";
import CaseStudyAddItem from "./CaseStudyAddItem";

class CaseStudy extends Component {
  render() {
    return (
      <CaseStudyAddItem
        adminActiveSubModule={this.props.adminActiveSubModule}
        adminActiveModule={this.props.adminActiveModule}
      />
    );
  }
}

export default CaseStudy;
