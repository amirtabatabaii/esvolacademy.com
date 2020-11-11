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

import QuizMultipleChoice from "./QuizMultipleChoice";
import QuizFilling from "./QuizFilling";
import QuizBoolean from "./QuizBoolean";
import QuizBlank from "./QuizBlank";
import NumberInput from "../../Utility/NumberInput";
import { openNotificationWithIcon } from "../../Utility/Error";
import { QstLanguageList, AnsLanguageList } from "../../Utility/AdminUtility";
import { ApiUrlMain2, ApiUrlQuestion } from "../../../Utility/ApiUrl";
import axios from "axios";

function QuizAddQuestions(props) {
  // --------------
  const blankAnswerDecrementCount = (index, i) => {
    let NumberOfBlank = Quiz.NumberOfBlank;
    if (NumberOfBlank > 1) {
      NumberOfBlank -= 1;
      setQuiz({ ...Quiz, NumberOfBlank });
    }

    handleRemoveAnsListClick(AnsList.length - 1);
  };

  const blankAnswerIncrementCount = (index) => {
    let NumberOfBlank = Quiz.NumberOfBlank;
    NumberOfBlank += 1;
    setQuiz({ ...Quiz, NumberOfBlank });

    handleAnsListAddClick(AnsList.length - 1);
  };
  // -----------------

  const [QstList, setQstList] = useState([
    {
      questionText: "",
      language: "",
      interactiveTitle: "",
      interactiveText: "",
    },
  ]);

  const [AnsList, setAnsList] = useState([
    {
      questionAnswersDictionaries: [{ answerText: "", language: "" }],
      isCorrectAnswer: false,
    },
  ]);

  const [Quiz, setQuiz] = useState({
    point: null,
    activationStatus: true,
    questionType: "",
    moduleName: props.adminActiveModule,
    NumberOfBlank: 1,
    questionDictionaries: [],
    answers: [],
    interactiveUrl: "",
    interactiveUrlFormat: "",
  });

  const handleQstListChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...QstList];

    if (name === "language") list[index]["language"] = value;
    if (name === "questionText") list[index]["questionText"] = value;
    setQstList(list);
  };

  const handleAnsListDetailChange = (e, index, questionType, p) => {
    const { name, value } = e.target;

    const list2 = [...AnsList];

    if (questionType === "Filling" || questionType === "Blank") {
      list2[p]["isCorrectAnswer"] = true;
    } else {
      if (name === "isTrue") list2[p]["isCorrectAnswer"] = e.target.checked;
    }

    if (name === "language")
      list2[p]["questionAnswersDictionaries"][index]["language"] = value;
    if (name === "answerText")
      list2[p]["questionAnswersDictionaries"][index]["answerText"] = value;
    setAnsList(list2);

    // console.log(list2);
    // for (let i = 0; i <= p; i++) {
    //   if (list2[i]["isCorrectAnswer"] === true) {

    // }
  };

  const handleRemoveQstListClick = (index) => {
    const list = [...QstList];
    list.splice(index, 1);
    setQstList(list);
  };

  const handleRemoveAnsListDetailClick = (index, j) => {
    const dic = [...AnsList[j].questionAnswersDictionaries];
    dic.splice(index, 1);
    AnsList[j].questionAnswersDictionaries = [...dic];

    setAnsList([...AnsList]);
  };

  const handleRemoveAnsListClick = (index) => {
    const list = [...AnsList];
    list.splice(index, 1);
    setAnsList(list);
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

  const handleAnsListDetailAddClick = (p) => {
    const dic = [...AnsList[p].questionAnswersDictionaries];

    AnsList[p].questionAnswersDictionaries = [
      ...dic,
      { answerText: "", language: "" },
    ];

    setAnsList([...AnsList]);
  };

  const handleAnsListAddClick = () => {
    setAnsList([
      ...AnsList,
      {
        questionAnswersDictionaries: [{ answerText: "", language: "" }],
        isCorrectAnswer: false,
      },
    ]);
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

  const handleEmptyAllInputs = () => {
    setQstList([
      {
        questionText: "",
        language: "",
        interactiveTitle: "",
        interactiveText: "",
      },
    ]);

    setAnsList([
      {
        questionAnswersDictionaries: [{ answerText: "", language: "" }],
        isCorrectAnswer: false,
      },
    ]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let EndListTemp = [...QstList];

    if (Quiz.questionType === "Blank") {
      for (let i = 0; i < EndListTemp.length; i++) {
        if (Array.isArray(EndListTemp[i]["questionText"]) === true) {
          let arr = [...EndListTemp[i].questionText];
          EndListTemp[i].questionText = arr.join(" _ ");
          // setEndInputList(EndListTemp);
        }
        // delete EndListTemp[i].isCorrectAnswerCount;
        // delete EndListTemp[i].inisCorrectAnswerCount;
      }
      setQuiz({
        point: Quiz.point,
        moduleName: props.adminActiveModule,
        questionType: Quiz.questionType,
        NumberOfBlank: Quiz.NumberOfBlank,
        activationStatus: true,
        questionDictionaries: [...QstList],
        answers: [...AnsList],
        interactiveUrl: "",
        interactiveUrlFormat: "",
      });
      axios
        .post(
          ApiUrlMain2 + ApiUrlQuestion,
          {
            point: Quiz.point,
            type: Quiz.questionType,
            moduleName: props.adminActiveModule,
            interactiveUrl: "",
            interactiveUrlFormat: "",
            activationStatus: true,
            numberOfBlank: Quiz.NumberOfBlank,
            questionDictionaries: [...QstList],
            answers: [...AnsList],
          },
          // (axios.defaults.headers.common[
          //   "Authorization"
          // ] = this.state.Authorization),
          { "Content-type": "application/json; charset=iso-8859-1" }
        )
        .then((res) => {
          // console.log("Success res ========>", res);
          openNotificationWithIcon("success", "Blank", "Blank", 10);
        });
    }

    if (Quiz.questionType !== "Blank") {
      if (
        Quiz.questionType === "Boolean" ||
        Quiz.questionType === "MultipleChoice"
      ) {
        let count = 0;
        for (let i = 0; i < AnsList.length; i++) {
          if (AnsList[i]["isCorrectAnswer"] === true) {
            count += 1;
          }
        }
        if (count > 1)
          openNotificationWithIcon(
            "error",
            " TrueCount > 1 ",
            " TrueCount >>> 111",
            10
          );
        else if (count === 0)
          openNotificationWithIcon(
            "error",
            " TrueCount = 0 ",
            " TrueCount === 0",
            10
          );
        else if (count === 1) {
          setQuiz({
            point: Quiz.point,
            NumberOfBlank: Quiz.NumberOfBlank,
            moduleName: props.adminActiveModule,
            questionType: Quiz.questionType,
            activationStatus: true,
            questionDictionaries: [...QstList],
            answers: [...AnsList],
            interactiveUrl: "",
            interactiveUrlFormat: "",
          });

          axios
            .post(
              ApiUrlMain2 + ApiUrlQuestion,
              {
                point: Quiz.point,
                type: Quiz.questionType,
                moduleName: props.adminActiveModule,
                interactiveUrl: "",
                interactiveUrlFormat: "",
                activationStatus: true,
                numberOfBlank: Quiz.NumberOfBlank,
                questionDictionaries: [...QstList],
                answers: [...AnsList],
              },
              // (axios.defaults.headers.common[
              //   "Authorization"
              // ] = this.state.Authorization),
              { "Content-type": "application/json; charset=iso-8859-1" }
            )
            .then((res) => {
              console.log("Success res ========>", res);
              openNotificationWithIcon(
                "success",
                " TrueCount = 1 ",
                " TrueCount === 111",
                10
              );
            });
        }
      } else {
        setQuiz({
          point: Quiz.point,
          NumberOfBlank: Quiz.NumberOfBlank,
          moduleName: props.adminActiveModule,
          questionType: Quiz.questionType,
          activationStatus: true,
          questionDictionaries: [...QstList],
          answers: [...AnsList],
          interactiveUrl: "",
          interactiveUrlFormat: "",
        });

        axios
          .post(
            ApiUrlMain2 + ApiUrlQuestion,
            {
              point: Quiz.point,
              type: Quiz.questionType,
              moduleName: props.adminActiveModule,
              interactiveUrl: "",
              interactiveUrlFormat: "",
              activationStatus: true,
              numberOfBlank: Quiz.NumberOfBlank,
              questionDictionaries: [...QstList],
              answers: [...AnsList],
            },
            // (axios.defaults.headers.common[
            //   "Authorization"
            // ] = this.state.Authorization),
            { "Content-type": "application/json; charset=iso-8859-1" }
          )
          .then((res) => {
            // console.log("Success res ========>", res);
            openNotificationWithIcon("success", "Filling", "Filling", 10);
          });
      }
    }
    document.getElementById("InsertForm").reset();
    handleEmptyAllInputs();
  };

  const handleBlankQuestionsInputChange = (e, i, index) => {
    const { name, value } = e.target;

    const list = [...QstList];

    if (name === "language") list[index]["language"] = value;

    if (name === "questionText") {
      if (Array.isArray(list[index]["questionText"]) === false) {
        let arr2 = [];
        arr2 = list[index]["questionText"].split(" _ ");
        list[index]["questionText"] = arr2;
      }

      list[index]["questionText"][i] = value;
    }

    setQstList(list);
  };

  return (
    <div>
      <Form id='InsertForm' className='text-left' onSubmit={handleSubmit}>
        <div className='m-auto'>
          <FormControl variant='outlined' style={{ width: "15%" }}>
            <InputLabel id='demo-simple-select-outlined-label'>
              Question Type
            </InputLabel>
            <Select
              labelId='demo-simple-select-outlined-label'
              value={Quiz.questionType}
              onChange={(e) => handleQuizChange(e)}
              onClick={handleEmptyAllInputs}
              label='Question Type'
              name='questionType'
              required
              error={false}
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
            className='ml-1 mr-1'
            variant='outlined'
            label={"Question Point"}
            name='point'
            type='number'
            required
            onChange={(e) => handleQuizChange(e)}
          />

          {Quiz.questionType === "Blank" && (
            <NumberInput
              label='Number of Blank'
              name='NumberOfBlank'
              type='number'
              required
              onChange={(e) => handleQuizChange(e)}
              incrementCount={blankAnswerIncrementCount}
              decrementCount={blankAnswerDecrementCount}
              inputList={Quiz}
              value={Quiz.NumberOfBlank}
              NegClassName={"ml-5 p-3"}
              TextFieldClassName={" "}
              PlusClassName={"p-3"}
              disabled={
                (Quiz.NumberOfBlank === 1 || Quiz.NumberOfBlank === 0) && true
              }
            />
          )}

          <div className='ml-3 pl-4'>
            {Quiz.questionType === "MultipleChoice" && (
              <QuizMultipleChoice
                handleQstListChange={handleQstListChange}
                handleAnsListDetailChange={handleAnsListDetailChange}
                handleQstListAddClick={handleQstListAddClick}
                handleRemoveQstListClick={handleRemoveQstListClick}
                handleAnsListDetailAddClick={handleAnsListDetailAddClick}
                handleRemoveAnsListDetailClick={handleRemoveAnsListDetailClick}
                handleAnsListAddClick={handleAnsListAddClick}
                handleRemoveAnsListClick={handleRemoveAnsListClick}
                setQstList={setQstList}
                setAnsList={setAnsList}
                QstList={QstList}
                AnsList={AnsList}
                QstLanguageList={QstLanguageList}
                AnsLanguageList={AnsLanguageList}
                questionType={Quiz.questionType}
              />
            )}

            {Quiz.questionType === "Filling" && (
              <QuizFilling
                handleQstListChange={handleQstListChange}
                handleAnsListDetailChange={handleAnsListDetailChange}
                handleQstListAddClick={handleQstListAddClick}
                handleRemoveQstListClick={handleRemoveQstListClick}
                handleAnsListDetailAddClick={handleAnsListDetailAddClick}
                handleRemoveAnsListDetailClick={handleRemoveAnsListDetailClick}
                handleAnsListAddClick={handleAnsListAddClick}
                handleRemoveAnsListClick={handleRemoveAnsListClick}
                setQstList={setQstList}
                setAnsList={setAnsList}
                QstList={QstList}
                AnsList={AnsList}
                QstLanguageList={QstLanguageList}
                AnsLanguageList={AnsLanguageList}
                questionType={Quiz.questionType}
              />
            )}

            {Quiz.questionType === "Boolean" && (
              <QuizBoolean
                handleQstListChange={handleQstListChange}
                handleAnsListDetailChange={handleAnsListDetailChange}
                handleQstListAddClick={handleQstListAddClick}
                handleRemoveQstListClick={handleRemoveQstListClick}
                handleAnsListDetailAddClick={handleAnsListDetailAddClick}
                handleRemoveAnsListDetailClick={handleRemoveAnsListDetailClick}
                handleAnsListAddClick={handleAnsListAddClick}
                handleRemoveAnsListClick={handleRemoveAnsListClick}
                setQstList={setQstList}
                setAnsList={setAnsList}
                QstList={QstList}
                AnsList={AnsList}
                QstLanguageList={QstLanguageList}
                AnsLanguageList={AnsLanguageList}
                questionType={Quiz.questionType}
              />
            )}

            {Quiz.questionType === "Blank" && (
              <QuizBlank
                handleBlankQuestionsInputChange={
                  handleBlankQuestionsInputChange
                }
                handleQstListChange={handleQstListChange}
                handleAnsListDetailChange={handleAnsListDetailChange}
                handleQstListAddClick={handleQstListAddClick}
                handleRemoveQstListClick={handleRemoveQstListClick}
                handleAnsListDetailAddClick={handleAnsListDetailAddClick}
                handleRemoveAnsListDetailClick={handleRemoveAnsListDetailClick}
                handleAnsListAddClick={handleAnsListAddClick}
                handleRemoveAnsListClick={handleRemoveAnsListClick}
                setQstList={setQstList}
                setAnsList={setAnsList}
                QstList={QstList}
                AnsList={AnsList}
                QstLanguageList={QstLanguageList}
                AnsLanguageList={AnsLanguageList}
                questionType={Quiz.questionType}
                Quiz={Quiz}
              />
            )}
          </div>
        </div>

        <div className='m-5'>
          <Button
            variant='contained'
            color='primary'
            type='submit'
            className='p-3 w-100'
            size='large'
            startIcon={<SaveIcon />}
            disabled={
              QstList[0].questionText === "" ||
              QstList[0].questionText[0] === ""
            }
          >
            Save Question
          </Button>
        </div>
      </Form>

      {/* <Divider className='bg-info' /> */}

      {/* <div style={{ marginTop: 20 }}>
        <pre>{JSON.stringify(Quiz, null, 2)}</pre>
      </div> */}
    </div>
  );
}

export default QuizAddQuestions;
