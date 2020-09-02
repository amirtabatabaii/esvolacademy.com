import React, { Component } from "react";

class ShowResult extends Component {
  render() {
    const {
      correctAnswerCount,
      questionCount,
      HandleRetakeQuiz,
      onClickNextModule,
    } = this.props;

    return (
      <div>
        <h3 className='m-5'>
          Correct answer : {correctAnswerCount} / {questionCount + 1}
        </h3>

        <h3 className='m-5'>
          {correctAnswerCount > questionCount - 2 ? (
            <>
              <h3 className='text-success m-3'>You passed.</h3>

              <button
                className='Module-next-btn m-4'
                // onClick={HandleQuestionResult}
              >
                View Answers
              </button>

              <button
                className='Module-next-btn m-4'
                onClick={() => onClickNextModule("Module2", "sub1")}
              >
                Next Module
              </button>
            </>
          ) : (
            <>
              <h3 className='text-danger m-4'>You Failed.</h3>

              <button
                className='Module-next-btn m-3'
                onClick={HandleRetakeQuiz}
              >
                Retake Exam
              </button>
            </>
          )}
        </h3>
      </div>
    );
  }
}

export default ShowResult;
