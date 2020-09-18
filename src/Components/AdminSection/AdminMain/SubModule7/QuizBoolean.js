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

function QuizBoolean(props) {
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

      <FormControl
        variant='outlined'
        style={{ width: "15%" }}
        className='mt-3 ml-1 mr-1'
      >
        <InputLabel id='forCorrectAnswer'>Correct Answer</InputLabel>
        <Select
          labelId='forCorrectAnswer'
          value={props.x.correctAnswers}
          label={"Correct Answer"}
          name='correctAnswers'
          required
          onChange={(e) => props.handleYesNoChange(e, props.i)}
        >
          <MenuItem value={"yes"}>Yes</MenuItem>
          <MenuItem value={"no"}>No</MenuItem>
        </Select>
      </FormControl>

      <TextField
        className='mt-3 ml-1 mr-1'
        variant='outlined'
        label={"Incorrect Answer"}
        name='incorrectAnswers'
        value={
          props.x.correctAnswers === "yes"
            ? "No"
            : props.x.correctAnswers === "no"
            ? "Yes"
            : "---"
        }
        disabled
        onChange={(e, yesNo) => props.handleInputChange(e, props.i, "yesNo")}
      />

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

export default QuizBoolean;
