import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { Collapse } from "antd";
import { Form } from "react-bootstrap";
import { openNotificationWithIcon } from "../../../Utility/Error";
import {
  QstLanguageList,
  AnsLanguageList,
} from "../../../Utility/AdminUtility";
import DeleteIcon from "@material-ui/icons/Delete";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { Checkbox } from "antd";
import axios from "axios";
import { ApiUrlMain2 } from "../../../../Utility/ApiUrl";
import TranslateText from "../../../../Translate/TranslateText";

const { Panel } = Collapse;

function Multiple(props) {
  const { FltQst, DrawerType } = props;

  const [OldQstList, setOldQstList] = useState(FltQst.questionDictionaries);
  const [QstList, setQstList] = useState([]);

  const [OldAnsList, setOldAnsList] = useState(FltQst.answers);
  // const [AnsList, setAnsList] = useState(FltQst.answers, [
  // {
  //   questionAnswersDictionaries: [],
  //   isCorrectAnswer: null,
  // },
  // ]);

  const [Quiz, setQuiz] = useState({
    point: FltQst.point,
    activationStatus: true,
    questionType: "",
    moduleName: props.adminActiveModule,
    NumberOfBlank: 1,
    questionDictionaries: [],
    answers: [],
    interactiveUrl: "",
    interactiveUrlFormat: "",
  });

  const handleOldQstListChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...OldQstList];
    if (name === "language") {
      const tmpList = [...OldQstList];
      if (tmpList.find((p) => p.language === value)) {
        openNotificationWithIcon(
          "error",
          " exists  > 1 ",
          " exists  >>> 111",
          5
        );
      } else {
        list[index][name] = value;
        setOldQstList(list);
      }
    } else {
      list[index][name] = value;
      setOldQstList(list);
    }
    // if (name === "language") list[index]["language"] = value;
    // if (name === "questionText") list[index]["questionText"] = value;
    // setQstList(list);
  };

  const handleQstListChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...QstList];
    if (name === "language") {
      const tmpList = [...OldQstList, ...QstList];
      if (tmpList.find((p) => p.language === value)) {
        openNotificationWithIcon(
          "error",
          " exists  > 1 ",
          " exists  >>> 111",
          5
        );
      } else {
        list[index][name] = value;
        setQstList(list);
      }
    } else {
      list[index][name] = value;
      setQstList(list);
    }
    // if (name === "language") list[index]["language"] = value;
    // if (name === "questionText") list[index]["questionText"] = value;
    // setQstList(list);
  };

  const handleQuizChange = (e) => {
    if (e.target.name === "point")
      setQuiz({
        ...Quiz,
        point: e.target.value,
        moduleName: props.adminActiveModule,
      });

    if (e.target.name === "questionType")
      if (e.target.value === "Blank") {
        setQuiz({
          ...Quiz,
          questionType: e.target.value,
        });
      } else {
        setQuiz({
          ...Quiz,
          questionType: e.target.value,
          NumberOfBlank: 1,
        });
      }

    if (e.target.name === "NumberOfBlank") {
      setQuiz({
        ...Quiz,
        NumberOfBlank: e.target.value,
      });
    }
  };

  const handleQstListAddClick = () => {
    setQstList([
      ...QstList,
      {
        questionText: "",
        language: "",
        interactiveTitle: "",
        interactiveText: "",
      },
    ]);
  };

  const handleRemoveQstListClick = (index) => {
    const list = [...QstList];
    list.splice(index, 1);
    setQstList(list);
  };

  const handleAnsListDetailAddClick = (index, j) => {
    const dic = [...OldAnsList[index].questionAnswersDictionaries];

    OldAnsList[index].questionAnswersDictionaries = [
      ...dic,
      { answerText: "", language: "" },
    ];

    setOldAnsList([...OldAnsList]);
  };

  const handleRemoveAnsListDetailClick = (index, j) => {
    const dic = [...OldAnsList[index].questionAnswersDictionaries];
    dic.splice(j, 1);
    OldAnsList[index].questionAnswersDictionaries = [...dic];

    setOldAnsList([...OldAnsList]);
  };

  const handleOldAnsListDetailChange = (e, index, j) => {
    const { name, value } = e.target;

    const list2 = [...OldAnsList];

    // if (questionType === "Filling" || questionType === "Blank") {
    //   list2[index]["isCorrectAnswer"] = true;
    // } else {
    //   if (name === "isTrue") list2[index]["isCorrectAnswer"] = e.target.checked;
    // }

    if (name === "language") {
      if (
        list2[index]["questionAnswersDictionaries"].find(
          (q) => q.language === value
        )
      ) {
        openNotificationWithIcon(
          "error",
          " exists  > 1 ",
          " exists  >>> 111",
          5
        );
      } else {
        list2[index]["questionAnswersDictionaries"][j][name] = value;
        setOldAnsList(list2);
      }
    } else {
      list2[index]["questionAnswersDictionaries"][j][name] = value;
      setOldAnsList(list2);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setQuiz({
      point: Quiz.point,
      NumberOfBlank: Quiz.NumberOfBlank,
      moduleName: props.adminActiveModule,
      questionType: FltQst.type,
      activationStatus: true,
      questionDictionaries: [...OldQstList, ...QstList],
      answers: [...OldAnsList],
      interactiveUrl: "",
      interactiveUrlFormat: "",
    });

    // console.log("qstId", FltQst.id);

    // axios
    //   .put(
    //     // "https://biyoteknik.com:1443/esvol/api/exam/quiz/questions/1",
    //     // ApiUrlMain2 + `/api/exam/quiz/questions/${FltQst.id}`,
    //     {
    //       point: Quiz.point,
    //       NumberOfBlank: Quiz.NumberOfBlank,
    //       moduleName: props.adminActiveModule,
    //       questionType: FltQst.type,
    //       activationStatus: FltQst.activationStatus,
    //       questionDictionaries: [...OldQstList, ...QstList],
    //       answers: [...OldAnsList],
    //       interactiveUrl: "",
    //       interactiveUrlFormat: "",
    //     },

    //     (axios.defaults.headers.common["Authorization"] = localStorage.getItem(
    //       "administratorToken"
    //     )),
    //     (axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*"),
    //     {
    //       "Content-Type": "application/json",
    //     }
    //   )
    //   .then((res) => {
    //     console.log("res =====> ", res);
    //     if (res.status === 200) {
    //       openNotificationWithIcon(
    //         "success",
    //         "<TranslateText txt=User-PassChange1 />",
    //         "<TranslateText txt=User-PassChange2 />",
    //         3
    //       );
    //     }
    //   });
  };

  return (
    <div>
      <Form id='InsertForm' className='text-left' onSubmit={handleSubmit}>
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
            onChange={(e) => handleQuizChange(e)}
            // onClick={handleEmptyAllInputs}
            label='Question Type'
            name='questionType'
            required
            disabled={true}
            // disabled={DrawerType === "View" ? true : false}
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
          defaultValue={FltQst.point}
          required
          disabled={DrawerType === "View" ? true : false}
          onChange={(e) => handleQuizChange(e)}
        />

        <Collapse className='mb-3'>
          <Panel header='Question Title' key='1'>
            {OldQstList.map((qst, index) => (
              <div className='border border-success p-2 mt-2'>
                <TextField
                  className='m-2 w-75'
                  variant='outlined'
                  label={"Question Title"}
                  name='questionText'
                  // type='number'
                  defaultValue={qst.questionText}
                  required
                  disabled={DrawerType === "View" ? true : false}
                  multiline
                  rows={5}
                  onChange={(e) => handleOldQstListChange(e, index)}
                />

                <FormControl
                  variant='outlined'
                  style={{ width: "10%" }}
                  className='mt-2 ml-1 mr-1'
                >
                  <InputLabel id='forLanguages'>Language</InputLabel>
                  <Select
                    className='bg-light text-danger font-weight-bold'
                    labelId='forLanguages'
                    defaultValue={qst.language}
                    label='Language'
                    name='language'
                    required
                    error={false}
                    helperText={"Select Language"}
                    onChange={(e) => handleOldQstListChange(e, index)}
                    disabled={true}
                  >
                    {QstLanguageList.map((x, i) => {
                      return (
                        <MenuItem key={i} value={x}>
                          {x}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>

                {QstList.length === index && (
                  <Button
                    variant='contained'
                    color='secondary'
                    style={{ width: "10%" }}
                    className='m-2 p-3 bg-success'
                    onClick={handleQstListAddClick}
                    disabled={DrawerType === "View" ? true : false}
                    startIcon={<AddBoxIcon />}
                  >
                    Add
                  </Button>
                )}
              </div>
            ))}

            {QstList.map((qst, index) => (
              <div className='border border-danger p-2 mt-2'>
                <TextField
                  className='m-2 w-75'
                  variant='outlined'
                  label={"Question Title"}
                  name='questionText'
                  // type='number'
                  value={qst.questionText}
                  required
                  disabled={DrawerType === "View" ? true : false}
                  multiline
                  rows={5}
                  onChange={(e) => handleQstListChange(e, index)}
                />

                <FormControl
                  variant='outlined'
                  style={{ width: "10%" }}
                  className='mt-2 ml-1 mr-1'
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
                    onChange={(e) => handleQstListChange(e, index)}
                    disabled={DrawerType === "View" ? true : false}
                  >
                    {QstLanguageList.map((x, i) => {
                      return (
                        <MenuItem key={i} value={x}>
                          {x}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>

                <br />
                {QstList.length !== 0 && (
                  <Button
                    variant='contained'
                    color='secondary'
                    className='m-1 p-3 bg-danger'
                    onClick={() => handleRemoveQstListClick(index)}
                    disabled={DrawerType === "View" ? true : false}
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                )}

                {QstList.length - 1 === index && (
                  <Button
                    variant='contained'
                    color='secondary'
                    style={{ width: "10%" }}
                    className='m-2 p-3 bg-success'
                    onClick={handleQstListAddClick}
                    disabled={DrawerType === "View" ? true : false}
                    startIcon={<AddBoxIcon />}
                  >
                    Add
                  </Button>
                )}
              </div>
            ))}
          </Panel>
        </Collapse>

        <Collapse className='mb-3'>
          <Panel header='Answer Detail' key='1'>
            {OldAnsList.map((qst, index) => (
              <div
                className={
                  qst.isCorrectAnswer === true
                    ? "border border-success p-2 mt-2"
                    : "border border-danger p-2 mt-2"
                }
              >
                <div
                  className='d-flex justify-content-between m-1 p-2'
                  style={
                    qst.isCorrectAnswer === true
                      ? { backgroundColor: "#BEFBA0" }
                      : { backgroundColor: "#FBB2A0" }
                  }
                >
                  <div
                    className={
                      qst.isCorrectAnswer === true
                        ? "m-1 p-1 text-success font-weight-bold"
                        : "m-1 p-1 text-danger font-weight-bold"
                    }
                  >
                    Option {index + 1}
                    {" - "}
                    <Checkbox
                      name='isTrue'
                      checked={qst.isCorrectAnswer}
                      // enabled={qst.isCorrectAnswer === true ? false : true}
                      enabled={false}
                      // onChange={(e) =>
                      //   props.handleAnsListDetailChange(e, 0, true, p)
                      // }
                    >
                      Correct Answer?
                    </Checkbox>
                  </div>
                </div>

                {qst.questionAnswersDictionaries.map((ans, j) => (
                  <>
                    <div className='border border-primary p-2 mt-2'>
                      <TextField
                        className='m-2 w-75'
                        variant='outlined'
                        label={"Answer Text"}
                        name='answerText'
                        // type='number'
                        value={ans.answerText}
                        required
                        disabled={DrawerType === "View" ? true : false}
                        multiline
                        rows={5}
                        onChange={(e) =>
                          handleOldAnsListDetailChange(e, index, j)
                        }
                      />

                      <FormControl
                        variant='outlined'
                        style={{ width: "10%" }}
                        className='mt-2 ml-1 mr-1'
                      >
                        <InputLabel id='forLanguages'>Language</InputLabel>
                        <Select
                          className='bg-light text-danger font-weight-bold'
                          labelId='forLanguages'
                          value={ans.language}
                          label='Language'
                          name='language'
                          required
                          error={false}
                          helperText={"Select Language"}
                          onChange={(e) =>
                            handleOldAnsListDetailChange(e, index, j)
                          }
                          disabled={DrawerType === "View" ? true : false}
                          //   disabled={true}
                        >
                          {AnsLanguageList.map((x, i) => {
                            return (
                              <MenuItem key={i} value={x}>
                                {x}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>

                      <br />

                      {OldAnsList[index].questionAnswersDictionaries.length -
                        1 ===
                        j && (
                        <Button
                          variant='contained'
                          color='secondary'
                          style={{ width: "12%" }}
                          className='ml-1 mt-2 p-3 bg-success'
                          onClick={() => handleAnsListDetailAddClick(index, j)}
                          startIcon={<AddBoxIcon />}
                          disabled={DrawerType === "View" ? true : false}
                        >
                          Add
                        </Button>
                      )}

                      {OldAnsList[index].questionAnswersDictionaries.length !==
                        0 && (
                        <Button
                          variant='contained'
                          color='secondary'
                          style={{ width: "12%" }}
                          className='ml-1 mt-2 p-3 bg-danger'
                          disabled={DrawerType === "View" ? true : false}
                          onClick={() =>
                            handleRemoveAnsListDetailClick(index, j)
                          }
                          startIcon={<DeleteIcon />}
                        >
                          Delete
                        </Button>
                      )}
                    </div>
                  </>
                ))}
              </div>
            ))}
          </Panel>
        </Collapse>

        <div className='m-5'>
          <Button
            variant='contained'
            color='primary'
            type='submit'
            className='p-3 w-100'
            size='large'
            startIcon={<SaveIcon />}
            disabled={DrawerType === "View" ? true : false}
          >
            Save Question
          </Button>
        </div>
      </Form>
      <div style={{ marginTop: 20 }}>
        {/*<pre>{JSON.stringify([...OldAnsList], null, 2)}</pre>
         <pre>{JSON.stringify([...OldQstList, ...QstList], null, 2)}</pre>*/}
        <pre>{JSON.stringify(Quiz, null, 2)}</pre>
      </div>
    </div>
  );
}
export default Multiple;
