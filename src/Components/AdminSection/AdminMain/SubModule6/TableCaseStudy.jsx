import React, { Component } from "react";
import { Empty, Popconfirm } from "antd";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEye, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import DrawerCaseStudy from "./DrawerCaseStudy";

class TableCaseStudy extends Component {
  state = {
    ViewVisible: false,
    EditVisible: false,
    QST: [],
    FltQst: {},
  };

  showViewDrawer = (id) => {
    this.setState(
      {
        ViewVisible: true,
        // FltQst: this.state.QST.filter(
        //   (qsts) => parseInt(qsts.id) == parseInt(id)
        // )[0],
      }
      // () => console.log(this.state.FltQst)
    );
  };

  showEditDrawer = (id) => {
    this.setState({
      EditVisible: true,
      // FltQst: this.state.QST.filter(
      //   (qsts) => parseInt(qsts.id) == parseInt(id)
      // )[0],
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
        {this.props.CaseStudyList.length !== 0 ? (
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
              {this.props.CaseStudyList.map((task, index) => (
                <tr key={task.id}>
                  <td>{index + 1}</td>
                  <td>{task.urlFormat}</td>
                  <td>
                    {
                      <a href={task.taskUrl} target='_Blank'>
                        <b>Open CaseStudy Link</b>
                      </a>
                    }
                  </td>
                  <td>
                    <Link onClick={() => this.showViewDrawer(task.id)}>
                      <FontAwesomeIcon
                        className='text-success mr-5'
                        icon={faEye}
                        transform='grow-15'
                        fixedWidth
                      />
                    </Link>
                    {this.state.ViewVisible && (
                      <DrawerCaseStudy
                        visible={this.state.ViewVisible}
                        onClose={this.onClose}
                        DrawerType='View'
                        title='View Detail'
                        placement='left'
                        width={800}
                        // FltQst={this.state.FltQst}
                      />
                    )}

                    <Link onClick={() => this.showEditDrawer(task.id)}>
                      <FontAwesomeIcon
                        className='text-primary mr-5'
                        icon={faEdit}
                        transform='grow-15'
                        fixedWidth
                      />
                    </Link>
                    {this.state.EditVisible && (
                      <DrawerCaseStudy
                        visible={this.state.EditVisible}
                        onClose={this.onClose}
                        DrawerType='Edit'
                        title={"Edit Detail"}
                        placement='right'
                        width={800}
                        // FltQst={this.state.FltQst}
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
                          className='text-danger'
                          icon={faTrash}
                          transform='grow-15'
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
            description='Empty CaseStudy List...'
            style={{ margin: "5%", zoom: "120%" }}
          />
        )}
      </div>
    );
  }
}
export default TableCaseStudy;
