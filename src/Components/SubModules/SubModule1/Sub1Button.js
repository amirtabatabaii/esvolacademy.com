import React from "react";
import { Button } from "react-bootstrap";

function Sub1Button(props) {
  return (
    <Button
      className={props.className}
      size={props.size}
      disabled={props.ifCondition ? props.IfAction : props.elseAction}
      onClick={() => props.onClick("sub2")}
    >
      {props.text}
    </Button>
  );
}

export default Sub1Button;
