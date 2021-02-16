import React, { Component } from "react";
import { Drawer } from "antd";
import { Button } from "react-bootstrap";
import { Collapse } from "antd";

const { Panel } = Collapse;
// const Modules = [
//   { name: "Module1", color: "" },
//   { name: "Module2", color: "" },
//   { name: "Module3", color: "" },
//   { name: "Module4", color: "" },
//   { name: "Module5", color: "" },
// ];

class DrawerModuleActivity extends Component {
  render() {
    const { onClose, visible } = this.props;

    return (
      <div>
        <Drawer
          title={<h4>User Module Activity</h4>}
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
              <Button onClick={onClose}>
                {"Close Module-Activity Section"}
              </Button>
            </div>
          }
        >
          <Collapse accordion defaultActiveKey='1'>
            <Panel
              header='Module1'
              key='1'
              style={{ backgroundColor: "#fad8c8" }}
            >
              <Collapse accordion>
                <Panel header='Interactive Tools' key='1'>
                  <h5>InteractiveTools Module1</h5>
                </Panel>

                <Panel header='Quiz' key='2'>
                  <h5>Quiz Module1</h5>
                </Panel>
              </Collapse>
            </Panel>

            <Panel
              header='Module2'
              key='2'
              style={{ backgroundColor: "#fac8c9" }}
            >
              <Collapse accordion>
                <Panel header='Interactive Tools' key='1'>
                  <h5>InteractiveTools Module2</h5>
                </Panel>

                <Panel header='Quiz' key='2'>
                  <h5>Quiz Module2</h5>
                </Panel>
              </Collapse>
            </Panel>

            <Panel
              header='Module3'
              key='3'
              style={{ backgroundColor: "#f6fc95" }}
            >
              <Collapse accordion>
                <Panel header='Interactive Tools' key='1'>
                  <h5>InteractiveTools Module3</h5>
                </Panel>

                <Panel header='Quiz' key='2'>
                  <h5>Quiz Module3</h5>
                </Panel>
              </Collapse>
            </Panel>

            <Panel
              header='Module4'
              key='4'
              style={{ backgroundColor: "#eccffa" }}
            >
              <Collapse accordion>
                <Panel header='Interactive Tools' key='1'>
                  <h5>InteractiveTools Module4</h5>
                </Panel>

                <Panel header='Quiz' key='2'>
                  <h5>Quiz Module4</h5>
                </Panel>
              </Collapse>
            </Panel>

            <Panel
              header='Module5'
              key='5'
              style={{ backgroundColor: "#bbd8fa" }}
            >
              <Collapse accordion>
                <Panel header='Interactive Tools' key='1'>
                  <h5>InteractiveTools Module5</h5>
                </Panel>

                <Panel header='Quiz' key='2'>
                  <h5>Quiz Module5</h5>
                </Panel>
              </Collapse>
            </Panel>
          </Collapse>
        </Drawer>
      </div>
    );
  }
}
export default DrawerModuleActivity;
