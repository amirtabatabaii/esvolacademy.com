import React from "react";
import { Layout, Breadcrumb } from "antd";

const { Header } = Layout;

function HeaderBreadcrumb(props) {
  return (
    <>
      <Header className='site-layout-background' style={{ padding: 0 }}>
        <h3 className='p-3'>ESVOL Administrator Page</h3>
      </Header>

      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>
          <b>
            {props.adminActiveModule === "" ? "--" : props.adminActiveModule}
          </b>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <b>
            {props.adminActiveSubModule === ""
              ? "--"
              : props.adminActiveSubModule}
          </b>
        </Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
}
export default HeaderBreadcrumb;
