import React, { Component } from "react";
import ReactPlayer from "react-player";
import { Row } from "react-bootstrap";
// import { ProgressBar } from "react-bootstrap";
// import LinearProgress from "@material-ui/core/LinearProgress";

import "../../Module/ModuleHome.css";
import "../SubModule.css";
import SubModuleNextButton from "../../Utility/SubModuleNextButton";

// import subtitlesEn from "../../../assets/subtitle/Module5/sub1En.vtt";
// import subtitlesTr from "../../../assets/subtitle/Module5/sub1Tr.vtt";
// let subtitlesEn = "";
// let subtitlesTr = "";

class SubModule1 extends Component {
  state = {
    played: 0,
    duration: 0,
    subtitlesEn: `https://esvolacademy.com/esvolSubtitles/${this.props.userActiveModule}/${this.props.userActiveSubModule}En.vtt`,
    subtitlesTr: `https://esvolacademy.com/esvolSubtitles/${this.props.userActiveModule}/${this.props.userActiveSubModule}Tr.vtt`,
    subtitlesBg: `https://esvolacademy.com/esvolSubtitles/${this.props.userActiveModule}/${this.props.userActiveSubModule}Bg.vtt`,
    subtitlesIt: `https://esvolacademy.com/esvolSubtitles/${this.props.userActiveModule}/${this.props.userActiveSubModule}It.vtt`,
    subtitlesEs: `https://esvolacademy.com/esvolSubtitles/${this.props.userActiveModule}/${this.props.userActiveSubModule}Es.vtt`,
    subtitlesGr: `https://esvolacademy.com/esvolSubtitles/${this.props.userActiveModule}/${this.props.userActiveSubModule}Gr.vtt`,
  };

  async componentDidMount() {
    // const subtitlesEn2 = await import(
    //   `../../../assets/subtitle/${this.props.userActiveModule}/${this.props.userActiveSubModule}En.vtt`
    // );
    // const subtitlesTr2 = await import(
    //   `../../../assets/subtitle/${this.props.userActiveModule}/${this.props.userActiveSubModule}Tr.vtt`
    // );
    // subtitlesEn = subtitlesEn2.default;
    // subtitlesTr = subtitlesTr2.default;
  }

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
      userActiveSubModule,
      SubModule1Detail,
      onClick,
      isEasyModeActive,
      // NormalNextSubModule,
      // selectedLanguage,
    } = this.props;

    return (
      <div className={`${userActiveModule}-sub-panel mt-4 mb-5 app`}>
        <section className='section'>
          <div className='player-wrapper'>
            <ReactPlayer
              url={SubModule1Detail.url}
              config={{
                file: {
                  tracks: [
                    {
                      kind: "subtitles",
                      src: this.state.subtitlesEn,
                      srcLang: "English",
                      default: true,
                    },
                    {
                      kind: "subtitles",
                      src: this.state.subtitlesTr,
                      srcLang: "Turkçe",
                    },
                    {
                      kind: "subtitles",
                      src: this.state.subtitlesGr,
                      srcLang: "Ελληνικά",
                    },
                    {
                      kind: "subtitles",
                      src: this.state.subtitlesIt,
                      srcLang: "italiano",
                    },
                    {
                      kind: "subtitles",
                      src: this.state.subtitlesEs,
                      srcLang: "Español",
                    },
                    {
                      kind: "subtitles",
                      src: this.state.subtitlesBg,
                      srcLang: "български",
                    },
                  ],
                },
              }}
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

        {/* const currentSub = localStorage.getItem("UserSubModule").substring(3);
    const ActiveSub = ActiveSubName.substring(3);
    const currentModule = localStorage.getItem("UserModule").substring(6);
    const tmpModule = localStorage.getItem("UserTempModule").substring(6);
    let NewActiveSub = ActiveSubName.substring(3);
    alert(NewActiveSub);

    if (
      localStorage.getItem("UserModule").substring(6) > localStorage.getItem("UserTempModule").substring(6) ||
      (localStorage.getItem("UserModule").substring(6) === localStorage.getItem("UserTempModule").substring(6) && userActiveModule < localStorage.getItem("UserSubModule").substring(3))
    )
      NewActiveSub = currentSub;
    // if (ActiveSub > currentSub) NewActiveSub = currentSub;

    alert(NewActiveSub); */}

        {localStorage.getItem("UserModule").substring(6) <
          localStorage.getItem("UserTempModule").substring(6) ||
          (localStorage.getItem("UserModule").substring(6) ===
            localStorage.getItem("UserTempModule").substring(6) &&
            userActiveSubModule.substring(3) ===
              localStorage.getItem("UserSubModule").substring(3) && (
              <Row className='w-100 d-flex justify-content-around'>
                <SubModuleNextButton
                  disabled={
                    played.toFixed(2) * 100 <= SubModule1Detail.completionRatio
                      ? true
                      : false
                  }
                  className={`${userActiveModule}-next-btn m-3`}
                  condition={!isEasyModeActive}
                  isEasyModeActive={!isEasyModeActive}
                  NormalNextSubModule='sub2'
                  SubModule6Name='sub7'
                  txt='SubModule1-Continue'
                  onClick={onClick}
                />
              </Row>
            ))}
      </div>
    );
  }
}
export default SubModule1;
