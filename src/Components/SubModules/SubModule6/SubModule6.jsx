import React, { Component } from "react";
// import ReactPlayer from "react-player";
import { Row } from "react-bootstrap";

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

  render() {
    // const { played } = this.state;
    const {
      userActiveModule,
      // SubModuleUrl,
      // SubModuleRatio,
      onClick,
    } = this.props;

    return (
      <div className={`${userActiveModule}-sub-panel mt-4 mb-5 app`}>
        {/* <section className='section'>
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
        </section> */}

        <Row className='w-100 d-flex justify-content-around'>
          <Sub6Button
            className={"m-3 Module-next-btn"}
            // disabled={played.toFixed(2) * 100 <= SubModuleRatio ? true : false}
            txt='SubModule6-Continue'
            onClick={onClick}
          />
        </Row>
      </div>
    );
  }
}
export default SubModule6;
