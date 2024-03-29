import React, { Component } from "react";
import TranslateText from "../Translate/TranslateText";

import { Row } from "react-bootstrap";
import { Modal } from "antd";

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

class AvatarChange extends Component {
  render() {
    const {
      AvatarVisible,
      handleAvatarOk,
      handleCancel,
      imageNum,
      handleImageSelect,
    } = this.props;

    return (
      <Modal
        title={<TranslateText txt='Avatar-Setting' />} //'Setting...'
        visible={AvatarVisible}
        centered
        // onOk={ handleSettingOk}
        onCancel={handleCancel}
        footer={[
          <div className='text-center'>
            <button
              key='back'
              className='save-Btn m-3'
              onClick={handleAvatarOk}
            >
              <TranslateText txt='User-SaveEdit' />
            </button>

            <button
              key='submit'
              className='save-Btn m-3'
              onClick={handleCancel}
            >
              <TranslateText txt='User-CancelEdit' />
            </button>
          </div>,
        ]}
      >
        <Row className='w-100 m-auto'>
          <img
            onClick={() => handleImageSelect("1")}
            className={
              imageNum === "1" ? "m-1 border avatar-img" : "m-1 avatar-img"
            }
            // src='https://kastanjetextile.com/esvolAvatars/esvol1.png'
            src={esvol1}
            alt='esvol1'
            width={85}
          />

          <img
            onClick={() => handleImageSelect("2")}
            className={
              imageNum === "2" ? "m-1 border avatar-img" : "m-1 avatar-img"
            }
            //src='https://kastanjetextile.com/esvolAvatars/esvol2.png'
            src={esvol2}
            alt='esvol1'
            width={85}
          />

          <img
            onClick={() => handleImageSelect("3")}
            className={
              imageNum === "3" ? "m-1 border avatar-img" : "m-1 avatar-img"
            }
            // src='https://kastanjetextile.com/esvolAvatars/esvol3.png'
            src={esvol3}
            alt='esvol1'
            width={85}
          />

          <img
            onClick={() => handleImageSelect("4")}
            className={
              imageNum === "4" ? "m-1 border avatar-img" : "m-1 avatar-img"
            }
            //src='https://kastanjetextile.com/esvolAvatars/esvol4.png'
            src={esvol4}
            alt='esvol1'
            width={85}
          />

          <img
            onClick={() => handleImageSelect("5")}
            className={
              imageNum === "5" ? "m-1 border avatar-img" : "m-1 avatar-img"
            }
            //src='https://kastanjetextile.com/esvolAvatars/esvol5.png'
            src={esvol5}
            alt='esvol1'
            width={85}
          />
          {/* </Row>

        <Row className='w-100'> */}
          <img
            onClick={() => handleImageSelect("6")}
            className={
              imageNum === "6" ? "m-1 border avatar-img" : "m-1 avatar-img"
            }
            //src='https://kastanjetextile.com/esvolAvatars/esvol6.png'
            src={esvol6}
            alt='esvol1'
            width={85}
          />

          <img
            onClick={() => handleImageSelect("7")}
            className={
              imageNum === "7" ? "m-1 border avatar-img" : "m-1 avatar-img"
            }
            //src='https://kastanjetextile.com/esvolAvatars/esvol7.png'
            src={esvol7}
            alt='esvol1'
            width={85}
          />

          <img
            onClick={() => handleImageSelect("8")}
            className={
              imageNum === "8" ? "m-1 border avatar-img" : "m-1 avatar-img"
            }
            // src='https://kastanjetextile.com/esvolAvatars/esvol8.png'
            src={esvol8}
            alt='esvol1'
            width={85}
          />

          <img
            onClick={() => handleImageSelect("9")}
            className={
              imageNum === "9" ? "m-1 border avatar-img" : "m-1 avatar-img"
            }
            //src='https://kastanjetextile.com/esvolAvatars/esvol9.png'
            src={esvol9}
            alt='esvol1'
            width={85}
          />

          <img
            onClick={() => handleImageSelect("10")}
            className={
              imageNum === "10" ? "m-1 border avatar-img" : "m-1 avatar-img"
            }
            //src='https://kastanjetextile.com/esvolAvatars/esvol10.png'
            src={esvol10}
            alt='esvol1'
            width={85}
          />
        </Row>

        {/* <Form
          className='text-center'
          id='LoginForm'
          // onSubmit={handleSubmit}
        >
           
        </Form> */}
      </Modal>
    );
  }
}

export default AvatarChange;
