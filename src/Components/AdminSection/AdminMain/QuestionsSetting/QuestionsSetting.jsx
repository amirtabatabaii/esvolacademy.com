import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { Form } from "react-bootstrap";
import { InputNumber } from "antd";

class QuestionsSetting extends Component {
  handleSubmit = () => {};

  onChange = (name, value) => {
    console.log(name + " : " + value);
  };

  render() {
    return (
      <Form className='text-left' onSubmit={this.handleSubmit}>
        <div>
          <TextField
            className='w-25 ml-1 mr-1'
            variant='outlined'
            label={"MultipleChoice Questions Count"}
            name='point'
            type='number'
            required
            //   onChange={(e) => handleQuizChange(e)}
          />
          <TextField
            className='ml-1 mr-1'
            variant='outlined'
            label={"Filling Questions Count"}
            name='point'
            type='number'
            required
            //   onChange={(e) => handleQuizChange(e)}
          />
          <TextField
            className='ml-1 mr-1'
            variant='outlined'
            label={"Boolean Questions Count"}
            name='point'
            type='number'
            required
            //   onChange={(e) => handleQuizChange(e)}
          />
          <TextField
            className='ml-1 mr-1'
            variant='outlined'
            label={"Blank Questions Count"}
            name='point'
            type='number'
            required
            //   onChange={(e) => handleQuizChange(e)}
          />

          <div className='mt-3'>% % % % % % %</div>

          <Button
            variant='contained'
            color='primary'
            type='submit'
            className='mt-5 p-3 w-100'
            size='large'
            startIcon={<SaveIcon />}
          >
            Save Question
          </Button>
        </div>
      </Form>
    );
  }
}

export default QuestionsSetting;
