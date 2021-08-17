import React, { Component } from "react";
import { notification, message } from "antd";
import axios from "axios";
import { ApiUrlMain2 } from "../Utility/ApiUrl";
import queryString from "query-string";

const key = "updatable";

const openNotificationWithIconSucc = (type) => {
  notification[type]({
    message: "Your verify successfully.",
    duration: 20,
  });
};

const openNotificationWithIconErr = (type) => {
  notification[type]({
    message: "Verify Error!",
    description: "Your verify unsuccessfully.",
    duration: 20,
  });
};

let params = "";

export class Verify extends Component {
  componentDidMount() {
    params = queryString.parse(this.props.location.search);
  }

  onVerify = () => {
    axios
      .get(ApiUrlMain2 + `/users/email-verification?token=${params.token}`)
      .then((res) => {
        if (res.data.result === "Success") {
          openNotificationWithIconSucc("success");
          this.props.history.push("/login");
        } else {
          openNotificationWithIconErr("error");
        }
      });
  };

  render() {
    return (
      <div className='m-5 p-5 text-center'>
        <button onClick={this.onVerify} className='login-Btn'>
          Verify Your Email
        </button>
      </div>
    );
  }
}

export default Verify;
