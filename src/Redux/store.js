import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Reducer from "./reducer";

export const initialState = {
  adminActiveModule: "",
  adminActiveSubModule: "",
  //
  UserInfo: {},
  UserStatus: {},
  Module1Name: "Module1",
  Module2Name: "Module2",
  Module3Name: "Module3",
  Module4Name: "Module4",
  Module5Name: "Module5",
  SubModule1Name: "Introduction Video",
  SubModule2Name: "Course Video",
  SubModule3Name: "Interactive Tool",
  SubModule4Name: "Reading",
  SubModule5Name: "Case Study",
  SubModule6Name: "Expert Video",
  SubModule7Name: "Quiz",
  //
  userActiveModule: "Module1",
  userActiveSubModule: "sub1",
  //
  SubModule1IntroductionVideo: [
    {
      courseName: "",
      url: "",
      completionRatio: "",
      type: "",
    },
  ],

  SubModule2CourseVideo: [
    {
      courseName: "",
      url: "",
      completionRatio: "",
      type: "",
    },
  ],
  //
  SubModule6ExpertVideo: [
    {
      courseName: "",
      url: "",
      completionRatio: "",
      type: "",
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
  //
  SubModule4Reading: [],
  SubModule4ReadingFiltered: [],
  SubModule5CaseStudy: [],
  SubModule5CaseStudyFiltered: [],
};

const middleware = [thunk];

// function saveToLocalStorage(state) {
//   try {
//     const serializedState = JSON.stringify(
//       state
//       // state.userActiveSubModule,
//       // state.userActiveModule,
//       // state.selectedLanguage,
//       // state.EducationWithTasks
//     );
//     localStorage.setItem("state", serializedState);
//   } catch (e) {
//     console.log(e);
//   }
// }

// function loadFromLocalStorage() {
//   try {
//     const serializedState = localStorage.getItem("state");
//     if (serializedState === null) return undefined;
//     return JSON.parse(serializedState);
//   } catch (e) {
//     console.log(e);
//     return undefined;
//   }
// }

// const persistedState = loadFromLocalStorage();

const store = createStore(
  Reducer,
  // persistedState,
  initialState,
  compose(
    applyMiddleware(...middleware)
    // ,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
