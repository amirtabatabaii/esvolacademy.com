import React, { Component } from "react";
import { Radio } from "antd";

class Question extends Component {
  render() {
    const radioStyle = {
      display: "block",
      height: "30px",
      lineHeight: "30px",
    };

    const {
      randomAnswers,
      SubModule1QuizQuestion,
      HandleQuestionAnswerChange,
      questionIndex,
      questionCount,
      HandleNextQuestion,
      userAnswer,
      HandleQuestionResult,
    } = this.props;

    return (
      <>
        <div className='m-5 text-left'>
          <div className='question font-weight-bold'>
            {questionIndex + 1}.{" "}
            {SubModule1QuizQuestion[questionIndex].question}
          </div>

          <div className='mt-3'>
            <Radio.Group
              onChange={HandleQuestionAnswerChange}
              // defaultValue={value}
              // defaultValue={randomAnswers.map((answers) => ({ answers }))}
              size='large'
            >
              {randomAnswers.map((answers, index) => (
                <Radio
                  style={radioStyle}
                  value={answers}
                  key={index}
                  className='mt-3 answers'
                >
                  {answers}
                </Radio>
              ))}
            </Radio.Group>
          </div>
        </div>

        {questionIndex === questionCount ? (
          userAnswer === "" ? null : (
            <button
              className='Module-next-btn'
              size='lg'
              onClick={HandleQuestionResult}
            >
              View Result
            </button>
          )
        ) : userAnswer === "" ? null : (
          <button
            onClick={HandleNextQuestion}
            className='Module-next-btn'
            size='lg'
          >
            Next Question
          </button>
        )}
      </>
    );
  }
}
export default Question;
