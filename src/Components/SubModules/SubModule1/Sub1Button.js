import React from "react";
import TranslateText from "../../Translate/TranslateText";
// import { Button } from "react-bootstrap";

function Sub1Button(props) {
  return (
    <button
      className={props.className}
      // size={props.size}
      // disabled={props.ifCondition ? props.IfAction : props.elseAction}
      onClick={() => props.onClick("sub2")}
    >
      <TranslateText txt={props.txt} />
    </button>
  );
}

export default Sub1Button;
