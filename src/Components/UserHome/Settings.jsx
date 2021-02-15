import React, { Component } from "react";
import TranslateText from "../Translate/TranslateText";
import AvatarChange from "./AvatarChange";

import TextField from "@material-ui/core/TextField";
import { Form } from "react-bootstrap";
import { ApiUrlMain2 } from "../Utility/ApiUrl";
import axios from "axios";
import { Switch, Modal } from "antd";

class Settings extends Component {
  render() {
    const {
      SettingVisible,
      UserInfo,
      handleSettingOk,
      handleCancel,
      AvatarVisible,
      handleAvatarOk,
      AvatarShowModal,
      imageNum,
      handleImageSelect,
      handleSettingChange,
    } = this.props;

    return (
      <Modal
        title={<TranslateText txt='User-Setting' />} //'Setting...'
        visible={SettingVisible}
        centered
        // onOk={ handleSettingOk}
        onCancel={handleCancel}
        footer={[
          <div className='text-center'>
            <button
              key='back'
              className='save-Btn m-3'
              onClick={handleSettingOk}
            >
              <TranslateText txt='User-SaveEdit' />
            </button>
            ,
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
        <Form
          className='text-center'
          id='LoginForm'
          // onSubmit={this.handleSubmit}
        >
          <div className='m-auto'>
            <TextField
              className=''
              label={<TranslateText txt='User-Name' />}
              name='firstName'
              onChange={handleSettingChange}
              required
              defaultValue={UserInfo.firstName}
              error={false}
              // helperText={<TranslateText txt='User-Name-HelperText' />}
            />
          </div>

          <div className='m-auto'>
            <TextField
              className='mt-4'
              label={<TranslateText txt='User-surName' />}
              name='lastName'
              onChange={handleSettingChange}
              required
              defaultValue={UserInfo.lastName}
              error={false}
              // helperText={<TranslateText txt='User-Name-HelperText' />}
            />
          </div>

          <div className='m-auto'>
            <TextField
              className='m-4'
              id='PassChange'
              label={<TranslateText txt='User-NewPass' />}
              name='password'
              onChange={handleSettingChange}
              //required
              type='password'
              error={false}
            />
          </div>

          {/* <div className='m-4'>
            <TranslateText txt='User-EducationWithTasks' />
            <Switch
              className='ml-3'
              // checked={qst.activationStatus == 1 ? true : false}
              // className={qst.activationStatus == 1 ? "bg-success" : "bg-mute"}
            />
          </div> */}
        </Form>

        <div className='text-center'>
          <button className='avatar-Btn m-4' onClick={AvatarShowModal}>
            <TranslateText txt='User-ChooseAvatar' />
          </button>

          <AvatarChange
            AvatarVisible={AvatarVisible}
            handleCancel={handleCancel}
            handleAvatarOk={handleAvatarOk}
            UserInfo={UserInfo}
            imageNum={imageNum}
            handleImageSelect={handleImageSelect}
          />
        </div>
      </Modal>
    );
  }
}

export default Settings;
