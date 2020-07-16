import React from "react";
import Hakkimizda from "../Translate/MenuBar/Hakkimizda";
import GirisYap from "../Translate/MenuBar/GirisYap";
import Iletisim from "../Translate/MenuBar/Iletisim";
import Esvol from "../Translate/MenuBar/Esvol";

export default ({ close }) => (
  <div className='menu'>
    <ul>
      <li className='m-auto' onClick={close}>
        <Hakkimizda />
      </li>

      <li className='m-auto' onClick={close}>
        <GirisYap />
      </li>

      <li className='m-auto' onClick={close}>
        <Iletisim />
      </li>

      <li className='m-auto' onClick={close}>
        <Esvol />
      </li>
    </ul>
  </div>
);
