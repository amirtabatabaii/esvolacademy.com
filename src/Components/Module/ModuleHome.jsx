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
  SubModule1Detail,
  SubModule2Detail,
  SubModule6Detail,
  SubModule1Quiz,
} from "../../Redux/action";
import { connect } from "react-redux";
import Footer from "../Footer/Footer";
import SubModule from "../SubModules/SubModule";
import ModuleStagesName from "./ModuleStagesName";
import SubModuleNote from "../SubModules/SubModuleNote";

class ModuleHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userActiveModule: "",
      userActiveSubModule: "",
      //
      SubModule1Title: "",
      SubModule1Url: "",
      SubModule1Ratio: "",
      //
      SubModule2Title: "",
      SubModule2Url: "",
      SubModule2Ratio: "",
      //
      SubModule6Title: "",
      SubModule6Url: "",
      SubModule6Ratio: "",
      //
      SubModule1QuizQuestion: [],
      randomAnswers: [],
      userAnswer: "",
      questionCount: 0,
      questionIndex: 0,
      correctAnswerCount: 0,
      showResult: false,
      takeQuiz: true,
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
        `https://run.mocky.io/v3/c8fd0d94-2a99-4280-b78c-5e988e9869a0`
        //  {
        //   headers: {
        //     Authorization: localStorage.getItem("jwtToken"),
        //   },
        // }
      )
      .then((Response) => {
        this.props.SubModule1Quiz(Response.data.results);
      });

    this.props.UserActiveModuleSubModule("Module1", "sub7");

    this.props.SubModule1Detail(
      "SubModule_1_Video",
      "https://www.youtube.com/watch?v=A2pM6u-d-MM",
      //"https://www.kastanjetextile.com/video/kastanje-en.mp4",
      "80"
    );

    this.props.SubModule2Detail(
      "SubModule_2_Video",
      "https://www.youtube.com/watch?v=_npPA9ydDTs",
      "70"
    );

    this.props.SubModule6Detail(
      "SubModule_6_Video",
      "https://www.youtube.com/watch?v=3_JsyidKdaI",
      "60"
    );

    this.getRandomAnswer(
      this.props.SubModule1QuizQuestion[this.state.questionIndex]
    );

    this.setState({
      questionCount: this.props.SubModule1QuizQuestion.length - 1,
    });
  }

  handleOnClickSubModule(ActiveSubName) {
    const UserActiveSubNumber = this.props.userActiveSubModule.substring(3);
    const UserSelectedSubNumber = ActiveSubName.substring(3);
    if (UserSelectedSubNumber <= UserActiveSubNumber)
      this.props.SelectedSubModule(ActiveSubName);
    //else alert("YOU CAN NOT ENTER THIS SUBMODULE !!");
  }

  handleClickSubModuleNext(ActiveSubName) {
    this.props.SelectedSubModule("sub" + ActiveSubName.substring(3));
  }

  handleClickModuleNext(ActiveModuleName, ActiveSubName) {
    this.props.UserActiveModuleSubModule(ActiveModuleName, ActiveSubName);
  }

  getRandomAnswer = (QuizQuestion) => {
    console.log(QuizQuestion);
    const correctAns = QuizQuestion.correct_answer;
    const incorrectAns = QuizQuestion.incorrect_answers;

    const randomAnswers = [...incorrectAns];
    randomAnswers.push(correctAns);

    let i = randomAnswers.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = randomAnswers[i];
      randomAnswers[i] = randomAnswers[j];
      randomAnswers[j] = temp;
    }

    this.setState({
      randomAnswers: randomAnswers,
    });
  };

  HandleQuestionAnswerChange = (e) => {
    const userAnswer = e.target.value;
    this.setState({
      userAnswer: userAnswer,
    });
  };

  HandleNextQuestion = () => {
    if (
      this.props.SubModule1QuizQuestion[this.state.questionIndex]
        .correct_answer === this.state.userAnswer
    ) {
      this.setState({
        correctAnswerCount: this.state.correctAnswerCount + 1,
      });
    }

    this.setState(
      {
        questionIndex: this.state.questionIndex + 1,
        userAnswer: "",
      },
      () => {
        this.getRandomAnswer(
          this.props.SubModule1QuizQuestion[this.state.questionIndex]
        );
      }
    );
  };

  HandleQuestionResult = () => {
    if (
      this.props.SubModule1QuizQuestion[this.state.questionIndex]
        .correct_answer === this.state.userAnswer
    ) {
      this.setState({
        correctAnswerCount: this.state.correctAnswerCount + 1,
      });
    }

    this.setState({
      showResult: true,
    });
  };

  HandleRetakeQuiz = () => {
    this.setState({
      userAnswer: "",
      questionIndex: 0,
      correctAnswerCount: 0,
      showResult: false,
      takeQuiz: true,
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
      SubModule6Url,
      SubModule6Ratio,
      SubModule1QuizQuestion,
    } = this.props;

    const { randomAnswers } = this.state;

    return (
      <div className='main-bg-color'>
        <ModuleNavBar userActiveModule={userActiveModule} />

        <Container>
          <Row
            // style={{ paddingTop: "130px" }}
            className='w-100 pt-5 pb-5'
          >
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
                />
              </div>

              {/* SubModule Note Section */}
              <SubModuleNote userActiveSubModule={userActiveSubModule} />

              {/* SubModule Section */}
              <SubModule
                userActiveModule={userActiveModule}
                userActiveSubModule={userActiveSubModule}
                SubModule1Url={SubModule1Url}
                SubModule1Ratio={SubModule1Ratio}
                SubModule2Url={SubModule2Url}
                SubModule2Ratio={SubModule2Ratio}
                SubModule6Url={SubModule6Url}
                SubModule6Ratio={SubModule6Ratio}
                SubModule1QuizQuestion={SubModule1QuizQuestion}
                questionIndex={this.state.questionIndex}
                questionCount={this.state.questionCount}
                userAnswer={this.state.userAnswer}
                showResult={this.state.showResult}
                correctAnswerCount={this.state.correctAnswerCount}
                randomAnswers={randomAnswers}
                takeQuiz={this.state.takeQuiz}
                onClick={this.handleClickSubModuleNext}
                onClickNextModule={this.handleClickModuleNext}
                getRandomAnswer={this.getRandomAnswer}
                HandleQuestionAnswerChange={this.HandleQuestionAnswerChange}
                HandleNextQuestion={this.HandleNextQuestion}
                HandleQuestionResult={this.HandleQuestionResult}
                HandleRetakeQuiz={this.HandleRetakeQuiz}
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
  SubModule1Title: state.SubModule1Title,
  SubModule1Url: state.SubModule1Url,
  SubModule1Ratio: state.SubModule1Ratio,
  //
  SubModule2Title: state.SubModule2Title,
  SubModule2Url: state.SubModule2Url,
  SubModule2Ratio: state.SubModule2Ratio,
  //
  SubModule6Title: state.SubModule6Title,
  SubModule6Url: state.SubModule6Url,
  SubModule6Ratio: state.SubModule6Ratio,
  //
  SubModule1QuizQuestion: state.SubModule1QuizQuestion,
});

export default connect(mapStateToProps, {
  SelectedSubModule,
  UserActiveModuleSubModule,
  SubModule1Detail,
  SubModule2Detail,
  SubModule6Detail,
  SubModule1Quiz,
})(withRouter(ModuleHome));
