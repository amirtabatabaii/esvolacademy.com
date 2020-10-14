import React, { Component } from "react";
import TranslateText from "../../Translate/TranslateText";

class ShowResult extends Component {
  percentageQuizScore = (QuizScore) => {
    // if (QuizScore !== 0) return (QuizScore * 70) / 100;
    if (QuizScore !== 0) return (QuizScore * 5) / 100;
  };

  render() {
    const {
      HandleRetakeQuiz,
      onClickNextModule,
      userActiveModule,
      userQuizScore,
      QuizScore,
      HandleCompareAnswer,
    } = this.props;

    return (
      <div>
        <h3 className='m-5' style={{ color: "#525252" }}>
          <TranslateText txt='SubModule7-YourScore' /> : {userQuizScore} /{" "}
          {QuizScore}
        </h3>

        <h3 className='m-5'>
          {userQuizScore >= this.percentageQuizScore(QuizScore) ? (
            <>
              <h3 className='text-success m-3'>
                <TranslateText txt='SubModule7-Passed' />
              </h3>

              <button
                className={`${userActiveModule}-next-btn m-4`}
                onClick={HandleCompareAnswer}
              >
                <TranslateText txt='SubModule7-CheckAnswers' />
              </button>

              <button
                className={`${userActiveModule}-next-btn m-4`}
                onClick={() => onClickNextModule(userActiveModule, "sub1")}
              >
                {userActiveModule === "Module5" ? (
                  <TranslateText txt='SubModule7-FinishModule' />
                ) : (
                  <TranslateText txt='SubModule7-NextModule' />
                )}
              </button>
            </>
          ) : (
            <>
              <h3 className='text-danger m-4'>
                {" "}
                <TranslateText txt='SubModule7-Failed' />
              </h3>

              <button
                className={`${userActiveModule}-next-btn m-3`}
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
