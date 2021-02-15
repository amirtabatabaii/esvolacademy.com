import React, { Component } from "react";
import { Drawer } from "antd";
import { Button } from "react-bootstrap";

class DrawerModuleActivity extends Component {
  render() {
    const { onClose, visible } = this.props;

    return (
      <div>
        <Drawer
          title={<h4>User Module Activity</h4>}
          width={1300}
          onClose={onClose}
          visible={visible}
          bodyStyle={{ paddingBottom: 80 }}
          placement='right'
          footer={
            <div
              style={{
                textAlign: "center",
              }}
            >
              <Button onClick={onClose}>
                {"Close Module-Activity Section"}
              </Button>
            </div>
          }
        >
          <h2 className='p-5 bg-info'>Module Activity</h2>
        </Drawer>
      </div>
    );
  }
}
export default DrawerModuleActivity;
