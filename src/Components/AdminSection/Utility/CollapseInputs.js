import React from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse } from "antd";

const { Panel } = Collapse;

function CollapseInputs(props) {
  return (
    <Collapse
      bordered={false}
      defaultActiveKey={["1"]}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
      className='site-collapse-custom-collapse bg-white'
    >
      <Panel
        header={props.header}
        className='site-collapse-custom-panel'
        key='1'
      >
        {props.PanelContent}
      </Panel>
    </Collapse>
  );
}

export default CollapseInputs;
