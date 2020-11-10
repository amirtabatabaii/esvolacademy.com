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
      SubModule1IntroductionVideo,
      SubModule2CourseVideo,
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
      isEasyModeActive,
      SubModule4ReadingFiltered,
      SubModule5CaseStudyFiltered,
      SubModule3Interactive,
      SubModule3InteractiveQuestion,
      UserInfo,
      UserStatus,
    } = this.props;

    return (
      <div>
        {userActiveSubModule === "sub1" && (
          <SubModule1
            userActiveModule={userActiveModule}
            userActiveSubModule={userActiveSubModule}
            SubModule1Detail={SubModule1IntroductionVideo}
            onClick={onClick}
            isEasyModeActive={isEasyModeActive}
          />
        )}

        {userActiveSubModule === "sub2" && (
          <SubModule2
            userActiveModule={userActiveModule}
            userActiveSubModule={userActiveSubModule}
            SubModule2Detail={SubModule2CourseVideo}
            onClick={onClick}
            isEasyModeActive={isEasyModeActive}
          />
        )}

        {userActiveSubModule === "sub3" && ( //isEasyModeActive && (
          <SubModule3
            userActiveModule={userActiveModule}
            userActiveSubModule={userActiveSubModule}
            onClick={onClick}
            isEasyModeActive={isEasyModeActive}
            SubModule3Interactive={SubModule3Interactive}
            SubModule3InteractiveQuestion={SubModule3InteractiveQuestion}
            UserInfo={UserInfo}
            UserStatus={UserStatus}
          />
        )}

        {userActiveSubModule === "sub4" && ( //isEasyModeActive && (
          <SubModule4
            userActiveModule={userActiveModule}
            userActiveSubModule={userActiveSubModule}
            onClick={onClick}
            SubModule4ReadingFiltered={SubModule4ReadingFiltered}
            isEasyModeActive={isEasyModeActive}
          />
        )}

        {userActiveSubModule === "sub5" && ( //isEasyModeActive && (
          <SubModule5
            userActiveModule={userActiveModule}
            userActiveSubModule={userActiveSubModule}
            onClick={onClick}
            SubModule5CaseStudyFiltered={SubModule5CaseStudyFiltered}
            isEasyModeActive={isEasyModeActive}
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
            isEasyModeActive={isEasyModeActive}
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
            UserInfo={UserInfo}
            UserStatus={UserStatus}
          />
        )}
      </div>
    );
  }
}
export default SubModule;
