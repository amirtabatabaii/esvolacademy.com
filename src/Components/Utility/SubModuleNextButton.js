import React from "react";
import TranslateText from "../Translate/TranslateText";

function SubModuleNextButton(props) {
  return (
    <button
      className={props.className}
      disabled={props.disabled}
      onClick={
        props.condition
          ? props.EducationWithTasks
            ? () => props.onClick(props.NormalNextSubModule)
            : () => props.onClick(props.SubModule6Name)
          : () => props.onClick(props.NormalNextSubModule)
      }
    >
      <TranslateText txt={props.txt} />
    </button>
  );
}

export default SubModuleNextButton;
