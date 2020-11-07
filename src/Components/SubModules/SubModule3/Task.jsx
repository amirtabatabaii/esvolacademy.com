import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

class Task extends Component {
  render() {
    return (
      <div className='p-3 text-left'>
        <div className='task-note font-weight-bold'>{this.props.note}</div>

        <a target='_blank' href={this.props.Link} rel='noopener noreferrer'>
          <button
            className={`mt-4 ${this.props.userActiveModule}-video-link-btn`}
          >
            {this.props.type === "video" ? "Watch Video" : null}
            {this.props.type === "pdf" ? "Read pdf" : null}
          </button>
        </a>

        <div className='mt-4 task-note'>{this.props.question}</div>

        <div
          className={`mt-4 ${this.props.userActiveModule}-answer-textbox text-center`}
        >
          {/* <form noValidate autoComplete='off'> */}
          <TextField
            id='standard-multiline-static'
            variant='standard'
            label='Your Answer '
            required
            multiline
            rows={6}
            style={{ width: "97%" }}
            name={this.props.TextFieldName}
            onChange={this.props.onChange}
          />
          {/* </form> */}
        </div>
      </div>
    );
  }
}
export default Task;
