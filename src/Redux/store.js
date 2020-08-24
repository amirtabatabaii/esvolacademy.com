import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Reducer from "./reducer";

const initialState = {
  adminActiveModule: "",
  adminActiveSubModule: "",
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
  userActiveModule: "",
  userActiveSubModule: "",
  //
  SubModule1Title: "",
  SubModule1Url: "",
  SubModule1Ratio: "",
  //
  SubModule2Title: "",
  SubModule2Url: "",
  SubModule2Ratio: "",
  //
  SubModule6Title: "",
  SubModule6Url: "",
  SubModule6Ratio: "",
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
