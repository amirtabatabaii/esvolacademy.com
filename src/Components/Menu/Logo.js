import React from "react";
import { Image } from "react-bootstrap";

import EsvolLogo from "../../assets/img/logo.png";

function Logo() {
  return (
    <div className='pl-5 pt-4'>
      <Image src={EsvolLogo} alt='esvol' />
    </div>
  );
}

export default Logo;
