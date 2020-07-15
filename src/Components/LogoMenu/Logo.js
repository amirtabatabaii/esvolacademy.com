import React, { Fragment } from "react";
import Media from "react-media";
import { Image } from "react-bootstrap";
import EsvolLogo from "../../assets/img/logo.png";

function Logo() {
  return (
    <Media
      queries={{
        small: "(max-width: 599px)",
        medium: "(min-width: 600px) and (max-width: 1199px)",
        large: "(min-width: 1200px)",
      }}
    >
      {(matches) => (
        <Fragment>
          {matches.small && (
            <div className='pl-3 pt-4'>
              <Image src={EsvolLogo} alt='esvol' />
            </div>
          )}
          {matches.medium && (
            <div className='pl-5 pt-4'>
              <Image src={EsvolLogo} alt='esvol' />
            </div>
          )}
          {matches.large && (
            <div className='pl-5 pt-4'>
              <Image src={EsvolLogo} alt='esvol' />
            </div>
          )}
        </Fragment>
      )}
    </Media>
  );
}

export default Logo;
