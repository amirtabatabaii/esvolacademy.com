import { TEST } from "./types";

const initialState = {
  activeModule: "",
  activeSubModule: "",
  subModuleComplationRatio: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TEST:
      return {
        ...state,
        activeModule: action.payload.activeModule,
        activeSubModule: action.payload.activeSubModule,
        subModuleComplationRatio: action.payload.subModuleComplationRatio,
      };

    default:
      return {
        ...state,
      };
  }
}
