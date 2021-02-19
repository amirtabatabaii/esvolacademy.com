import React, { Component } from "react";
import { ApiUrlMain2, ApiUrlQuestion } from "../../../Utility/ApiUrl";
import axios from "axios";
import { Empty, Popconfirm, Switch } from "antd";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEye, faEdit } from "@fortawesome/free-solid-svg-icons";
import DrawerSection from "./DrawerSection/DrawerSection";
import { openNotificationWithIcon } from "../../Utility/Error";

class TableQuestion extends Component {
  state = {
    ViewVisible: false,
    EditVisible: false,
    QST: [],
    FltQst: {},
  };

  // handleTableChange = (e) => {
  componentDidMount = (e) => {
    this.setState(
      {
        questionType: "MultipleChoice", //e.target.value,
      },
      () =>
        axios
          .get(
            ApiUrlMain2 +
              ApiUrlQuestion +
              // `?moduleName=${this.props.adminActiveModule}&questionType=${this.state.questionType}`
              `?moduleName=${this.props.adminActiveModule}&questionType=MultipleChoice`
          )
          .then((Response) => {
            // console.log("Success res ========>", Response.data);
            this.setState({ QST: Response.data });
          })
    );
  };

  showViewDrawer = (id) => {
    this.setState(
      {
        ViewVisible: true,
        FltQst: this.state.QST.filter(
          (qsts) => parseInt(qsts.id) == parseInt(id)
        )[0],
      }
      // () => console.log(this.state.FltQst)
    );
  };

  showEditDrawer = (id) => {
    this.setState({
      EditVisible: true,
      FltQst: this.state.QST.filter(
        (qsts) => parseInt(qsts.id) == parseInt(id)
      )[0],
    });
  };

  onClose = () => {
    this.setState({
      ViewVisible: false,
      EditVisible: false,
      FltQst: {},
    });
  };

  onActiveDeactive(id, status) {
    // console.log("id", id);
    axios
      .put(ApiUrlMain2 + ApiUrlQuestion + `/${id}/status?activation=${status}`)
      .then((res) => {
        if (res.status === 200) {
          axios
            .get(
              ApiUrlMain2 +
                ApiUrlQuestion +
                `?moduleName=${this.props.adminActiveModule}&questionType=${this.state.questionType}`
            )
            .then((Response) => {
              // console.log("Success res ========>", Response.data);
              this.setState({ QST: Response.data });
            });

          openNotificationWithIcon(
            "success",
            "Successful Updated!",
            "The Activation Status Successfully Updated!",
            10
          );
        }
      });
  }

  render() {
    return (
      <div>
        {/* <FormControl variant='outlined' style={{ width: "15%" }}>
          <InputLabel id='demo-simple-select-outlined-label'>
            Question Type
          </InputLabel>
          <Select
            labelId='demo-simple-select-outlined-label'
            // value={"MultipleChoice"}
            onChange={(e) => this.handleTableChange(e)}
            label='Question Type'
            name='questionType'
            required
          >
            <MenuItem key={0} value={"MultipleChoice"}>
              MultipleChoice
            </MenuItem>
            <MenuItem key={1} value={"Filling"}>
              Filling
            </MenuItem>
            <MenuItem key={2} value={"Boolean"}>
              Boolean
            </MenuItem>
            <MenuItem key={3} value={"Blank"}>
              Blank
            </MenuItem>
          </Select>
        </FormControl> */}

        <div className='mt-4'>
          {this.state.QST.length !== 0 ? (
            <>
              <Table responsive striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th className='w-50'>Question Title</th>
                    {/* <th>Is Active?</th> */}
                    <th>Created Date</th>
                    <th>Deactive / Active</th>
                    <th>View / Update</th>
                  </tr>
                </thead>

                <tbody>
                  {this.state.QST.map((qst, index) => (
                    <tr key={qst.id}>
                      <td>{index + 1}</td>
                      <td>
                        {
                          qst.questionDictionaries.filter(
                            (qstTitle) => qstTitle.language === "En"
                          )[0].questionText
                        }
                      </td>
                      {/* <td>{qst.activationStatus ? "True" : "False"}</td> */}
                      <td>{qst.createdDate}</td>
                      <td>
                        <Popconfirm
                          title={`Are you sure ${
                            qst.activationStatus ? "DEACTIVE" : "ACTIVE"
                          } this Question?`}
                          onConfirm={() =>
                            this.onActiveDeactive(
                              qst.id,
                              qst.activationStatus == 1 ? false : true
                            )
                          }
                          okText='Yes'
                          cancelText='No'
                        >
                          <Switch
                            checked={qst.activationStatus == 1 ? true : false}
                            className={
                              qst.activationStatus == 1
                                ? "bg-success"
                                : "bg-mute"
                            }
                          />
                        </Popconfirm>
                      </td>
                      <td>
                        <Link onClick={() => this.showViewDrawer(qst.id)}>
                          <FontAwesomeIcon
                            className='text-success mr-2'
                            icon={faEye}
                            transform='grow-10'
                            fixedWidth
                          />
                        </Link>
                        <DrawerSection
                          visible={this.state.ViewVisible}
                          onClose={this.onClose}
                          DrawerType='View'
                          title='View Detail'
                          placement='left'
                          width={1200}
                          FltQst={this.state.FltQst}
                          adminActiveModule={this.props.adminActiveModule}
                        />

                        {qst.activationStatus && (
                          <>
                            <Link onClick={() => this.showEditDrawer(qst.id)}>
                              <FontAwesomeIcon
                                className='text-primary mr-2 ml-3'
                                icon={faEdit}
                                transform='grow-10'
                                fixedWidth
                              />
                            </Link>
                            <DrawerSection
                              visible={this.state.EditVisible}
                              onClose={this.onClose}
                              DrawerType='Edit'
                              title={"Edit Detail"}
                              placement='right'
                              width={1200}
                              FltQst={this.state.FltQst}
                              adminActiveModule={this.props.adminActiveModule}
                            />
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </>
          ) : (
            <Empty
              description='Please Select Question Type...'
              style={{ margin: "5%", zoom: "120%" }}
            />
          )}
        </div>
      </div>
    );
  }
}
export default TableQuestion;
