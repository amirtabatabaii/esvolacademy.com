import React from "react";
import MenuItem from "../Translate/MenuBar/MenuItem";

export default ({ close }) => (
  <div className='menu'>
    <ul>
      <li className='m-auto' onClick={close}>
        <MenuItem MenuItemText='MenuItem-Hakkimizda' />
      </li>

      <li className='m-auto' onClick={close}>
        <MenuItem MenuItemText='MenuItem-GirisYap' />
      </li>

      <li className='m-auto' onClick={close}>
        <MenuItem MenuItemText='MenuItem-Iletisim' />
      </li>

      <li className='m-auto' onClick={close}>
        <MenuItem MenuItemText='MenuItem-Esvol' />
      </li>
    </ul>
  </div>
);
