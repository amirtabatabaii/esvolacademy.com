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

import CollapseInputs from "../../Utility/CollapseInputs";
import { withStyles } from "@material-ui/core/styles";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "green",
        border: "2px solid red",
      },
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
    },
  },
})(TextField);

function QuizBlank(props) {
  const createCorrectInput = (index) => {
    let input = [];
    for (let i = 0; i < props.Quiz.NumberOfBlank; i++) {
      input.push(
        <>
          {i === 0 && (
            <TextField
              className='w-25 mt-3 ml-1 mr-1'
              variant='outlined'
              label={i === 0 ? "Question title" : "Continue Question title"}
              name='question'
              value={
                Array.isArray(props.inputList[index]["question"]) === false
                  ? props.inputList[index]["question"].split(" _ ")[0]
                  : props.inputList[index]["question"][0]
              }
              required={i === 0 ? true : false}
              onChange={(e) => handleDivChange(e, props.i)}
            />
          )}

          <CssTextField
            className={i === 0 ? "w-25 mt-3 ml-1 mr-1" : "w-25 mt-3 ml-1 mr-1"}
            variant='outlined'
            label={"Blank Answer " + (i + 1)}
            name={"Blank Answer" + i}
            onChange={(e) => handleCorrectAnswersInputChange(e, i, index)}
            value={props.inputList[index].correctAnswers[i]}
            required
            error={false}
          />

          <TextField
            className={i === 0 ? "w-25 mt-3 ml-1 mr-1" : "w-25 mt-3 ml-1 mr-1"}
            variant='outlined'
            label={i === 0 ? "Question title" : "Continue Question title"}
            name={"question" + i}
            value={
              Array.isArray(props.inputList[index]["question"]) === false
                ? props.inputList[index]["question"].split(" _ ")[i + 1]
                : props.inputList[index]["question"][i + 1]
            }
            required={i === 0 ? true : false}
            onChange={(e) => handleBlankQuestionsInputChange(e, i, index)}
          />
          {/* <br /> */}
        </>
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

  const handleDivChange = (e, i, index) => {
    const { value } = e.target;
    // qst0 = value;
    const list = [...props.inputList];

    if (Array.isArray(list[i]["question"]) === false) {
      let arr2 = [];
      arr2 = list[i]["question"].split(" _ ");
      list[i]["question"] = arr2;
    }

    list[i]["question"][0] = value;
    props.setInputList(list);
  };

  const handleBlankQuestionsInputChange = (e, i, index) => {
    const { value } = e.target;

    const list = [...props.inputList];

    if (Array.isArray(list[index]["question"]) === false) {
      let arr2 = [];
      arr2 = list[index]["question"].split(" _ ");
      list[index]["question"] = arr2;
    }

    list[index]["question"][i + 1] = value;

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

      {props.Quiz.NumberOfBlank > 0 && (
        <CollapseInputs
          header={"Question Creator panel"}
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

export default QuizBlank;
