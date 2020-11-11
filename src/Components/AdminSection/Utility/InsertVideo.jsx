import React, { Component } from "react";

import { Form } from "react-bootstrap";
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";

class InsertVideo extends Component {
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
            name='language'
            required
            error={false}
            helperText={"Select Language"}
            // onChange={(e) => handleInputChange(e, i)}
          >
            <MenuItem value={"En"}>En</MenuItem>
            <MenuItem value={"Tr"}>Tr</MenuItem>
          </Select>
        </FormControl>

        <Form.Group className='mt-4'>
          <TextField
            className='w-75'
            variant='outlined'
            label={"Video URL"}
            name={this.props.videoUrlName} //'video_url'
            onChange={this.props.handleChange}
            required
            error={false}
            helperText={"Insert Video URL"}
          />

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
        </Form.Group>
      </div>
    );
  }
}
export default InsertVideo;
