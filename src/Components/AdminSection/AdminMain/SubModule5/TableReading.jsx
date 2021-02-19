import React, { Component } from "react";
import { Empty, Popconfirm } from "antd";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEye, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import DrawerReading from "./DrawerReading";

class TableReading extends Component {
  state = {
    ViewVisible: false,
    EditVisible: false,
    ReadingList: [],
    FltReadingList: {},
  };

  showViewDrawer = (id) => {
    // console.log(id);
    // console.log(
    //   this.props.ReadingList.filter((rd) => parseInt(rd.id) == parseInt(id))[0]
    // );
    this.setState(
      {
        ViewVisible: true,
        FltReadingList: this.props.ReadingList.filter(
          (rd) => parseInt(rd.id) == parseInt(id)
        )[0],
      }
      // ,
      // () => console.log("ssss", this.state.FltReadingList)
    );
  };

  showEditDrawer = (id) => {
    this.setState({
      EditVisible: true,
      FltReadingList: this.props.ReadingList.filter(
        (red) => parseInt(red.id) == parseInt(id)
      )[0],
    });
  };

  onClose = () => {
    this.setState({
      ViewVisible: false,
      EditVisible: false,
    });
  };

  render() {
    return (
      <div className='mt-4'>
        {this.props.ReadingList.length !== 0 ? (
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>URL Format</th>
                <th>Task Url</th>
                <th>View / Update / Delete</th>
              </tr>
            </thead>

            <tbody>
              {this.props.ReadingList.map((task, index) => (
                <tr key={task.id}>
                  <td>{index + 1}</td>
                  <td>{task.urlFormat}</td>
                  <td>
                    {
                      <a
                        href={task.taskUrl}
                        target='_Blank'
                        rel='noopener noreferrer'
                      >
                        <b>Open Reading Link</b>
                      </a>
                    }
                  </td>
                  <td>
                    <Link onClick={() => this.showViewDrawer(task.id)}>
                      <FontAwesomeIcon
                        className='text-success mr-2'
                        icon={faEye}
                        transform='grow-8'
                        fixedWidth
                      />
                    </Link>
                    {this.state.ViewVisible && (
                      <DrawerReading
                        visible={this.state.ViewVisible}
                        onClose={this.onClose}
                        DrawerType='View'
                        title='View Detail'
                        placement='left'
                        width={1200}
                        FltReadingList={this.state.FltReadingList}
                      />
                    )}

                    <Link onClick={() => this.showEditDrawer(task.id)}>
                      <FontAwesomeIcon
                        className='text-primary mr-2 ml-3'
                        icon={faEdit}
                        transform='grow-8'
                        fixedWidth
                      />
                    </Link>
                    {this.state.EditVisible && (
                      <DrawerReading
                        visible={this.state.EditVisible}
                        onClose={this.onClose}
                        DrawerType='Edit'
                        title={"Edit Detail"}
                        placement='right'
                        width={1200}
                        FltReadingList={this.state.FltReadingList}
                      />
                    )}

                    <Link>
                      <Popconfirm
                        title={`Are you sure DELETE this Task?`}
                        // onConfirm={() => this.props.handleDeleteVideo(video)}
                        okText='Yes'
                        cancelText='No'
                      >
                        <FontAwesomeIcon
                          className='text-danger mr-2 ml-3'
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
        ) : (
          <Empty
            description='Empty Interactive List...'
            style={{ margin: "5%", zoom: "120%" }}
          />
        )}
      </div>
    );
  }
}
export default TableReading;
