import React from "react";

function MenuItem(props) {
  return (
    <div key={props.key} onClick={props.onClick}>
      {props.SubModuleName}
    </div>
  );
}

export default MenuItem;
