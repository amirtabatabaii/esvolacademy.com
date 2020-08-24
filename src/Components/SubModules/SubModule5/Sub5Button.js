import React from "react";
import TranslateText from "../../Translate/TranslateText";

function Sub5Button(props) {
  return (
    <button
      className={props.className}
      disabled={props.disabled}
      // size={props.size}
      onClick={() => props.onClick("sub6")}
    >
      <TranslateText txt={props.txt} />
    </button>
  );
}

export default Sub5Button;
