import React from "react";
import { Image } from "react-bootstrap";
import esvol1 from "../../assets/img/user/avatar/1.png";
import esvol2 from "../../assets/img/user/avatar/2.png";
import esvol3 from "../../assets/img/user/avatar/3.png";
import esvol4 from "../../assets/img/user/avatar/4.png";
import esvol5 from "../../assets/img/user/avatar/5.png";
import esvol6 from "../../assets/img/user/avatar/6.png";
import esvol7 from "../../assets/img/user/avatar/7.png";
import esvol8 from "../../assets/img/user/avatar/8.png";
import esvol9 from "../../assets/img/user/avatar/9.png";
import esvol10 from "../../assets/img/user/avatar/10.png";

function UserAvatarView(props) {
  const { avatarNo } = props;

  //   src='https://kastanjetextile.com/esvolAvatars/esvol1.png'

  return (
    <>
      {avatarNo === "1" && (
        <Image src={esvol1} alt='esvol' className='avatar-box' />
      )}

      {avatarNo === "2" && (
        <Image src={esvol2} alt='esvol' className='avatar-box' />
      )}

      {avatarNo === "3" && (
        <Image src={esvol3} alt='esvol' className='avatar-box' />
      )}

      {avatarNo === "4" && (
        <Image src={esvol4} alt='esvol' className='avatar-box' />
      )}

      {avatarNo === "5" && (
        <Image src={esvol5} alt='esvol' className='avatar-box' />
      )}

      {avatarNo === "6" && (
        <Image src={esvol6} alt='esvol' className='avatar-box' />
      )}

      {avatarNo === "7" && (
        <Image src={esvol7} alt='esvol' className='avatar-box' />
      )}

      {avatarNo === "8" && (
        <Image src={esvol8} alt='esvol' className='avatar-box' />
      )}

      {avatarNo === "9" && (
        <Image src={esvol9} alt='esvol' className='avatar-box' />
      )}

      {avatarNo === "10" && (
        <Image src={esvol10} alt='esvol' className='avatar-box' />
      )}
    </>
  );
}
export default UserAvatarView;
