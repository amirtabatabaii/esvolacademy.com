import React, { Component } from "react";

import { Empty, Popconfirm } from "antd";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faSave } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";

class TableLinkIntroductionVideo extends Component {
  state = {
    EditVisible: false,
    VideoRatio: "",
    VideoLink: "",
  };

  showEditSection = () => {
    this.setState({ EditVisible: true });
  };

  handleRatioChange = (e) => {
    this.setState(
      {
        VideoRatio: e.target.value,
      }
      // ,
      // () => console.log("handleRatioChange", this.state.Ratio)
    );
  };

  handleLinkChange = (e) => {
    this.setState(
      {
        VideoLink: e.target.value,
      }
      // ,
      // () => console.log("handleLinkChange", this.state.VideoLink)
    );
  };

  EditRatio = () => {
    console.log("EditRatio");
    this.setState({ EditVisible: false });
  };

  render() {
    const { VideoLinkList } = this.props;

    return (
      <div className='mt-4'>
        {this.props.VideoLinkList.length !== 0 ? (
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                {/* <th>SubModule Type</th> */}
                {/* <th>Course Name</th> */}
                <th>Video Link</th>
                <th>Completion Ratio</th>
                <th>
                  {!this.state.EditVisible && "Update / Delete"}
                  {this.state.EditVisible && "Save / Delete"}
                </th>
              </tr>
            </thead>

            <tbody>
              {this.props.VideoLinkList.map((video, index) => (
                <tr key={video.id}>
                  <td>{index + 1}</td>
                  {/* <td>{video.type}</td> */}
                  {/* <td>{video.courseName}</td> */}
                  <td>
                    <TextField
                      style={{ width: "670px" }}
                      variant='outlined'
                      name='VideoLink'
                      // type='number'
                      required
                      defaultValue={video.url}
                      disabled={!this.state.EditVisible}
                      onChange={(e) => this.handleLinkChange(e)}
                    />
                  </td>
                  <td>
                    <TextField
                      style={{ width: "70px" }}
                      variant='outlined'
                      name='completionRatio'
                      type='number'
                      required
                      defaultValue={video.completionRatio}
                      disabled={!this.state.EditVisible}
                      onChange={(e) => this.handleRatioChange(e)}
                    />
                  </td>
                  <td>
                    {!this.state.EditVisible && (
                      <Link onClick={() => this.showEditSection()}>
                        <FontAwesomeIcon
                          className='text-success ml-2 mr-4'
                          icon={faEdit}
                          transform='grow-15'
                          fixedWidth
                        />
                      </Link>
                    )}

                    {this.state.EditVisible && (
                      <Link onClick={() => this.EditRatio()}>
                        <FontAwesomeIcon
                          // className='text-info m-3'
                          className='text-info ml-2 mr-4'
                          icon={faSave}
                          transform='grow-15'
                          fixedWidth
                        />
                      </Link>
                    )}

                    <Link>
                      {/* onClick={() => this.showEditDrawer(qst.id)}> */}
                      <FontAwesomeIcon
                        className='text-danger ml-3 mr-4'
                        icon={faTrash}
                        transform='grow-15'
                        fixedWidth
                      />
                    </Link>
                  </td>
                  {/* <Link>
                    <Popconfirm
                      title={`Are you sure DELETE this Video?`}
                      onConfirm={() => this.props.handleDeleteVideo(video)}
                      okText='Yes'
                      cancelText='No'
                    >
                      <FontAwesomeIcon
                        className='text-danger ml-2 mr-4'
                        icon={faTrash}
                        transform='grow-15'
                        fixedWidth
                      />
                    </Popconfirm>
                  </Link> */}
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <Empty
            description='Empty Video List...'
            style={{ margin: "5%", zoom: "120%" }}
          />
        )}
      </div>
    );
  }
}
export default TableLinkIntroductionVideo;
