import React, { Component } from "react";
import InteractiveToolAddItem from "../../Utility/InteractiveToolAddItem";

class InteractiveTool extends Component {
  state = { taskInfo: {} };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      taskInfo: {
        video_url: this.state.video_url,
        video_ratio: this.state.video_ratio,
        video_score: this.state.video_score,
        active_subModule: this.props.adminActiveSubModule,
        active_module: this.props.adminActiveModule,
      },
    });
  };

  render() {
    return (
      <InteractiveToolAddItem
        handleSubmit={this.handleSubmit}
        adminActiveSubModule={this.props.adminActiveSubModule}
        adminActiveModule={this.props.adminActiveModule}
      />
    );
  }
}
export default InteractiveTool;
