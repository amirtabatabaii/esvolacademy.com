import React, { Component } from "react";
import ReadingAddItem from "../../Utility/ReadingAddItem";

class Reading extends Component {
  render() {
    return (
      <ReadingAddItem
        adminActiveSubModule={this.props.adminActiveSubModule}
        adminActiveModule={this.props.adminActiveModule}
      />
    );
  }
}
export default Reading;
