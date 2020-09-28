import React, { Component } from "react";

class Reading5 extends Component {
  render() {
    return (
      <div className='p-3 text-left'>
        <div className='task-note'>
          <span className='font-weight-bold'>{this.props.header}</span>{" "}
          {this.props.note}
        </div>

        <a target='_blank' href={this.props.Link} rel='noopener noreferrer'>
          <button
            className={`mt-4 ${this.props.userActiveModule}-video-link-btn`}
          >
            {this.props.type === "website" ? "Open Website" : null}
            {this.props.type === "pdf" ? "Read pdf" : null}
          </button>
        </a>
      </div>
    );
  }
}
export default Reading5;
