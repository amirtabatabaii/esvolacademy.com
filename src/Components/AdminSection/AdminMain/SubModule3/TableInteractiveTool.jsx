import React, { Component } from "react";
import { Empty, Popconfirm } from "antd";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEye, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import DrawerTask from "./DrawerTask";

class TableInteractiveTool extends Component {
  state = {
    ViewVisible: false,
    EditVisible: false,
    InteractiveList: [],
    FltInteractiveList: {},
  };

  showViewDrawer = (id) => {
    this.setState(
      {
        ViewVisible: true,
        FltInteractiveList: this.props.InteractiveList.filter(
          (qsts) => parseInt(qsts.id) == parseInt(id)
        )[0],
      }
      //,
      //() => console.log(this.state.FltInteractiveList)
    );
  };

  showEditDrawer = (id) => {
    this.setState({
      EditVisible: true,
      FltInteractiveList: this.props.InteractiveList.filter(
        (qsts) => parseInt(qsts.id) == parseInt(id)
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
        {this.props.InteractiveList.length !== 0 ? (
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>URL Format</th>
                <th>Interactive Url</th>
                <th>Point</th>
                <th>View / Update / Delete</th>
              </tr>
            </thead>

            <tbody>
              {this.props.InteractiveList.map((task, index) => (
                <tr key={task.id}>
                  <td>{index + 1}</td>
                  <td>{task.question.interactiveUrlFormat}</td>
                  <td>
                    {task.question.interactiveUrl === " " ? (
                      " No Link"
                    ) : (
                      <a
                        href={task.question.interactiveUrl}
                        target='_Blank'
                        rel='noopener noreferrer'
                      >
                        <b>Open Task Link</b>
                      </a>
                    )}
                  </td>
                  <td>{task.question.point}</td>
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
                      <DrawerTask
                        visible={this.state.ViewVisible}
                        onClose={this.onClose}
                        DrawerType='View'
                        title='View Detail'
                        placement='left'
                        width={1200}
                        FltInteractiveList={this.state.FltInteractiveList}
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
                      <DrawerTask
                        visible={this.state.EditVisible}
                        onClose={this.onClose}
                        DrawerType='Edit'
                        title={"Edit Detail"}
                        placement='right'
                        width={1200}
                        FltInteractiveList={this.state.FltInteractiveList}
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
export default TableInteractiveTool;
