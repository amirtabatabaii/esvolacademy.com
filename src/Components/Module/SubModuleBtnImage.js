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
      // width='20%'
      width='70px'
      className={`${
        props.activeSubModule === props.subName
          ? `${props.activeModule}-ActiveSubStyle p-1 m-1`
          : `${props.activeModule}-NormalSubStyle p-1 m-1`
      }`}
    />
  );
}

export default SubModuleBtnImage;
