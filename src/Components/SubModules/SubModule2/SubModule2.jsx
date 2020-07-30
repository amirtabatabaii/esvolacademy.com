import React, { Component } from "react";
import ReactPlayer from "react-player";
import { Row } from "react-bootstrap";
// import {  ProgressBar } from "react-bootstrap";

import "../../Module/ModuleHome.css";
import "../SubModule.css";
import Sub2Button from "./Sub2Button";

class SubModule2 extends Component {
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
    const {
      userActiveModule,
      SubModuleUrl,
      SubModuleRatio,
      onClick,
    } = this.props;

    return (
      <div className={`${userActiveModule}-sub-panel mt-4 app`}>
        <section className='section'>
          <div className='player-wrapper'>
            <ReactPlayer
              url={SubModuleUrl}
              className='react-player'
              width='100%'
              height='100%'
              controls={true}
              onDuration={this.handleDuration}
              onProgress={this.handleProgress}
            />
          </div>
        </section>

        {/* <ProgressBar
          animated
          max={1}
          now={played}
          label={`${played.toFixed(2) * 100}%`}
          variant={`${userActiveModule}-bg-color`}
          className='m-3'
        /> */}

        <Row className='w-100 d-flex justify-content-around'>
          {/* <Sub1Button
            className='m-3'
            size='lg'
            ifCondition={activeSubModule === "sub1"}
            IfAction={true}
            elseAction={false}
            text='Previous'
          /> */}

          <Sub2Button
            // className='m-3'
            className={
              played.toFixed(2) * 100 > SubModuleRatio
                ? "visible m-3"
                : "invisible m-3"
            }
            size='lg'
            // ifCondition={played.toFixed(2) * 100 > SubModuleRatio}
            // IfAction={false}
            // elseAction={true}
            text='Next'
            onClick={onClick}
          />
        </Row>
      </div>
    );
  }
}
export default SubModule2;