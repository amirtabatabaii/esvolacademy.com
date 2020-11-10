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
import axios from "axios";
import { ApiUrlMain2 } from "../../../Utility/ApiUrl";

function InteractiveToolAddItem(props) {
  const [inputList, setInputList] = useState([
    {
      questionText: "",
      interactiveTitle: "",
      interactiveText: "",
      language: "",
    },
  ]);

  const [ActiveModule, setActiveModule] = useState({
    point: "",
    type: "",
    moduleName: "",
    interactiveUrl: "",
    interactiveUrlFormat: "",
    activationStatus: true,
    numberOfBlank: 0,
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
    setInputList([
      ...inputList,
      {
        questionText: "",
        interactiveTitle: "",
        interactiveText: "",
        language: "",
      },
    ]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setActiveModule({
      point: "0",
      type: props.adminActiveSubModule,
      moduleName: props.adminActiveModule,
      interactiveUrl: ActiveModule.interactiveUrl,
      interactiveUrlFormat: ActiveModule.interactiveUrlFormat,
      activationStatus: true,
      numberOfBlank: 0,
      questionDictionaries: inputList,
      answers: [
        {
          isCorrectAnswer: false,
          questionAnswersDictionaries: [
            {
              answerText: "",
              language: "",
            },
          ],
        },
      ],
    });

    axios
      .post(
        ApiUrlMain2 + `/api/exam/quiz/questions`,
        {
          point: "0",
          type: "Interactive",
          moduleName: props.adminActiveModule,
          interactiveUrl: ActiveModule.interactiveUrl,
          interactiveUrlFormat: ActiveModule.interactiveUrlFormat,
          activationStatus: true,
          numberOfBlank: 0,
          questionDictionaries: inputList,
          answers: [
            {
              isCorrectAnswer: false,
              questionAnswersDictionaries: [
                {
                  answerText: "",
                  language: "",
                },
              ],
            },
          ],
        }
        // , {
        // headers: {
        //   Authorization: localStorage.getItem("UserInfo"),
        // },
        // }
      )
      .then((Response) => {
        if (Response.status === 200) {
          console.log(Response.data);
          //this.props.SetUserInfo(Response.data);
          openNotificationWithIcon("success", "Reading", "Reading", 10);
        }
      });
  };

  const handleChangeReading = (e) => {
    if (e.target.name === "taskUrl")
      setActiveModule({
        ...ActiveModule,
        interactiveUrl: e.target.value,
      });

    if (e.target.name === "urlFormat")
      setActiveModule({
        ...ActiveModule,
        interactiveUrlFormat: e.target.value,
      });
  };

  return (
    <div>
      <Form className='text-left' onSubmit={handleSubmit}>
        <div className='m-auto'>
          <TextField
            className='w-75 mt-3 ml-1 mr-1'
            variant='outlined'
            label={"Interactive Task Url"}
            name='taskUrl'
            value={ActiveModule.interactiveUrl}
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
              value={ActiveModule.interactiveUrlFormat}
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

                {inputList.length !== 1 && (
                  <Button
                    variant='contained'
                    color='secondary'
                    className={
                      inputList.length !== 1
                        ? "ml-5 p-3 bg-danger"
                        : "ml-2 p-3 bg-danger"
                    }
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
                    className={
                      inputList.length !== 1
                        ? "ml-2 p-3 bg-success"
                        : "ml-5 p-3 bg-success"
                    }
                    onClick={handleAddClick}
                    startIcon={<AddBoxIcon />}
                  >
                    Add
                  </Button>
                )}

                <TextField
                  // style={{ width: "80%" }}
                  className='w-100 mt-3 mb-3'
                  variant='outlined'
                  label={"Interactive Title"}
                  name='interactiveTitle'
                  value={x.interactiveTitle}
                  required
                  onChange={(e) => handleInputChange(e, i)}
                />

                <TextField
                  // style={{ width: "65%" }}
                  className='w-100'
                  variant='outlined'
                  label={"Interactive Question"}
                  name='interactiveText'
                  value={x.interactiveText}
                  required
                  onChange={(e) => handleInputChange(e, i)}
                />
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
            Save Interactive Task
          </Button>
        </div>
      </Form>

      <div style={{ marginTop: 20 }}>
        <pre>{JSON.stringify(ActiveModule, null, 2)}</pre>
      </div>
    </div>
  );
}

export default InteractiveToolAddItem;
