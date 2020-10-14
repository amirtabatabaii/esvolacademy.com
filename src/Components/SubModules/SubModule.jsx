import React, { Component } from "react";

import "../Module/ModuleHome.css";
import SubModule1 from "./SubModule1/SubModule1";
import SubModule2 from "./SubModule2/SubModule2";
import SubModule3 from "./SubModule3/SubModule3";
import SubModule4 from "./SubModule4/SubModule4";
import SubModule5 from "./SubModule5/SubModule5";
import SubModule6 from "./SubModule6/SubModule6";
import SubModule7 from "./SubModule7/SubModule7";

class SubModule extends Component {
  render() {
    const {
      userActiveModule,
      userActiveSubModule,
      SubModule1Url,
      SubModule1Ratio,
      SubModule2Url,
      SubModule2Ratio,
      SubModule6Url,
      SubModule6Ratio,
      onClick,
      onClickNextModule,
      SubModule1QuizQuestionFiltered,
      SubModule1QuizQuestionText,
      randomAnswers,
      questionIndex,
      questionCount,
      showResult,
      userAnswer,
      HandleNextQuestion,
      HandlePrevQuestion,
      getRandomAnswer,
      HandleQuestionAnswerChange,
      HandleQuestionFillingAnswerChange,
      HandleQuestionResult,
      correctAnswerCount,
      takeQuiz,
      HandleRetakeQuiz,
      AllQuestions,
      userFillingAnswer,
      HandleFillingNextQuestion,
      handleBlankAnswerInputChange,
      userBlankAnswer,
      HandleBlankNextQuestion,
      userYesNoAnswer,
      userMultipleChoiceAnswer,
      HandleYesNoAnswerChange,
      HandleMultipleChoiceAnswerChange,
      selectedLanguage,
      userQuizScore,
      QuizScore,
      UserQuizAllAnswers,
      HandleCompareAnswer,
      CompareAnswer,
      HandleCompareAnswerNextQuestion,
      HandleCompareAnswerPrevQuestion,
      HandleCompareAnswerQuestionResult,
      SubModule1QuizQuestion,
      UserQuizAllAnswersLanguage,
    } = this.props;

    return (
      <div>
        {userActiveSubModule === "sub1" ? (
          <SubModule1
            userActiveModule={userActiveModule}
            userActiveSubModule={userActiveSubModule}
            SubModuleUrl={SubModule1Url}
            SubModuleRatio={SubModule1Ratio}
            onClick={onClick}
          />
        ) : null}

        {userActiveSubModule === "sub2" ? (
          <SubModule2
            userActiveModule={userActiveModule}
            userActiveSubModule={userActiveSubModule}
            SubModuleUrl={SubModule2Url}
            SubModuleRatio={SubModule2Ratio}
            onClick={onClick}
          />
        ) : null}

        {userActiveSubModule === "sub3" ? (
          <SubModule3
            userActiveModule={userActiveModule}
            userActiveSubModule={userActiveSubModule}
            onClick={onClick}
          />
        ) : null}

        {userActiveSubModule === "sub4" ? (
          <SubModule4
            userActiveModule={userActiveModule}
            userActiveSubModule={userActiveSubModule}
            onClick={onClick}
          />
        ) : null}

        {userActiveSubModule === "sub5" ? (
          <SubModule5
            userActiveModule={userActiveModule}
            userActiveSubModule={userActiveSubModule}
            onClick={onClick}
          />
        ) : null}

        {userActiveSubModule === "sub6" ? (
          <SubModule6
            userActiveModule={userActiveModule}
            userActiveSubModule={userActiveSubModule}
            SubModuleUrl={SubModule6Url}
            SubModuleRatio={SubModule6Ratio}
            onClick={onClick}
          />
        ) : null}

        {userActiveSubModule === "sub7" ? (
          <SubModule7
            userActiveModule={userActiveModule}
            userActiveSubModule={userActiveSubModule}
            SubModule1QuizQuestionFiltered={SubModule1QuizQuestionFiltered}
            SubModule1QuizQuestionText={SubModule1QuizQuestionText}
            randomAnswers={randomAnswers}
            AllQuestions={AllQuestions}
            questionIndex={questionIndex}
            questionCount={questionCount}
            showResult={showResult}
            userAnswer={userAnswer}
            userFillingAnswer={userFillingAnswer}
            userBlankAnswer={userBlankAnswer}
            correctAnswerCount={correctAnswerCount}
            takeQuiz={takeQuiz}
            getRandomAnswer={getRandomAnswer}
            HandleQuestionAnswerChange={HandleQuestionAnswerChange}
            HandleQuestionFillingAnswerChange={
              HandleQuestionFillingAnswerChange
            }
            HandleNextQuestion={HandleNextQuestion}
            HandleFillingNextQuestion={HandleFillingNextQuestion}
            HandleBlankNextQuestion={HandleBlankNextQuestion}
            handleBlankAnswerInputChange={handleBlankAnswerInputChange}
            HandlePrevQuestion={HandlePrevQuestion}
            HandleQuestionResult={HandleQuestionResult}
            HandleRetakeQuiz={HandleRetakeQuiz}
            onClickNextModule={onClickNextModule}
            //
            userYesNoAnswer={userYesNoAnswer}
            userMultipleChoiceAnswer={userMultipleChoiceAnswer}
            HandleYesNoAnswerChange={HandleYesNoAnswerChange}
            HandleMultipleChoiceAnswerChange={HandleMultipleChoiceAnswerChange}
            selectedLanguage={selectedLanguage}
            userQuizScore={userQuizScore}
            QuizScore={QuizScore}
            UserQuizAllAnswers={UserQuizAllAnswers}
            UserQuizAllAnswersLanguage={UserQuizAllAnswersLanguage}
            HandleCompareAnswer={HandleCompareAnswer}
            CompareAnswer={CompareAnswer}
            HandleCompareAnswerPrevQuestion={HandleCompareAnswerPrevQuestion}
            HandleCompareAnswerNextQuestion={HandleCompareAnswerNextQuestion}
            HandleCompareAnswerQuestionResult={
              HandleCompareAnswerQuestionResult
            }
            SubModule1QuizQuestion={SubModule1QuizQuestion}
          />
        ) : null}
      </div>
    );
  }
}
export default SubModule;
