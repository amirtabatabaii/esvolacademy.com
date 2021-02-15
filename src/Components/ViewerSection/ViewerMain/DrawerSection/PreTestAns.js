import React, { Component } from "react";
import { Drawer } from "antd";
import { Button } from "react-bootstrap";

class DrawerPreTestAns extends Component {
  render() {
    const { onClose, visible } = this.props;

    return (
      <div>
        <Drawer
          title={<h4>User Pre-Test</h4>}
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
              <Button onClick={onClose}>{"Close Pre-Test Section"}</Button>
            </div>
          }
        >
          <h2 className='p-5 bg-info'>Pre Test</h2>
        </Drawer>
      </div>
    );
  }
}
export default DrawerPreTestAns;
