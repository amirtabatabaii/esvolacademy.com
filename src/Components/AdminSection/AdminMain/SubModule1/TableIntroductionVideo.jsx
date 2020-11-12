import React, { Component } from "react";

import { Empty, Popconfirm } from "antd";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrash } from "@fortawesome/free-solid-svg-icons";

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
                  <th>File Name</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                {this.props.VideoList.map((video, index) => (
                  <tr key={video.id}>
                    <td>{index + 1}</td>
                    <td>{video}</td>
                    <td>
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
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        ) : (
          <Empty
            description='Empty List...'
            style={{ margin: "5%", zoom: "120%" }}
          />
        )}
      </div>
    );
  }
}
export default TableIntroductionVideo;
