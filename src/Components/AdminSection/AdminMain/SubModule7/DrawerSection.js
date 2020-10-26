import React, { Component } from "react";
import { Drawer } from "antd";

class DrawerSection extends Component {
  render() {
    return (
      <Drawer
        title={this.props.title}
        width={this.props.width}
        onClose={this.props.onClose}
        visible={this.props.visible}
        bodyStyle={{ paddingBottom: 80 }}
        placement={this.props.placement}
        footer={
          <div
            style={{
              textAlign: "right",
            }}
          >
            {this.props.DrawerType}
          </div>
        }
      >
        <div> {this.props.DrawerType} </div>
      </Drawer>
    );
  }
}
export default DrawerSection;
