import React, { Component } from "react";
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
} from "@material-ui/core";

class Boolean extends Component {
  render() {
    const { FltQst, DrawerType, index } = this.props;

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
      </div>
    );
  }
}
export default Boolean;
