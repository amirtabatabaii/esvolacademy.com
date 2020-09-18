import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Form } from "react-bootstrap";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import SaveIcon from "@material-ui/icons/Save";
import ButtonM from "@material-ui/core/Button";
import QuizMultipleChoice from "./QuizMultipleChoice";
import QuizFilling from "./QuizFilling";
import QuizBoolean from "./QuizBoolean";
import QuizBlank from "./QuizBlank";

function QuizAddQuestions(props) {
  // --------------
  const incorrectAnswerDecrementCount = (index) => {
    const list = [...inputList];
    if (list[index]["incorrectAnswerCount"] > 0) {
      list[index]["incorrectAnswerCount"] -= 1;
      setInputList(list);

      let AnsList = list[index]["incorrectAnswers"];
      const length = list[index]["incorrectAnswers"].length;
      AnsList.splice([length - 1], 1);
      setInputList(list);
    }
  };

  const incorrectAnswerIncrementCount = (index) => {
    const list = [...inputList];
    list[index]["incorrectAnswerCount"] += 1;
    setInputList(list);
  };
  // -----------------

  // --------------
  const correctAnswerDecrementCount = (index) => {
    const list = [...inputList];
    if (list[index]["correctAnswerCount"] > 0) {
      list[index]["correctAnswerCount"] -= 1;
      setInputList(list);

      let AnsList = list[index]["correctAnswers"];
      const length = list[index]["correctAnswers"].length;
      AnsList.splice([length - 1], 1);
      setInputList(list);
    }
  };

  const correctAnswerIncrementCount = (index) => {
    const list = [...inputList];
    list[index]["correctAnswerCount"] += 1;
    setInputList(list);
  };
  // -----------------

  const [inputList, setInputList] = useState([
    {
      question: "",
      languages: "",
      correctAnswerCount: 3,
      correctAnswers: [],
      incorrectAnswerCount: 3,
      incorrectAnswers: [],
    },
  ]);

  const [Quiz, setQuiz] = useState({
    point: null,
    questionType: "",
    moduleName: "",
    NumberOfBlank: null,
  });

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleYesNoChange = (e, index) => {
    const { name, value } = e.target;
    const list2 = [...inputList];
    list2[index][name] = value;
    if (value === "yes") list2[index]["incorrectAnswers"] = "no";
    else list2[index]["incorrectAnswers"] = "yes";
    setInputList(list2);
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
        question: "",
        languages: "",
        correctAnswerCount: 3,
        correctAnswers: [],
        incorrectAnswerCount: 3,
        incorrectAnswers: [],
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
          NumberOfBlank: null,
        });
      }

    if (e.target.name === "NumberOfBlank") {
      setQuiz({
        ...Quiz,
        NumberOfBlank: e.target.value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setQuiz({
      questionTranslations: inputList,
      point: Quiz.point,
      questionType: Quiz.questionType,
      moduleName: props.adminActiveModule,
      NumberOfBlank: Quiz.NumberOfBlank,
    });
  };

  const createIncorrectInput = (index) => {
    let input = [];
    for (let i = 0; i < inputList[index].incorrectAnswerCount; i++) {
      input.push(
        <TextField
          className='w-100 mt-3 ml-1 mr-1'
          variant='outlined'
          label={"incorrect Answer " + (i + 1)}
          name={"incorrectAnswer" + i}
          onChange={(e) => handleIncorrectAnswersInputChange(e, i, index)}
          value={inputList[index].incorrectAnswers[i]}
          required
          error={false}
        />
      );
    }
    return input;
  };

  const handleIncorrectAnswersInputChange = (e, i, index) => {
    const { value } = e.target;
    const list = [...inputList];
    list[index]["incorrectAnswers"][i] = value;
    setInputList(list);
  };

  const createCorrectInput = (index) => {
    let input = [];
    for (let i = 0; i < inputList[index].correctAnswerCount; i++) {
      input.push(
        <TextField
          className='w-100 mt-3 ml-1 mr-1'
          variant='outlined'
          label={"Correct Answer " + (i + 1)}
          name={"correctAnswer" + i}
          onChange={(e) => handleCorrectAnswersInputChange(e, i, index)}
          value={inputList[index].correctAnswers[i]}
          required
          error={false}
        />
      );
    }
    return input;
  };

  const handleCorrectAnswersInputChange = (e, i, index) => {
    const { value } = e.target;
    const list = [...inputList];
    list[index]["correctAnswers"][i] = value;
    setInputList(list);
  };

  const handleEmptyAllInputs = () => {
    setInputList([
      {
        question: "",
        languages: "",
        correctAnswerCount: 3,
        correctAnswers: [],
        incorrectAnswerCount: 3,
        incorrectAnswers: [],
      },
    ]);
  };

  return (
    <div>
      <Form className='text-left' onSubmit={handleSubmit}>
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
              <MenuItem value={"MultipleChoice"}>MultipleChoice</MenuItem>
              <MenuItem value={"Filling"}>Filling</MenuItem>
              <MenuItem value={"Boolean"}>Boolean</MenuItem>
              <MenuItem value={"Blank"}>Blank</MenuItem>
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
            <TextField
              className='ml-1 mr-1'
              variant='outlined'
              label={"Number of Blank"}
              name='NumberOfBlank'
              type='number'
              required
              onChange={(e) => handleQuizChange(e)}
            />
          )}

          {inputList.map((x, i) => {
            return (
              <div className='ml-3 pl-4'>
                {Quiz.questionType === "MultipleChoice" ? (
                  <QuizMultipleChoice
                    handleInputChange={handleInputChange}
                    handleAddClick={handleAddClick}
                    handleRemoveClick={handleRemoveClick}
                    createIncorrectInput={createIncorrectInput}
                    incrementCount={incorrectAnswerIncrementCount}
                    decrementCount={incorrectAnswerDecrementCount}
                    x={x}
                    i={i}
                    inputList={inputList}
                  />
                ) : null}

                {Quiz.questionType === "Filling" ? (
                  <QuizFilling
                    handleInputChange={handleInputChange}
                    handleAddClick={handleAddClick}
                    handleRemoveClick={handleRemoveClick}
                    createCorrectInput={createCorrectInput}
                    incrementCount={correctAnswerIncrementCount}
                    decrementCount={correctAnswerDecrementCount}
                    x={x}
                    i={i}
                    inputList={inputList}
                  />
                ) : null}

                {Quiz.questionType === "Boolean" ? (
                  <QuizBoolean
                    handleInputChange={handleInputChange}
                    handleYesNoChange={handleYesNoChange}
                    handleAddClick={handleAddClick}
                    handleRemoveClick={handleRemoveClick}
                    x={x}
                    i={i}
                    inputList={inputList}
                  />
                ) : null}

                {Quiz.questionType === "Blank" ? <QuizBlank /> : null}
              </div>
            );
          })}
        </div>

        <div className='m-5'>
          <ButtonM
            variant='contained'
            color='primary'
            type='submit'
            className='p-3 w-100'
            size='large'
            startIcon={<SaveIcon />}
          >
            Save Question
          </ButtonM>
        </div>
      </Form>

      <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
      <div style={{ marginTop: 20 }}>{JSON.stringify(Quiz)}</div>
    </div>
  );
}

export default QuizAddQuestions;
