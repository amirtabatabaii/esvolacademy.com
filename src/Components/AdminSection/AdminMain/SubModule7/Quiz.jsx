import React, { Component } from "react";
import QuizAddQuestions from "./QuizAddQuestions";

class Quiz extends Component {
  render() {
    return (
      <QuizAddQuestions
        adminActiveSubModule={this.props.adminActiveSubModule}
        adminActiveModule={this.props.adminActiveModule}
      />
    );
  }
}

export default Quiz;
