import React from "react";
import TranslateText from "../Translate/TranslateText";

function MenuItems(props) {
  return (
    <div className='menu'>
      <ul>
        <li className='m-auto' onClick={props.close}>
          <TranslateText txt={props.MenuItem1} />
        </li>

        <li className='m-auto' onClick={props.close}>
          <TranslateText txt={props.MenuItem2} />
        </li>

        <li className='m-auto' onClick={props.close}>
          <TranslateText txt={props.MenuItem3} />
        </li>

        <li className='m-auto' onClick={props.close}>
          <TranslateText txt={props.MenuItem4} />
        </li>
      </ul>
    </div>
  );
}

export default MenuItems;
