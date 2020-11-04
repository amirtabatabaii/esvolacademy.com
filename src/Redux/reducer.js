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
  SUBMODULE_4_READING,
  SUBMODULE_4_READING_FILTERED,
  SUBMODULE_5_CASESTUDY,
  SUBMODULE_5_CASESTUDY_FILTERED,
  EMPTY_REDUX,
  EDUCATION_WITH_TASK,
  SUBMODULE_6_EXPERT_VIDEO,
  SUBMODULE_1_INTRO_VIDEO,
  SUBMODULE_2_COURSE_VIDEO,
  USER_INFO,
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

    case EMPTY_REDUX:
      return {
        ...state,
        //
        SubModule1Title: "Introduction Video",
        SubModule1Url: "https://www.youtube.com/watch?v=A2pM6u-d-MM",
        SubModule1Ratio: "80",
        //
        SubModule2Title: "Course Video",
        SubModule2Url: "https://www.youtube.com/watch?v=_npPA9ydDTs",
        SubModule2Ratio: "70",
        //
        SubModule6: [
          {
            SubModule6Title: "Expert Video 1",
            SubModule6Url: "https://www.youtube.com/watch?v=3_JsyidKdaI",
            SubModule6Ratio: "50",
          },
          {
            SubModule6Title: "Expert Video 2",
            SubModule6Url: "https://www.youtube.com/watch?v=_npPA9ydDTs",
            SubModule6Ratio: "80",
          },
        ],
        SubModule7QuizQuestion: [],
        SubModule7QuizQuestionFiltered: [],
        //
        // selectedLanguage: "En",
        userQuizScore: 0,
        QuizScore: 0,
        UserQuizAllAnswers: [],
        UserQuizAllAnswersLanguage: [],
        //
        SubModule4Reading: [],
        SubModule4ReadingFiltered: [],
        SubModule5CaseStudy: [],
        SubModule5CaseStudyFiltered: [],
      };

    case SUBMODULE_4_READING:
      return {
        ...state,
        SubModule4Reading: action.payload.SubModule4Reading,
      };

    case SUBMODULE_4_READING_FILTERED:
      return {
        ...state,
        SubModule4ReadingFiltered: action.payload.SubModule4ReadingFiltered,
      };

    case SUBMODULE_5_CASESTUDY:
      return {
        ...state,
        SubModule5CaseStudy: action.payload.SubModule5CaseStudy,
      };

    case SUBMODULE_5_CASESTUDY_FILTERED:
      return {
        ...state,
        SubModule5CaseStudyFiltered: action.payload.SubModule5CaseStudyFiltered,
      };

    case EDUCATION_WITH_TASK:
      return {
        ...state,
        EducationWithTasks: action.payload.EducationWithTasks,
      };

    case SUBMODULE_6_EXPERT_VIDEO:
      return {
        ...state,
        SubModule6ExpertVideo: action.payload.SubModule6ExpertVideo,
      };

    case SUBMODULE_1_INTRO_VIDEO:
      return {
        ...state,
        SubModule1IntroductionVideo: action.payload.SubModule1IntroductionVideo,
      };

    case SUBMODULE_2_COURSE_VIDEO:
      return {
        ...state,
        SubModule2CourseVideo: action.payload.SubModule2CourseVideo,
      };

    case USER_INFO:
      return {
        ...state,
        UserInfo: action.payload.UserInfo,
        UserStatus: action.payload.UserInfo.userStatus,
      };

    default:
      return {
        ...state,
      };
  }
}
