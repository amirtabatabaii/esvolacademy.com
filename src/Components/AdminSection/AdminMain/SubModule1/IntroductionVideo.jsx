import React, { Component } from "react";
import InsertVideo from "../../Utility/InsertVideo";
import UploadVideo from "../../Utility/UploadVideo";
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

class IntroductionVideo extends Component {
  render() {
    return (
      <>
        <FormControl
          variant='outlined'
          style={{ width: "15%" }}
          className='ml-1 mr-1'
        >
          <InputLabel id='forVideoType'>Video Type</InputLabel>
          <Select
            className='bg-light text-danger font-weight-bold'
            labelId='forVideoType'
            // value={x.language}
            label='Type Of Video'
            name='videoType'
            required
            error={false}
            defaultValue={"LinkVideo"}
            onChange={(e) => this.props.handleChange(e)}
          >
            <MenuItem value={"LinkVideo"}>Insert Video Link</MenuItem>
            <MenuItem value={"UploadVideo"}>Upload Video</MenuItem>
          </Select>
        </FormControl>

        <Form className='text-left' onSubmit={this.props.handleSubmitLink}>
          {this.props.videoType === "LinkVideo" && (
            <InsertVideo
              handleChange={this.props.handleChange}
              videoUrlName='url'
              ratioName='completionRatio'
              language='language'
            />
          )}

          {this.props.videoType === "UploadVideo" && (
            <UploadVideo
              adminActiveSubModule={this.props.adminActiveSubModule}
              adminActiveModule={this.props.adminActiveModule}
              ratioName='completionRatio'
              language='language'
              uploaded={this.props.uploaded}
              handleChange={this.props.handleChange}
              handleSubmitUpload={this.props.handleSubmitUpload}
              percentage={this.props.percentage}
              url={this.props.url}
              fileName={this.props.fileName}
            />
          )}

          {this.props.url !== "" && (
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
          )}
        </Form>
      </>
    );
  }
}
export default IntroductionVideo;
