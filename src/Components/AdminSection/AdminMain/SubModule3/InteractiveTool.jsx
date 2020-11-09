import React, { Component } from "react";
import InteractiveToolAddItem from "./InteractiveToolAddItem";

class InteractiveTool extends Component {
  render() {
    return (
      <InteractiveToolAddItem
        adminActiveSubModule={this.props.adminActiveSubModule}
        adminActiveModule={this.props.adminActiveModule}
      />
    );
  }
}
export default InteractiveTool;
