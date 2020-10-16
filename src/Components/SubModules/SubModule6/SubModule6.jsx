import React, { Component } from "react";
import ReactPlayer from "react-player";
import { Row } from "react-bootstrap";
// import LinearProgress from "@material-ui/core/LinearProgress";

import "../../Module/ModuleHome.css";
import "../SubModule.css";
import Sub6Button from "./Sub6Button";

class SubModule6 extends Component {
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

  componentWillReceiveProps(previousProps) {
    if (previousProps.ExpertIndex === 1)
      this.setState({
        played: 0,
        duration: 0,
      });
  }

  render() {
    const { played } = this.state;
    const {
      userActiveModule,
      SubModule6Detail,
      onClick,
      handleClickExpertVideo,
      ExpertIndex,
    } = this.props;

    return (
      <div className={`${userActiveModule}-sub-panel mt-4 mb-5 app`}>
        <section className='section'>
          <div className='player-wrapper'>
            <ReactPlayer
              url={SubModule6Detail[ExpertIndex].SubModule6Url}
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

        <Row className='w-100 d-flex justify-content-around'>
          {ExpertIndex === 0 && (
            <Sub6Button
              className={`${this.props.userActiveModule}-next-btn m-3`}
              disabled={
                played.toFixed(2) * 100 <=
                SubModule6Detail[ExpertIndex].SubModule6Ratio
                  ? true
                  : false
              }
              txt='SubModule6-NextVideo'
              onClick={handleClickExpertVideo}
            />
          )}

          {ExpertIndex === 1 && (
            <Sub6Button
              className={`${this.props.userActiveModule}-next-btn m-3`}
              disabled={
                played.toFixed(2) * 100 <=
                SubModule6Detail[ExpertIndex].SubModule6Ratio
                  ? true
                  : false
              }
              txt='SubModule6-Continue'
              onClick={onClick}
            />
          )}
        </Row>
      </div>
    );
  }
}

export default SubModule6;
