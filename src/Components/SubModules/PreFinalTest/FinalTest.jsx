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
  };

  handleInputChange = (e) => {
    this.setState({
      UserId: this.props.UserInfo.userId,
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    //e.preventDefault();

    console.log(this.state);
  };

  render() {
    const { UserStatus, UserInfo } = this.props;

    return (
      <div className='m-2'>
        <h2 className='pretest-menu-text pb-3'>
          <TranslateText txt='FinalTestQst-title' /> ({UserInfo.firstName}{" "}
          {UserInfo.lastName})
        </h2>

        <Form>
          <Row className='w-100'>
            <Col lg={6} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='FinalTestQst-1'
                name='FinalQst1'
                handleInputChange={this.handleInputChange}
              />
            </Col>

            <Col lg={6} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='FinalTestQst-2'
                name='FinalQst2'
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>

          <Row className='w-100'>
            <Col lg={6} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='FinalTestQst-3'
                name='FinalQst3'
                handleInputChange={this.handleInputChange}
              />
            </Col>

            <Col lg={6} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='FinalTestQst-4'
                name='FinalQst4'
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>

          <Row className='w-100'>
            <Col lg={6} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='FinalTestQst-5'
                name='FinalQst5'
                handleInputChange={this.handleInputChange}
              />
            </Col>

            <Col lg={6} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='FinalTestQst-6'
                name='FinalQst6'
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>

          <Row className='w-100'>
            <Col lg={6} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='FinalTestQst-7'
                name='FinalQst7'
                handleInputChange={this.handleInputChange}
              />
            </Col>

            <Col lg={6} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='FinalTestQst-8'
                name='FinalQst8'
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>

          <Row className='w-100'>
            <Col lg={6} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='FinalTestQst-9'
                name='FinalQst9'
                handleInputChange={this.handleInputChange}
              />
            </Col>

            <Col lg={6} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='FinalTestQst-10'
                name='FinalQst10'
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>

          <Row className='w-100'>
            <Col lg={6} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='FinalTestQst-11'
                name='FinalQst11'
                handleInputChange={this.handleInputChange}
              />
            </Col>

            <Col lg={6} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='FinalTestQst-12'
                name='FinalQst12'
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>

          <Row className='w-100'>
            <Col lg={6} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='FinalTestQst-13'
                name='FinalQst13'
                handleInputChange={this.handleInputChange}
              />
            </Col>

            <Col lg={6} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='FinalTestQst-14'
                name='FinalQst14'
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>

          <Row className='w-100'>
            <Col lg={6} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='FinalTestQst-15'
                name='FinalQst15'
                handleInputChange={this.handleInputChange}
              />
            </Col>

            <Col lg={6} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='FinalTestQst-16'
                name='FinalQst16'
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>

          <Row className='w-100'>
            <Col lg={6} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='FinalTestQst-17'
                name='FinalQst17'
                handleInputChange={this.handleInputChange}
              />
            </Col>

            <Col lg={6} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='FinalTestQst-18'
                name='FinalQst18'
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>

          <Row className='w-100'>
            <Col lg={6} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='FinalTestQst-19'
                name='FinalQst19'
                handleInputChange={this.handleInputChange}
              />
            </Col>

            <Col lg={6} md={12} sm={12} className='p-3 m-auto text-center'>
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
              onClick={this.handleSubmit}
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
