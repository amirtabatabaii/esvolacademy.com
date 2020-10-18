import {
  ADMIN_ACTIVE_MODULE_SUBMODULE,
  USER_ACTIVE_MODULE_SUBMODULE,
  SELECTED_SUBMODULE,
  SUBMODULE_1_DETAIL,
  SUBMODULE_2_DETAIL,
  SUBMODULE_6_DETAIL,
  SUBMODULE_7_QUIZ,
  SUBMODULE_7_QUIZ_FILTERED,
  SELECTED_LANGUAGE,
  QUIZ_SCORE,
  USER_QUIZ_ALL_ANSWERS,
  SUBMODULE_4_READING,
  SUBMODULE_4_READING_FILTERED,
  SUBMODULE_5_CASESTUDY_FILTERED,
  SUBMODULE_5_CASESTUDY,
  EMPTY_REDUX,
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

// SubModule 7 QUIZ Questions
export const SubModule1Quiz = (SubModule7QuizQuestion) => (dispatch) => {
  dispatch({
    type: SUBMODULE_7_QUIZ,
    payload: { SubModule7QuizQuestion },
  });
};

// SubModule 1 QUIZ Questions Filtered
export const SubModule1QuizFiltered = (SubModule7QuizQuestionFiltered) => (
  dispatch
) => {
  dispatch({
    type: SUBMODULE_7_QUIZ_FILTERED,
    payload: { SubModule7QuizQuestionFiltered },
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

// QUIZ_SCORE
export function SetQuizScore(userQuizScore, QuizScore) {
  return (dispatch) => {
    dispatch({
      type: QUIZ_SCORE,
      payload: { userQuizScore, QuizScore },
    });
  };
}

// USER_QUIZ_ALL_ANSWERS
export function SetUserQuizAnswer(
  UserQuizAllAnswers,
  UserQuizAllAnswersLanguage
) {
  return (dispatch) => {
    dispatch({
      type: USER_QUIZ_ALL_ANSWERS,
      payload: { UserQuizAllAnswers, UserQuizAllAnswersLanguage },
    });
  };
}

//Empty;
export function SetEmptyRedux() {
  return (dispatch) => {
    dispatch({
      type: EMPTY_REDUX,
      payload: {},
    });
  };
}

// SubModule 4 Reading
export const SubModule4ReadingSection = (SubModule4Reading) => (dispatch) => {
  dispatch({
    type: SUBMODULE_4_READING,
    payload: { SubModule4Reading },
  });
};

// SubModule 4 REading Filtered
export const SubModule4ReadingSectionFiltered = (SubModule4ReadingFiltered) => (
  dispatch
) => {
  dispatch({
    type: SUBMODULE_4_READING_FILTERED,
    payload: { SubModule4ReadingFiltered },
  });
};

// SubModule 5 case study
export const SubModule5CaseStudySection = (SubModule5CaseStudy) => (
  dispatch
) => {
  dispatch({
    type: SUBMODULE_5_CASESTUDY,
    payload: { SubModule5CaseStudy },
  });
};

// SubModule 5 case study Filtered
export const SubModule5CaseStudySectionFiltered = (
  SubModule5CaseStudyFiltered
) => (dispatch) => {
  dispatch({
    type: SUBMODULE_5_CASESTUDY_FILTERED,
    payload: { SubModule5CaseStudyFiltered },
  });
};
