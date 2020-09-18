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

function QuizFilling(props) {
  const createCorrectInput = (index) => {
    let input = [];
    for (let i = 0; i < props.inputList[index].correctAnswerCount; i++) {
      input.push(
        <TextField
          className='w-100 mt-3 ml-1 mr-1'
          variant='outlined'
          label={"Keyword Answer " + (i + 1)}
          name={"Keyword Answer" + i}
          onChange={(e) => handleCorrectAnswersInputChange(e, i, index)}
          value={props.inputList[index].correctAnswers[i]}
          required
          error={false}
        />
      );
    }
    return input;
  };

  const handleCorrectAnswersInputChange = (e, i, index) => {
    const { value } = e.target;
    const list = [...props.inputList];
    list[index]["correctAnswers"][i] = value;
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

      <NumberInput
        incrementCount={props.incrementCount}
        handleInputChange={props.handleInputChange}
        decrementCount={props.decrementCount}
        inputList={props.inputList}
        i={props.i}
        onChange={(e) => props.handleInputChange(e, props.i)}
        value={props.inputList[props.i].correctAnswerCount}
        label={"Keyword Count"}
        name={"correctAnswerCount"}
        NegClassName={
          props.inputList[props.i].correctAnswerCount === 0
            ? "ml-5 p-3"
            : "ml-5 mt-3 p-3"
        }
        PlusClassName={
          props.inputList[props.i].correctAnswerCount === 0 ? "p-3" : "mt-3 p-3"
        }
        disabled={props.inputList[props.i].correctAnswerCount === 0 && true}
      />

      {props.inputList[props.i].correctAnswerCount > 0 && (
        <CollapseInputs
          header={"Keyword panel"}
          PanelContent={createCorrectInput(props.i)}
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

export default QuizFilling;
