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
import { LanguageList } from "../../Utility/AdminUtility";

function CaseStudyAddItem(props) {
  const [inputList, setInputList] = useState([
    {
      language: "",
      title: "",
      interactiveQuestion: "",
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

    if (name === "language") {
      if (list.find((p) => p.language === value)) {
        openNotificationWithIcon(
          "error",
          " exists  > 1 ",
          " exists  >>> 111",
          5
        );
      } else {
        list[index][name] = value;
        setInputList(list);
      }
    } else {
      list[index][name] = value;
      setInputList(list);
    }
    // list[index][name] = value;
    // setInputList(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([
      ...inputList,
      { language: "", title: "", interactiveQuestion: "" },
    ]);
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

    axios
      .post(
        ApiUrlMain2 + `/api/sublevels`,
        {
          moduleName: props.adminActiveModule,
          subModuleType: props.adminActiveSubModule,
          taskUrl: ActiveModule.taskUrl,
          urlFormat: ActiveModule.urlFormat,
          subLevelTranslations: inputList,
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
          // openNotificationWithIcon("success", "Reading", "Reading", 10);
          openNotificationWithIcon("success", "CaseStudy", "CaseStudy", 10);
        }
      });
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
            label={"Case Study Task URL"}
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
                    {LanguageList.map((lng, i) => {
                      return (
                        <MenuItem key={i} value={lng}>
                          {lng}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>

                <TextField
                  style={{ width: "65%" }}
                  className='ml-1 mr-1'
                  variant='outlined'
                  label={"CaseStudy title"}
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
            Save Case Study
          </Button>
        </div>
      </Form>

      {/* <div style={{ marginTop: 20 }}>
        <pre>{JSON.stringify(ActiveModule, null, 2)}</pre>
      </div> */}
    </div>
  );
}

export default CaseStudyAddItem;
