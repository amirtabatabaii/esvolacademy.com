import React, { Component } from "react";
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
} from "@material-ui/core";
import LanguageSelector from "../../../../Translate/LanguageSelector";
import { Collapse } from "antd";

const { Panel } = Collapse;

class Multiple extends Component {
  render() {
    const { FltQst, DrawerType } = this.props;

    return (
      <div>
        <FormControl
          variant='outlined'
          className='m-2'
          style={{ width: "180px" }}
        >
          <InputLabel id='demo-simple-select-outlined-label'>
            Question Type
          </InputLabel>
          <Select
            labelId='demo-simple-select-outlined-label'
            defaultValue={FltQst.type}
            // onChange={(e) => handleQuizChange(e)}
            // onClick={handleEmptyAllInputs}
            label='Question Type'
            name='questionType'
            required
            disabled={DrawerType === "View" ? true : false}
          >
            <MenuItem key={0} value={"MultipleChoice"}>
              MultipleChoice
            </MenuItem>
            <MenuItem key={1} value={"Filling"}>
              Filling
            </MenuItem>
            <MenuItem key={2} value={"Boolean"}>
              Boolean
            </MenuItem>
            <MenuItem key={3} value={"Blank"}>
              Blank
            </MenuItem>
          </Select>
        </FormControl>

        <TextField
          className='m-2'
          variant='outlined'
          label={"Question Point"}
          name='point'
          type='number'
          value={FltQst.point}
          required
          disabled={DrawerType === "View" ? true : false}
          // onChange={(e) => handleQuizChange(e)}
        />

        <Collapse className='mb-3'>
          <Panel header='Question Title' key='1'>
            {FltQst.questionDictionaries.map((qst, index) => (
              <>
                <TextField
                  className='m-2 w-75'
                  variant='outlined'
                  label={"Question Title"}
                  name='questionText'
                  // type='number'
                  value={qst.questionText}
                  required
                  disabled={DrawerType === "View" ? true : false}
                  // onChange={(e) => handleQuizChange(e)}
                />

                {DrawerType === "View" ? (
                  <label className='m-2 p-2'>{qst.language}</label>
                ) : (
                  // <LanguageSelector />
                  "LngSelector"
                )}
                <br />
              </>
            ))}
          </Panel>
        </Collapse>

        <Collapse className='mb-3'>
          <Panel header='Question Title' key='1'>
            {FltQst.answers.map((qst, index) => (
              <div className='border m-2'>
                <label className='m-2 p-2'>
                  {qst.isCorrectAnswer ? "true" : "false"}
                </label>
                <br />
                {qst.questionAnswersDictionaries.map((ans, index) => (
                  <>
                    <TextField
                      className='m-2 w-75'
                      variant='outlined'
                      label={"answer Title"}
                      name='answerText'
                      // type='number'
                      value={ans.answerText}
                      required
                      disabled={DrawerType === "View" ? true : false}
                      // onChange={(e) => handleQuizChange(e)}
                    />

                    {DrawerType === "View" ? (
                      <label className='m-2 p-2'>{ans.language}</label>
                    ) : (
                      "LngSelector"
                    )}

                    <br />
                  </>
                ))}
              </div>
            ))}
          </Panel>
        </Collapse>
      </div>
    );
  }
}
export default Multiple;
