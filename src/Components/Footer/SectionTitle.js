import React from "react";
import TranslateText from "../Translate/TranslateText";

function SectionTitle(props) {
  return (
    <h5 className='mb-2'>
      <TranslateText txt={props.FooterItemText} />
    </h5>
  );
}
export default SectionTitle;
