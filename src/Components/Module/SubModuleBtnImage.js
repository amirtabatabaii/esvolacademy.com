import React from "react";
import { Image } from "react-bootstrap";

function SubModuleBtnImage(props) {
  // const handleOnClick = (ActiveSubName) => {
  //   console.log("ActiveSubName : ", ActiveSubName);
  // };

  return (
    <Image
      src={
        props.userActiveSubModule === props.subName
          ? props.activeImage
          : props.normalImage
      }
      fluid
      width='60px'
      alt=''
      className={`${
        props.userActiveSubModule === props.subName
          ? `${props.userActiveModule}-ActiveSubStyle`
          : `${props.userActiveModule}-NormalSubStyle`
      }`}
      onClick={() => props.onClick(props.subName)}
    />
  );
}

export default SubModuleBtnImage;
