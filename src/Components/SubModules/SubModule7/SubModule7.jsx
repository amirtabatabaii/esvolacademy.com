import React, { Component } from "react";
import Scroll from "../../Utility/Scroll";
import Question from "./Question";
import ShowResult from "./ShowResult";

class SubModule7 extends Component {
  state = {};

  // componentDidMount() {
  //   this.props.getRandomAnswer(
  //     this.props.SubModule1QuizQuestion[this.props.questionIndex]
  //   );
  // }

  render() {
    const {
      randomAnswers,
      SubModule1QuizQuestion,
      SubModule1QuizQuestionText,
      userActiveModule,
      HandleQuestionAnswerChange,
      questionIndex,
      questionCount,
      HandleNextQuestion,
      HandlePrevQuestion,
      userAnswer,
      HandleQuestionResult,
      showResult,
      correctAnswerCount,
      takeQuiz,
      HandleRetakeQuiz,
      onClickNextModule,
    } = this.props;

    return (
      <div className={`${userActiveModule}-sub-panel mt-4 app`}>
        <Scroll>
          {showResult ? (
            <ShowResult
              questionCount={questionCount}
              correctAnswerCount={correctAnswerCount}
              HandleRetakeQuiz={HandleRetakeQuiz}
              onClickNextModule={onClickNextModule}
              userActiveModule={userActiveModule}
            />
          ) : takeQuiz ? (
            <Question
              randomAnswers={randomAnswers}
              SubModule1QuizQuestion={SubModule1QuizQuestion}
              SubModule1QuizQuestionText={SubModule1QuizQuestionText}
              questionIndex={questionIndex}
              questionCount={questionCount}
              userAnswer={userAnswer}
              userActiveModule={userActiveModule}
              HandleQuestionAnswerChange={HandleQuestionAnswerChange}
              HandleNextQuestion={HandleNextQuestion}
              HandlePrevQuestion={HandlePrevQuestion}
              HandleQuestionResult={HandleQuestionResult}
            />
          ) : (
            "null"
          )}
        </Scroll>
      </div>
    );
  }
}

export default SubModule7;

// export default connect(
//   {},
//   {
//     UserActiveModuleSubModule,
//   }
// )(withRouter(SubModule7));
