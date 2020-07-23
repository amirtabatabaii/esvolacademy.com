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
          <a href='/'>
            <li>
              <TranslateText txt={props.MenuItem1} />
            </li>
          </a>

          <a href='/'>
            <li>
              <TranslateText txt={props.MenuItem2} />
            </li>
          </a>

          <a href='/'>
            <li>
              <TranslateText txt={props.MenuItem3} />
            </li>
          </a>

          <a href='/'>
            <li>
              <TranslateText txt={props.MenuItem4} />
            </li>
          </a>
        </ul>
      </div>
    </nav>
  );
}
export default NewMenu;
