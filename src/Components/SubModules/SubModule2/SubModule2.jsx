import React, { Component } from "react";
import ReactPlayer from "react-player";
import { Row } from "react-bootstrap";
// import {  ProgressBar } from "react-bootstrap";
// import LinearProgress from "@material-ui/core/LinearProgress";

import "../../Module/ModuleHome.css";
import "../SubModule.css";
import SubModuleNextButton from "../../Utility/SubModuleNextButton";

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
      SubModule2Detail,
      onClick,
      EducationWithTasks,
    } = this.props;

    return (
      <div className={`${userActiveModule}-sub-panel mt-4 mb-5 app`}>
        <section className='section'>
          <div className='player-wrapper'>
            <ReactPlayer
              url={SubModule2Detail[0].url}
              // url={SubModuleUrl}
              className='react-player'
              width='100%'
              height='100%'
              controls={true}
              onDuration={this.handleDuration}
              onProgress={this.handleProgress}
            />
          </div>
        </section>

        {/* <LinearProgress variant='determinate' value={played * 100} /> */}

        {/* <ProgressBar
          animated
          max={1}
          now={played}
          label={`${played.toFixed(2) * 100}%`}
          variant={`${userActiveModule}-bg-color`}
          className='m-3'
        /> */}
        <Row className='w-100 d-flex justify-content-around'>
          <SubModuleNextButton
            disabled={
              played.toFixed(2) * 100 <= SubModule2Detail[0].completionRatio
                ? true
                : false
            }
            className={`${userActiveModule}-next-btn m-3`}
            condition={!EducationWithTasks}
            EducationWithTasks={EducationWithTasks}
            NormalNextSubModule='sub3'
            SubModule6Name='sub6'
            txt='SubModule2-Continue'
            onClick={onClick}
          />
        </Row>
      </div>
    );
  }
}
export default SubModule2;
