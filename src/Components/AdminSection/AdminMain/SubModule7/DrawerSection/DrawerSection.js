import React, { Component } from "react";
import { Drawer } from "antd";
import LanguageSelector from "../../../../Translate/LanguageSelector";
import { Form } from "react-bootstrap";

import Multiple from "./Multiple";
import Filling from "./Filling";
import Blank from "./Blank";
import Boolean from "./Boolean";

class DrawerSection extends Component {
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
              {FltQst.type === "MultipleChoice" && (
                <Multiple FltQst={FltQst} DrawerType={DrawerType} />
              )}

              {FltQst.type === "Boolean" && (
                <Boolean FltQst={FltQst} DrawerType={DrawerType} />
              )}

              {FltQst.type === "Filling" && (
                <Filling FltQst={FltQst} DrawerType={DrawerType} />
              )}

              {FltQst.type === "Blank" && (
                <Blank FltQst={FltQst} DrawerType={DrawerType} />
              )}
            </div>
          }
        </Form>
      </Drawer>
    );
  }
}
export default DrawerSection;
