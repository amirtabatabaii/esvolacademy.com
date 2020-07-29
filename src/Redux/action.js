import {
  USER_ACTIVE_MODULE_SUBMODULE,
  SELECTED_SUBMODULE,
  SUBMODULE_DETAIL,
} from "./types";

// User Active Module SubModule
export const UserActiveModuleSubModule = (
  userActiveModule,
  userActiveSubModule
) => (dispatch) => {
  dispatch({
    type: USER_ACTIVE_MODULE_SUBMODULE,
    payload: { userActiveModule, userActiveSubModule },
  });
};

// Selected SubModule
export const SelectedSubModule = (userActiveSubModule) => (dispatch) => {
  dispatch({
    type: SELECTED_SUBMODULE,
    payload: { userActiveSubModule },
  });
};

// SubModule Detail
export const SubModuleDetail = (
  SubModuleTitle,
  SubModuleUrl,
  SubModuleRatio
) => (dispatch) => {
  dispatch({
    type: SUBMODULE_DETAIL,
    payload: { SubModuleTitle, SubModuleUrl, SubModuleRatio },
  });
};
