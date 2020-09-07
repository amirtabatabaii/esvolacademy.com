import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { Form, Button } from "react-bootstrap";

class IntroductionVideo extends Component {
  state = {
    video_url: "",
    video_ratio: "",
    video_score: "",
    active_subModule: "",
    active_module: "",
  };

  // https://www.cluemediator.com/add-or-remove-input-fields-dynamically-with-reactjs

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
      <Form className='text-left' onSubmit={this.handleSubmit}>
        <Form.Group className='mt-2 mb-4'>
          <div className='m-auto'>
            <TextField
              className='w-100'
              variant='outlined'
              label={"Video URL"}
              name='video_url'
              // value='ss'
              onChange={this.handleChange}
              required
              error={false}
              helperText={"Insert Video URL"}
            />
          </div>
        </Form.Group>

        <Form.Group className='mt-2 mb-4'>
          <div className='m-auto'>
            <TextField
              className='w-20'
              variant='outlined'
              label={"Complation Ratio"}
              name='video_ratio'
              type='number'
              onChange={this.handleChange}
              required
              error={false}
              helperText={"Insert Complation Ratio"}
            />
          </div>
        </Form.Group>

        <Form.Group className='mt-2 mb-4'>
          <div className='m-auto'>
            <TextField
              className='w-20'
              variant='outlined'
              label={"Video Score"}
              name='video_score'
              type='number'
              onChange={this.handleChange}
              required
              error={false}
              helperText={"Insert Video Score"}
            />
          </div>
        </Form.Group>

        <Button className='mt-4 w-25' type='submit'>
          <h3>Save</h3>
        </Button>
      </Form>
    );
  }
}
export default IntroductionVideo;
