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
      SubModule6Detail,
      ExpertIndex,
      onClick,
      onClickNextModule,
      handleClickExpertVideo,
      SubModule7QuizQuestionFiltered,
      SubModule7QuizQuestionText,
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
      SubModule7QuizQuestion,
      UserQuizAllAnswersLanguage,
      EducationWithTasks,
    } = this.props;

    return (
      <div>
        {userActiveSubModule === "sub1" && (
          <SubModule1
            userActiveModule={userActiveModule}
            userActiveSubModule={userActiveSubModule}
            SubModuleUrl={SubModule1Url}
            SubModuleRatio={SubModule1Ratio}
            onClick={onClick}
          />
        )}

        {userActiveSubModule === "sub2" && (
          <SubModule2
            userActiveModule={userActiveModule}
            userActiveSubModule={userActiveSubModule}
            SubModuleUrl={SubModule2Url}
            SubModuleRatio={SubModule2Ratio}
            onClick={onClick}
            EducationWithTasks={EducationWithTasks}
          />
        )}

        {userActiveSubModule === "sub3" && EducationWithTasks && (
          <SubModule3
            userActiveModule={userActiveModule}
            userActiveSubModule={userActiveSubModule}
            onClick={onClick}
          />
        )}

        {userActiveSubModule === "sub4" && EducationWithTasks && (
          <SubModule4
            userActiveModule={userActiveModule}
            userActiveSubModule={userActiveSubModule}
            onClick={onClick}
          />
        )}

        {userActiveSubModule === "sub5" && EducationWithTasks && (
          <SubModule5
            userActiveModule={userActiveModule}
            userActiveSubModule={userActiveSubModule}
            onClick={onClick}
          />
        )}

        {userActiveSubModule === "sub6" && (
          <SubModule6
            userActiveModule={userActiveModule}
            userActiveSubModule={userActiveSubModule}
            SubModule6Detail={SubModule6Detail}
            ExpertIndex={ExpertIndex}
            onClick={onClick}
            handleClickExpertVideo={handleClickExpertVideo}
          />
        )}

        {userActiveSubModule === "sub7" && (
          <SubModule7
            userActiveModule={userActiveModule}
            userActiveSubModule={userActiveSubModule}
            SubModule7QuizQuestionFiltered={SubModule7QuizQuestionFiltered}
            SubModule7QuizQuestionText={SubModule7QuizQuestionText}
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
            SubModule7QuizQuestion={SubModule7QuizQuestion}
          />
        )}
      </div>
    );
  }
}
export default SubModule;
