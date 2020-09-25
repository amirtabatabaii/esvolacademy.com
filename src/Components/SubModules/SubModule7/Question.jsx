import React, { Component } from "react";
import { Radio } from "antd";
import TranslateText from "../../Translate/TranslateText";

class Question extends Component {
  render() {
    const radioStyle = {
      display: "block",
      height: "30px",
      lineHeight: "30px",
    };

    const {
      randomAnswers,
      // SubModule1QuizQuestion,
      SubModule1QuizQuestionText,
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
            {SubModule1QuizQuestionText !== undefined &&
              SubModule1QuizQuestionText.question}
          </div>

          <div className='mt-3'>
            <Radio.Group
              // type='radiogroup'
              // name='radiogroup'
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
                  className='mt-2 answers'
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
              <TranslateText txt='SubModule7-ViewResult' />
            </button>
          )
        ) : userAnswer === "" ? null : (
          <div className='text-left m-5'>
            <button
              onClick={HandleNextQuestion}
              className='Module-next-qst-btn'
              size='lg'
            >
              <TranslateText txt='SubModule7-NextQuestion' />
            </button>
          </div>
        )}
      </>
    );
  }
}
export default Question;
