import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  //   DesktopOutlined,
  //   PieChartOutlined,
  //   FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

import "./AdminMain.css";

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

class AdminMain extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className='logo' />
          <Menu theme='dark' defaultSelectedKeys={["1"]} mode='inline'>
            {/* <Menu.Item key='1' icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key='2' icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item> */}
            <SubMenu key='sub1' icon={<UserOutlined />} title='Module 1'>
              <Menu.Item key='3'>Introduction Video</Menu.Item>
              <Menu.Item key='4'>Course Video</Menu.Item>
              <Menu.Item key='6'>Interactive Tool</Menu.Item>
              <Menu.Item key='7'>Expert Video</Menu.Item>
              <Menu.Item key='8'>Reading</Menu.Item>
              <Menu.Item key='9'>Case Study</Menu.Item>
              <Menu.Item key='10'>Quiz</Menu.Item>
            </SubMenu>

            <SubMenu key='sub2' icon={<TeamOutlined />} title='Module 2'>
              <Menu.Item key='11'>Introduction Video</Menu.Item>
              <Menu.Item key='12'>Course Video</Menu.Item>
              <Menu.Item key='13'>Interactive Tool</Menu.Item>
              <Menu.Item key='14'>Expert Video</Menu.Item>
              <Menu.Item key='15'>Reading</Menu.Item>
              <Menu.Item key='16'>Case Study</Menu.Item>
              <Menu.Item key='17'>Quiz</Menu.Item>
            </SubMenu>

            <SubMenu key='sub3' icon={<TeamOutlined />} title='Module 3'>
              <Menu.Item key='18'>Introduction Video</Menu.Item>
              <Menu.Item key='19'>Course Video</Menu.Item>
              <Menu.Item key='20'>Interactive Tool</Menu.Item>
              <Menu.Item key='21'>Expert Video</Menu.Item>
              <Menu.Item key='22'>Reading</Menu.Item>
              <Menu.Item key='23'>Case Study</Menu.Item>
              <Menu.Item key='24'>Quiz</Menu.Item>
            </SubMenu>

            <SubMenu key='sub4' icon={<TeamOutlined />} title='Module 4'>
              <Menu.Item key='25'>Introduction Video</Menu.Item>
              <Menu.Item key='26'>Course Video</Menu.Item>
              <Menu.Item key='27'>Interactive Tool</Menu.Item>
              <Menu.Item key='28'>Expert Video</Menu.Item>
              <Menu.Item key='29'>Reading</Menu.Item>
              <Menu.Item key='30'>Case Study</Menu.Item>
              <Menu.Item key='31'>Quiz</Menu.Item>
            </SubMenu>

            <SubMenu key='sub5' icon={<TeamOutlined />} title='Module 5'>
              <Menu.Item key='32'>Introduction Video</Menu.Item>
              <Menu.Item key='33'>Course Video</Menu.Item>
              <Menu.Item key='34'>Interactive Tool</Menu.Item>
              <Menu.Item key='35'>Expert Video</Menu.Item>
              <Menu.Item key='36'>Reading</Menu.Item>
              <Menu.Item key='37'>Case Study</Menu.Item>
              <Menu.Item key='38'>Quiz</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className='site-layout'>
          <Header className='site-layout-background' style={{ padding: 0 }}>
            <h3 className='p-3'>Header Title</h3>
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              {/* <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
            </Breadcrumb>
            <div
              className='site-layout-background'
              style={{ padding: 24, minHeight: 360 }}
            >
              Bill is a cat.
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

export default AdminMain;
