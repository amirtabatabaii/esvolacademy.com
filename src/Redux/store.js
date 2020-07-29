import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Reducer from "./reducer";

const initialState = {
  activeModule: "",
  activeSubModule: "",
  subModuleComplationRatio: "",
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
