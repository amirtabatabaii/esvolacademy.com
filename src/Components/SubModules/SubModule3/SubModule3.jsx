import React, { Component } from "react";

import Scroll from "../../Utility/Scroll";
// import SubModuleNextButton from "../../Utility/SubModuleNextButton";
import Task from "./Task";
import { Form } from "react-bootstrap";
// import SubModule3NextButton from "./SubModule3NextButton";
import TranslateText from "../../Translate/TranslateText";
import axios from "axios";
import {
  ApiUrlMain2,
  // ApiUrlGetQuestion,
  // ApiUrlQuestion,
} from "../../Utility/ApiUrl";

let userAns = [];
const UserModule = localStorage.getItem("UserModule"); //.substring(6);
const UserTempModule = localStorage.getItem("UserTempModule"); //.substring(6);

class SubModule3 extends Component {
  // state = {
  //   UserModule: "",
  //   UserTempModule: "",
  // };

  // componentDidMount() {

  //     }

  componentDidUpdate(previousProps, previousState) {
    if (
      previousProps.SubModule3Interactive.length !==
      this.props.SubModule3Interactive.length
    ) {
      for (let i = 0; i < this.props.SubModule3Interactive.length; i++) {
        userAns.push({
          userAnswerId: i,
          userAnswer: "",
        });
      }
    }
  }

  handleChange = (event) => {
    // console.log(event.target.name, event.target.value);
    let qstIndex = event.target.name.split(",")[0];
    let ansId = event.target.name.split(",")[1];

    userAns[qstIndex].userAnswerId = ansId;
    userAns[qstIndex].userAnswer = event.target.value;

    // console.log(userAns);
  };

  handleSubmit = (ActiveSubName, event) => {
    event.preventDefault();

    if (parseInt(ActiveSubName.substring(3)) - 1 === 3) {
      // console.log(userAns);
      axios
        .put(
          ApiUrlMain2 +
            `/users/${this.props.UserInfo.userId}/questions/answers`,
          {
            userAnswers: userAns,
          },

          (axios.defaults.headers.common[
            "Authorization"
          ] = localStorage.getItem("UserInfo")),
          (axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*"),
          {
            "Content-Type": "application/json",
          }
        )
        .then((res) => {
          // console.log("res =====> ", res);
          if (res.status === 200) {
            axios
              .put(
                ApiUrlMain2 + `/users/${this.props.UserInfo.userId}/status`,
                {
                  userStatus: {
                    currentModule: this.props.UserStatus.currentModule,
                    currentSubModule: "sub" + ActiveSubName.substring(3),
                    score: this.props.UserStatus.score,
                    badgeNo: this.props.UserStatus.badgeNo,
                    isPreTestDone: this.props.UserStatus.isPreTestDone,
                    isFinalTestDone: this.props.UserStatus.isFinalTestDone,
                  },
                },

                (axios.defaults.headers.common[
                  "Authorization"
                ] = localStorage.getItem("UserInfo")),
                (axios.defaults.headers.common["Access-Control-Allow-Origin"] =
                  "*"),
                {
                  "Content-Type": "application/json",
                }
              )
              .then((res) => {
                // console.log("res =====> ", res);
                if (res.status === 200) {
                  window.location.reload(false);
                  //openNotificationWithIcon("success", "Update", "Update ok", 3);
                }
              });

            // window.location.reload(false);
            //openNotificationWithIcon("success", "Update", "Update ok", 3);
          }
        });
    }
  };

  handleContinue = (ActiveSubName, event) => {
    axios
      .put(
        ApiUrlMain2 + `/users/${this.props.UserInfo.userId}/status`,
        {
          userStatus: {
            currentModule: this.props.UserStatus.currentModule,
            currentSubModule: "sub" + ActiveSubName.substring(3),
            score: this.props.UserStatus.score,
            badgeNo: this.props.UserStatus.badgeNo,
          },
        },

        (axios.defaults.headers.common["Authorization"] = localStorage.getItem(
          "UserInfo"
        )),
        (axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*"),
        {
          "Content-Type": "application/json",
        }
      )
      .then((res) => {
        // console.log("res =====> ", res);
        if (res.status === 200) {
          window.location.reload(false);
          //openNotificationWithIcon("success", "Update", "Update ok", 3);
        }
      });
  };

  render() {
    const {
      userActiveModule,
      isEasyModeActive,
      // SubModuleRatio,
      // onClick,
      SubModule3Interactive,
      // SubModule3NextOnClick,
    } = this.props;

    return (
      <div className={`${userActiveModule}-sub-panel mt-4 app`}>
        <Scroll>
          {UserTempModule.substring(6) < UserModule.substring(6) ? (
            <div className='text-center'>
              <div className='m-5 task-note-error font-weight-bold'>
                <TranslateText txt='SubModule3-error' />
              </div>

              <button
                className={`${userActiveModule}-next-btn m-3`}
                onClick={
                  !isEasyModeActive
                    ? !isEasyModeActive
                      ? (event) => this.handleContinue("sub4", event)
                      : (event) => this.handleContinue("sub6", event)
                    : (event) => this.handleContinue("sub4", event)
                }
              >
                <TranslateText txt='SubModule3-Continue' />
              </button>
            </div>
          ) : (
            <Form
              className='text-center'
              id='taskForm'
              // onSubmit={this.handleSubmit}
              onSubmit={
                !isEasyModeActive
                  ? !isEasyModeActive
                    ? (event) => this.handleSubmit("sub4", event)
                    : (event) => this.handleSubmit("sub6", event)
                  : (event) => this.handleSubmit("sub4", event)
              }
            >
              {SubModule3Interactive.map((inter, index) => (
                <Task
                  userActiveModule={userActiveModule}
                  type={inter.question.interactiveUrlFormat}
                  Link={inter.question.interactiveUrl}
                  note={inter.question.questionDictionaries[0].interactiveTitle}
                  question={
                    inter.question.questionDictionaries[0].interactiveText
                  }
                  onChange={this.handleChange}
                  SubModule3Interactive={SubModule3Interactive}
                  index={index}
                  TextFieldName={inter.id}
                />
              ))}

              {/* <SubModule3NextButton
              // disabled={played.toFixed(2) * 100 <= SubModuleRatio ? true : false}
              className={`${userActiveModule}-next-btn m-3`}
              condition={!isEasyModeActive}
              isEasyModeActive={!isEasyModeActive}
              NormalNextSubModule='sub4'
              SubModule6Name='sub6'
              txt='SubModule3-Continue'
              SubModule3NextOnClick={SubModule3NextOnClick}
            /> */}

              <button
                className={`${userActiveModule}-next-btn m-3`}
                // onClick={
                //   !isEasyModeActive
                //     ? !isEasyModeActive
                //       ? () => this.onClick("sub4")
                //       : () => this.onClick("sub6")
                //     : () => this.onClick("sub4")
                // }
              >
                <TranslateText txt='SubModule3-Continue' />
              </button>
            </Form>
          )}
        </Scroll>
      </div>
    );
  }
}
export default SubModule3;
