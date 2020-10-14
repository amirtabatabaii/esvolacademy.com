import React, { Component } from "react";
import { Radio } from "antd";
import TranslateText from "../../Translate/TranslateText";
import TextField from "@material-ui/core/TextField";

class Question extends Component {
  CreateBlankQuestion = (QuestionText) => {
    const qstArr = QuestionText.split("_");

    let qstInput = [];
    for (let i = 0; i < qstArr.length; i++) {
      qstInput.push(
        <>
          <label className='mt-3 ml-1 mr-1' style={{ width: "auto" }}>
            {qstArr[i]}
          </label>

          {qstArr.length - 1 === i ? null : (
            <TextField
              className='w-25 mt-2 ml-1 mr-1'
              variant='outlined'
              name='blankAnswer'
              onChange={(e) => this.props.handleBlankAnswerInputChange(e, i)}
            />
          )}
        </>
      );
    }
    return qstInput;
  };

  render() {
    const radioStyle = {
      display: "block",
      height: "30px",
      lineHeight: "30px",
    };

    const {
      userActiveModule,
      randomAnswers,
      SubModule1QuizQuestionText,
      questionIndex,
      questionCount,
      HandleNextQuestion,
      HandleQuestionResult,
      AllQuestions,
      HandleQuestionFillingAnswerChange,
      userFillingAnswer,
      HandleFillingNextQuestion,
      userBlankAnswer,
      HandleBlankNextQuestion,
      userYesNoAnswer,
      userMultipleChoiceAnswer,
      HandleYesNoAnswerChange,
      HandleMultipleChoiceAnswerChange,
    } = this.props;

    return (
      <>
        <div>
          {SubModule1QuizQuestionText !== undefined &&
            AllQuestions[questionIndex].questionType === "MultipleChoice" && (
              <div>
                <div className='m-5 text-left'>
                  <div className='question font-weight-bold'>
                    {questionIndex + 1}.{" "}
                    {SubModule1QuizQuestionText !== undefined &&
                      SubModule1QuizQuestionText.question}
                  </div>

                  <div className='mt-3'>
                    <Radio.Group
                      onChange={HandleMultipleChoiceAnswerChange}
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
                  userMultipleChoiceAnswer === "" ? null : (
                    <button
                      className={`${userActiveModule}-next-btn`}
                      size='lg'
                      onClick={HandleQuestionResult}
                    >
                      <TranslateText txt='SubModule7-ViewResult' />
                    </button>
                  )
                ) : userMultipleChoiceAnswer === "" ? null : (
                  <div className='text-left m-5'>
                    <button
                      onClick={HandleNextQuestion}
                      className={`${userActiveModule}-next-qst-btn`}
                      size='lg'
                    >
                      <TranslateText txt='SubModule7-NextQuestion' />
                    </button>
                  </div>
                )}
              </div>
            )}

          {SubModule1QuizQuestionText !== undefined &&
            AllQuestions[questionIndex].questionType === "Boolean" && (
              <div>
                <div className='m-5 text-left'>
                  <div className='question font-weight-bold'>
                    {questionIndex + 1}.{" "}
                    {SubModule1QuizQuestionText !== undefined &&
                      SubModule1QuizQuestionText.question}
                  </div>

                  <div className='mt-3'>
                    <Radio.Group
                      onChange={HandleYesNoAnswerChange}
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
                  userYesNoAnswer === "" ? null : (
                    <button
                      className={`${userActiveModule}-next-btn`}
                      size='lg'
                      onClick={HandleQuestionResult}
                    >
                      <TranslateText txt='SubModule7-ViewResult' />
                    </button>
                  )
                ) : userYesNoAnswer === "" ? null : (
                  <div className='text-left m-5'>
                    <button
                      onClick={HandleNextQuestion}
                      className={`${userActiveModule}-next-qst-btn`}
                      size='lg'
                    >
                      <TranslateText txt='SubModule7-NextQuestion' />
                    </button>
                  </div>
                )}
              </div>
            )}

          {SubModule1QuizQuestionText !== undefined &&
            AllQuestions[questionIndex].questionType === "Filling" && (
              <div>
                <div className='m-5 text-left'>
                  <div className='question font-weight-bold'>
                    {questionIndex + 1}.{" "}
                    {SubModule1QuizQuestionText !== undefined &&
                      SubModule1QuizQuestionText.question}
                  </div>

                  <div className='mt-3'>
                    <div>
                      <TextField
                        className='w-100'
                        id='standard-multiline-static'
                        multiline
                        rows={7}
                        onChange={HandleQuestionFillingAnswerChange}
                      />
                    </div>
                  </div>
                </div>

                {questionIndex === questionCount ? (
                  userFillingAnswer === "" ? null : (
                    <button
                      className={`${userActiveModule}-next-btn`}
                      size='lg'
                      onClick={HandleQuestionResult}
                    >
                      <TranslateText txt='SubModule7-ViewResult' />
                    </button>
                  )
                ) : userFillingAnswer === "" ? null : (
                  <div className='text-left m-5'>
                    <button
                      onClick={HandleFillingNextQuestion}
                      className={`${userActiveModule}-next-qst-btn`}
                      size='lg'
                    >
                      <TranslateText txt='SubModule7-NextQuestion' />
                    </button>
                  </div>
                )}
              </div>
            )}

          {SubModule1QuizQuestionText !== undefined &&
            AllQuestions[questionIndex].questionType === "Blank" && (
              <div className='m-5 text-left'>
                <div className='question font-weight-bold'>
                  {questionIndex + 1}.{" "}
                  {SubModule1QuizQuestionText !== undefined &&
                    this.CreateBlankQuestion(
                      SubModule1QuizQuestionText.question
                    )}
                </div>

                {questionIndex === questionCount ? (
                  userBlankAnswer.length === 0 ? null : (
                    <div className='text-center m-5'>
                      <button
                        className={`${userActiveModule}-next-btn`}
                        size='lg'
                        onClick={HandleQuestionResult}
                      >
                        <TranslateText txt='SubModule7-ViewResult' />
                      </button>
                    </div>
                  )
                ) : userBlankAnswer.length === 0 ? null : (
                  <div className='text-left m-5'>
                    <button
                      onClick={HandleBlankNextQuestion}
                      className={`${userActiveModule}-next-qst-btn`}
                      size='lg'
                    >
                      <TranslateText txt='SubModule7-NextQuestion' />
                    </button>
                  </div>
                )}
              </div>
            )}
        </div>
      </>
    );
  }
}
export default Question;
