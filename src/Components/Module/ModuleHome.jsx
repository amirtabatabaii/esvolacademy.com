import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";

import "./ModuleHome.css";
import SubModuleBtn from "./SubModuleBtn";
import ModuleNavBar from "./ModuleNavBar";

import { withRouter } from "react-router-dom";
import {
  SelectedSubModule,
  UserActiveModuleSubModule,
  SubModule1Quiz,
  SubModule1QuizFiltered,
  SetQuizScore,
  SetUserQuizAnswer,
} from "../../Redux/action";
import { connect } from "react-redux";
import Footer from "../Footer/Footer";
import SubModule from "../SubModules/SubModule";
import ModuleStagesName from "./ModuleStagesName";
import SubModuleNote from "../SubModules/SubModuleNote";

let userAllAnswers = [];
let userAllAnswersLanguage = [];
let userBlankAnswers = [];

class ModuleHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userActiveModule: "",
      userActiveSubModule: "",
      //
      SubModule7QuizQuestion: [],
      SubModule7QuizQuestionFilterd: [],
      randomAnswers: [],
      AllQuestions: [],
      userAnswer: "",
      userYesNoAnswer: "",
      userMultipleChoiceAnswer: "",
      userFillingAnswer: "",
      userBlankAnswer: [],
      questionCount: 0,
      questionIndex: 0,
      selectedLanguage: "En",
      correctAnswerCount: 0,
      showResult: false,
      takeQuiz: true,
      compareAnswer: false,
      userAllAnswers: [],
      userAllAnswersLanguage: [],
      userScore: 0,
    };

    this.handleClickSubModuleNext = this.handleClickSubModuleNext.bind(this);
    this.handleOnClickSubModule = this.handleOnClickSubModule.bind(this);
    this.handleClickModuleNext = this.handleClickModuleNext.bind(this);
    this.getRandomAnswer = this.getRandomAnswer.bind(this);
  }

  async componentDidMount() {
    //Get Module 1 questions
    await axios
      .get(
        // `https://run.mocky.io/v3/51c388ae-3b25-4a84-be49-5a7ac17d993f`
        `https://run.mocky.io/v3/9a4f4608-9abb-4f36-aff8-dd776d113568`
        //  {
        //   headers: {
        //     Authorization: localStorage.getItem("jwtToken"),
        //   },
        // }
      )
      .then((Response) => {
        this.props.SubModule1Quiz(Response.data.results);
      });

    this.getRandomAnswer(
      this.props.SubModule7QuizQuestion,
      this.props.selectedLanguage
    );

    this.setState({
      questionCount: this.props.SubModule7QuizQuestion.length - 1,
    });
  }

  handleOnClickSubModule(ActiveSubName) {
    const UserActiveSubNumber = this.props.userActiveSubModule.substring(3);
    const UserSelectedSubNumber = ActiveSubName.substring(3);

    if (!this.props.EducationWithTasks) {
      if (
        UserSelectedSubNumber === "1" ||
        UserSelectedSubNumber === "2" ||
        UserSelectedSubNumber === "6" ||
        UserSelectedSubNumber === "7"
      ) {
        this.props.SelectedSubModule(ActiveSubName);
      }
    } else {
      if (UserSelectedSubNumber <= UserActiveSubNumber)
        this.props.SelectedSubModule(ActiveSubName);
      //else alert("YOU CAN NOT ENTER THIS SUBMODULE !!");
    }
  }

  handleClickSubModuleNext(ActiveSubName) {
    this.props.SelectedSubModule("sub" + ActiveSubName.substring(3));
  }

  handleClickModuleNext(ActiveModuleName, ActiveSubName) {
    const ModuleNumber = ActiveModuleName.substr(ActiveModuleName.length - 1);
    const editedModuleName = ActiveModuleName.slice(0, -1);

    if (ModuleNumber === "5") {
      alert("Finish Page...!!");
    } else {
      this.props.UserActiveModuleSubModule(
        editedModuleName + (parseInt(ModuleNumber) + 1),
        ActiveSubName
      );
    }
  }

  componentDidUpdate(previousProps) {
    if (previousProps.selectedLanguage !== this.props.selectedLanguage) {
      this.setState({
        SubModule7QuizQuestionFilterd: [],
        selectedLanguage: this.props.selectedLanguage,
        userAnswer: "",
      });
      this.getRandomAnswer(
        this.props.SubModule7QuizQuestion,
        this.props.selectedLanguage
      );
    }
  }

  getRandomAnswer = (QuizQuestion, lng) => {
    let NewFilter = [];
    let incorrectAnswers = [];
    let correctAnswers = [];

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
      // if (correctAnswers.length !== 1)
      correctAnswers2.push([]);
    }

    for (let k = 0; k < QuizQuestion.length; k++) {
      // Manage incorrectAnswers
      if (incorrectAnswers[k].length === 0) {
        incorrectAnswers2[k].push();
      } else if (incorrectAnswers[k].length === 1) {
        incorrectAnswers2[k].push(
          incorrectAnswers[k][0].questionAnswersDictionaries.filter(
            (ans) => ans.language === lng
          )[0].answerText
        );
      } else {
        for (let q = 0; q < incorrectAnswers[k].length; q++) {
          incorrectAnswers2[k].push(
            incorrectAnswers[k][q].questionAnswersDictionaries.filter(
              (ans) => ans.language === lng
            )[0].answerText
          );
        }
      }

      // Manage correctAnswers
      if (
        correctAnswers[k].length >= 1 &&
        (QuizQuestion[k].questionType === "Filling" ||
          QuizQuestion[k].questionType === "Blank")
      ) {
        for (let q = 0; q < correctAnswers[k].length; q++) {
          correctAnswers2[k].push(
            correctAnswers[k][q].questionAnswersDictionaries.filter(
              (ans) => ans.language === lng
            )[0].answerText
          );
        }
      } else {
        // correctAnswers2[k][0] = QuizQuestion[k].answers
        correctAnswers2[k] = QuizQuestion[k].answers
          .filter((ans) => ans.correctAnswer === true)[0]
          .questionAnswersDictionaries.filter(
            (ans) => ans.language === lng
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
            (qst) => qst.language === lng
          )[0].questionText,
          questionType: QuizQuestion[i].questionType,
          moduleName: QuizQuestion[i].moduleName,
          NumberOfBlank: QuizQuestion[i].NumberOfBlank,
        },
      ];
    }

    this.props.SubModule1QuizFiltered(NewFilter);

    const correctAns = NewFilter[this.state.questionIndex].correctAnswers;
    const incorrectAns = NewFilter[this.state.questionIndex].incorrectAnswers;
    //
    const randomAnswers = [...incorrectAns];
    randomAnswers.push(correctAns);
    //
    let i = randomAnswers.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = randomAnswers[i];
      randomAnswers[i] = randomAnswers[j];
      randomAnswers[j] = temp;
    }
    //
    this.setState({
      randomAnswers: randomAnswers,
      AllQuestions: NewFilter,
    });
  };

  HandleMultipleChoiceAnswerChange = (e) => {
    this.setState(
      {
        userMultipleChoiceAnswer: e.target.value,
      },
      () => {
        userAllAnswers[
          this.state.questionIndex
        ] = this.state.userMultipleChoiceAnswer;
        userAllAnswersLanguage[
          this.state.questionIndex
        ] = this.props.selectedLanguage;
        // console.log(userAllAnswers);
        // console.log(userAllAnswersLanguage);
      }
    );
  };

  HandleYesNoAnswerChange = (e) => {
    this.setState(
      {
        userYesNoAnswer: e.target.value,
      },
      () => {
        userAllAnswers[this.state.questionIndex] = this.state.userYesNoAnswer;
        userAllAnswersLanguage[
          this.state.questionIndex
        ] = this.props.selectedLanguage;
        // console.log(userAllAnswers);
        // console.log(userAllAnswersLanguage);
      }
    );
  };

  HandleQuestionFillingAnswerChange = (e) => {
    this.setState(
      {
        userFillingAnswer: e.target.value,
      },
      () => {
        userAllAnswers[this.state.questionIndex] = this.state.userFillingAnswer;
        userAllAnswersLanguage[
          this.state.questionIndex
        ] = this.props.selectedLanguage;
        // console.log(userAllAnswers);
        // console.log(userAllAnswersLanguage);
      }
    );
  };

  HandleNextQuestion = () => {
    // let answer = userAllAnswers[this.state.questionIndex].substring(2);
    // console.log(answer);

    if (
      userAllAnswers[this.state.questionIndex] ===
      this.state.AllQuestions[this.state.questionIndex].correctAnswers
    )
      this.setState({
        userScore:
          parseInt(this.state.userScore) +
          parseInt(this.state.AllQuestions[this.state.questionIndex].point),
      });

    this.setState(
      {
        questionIndex: this.state.questionIndex + 1,
        userMultipleChoiceAnswer: "",
        userYesNoAnswer: "",
      },
      () => {
        this.getRandomAnswer(
          this.props.SubModule7QuizQuestion,
          this.props.selectedLanguage
        );
      }
    );
  };

  HandleFillingNextQuestion = () => {
    let Str = this.state.userFillingAnswer.toLowerCase();

    let Arr = this.props.SubModule7QuizQuestionFiltered[
      this.state.questionIndex
    ].correctAnswers;

    let count = 0;
    for (let i = 0; i < Arr.length; i++) {
      if (Str.includes(Arr[i].toLowerCase())) count += 1;
    }

    if (count >= Math.round((Arr.length * 70) / 100)) {
      this.setState({
        userScore:
          parseInt(this.state.userScore) +
          parseInt(this.state.AllQuestions[this.state.questionIndex].point),
      });
    }

    this.setState(
      {
        questionIndex: this.state.questionIndex + 1,
        userFillingAnswer: "",
      },
      () => {
        this.getRandomAnswer(
          this.props.SubModule7QuizQuestion,
          this.props.selectedLanguage
        );
      }
    );
  };

  handleBlankAnswerInputChange = (e, i) => {
    userBlankAnswers[i] = e.target.value;

    this.setState(
      {
        userBlankAnswer: userBlankAnswers, //.join(" , "),
      },
      () => {
        userAllAnswers[this.state.questionIndex] = this.state.userBlankAnswer;
        userAllAnswersLanguage[
          this.state.questionIndex
        ] = this.props.selectedLanguage;
        // console.log(userAllAnswers);
        // console.log(userAllAnswersLanguage);
      }
    );
  };

  HandleBlankNextQuestion = () => {
    let point = this.props.SubModule7QuizQuestionFiltered[
      this.state.questionIndex
    ].point;
    let ansArr = this.props.SubModule7QuizQuestionFiltered[
      this.state.questionIndex
    ].correctAnswers;
    let eachBlankPoint = parseInt(point) / parseInt(ansArr.length);

    let count = 0;
    for (let m = 0; m < ansArr.length; m++) {
      if (userBlankAnswers[m] === undefined) userBlankAnswers[m] = "";
      else if (userBlankAnswers[m].toLowerCase() === ansArr[m].toLowerCase()) {
        count += 1;
      }
    }

    this.setState(
      {
        userScore:
          parseInt(this.state.userScore) +
          parseInt(count) * parseInt(eachBlankPoint),
      }
      // () => console.log(this.state.userScore)
    );

    userBlankAnswers = [];

    this.setState(
      {
        questionIndex: this.state.questionIndex + 1,
        userBlankAnswer: [],
      },
      () => {
        // userBlankAnswers = [];
        this.getRandomAnswer(
          this.props.SubModule7QuizQuestion,
          this.props.selectedLanguage
        );
      }
    );
  };

  HandlePrevQuestion = () => {
    this.setState(
      {
        questionIndex: this.state.questionIndex - 1,
        userAnswer: "",
      },
      () => {
        this.getRandomAnswer(
          this.props.SubModule7QuizQuestion,
          this.props.selectedLanguage
        );
      }
    );
  };

  HandleQuestionResult = () => {
    let sumPoint = 0;
    for (let m = 0; m < this.props.SubModule7QuizQuestionFiltered.length; m++) {
      sumPoint += parseInt(this.props.SubModule7QuizQuestionFiltered[m].point);
      // userAllAnswers[m] = userAllAnswers[m].substring(2);
    }
    // console.log(userAllAnswers);

    if (
      this.props.SubModule7QuizQuestionFiltered[this.state.questionIndex]
        .questionType === "MultipleChoice"
    ) {
      if (
        userAllAnswers[this.state.questionIndex] ===
        this.props.SubModule7QuizQuestionFiltered[this.state.questionIndex]
          .correctAnswers
      )
        this.setState(
          {
            userScore:
              parseInt(this.state.userScore) +
              parseInt(
                this.props.SubModule7QuizQuestionFiltered[
                  this.state.questionIndex
                ].point
              ),
          },
          () => {
            this.props.SetQuizScore(
              parseInt(this.state.userScore),
              parseInt(sumPoint)
            );
            this.props.SetUserQuizAnswer(
              userAllAnswers,
              userAllAnswersLanguage
            );
          }
        );
    } else if (
      this.props.SubModule7QuizQuestionFiltered[this.state.questionIndex]
        .questionType === "Boolean"
    ) {
      if (
        userAllAnswers[this.state.questionIndex] ===
        this.props.SubModule7QuizQuestionFiltered[this.state.questionIndex]
          .correctAnswers
      )
        this.setState(
          {
            userScore:
              parseInt(this.state.userScore) +
              parseInt(
                this.props.SubModule7QuizQuestionFiltered[
                  this.state.questionIndex
                ].point
              ),
          },
          () => {
            this.props.SetQuizScore(
              parseInt(this.state.userScore),
              parseInt(sumPoint)
            );
            this.props.SetUserQuizAnswer(
              userAllAnswers,
              userAllAnswersLanguage
            );
          }
        );
    } else if (
      this.props.SubModule7QuizQuestionFiltered[this.state.questionIndex]
        .questionType === "Filling"
    ) {
      let Str = this.state.userFillingAnswer.toLowerCase();

      let Arr = this.props.SubModule7QuizQuestionFiltered[
        this.state.questionIndex
      ].correctAnswers;

      let count = 0;
      for (let i = 0; i < Arr.length; i++) {
        if (Str.includes(Arr[i].toLowerCase())) count += 1;
      }

      if (count >= Math.round((Arr.length * 70) / 100)) {
        this.setState(
          {
            userScore:
              parseInt(this.state.userScore) +
              parseInt(
                this.props.SubModule7QuizQuestionFiltered[
                  this.state.questionIndex
                ].point
              ),
          },
          () => {
            this.props.SetQuizScore(
              parseInt(this.state.userScore),
              parseInt(sumPoint)
            );
            this.props.SetUserQuizAnswer(
              userAllAnswers,
              userAllAnswersLanguage
            );
          }
        );
      }
    } else if (
      this.props.SubModule7QuizQuestionFiltered[this.state.questionIndex]
        .questionType === "Blank"
    ) {
      let point = this.props.SubModule7QuizQuestionFiltered[
        this.state.questionIndex
      ].point;
      let ansArr = this.props.SubModule7QuizQuestionFiltered[
        this.state.questionIndex
      ].correctAnswers;
      let eachBlankPoint = parseInt(point) / parseInt(ansArr.length);

      let count = 0;
      for (let m = 0; m < ansArr.length; m++) {
        if (userBlankAnswers[m] === undefined) userBlankAnswers[m] = "";
        else if (
          userBlankAnswers[m].toLowerCase() === ansArr[m].toLowerCase()
        ) {
          count += 1;
        }
      }
      this.setState(
        {
          userScore:
            parseInt(this.state.userScore) +
            parseInt(count) * parseInt(eachBlankPoint),
        },
        () => {
          this.props.SetQuizScore(
            parseInt(this.state.userScore),
            parseInt(sumPoint)
          );
          this.props.SetUserQuizAnswer(userAllAnswers, userAllAnswersLanguage);
        }
      );
    }

    this.props.SetQuizScore(parseInt(this.state.userScore), parseInt(sumPoint));
    this.props.SetUserQuizAnswer(userAllAnswers, userAllAnswersLanguage);

    this.setState({
      showResult: true,
      compareAnswer: false,
      takeQuiz: false,
      questionIndex: 0,
    });
  };

  HandleRetakeQuiz = () => {
    userAllAnswers = [];
    userBlankAnswers = [];

    this.setState(
      {
        SubModule7QuizQuestion: [],
        randomAnswers: [],
        userAnswer: "",
        questionIndex: 0,
        // questionLanguage: "",
        correctAnswerCount: 0,
        showResult: false,
        takeQuiz: true,
        compareAnswer: false,
        questionCount: this.props.SubModule7QuizQuestion.length - 1,
        //
        userYesNoAnswer: "",
        userMultipleChoiceAnswer: "",
        userFillingAnswer: "",
        userBlankAnswer: [],
        userAllAnswers: [],
        userScore: 0,
      },
      () =>
        this.getRandomAnswer(
          //this.props.SubModule7QuizQuestion[this.state.questionIndex]
          this.props.SubModule7QuizQuestion,
          this.props.selectedLanguage
        )
    );

    this.getRandomAnswer(
      // this.props.SubModule7QuizQuestion[this.state.questionIndex]
      this.props.SubModule7QuizQuestion,
      this.props.selectedLanguage
    );
  };

  HandleCompareAnswer = () => {
    this.setState({
      showResult: false,
      takeQuiz: false,
      compareAnswer: true,
    });
  };

  HandleCompareAnswerNextQuestion = () => {
    this.setState({
      questionIndex: this.state.questionIndex + 1,
    });
  };

  HandleCompareAnswerPrevQuestion = () => {
    this.setState({
      questionIndex: this.state.questionIndex - 1,
    });
  };

  HandleCompareAnswerQuestionResult = () => {
    this.setState({
      showResult: true,
      takeQuiz: false,
      compareAnswer: false,
      questionIndex: 0,
    });
  };

  render() {
    const {
      userActiveModule,
      userActiveSubModule,
      SubModule1Url,
      SubModule1Ratio,
      SubModule2Url,
      SubModule2Ratio,
      SubModule61Url,
      SubModule61Ratio,
      SubModule61Title,
      SubModule62Url,
      SubModule62Ratio,
      SubModule62Title,
      SubModule7QuizQuestionFiltered,
      SubModule7QuizQuestion,
      //
      userQuizScore,
      QuizScore,
      UserQuizAllAnswers,
      selectedLanguage,
      UserQuizAllAnswersLanguage,
      EducationWithTasks,
    } = this.props;

    const { randomAnswers } = this.state;

    return (
      <div className='main-bg-color'>
        <ModuleNavBar userActiveModule={userActiveModule} />

        <Container>
          <Row className='w-100 pt-5 pb-5'>
            {/* Module panel */}
            <Col lg={2} className='d-flex justify-content-end'>
              <ModuleStagesName userActiveModule={userActiveModule} />
            </Col>

            <Col lg={10}>
              <div className='d-flex justify-content-start'>
                {/* SubModule panel */}
                <SubModuleBtn
                  userActiveSubModule={userActiveSubModule}
                  userActiveModule={userActiveModule}
                  onClick={this.handleOnClickSubModule}
                  EducationWithTasks={EducationWithTasks}
                />
              </div>

              {/* SubModule Note Section */}
              <SubModuleNote
                userActiveSubModule={userActiveSubModule}
                showResult={this.state.showResult}
                takeQuiz={this.state.takeQuiz}
                compareAnswer={this.state.compareAnswer}
                EducationWithTasks={EducationWithTasks}
              />

              {/* SubModule Section */}
              <SubModule
                userActiveModule={userActiveModule}
                userActiveSubModule={userActiveSubModule}
                SubModule1Url={SubModule1Url}
                SubModule1Ratio={SubModule1Ratio}
                SubModule2Url={SubModule2Url}
                SubModule2Ratio={SubModule2Ratio}
                SubModule61Url={SubModule61Url}
                SubModule61Ratio={SubModule61Ratio}
                SubModule61Title={SubModule61Title}
                SubModule62Url={SubModule62Url}
                SubModule62Ratio={SubModule62Ratio}
                SubModule62Title={SubModule62Title}
                SubModule7QuizQuestionFiltered={SubModule7QuizQuestionFiltered}
                SubModule7QuizQuestionText={
                  SubModule7QuizQuestionFiltered[this.state.questionIndex]
                }
                questionIndex={this.state.questionIndex}
                questionCount={this.state.questionCount}
                userAnswer={this.state.userAnswer}
                userFillingAnswer={this.state.userFillingAnswer}
                userBlankAnswer={this.state.userBlankAnswer}
                userYesNoAnswer={this.state.userYesNoAnswer}
                userMultipleChoiceAnswer={this.state.userMultipleChoiceAnswer}
                HandleYesNoAnswerChange={this.HandleYesNoAnswerChange}
                HandleMultipleChoiceAnswerChange={
                  this.HandleMultipleChoiceAnswerChange
                }
                HandleBlankNextQuestion={this.HandleBlankNextQuestion}
                showResult={this.state.showResult}
                correctAnswerCount={this.state.correctAnswerCount}
                randomAnswers={randomAnswers}
                AllQuestions={SubModule7QuizQuestionFiltered}
                SubModule7QuizQuestion={SubModule7QuizQuestion}
                takeQuiz={this.state.takeQuiz}
                onClick={this.handleClickSubModuleNext}
                onClickNextModule={this.handleClickModuleNext}
                getRandomAnswer={this.getRandomAnswer}
                HandleQuestionAnswerChange={this.HandleQuestionAnswerChange}
                HandleQuestionFillingAnswerChange={
                  this.HandleQuestionFillingAnswerChange
                }
                HandleNextQuestion={this.HandleNextQuestion}
                HandleFillingNextQuestion={this.HandleFillingNextQuestion}
                handleBlankAnswerInputChange={this.handleBlankAnswerInputChange}
                HandlePrevQuestion={this.HandlePrevQuestion}
                HandleQuestionResult={this.HandleQuestionResult}
                HandleRetakeQuiz={this.HandleRetakeQuiz}
                //
                selectedLanguage={selectedLanguage}
                userQuizScore={userQuizScore}
                QuizScore={QuizScore}
                UserQuizAllAnswers={UserQuizAllAnswers}
                UserQuizAllAnswersLanguage={UserQuizAllAnswersLanguage}
                HandleCompareAnswer={this.HandleCompareAnswer}
                CompareAnswer={this.state.compareAnswer}
                HandleCompareAnswerNextQuestion={
                  this.HandleCompareAnswerNextQuestion
                }
                HandleCompareAnswerPrevQuestion={
                  this.HandleCompareAnswerPrevQuestion
                }
                HandleCompareAnswerQuestionResult={
                  this.HandleCompareAnswerQuestionResult
                }
                EducationWithTasks={EducationWithTasks}
              />
            </Col>
          </Row>
        </Container>

        <Footer userActiveModule={userActiveModule} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userActiveModule: state.userActiveModule,
  userActiveSubModule: state.userActiveSubModule,
  //
  SubModule1Url: state.SubModule1Url,
  SubModule1Ratio: state.SubModule1Ratio,
  SubModule2Url: state.SubModule2Url,
  SubModule2Ratio: state.SubModule2Ratio,
  SubModule61Url: state.SubModule61Url,
  SubModule61Ratio: state.SubModule61Ratio,
  SubModule61Title: state.SubModule61Title,
  SubModule62Url: state.SubModule62Url,
  SubModule62Ratio: state.SubModule62Ratio,
  SubModule62Title: state.SubModule62Title,
  //
  SubModule7QuizQuestion: state.SubModule7QuizQuestion,
  SubModule7QuizQuestionFiltered: state.SubModule7QuizQuestionFiltered,
  //
  selectedLanguage: state.selectedLanguage,

  userQuizScore: state.userQuizScore,
  QuizScore: state.QuizScore,
  UserQuizAllAnswers: state.UserQuizAllAnswers,
  UserQuizAllAnswersLanguage: state.UserQuizAllAnswersLanguage,
  //
  EducationWithTasks: state.EducationWithTasks,
});

export default connect(mapStateToProps, {
  SelectedSubModule,
  UserActiveModuleSubModule,
  SubModule1Quiz,
  SubModule1QuizFiltered,
  SetQuizScore,
  SetUserQuizAnswer,
})(withRouter(ModuleHome));
