import React from "react";

import "./NewMenu.css";
import TranslateText from "../Translate/TranslateText";

function NewMenu(props) {
  return (
    <nav role='navigation'>
      <div id='menuToggle'>
        <input type='checkbox' />

        <span></span>
        <span style={{ width: "70%", left: "30%" }}></span>
        <span></span>

        <ul id='menu'>
          <li>
            <a href='/'>
              <TranslateText txt={props.MenuItem1} />
            </a>
          </li>

          <li>
            <a href='/'>
              <TranslateText txt={props.MenuItem2} />
            </a>
          </li>

          <li>
            <a href='/'>
              <TranslateText txt={props.MenuItem3} />
            </a>
          </li>

          <li>
            <a href='/'>
              <TranslateText txt={props.MenuItem4} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default NewMenu;
