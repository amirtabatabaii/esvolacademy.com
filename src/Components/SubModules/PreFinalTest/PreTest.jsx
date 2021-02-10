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

class PreTest extends Component {
  state = {
    UserId: "",
    PreQst1: "",
    PreQst2: "",
    PreQst3: "",
    PreQst4: "",
    PreQst5: "",
    PreQst6: "",
    PreQst7: "",
    PreQst8: "",
    PreQst9: "",
    PreQst10: "",
    PreQst11: "",
    PreQst12: "",
    PreQst13: "",
    PreQst14: "",
  };

  handleInputChange = (e) => {
    this.setState({
      UserId: this.props.UserInfo.userId,
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.state);
  };

  render() {
    const { UserStatus, UserInfo } = this.props;

    return (
      <div className='m-5'>
        <h2 className='pretest-menu-text pb-3'>
          <TranslateText txt='PreTestQst-title' /> ({UserInfo.firstName}{" "}
          {UserInfo.lastName})
        </h2>

        <Form>
          <Row className='w-100'>
            <Col lg={2} md={12} sm={12} className='p-3 m-auto text-center'>
              <TextField
                required
                className='w-100'
                type='number'
                name='PreQst1'
                onChange={this.handleInputChange}
                label={<TranslateText txt='PreTestQst-1' />}
                variant='outlined'
              />
            </Col>

            <Col lg={4} md={12} sm={12} className='p-3 m-auto text-center'>
              <FormControl variant='outlined' required className='w-100'>
                <InputLabel id='gender'>
                  {<TranslateText txt='PreTestQst-2' />}
                </InputLabel>
                <Select
                  labelId='gender'
                  onChange={this.handleInputChange}
                  name='PreQst2'
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

            <Col lg={6} md={12} sm={12} className='p-3 m-auto text-center'>
              <TextField
                required
                className='w-100'
                name='PreQst3'
                onChange={this.handleInputChange}
                label={<TranslateText txt='PreTestQst-3' />}
                variant='outlined'
              />
            </Col>
          </Row>

          <Row className='w-100'>
            <Col lg={6} md={12} sm={12} className='p-3 m-auto text-center'>
              <TextField
                required
                className='w-100'
                type='number'
                name='PreQst4'
                onChange={this.handleInputChange}
                label={<TranslateText txt='PreTestQst-4' />}
                variant='outlined'
              />
            </Col>

            <Col lg={6} md={12} sm={12} className='p-3 m-auto text-center'>
              <TextField
                required
                className='w-100'
                name='PreQst5'
                onChange={this.handleInputChange}
                label={<TranslateText txt='PreTestQst-5' />}
                variant='outlined'
              />
            </Col>
          </Row>

          <Row className='w-100'>
            <Col lg={6} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='PreTestQst-6'
                name='PreQst6'
                handleInputChange={this.handleInputChange}
              />
            </Col>

            <Col lg={6} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='PreTestQst-7'
                name='PreQst7'
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>

          <Row className='w-100'>
            <Col lg={6} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='PreTestQst-8'
                name='PreQst8'
                handleInputChange={this.handleInputChange}
              />
            </Col>

            <Col lg={6} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='PreTestQst-9'
                name='PreQst9'
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>

          <Row className='w-100'>
            <Col lg={6} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='PreTestQst-10'
                name='PreQst10'
                handleInputChange={this.handleInputChange}
              />
            </Col>

            <Col lg={6} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='PreTestQst-11'
                name='PreQst11'
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>

          <Row className='w-100'>
            <Col lg={6} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='PreTestQst-12'
                name='PreQst12'
                handleInputChange={this.handleInputChange}
              />
            </Col>

            <Col lg={6} md={12} sm={12} className='p-3 m-auto text-center'>
              <YesNoQst
                qstText='PreTestQst-13'
                name='PreQst13'
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>

          <Row className='w-100'>
            <Col lg={12} md={12} sm={12} className='p-3 m-auto text-center'>
              <LikeQst
                qstText='PreTestQst-14'
                name='PreQst14'
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
