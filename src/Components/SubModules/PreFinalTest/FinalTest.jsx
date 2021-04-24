import React, { Component } from "react";
import { Row, Col, Form } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import YesNoQst from "./YesNoQst";
import TranslateText from "../../Translate/TranslateText";

import axios from "axios";
import { ApiUrlMain2 } from "../../Utility/ApiUrl";

class FinalTest extends Component {
  state = {
    UserId: "",
    FinalQst1: "",
    FinalQst2: "",
    FinalQst3: "",
    FinalQst4: "",
    FinalQst5: "",
    FinalQst6: "",
    FinalQst7: "",
    FinalQst8: "",
    FinalQst9: "",
    FinalQst10: "",
    FinalQst11: "",
    FinalQst12: "",
    FinalQst13: "",
    FinalQst14: "",
    FinalQst15: "",
    FinalQst16: "",
    FinalQst17: "",
    FinalQst18: "",
    FinalQst19: "",
    FinalQst20: "",
    testJson: null,
    btnEnable: false,
  };

  handleInputChange = (e) => {
    this.setState({
      UserId: this.props.UserInfo.userId,
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const finalTestQuestionAnswer = {
      finalTestQuestionAnswer: {
        FinalQst1: this.state.FinalQst1,
        FinalQst2: this.state.FinalQst2,
        FinalQst3: this.state.FinalQst3,
        FinalQst4: this.state.FinalQst4,
        FinalQst5: this.state.FinalQst5,
        FinalQst6: this.state.FinalQst6,
        FinalQst7: this.state.FinalQst7,
        FinalQst8: this.state.FinalQst8,
        FinalQst9: this.state.FinalQst9,
        FinalQst10: this.state.FinalQst10,
        FinalQst11: this.state.FinalQst11,
        FinalQst12: this.state.FinalQst12,
        FinalQst13: this.state.FinalQst13,
        FinalQst14: this.state.FinalQst14,
        FinalQst15: this.state.FinalQst15,
        FinalQst16: this.state.FinalQst16,
        FinalQst17: this.state.FinalQst17,
        FinalQst18: this.state.FinalQst18,
        FinalQst19: this.state.FinalQst19,
        FinalQst20: this.state.FinalQst20,
      },
    };

    // if (this.state.btnEnable) {
    axios
      .post(
        ApiUrlMain2 + `/users/${this.props.UserInfo.userId}/finaltest/`,
        finalTestQuestionAnswer,
        (axios.defaults.headers.common["Authorization"] = localStorage.getItem(
          "UserInfo"
        )),
        (axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*"),
        {
          "Content-Type": "application/json",
        }
      )
      .then((res) => {
        //console.log("res =====> ", res);
        if (res.status === 200) {
          axios
            .put(
              ApiUrlMain2 + `/users/${this.props.UserInfo.userId}/status`,
              {
                userStatus: {
                  currentModule: this.props.UserStatus.currentModule,
                  currentSubModule: this.props.UserStatus.currentSubModule,
                  score: this.props.UserStatus.score,
                  badgeNo: "0",
                  isPreTestDone: this.props.UserStatus.isPreTestDone,
                  isFinalTestDone: true,
                },
              },
              (axios.defaults.headers.common[
                "Authorization"
              ] = localStorage.getItem("UserInfo")),
              (axios.defaults.headers.common["Access-Control-Allow-Origin"] =
                "*"),
              {
                "Content-Type": "application/json",
              }
            )
            .then((res) => {
              // console.log("res =====> ", res);
              if (res.status === 200) {
                // this.props.history.push("/certificate");

                window.location.reload(false);
                //openNotificationWithIcon("success", "Update", "Update ok", 3);
              }
            });
        }
      });
    // }
  };

  render() {
    const { UserInfo } = this.props;

    return (
      <div className={`PreTest-panel mt-4 mb-5 app p-4`}>
        <h2 className='pretest-menu-text pb-3'>
          <TranslateText txt='FinalTestQst-title' /> ({UserInfo.firstName}{" "}
          {UserInfo.lastName})
        </h2>

        {/* <pre>{JSON.stringify(this.state.testJson, null, 2)}</pre> */}

        <Form onSubmit={this.handleSubmit}>
          <Row className='w-100'>
            <Col lg={12} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='FinalTestQst-1'
                name='FinalQst1'
                handleInputChange={this.handleInputChange}
              />
            </Col>

            <Col lg={12} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='FinalTestQst-2'
                name='FinalQst2'
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>

          <Row className='w-100'>
            <Col lg={12} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='FinalTestQst-3'
                name='FinalQst3'
                handleInputChange={this.handleInputChange}
              />
            </Col>

            <Col lg={12} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='FinalTestQst-4'
                name='FinalQst4'
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>

          <Row className='w-100'>
            <Col lg={12} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='FinalTestQst-5'
                name='FinalQst5'
                handleInputChange={this.handleInputChange}
              />
            </Col>

            <Col lg={12} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='FinalTestQst-6'
                name='FinalQst6'
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>

          <Row className='w-100'>
            <Col lg={12} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='FinalTestQst-7'
                name='FinalQst7'
                handleInputChange={this.handleInputChange}
              />
            </Col>

            <Col lg={12} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='FinalTestQst-8'
                name='FinalQst8'
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>

          <Row className='w-100'>
            <Col lg={12} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='FinalTestQst-9'
                name='FinalQst9'
                handleInputChange={this.handleInputChange}
              />
            </Col>

            <Col lg={12} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='FinalTestQst-10'
                name='FinalQst10'
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>

          <Row className='w-100'>
            <Col lg={12} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='FinalTestQst-11'
                name='FinalQst11'
                handleInputChange={this.handleInputChange}
              />
            </Col>

            <Col lg={12} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='FinalTestQst-12'
                name='FinalQst12'
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>

          <Row className='w-100'>
            <Col lg={12} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='FinalTestQst-13'
                name='FinalQst13'
                handleInputChange={this.handleInputChange}
              />
            </Col>

            <Col lg={12} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='FinalTestQst-14'
                name='FinalQst14'
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>

          <Row className='w-100'>
            <Col lg={12} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='FinalTestQst-15'
                name='FinalQst15'
                handleInputChange={this.handleInputChange}
              />
            </Col>

            <Col lg={12} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='FinalTestQst-16'
                name='FinalQst16'
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>

          <Row className='w-100'>
            <Col lg={12} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='FinalTestQst-17'
                name='FinalQst17'
                handleInputChange={this.handleInputChange}
              />
            </Col>

            <Col lg={12} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='FinalTestQst-18'
                name='FinalQst18'
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>

          <Row className='w-100'>
            <Col lg={12} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='FinalTestQst-19'
                name='FinalQst19'
                handleInputChange={this.handleInputChange}
              />
            </Col>

            <Col lg={12} md={12} sm={12} className='p-3 m-auto text-center'>
              <TextField
                required
                className='w-100'
                name='FinalQst20'
                onChange={this.handleInputChange}
                label={<TranslateText txt='FinalTestQst-20' />}
                variant='outlined'
                multiline
                rows={2}
              />
            </Col>
          </Row>

          <div class='text-center m-auto'>
            <button
              className='pretest-Btn'
              type='submit'
              // onClick={this.handleSubmit}
              // disabled={this.state.btnEnable}
            >
              <TranslateText txt='FinalTestQst-Btn' />
            </button>
          </div>
        </Form>
      </div>
    );
  }
}

export default FinalTest;
