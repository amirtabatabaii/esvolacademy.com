import React, { Component } from "react";
import { Button, Table } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import DrawerFinalTestAns from "./DrawerSection/FinalTestAns";
import DrawerModuleActivity from "./DrawerSection/ModuleActivity";
import DrawerPreTestAns from "./DrawerSection/PreTestAns";
import DrawerUserInfo from "./DrawerSection/UserInfo";
// import { connect } from "react-redux";

import "./ViewerMain.css";

class ViewerMain extends Component {
  state = {
    UserInfo: false,
    PreTest: false,
    FinalTest: false,
    ModuleActivity: false,
  };

  showUserInfo = (id) => {
    this.setState({
      UserInfo: true,
      PreTest: false,
      FinalTest: false,
      ModuleActivity: false,
      //  FltCaseStudyList: this.props.CaseStudyList.filter(
      //    (qsts) => parseInt(qsts.id) == parseInt(id)
      //  )[0],
    });
  };

  showPreTest = (id) => {
    this.setState({
      UserInfo: false,
      PreTest: true,
      FinalTest: false,
      ModuleActivity: false,
      //  FltCaseStudyList: this.props.CaseStudyList.filter(
      //    (qsts) => parseInt(qsts.id) == parseInt(id)
      //  )[0],
    });
  };

  showFinalTest = (id) => {
    this.setState({
      UserInfo: false,
      PreTest: false,
      FinalTest: true,
      ModuleActivity: false,
      //  FltCaseStudyList: this.props.CaseStudyList.filter(
      //    (qsts) => parseInt(qsts.id) == parseInt(id)
      //  )[0],
    });
  };

  showModuleActivity = (id) => {
    this.setState({
      UserInfo: false,
      PreTest: false,
      FinalTest: false,
      ModuleActivity: true,
      //  FltCaseStudyList: this.props.CaseStudyList.filter(
      //    (qsts) => parseInt(qsts.id) == parseInt(id)
      //  )[0],
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
    localStorage.removeItem("viewerToken");
    this.props.history.push("/site/viewer-page");
  };

  render() {
    // const { ... } = this.props;

    return (
      <div>
        <div className='p-4 bg-info'>
          <h2>Viewer Main</h2>
          <Button onClick={this.handleLogoutClick}>Logout</Button>
        </div>
        <div className='m-2 p-2'>
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th style={{ width: "1%", fontSize: "large" }}>#</th>
                <th style={{ width: "18%", fontSize: "large" }}>
                  Name Surname
                </th>
                <th style={{ width: "7%", fontSize: "large" }}>
                  Active Module
                </th>
                <th style={{ width: "7%", fontSize: "large" }}>Score</th>
                <th style={{ width: "10%", fontSize: "large" }}>Pre Test</th>
                <th style={{ width: "10%", fontSize: "large" }}>Final Test</th>
                <th style={{ width: "10%", fontSize: "large" }}>
                  Modules Activity
                </th>
              </tr>
            </thead>
            <tbody>
              {/* <tr key={id}> */}
              <tr className='font-weight-bold'>
                <td>1</td>
                <td>
                  <Link onClick={() => this.showUserInfo()}>Cagla Oktar</Link>
                  {this.state.UserInfo && (
                    <DrawerUserInfo
                      onClose={this.onClose}
                      visible={this.state.UserInfo}
                      // FltCaseStudyList={this.state.FltCaseStudyList}
                    />
                  )}
                </td>
                <td>Module1</td>
                <td>0</td>
                <td>
                  <Link onClick={() => this.showPreTest()}>View Answers</Link>
                  {this.state.PreTest && (
                    <DrawerPreTestAns
                      onClose={this.onClose}
                      visible={this.state.PreTest}
                      // FltCaseStudyList={this.state.FltCaseStudyList}
                    />
                  )}
                </td>
                <td>
                  <Link onClick={() => this.showFinalTest()}>View Answers</Link>
                  {this.state.FinalTest && (
                    <DrawerFinalTestAns
                      onClose={this.onClose}
                      visible={this.state.FinalTest}
                      // FltCaseStudyList={this.state.FltCaseStudyList}
                    />
                  )}
                </td>
                <td>
                  <Link onClick={() => this.showModuleActivity()}>
                    View Details...
                  </Link>
                  {this.state.ModuleActivity && (
                    <DrawerModuleActivity
                      onClose={this.onClose}
                      visible={this.state.ModuleActivity}
                      // FltCaseStudyList={this.state.FltCaseStudyList}
                    />
                  )}
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({ ... });
// export default connect(mapStateToProps, {})(withRouter(ViewerMain));
export default withRouter(ViewerMain);
