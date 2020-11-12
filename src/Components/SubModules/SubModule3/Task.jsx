import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import TranslateText from "../../Translate/TranslateText";
import { Divider } from "antd";

class Task extends Component {
  render() {
    return (
      <>
        <div className='p-3 text-left'>
          <div className='task-note font-weight-bold'>{this.props.note}</div>

          {this.props.Link !== " " && (
            <a
              className='text-decoration-none'
              target='_blank'
              href={this.props.Link}
              rel='noopener noreferrer'
            >
              <p
                className={`mt-4 ${this.props.userActiveModule}-video-link-btn`}
              >
                <div className='m-auto p-2'>
                  {this.props.type === "site" ? (
                    <TranslateText txt='SubModule4-OpenSite' />
                  ) : null}
                  {this.props.type === "pdf" ? (
                    <TranslateText txt='SubModule4-ReadPdf' />
                  ) : null}
                  {this.props.type === "video" ? (
                    <TranslateText txt='SubModule4-watchVideo' />
                  ) : null}
                </div>
              </p>

              {/* <button
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
              </button> */}
            </a>
          )}

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
              name={this.props.index + "," + this.props.TextFieldName}
              onChange={this.props.onChange}
            />
            {/* </form> */}
          </div>
        </div>

        {this.props.SubModule3Interactive.length - 1 !== this.props.index && (
          <Divider className='bg-secondary' />
        )}
      </>
    );
  }
}
export default Task;
