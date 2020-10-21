import React from "react";
import TranslateText from "../Translate/TranslateText";
import { Col, Image, Row } from "react-bootstrap";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

function QuizPassFail(props) {
  const { width, height } = useWindowSize();

  return (
    <Row className='w-100'>
      {props.Passed && (
        <Confetti
          // width={(width * 50) / 100}
          // height={height}
          width={(width * 50) / 100}
          height={height}
          confettiSource={{
            // w: 10,
            // h: 10,
            x: width / 3,
            y: height / 3,
          }}
        />
      )}

      <Col lg={6} md={6} sm={12} className='m-auto p-3'>
        <div
          className={`${props.userActiveModule}-text-active Module-text-active mb-5`}
        >
          <TranslateText
            txt={props.Passed ? "SubModule7-Passed" : "SubModule7-Failed"}
          />
          <br />
          <TranslateText
            txt={props.Passed ? "SubModule7-Passed2" : "SubModule7-Failed2"}
          />
        </div>

        <div
          className='mb-2 mt-1'
          style={{ color: "#525252", fontSize: "20px" }}
        >
          <TranslateText txt='SubModule7-YourScore' />
        </div>

        <div style={{ color: props.Passed ? "green" : "#C70039" }}>
          {props.userQuizScore} / {props.QuizScore}
        </div>
      </Col>

      <Col lg={6} md={6} sm={12} className='m-auto p-3'>
        <Image
          src={props.Passed ? props.StarFull : props.Retake}
          alt={"Esvol Stage"}
          fluid
          width={props.Passed ? "50%" : "30%"}
        />
      </Col>
    </Row>
  );
}

export default QuizPassFail;
