import React from "react";
import FooterItem from "../Translate/Footer/FooterItem";

function Li(props) {
  return (
    <li className='list-group-item bg-transparent border-0 p-0 mb-2'>
      <a href={props.href} target={props.target}>
        <FooterItem FooterItemText={props.FooterItemText} />
      </a>
    </li>
  );
}
export default Li;
