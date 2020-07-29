import React, { Component } from "react";
import ReactPlayer from "react-player";
import { Row, ProgressBar } from "react-bootstrap";

import "../../Module/ModuleHome.css";
import "../SubModule.css";
import Sub1Button from "./Sub1Button";

class SubModule1 extends Component {
  state = {
    played: 0,
    duration: 0,
  };

  handleDuration = (duration) => {
    this.setState({ duration });
  };

  handleProgress = (state) => {
    if (!this.state.seeking) {
      this.setState(state);
    }
  };

  render() {
    const { played } = this.state;

    return (
      <div className={`${this.props.activeModule}-sub-panel mt-4 app`}>
        <section className='section'>
          <div className='player-wrapper'>
            <ReactPlayer
              url='https://www.youtube.com/watch?v=4OkiH2yD-eQ'
              // url='https://www.kastanjetextile.com/video/kastanje-en.mp4'
              className='react-player'
              width='100%'
              height='100%'
              controls='true'
              onDuration={this.handleDuration}
              onProgress={this.handleProgress}
            />
          </div>
        </section>

        <ProgressBar
          animated
          max={1}
          now={played}
          label={`${played.toFixed(2) * 100}%`}
          variant={`${this.props.activeModule}-bg-color`}
          className='m-3'
        />

        <Row className='w-100 d-flex justify-content-around'>
          <Sub1Button
            className='m-3'
            size='lg'
            ifCondition={this.props.activeSubModule === "sub1"}
            IfAction={true}
            elseAction={false}
            text='Previous'
          />

          <Sub1Button
            className='m-3'
            size='lg'
            ifCondition={
              played.toFixed(2) * 100 > this.props.subModuleComplationRatio
            }
            IfAction={false}
            elseAction={true}
            text='Next'
          />
        </Row>
      </div>
    );
  }
}
export default SubModule1;
