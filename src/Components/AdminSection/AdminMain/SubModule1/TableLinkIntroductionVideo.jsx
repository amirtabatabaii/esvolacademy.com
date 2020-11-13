import React, { Component } from "react";

import { Empty, Popconfirm } from "antd";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class TableLinkIntroductionVideo extends Component {
  render() {
    const { VideoLinkList } = this.props;

    return (
      <div className='mt-4'>
        {this.props.VideoLinkList.length !== 0 ? (
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>SubModule Type</th>
                <th>Course Name</th>
                <th>Completion Ratio</th>
                <th>Update / Delete</th>
              </tr>
            </thead>

            <tbody>
              {this.props.VideoLinkList.map((video, index) => (
                <tr key={video.id}>
                  <td>{index + 1}</td>
                  <td>{video.type}</td>
                  <td>{video.courseName}</td>
                  <td>{video.completionRatio}</td>
                  <td>
                    <Link>
                      {/* onClick={() => this.showViewDrawer(qst.id)} */}
                      <FontAwesomeIcon
                        className='text-success ml-2 mr-4'
                        icon={faEdit}
                        transform='grow-15'
                        fixedWidth
                      />
                    </Link>
                    <Link>
                      {/* onClick={() => this.showEditDrawer(qst.id)}> */}
                      <FontAwesomeIcon
                        className='text-danger mr-4'
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
