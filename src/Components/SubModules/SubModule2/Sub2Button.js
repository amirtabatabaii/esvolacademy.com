import React from "react";
import TranslateText from "../../Translate/TranslateText";
// import { Button } from "react-bootstrap";

function Sub2Button(props) {
  return (
    <button
      className={props.className}
      disabled={props.disabled}
      // size={props.size}
      // disabled={props.ifCondition ? props.IfAction : props.elseAction}
      onClick={
        props.EducationWithTasks
          ? () => props.onClick("sub3")
          : () => props.onClick("sub6")
      }
    >
      <TranslateText txt={props.txt} />
    </button>
  );
}

export default Sub2Button;
