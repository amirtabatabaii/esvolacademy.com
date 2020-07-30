import {
  USER_ACTIVE_MODULE_SUBMODULE,
  SELECTED_SUBMODULE,
  SUBMODULE_1_DETAIL,
  SUBMODULE_2_DETAIL,
} from "./types";

const initialState = {
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
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_ACTIVE_MODULE_SUBMODULE:
      return {
        ...state,
        userActiveModule: action.payload.userActiveModule,
        userActiveSubModule: action.payload.userActiveSubModule,
      };

    case SELECTED_SUBMODULE:
      return {
        ...state,
        userActiveSubModule: action.payload.userActiveSubModule,
      };

    case SUBMODULE_1_DETAIL:
      return {
        ...state,
        SubModule1Title: action.payload.SubModule1Title,
        SubModule1Url: action.payload.SubModule1Url,
        SubModule1Ratio: action.payload.SubModule1Ratio,
      };

    case SUBMODULE_2_DETAIL:
      return {
        ...state,
        SubModule2Title: action.payload.SubModule2Title,
        SubModule2Url: action.payload.SubModule2Url,
        SubModule2Ratio: action.payload.SubModule2Ratio,
      };

    default:
      return {
        ...state,
      };
  }
}
