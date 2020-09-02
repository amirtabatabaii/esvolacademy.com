import React from "react";
import TranslateText from "../../Translate/TranslateText";
// import { Button } from "react-bootstrap";

function Sub7Button(props) {
  return (
    <button
      className={props.className}
      disabled={props.disabled}
      // size={props.size}
      // disabled={props.ifCondition ? props.IfAction : props.elseAction}
      onClick={() => props.onClick("sub7")}
    >
      <TranslateText txt={props.txt} />
    </button>
  );
}

export default Sub7Button;
