import React, { Component } from "react";
import InsertVideo from "../../Utility/InsertVideo";
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

class ExpertVideo extends Component {
  state = {
    video_url1: "",
    video_ratio1: "",
    video_url2: "",
    video_ratio2: "",
    active_subModule: "",
    active_module: "",
    videoNum: 1,
    videoInfo1: [{}],
    videoInfo2: [{}, {}],
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.videoNum === 1)
      this.setState({
        videoInfo1: [
          {
            video_url: this.state.video_url1,
            video_ratio: this.state.video_ratio1,
            active_subModule: this.props.adminActiveSubModule,
            active_module: this.props.adminActiveModule,
          },
        ],
      });

    if (this.state.videoNum === 2)
      this.setState({
        videoInfo2: [
          {
            video_url: this.state.video_url1,
            video_ratio: this.state.video_ratio1,
            active_subModule: this.props.adminActiveSubModule,
            active_module: this.props.adminActiveModule,
          },
          {
            video_url: this.state.video_url2,
            video_ratio: this.state.video_ratio2,
            active_subModule: this.props.adminActiveSubModule,
            active_module: this.props.adminActiveModule,
          },
        ],
      });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <>
        <FormControl
          variant='outlined'
          style={{ width: "15%" }}
          className='ml-1 mr-1'
        >
          <InputLabel id='forVideoNum'>Number Of Video</InputLabel>
          <Select
            className='bg-light text-danger font-weight-bold'
            labelId='forVideoNum'
            // value={x.language}
            label='Number Of Video'
            name='videoNum'
            required
            error={false}
            helperText={"Number Of Video"}
            defaultValue={1}
            onChange={(e) => this.handleChange(e)}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
          </Select>
        </FormControl>

        <Form className='text-left' onSubmit={this.handleSubmit}>
          {this.state.videoNum === 1 && (
            <InsertVideo
              handleChange={this.handleChange}
              videoUrlName='video_url1'
              ratioName='video_ratio1'
            />
          )}

          {this.state.videoNum === 2 && (
            <>
              <InsertVideo
                handleChange={this.handleChange}
                videoUrlName='video_url1'
                ratioName='video_ratio1'
              />

              <InsertVideo
                handleChange={this.handleChange}
                videoUrlName='video_url2'
                ratioName='video_ratio2'
              />
            </>
          )}

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

        {this.state.videoNum === 1 && (
          <div style={{ marginTop: 20 }}>
            <pre>{JSON.stringify(this.state.videoInfo1, null, 2)}</pre>
          </div>
        )}

        {this.state.videoNum === 2 && (
          <div style={{ marginTop: 20 }}>
            <pre>{JSON.stringify(this.state.videoInfo2, null, 2)}</pre>
          </div>
        )}
      </>
    );
  }
}
export default ExpertVideo;
