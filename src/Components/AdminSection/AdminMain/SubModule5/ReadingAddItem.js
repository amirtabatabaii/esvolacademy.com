import React, { useState } from "react";
import { Form } from "react-bootstrap";
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { openNotificationWithIcon } from "../../Utility/Error";

function ReadingAddItem(props) {
  const [inputList, setInputList] = useState([
    {
      language: "",
      title: "",
    },
  ]);

  const [ActiveModule, setActiveModule] = useState({
    moduleName: "",
    subModuleType: "",
    taskUrl: "",
    urlFormat: "",
    // subLevelTranslations
  });

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { language: "", title: "" }]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setActiveModule({
      moduleName: props.adminActiveModule,
      subModuleType: props.adminActiveSubModule,
      taskUrl: ActiveModule.taskUrl,
      urlFormat: ActiveModule.urlFormat,
      subLevelTranslations: inputList,
    });

    openNotificationWithIcon("success", "Reading", "Reading", 10);
  };

  const handleChangeReading = (e) => {
    if (e.target.name === "taskUrl")
      setActiveModule({
        ...ActiveModule,
        taskUrl: e.target.value,
      });

    if (e.target.name === "urlFormat")
      setActiveModule({
        ...ActiveModule,
        urlFormat: e.target.value,
      });
  };

  return (
    <div>
      <Form className='text-left' onSubmit={handleSubmit}>
        <div className='m-auto'>
          <TextField
            className='w-75 mt-3 ml-1 mr-1'
            variant='outlined'
            label={"Reading Task URL"}
            name='taskUrl'
            value={ActiveModule.taskUrl}
            onChange={(e) => handleChangeReading(e)}
            required
          />

          <FormControl
            variant='outlined'
            style={{ width: "15%" }}
            className='mt-3 ml-1 mr-1'
          >
            <InputLabel id='demo-simple-select-outlined-label'>
              URL Format
            </InputLabel>
            <Select
              labelId='demo-simple-select-outlined-label'
              value={ActiveModule.urlFormat}
              onChange={(e) => handleChangeReading(e)}
              label='URL Format'
              name='urlFormat'
              required
            >
              <MenuItem value={"pdf"}>PDF</MenuItem>
              <MenuItem value={"site"}>Website</MenuItem>
              <MenuItem value={"video"}>Video</MenuItem>
            </Select>
          </FormControl>

          {inputList.map((x, i) => {
            return (
              <div className='border border-secondary p-3 m-3'>
                <FormControl
                  variant='outlined'
                  style={{ width: "9%" }}
                  className='ml-1 mr-1'
                >
                  <InputLabel id='forLanguages'>Language</InputLabel>
                  <Select
                    className='bg-light text-danger font-weight-bold'
                    labelId='forLanguages'
                    value={x.language}
                    label='Language'
                    name='language'
                    required
                    error={false}
                    helperText={"Select Language"}
                    onChange={(e) => handleInputChange(e, i)}
                  >
                    <MenuItem value={"En"}>En</MenuItem>
                    <MenuItem value={"Tr"}>Tr</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  style={{ width: "65%" }}
                  className='ml-1 mr-1'
                  variant='outlined'
                  label={"Reading title"}
                  name='title'
                  value={x.title}
                  required
                  onChange={(e) => handleInputChange(e, i)}
                />

                {inputList.length !== 1 && (
                  <Button
                    variant='contained'
                    color='secondary'
                    className='mr-1 p-3 bg-danger'
                    onClick={() => handleRemoveClick(i)}
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                )}

                {inputList.length - 1 === i && (
                  <Button
                    variant='contained'
                    color='secondary'
                    className='mr-1 p-3 bg-success'
                    onClick={handleAddClick}
                    startIcon={<AddBoxIcon />}
                  >
                    Add
                  </Button>
                )}
              </div>
            );
          })}
        </div>

        <div className='m-5'>
          <Button
            variant='contained'
            color='primary'
            type='submit'
            className='p-3 w-100'
            size='large'
            startIcon={<SaveIcon />}
          >
            Save Question
          </Button>
        </div>
      </Form>

      <div style={{ marginTop: 20 }}>
        <pre>{JSON.stringify(ActiveModule, null, 2)}</pre>
      </div>
    </div>
  );
}

export default ReadingAddItem;
