import React, { Component } from "react";
import { Layout, Breadcrumb } from "antd";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import SubModuleList from "./SubModuleList";
import IntroductionVideo from "./SubModule1/IntroductionVideo";
import CourseVideo from "./SubModule2/CourseVideo";
import InteractiveTool from "./SubModule3/InteractiveTool";
import ExpertVideo from "./SubModule4/ExpertVideo";
import Reading from "./SubModule5/Reading";
import CaseStudy from "./SubModule6/CaseStudy";
import Quiz from "./SubModule7/Quiz";

import "./AdminMain.css";

const { Header, Content } = Layout;

class AdminMain extends Component {
  state = {
    collapsed: false,
    adminActiveModule: "",
    adminActiveSubModule: "",
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    const {
      adminActiveModule,
      adminActiveSubModule,
      SubModule1Name,
      SubModule2Name,
      SubModule3Name,
      SubModule4Name,
      SubModule5Name,
      SubModule6Name,
      SubModule7Name,
    } = this.props;

    return (
      <Layout style={{ minHeight: "100vh" }}>
        <SubModuleList
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        />
        <Layout className='site-layout'>
          <Header className='site-layout-background' style={{ padding: 0 }}>
            <h3 className='p-3'>ESVOL Administrator Page</h3>
          </Header>

          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>
                {adminActiveModule === "" ? "--" : adminActiveModule}
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                {adminActiveSubModule === "" ? "--" : adminActiveSubModule}
              </Breadcrumb.Item>
            </Breadcrumb>
            <div
              className='site-layout-background'
              style={{ padding: 24, minHeight: 360 }}
            >
              {adminActiveSubModule === SubModule1Name ? (
                <IntroductionVideo
                  adminActiveSubModule={adminActiveSubModule}
                />
              ) : null}

              {adminActiveSubModule === SubModule2Name ? (
                <CourseVideo adminActiveSubModule={adminActiveSubModule} />
              ) : null}

              {adminActiveSubModule === SubModule3Name ? (
                <InteractiveTool adminActiveSubModule={adminActiveSubModule} />
              ) : null}

              {adminActiveSubModule === SubModule4Name ? (
                <>
                  <ExpertVideo adminActiveSubModule={adminActiveSubModule} />
                  <ExpertVideo adminActiveSubModule={adminActiveSubModule} />
                </>
              ) : null}

              {adminActiveSubModule === SubModule5Name ? (
                <Reading adminActiveSubModule={adminActiveSubModule} />
              ) : null}

              {adminActiveSubModule === SubModule6Name ? (
                <CaseStudy adminActiveSubModule={adminActiveSubModule} />
              ) : null}

              {adminActiveSubModule === SubModule7Name ? (
                <Quiz adminActiveSubModule={adminActiveSubModule} />
              ) : null}
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  adminActiveModule: state.adminActiveModule,
  adminActiveSubModule: state.adminActiveSubModule,
  SubModule1Name: state.SubModule1Name,
  SubModule2Name: state.SubModule2Name,
  SubModule3Name: state.SubModule3Name,
  SubModule4Name: state.SubModule4Name,
  SubModule5Name: state.SubModule5Name,
  SubModule6Name: state.SubModule6Name,
  SubModule7Name: state.SubModule7Name,
});

export default connect(mapStateToProps, {})(withRouter(AdminMain));
