import React, { Component } from "react";

import { Empty, Popconfirm } from "antd";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class TableIntroductionVideo extends Component {
  render() {
    return (
      <div className='mt-4'>
        {this.props.VideoList.length !== 0 ? (
          <>
            <Table responsive striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>SubModule Type</th>
                  {/* <th>Language</th> */}
                  <th>File Name</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                {this.props.VideoList.filter((name) =>
                  name.includes(this.props.subModuleType.toLowerCase())
                ).map((video, index) => (
                  <tr key={video.id}>
                    <td>{index + 1}</td>
                    <td>
                      {/* .substring(3) */}
                      {video.split(".")[0] === "coursevideo1"
                        ? "Course Video"
                        : video.split(".")[0] === "introductionvideo1"
                        ? "Introduction Video"
                        : video.split(".")[0] === "expertvideo1"
                        ? "Expert Video 1"
                        : video.split(".")[0] === "expertvideo2"
                        ? "Expert Video 2"
                        : ""}
                    </td>
                    {/* <td>{video.substring(0, 2).toUpperCase()}</td> */}
                    <td>{video}</td>
                    <td>
                      <Link>
                        <Popconfirm
                          title={`Are you sure DELETE this Video?`}
                          onConfirm={() => this.props.handleDeleteVideo(video)}
                          okText='Yes'
                          cancelText='No'
                        >
                          <FontAwesomeIcon
                            className='text-danger'
                            icon={faTrash}
                            transform='grow-8'
                            fixedWidth
                          />
                        </Popconfirm>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
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
export default TableIntroductionVideo;
