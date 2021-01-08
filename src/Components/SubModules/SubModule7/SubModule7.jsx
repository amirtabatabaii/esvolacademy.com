import React, { Component } from "react";
import axios from "axios";
import { ApiUrlMain2 } from "../../Utility/ApiUrl";

import TranslateText from "../../Translate/TranslateText";
import Scroll from "../../Utility/Scroll";
import CompareAnswers from "./CompareAnswers";
import Question from "./Question";
import ShowResult from "./ShowResult";

const UserModule = localStorage.getItem("UserModule"); //.substring(6);
const UserTempModule = localStorage.getItem("UserTempModule"); //.substring(6);

class SubModule7 extends Component {
  handleContinue = (UserTempModule) => {
    const UserActiveNumber = localStorage.getItem("UserModule").substring(6);
    const UserSelectedModuleNumber = localStorage
      .getItem("UserTempModule")
      .substring(6);

    const ModuleName = "Module" + (parseInt(UserTempModule.substring(6)) + 1);

    axios
      .put(
        ApiUrlMain2 + `/users/${this.props.UserInfo.userId}/status`,
        {
          userStatus: {
            currentModule: ModuleName,
            currentSubModule:
              parseInt(UserSelectedModuleNumber) + 1 ===
              parseInt(UserActiveNumber)
                ? localStorage.getItem("UserSubModule")
                : "sub1",
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
          localStorage.setItem("UserTempModule", ModuleName);
          window.location.reload(false);
          //openNotificationWithIcon("success", "Update", "Update ok", 3);
        }
      });
  };

  handleContinueUser = () => {
    this.props.history.push("/user");
  };

  render() {
    const {
      randomAnswers,
      SubModule7QuizQuestion,
      SubModule7QuizQuestionText,
      userActiveModule,
      HandleQuestionFillingAnswerChange,
      questionIndex,
      questionCount,
      HandleNextQuestion,
      HandleQuestionResult,
      showResult,
      takeQuiz,
      HandleRetakeQuiz,
      onClickNextModule,
      AllQuestions,
      userFillingAnswer,
      HandleFillingNextQuestion,
      userBlankAnswer,
      HandleBlankNextQuestion,
      userYesNoAnswer,
      userMultipleChoiceAnswer,
      HandleYesNoAnswerChange,
      HandleMultipleChoiceAnswerChange,
      userQuizScore,
      QuizScore,
      UserQuizAllAnswers,
      HandleCompareAnswer,
      CompareAnswer,
      HandleCompareAnswerPrevQuestion,
      HandleCompareAnswerNextQuestion,
      HandleCompareAnswerQuestionResult,
      handleBlankAnswerInputChange,
      UserQuizAllAnswersLanguage,
      SubModule7QuizQuestionFiltered,
      UserInfo,
      UserStatus,
      passed,
      SetUserPassed,
    } = this.props;

    return (
      <div className={`${userActiveModule}-sub-panel mt-4 app`}>
        <Scroll>
          {UserTempModule.substring(6) < UserModule.substring(6) ? (
            <div className='text-center'>
              <div className='m-5 task-note-error font-weight-bold'>
                <TranslateText txt='SubModule7-error' />
              </div>

              {UserTempModule !== "Module5" && (
                <button
                  className={`${userActiveModule}-next-btn m-3`}
                  onClick={() => this.handleContinue(UserTempModule)}
                >
                  <TranslateText txt='SubModule3-Continue' />
                </button>
              )}

              {UserTempModule === "Module5" && (
                <button
                  className={`${userActiveModule}-next-btn m-3`}
                  onClick={() => this.handleContinue("Module0")}
                >
                  <TranslateText txt='SubModule3-Continue' />
                </button>
              )}
            </div>
          ) : (
            <>
              {showResult && (
                <ShowResult
                  HandleRetakeQuiz={HandleRetakeQuiz}
                  onClickNextModule={onClickNextModule}
                  userActiveModule={userActiveModule}
                  userQuizScore={userQuizScore}
                  QuizScore={QuizScore}
                  HandleCompareAnswer={HandleCompareAnswer}
                  UserQuizAllAnswers={UserQuizAllAnswers}
                  UserInfo={UserInfo}
                  UserStatus={UserStatus}
                  passed={passed}
                  SetUserPassed={SetUserPassed}
                />
              )}

              {takeQuiz && (
                <Question
                  SubModule7QuizQuestion={SubModule7QuizQuestion}
                  userActiveModule={userActiveModule}
                  randomAnswers={randomAnswers}
                  SubModule7QuizQuestionText={SubModule7QuizQuestionText}
                  questionIndex={questionIndex}
                  questionCount={questionCount}
                  HandleNextQuestion={HandleNextQuestion}
                  HandleQuestionResult={HandleQuestionResult}
                  AllQuestions={AllQuestions}
                  HandleQuestionFillingAnswerChange={
                    HandleQuestionFillingAnswerChange
                  }
                  userFillingAnswer={userFillingAnswer}
                  HandleFillingNextQuestion={HandleFillingNextQuestion}
                  userBlankAnswer={userBlankAnswer}
                  HandleBlankNextQuestion={HandleBlankNextQuestion}
                  userYesNoAnswer={userYesNoAnswer}
                  userMultipleChoiceAnswer={userMultipleChoiceAnswer}
                  HandleYesNoAnswerChange={HandleYesNoAnswerChange}
                  HandleMultipleChoiceAnswerChange={
                    HandleMultipleChoiceAnswerChange
                  }
                  handleBlankAnswerInputChange={handleBlankAnswerInputChange}
                />
              )}

              {CompareAnswer && (
                <CompareAnswers
                  UserQuizAllAnswers={UserQuizAllAnswers}
                  userActiveModule={userActiveModule}
                  questionCount={questionCount}
                  questionIndex={questionIndex}
                  HandleCompareAnswerPrevQuestion={
                    HandleCompareAnswerPrevQuestion
                  }
                  HandleCompareAnswerNextQuestion={
                    HandleCompareAnswerNextQuestion
                  }
                  HandleCompareAnswerQuestionResult={
                    HandleCompareAnswerQuestionResult
                  }
                  SubModule7QuizQuestion={SubModule7QuizQuestion}
                  UserQuizAllAnswersLanguage={UserQuizAllAnswersLanguage}
                />
              )}
            </>
          )}
        </Scroll>
      </div>
    );
  }
}

export default SubModule7;
