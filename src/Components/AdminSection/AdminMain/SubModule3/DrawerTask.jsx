import React, { Component } from "react";
import { Drawer } from "antd";
import { Form } from "react-bootstrap";

class DrawerTask extends Component {
  render() {
    const {
      title,
      width,
      onClose,
      visible,
      placement,
      DrawerType,
      FltQst,
    } = this.props;

    return (
      <div>
        <Drawer
          // title={<LanguageSelector />}
          title={title}
          width={width}
          onClose={onClose}
          visible={visible}
          bodyStyle={{ paddingBottom: 80 }}
          placement={placement}
          footer={
            <div
              style={{
                textAlign: "center",
              }}
            >
              <button>{DrawerType}</button>
            </div>
          }
        >
          <Form id='InsertForm' className='text-left'>
            {/* onSubmit={handleSubmit}> */}
            {
              <div className='m-auto'>
                <h5>DrawerTask</h5>
              </div>
            }
          </Form>
        </Drawer>
      </div>
    );
  }
}

export default DrawerTask;
