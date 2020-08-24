import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

class Reading extends Component {
  render() {
    return (
      <div className='p-3 text-left'>
        <div className='task-note'>{this.props.note}</div>

        <a target='_blank' href={this.props.Link}>
          <button className='mt-4 video-link-btn'>
            {this.props.type === "website" ? "Open Website" : null}
            {this.props.type === "pdf" ? "Read pdf" : null}
          </button>
        </a>
      </div>
    );
  }
}
export default Reading;
