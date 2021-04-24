import React, { Component } from "react";
import { Link } from "react-router-dom";

import TranslateText from "../../Translate/TranslateText";
import StarFull from "../../../assets/img/starFull.png";
import Retake from "../../../assets/img/retake.png";
import QuizPassFail from "../../Utility/QuizPassFail";
import axios from "axios";
import { ApiUrlMain2 } from "../../Utility/ApiUrl";

let userAns = [];

class ShowResult extends Component {
  state = { minQuizScore: "" };

  percentageQuizScore = (QuizScore) => {
    if (QuizScore !== 0)
      return (QuizScore * parseInt(this.state.minQuizScore)) / 100;
    //if (QuizScore !== 0) return (QuizScore * 5) / 100;
  };

  async componentDidMount() {
    await axios
      .get(ApiUrlMain2 + `/api/modules/${this.props.userActiveModule}`)
      .then((Response) => {
        this.setState({
          minQuizScore: Response.data.minQuizScore,
        });
      });

    // console.log(this.props.UserQuizAllAnswers);
    for (let i = 0; i < this.props.UserQuizAllAnswers.length; i++) {
      userAns[i] = {
        userAnswerId: this.props.UserQuizAllAnswers[i].split("!,!")[0],
        userAnswer: this.props.UserQuizAllAnswers[i].split("!,!")[1],
      };
    }
    // console.log(userAns);
  }

  componentDidUpdate() {
    if (
      this.props.userQuizScore >= this.percentageQuizScore(this.props.QuizScore)
    ) {
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
            // if (this.props.UserStatus.currentModule === "Module5") {
            //   this.props.SetUserPassed(true);
            // } else {
            const ModuleNumber = this.props.UserStatus.currentModule.substr(
              this.props.UserStatus.currentModule.length - 1
            );
            const editedModuleName = this.props.UserStatus.currentModule.slice(
              0,
              -1
            );

            axios
              .put(
                ApiUrlMain2 + `/users/${this.props.UserInfo.userId}/status`,
                {
                  userStatus: {
                    currentModule:
                      editedModuleName + (parseInt(ModuleNumber) + 1),
                    currentSubModule: "sub1",
                    score:
                      parseInt(this.props.UserStatus.score) +
                      Math.round(
                        (parseInt(this.props.userQuizScore) * 100) /
                          parseInt(this.props.QuizScore)
                      ),
                    badgeNo: "0",
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
                // if (res.status === 200) {
                //   // window.location.reload(false);
                //   //openNotificationWithIcon("success", "Update", "Update ok", 3);
                // }
              });
            // window.location.reload(false);
            //openNotificationWithIcon("success", "Update", "Update ok", 3);
          }
          // }
        });
    }
  }

  render() {
    const {
      HandleRetakeQuiz,
      onClickNextModule,
      userActiveModule,
      userQuizScore,
      QuizScore,
      HandleCompareAnswer,
      // UserQuizAllAnswers,
      // UserInfo,
      // UserStatus,
    } = this.props;

    return (
      <div>
        <h3 className='m-2'>
          {userQuizScore >= this.percentageQuizScore(QuizScore) && (
            <>
              <QuizPassFail
                userActiveModule={userActiveModule}
                userQuizScore={userQuizScore}
                QuizScore={QuizScore}
                StarFull={StarFull}
                Passed={true}
              />

              <button
                className={`${userActiveModule}-next-btn m-4`}
                onClick={HandleCompareAnswer}
              >
                <TranslateText txt='SubModule7-CheckAnswers' />
              </button>

              {userActiveModule === "Module5" && (
                <Link
                  to='/certificate'
                  className='Menu-text ml-4 text-decoration-none'
                >
                  <button className={`${userActiveModule}-next-btn m-4`}>
                    <TranslateText txt='SubModule7-FinishModule' />
                  </button>
                </Link>
              )}

              {userActiveModule !== "Module5" && (
                <button
                  className={`${userActiveModule}-next-btn m-4`}
                  onClick={() => onClickNextModule(userActiveModule, "sub1")}
                >
                  <TranslateText txt='SubModule7-NextModule' />
                </button>
              )}
            </>
          )}

          {userQuizScore < this.percentageQuizScore(QuizScore) && (
            <>
              <QuizPassFail
                userActiveModule={userActiveModule}
                userQuizScore={userQuizScore}
                QuizScore={QuizScore}
                Retake={Retake}
                Passed={false}
              />

              <button
                className={`${userActiveModule}-next-btn m-3`}
                onClick={HandleRetakeQuiz}
              >
                <TranslateText txt='SubModule7-RetakeQuiz' />
              </button>
            </>
          )}
        </h3>
      </div>
    );
  }
}

export default ShowResult;
