import React, { Component } from "react";
import InsertVideo from "../../Utility/InsertVideo";
import { Form } from "react-bootstrap";
import { Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";

class IntroductionVideo extends Component {
  state = {
    video_url: "",
    video_ratio: "",
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
        <Form className='text-left' onSubmit={this.handleSubmit}>
          <InsertVideo
            handleChange={this.handleChange}
            videoUrlName='video_url'
            ratioName='video_ratio'
          />

          <div className='m-5'>
            <Button
              variant='contained'
              color='primary'
              type='submit'
              className='p-3 w-100'
              size='large'
              startIcon={<SaveIcon />}
            >
              Save Video
            </Button>
          </div>
        </Form>

        <div style={{ marginTop: 20 }}>
          <pre>{JSON.stringify(this.state.videoInfo, null, 2)}</pre>
        </div>
      </>
    );
  }
}
export default IntroductionVideo;
