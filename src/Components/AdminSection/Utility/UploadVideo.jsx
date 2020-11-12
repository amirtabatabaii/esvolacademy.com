import React, { Component } from "react";
import CloudDoneIcon from "@material-ui/icons/CloudDone";
import ErrorIcon from "@material-ui/icons/Error";
import { Form } from "react-bootstrap";
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@material-ui/core";

class UploadVideo extends Component {
  render() {
    return (
      <div className='border border-secondary p-3 m-3'>
        <FormControl
          variant='outlined'
          style={{ width: "9%" }}
          className='ml-1 mr-1'
        >
          <InputLabel id='forLanguages'>Language</InputLabel>
          <Select
            className='bg-light text-danger font-weight-bold'
            labelId='forLanguages'
            // value={x.language}
            label='Language'
            name={this.props.language}
            required
            error={false}
            helperText={"Select Language"}
            onChange={this.props.handleChange}
          >
            <MenuItem value={"En"}>En</MenuItem>
            <MenuItem value={"Tr"}>Tr</MenuItem>
          </Select>
        </FormControl>

        <Form.Group className='mt-4'>
          <TextField
            className='w-20 ml-2'
            variant='outlined'
            label={"Complation Ratio"}
            name={this.props.ratioName} //'video_ratio'
            type='number'
            onChange={this.props.handleChange}
            required
            error={false}
            helperText={"Insert Complation Ratio"}
          />

          <div className='text-center mt-4'>
            <input
              type='file'
              className='form-control w-75 m-auto'
              name='file'
              onChange={this.props.handleSubmitUpload}
            />
            <div className='m-auto progress w-75'>
              <div
                className='progress-bar progress-bar-striped bg-success'
                role='progressbar'
                style={{ width: `${this.props.percentage}%` }}
              >
                {this.props.percentage}%
              </div>
            </div>

            {this.props.uploaded ? (
              <>
                fileName : {this.props.fileName}
                <br />
                url : {this.props.url}
                <br />
                <CloudDoneIcon color='primary' fontSize='large' />
              </>
            ) : (
              <ErrorIcon color='error' fontSize='large' />
            )}
          </div>
        </Form.Group>
      </div>
    );
  }
}

export default UploadVideo;
