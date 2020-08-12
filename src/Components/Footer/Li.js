import React from "react";
import TranslateText from "../Translate/TranslateText";

function Li(props) {
  return (
    <li className='list-group-item bg-transparent border-0 p-0 mb-2'>
      <a className='footer-a' href={props.href} target={props.target}>
        <TranslateText txt={props.FooterItemText} />
      </a>
    </li>
  );
}
export default Li;
