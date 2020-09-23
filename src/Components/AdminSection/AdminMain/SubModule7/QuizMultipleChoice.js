import React from "react";

import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  Button,
  FormControl,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import AddBoxIcon from "@material-ui/icons/AddBox";

import NumberInput from "../../Utility/NumberInput";
import CollapseInputs from "../../Utility/CollapseInputs";

function QuizMultipleChoice(props) {
  const createIncorrectInput = (index) => {
    let input = [];
    for (let i = 0; i < props.inputList[index].incorrectAnswerCount; i++) {
      input.push(
        <TextField
          className='w-100 mt-3 ml-1 mr-1'
          variant='outlined'
          label={"incorrect Answer " + (i + 1)}
          name={"incorrectAnswer" + i}
          onChange={(e) => handleIncorrectAnswersInputChange(e, i, index)}
          value={props.inputList[index].incorrectAnswers[i]}
          required
          error={false}
        />
      );
    }
    return input;
  };

  const handleIncorrectAnswersInputChange = (e, i, index) => {
    const { value } = e.target;
    const list = [...props.inputList];
    list[index]["incorrectAnswers"][i] = value;
    props.setInputList(list);
  };

  return (
    <div className='border border-secondary p-2 mt-2'>
      <FormControl
        variant='outlined'
        style={{ width: "9%" }}
        className='mt-3 ml-1 mr-1'
      >
        <InputLabel id='forLanguages'>Language</InputLabel>
        <Select
          className='bg-light text-danger font-weight-bold'
          labelId='forLanguages'
          value={props.x.languages}
          label='Language'
          name='languages'
          required
          error={false}
          helperText={"Select Language"}
          onChange={(e) => props.handleInputChange(e, props.i)}
          onClick={(e) => props.handleLanguageChange(e)}
        >
          <MenuItem value={"En"}>En</MenuItem>
          <MenuItem value={"Tr"}>Tr</MenuItem>
          {/* <MenuItem value={"Fa"}>Fa</MenuItem>
          <MenuItem value={"Az"}>Az</MenuItem>
          <MenuItem value={"Ar"}>Ar</MenuItem> */}
        </Select>
      </FormControl>

      <TextField
        className='w-25 mt-3 ml-1 mr-1'
        variant='outlined'
        label={"Question title"}
        name='question'
        value={props.x.question}
        required
        onChange={(e) => props.handleInputChange(e, props.i)}
      />

      <TextField
        className='w-25 mt-3 ml-1 mr-1'
        variant='outlined'
        label={"Correct Answer"}
        name='correctAnswers'
        value={props.x.correctAnswers}
        required
        onChange={(e) => props.handleInputChange(e, props.i)}
      />

      <NumberInput
        incrementCount={props.incrementCount}
        decrementCount={props.decrementCount}
        inputList={props.inputList}
        i={props.i}
        value={props.inputList[props.i].incorrectAnswerCount}
        label={"Incorrect Answer Count"}
        name={"incorrectAnswerCount"}
        NegClassName={"ml-5 mt-3 p-3"}
        TextFieldClassName={"mt-3"}
        PlusClassName={"mt-3 p-3"}
        disabled={props.inputList[props.i].incorrectAnswerCount === 0 && true}
      />

      {props.inputList[props.i].incorrectAnswerCount > 0 && (
        <CollapseInputs
          header={"Incorrect Answers panel"}
          PanelContent={createIncorrectInput(props.i)}
        />
      )}

      {props.inputList.length - 1 === props.i && (
        <Button
          variant='contained'
          color='secondary'
          className='m-3 p-3 bg-success'
          onClick={props.handleAddClick}
          startIcon={<AddBoxIcon />}
        >
          Add
        </Button>
      )}

      {props.inputList.length !== 1 && (
        <Button
          variant='contained'
          color='secondary'
          className='m-3 p-3 bg-danger'
          onClick={() => props.handleRemoveClick(props.i)}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      )}
    </div>
  );
}

export default QuizMultipleChoice;
