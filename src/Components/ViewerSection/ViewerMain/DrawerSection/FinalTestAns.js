import React, { Component } from "react";
import { Drawer } from "antd";
import { Button } from "react-bootstrap";

class DrawerFinalTestAns extends Component {
  render() {
    const { onClose, visible } = this.props;

    return (
      <div>
        <Drawer
          title={<h4>User Final-Test</h4>}
          width={1280}
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
              <Button onClick={onClose}>{"Close Final-Test Section"}</Button>
            </div>
          }
        >
          <h2 className='p-5 bg-info'>Final Test</h2>
        </Drawer>
      </div>
    );
  }
}
export default DrawerFinalTestAns;
