import {
  ADMIN_ACTIVE_MODULE_SUBMODULE,
  USER_ACTIVE_MODULE_SUBMODULE,
  SELECTED_SUBMODULE,
  SUBMODULE_1_DETAIL,
  SUBMODULE_2_DETAIL,
  SUBMODULE_6_DETAIL,
  SUBMODULE_1_QUIZ,
  SELECTED_LANGUAGE,
  SUBMODULE_1_QUIZ_FILTERED,
  TEST_NUMBER,
} from "./types";

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
  SubModule4Name: "Expert Video",
  SubModule5Name: "Reading",
  SubModule6Name: "Case Study",
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
  //
  SubModule1QuizQuestion: [],
  SubModule1QuizQuestionFiltered: [],
  //
  selectedLanguage: "En",
};

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

    case SUBMODULE_1_QUIZ:
      return {
        ...state,
        SubModule1QuizQuestion: action.payload.SubModule1QuizQuestion,
      };

    case SUBMODULE_1_QUIZ_FILTERED:
      return {
        ...state,
        SubModule1QuizQuestionFiltered:
          action.payload.SubModule1QuizQuestionFiltered,
      };

    case SELECTED_LANGUAGE:
      return {
        ...state,
        selectedLanguage: action.payload.selectedLanguage,
      };

    default:
      return {
        ...state,
      };
  }
}
