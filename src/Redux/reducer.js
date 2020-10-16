import {
  ADMIN_ACTIVE_MODULE_SUBMODULE,
  USER_ACTIVE_MODULE_SUBMODULE,
  SELECTED_SUBMODULE,
  SUBMODULE_1_DETAIL,
  SUBMODULE_2_DETAIL,
  SUBMODULE_6_DETAIL,
  SUBMODULE_7_QUIZ,
  SELECTED_LANGUAGE,
  SUBMODULE_7_QUIZ_FILTERED,
  QUIZ_SCORE,
  USER_QUIZ_ALL_ANSWERS,
  // EMPTY_REDUX,
} from "./types";

import initialState from "./store";

export default function (state = initialState, action) {
  switch (action.type) {
    case ADMIN_ACTIVE_MODULE_SUBMODULE:
      return {
        ...state,
        adminActiveModule: action.payload.adminActiveModule,
        adminActiveSubModule: action.payload.adminActiveSubModule,
      };

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

    case SUBMODULE_6_DETAIL:
      return {
        ...state,
        SubModule6Title: action.payload.SubModule6Title,
        SubModule6Url: action.payload.SubModule6Url,
        SubModule6Ratio: action.payload.SubModule6Ratio,
      };

    case SUBMODULE_7_QUIZ:
      return {
        ...state,
        SubModule7QuizQuestion: action.payload.SubModule7QuizQuestion,
      };

    case SUBMODULE_7_QUIZ_FILTERED:
      return {
        ...state,
        SubModule7QuizQuestionFiltered:
          action.payload.SubModule7QuizQuestionFiltered,
      };

    case SELECTED_LANGUAGE:
      return {
        ...state,
        selectedLanguage: action.payload.selectedLanguage,
      };

    case QUIZ_SCORE:
      return {
        ...state,
        userQuizScore: action.payload.userQuizScore,
        QuizScore: action.payload.QuizScore,
      };

    case USER_QUIZ_ALL_ANSWERS:
      return {
        ...state,
        UserQuizAllAnswers: action.payload.UserQuizAllAnswers,
        UserQuizAllAnswersLanguage: action.payload.UserQuizAllAnswersLanguage,
      };

    // case EMPTY_REDUX:
    //   return {
    //     ...state,
    //     adminActiveModule: "",
    //     adminActiveSubModule: "",

    //     // userActiveModule: "",
    //     // userActiveSubModule: "",

    //     // SubModule1Title: "",
    //     // SubModule1Url: "",
    //     // SubModule1Ratio: "",

    //     // SubModule2Title: "",
    //     // SubModule2Url: "",
    //     // SubModule2Ratio: "",

    //     // SubModule6: [],

    //     // SubModule7QuizQuestion: [],
    //     // SubModule7QuizQuestionFiltered: [],

    //     selectedLanguage: "En",
    //     userQuizScore: 0,
    //     QuizScore: 0,
    //     UserQuizAllAnswers: [],
    //     UserQuizAllAnswersLanguage: [],

    //     EducationWithTasks: true,
    //   };

    default:
      return {
        ...state,
      };
  }
}
