import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Reducer from "./reducer";

export const initialState = {
  adminActiveModule: "",
  adminActiveSubModule: "",
  //
  Module1Name: "Module 1",
  Module2Name: "Module 2",
  Module3Name: "Module 3",
  Module4Name: "Module 4",
  Module5Name: "Module 5",
  SubModule1Name: "Introduction Video",
  SubModule2Name: "Course Video",
  SubModule3Name: "Interactive Tool",
  SubModule4Name: "Reading",
  SubModule5Name: "Case Study",
  SubModule6Name: "Expert Video",
  SubModule7Name: "Quiz",
  //
  userActiveModule: "Module1",
  userActiveSubModule: "sub7",
  //
  SubModule1Title: "Introduction Video",
  SubModule1Url: "https://www.youtube.com/watch?v=A2pM6u-d-MM",
  SubModule1Ratio: "80",
  //
  SubModule2Title: "Course Video",
  SubModule2Url: "https://www.youtube.com/watch?v=_npPA9ydDTs",
  SubModule2Ratio: "70",
  //
  SubModule6: [
    {
      SubModule6Title: "Expert Video 1",
      SubModule6Url: "https://www.youtube.com/watch?v=3_JsyidKdaI",
      SubModule6Ratio: "50",
    },
    {
      SubModule6Title: "Expert Video 2",
      SubModule6Url: "https://www.youtube.com/watch?v=_npPA9ydDTs",
      SubModule6Ratio: "80",
    },
  ],

  //
  SubModule7QuizQuestion: [],
  SubModule7QuizQuestionFiltered: [],
  //
  selectedLanguage: "En",
  userQuizScore: 0,
  QuizScore: 0,
  UserQuizAllAnswers: [],
  UserQuizAllAnswersLanguage: [],
  //
  EducationWithTasks: true,
};

const middleware = [thunk];

const store = createStore(
  Reducer,
  initialState,
  compose(
    applyMiddleware(...middleware)
    // ,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
