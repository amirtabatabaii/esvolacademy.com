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
      // className={`${props.activeSubModule}-ActiveSubStyle p-1 m-1`}
      // style={{
      //   boxShadow:
      //     props.activeSubModule === props.subName
      //       ? "inset 5px 5px 8px #c16442, inset -5px -5px 8px #ff9a64"
      //       : "-5px -5px 8px #ff9a64, 5px 5px 8px #c16442",
      //   borderRadius: "10px",
      // }}
    />
  );
}

export default SubModuleBtnImage;
