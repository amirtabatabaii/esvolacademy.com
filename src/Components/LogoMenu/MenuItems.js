import React from "react";
import TranslateText from "../Translate/TranslateText";

export default ({ close }) => (
  <div className='menu'>
    <ul>
      <li className='m-auto' onClick={close}>
        <TranslateText txt='MenuItem-Hakkimizda' />
      </li>

      <li className='m-auto' onClick={close}>
        <TranslateText txt='MenuItem-GirisYap' />
      </li>

      <li className='m-auto' onClick={close}>
        <TranslateText txt='MenuItem-Iletisim' />
      </li>

      <li className='m-auto' onClick={close}>
        <TranslateText txt='MenuItem-Esvol' />
      </li>
    </ul>
  </div>
);
