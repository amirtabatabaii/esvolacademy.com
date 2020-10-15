import React, { Component } from "react";
import { Col, Image, Row } from "react-bootstrap";
import TranslateText from "../../Translate/TranslateText";
import StarFull from "../../../assets/img/starFull.png";
import Retake from "../../../assets/img/retake.png";
import QuizPassFail from "../../Utility/QuizPassFail";

class ShowResult extends Component {
  percentageQuizScore = (QuizScore) => {
    if (QuizScore !== 0) return (QuizScore * 70) / 100;
    //if (QuizScore !== 0) return (QuizScore * 5) / 100;
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
        <h3 className='m-2'>
          {userQuizScore >= this.percentageQuizScore(QuizScore) ? (
            <>
              <QuizPassFail
                userActiveModule={userActiveModule}
                userQuizScore={userQuizScore}
                QuizScore={QuizScore}
                StarFull={StarFull}
                Passed={true}
              />

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
              <QuizPassFail
                userActiveModule={userActiveModule}
                userQuizScore={userQuizScore}
                QuizScore={QuizScore}
                Retake={Retake}
                Passed={false}
              />

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
