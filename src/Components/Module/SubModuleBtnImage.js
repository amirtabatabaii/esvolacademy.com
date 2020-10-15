import React from "react";
import { Image } from "react-bootstrap";

function SubModuleBtnImage(props) {
  return (
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
  );
}

export default SubModuleBtnImage;
