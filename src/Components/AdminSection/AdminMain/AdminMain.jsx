import React, { Component } from "react";
import { Layout } from "antd";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import SubModuleList from "./SubModuleList";

import "./AdminMain.css";
import HeaderBreadcrumb from "./HeaderBreadcrumb";
import QuizAdmin from "./SubModule7/QuizAdmin";
import TableSetting from "./QuestionsSetting/TableSetting";
import IntroductionVideoMain from "./SubModule1/IntroductionVideoMain";
import InteractiveMain from "./SubModule3/InteractiveMain";
import ReadingMain from "./SubModule5/ReadingMain";
import CaseStudyMain from "./SubModule6/CaseStudyMain";

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
                <IntroductionVideoMain
                  adminActiveSubModule={adminActiveSubModule}
                  adminActiveModule={adminActiveModule}
                  subModuleType='IntroductionVideo'
                />
              )}

              {adminActiveSubModule === SubModule2Name && (
                <IntroductionVideoMain
                  adminActiveSubModule={adminActiveSubModule}
                  adminActiveModule={adminActiveModule}
                  subModuleType='CourseVideo'
                />
              )}

              {adminActiveSubModule === SubModule3Name && (
                <InteractiveMain
                  adminActiveSubModule={adminActiveSubModule}
                  adminActiveModule={adminActiveModule}
                />
              )}

              {adminActiveSubModule === SubModule4Name && (
                <ReadingMain
                  adminActiveSubModule={adminActiveSubModule}
                  adminActiveModule={adminActiveModule}
                />
              )}

              {adminActiveSubModule === SubModule5Name && (
                <CaseStudyMain
                  adminActiveSubModule={adminActiveSubModule}
                  adminActiveModule={adminActiveModule}
                />
              )}

              {adminActiveSubModule === SubModule6Name && (
                <IntroductionVideoMain
                  adminActiveSubModule={adminActiveSubModule}
                  adminActiveModule={adminActiveModule}
                  subModuleType='ExpertVideo'
                />
              )}

              {adminActiveSubModule === SubModule7Name && (
                <QuizAdmin
                  adminActiveSubModule={adminActiveSubModule}
                  adminActiveModule={adminActiveModule}
                />
              )}

              {adminActiveSubModule === "Questions Setting" && (
                <TableSetting
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
