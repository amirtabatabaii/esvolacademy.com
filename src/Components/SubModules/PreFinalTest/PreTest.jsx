import React, { Component } from "react";
import { Row, Col, Form } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import YesNoQst from "./YesNoQst";
import LikeQst from "./LikeQst";
import TranslateText from "../../Translate/TranslateText";
import axios from "axios";
import { ApiUrlMain2 } from "../../Utility/ApiUrl";
import { openNotificationWithIcon } from "../../AdminSection/Utility/Error";

class PreTest extends Component {
  state = {
    UserId: "",
    age: "",
    gender: "",
    occupation: "",
    experience: "",
    country: "",
    PreQst1: "",
    PreQst2: "",
    PreQst3: "",
    PreQst4: "",
    PreQst5: "",
    PreQst6: "",
    PreQst7: "",
    PreQst8: "",
    PreQst9: "",
    btnEnable: true,
  };

  handleInputChange = (e) => {
    this.setState({
      UserId: this.props.UserInfo.userId,
      [e.target.name]: e.target.value,
    });

    if (
      this.state.age !== "" &&
      this.state.gender !== "" &&
      this.state.occupation !== "" &&
      this.state.experience !== "" &&
      this.state.country !== "" &&
      this.state.PreQst1 !== "" &&
      this.state.PreQst2 !== "" &&
      this.state.PreQst3 !== "" &&
      this.state.PreQst4 !== "" &&
      this.state.PreQst5 !== "" &&
      this.state.PreQst6 !== "" &&
      this.state.PreQst7 !== "" &&
      this.state.PreQst8 !== "" &&
      this.state.PreQst9 !== ""
    ) {
      this.setState({
        btnEnable: false,
      });
    } else {
      this.setState({
        btnEnable: true,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const userPreQst = {
      age: this.state.age,
      gender: this.state.gender,
      occupation: this.state.occupation,
      experience: this.state.experience,
      country: this.state.country,
      preTestQuestionAnswer: {
        PreQst1: this.state.PreQst1,
        PreQst2: this.state.PreQst2,
        PreQst3: this.state.PreQst3,
        PreQst4: this.state.PreQst4,
        PreQst5: this.state.PreQst5,
        PreQst6: this.state.PreQst6,
        PreQst7: this.state.PreQst7,
        PreQst8: this.state.PreQst8,
        PreQst9: this.state.PreQst9,
      },
    };
    // console.log(userPreQst);

    axios
      .put(
        ApiUrlMain2 + `/users/${this.props.UserInfo.userId}`,
        {
          firstName: this.props.UserInfo.firstName,
          lastName: this.props.UserInfo.lastName,
          password: "",
          avatarNo: this.props.UserInfo.avatarNo,
          avatarStatus: true, //changeeeeee
          isEasyModeActive: this.state.isEasyModeActive,
        },
        (axios.defaults.headers.common["Authorization"] = localStorage.getItem(
          "UserInfo"
        )),
        (axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*"),
        {
          "Content-Type": "application/json",
        }
      )
      .then((res) => {
        // console.log("res =====> ", res);
        if (res.status === 200) {
          window.scrollTo(0, 0);

          openNotificationWithIcon(
            "success",
            <TranslateText txt='PreTestQst-AnsOK' />,
            <TranslateText txt='PreTestQst-AnsOK2' />,
            3
          );
          setTimeout(() => {
            window.location.reload(false);
          }, 1000);
        }
      });
  };

  render() {
    const { UserInfo } = this.props;

    return (
      <div className={`PreTest-panel mt-4 mb-5 app p-4`}>
        <h2 className='pretest-menu-text pb-3'>
          <TranslateText txt='PreTestQst-title' /> ({UserInfo.firstName}{" "}
          {UserInfo.lastName})
        </h2>

        <Form>
          <Row className='w-100'>
            <Col lg={2} md={12} sm={12} className='p-2 m-auto text-center'>
              <TextField
                required
                className='w-100'
                type='number'
                name='age'
                onChange={this.handleInputChange}
                label={<TranslateText txt='PreTestQst-1' />}
                variant='outlined'
              />
            </Col>

            <Col lg={4} md={12} sm={12} className='p-2 m-auto text-center'>
              <FormControl variant='outlined' required className='w-100'>
                <InputLabel id='gender'>
                  {<TranslateText txt='PreTestQst-2' />}
                </InputLabel>
                <Select
                  labelId='gender'
                  onChange={this.handleInputChange}
                  name='gender'
                  label={<TranslateText txt='PreTestQst-2' />}
                >
                  <MenuItem value='male'>
                    <TranslateText txt='PreTestQst-male' />
                  </MenuItem>
                  <MenuItem value='female'>
                    <TranslateText txt='PreTestQst-female' />
                  </MenuItem>
                </Select>
              </FormControl>
            </Col>

            <Col lg={6} md={12} sm={12} className='p-2 m-auto text-center'>
              <TextField
                required
                className='w-100'
                name='occupation'
                onChange={this.handleInputChange}
                label={<TranslateText txt='PreTestQst-3' />}
                variant='outlined'
              />
            </Col>
          </Row>

          <Row className='w-100'>
            <Col lg={6} md={12} sm={12} className='p-2 m-auto text-center'>
              <TextField
                required
                className='w-100'
                type='number'
                name='experience'
                onChange={this.handleInputChange}
                label={<TranslateText txt='PreTestQst-4' />}
                variant='outlined'
              />
            </Col>

            <Col lg={6} md={12} sm={12} className='p-2 m-auto text-center'>
              <TextField
                required
                className='w-100'
                name='country'
                onChange={this.handleInputChange}
                label={<TranslateText txt='PreTestQst-5' />}
                variant='outlined'
              />
            </Col>
          </Row>

          <Row className='w-100'>
            <Col lg={12} md={12} sm={12} className='p-2 m-auto text-center'>
              <YesNoQst
                qstText='PreTestQst-6'
                name='PreQst1'
                handleInputChange={this.handleInputChange}
              />
            </Col>
            {/* </Row>

          <Row className='w-100'> */}
            <Col lg={12} md={12} sm={12} className='p-2 m-auto text-center'>
              <YesNoQst
                qstText='PreTestQst-7'
                name='PreQst2'
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>

          <Row className='w-100'>
            <Col lg={12} md={12} sm={12} className='p-2 m-auto text-center'>
              <YesNoQst
                qstText='PreTestQst-8'
                name='PreQst3'
                handleInputChange={this.handleInputChange}
              />
            </Col>

            <Col lg={12} md={12} sm={12} className='p-2 m-auto text-center'>
              <YesNoQst
                qstText='PreTestQst-9'
                name='PreQst4'
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>

          <Row className='w-100'>
            <Col lg={12} md={12} sm={12} className='p-2 m-auto text-center'>
              <YesNoQst
                qstText='PreTestQst-10'
                name='PreQst5'
                handleInputChange={this.handleInputChange}
              />
            </Col>

            <Col lg={12} md={12} sm={12} className='p-2 m-auto text-center'>
              <YesNoQst
                qstText='PreTestQst-11'
                name='PreQst6'
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>

          <Row className='w-100'>
            <Col lg={12} md={12} sm={12} className='p-2 m-auto text-center'>
              <YesNoQst
                qstText='PreTestQst-12'
                name='PreQst7'
                handleInputChange={this.handleInputChange}
              />
            </Col>

            <Col lg={12} md={12} sm={12} className='p-2 m-auto text-center'>
              <YesNoQst
                qstText='PreTestQst-13'
                name='PreQst8'
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>

          <Row className='w-100'>
            <Col lg={12} md={12} sm={12} className='p-2 m-auto text-center'>
              <LikeQst
                qstText='PreTestQst-14'
                name='PreQst9'
                handleInputChange={this.handleInputChange}
                defaultValue={5}
                maxValue={10}
                ratingSize='large'
              />
            </Col>
          </Row>

          <div class='text-center m-auto'>
            <button
              className='pretest-Btn'
              type='submit'
              onClick={this.handleSubmit}
              disabled={this.state.btnEnable}
            >
              <TranslateText txt='PreTestQst-Btn' />
            </button>
          </div>
        </Form>
      </div>
    );
  }
}

export default PreTest;
