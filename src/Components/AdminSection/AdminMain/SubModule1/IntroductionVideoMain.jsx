import React, { Component } from "react";
import { Divider, Collapse } from "antd";
import IntroductionVideo from "./IntroductionVideo";
import TableIntroductionVideo from "./TableIntroductionVideo";
import { ApiUrlMainVideo, ApiUrlMain2 } from "../../../Utility/ApiUrl";
import axios from "axios";
import { openNotificationWithIcon } from "../../Utility/Error";
import TableLinkIntroductionVideo from "./TableLinkIntroductionVideo";

const { Panel } = Collapse;

class IntroductionVideoMain extends Component {
  state = {
    VideoList: [],
    VideoLinkList: [],
    url: "",
    completionRatio: "",
    videoType: "LinkVideo",
    uploaded: false,
    language: "En",
    percentage: 0,
    fileName: "",
  };

  componentDidMount = (e) => {
    this.setState({
      VideoLinkList: [],
    });

    axios
      .get(ApiUrlMainVideo + `/fileup/${this.props.adminActiveModule}`)
      .then((Response) => {
        if (Response.status === 200) {
          // console.log("Success res ========>", Response.data.result);
          this.setState({ VideoList: Response.data.result });
        }
      });

    axios
      .get(
        ApiUrlMain2 + `/api/courses/${this.props.adminActiveModule}/videos/` //${this.props.subModuleType}`
      )
      .then((Response) => {
        // console.log(
        //   "Success res ========>",
        //   Response.data
        // );
        if (Response.status === 200) {
          this.setState({
            VideoLinkList: Response.data.filter(
              (video) => video.type === this.props.subModuleType
            ),
          });
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
          openNotificationWithIcon(
            "success",
            "delete video",
            "delete video",
            5
          );
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
          type: this.props.subModuleType, //this.props.adminActiveSubModule,
        },
        {
          "Access-Control-Allow-Origin": "*",
        }
      )
      .then((res) => {
        // console.log("res ===> ", res);
        if (res.status === 200) {
          openNotificationWithIcon(
            "success",
            "insert video",
            "insert video",
            5
          );
          axios
            .get(
              ApiUrlMain2 +
                `/api/courses/${this.props.adminActiveModule}/videos/` //${this.props.subModuleType}`
            )
            .then((Response) => {
              // console.log("Success res ========>", Response);
              if (Response.status === 200) {
                this.setState({
                  VideoLinkList: Response.data.filter(
                    (video) => video.type === this.props.subModuleType
                  ),
                });
              }
            });
        }
      });
  };

  handleSubmitUpload = (event, index) => {
    if (
      parseInt(parseInt(event.target.files[0].size) / parseInt(1024 * 1024)) >
      400
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
          }&subModule=${
            this.state.language + "_" + this.props.subModuleType + index
          }`,
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
              url:
                "https://kastanjetextile.com" + res.data.filePath.substring(25),
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
          language: "En",
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
              index={"1"}
            />
          </Panel>
        </Collapse>

        {this.props.subModuleType === "ExpertVideo" && (
          <Collapse className='mb-3'>
            <Panel header='Add Second Video Section' key='1'>
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
                index={"2"}
              />
            </Panel>
          </Collapse>
        )}

        <Divider className='bg-info' />

        <h5>Video List</h5>
        <TableLinkIntroductionVideo
          adminActiveModule={this.props.adminActiveModule}
          handleDeleteVideo={this.handleDeleteVideo}
          VideoLinkList={this.state.VideoLinkList}
          subModuleType={this.props.subModuleType}
        />

        <Divider className='bg-info' />

        <h5>Uploaded Video List in Server</h5>
        <TableIntroductionVideo
          adminActiveModule={this.props.adminActiveModule}
          handleDeleteVideo={this.handleDeleteVideo}
          VideoList={this.state.VideoList}
          subModuleType={this.props.subModuleType}
        />
      </div>
    );
  }
}

export default IntroductionVideoMain;
