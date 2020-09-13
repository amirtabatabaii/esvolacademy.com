import React, { Component } from "react";
import InsertVideo from "../../Utility/InsertVideo";

class IntroductionVideo extends Component {
  state = {
    video_url: "",
    video_ratio: "",
    video_score: "",
    active_subModule: "",
    active_module: "",
    videoInfo: {},
  };

  // https://www.cluemediator.com/add-or-remove-input-fields-dynamically-with-reactjs

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      videoInfo: {
        video_url: this.state.video_url,
        video_ratio: this.state.video_ratio,
        video_score: this.state.video_score,
        active_subModule: this.props.adminActiveSubModule,
        active_module: this.props.adminActiveModule,
      },
    });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <>
        <InsertVideo
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <div style={{ marginTop: 20 }}>
          {JSON.stringify(this.state.videoInfo)}
        </div>
      </>
    );
  }
}
export default IntroductionVideo;
