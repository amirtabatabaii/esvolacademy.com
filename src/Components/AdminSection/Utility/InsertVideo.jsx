import React, { Component } from "react";

import TextField from "@material-ui/core/TextField";
import { Form, Button } from "react-bootstrap";

class InsertVideo extends Component {
  render() {
    return (
      <Form className='text-left' onSubmit={this.props.handleSubmit}>
        <Form.Group className='mt-2 mb-4'>
          <div className='m-auto'>
            <TextField
              className='w-100'
              variant='outlined'
              label={"Video URL"}
              name='video_url'
              // value='ss'
              onChange={this.props.handleChange}
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
              onChange={this.props.handleChange}
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
              onChange={this.props.handleChange}
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
export default InsertVideo;
