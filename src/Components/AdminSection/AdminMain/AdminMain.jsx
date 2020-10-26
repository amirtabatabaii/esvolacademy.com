import React, { Component } from "react";
import { Layout } from "antd";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import SubModuleList from "./SubModuleList";
import IntroductionVideo from "./SubModule1/IntroductionVideo";
import CourseVideo from "./SubModule2/CourseVideo";
import InteractiveTool from "./SubModule3/InteractiveTool";
import ExpertVideo from "./SubModule4/ExpertVideo";
import Reading from "./SubModule5/Reading";
import CaseStudy from "./SubModule6/CaseStudy";
import QuizAddQuestions from "./SubModule7/QuizAddQuestions";

import "./AdminMain.css";
import HeaderBreadcrumb from "./HeaderBreadcrumb";
import QuestionsSetting from "./QuestionsSetting/QuestionsSetting";
import QuizAdmin from "./SubModule7/QuizAdmin";

const { Content } = Layout;

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
          <Content style={{ margin: "0 16px" }}>
            <HeaderBreadcrumb
              adminActiveModule={adminActiveModule}
              adminActiveSubModule={adminActiveSubModule}
            />

            <div
              className='site-layout-background'
              style={{ padding: 24, minHeight: 360 }}
            >
              {adminActiveSubModule === SubModule1Name && (
                <IntroductionVideo
                  adminActiveSubModule={adminActiveSubModule}
                  adminActiveModule={adminActiveModule}
                />
              )}

              {adminActiveSubModule === SubModule2Name && (
                <CourseVideo
                  adminActiveSubModule={adminActiveSubModule}
                  adminActiveModule={adminActiveModule}
                />
              )}

              {adminActiveSubModule === SubModule3Name && (
                <InteractiveTool
                  adminActiveSubModule={adminActiveSubModule}
                  adminActiveModule={adminActiveModule}
                />
              )}

              {adminActiveSubModule === SubModule4Name && (
                <Reading
                  adminActiveSubModule={adminActiveSubModule}
                  adminActiveModule={adminActiveModule}
                />
              )}

              {adminActiveSubModule === SubModule5Name && (
                <CaseStudy
                  adminActiveSubModule={adminActiveSubModule}
                  adminActiveModule={adminActiveModule}
                />
              )}

              {adminActiveSubModule === SubModule6Name && (
                <ExpertVideo
                  adminActiveSubModule={adminActiveSubModule}
                  adminActiveModule={adminActiveModule}
                />
              )}

              {adminActiveSubModule === SubModule7Name && (
                <QuizAdmin
                  adminActiveSubModule={adminActiveSubModule}
                  adminActiveModule={adminActiveModule}
                />
              )}

              {adminActiveSubModule === "Questions Setting" && (
                <QuestionsSetting
                  adminActiveSubModule={"Quiz"}
                  adminActiveModule={adminActiveModule}
                />
              )}
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
