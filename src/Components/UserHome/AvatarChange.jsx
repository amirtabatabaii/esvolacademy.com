import React, { Component } from "react";
import TranslateText from "../Translate/TranslateText";

import TextField from "@material-ui/core/TextField";
import { Col, Form, Row } from "react-bootstrap";
import { ApiUrlMain2 } from "../Utility/ApiUrl";
import axios from "axios";
import { Switch, Modal } from "antd";
import { Link } from "react-router-dom";

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
            className={imageNum === "1" ? "m-1 border" : "m-1"}
            src='https://kastanjetextile.com/esvolAvatars/esvol1.png'
            alt='esvol1'
            width={85}
          />

          <img
            onClick={() => handleImageSelect("2")}
            className={imageNum === "2" ? "m-1 border" : "m-1"}
            src='https://kastanjetextile.com/esvolAvatars/esvol2.png'
            alt='esvol1'
            width={85}
          />

          <img
            onClick={() => handleImageSelect("3")}
            className={imageNum === "3" ? "m-1 border" : "m-1"}
            src='https://kastanjetextile.com/esvolAvatars/esvol3.png'
            alt='esvol1'
            width={85}
          />

          <img
            onClick={() => handleImageSelect("4")}
            className={imageNum === "4" ? "m-1 border" : "m-1"}
            src='https://kastanjetextile.com/esvolAvatars/esvol4.png'
            alt='esvol1'
            width={85}
          />

          <img
            onClick={() => handleImageSelect("5")}
            className={imageNum === "5" ? "m-1 border" : "m-1"}
            src='https://kastanjetextile.com/esvolAvatars/esvol5.png'
            alt='esvol1'
            width={85}
          />
          {/* </Row>

        <Row className='w-100'> */}
          <img
            onClick={() => handleImageSelect("6")}
            className={imageNum === "6" ? "m-1 border" : "m-1"}
            src='https://kastanjetextile.com/esvolAvatars/esvol6.png'
            alt='esvol1'
            width={85}
          />

          <img
            onClick={() => handleImageSelect("7")}
            className={imageNum === "7" ? "m-1 border" : "m-1"}
            src='https://kastanjetextile.com/esvolAvatars/esvol7.png'
            alt='esvol1'
            width={85}
          />

          <img
            onClick={() => handleImageSelect("8")}
            className={imageNum === "8" ? "m-1 border" : "m-1"}
            src='https://kastanjetextile.com/esvolAvatars/esvol8.png'
            alt='esvol1'
            width={85}
          />

          <img
            onClick={() => handleImageSelect("9")}
            className={imageNum === "9" ? "m-1 border" : "m-1"}
            src='https://kastanjetextile.com/esvolAvatars/esvol9.png'
            alt='esvol1'
            width={85}
          />

          <img
            onClick={() => handleImageSelect("10")}
            className={imageNum === "10" ? "m-1 border" : "m-1"}
            src='https://kastanjetextile.com/esvolAvatars/esvol10.png'
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
