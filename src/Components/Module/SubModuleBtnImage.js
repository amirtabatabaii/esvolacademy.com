import React from "react";
import { Image } from "react-bootstrap";
import { Tooltip } from "antd";
import TranslateText from "../Translate/TranslateText";

function SubModuleBtnImage(props) {
  return (
    <Tooltip
      title={<TranslateText txt={props.hoverTitle} />}
      color={
        props.userActiveModule === "Module1"
          ? "#fe7635"
          : props.userActiveModule === "Module2"
          ? "#d61f23"
          : props.userActiveModule === "Module3"
          ? "#c8d503"
          : props.userActiveModule === "Module4"
          ? "#77478f"
          : props.userActiveModule === "Module5"
          ? "#53739b"
          : null
      }
      placement='top'
    >
      <Image
        src={
          props.userActiveSubModule === props.subName
            ? props.activeImage
            : props.normalImage
        }
        fluid
        width='40px'
        alt='esvol'
        className={`${
          props.userActiveSubModule === props.subName
            ? `${props.userActiveModule}-ActiveSubStyle`
            : `${props.userActiveModule}-NormalSubStyle`
        }`}
        // onClick={props.EducationWithTasks && (() => props.onClick(props.subName))}
        onClick={() => props.onClick(props.subName)}
      />
    </Tooltip>
  );
}

export default SubModuleBtnImage;
