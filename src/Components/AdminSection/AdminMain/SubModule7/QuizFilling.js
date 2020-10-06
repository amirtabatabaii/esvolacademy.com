import React from "react";

import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  Button,
  FormControl,
} from "@material-ui/core";
import { Checkbox } from "antd";

import DeleteIcon from "@material-ui/icons/Delete";
import AddBoxIcon from "@material-ui/icons/AddBox";

function QuizFilling(props) {
  return (
    <div className='border border-secondary p-2 mt-2'>
      {props.QstList.map((qst, i) => {
        return (
          <>
            <FormControl
              variant='outlined'
              style={{ width: "10%" }}
              className='mt-2 ml-1 mr-1'
              key={i + (i + 0)}
            >
              <InputLabel id='forLanguages'>Language</InputLabel>
              <Select
                className='bg-light text-danger font-weight-bold'
                labelId='forLanguages'
                value={qst.language}
                label='Language'
                name='language'
                required
                error={false}
                helperText={"Select Language"}
                onChange={(e) => props.handleQstListChange(e, i)}
              >
                {props.QstLanguageList.map((x, i) => {
                  return (
                    <MenuItem key={i} value={x}>
                      {x}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>

            <TextField
              className='w-50 mt-2 ml-1 mr-1'
              key={i + (i + 1)}
              variant='outlined'
              label={"Question title"}
              name='questionText'
              value={qst.questionText}
              required
              onChange={(e) => props.handleQstListChange(e, i)}
            />

            {props.QstList.length - 1 === i && (
              <Button
                variant='contained'
                color='secondary'
                style={{ width: "10%" }}
                className='m-2 p-3 bg-success'
                onClick={props.handleQstListAddClick}
                startIcon={<AddBoxIcon />}
              >
                Add
              </Button>
            )}

            {props.QstList.length !== 1 && (
              <Button
                variant='contained'
                color='secondary'
                style={{ width: "10%" }}
                className='m-2 p-3 bg-danger'
                onClick={() => props.handleRemoveQstListClick(i)}
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            )}

            <br />
          </>
        );
      })}

      {props.AnsList.map((mainList, p) => {
        return (
          <>
            <div className={"border border-success p-2 mt-2"}>
              <div
                className='d-flex justify-content-between m-1 p-2'
                style={{ backgroundColor: "#BEFBA0" }}
              >
                <div className={"m-1 p-1 text-success font-weight-bold"}>
                  Option {p + 1}
                  {" - "}
                  <Checkbox
                    name='isTrue'
                    checked={true}
                    enabled={false}
                    //disabled
                    onChange={(e) =>
                      props.handleAnsListDetailChange(
                        e,
                        0,
                        props.questionType,
                        p
                      )
                    }
                  >
                    Correct Answer?
                  </Checkbox>
                </div>

                <div className='m-0 p-0 text-success font-weight-bold'>
                  {props.AnsList.length - 1 === p && (
                    <Button
                      variant='contained'
                      color='secondary'
                      // style={{ width: "12%" }}
                      className='m-1 p-1 bg-success'
                      onClick={() => props.handleAnsListAddClick(p)}
                      startIcon={<AddBoxIcon />}
                    >
                      Add Option
                    </Button>
                  )}

                  {props.AnsList.length !== 1 && (
                    <Button
                      variant='contained'
                      color='secondary'
                      // style={{ width: "12%" }}
                      className='m-1 p-1 bg-danger'
                      onClick={() => props.handleRemoveAnsListClick(p)}
                      startIcon={<DeleteIcon />}
                    >
                      Delete Option
                    </Button>
                  )}
                </div>
              </div>
              {/* {props.AnsList[0].questionAnswersDictionaries.map( */}
              {props.AnsList[p].questionAnswersDictionaries.map(
                (ansList, j) => {
                  return (
                    <>
                      <FormControl
                        variant='outlined'
                        style={{ width: "10%" }}
                        className='mt-2 ml-1 mr-1'
                      >
                        <InputLabel id='forLanguages'>Language</InputLabel>
                        <Select
                          className='bg-light text-danger font-weight-bold'
                          labelId='forLanguages'
                          value={ansList.language}
                          label='Language'
                          name='language'
                          required
                          error={false}
                          helperText={"Select Language"}
                          onChange={(e) =>
                            props.handleAnsListDetailChange(
                              e,
                              j,
                              props.questionType,
                              p
                            )
                          }
                        >
                          {props.AnsLanguageList.map((x, i) => {
                            return (
                              <MenuItem key={i} value={x}>
                                {x}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>

                      <TextField
                        className='w-50 mt-2 ml-1 mr-1'
                        variant='outlined'
                        label={"Correct Answer "}
                        name='answerText'
                        value={ansList.answerText}
                        required
                        onChange={(e) =>
                          props.handleAnsListDetailChange(
                            e,
                            j,
                            props.questionType,
                            p
                          )
                        }
                      />

                      {props.AnsList[p].questionAnswersDictionaries.length -
                        1 ===
                        j && (
                        <Button
                          variant='contained'
                          color='secondary'
                          style={{ width: "12%" }}
                          className='m-2 p-3 bg-success'
                          onClick={() => props.handleAnsListDetailAddClick(p)}
                          startIcon={<AddBoxIcon />}
                        >
                          Add
                        </Button>
                      )}

                      {props.AnsList[p].questionAnswersDictionaries.length !==
                        1 && (
                        <Button
                          variant='contained'
                          color='secondary'
                          style={{ width: "12%" }}
                          className='m-2 p-3 bg-danger'
                          onClick={() =>
                            props.handleRemoveAnsListDetailClick(j, p)
                          }
                          startIcon={<DeleteIcon />}
                        >
                          Delete
                        </Button>
                      )}

                      <br />
                    </>
                  );
                }
              )}
            </div>
          </>
        );
      })}
    </div>
  );
}

export default QuizFilling;
