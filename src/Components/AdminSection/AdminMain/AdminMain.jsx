import React, { Component } from "react";
import { Layout, Breadcrumb } from "antd";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

// import { Menu } from "antd";
// import { FolderOutlined } from "@ant-design/icons";

import "./AdminMain.css";
import SubModuleList from "./SubModuleList";

const { Header, Content } = Layout;
// const { Sider } = Layout;
// const { SubMenu } = Menu;

class AdminMain extends Component {
  state = {
    collapsed: false,
    adminActiveModule: "",
    adminActiveSubModule: "",
  };

  onCollapse = (collapsed) => {
    // console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
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
              <Breadcrumb.Item>{this.props.adminActiveModule}</Breadcrumb.Item>
              <Breadcrumb.Item>
                {this.props.adminActiveSubModule}
              </Breadcrumb.Item>
            </Breadcrumb>
            <div
              className='site-layout-background'
              style={{ padding: 24, minHeight: 360 }}
            >
              this.state.selectedKeys
            </div>
          </Content>
          {/* <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer> */}
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  adminActiveModule: state.adminActiveModule,
  adminActiveSubModule: state.adminActiveSubModule,
});

export default connect(mapStateToProps, {})(withRouter(AdminMain));
