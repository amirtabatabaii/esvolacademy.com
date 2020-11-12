import React, { Component } from "react";
import { Divider, Collapse } from "antd";
import IntroductionVideo from "./IntroductionVideo";
import TableIntroductionVideo from "./TableIntroductionVideo";
import { ApiUrlMainVideo, ApiUrlMain2 } from "../../../Utility/ApiUrl";
import axios from "axios";
import { openNotificationWithIcon } from "../../Utility/Error";

const { Panel } = Collapse;

class IntroductionVideoMain extends Component {
  state = {
    VideoList: [],
    url: "",
    completionRatio: "",
    videoType: "LinkVideo",
    uploaded: false,
    language: "",
    percentage: 0,
    fileName: "",
  };

  componentDidMount = (e) => {
    axios
      .get(ApiUrlMainVideo + `/fileup/${this.props.adminActiveModule}`)
      .then((Response) => {
        if (Response.status === 200) {
          // console.log("Success res ========>", Response.data.result);
          this.setState({ VideoList: Response.data.result });
        }
      });
  };

  handleDeleteVideo = (videoName) => {
    axios
      .delete(
        ApiUrlMainVideo + `/fileup/${this.props.adminActiveModule}/${videoName}`
      )
      .then((Response) => {
        // console.log("Success res ========>", Response);
        if (Response.status === 200) {
          axios
            .get(ApiUrlMainVideo + `/fileup/${this.props.adminActiveModule}`)
            .then((Response) => {
              if (Response.status === 200) {
                //   console.log("Success res ========>", Response.data.result);
                this.setState({ VideoList: Response.data.result });
              }
            });
        }
      });
  };

  handleSubmitLink = (event) => {
    event.preventDefault();
    axios
      .post(
        ApiUrlMain2 + `/api/courses/videos`,
        {
          courseName: this.props.adminActiveModule,
          url: this.state.url,
          completionRatio: this.state.completionRatio,
          type: "IntroductionVideo", //this.props.adminActiveSubModule,
        },
        {
          "Access-Control-Allow-Origin": "*",
        }
      )
      .then((res) => {
        console.log("res ===> ", res);
      });
  };

  handleSubmitUpload = (event) => {
    if (
      parseInt(parseInt(event.target.files[0].size) / parseInt(1024)) >
      370000000
    ) {
      openNotificationWithIcon("error", "SizeError", "Size Err", 5);
    } else {
      this.setState({ uploaded: false });

      const formData = new FormData();
      for (let i = 0; i < event.target.files.length; i++) {
        formData.append("file", event.target.files[i]);
      }
      axios
        .post(
          `http://31.210.91.44:8080/fileup/saveFile?module=${
            this.props.adminActiveModule
          }&subModule=${this.state.language + "IntroductionVideo"}`,
          formData,

          {
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
            onUploadProgress: (progressEvent) => {
              this.setState({
                percentage: parseInt(
                  Math.round((progressEvent.loaded * 100) / progressEvent.total)
                ),
              });
            },
          }
        )
        .then((res) => {
          //console.log("res ====> ", res);
          if (res.status === 200) {
            this.setState({
              uploaded: true,
              url: res.data.filePath,
              fileName: res.data.fileName,
            });
            axios
              .get(ApiUrlMainVideo + `/fileup/${this.props.adminActiveModule}`)
              .then((Response) => {
                if (Response.status === 200) {
                  // console.log("Success res ========>", Response.data.result);
                  this.setState({ VideoList: Response.data.result });
                }
              });
          } else {
            this.setState({ uploaded: false });
          }
        });
    }
  };

  handleChange = (event) => {
    if (event.target.name === "videoType") {
      if (this.state.videoType !== event.target.name) {
        this.setState({
          url: "",
          completionRatio: "",
          videoType: event.target.value,
          uploaded: false,
          language: "",
          percentage: 0,
          fileName: "",
        });
      }
    } else this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <Collapse className='mb-3'>
          <Panel header='Add New Video Section' key='1'>
            <IntroductionVideo
              adminActiveSubModule={this.props.adminActiveSubModule}
              adminActiveModule={this.props.adminActiveModule}
              handleSubmitLink={this.handleSubmitLink}
              handleSubmitUpload={this.handleSubmitUpload}
              handleChange={this.handleChange}
              url={this.state.url}
              completionRatio={this.state.completionRatio}
              videoType={this.state.videoType}
              uploaded={this.state.uploaded}
              language={this.state.language}
              percentage={this.state.percentage}
              fileName={this.state.fileName}
            />
          </Panel>
        </Collapse>

        <Divider className='bg-info' />

        <TableIntroductionVideo
          adminActiveModule={this.props.adminActiveModule}
          handleDeleteVideo={this.handleDeleteVideo}
          VideoList={this.state.VideoList}
        />
      </div>
    );
  }
}

export default IntroductionVideoMain;
