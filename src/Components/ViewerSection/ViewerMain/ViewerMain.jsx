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
              <tr>
                <th style={{ width: "1%" }}>#</th>
                <th style={{ width: "14%" }}>Name Surname</th>
                <th style={{ width: "10%" }}>Active Module</th>
                <th style={{ width: "6%" }}>Pre Test</th>
                <th style={{ width: "6%" }}>Modules Activity</th>
                <th style={{ width: "6%" }}>Final Test</th>
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
                <td>Module1 - Introduction Video</td>
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
                  <Link onClick={() => this.showModuleActivity()}>
                    View Details
                  </Link>
                  {this.state.ModuleActivity && (
                    <DrawerModuleActivity
                      onClose={this.onClose}
                      visible={this.state.ModuleActivity}
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
