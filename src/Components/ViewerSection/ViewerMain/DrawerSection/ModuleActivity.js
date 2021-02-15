import React, { Component } from "react";
import { Drawer } from "antd";
import { Button } from "react-bootstrap";
import { Collapse } from "antd";

const { Panel } = Collapse;

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
              style={{ backgroundColor: "#fac2a7" }}
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
              style={{ backgroundColor: "#faa5a7" }}
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
              style={{ backgroundColor: "#dda2fa" }}
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
              style={{ backgroundColor: "#9cc5f7" }}
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
