import {
  USER_ACTIVE_MODULE_SUBMODULE,
  SELECTED_SUBMODULE,
  SUBMODULE_DETAIL,
} from "./types";

const initialState = {
  userActiveModule: "",
  userActiveSubModule: "",
  //
  SubModuleTitle: "",
  SubModuleUrl: "",
  SubModuleRatio: "",
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

    case SUBMODULE_DETAIL:
      return {
        ...state,
        SubModuleTitle: action.payload.SubModuleTitle,
        SubModuleUrl: action.payload.SubModuleUrl,
        SubModuleRatio: action.payload.SubModuleRatio,
      };

    default:
      return {
        ...state,
      };
  }
}
