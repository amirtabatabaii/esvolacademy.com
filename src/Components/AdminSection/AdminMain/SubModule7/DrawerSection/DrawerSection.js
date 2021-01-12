import React, { Component } from "react";
import { Drawer } from "antd";
import LanguageSelector from "../../../../Translate/LanguageSelector";

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
      adminActiveModule,
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
            <button onClick={onClose}>
              {"Close " + DrawerType + " Section"}
            </button>
          </div>
        }
      >
        <div className='m-auto'>
          {FltQst.type === "MultipleChoice" && (
            <Multiple
              FltQst={FltQst}
              DrawerType={DrawerType}
              adminActiveModule={adminActiveModule}
            />
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
      </Drawer>
    );
  }
}
export default DrawerSection;
