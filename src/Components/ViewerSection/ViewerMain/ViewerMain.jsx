import React, { Component } from "react";
import { Button, Table } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import DrawerFinalTestAns from "./DrawerSection/FinalTestAns";
import DrawerModuleActivity from "./DrawerSection/ModuleActivity";
import DrawerPreTestAns from "./DrawerSection/PreTestAns";
import DrawerUserInfo from "./DrawerSection/UserInfo";
// import { connect } from "react-redux";
import { notification, message } from "antd";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { ApiUrlMain2 } from "../../Utility/ApiUrl";

import "./ViewerMain.css";
const key = "updatable";

class ViewerMain extends Component {
  state = {
    UserInfo: false,
    PreTest: false,
    FinalTest: false,
    ModuleActivity: false,
    UserInfoArray: [],
    FltUserInfoArray: [],
    pageNumber: "1",
  };

  componentDidMount() {
    axios
      //https://biyoteknik.com:1443/esvol/users?page=3&limit=20
      .get(ApiUrlMain2 + `/users?page=1&limit=20`, {
        headers: {
          Authorization: localStorage.getItem("viewerInfo"),
        },
      })
      .then((res) => {
        // console.log(res.data);
        if (res.status === 200) {
          this.setState(
            { UserInfoArray: res.data }
            // , () =>
            // console.log(this.state)
          );
        }
      });
  }

  showUserInfo = (userId) => {
    this.setState({
      UserInfo: true,
      PreTest: false,
      FinalTest: false,
      ModuleActivity: false,
      FltUserInfoArray: this.state.UserInfoArray.filter(
        (usr) => usr.userId === userId
      )[0],
    });
  };

  showPreTest = (userId) => {
    this.setState({
      UserInfo: false,
      PreTest: true,
      FinalTest: false,
      ModuleActivity: false,
      FltUserInfoArray: this.state.UserInfoArray.filter(
        (usr) => usr.userId === userId
      )[0],
    });
  };

  showFinalTest = (userId) => {
    this.setState({
      UserInfo: false,
      PreTest: false,
      FinalTest: true,
      ModuleActivity: false,
      FltUserInfoArray: this.state.UserInfoArray.filter(
        (usr) => usr.userId === userId
      )[0],
    });
  };

  showModuleActivity = (userId) => {
    this.setState({
      UserInfo: false,
      PreTest: false,
      FinalTest: false,
      ModuleActivity: true,
      FltUserInfoArray: this.state.UserInfoArray.filter(
        (usr) => usr.userId === userId
      )[0],
    });
  };

  onClose = () => {
    this.setState({
      UserInfo: false,
      PreTest: false,
      FinalTest: false,
      ModuleActivity: false,
    });
  };

  handleLogoutClick = () => {
    localStorage.removeItem("viewerInfo");
    this.props.history.push("/site/viewer-page");
  };

  handlePrevPage = () => {
    this.setState({ pageNumber: parseInt(this.state.pageNumber) - 1 }, () =>
      this.handleTableData()
    );
  };

  handleNextPage = () => {
    this.setState({ pageNumber: parseInt(this.state.pageNumber) + 1 }, () =>
      this.handleTableData()
    );
  };

  handleTableData = () => {
    axios
      .get(ApiUrlMain2 + `/users?page=${this.state.pageNumber}&limit=20`, {
        headers: {
          Authorization: localStorage.getItem("viewerInfo"),
        },
      })
      .then((res) => {
        // console.log(res.data);
        if (res.status === 200) {
          this.setState(
            { UserInfoArray: res.data }
            // , () =>
            // console.log(this.state)
          );
        }
      });
  };

  render() {
    const {
      UserInfo,
      PreTest,
      FinalTest,
      ModuleActivity,
      UserInfoArray,
      FltUserInfoArray,
      pageNumber,
    } = this.state;

    return (
      <div>
        <div className='p-3 bg-info'>
          <span className='h3 pr-3 m-auto'>Viewer Main</span>
          <span className='pl-3 m-auto'>
            <Button className='bg-danger' onClick={this.handleLogoutClick}>
              Logout
            </Button>
          </span>
        </div>
        <div className='m-2 p-2'>
          <Table responsive striped bordered hover>
            <thead>
              <tr className='bg-secondary text-white'>
                <th style={{ width: "1%" }}>#</th>
                <th style={{ width: "14%" }}>Name Surname</th>
                <th style={{ width: "10%" }}>Activity / Score</th>
                <th style={{ width: "6%" }}>registered Date</th>
                <th style={{ width: "6%" }}>Pre Test</th>
                {/* <th style={{ width: "6%" }}>Modules Activity</th> */}
                <th style={{ width: "6%" }}>Final Test</th>
              </tr>
            </thead>
            <tbody>
              {UserInfoArray.map((usr, index) => (
                <tr key={index}>
                  {/* {console.log(usr.firstName)} */}
                  <td className='bg-secondary text-white'>{index + 1}</td>
                  <td>
                    <Link onClick={() => this.showUserInfo(usr.userId)}>
                      {usr.firstName}
                      {" - "}
                      {usr.lastName}
                    </Link>
                    {UserInfo && (
                      <DrawerUserInfo
                        onClose={this.onClose}
                        visible={UserInfo}
                        index={index}
                        FltUserInfoArray={FltUserInfoArray}
                      />
                    )}
                  </td>
                  <td>
                    {usr.userStatus.currentModule === "Module6" ? (
                      <span style={{ color: "red" }}>Finished Stages</span>
                    ) : (
                      usr.userStatus.currentModule
                    )}
                    {usr.userStatus.currentModule === "Module6"
                      ? ""
                      : " - " + usr.userStatus.currentSubModule}
                    {"  /  "}
                    {usr.userStatus.score}
                  </td>
                  <td>{usr.registeredDate.slice(0, 10)}</td>
                  <td>
                    {usr.userStatus.isPreTestDone && (
                      <Link onClick={() => this.showPreTest(usr.userId)}>
                        View Answers
                      </Link>
                    )}
                    {PreTest && (
                      <DrawerPreTestAns
                        onClose={this.onClose}
                        visible={PreTest}
                        FltUserInfoArray={FltUserInfoArray}
                      />
                    )}
                  </td>
                  {/* <td>
                    <Link onClick={() => this.showModuleActivity(usr.userId)}>
                      View Details
                    </Link>
                    {ModuleActivity && (
                      <DrawerModuleActivity
                        onClose={this.onClose}
                        visible={ModuleActivity}
                        ModuleActivity={usr}
                      />
                    )}
                  </td> */}
                  <td>
                    {usr.userStatus.isFinalTestDone && (
                      <Link onClick={() => this.showFinalTest(usr.userId)}>
                        View Answers
                      </Link>
                    )}
                    {FinalTest && (
                      <DrawerFinalTestAns
                        onClose={this.onClose}
                        visible={FinalTest}
                        FltUserInfoArray={FltUserInfoArray}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className='text-center'>
            {pageNumber >= 2 && (
              <Button onClick={this.handlePrevPage}>Prev</Button>
            )}
            <a type='number' className='pl-3 pr-3'>
              {pageNumber}
            </a>
            {UserInfoArray.length === 20 && (
              <Button onClick={this.handleNextPage}>Next</Button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({ ... });
// export default connect(mapStateToProps, {})(withRouter(ViewerMain));
export default withRouter(ViewerMain);
