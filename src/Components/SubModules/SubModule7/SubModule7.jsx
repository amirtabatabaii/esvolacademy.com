import React, { Component } from "react";
import Scroll from "../../Utility/Scroll";
import CompareAnswers from "./CompareAnswers";
import Question from "./Question";
import ShowResult from "./ShowResult";

class SubModule7 extends Component {
  render() {
    const {
      randomAnswers,
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
      SubModule7QuizQuestion,
      UserQuizAllAnswersLanguage,
    } = this.props;

    return (
      <div className={`${userActiveModule}-sub-panel mt-4 app`}>
        <Scroll>
          {showResult && (
            <ShowResult
              HandleRetakeQuiz={HandleRetakeQuiz}
              onClickNextModule={onClickNextModule}
              userActiveModule={userActiveModule}
              userQuizScore={userQuizScore}
              QuizScore={QuizScore}
              HandleCompareAnswer={HandleCompareAnswer}
            />
          )}

          {takeQuiz && (
            <Question
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
              HandleCompareAnswerPrevQuestion={HandleCompareAnswerPrevQuestion}
              HandleCompareAnswerNextQuestion={HandleCompareAnswerNextQuestion}
              HandleCompareAnswerQuestionResult={
                HandleCompareAnswerQuestionResult
              }
              SubModule7QuizQuestion={SubModule7QuizQuestion}
              UserQuizAllAnswersLanguage={UserQuizAllAnswersLanguage}
            />
          )}
        </Scroll>
      </div>
    );
  }
}

export default SubModule7;
