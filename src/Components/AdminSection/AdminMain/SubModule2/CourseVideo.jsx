import React, { Component } from "react";
import InsertVideo from "../../Utility/InsertVideo";

class CourseVideo extends Component {
  state = {
    video_url: "",
    video_ratio: "",
    video_score: "",
    active_subModule: "",
    active_module: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const videoInfo = {
      video_url: this.state.video_url,
      video_ratio: this.state.video_ratio,
      video_score: this.state.video_score,
      active_subModule: this.props.adminActiveSubModule,
      active_module: this.props.adminActiveModule,
    };

    console.log(videoInfo);
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <InsertVideo
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}
export default CourseVideo;
