import {
  ADMIN_ACTIVE_MODULE_SUBMODULE,
  USER_ACTIVE_MODULE_SUBMODULE,
  SELECTED_SUBMODULE,
  SUBMODULE_1_DETAIL,
  SUBMODULE_2_DETAIL,
  SUBMODULE_6_DETAIL,
  SUBMODULE_1_QUIZ,
  SUBMODULE_1_QUIZ_FILTERED,
  SELECTED_LANGUAGE,
} from "./types";

// Admin Active Module SubModule
export const AdminActiveModuleSubModule = (
  adminActiveModule,
  adminActiveSubModule
) => (dispatch) => {
  dispatch({
    type: ADMIN_ACTIVE_MODULE_SUBMODULE,
    payload: { adminActiveModule, adminActiveSubModule },
  });
};

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

// SubModule 1 Detail
export const SubModule1Detail = (
  SubModule1Title,
  SubModule1Url,
  SubModule1Ratio
) => (dispatch) => {
  dispatch({
    type: SUBMODULE_1_DETAIL,
    payload: { SubModule1Title, SubModule1Url, SubModule1Ratio },
  });
};

// SubModule 1 QUIZ Questions
export const SubModule1Quiz = (SubModule1QuizQuestion) => (dispatch) => {
  dispatch({
    type: SUBMODULE_1_QUIZ,
    payload: { SubModule1QuizQuestion },
  });
};

// SubModule 1 QUIZ Questions Filtered
export const SubModule1QuizFiltered = (SubModule1QuizQuestionFiltered) => (
  dispatch
) => {
  dispatch({
    type: SUBMODULE_1_QUIZ_FILTERED,
    payload: { SubModule1QuizQuestionFiltered },
  });
};

// SubModule 2 Detail
export const SubModule2Detail = (
  SubModule2Title,
  SubModule2Url,
  SubModule2Ratio
) => (dispatch) => {
  dispatch({
    type: SUBMODULE_2_DETAIL,
    payload: { SubModule2Title, SubModule2Url, SubModule2Ratio },
  });
};

// SubModule 6 Detail
export const SubModule6Detail = (
  SubModule6Title,
  SubModule6Url,
  SubModule6Ratio
) => (dispatch) => {
  dispatch({
    type: SUBMODULE_6_DETAIL,
    payload: { SubModule6Title, SubModule6Url, SubModule6Ratio },
  });
};

// Selected Language
export const SelectedLanguage = (selectedLanguage) => (dispatch) => {
  dispatch({
    type: SELECTED_LANGUAGE,
    payload: { selectedLanguage },
  });
};
