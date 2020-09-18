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
        >
          <MenuItem value={"En"}>En</MenuItem>
          <MenuItem value={"Tr"}>Tr</MenuItem>
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
        PlusClassName={"mt-3 p-3"}
        disabled={props.inputList[props.i].incorrectAnswerCount === 0 && true}
      />

      {props.inputList[props.i].incorrectAnswerCount > 0 && (
        <CollapseInputs
          header={"Incorrect Answers panel"}
          PanelContent={props.createIncorrectInput(props.i)}
        />
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
    </div>
  );
}

export default QuizMultipleChoice;
