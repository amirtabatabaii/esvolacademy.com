import React, { Component } from "react";
import TranslateText from "../../Translate/TranslateText";

class Reading4 extends Component {
  render() {
    return (
      <div className='p-3 text-left'>
        <div className='task-note'>{this.props.note}</div>

        <a target='_blank' href={this.props.Link} rel='noopener noreferrer'>
          <button
            className={`mt-4 ${this.props.userActiveModule}-video-link-btn`}
          >
            {this.props.type === "site" ? (
              <TranslateText txt='SubModule4-OpenSite' />
            ) : null}
            {this.props.type === "pdf" ? (
              <TranslateText txt='SubModule4-ReadPdf' />
            ) : null}
            {this.props.type === "video" ? (
              <TranslateText txt='SubModule4-watchVideo' />
            ) : null}
          </button>
        </a>
      </div>
    );
  }
}
export default Reading4;
