import React from "react";
import { Image } from "react-bootstrap";

function SubModuleBtnImage(props) {
  return (
    <Image
      src={
        props.activeSubModule === props.subName
          ? props.activeImage
          : props.normalImage
      }
      fluid
      width='60px'
      className={`${
        props.activeSubModule === props.subName
          ? `${props.activeModule}-ActiveSubStyle`
          : `${props.activeModule}-NormalSubStyle`
      }`}
    />
  );
}

export default SubModuleBtnImage;
