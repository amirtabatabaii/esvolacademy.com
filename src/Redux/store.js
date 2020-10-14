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
  Module1SubModule1Title: "SubModule_1_Video",
  Module1SubModule1Url: "https://www.youtube.com/watch?v=A2pM6u-d-MM",
  Module1SubModule1Ratio: "80",
  //
  Module1SubModule2Title: "SubModule_2_Video",
  Module1SubModule2Url: "https://www.youtube.com/watch?v=_npPA9ydDTs",
  Module1SubModule2Ratio: "70",
  //
  Module1SubModule6Title: "SubModule_6_Video",
  Module1SubModule6Url: "https://www.youtube.com/watch?v=3_JsyidKdaI",
  Module1SubModule6Ratio: "60",
  //
  SubModule1QuizQuestion: [],
  SubModule1QuizQuestionFiltered: [],
  //
  selectedLanguage: "En",
  userQuizScore: 0,
  QuizScore: 0,
  UserQuizAllAnswers: [],
  UserQuizAllAnswersLanguage:[]
};

const middleware = [thunk];

const store = createStore(
  Reducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
