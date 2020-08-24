import React from "react";
import TranslateText from "../../Translate/TranslateText";

function Sub3Button(props) {
  return (
    <button
      className={props.className}
      disabled={props.disabled}
      // size={props.size}
      onClick={() => props.onClick("sub4")}
    >
      <TranslateText txt={props.txt} />
    </button>
  );
}

export default Sub3Button;
