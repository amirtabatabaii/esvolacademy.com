import React, { Component } from "react";

import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TranslateText from "../../Translate/TranslateText";

class CompareAnswers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ViewFilteredQuestion: [],
      FillingIconType: null,
      FillingStr: "",
    };
  }

  componentDidMount() {
    let NewFilter = [];
    let incorrectAnswers = [];
    let correctAnswers = [];
    const QuizQuestion = this.props.SubModule1QuizQuestion;
    const AllAnswersLanguage = this.props.UserQuizAllAnswersLanguage;
    // console.log(AllAnswersLanguage);

    for (let i = 0; i < QuizQuestion.length; i++) {
      incorrectAnswers.push(
        QuizQuestion[i].answers.filter((ans) => ans.correctAnswer === false)
      );
      correctAnswers.push(
        QuizQuestion[i].answers.filter((ans) => ans.correctAnswer === true)
      );
      // userAllAnswers.push([]);
    }

    let incorrectAnswers2 = [];
    let correctAnswers2 = [];
    for (let i = 0; i < incorrectAnswers.length; i++) {
      incorrectAnswers2.push([]);
    }

    for (let i = 0; i < correctAnswers.length; i++) {
      correctAnswers2.push([]);
    }

    for (let k = 0; k < QuizQuestion.length; k++) {
      // Manage incorrectAnswers
      if (incorrectAnswers[k].length === 0) {
        incorrectAnswers2[k].push();
      } else if (incorrectAnswers[k].length === 1) {
        incorrectAnswers2[k].push(
          incorrectAnswers[k][0].questionAnswersDictionaries.filter(
            (ans) => ans.language === AllAnswersLanguage[k]
          )[0].answerText
        );
      } else {
        for (let q = 0; q < incorrectAnswers[k].length; q++) {
          incorrectAnswers2[k].push(
            incorrectAnswers[k][q].questionAnswersDictionaries.filter(
              (ans) => ans.language === AllAnswersLanguage[k]
            )[0].answerText
          );
        }
      }
      // console.log(incorrectAnswers2);

      // Manage correctAnswers
      if (
        correctAnswers[k].length >= 1 &&
        (QuizQuestion[k].questionType === "Filling" ||
          QuizQuestion[k].questionType === "Blank")
      ) {
        for (let q = 0; q < correctAnswers[k].length; q++) {
          correctAnswers2[k].push(
            correctAnswers[k][q].questionAnswersDictionaries.filter(
              (ans) => ans.language === AllAnswersLanguage[k]
            )[0].answerText
          );
        }
      } else {
        // correctAnswers2[k][0] = QuizQuestion[k].answers
        correctAnswers2[k] = QuizQuestion[k].answers
          .filter((ans) => ans.correctAnswer === true)[0]
          .questionAnswersDictionaries.filter(
            (ans) => ans.language === AllAnswersLanguage[k]
          )[0].answerText;
      }
    }
    // console.log(" correctAnswers2 ", correctAnswers2);
    // console.log("incorrectAnswers2 ", incorrectAnswers2);

    for (let i = 0; i < QuizQuestion.length; i++) {
      NewFilter = [
        ...NewFilter,
        {
          point: QuizQuestion[i].point,
          correctAnswers: correctAnswers2[i],
          incorrectAnswers: incorrectAnswers2[i],
          question: QuizQuestion[i].questionDictionaries.filter(
            (qst) => qst.language === AllAnswersLanguage[i]
          )[0].questionText,
          questionType: QuizQuestion[i].questionType,
          moduleName: QuizQuestion[i].moduleName,
          NumberOfBlank: QuizQuestion[i].NumberOfBlank,
        },
      ];
    }

    // console.log("NewFilter222 ", NewFilter);
    this.setState({ ViewFilteredQuestion: NewFilter });
  }

  componentDidUpdate(previousProps, previousState) {
    if (
      this.state.ViewFilteredQuestion[this.props.questionIndex].questionType ===
      "Filling"
    ) {
      let Str = this.props.UserQuizAllAnswers[
        this.props.questionIndex
      ].toLowerCase();

      let Arr = this.state.ViewFilteredQuestion[this.props.questionIndex]
        .correctAnswers;

      let count = 0;
      for (let i = 0; i < Arr.length; i++) {
        if (Str.includes(Arr[i].toLowerCase()) == true) {
          Str = Str.replace(Arr[i].toLowerCase(), Arr[i].toUpperCase());
          count += 1;
        }
      }

      if (previousState.FillingStr === "" || previousState.FillingStr !== Str) {
        this.setState({
          FillingStr: Str,
        });
      }

      if (
        previousState.FillingIconType === null ||
        previousState.FillingIconType !== this.state.FillingIconType
      ) {
        if (count >= Math.round((Arr.length * 70) / 100)) {
          this.setState({
            FillingIconType: true,
          });
        } else {
          this.setState({
            FillingIconType: false,
          });
        }
      }
    }
  }

  CreateBlankQuestion = (QuestionText) => {
    const qstArr = QuestionText.split("_");

    const Answers = this.state.ViewFilteredQuestion[this.props.questionIndex]
      .correctAnswers;
    const UserAns = this.props.UserQuizAllAnswers[this.props.questionIndex];

    let qstInput = [];
    for (let i = 0; i < qstArr.length; i++) {
      qstInput.push(
        <>
          <label className='mt-3 ml-1 mr-1' style={{ width: "auto" }}>
            {qstArr[i]}
          </label>

          {qstArr.length - 1 === i ? null : (
            <>
              {UserAns[i].toLowerCase() === Answers[i].toLowerCase() ? (
                <label
                  className='mt-2 ml-1 mr-1'
                  style={{
                    width: "auto",
                    border: "2px solid green",
                    backgroundColor: "#B6F98B",
                  }}
                >
                  {UserAns[i]}
                </label>
              ) : (
                <>
                  <label
                    className='mt-2 ml-1 mr-1'
                    style={{
                      width: "auto",
                      border: "3px solid #545BFB",
                    }}
                  >
                    <del
                      style={{
                        width: "auto",
                        backgroundColor: "#FABFB4",
                      }}
                    >
                      {UserAns[i]}
                    </del>

                    <span
                      className='ml-2 mr-2'
                      style={{
                        width: "auto",
                        backgroundColor: "#D4FEB9",
                      }}
                    >
                      {" (" + Answers[i] + " )"}
                    </span>
                  </label>
                </>
              )}
            </>
          )}
        </>
      );
    }
    return qstInput;
  };

  render() {
    const {
      UserQuizAllAnswers,
      userActiveModule,
      questionCount,
      questionIndex,
      HandleCompareAnswerPrevQuestion,
      HandleCompareAnswerNextQuestion,
      HandleCompareAnswerQuestionResult,
    } = this.props;

    const { ViewFilteredQuestion, FillingIconType, FillingStr } = this.state;

    return (
      <div>
        {ViewFilteredQuestion.length !== 0 &&
          (ViewFilteredQuestion[questionIndex].questionType ===
            "MultipleChoice" ||
            ViewFilteredQuestion[questionIndex].questionType === "Boolean") && (
            <div className='m-5 text-left'>
              {/* question title */}
              <div className='question font-weight-bold'>
                {questionIndex + 1}.{" "}
                {ViewFilteredQuestion[questionIndex].question}
                {"    "}
                {ViewFilteredQuestion[questionIndex].correctAnswers ===
                UserQuizAllAnswers[questionIndex] ? (
                  <FontAwesomeIcon
                    className='m-2'
                    icon={faCheckCircle}
                    style={{ color: "green" }}
                    transform='down-8 grow-12'
                    fixedWidth
                  />
                ) : (
                  <FontAwesomeIcon
                    className='m-2'
                    icon={faTimesCircle}
                    style={{ color: "red" }}
                    transform='down-8 grow-12'
                    fixedWidth
                  />
                )}
              </div>

              <div className='mt-3'>
                {/* correct Ans */}
                <div
                  className='p-2 m-1 answers'
                  style={{
                    width: "auto",
                    backgroundColor: "#D4FEB9",
                    border: "2px solid green",
                  }}
                >
                  {ViewFilteredQuestion[questionIndex].correctAnswers}
                </div>

                {/* incorrect Ans */}
                {ViewFilteredQuestion.length !== 0 &&
                  ViewFilteredQuestion[questionIndex].incorrectAnswers.map(
                    (answers, index) => (
                      <>
                        {UserQuizAllAnswers[questionIndex] === answers ? (
                          <div
                            className='p-2 m-1 answers'
                            style={{
                              border: "2px solid red",
                              width: "auto",
                              backgroundColor: "#FCD8D2",
                            }}
                          >
                            {UserQuizAllAnswers[questionIndex]}
                          </div>
                        ) : (
                          <div key={index} className='p-2 m-1 answers'>
                            {answers}
                          </div>
                        )}
                      </>
                    )
                  )}
              </div>
            </div>
          )}

        {ViewFilteredQuestion.length !== 0 &&
          ViewFilteredQuestion[questionIndex].questionType === "Filling" && (
            <div className='m-5 text-left'>
              {/* question title */}
              <div className='question font-weight-bold'>
                {questionIndex + 1}.{" "}
                {ViewFilteredQuestion[questionIndex].question}
                {"    "}
                {FillingIconType ? (
                  <FontAwesomeIcon
                    className='m-2'
                    icon={faCheckCircle}
                    style={{ color: "green" }}
                    transform='down-8 grow-12'
                    fixedWidth
                  />
                ) : (
                  <FontAwesomeIcon
                    className='m-2'
                    icon={faTimesCircle}
                    style={{ color: "red" }}
                    transform='down-8 grow-12'
                    fixedWidth
                  />
                )}
              </div>

              {/* user Answer */}
              <div className='mt-3'>
                <div>
                  <label className='w-100 m-2'>{FillingStr}</label>
                </div>
              </div>
            </div>
          )}

        {ViewFilteredQuestion.length !== 0 &&
          ViewFilteredQuestion[questionIndex].questionType === "Blank" && (
            <div className='m-5 text-left'>
              <div>
                {/* question title */}
                <div className='question font-weight-bold'>
                  {questionIndex + 1}.{" "}
                  {this.CreateBlankQuestion(
                    ViewFilteredQuestion[questionIndex].question
                  )}
                </div>
              </div>
            </div>
          )}

        <button
          onClick={HandleCompareAnswerPrevQuestion}
          className={`${userActiveModule}-next-qst-btn m-2 mb-4`}
          disabled={questionIndex === 0 ? true : false}
        >
          <TranslateText txt='SubModule7-PrevQuestion' />
        </button>

        <button
          className={`${userActiveModule}-next-btn m-2 mb-4`}
          onClick={HandleCompareAnswerQuestionResult}
        >
          <TranslateText txt='SubModule7-ViewResult' />
        </button>

        <button
          onClick={HandleCompareAnswerNextQuestion}
          className={`${userActiveModule}-next-qst-btn m-2 mb-4`}
          disabled={questionIndex === questionCount ? true : false}
        >
          <TranslateText txt='SubModule7-NextQuestion' />
        </button>
      </div>
    );
  }
}

export default CompareAnswers;
