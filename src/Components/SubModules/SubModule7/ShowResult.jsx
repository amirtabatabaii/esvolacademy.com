import React, { Component } from "react";
import TranslateText from "../../Translate/TranslateText";

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
        <h3 className='m-5' style={{ color: "#525252" }}>
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
                <TranslateText txt='SubModule7-ViewResult' />
              </button>

              <button
                className='Module-next-btn m-4'
                onClick={() => onClickNextModule("Module2", "sub1")}
              >
                <TranslateText txt='SubModule7-NextModule' />
              </button>
            </>
          ) : (
            <>
              <h3 className='text-danger m-4'>You Failed.</h3>

              <button
                className='Module-next-btn m-3'
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
