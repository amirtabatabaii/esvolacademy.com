import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";

import "./ModuleHome.css";
import SubModuleBtn from "./SubModuleBtn";
import ModuleNavBar from "./ModuleNavBar";

import { withRouter } from "react-router-dom";
import {
  SelectedSubModule,
  UserActiveModuleSubModule,
  SubModule1Quiz,
  SubModule1QuizFiltered,
  SetQuizScore,
  SetUserQuizAnswer,
  SubModule4ReadingSection,
  SubModule4ReadingSectionFiltered,
  SubModule5CaseStudySection,
  SubModule5CaseStudySectionFiltered,
  SetEmptyRedux,
  SubModule6ExpertVideoSection,
  SubModule1IntroductionVideoSection,
  SubModule2CourseVideoSection,
  SetUserInfo,
  SubModule3InteractiveSection,
  SetUserPassed,
  SelectedLanguage,
} from "../../Redux/action";
import { connect } from "react-redux";
import Footer from "../Footer/Footer";
import SubModule from "../SubModules/SubModule";
import ModuleStagesName from "./ModuleStagesName";
import ModuleStagesNameSmall from "./ModuleStagesNameSmall";
import SubModuleNote from "../SubModules/SubModuleNote";
import { ApiUrlMain2 } from "../Utility/ApiUrl";
import PreTest from "../SubModules/PreFinalTest/PreTest";
import FinalTest from "../SubModules/PreFinalTest/FinalTest";
import { openNotificationWithIcon } from "../AdminSection/Utility/Error";
import TranslateText from "../Translate/TranslateText";

let userAllAnswers = [];
let userAllAnswersLanguage = [];
let userBlankAnswers = [];

class ModuleHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userActiveModule: "",
      userActiveSubModule: "",
      //
      SubModule7QuizQuestion: [],
      SubModule7QuizQuestionFilterd: [],
      randomAnswers: [],
      AllQuestions: [],
      userAnswer: "",
      userYesNoAnswer: "",
      userMultipleChoiceAnswer: "",
      userFillingAnswer: "",
      userBlankAnswer: [],
      questionCount: 0,
      questionIndex: 0,
      selectedLanguage: "",
      correctAnswerCount: 0,
      showResult: false,
      takeQuiz: true,
      compareAnswer: false,
      userAllAnswers: [],
      userAllAnswersLanguage: [],
      userScore: 0,
      ExpertIndex: 0,
      userActiveSubModuleNum: null,
    };
  }

  handleOnClickModule = (ActiveModuleName) => {
    const UserActiveNumber = localStorage.getItem("UserModule").substring(6);
    const UserSelectedModuleNumber = ActiveModuleName.substring(6);

    localStorage.setItem("UserTempModule", ActiveModuleName);

    if (UserSelectedModuleNumber === UserActiveNumber) {
      // console.log(UserSelectedModuleNumber, " = ", UserActiveNumber);
      axios
        .put(
          ApiUrlMain2 + `/users/${this.props.UserInfo.userId}/status`,
          {
            userStatus: {
              currentModule: localStorage.getItem("UserModule"),
              currentSubModule: localStorage.getItem("UserSubModule"), //"sub1",
              score: this.props.UserStatus.score,
              badgeNo: this.props.UserStatus.badgeNo,
              isPreTestDone: this.props.UserStatus.isPreTestDone,
              isFinalTestDone: this.props.UserStatus.isFinalTestDone,
            },
          },
          (axios.defaults.headers.common[
            "Authorization"
          ] = localStorage.getItem("UserInfo")),
          (axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*"),
          {
            "Content-Type": "application/json",
          }
        )
        .then((res) => {
          // console.log("res =====> ", res);
          if (res.status === 200) {
            window.location.reload(false);
            //openNotificationWithIcon("success", "Update", "Update ok", 3);
          }
        });
    } else if (UserSelectedModuleNumber < UserActiveNumber) {
      //console.log(UserSelectedModuleNumber, " < ", UserActiveNumber);
      axios
        .put(
          ApiUrlMain2 + `/users/${this.props.UserInfo.userId}/status`,
          {
            userStatus: {
              currentModule: ActiveModuleName,
              currentSubModule: "sub1",
              score: this.props.UserStatus.score,
              badgeNo: this.props.UserStatus.badgeNo,
              isPreTestDone: this.props.UserStatus.isPreTestDone,
              isFinalTestDone: this.props.UserStatus.isFinalTestDone,
            },
          },
          (axios.defaults.headers.common[
            "Authorization"
          ] = localStorage.getItem("UserInfo")),
          (axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*"),
          {
            "Content-Type": "application/json",
          }
        )
        .then((res) => {
          // console.log("res =====> ", res);
          if (res.status === 200) {
            window.location.reload(false);
            //openNotificationWithIcon("success", "Update", "Update ok", 3);
          }
        });
    } else {
      // console.log(UserSelectedModuleNumber, " > ", UserActiveNumber);
    }

    // //else console.log("YOU CAN NOT ENTER THIS SUBMODULE !!");
  };

  handleOnClickSubModule = (
    ActiveSubName,
    UserModuleNum,
    UserTempModuleNum
  ) => {
    const UserActiveSubNumber = this.props.UserStatus.currentSubModule.substring(
      3
    );
    const UserStorageActiveSubNumber = localStorage
      .getItem("UserSubModule")
      .substring(3);
    const UserSelectedSubNumber = ActiveSubName.substring(3);

    // console.log(
    //   "UserActiveSubNumber",
    //   UserActiveSubNumber,
    //   "UserSelectedSubNumber",
    //   UserSelectedSubNumber,
    //   "UserStorageActiveSubNumber",
    //   UserStorageActiveSubNumber
    // );

    if (this.props.UserInfo.isEasyModeActive) {
      if (
        ((UserSelectedSubNumber === "1" ||
          UserSelectedSubNumber === "2" ||
          UserSelectedSubNumber === "3" ||
          UserSelectedSubNumber === "7") &&
          UserSelectedSubNumber <= UserStorageActiveSubNumber) ||
        UserTempModuleNum < UserModuleNum
      ) {
        axios
          .put(
            ApiUrlMain2 + `/users/${this.props.UserInfo.userId}/status`,
            {
              userStatus: {
                currentModule: this.props.UserStatus.currentModule,
                currentSubModule: ActiveSubName,
                score: this.props.UserStatus.score,
                badgeNo: "0",
                isPreTestDone: this.props.UserStatus.isPreTestDone,
                isFinalTestDone: this.props.UserStatus.isFinalTestDone,
              },
            },
            (axios.defaults.headers.common[
              "Authorization"
            ] = localStorage.getItem("UserInfo")),
            (axios.defaults.headers.common["Access-Control-Allow-Origin"] =
              "*"),
            {
              "Content-Type": "application/json",
            }
          )
          .then((res) => {
            // console.log("res =====> ", res);
            if (res.status === 200) {
              window.location.reload(false);
              //openNotificationWithIcon("success", "Update", "Update ok", 3);
            }
          });
      } else if (
        UserSelectedSubNumber === "1" ||
        UserSelectedSubNumber === "2" ||
        UserSelectedSubNumber === "3" ||
        UserSelectedSubNumber === "7"
      )
        openNotificationWithIcon(
          "error",
          <TranslateText txt='SubModuleSelectError1' />,
          <TranslateText txt='SubModuleSelectError2' />,
          5
        );
      else
        openNotificationWithIcon(
          "error",
          <TranslateText txt='SubModuleSelectError1Easy' />,
          <TranslateText txt='SubModuleSelectError2Easy' />,
          5
        );
    } else {
      if (
        UserSelectedSubNumber <= UserStorageActiveSubNumber ||
        UserTempModuleNum < UserModuleNum
      ) {
        axios
          .put(
            ApiUrlMain2 + `/users/${this.props.UserInfo.userId}/status`,
            {
              userStatus: {
                currentModule: this.props.UserStatus.currentModule,
                currentSubModule: ActiveSubName,
                score: this.props.UserStatus.score,
                badgeNo: "0",
                isPreTestDone: this.props.UserStatus.isPreTestDone,
                isFinalTestDone: this.props.UserStatus.isFinalTestDone,
              },
            },
            (axios.defaults.headers.common[
              "Authorization"
            ] = localStorage.getItem("UserInfo")),
            (axios.defaults.headers.common["Access-Control-Allow-Origin"] =
              "*"),
            {
              "Content-Type": "application/json",
            }
          )
          .then((res) => {
            // console.log("res =====> ", res);
            if (res.status === 200) {
              window.location.reload(false);
              //openNotificationWithIcon("success", "Update", "Update ok", 3);
            }
          });
      } else
        openNotificationWithIcon(
          "error",
          <TranslateText txt='SubModuleSelectError1' />,
          <TranslateText txt='SubModuleSelectError2' />,
          5
        );
    }
  };

  handleClickSubModuleNext = (ActiveSubName) => {
    // this.props.SelectedSubModule("sub" + ActiveSubName.substring(3));
    axios
      .put(
        ApiUrlMain2 + `/users/${this.props.UserInfo.userId}/status`,
        {
          userStatus: {
            currentModule: this.props.UserStatus.currentModule,
            currentSubModule: "sub" + ActiveSubName.substring(3),
            score: this.props.UserStatus.score,
            badgeNo: "0",
            isPreTestDone: this.props.UserStatus.isPreTestDone,
            isFinalTestDone: this.props.UserStatus.isFinalTestDone,
          },
        },

        (axios.defaults.headers.common["Authorization"] = localStorage.getItem(
          "UserInfo"
        )),
        (axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*"),
        {
          "Content-Type": "application/json",
        }
      )
      .then((res) => {
        // console.log("res =====> ", res);
        if (res.status === 200) {
          window.location.reload(false);
          //openNotificationWithIcon("success", "Update", "Update ok", 3);
          localStorage.setItem("firstName", res.data.firstName);
          localStorage.setItem("lastName", res.data.lastName);
          // localStorage.setItem("UserModule", res.data.userStatus.currentModule);
          localStorage.setItem(
            "UserSubModule",
            res.data.userStatus.currentSubModule
          );
          localStorage.setItem(
            "UserTempModule",
            res.data.userStatus.currentModule
          );
          // localStorage.setItem("lng", this.props.selectedLanguage);
        }
      });

    this.setState({
      ExpertIndex: 0,
    });
  }; //ok

  handleClickExpertVideo = () => {
    this.setState({
      ExpertIndex: this.state.ExpertIndex + 1,
    });
  }; //ok

  handleClickModuleNext = (ActiveModuleName, ActiveSubName) => {
    window.location.reload(false);

    // const ModuleNumber = ActiveModuleName.substr(ActiveModuleName.length - 1);
    // const editedModuleName = ActiveModuleName.slice(0, -1);

    this.props.SetEmptyRedux();

    localStorage.setItem(
      "UserTempModule",
      "Module" + (parseInt(ActiveModuleName.substring(6)) + 1)
    );
    localStorage.setItem(
      "UserModule",
      "Module" + (parseInt(ActiveModuleName.substring(6)) + 1)
    );
    localStorage.setItem("UserSubModule", ActiveSubName);

    // axios
    //   .put(
    //     ApiUrlMain2 + `/users/${this.props.UserInfo.userId}/status`,
    //     {
    //       userStatus: {
    //         currentModule: editedModuleName + (parseInt(ModuleNumber) + 1),
    //         currentSubModule: ActiveSubName,
    //         score: this.props.UserStatus.score,
    //         badgeNo: "0",
    //         isPreTestDone: this.props.UserStatus.isPreTestDone,
    //         isFinalTestDone: this.props.UserStatus.isFinalTestDone,
    //       },
    //     },

    //     (axios.defaults.headers.common["Authorization"] = localStorage.getItem(
    //       "UserInfo"
    //     )),
    //     (axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*"),
    //     {
    //       "Content-Type": "application/json",
    //     }
    //   )
    //   .then((res) => {
    //     // console.log("res =====> ", res);
    //     if (res.status === 200) {
    //       window.location.reload(false);
    //       //openNotificationWithIcon("success", "Update", "Update ok", 3);
    //       //openNotificationWithIcon("success", "Update", "Update ok", 3);
    //       localStorage.setItem("firstName", res.data.firstName);
    //       localStorage.setItem("lastName", res.data.lastName);
    //       // localStorage.setItem("UserModule", res.data.userStatus.currentModule);
    //       localStorage.setItem(
    //         "UserSubModule",
    //         res.data.userStatus.currentSubModule
    //       );
    //       localStorage.setItem(
    //         "UserTempModule",
    //         res.data.userStatus.currentModule
    //       );
    //     }
    //   });

    // this.props.UserActiveModuleSubModule(
    //   editedModuleName + (parseInt(ModuleNumber) + 1),
    //   ActiveSubName
    // );
  }; //ok

  componentWillMount() {
    // axios
    //   .put(
    //     ApiUrlMain2 + `/users/${this.props.UserInfo.userId}/status`,
    //     {
    //       userStatus: {
    //         currentModule: this.props.UserStatus.currentModule,
    //         currentSubModule: this.props.UserStatus.currentSubModule,
    //         score: this.props.UserStatus.score,
    //         badgeNo: "0",
    //         isPreTestDone: true,
    //         isFinalTestDone: true,
    //       },
    //     },

    //     (axios.defaults.headers.common["Authorization"] = localStorage.getItem(
    //       "UserInfo"
    //     )),
    //     (axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*"),
    //     {
    //       "Content-Type": "application/json",
    //     }
    //   )
    //   .then((res) => {
    //     // console.log("res =====> ", res);
    //     if (res.status === 200) {
    //       window.location.reload(false);
    //       //openNotificationWithIcon("success", "Update", "Update ok", 3);
    //     }
    //   });

    if (this.props.UserStatus.currentModule === "Module6") {
      this.handleOnClickModule("Module1");
    }
  }

  async componentDidMount() {
    window.scrollTo(0, 0);

    this.props.SelectedLanguage(localStorage.getItem("lng"));

    await axios
      .get(ApiUrlMain2 + `/users/${localStorage.getItem("UserID")}`, {
        headers: {
          Authorization: localStorage.getItem("UserInfo"),
        },
      })
      .then((Response) => {
        if (Response.status === 200) {
          // console.log(Response.data);
          this.props.SetUserInfo(Response.data);
          // localStorage.setItem("lng", this.props.selectedLanguage);

          // localStorage.setItem("firstName", Response.data.firstName);
          // localStorage.setItem("lastName", Response.data.lastName);
          // localStorage.setItem(
          //   "UserModule",
          //   Response.data.userStatus.currentModule
          // );
          // localStorage.setItem(
          //   "UserSubModule",
          //   Response.data.userStatus.currentSubModule
          // );
          // localStorage.setItem(
          //   "UserTempModule",
          //   Response.data.userStatus.currentModule
          // );

          // this.setState(
          //   {
          //     userActiveSubModuleNum: Response.data.userStatus.currentSubModule.substring(
          //       3
          //     ),
          //   },
          //   () => {
          //     console.log(
          //       this.state.userActiveSubModuleNum,
          //       "userActiveSubModuleNum"
          //     );
          //   }
          // );
        }
      });
    // localStorage.setItem("UserModule", this.props.UserStatus.currentModule);
    // localStorage.setItem(
    //   "UserSubModule",
    //   this.props.UserStatus.currentSubModule
    // );
    // localStorage.setItem("UserTempModule", this.props.UserStatus.currentModule);

    // console.log("userStatus", this.props.UserStatus);
    // console.log("UserModule", this.props.userStatus.currentModule);
    // console.log("UserSubModule", this.props.userStatus.currentSubModule);
    // console.log("UserTempModule", this.props.userStatus.currentModule);

    if (this.props.UserInfo.isEasyModeActive) {
      if (
        this.props.UserStatus.currentSubModule === "sub4" ||
        this.props.UserStatus.currentSubModule === "sub5" ||
        this.props.UserStatus.currentSubModule === "sub6"
      ) {
        axios
          .put(
            ApiUrlMain2 + `/users/${this.props.UserInfo.userId}/status`,
            {
              userStatus: {
                currentModule: this.props.UserStatus.currentModule,
                currentSubModule: "sub7",
                score: this.props.UserStatus.score,
                badgeNo: "0",
                isPreTestDone: this.props.UserStatus.isPreTestDone,
                isFinalTestDone: this.props.UserStatus.isFinalTestDone,
              },
            },
            (axios.defaults.headers.common[
              "Authorization"
            ] = localStorage.getItem("UserInfo")),
            (axios.defaults.headers.common["Access-Control-Allow-Origin"] =
              "*"),
            {
              "Content-Type": "application/json",
            }
          )
          .then((res) => {
            // console.log("res =====> ", res);
            if (res.status === 200) {
              window.location.reload(false);
              //openNotificationWithIcon("success", "Update", "Update ok", 3);
              localStorage.setItem("firstName", res.data.firstName);
              localStorage.setItem("lastName", res.data.lastName);
              // localStorage.setItem("UserModule", res.data.userStatus.currentModule);
              localStorage.setItem(
                "UserSubModule",
                res.data.userStatus.currentSubModule
              );
              localStorage.setItem(
                "UserTempModule",
                res.data.userStatus.currentModule
              );
            }
          });

        // this.props.UserActiveModuleSubModule(
        //   this.props.userActiveModule,
        //   "sub6"
        // );
      }
    }

    if (this.props.UserStatus.currentSubModule === "sub1") {
      await axios
        .get(
          ApiUrlMain2 +
            `/api/courses/${this.props.UserStatus.currentModule}/videos/IntroductionVideo`
          // , {
          // headers: {
          //   Authorization: localStorage.getItem("UserInfo"),
          // },
          // }
        )
        .then((Response) => {
          if (Response.status === 200) {
            // console.log("Response.data", Response.data);
            this.props.SubModule1IntroductionVideoSection(Response.data);
          }
        });
    } //ok

    if (this.props.UserStatus.currentSubModule === "sub2") {
      await axios
        .get(
          ApiUrlMain2 +
            `/api/courses/${this.props.UserStatus.currentModule}/videos/CourseVideo`
          // , {
          // headers: {
          //   Authorization: localStorage.getItem("UserInfo"),
          // },
          // }
        )
        .then((Response) => {
          if (Response.status === 200) {
            // console.log("Response.data", Response.data);
            this.props.SubModule2CourseVideoSection(Response.data);
          }
        });
    } //ok

    if (this.props.UserStatus.currentSubModule === "sub3") {
      await axios
        .get(
          ApiUrlMain2 +
            `/users/${this.props.UserInfo.userId}/questions/modules/${this.props.UserStatus.currentModule}`,
          {
            headers: {
              Authorization: localStorage.getItem("UserInfo"),
            },
          }
        )
        .then((Response) => {
          // console.log(Response.data.userAnswers);
          const QstArray = Response.data.userAnswers.filter(
            (qst) => qst.question.type === "Interactive"
          );
          // console.log(QstArray);

          const QstArray2 = QstArray.filter(
            (qst) => qst.question.questionDictionaries
            // [0].language === this.props.selectedLanguage
            //"Tr"
          );
          // console.log(QstArray2);

          this.props.SubModule3InteractiveSection(QstArray2);
        });
    } //ok

    if (this.props.UserStatus.currentSubModule === "sub4") {
      await axios
        .get(
          ApiUrlMain2 +
            `/api/sublevels/search?moduleName=${this.props.UserStatus.currentModule}&subModuleType=Reading`
          // , {
          // headers: {
          //   Authorization: localStorage.getItem("UserInfo"),
          // },
          // }
        )
        .then((Response) => {
          if (Response.status === 200) {
            // console.log("Response.data", Response.data);
            this.props.SubModule4ReadingSection(Response.data);

            this.HandleReadingCaseStudy(
              this.props.SubModule4Reading,
              this.props.selectedLanguage
            );
          }
        });
    } //ok

    if (this.props.UserStatus.currentSubModule === "sub5") {
      await axios
        .get(
          ApiUrlMain2 +
            `/api/sublevels/search?moduleName=${this.props.UserStatus.currentModule}&subModuleType=Case Study`
          // , {
          // headers: {
          //   Authorization: localStorage.getItem("UserInfo"),
          // },
          // }
        )
        .then((Response) => {
          if (Response.status === 200) {
            // console.log("Response.data", Response.data);
            this.props.SubModule5CaseStudySection(Response.data);

            this.HandleReadingCaseStudy(
              this.props.SubModule5CaseStudy,
              this.props.selectedLanguage
            );
          }
        });
    } //ok

    if (this.props.UserStatus.currentSubModule === "sub6") {
      await axios
        .get(
          ApiUrlMain2 +
            `/api/courses/${this.props.UserStatus.currentModule}/videos/`
          // , {
          // headers: {
          //   Authorization: localStorage.getItem("UserInfo"),
          // },
          // }
        )
        .then((Response) => {
          if (Response.status === 200) {
            // console.log("Response.data", Response.data);
            this.props.SubModule6ExpertVideoSection(
              Response.data.filter((video) => video.type === "ExpertVideo")
            );
          }
        });
    } //ok

    if (this.props.UserStatus.currentSubModule === "sub7") {
      await axios
        .get(
          ApiUrlMain2 +
            `/users/${this.props.UserInfo.userId}/questions/modules/${this.props.UserStatus.currentModule}`,
          {
            headers: {
              Authorization: localStorage.getItem("UserInfo"),
            },
          }
        )
        .then((Response) => {
          //console.log(Response.data.userAnswers);
          const QstArray = Response.data.userAnswers.filter(
            (qst) => qst.question.type !== "Interactive"
          );

          this.props.SubModule1Quiz(QstArray);

          this.getRandomAnswer(
            this.props.SubModule7QuizQuestion,
            this.props.selectedLanguage
          );

          this.setState({
            questionCount: this.props.SubModule7QuizQuestion.length - 1,
          });
        });
    } //ok
  } //ok

  async componentDidUpdate(previousProps, previousState) {
    if (this.props.UserInfo.isEasyModeActive) {
      if (
        this.props.UserStatus.currentSubModule === "sub4" ||
        this.props.UserStatus.currentSubModule === "sub5" ||
        this.props.UserStatus.currentSubModule === "sub6"
      ) {
        axios
          .put(
            ApiUrlMain2 + `/users/${this.props.UserInfo.userId}/status`,
            {
              userStatus: {
                currentModule: this.props.UserStatus.currentModule,
                currentSubModule: "sub7",
                score: this.props.UserStatus.score,
                badgeNo: "0",
                isPreTestDone: this.props.UserStatus.isPreTestDone,
                isFinalTestDone: this.props.UserStatus.isFinalTestDone,
              },
            },

            (axios.defaults.headers.common[
              "Authorization"
            ] = localStorage.getItem("UserInfo")),
            (axios.defaults.headers.common["Access-Control-Allow-Origin"] =
              "*"),
            {
              "Content-Type": "application/json",
            }
          )
          .then((res) => {
            // console.log("res =====> ", res);
            if (res.status === 200) {
              window.location.reload(false);
              // localStorage.setItem("lng", this.props.selectedLanguage);
              //openNotificationWithIcon("success", "Update", "Update ok", 3);
              localStorage.setItem("firstName", res.data.firstName);
              localStorage.setItem("lastName", res.data.lastName);
              // localStorage.setItem("UserModule", res.data.userStatus.currentModule);
              localStorage.setItem(
                "UserSubModule",
                res.data.userStatus.currentSubModule
              );
              localStorage.setItem(
                "UserTempModule",
                res.data.userStatus.currentModule
              );
            }
          });

        // this.props.UserActiveModuleSubModule(
        //   this.props.userActiveModule,
        //   "sub6"
        // );
      }
    }

    if (
      previousProps.UserStatus.currentSubModule !==
      this.props.UserStatus.currentSubModule
    ) {
      if (this.props.UserStatus.currentSubModule === "sub1") {
        await axios
          .get(
            ApiUrlMain2 +
              `/api/courses/${this.props.UserStatus.currentModule}/videos/IntroductionVideo`
            // , {
            // headers: {
            //   Authorization: localStorage.getItem("UserInfo"),
            // },
            // }
          )
          .then((Response) => {
            if (Response.status === 200) {
              // console.log("Response.data", Response.data);
              this.props.SubModule1IntroductionVideoSection(Response.data);
            }
          });
      } //ok

      if (this.props.UserStatus.currentSubModule === "sub2") {
        await axios
          .get(
            ApiUrlMain2 +
              `/api/courses/${this.props.UserStatus.currentModule}/videos/CourseVideo`
            // , {
            // headers: {
            //   Authorization: localStorage.getItem("UserInfo"),
            // },
            // }
          )
          .then((Response) => {
            if (Response.status === 200) {
              // console.log("Response.data", Response.data);
              this.props.SubModule2CourseVideoSection(Response.data);
            }
          });
      } //ok

      if (this.props.UserStatus.currentSubModule === "sub3") {
        await axios
          .get(
            ApiUrlMain2 +
              `/users/${this.props.UserInfo.userId}/questions/modules/${this.props.UserStatus.currentModule}`,
            {
              headers: {
                Authorization: localStorage.getItem("UserInfo"),
              },
            }
          )
          .then((Response) => {
            // console.log(Response.data.userAnswers);
            const QstArray = Response.data.userAnswers.filter(
              (qst) => qst.question.type === "Interactive"
            );
            // console.log(QstArray);

            const QstArray2 = QstArray.filter(
              (qst) => (qst) => qst.question.questionDictionaries
              //"Tr"
            );
            // console.log(QstArray2);

            this.props.SubModule3InteractiveSection(QstArray2);
          });
      } //ok

      if (this.props.UserStatus.currentSubModule === "sub4") {
        await axios
          .get(
            ApiUrlMain2 +
              `/api/sublevels/search?moduleName=${this.props.UserStatus.currentModule}&subModuleType=Reading`
            // , {
            // headers: {
            //   Authorization: localStorage.getItem("UserInfo"),
            // },
            // }
          )
          .then((Response) => {
            if (Response.status === 200) {
              // console.log("Response.data", Response.data);
              this.props.SubModule4ReadingSection(Response.data);

              this.HandleReadingCaseStudy(
                this.props.SubModule4Reading,
                this.props.selectedLanguage
              );
            }
          });
      } //ok

      if (this.props.UserStatus.currentSubModule === "sub5") {
        await axios
          .get(
            ApiUrlMain2 +
              `/api/sublevels/search?moduleName=${this.props.UserStatus.currentModule}&subModuleType=Case Study`
            // , {
            // headers: {
            //   Authorization: localStorage.getItem("UserInfo"),
            // },
            // }
          )
          .then((Response) => {
            if (Response.status === 200) {
              // console.log("Response.data", Response.data);
              this.props.SubModule5CaseStudySection(Response.data);

              this.HandleReadingCaseStudy(
                this.props.SubModule5CaseStudy,
                this.props.selectedLanguage
              );
            }
          });
      } //ok

      if (this.props.UserStatus.currentSubModule === "sub6") {
        await axios
          .get(
            ApiUrlMain2 +
              `/api/courses/${this.props.UserStatus.currentModule}/videos/`
            // , {
            // headers: {
            //   Authorization: localStorage.getItem("UserInfo"),
            // },
            // }
          )
          .then((Response) => {
            if (Response.status === 200) {
              // console.log("Response.data", Response.data);
              this.props.SubModule6ExpertVideoSection(
                Response.data.filter((video) => video.type === "ExpertVideo")
              );
            }
          });
      } //ok

      if (this.props.UserStatus.currentSubModule === "sub7") {
        await axios
          .get(
            ApiUrlMain2 +
              `/users/${this.props.UserInfo.userId}/questions/modules/${this.props.UserStatus.currentModule}`,
            {
              headers: {
                Authorization: localStorage.getItem("UserInfo"),
              },
            }
          )
          .then((Response) => {
            //console.log(Response);
            const QstArray = Response.data.userAnswers.filter(
              (qst) => qst.question.type !== "Interactive"
            );

            this.props.SubModule1Quiz(QstArray);

            this.getRandomAnswer(
              this.props.SubModule7QuizQuestion,
              this.props.selectedLanguage
            );

            this.setState({
              questionCount: this.props.SubModule7QuizQuestion.length - 1,
            });
          });
      } //ok
    }

    if (previousProps.selectedLanguage !== this.props.selectedLanguage) {
      this.setState({
        SubModule7QuizQuestionFilterd: [],
        selectedLanguage: this.props.selectedLanguage,
        userAnswer: "",
      });

      if (this.props.UserStatus.currentSubModule === "sub7")
        this.getRandomAnswer(
          this.props.SubModule7QuizQuestion,
          this.props.selectedLanguage
        );

      if (this.props.UserStatus.currentSubModule === "sub4")
        this.HandleReadingCaseStudy(
          this.props.SubModule4Reading,
          this.props.selectedLanguage
        );

      if (this.props.UserStatus.currentSubModule === "sub5")
        this.HandleReadingCaseStudy(
          this.props.SubModule5CaseStudy,
          this.props.selectedLanguage
        );
    }

    if (
      previousProps.UserStatus.currentModule !==
      this.props.UserStatus.currentModule
    ) {
      this.setState({
        SubModule7QuizQuestion: [],
        randomAnswers: [],
        userAnswer: "",
        questionIndex: 0,
        // questionLanguage: "",
        correctAnswerCount: 0,
        showResult: false,
        takeQuiz: true,
        compareAnswer: false,
        questionCount: this.props.SubModule7QuizQuestion.length - 1,
        //
        userYesNoAnswer: "",
        userMultipleChoiceAnswer: "",
        userFillingAnswer: "",
        userBlankAnswer: [],
        userAllAnswers: [],
        userScore: 0,
      });
    }
  } //ok

  getRandomAnswer = (QuizQuestion, lng) => {
    let NewFilter = [];
    let incorrectAnswers = [];
    let correctAnswers = [];

    for (let i = 0; i < QuizQuestion.length; i++) {
      incorrectAnswers.push(
        QuizQuestion[i].question.answers.filter(
          (ans) => ans.isCorrectAnswer === false
        )
      );
      correctAnswers.push(
        QuizQuestion[i].question.answers.filter(
          (ans) => ans.isCorrectAnswer === true
        )
      );
      // console.log("correctAnswers", correctAnswers);
    }

    let incorrectAnswers2 = [];
    let correctAnswers2 = [];
    for (let i = 0; i < incorrectAnswers.length; i++) {
      incorrectAnswers2.push([]);
    }

    for (let i = 0; i < correctAnswers.length; i++) {
      // if (correctAnswers.length !== 1)
      correctAnswers2.push([]);
    }

    for (let k = 0; k < QuizQuestion.length; k++) {
      // Manage incorrectAnswers
      if (incorrectAnswers[k].length === 0) {
        incorrectAnswers2[k].push();
      } else if (incorrectAnswers[k].length === 1) {
        incorrectAnswers2[k].push(
          incorrectAnswers[k][0].questionAnswersDictionaries.filter(
            (ans) =>
              ans.language ===
              localStorage.getItem("lng").replace(/^\w/, (c) => c.toUpperCase())
          )[0].answerText
        );
      } else {
        for (let q = 0; q < incorrectAnswers[k].length; q++) {
          incorrectAnswers2[k].push(
            incorrectAnswers[k][q].questionAnswersDictionaries.filter(
              (ans) =>
                ans.language ===
                localStorage
                  .getItem("lng")
                  .replace(/^\w/, (c) => c.toUpperCase())
            )[0].answerText
          );
        }
      }

      // Manage correctAnswers
      if (
        correctAnswers[k].length >= 1 &&
        (QuizQuestion[k].question.type === "Filling" ||
          QuizQuestion[k].question.type === "Blank")
      ) {
        localStorage.getItem("lng").replace(/^\w/, (c) => c.toUpperCase());
        for (let q = 0; q < correctAnswers[k].length; q++) {
          correctAnswers2[k].push(
            correctAnswers[k][q].questionAnswersDictionaries.filter(
              (ans) => ans.language === lng
            )[0].answerText
          );
        }
      } else {
        localStorage.getItem("lng").replace(/^\w/, (c) => c.toUpperCase());
        // correctAnswers2[k][0] = QuizQuestion[k].answers
        correctAnswers2[k] = QuizQuestion[k].question.answers
          .filter((ans) => ans.isCorrectAnswer === true)[0]
          .questionAnswersDictionaries.filter(
            (ans) =>
              ans.language ===
              localStorage.getItem("lng").replace(/^\w/, (c) => c.toUpperCase())
          )[0].answerText;
      }
    }
    // console.log(" correctAnswers2 ", correctAnswers2);
    //console.log("incorrectAnswers2 ", incorrectAnswers2);

    for (let i = 0; i < QuizQuestion.length; i++) {
      NewFilter = [
        ...NewFilter,
        {
          point: QuizQuestion[i].question.point,
          correctAnswers: correctAnswers2[i],
          incorrectAnswers: incorrectAnswers2[i],
          question: QuizQuestion[i].question.questionDictionaries.filter(
            (qst) =>
              qst.language ===
              localStorage.getItem("lng").replace(/^\w/, (c) => c.toUpperCase())
          )[0].questionText,
          questionType: QuizQuestion[i].question.type,
          moduleName: QuizQuestion[i].question.moduleName,
          NumberOfBlank: QuizQuestion[i].question.NumberOfBlank,
          AnsId: QuizQuestion[i].id,
        },
      ];
    }

    //console.log(NewFilter);

    this.props.SubModule1QuizFiltered(NewFilter);
    // console.log(NewFilter);
    // console.log(this.state.questionIndex);

    const correctAns = NewFilter[this.state.questionIndex].correctAnswers;
    const incorrectAns = NewFilter[this.state.questionIndex].incorrectAnswers;
    //
    const randomAnswers = [...incorrectAns];
    randomAnswers.push(correctAns);
    //
    let i = randomAnswers.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = randomAnswers[i];
      randomAnswers[i] = randomAnswers[j];
      randomAnswers[j] = temp;
    }
    //
    this.setState({
      randomAnswers: randomAnswers,
      AllQuestions: NewFilter,
      // questionIndex:0
    });
  }; //ok

  HandleMultipleChoiceAnswerChange = (e) => {
    this.setState(
      {
        userMultipleChoiceAnswer: e.target.value,
      },
      () => {
        userAllAnswers[this.state.questionIndex] =
          this.state.AllQuestions[this.state.questionIndex].AnsId +
          "!,!" +
          this.state.userMultipleChoiceAnswer;
        userAllAnswersLanguage[
          this.state.questionIndex
        ] = this.props.selectedLanguage;
        // console.log(userAllAnswers);
        // console.log(userAllAnswersLanguage);
      }
    );
  }; //ok

  HandleYesNoAnswerChange = (e) => {
    this.setState(
      {
        userYesNoAnswer: e.target.value,
      },
      () => {
        userAllAnswers[this.state.questionIndex] =
          this.state.AllQuestions[this.state.questionIndex].AnsId +
          "!,!" +
          this.state.userYesNoAnswer;
        userAllAnswersLanguage[
          this.state.questionIndex
        ] = this.props.selectedLanguage;
        // console.log(userAllAnswers);
        // console.log(userAllAnswersLanguage);
      }
    );
  }; //ok

  HandleQuestionFillingAnswerChange = (e) => {
    this.setState(
      {
        userFillingAnswer: e.target.value,
      },
      () => {
        userAllAnswers[this.state.questionIndex] =
          this.state.AllQuestions[this.state.questionIndex].AnsId +
          "!,!" +
          this.state.userFillingAnswer;
        userAllAnswersLanguage[
          this.state.questionIndex
        ] = this.props.selectedLanguage;
        // console.log(userAllAnswers);
        // console.log(userAllAnswersLanguage);
      }
    );
  }; //ok

  HandleNextQuestion = () => {
    // let answer = userAllAnswers[this.state.questionIndex].substring(2);
    // console.log(answer);

    if (
      userAllAnswers[this.state.questionIndex].split("!,!")[1] ===
      this.state.AllQuestions[this.state.questionIndex].correctAnswers
    )
      this.setState({
        userScore:
          parseInt(this.state.userScore) +
          parseInt(this.state.AllQuestions[this.state.questionIndex].point),
      });

    this.setState(
      {
        questionIndex: this.state.questionIndex + 1,
        userMultipleChoiceAnswer: "",
        userYesNoAnswer: "",
      },
      () => {
        this.getRandomAnswer(
          this.props.SubModule7QuizQuestion,
          this.props.selectedLanguage
        );
      }
    );
  }; //ok

  HandleFillingNextQuestion = () => {
    document.getElementById("fillingText").value = "";
    let Str =
      this.state.AllQuestions[this.state.questionIndex].AnsId +
      "!,!" +
      this.state.userFillingAnswer.toLowerCase();

    let Arr = this.props.SubModule7QuizQuestionFiltered[
      this.state.questionIndex
    ].correctAnswers;

    let count = 0;
    for (let i = 0; i < Arr.length; i++) {
      if (Str.includes(Arr[i].toLowerCase())) count += 1;
    }

    if (count >= Math.round((Arr.length * 65) / 100)) {
      this.setState({
        userScore:
          parseInt(this.state.userScore) +
          parseInt(this.state.AllQuestions[this.state.questionIndex].point),
      });
    }

    this.setState(
      {
        questionIndex: this.state.questionIndex + 1,
        userFillingAnswer: "",
      },
      () => {
        this.getRandomAnswer(
          this.props.SubModule7QuizQuestion,
          this.props.selectedLanguage
        );
      }
    );
  }; //ok

  handleBlankAnswerInputChange = (e, i) => {
    userBlankAnswers[i] = e.target.value;

    // console.log("userBlankAnswers[i]", userBlankAnswers[i]);
    this.setState(
      {
        userBlankAnswer: userBlankAnswers, //.join(" , "),
      },
      () => {
        userAllAnswers[this.state.questionIndex] =
          this.state.AllQuestions[this.state.questionIndex].AnsId +
          "!,!" +
          this.state.userBlankAnswer;
        userAllAnswersLanguage[
          this.state.questionIndex
        ] = this.props.selectedLanguage;

        // console.log("userAllAnswers", userAllAnswers);
        // console.log(userAllAnswersLanguage);
      }
    );
  }; //ok

  HandleBlankNextQuestion = () => {
    document.getElementById("blankAnswer").value = "";

    let point = this.props.SubModule7QuizQuestionFiltered[
      this.state.questionIndex
    ].point;
    let ansArr = this.props.SubModule7QuizQuestionFiltered[
      this.state.questionIndex
    ].correctAnswers;
    let eachBlankPoint = parseInt(point) / parseInt(ansArr.length);

    let count = 0;
    for (let m = 0; m < ansArr.length; m++) {
      // console.log("userBlankAnswers", userBlankAnswers[m].toLowerCase());
      // console.log("ansArr", ansArr[m].toLowerCase());
      if (userBlankAnswers[m] === undefined) userBlankAnswers[m] = "";
      else if (userBlankAnswers[m].toLowerCase() === ansArr[m].toLowerCase()) {
        count += 1;
        // console.log(count);
      }
    }

    this.setState(
      {
        userScore:
          parseInt(this.state.userScore) +
          parseInt(count) * parseInt(eachBlankPoint),
      }
      // () => console.log(this.state.userScore)
    );

    userBlankAnswers = [];

    this.setState(
      {
        questionIndex: this.state.questionIndex + 1,
        userBlankAnswer: [],
      },
      () => {
        // userBlankAnswers = [];
        this.getRandomAnswer(
          this.props.SubModule7QuizQuestion,
          this.props.selectedLanguage
        );
      }
    );
  }; //ok

  HandlePrevQuestion = () => {
    this.setState(
      {
        questionIndex: this.state.questionIndex - 1,
        userAnswer: "",
      },
      () => {
        this.getRandomAnswer(
          this.props.SubModule7QuizQuestion,
          this.props.selectedLanguage
        );
      }
    );
  }; //ok

  HandleQuestionResult = () => {
    let sumPoint = 0;
    for (let m = 0; m < this.props.SubModule7QuizQuestionFiltered.length; m++) {
      sumPoint += parseInt(this.props.SubModule7QuizQuestionFiltered[m].point);
      // userAllAnswers[m] = userAllAnswers[m].substring(2);
    }

    if (
      this.props.SubModule7QuizQuestionFiltered[this.state.questionIndex]
        .questionType === "MultipleChoice" ||
      this.props.SubModule7QuizQuestionFiltered[this.state.questionIndex]
        .questionType === "Boolean"
    ) {
      if (
        userAllAnswers[this.state.questionIndex].split("!,!")[1] ===
        this.props.SubModule7QuizQuestionFiltered[this.state.questionIndex]
          .correctAnswers
      )
        this.setState(
          {
            userScore:
              parseInt(this.state.userScore) +
              parseInt(
                this.props.SubModule7QuizQuestionFiltered[
                  this.state.questionIndex
                ].point
              ),
          },
          () => {
            // console.log("userScore", this.state.userScore);
            this.props.SetQuizScore(
              parseInt(this.state.userScore),
              parseInt(sumPoint)
            );
            this.props.SetUserQuizAnswer(
              userAllAnswers,
              userAllAnswersLanguage
            );
          }
        );
    } else if (
      this.props.SubModule7QuizQuestionFiltered[this.state.questionIndex]
        .questionType === "Filling"
    ) {
      let Str = this.state.userFillingAnswer.toLowerCase();

      let Arr = this.props.SubModule7QuizQuestionFiltered[
        this.state.questionIndex
      ].correctAnswers;

      let count = 0;
      for (let i = 0; i < Arr.length; i++) {
        if (Str.includes(Arr[i].toLowerCase())) count += 1;
      }

      if (count >= Math.round((Arr.length * 65) / 100)) {
        this.setState(
          {
            userScore:
              parseInt(this.state.userScore) +
              parseInt(
                this.props.SubModule7QuizQuestionFiltered[
                  this.state.questionIndex
                ].point
              ),
          },
          () => {
            this.props.SetQuizScore(
              parseInt(this.state.userScore),
              parseInt(sumPoint)
            );
            this.props.SetUserQuizAnswer(
              userAllAnswers,
              userAllAnswersLanguage
            );
          }
        );
      }
    } else if (
      this.props.SubModule7QuizQuestionFiltered[this.state.questionIndex]
        .questionType === "Blank"
    ) {
      let point = this.props.SubModule7QuizQuestionFiltered[
        this.state.questionIndex
      ].point;
      let ansArr = this.props.SubModule7QuizQuestionFiltered[
        this.state.questionIndex
      ].correctAnswers;
      let eachBlankPoint = parseInt(point) / parseInt(ansArr.length);

      let count = 0;
      for (let m = 0; m < ansArr.length; m++) {
        if (userBlankAnswers[m] === undefined) userBlankAnswers[m] = "";
        else if (
          userBlankAnswers[m].toLowerCase() === ansArr[m].toLowerCase()
        ) {
          count += 1;
        }
      }
      this.setState(
        {
          userScore:
            parseInt(this.state.userScore) +
            parseInt(count) * parseInt(eachBlankPoint),
        },
        () => {
          this.props.SetQuizScore(
            parseInt(this.state.userScore),
            parseInt(sumPoint)
          );
          this.props.SetUserQuizAnswer(userAllAnswers, userAllAnswersLanguage);
        }
      );
    }

    this.props.SetQuizScore(parseInt(this.state.userScore), parseInt(sumPoint));
    this.props.SetUserQuizAnswer(userAllAnswers, userAllAnswersLanguage);

    this.setState({
      showResult: true,
      compareAnswer: false,
      takeQuiz: false,
      questionIndex: 0,
    });
  }; //ok

  HandleRetakeQuiz = () => {
    userAllAnswers = [];
    userBlankAnswers = [];

    this.setState(
      {
        SubModule7QuizQuestion: [],
        randomAnswers: [],
        userAnswer: "",
        questionIndex: 0,
        // questionLanguage: "",
        correctAnswerCount: 0,
        showResult: false,
        takeQuiz: true,
        compareAnswer: false,
        questionCount: this.props.SubModule7QuizQuestion.length - 1,
        //
        userYesNoAnswer: "",
        userMultipleChoiceAnswer: "",
        userFillingAnswer: "",
        userBlankAnswer: [],
        userAllAnswers: [],
        userScore: 0,
      },
      () =>
        this.getRandomAnswer(
          //this.props.SubModule7QuizQuestion[this.state.questionIndex]
          this.props.SubModule7QuizQuestion,
          this.props.selectedLanguage
        )
    );

    // this.getRandomAnswer(
    //   // this.props.SubModule7QuizQuestion[this.state.questionIndex]
    //   this.props.SubModule7QuizQuestion,
    //   this.props.selectedLanguage
    // );
  }; //ok

  HandleCompareAnswer = () => {
    this.setState({
      showResult: false,
      takeQuiz: false,
      compareAnswer: true,
    });
  }; //ok

  HandleCompareAnswerNextQuestion = () => {
    this.setState({
      questionIndex: this.state.questionIndex + 1,
    });
  }; //ok

  HandleCompareAnswerPrevQuestion = () => {
    this.setState({
      questionIndex: this.state.questionIndex - 1,
    });
  }; //ok

  HandleCompareAnswerQuestionResult = () => {
    this.setState({
      showResult: true,
      takeQuiz: false,
      compareAnswer: false,
      questionIndex: 0,
    });
  }; //ok

  HandleReadingCaseStudy = (List, lng) => {
    let NewFilter = [];
    // console.log(List);
    for (let i = 0; i < List.length; i++) {
      NewFilter = [
        ...NewFilter,
        {
          moduleName: List[i].moduleName,
          subModuleType: List[i].subModuleType,
          taskUrl: List[i].taskUrl,
          urlFormat: List[i].urlFormat,
          // title: List[i].subLevelTranslations[0].title,
          title: List[i].subLevelTranslations.filter(
            (ans) =>
              ans.language ===
              localStorage.getItem("lng").replace(/^\w/, (c) => c.toUpperCase()) //lng
          )[0].title,
        },
      ];
    }
    if (this.props.UserStatus.currentSubModule === "sub4")
      this.props.SubModule4ReadingSectionFiltered(NewFilter);
    if (this.props.UserStatus.currentSubModule === "sub5")
      this.props.SubModule5CaseStudySectionFiltered(NewFilter);
  }; //ok

  render() {
    const {
      // userActiveModule,
      // userActiveSubModule,
      SubModule1IntroductionVideo,
      SubModule2CourseVideo,
      SubModule6ExpertVideo,
      SubModule7QuizQuestionFiltered,
      SubModule7QuizQuestion,
      //
      userQuizScore,
      QuizScore,
      UserQuizAllAnswers,
      selectedLanguage,
      UserQuizAllAnswersLanguage,
      // EducationWithTasks,
      SubModule4ReadingFiltered,
      SubModule5CaseStudyFiltered,
      UserInfo,
      UserStatus,
      SubModule3Interactive,
      SubModule3InteractiveQuestion,
      SetUserPassed,
      passed,
    } = this.props;

    const { randomAnswers } = this.state;

    return (
      <div className='main-bg-color'>
        <ModuleNavBar
          userActiveModule={UserStatus.currentModule}
          // UserStatus={UserStatus}
        />

        {UserStatus.isPreTestDone === false && (
          <PreTest UserStatus={UserStatus} UserInfo={UserInfo} />
        )}

        {
          // (
          // (UserStatus.currentModule === "Module1" &&
          // UserStatus.currentSubModule !== "sub1") ||
          // UserStatus.currentModule !== "Module1") &&

          UserStatus.isPreTestDone === true && (
            <Container>
              <Row className='w-100 pt-5 pb-5'>
                {/* Module panel */}
                <Col lg={2} className='d-flex justify-content-end'>
                  <ModuleStagesName
                    userActiveModule={UserStatus.currentModule}
                    handleOnClickModule={this.handleOnClickModule}
                  />
                </Col>

                <Col className='d-lg-none d-md-block d-flex justify-content-start mb-4'>
                  <ModuleStagesNameSmall
                    userActiveModule={UserStatus.currentModule}
                    handleOnClickModule={this.handleOnClickModule}
                  />
                </Col>

                <Col lg={10}>
                  <div className='d-flex justify-content-start'>
                    {/* SubModule panel */}
                    <SubModuleBtn
                      userActiveSubModule={UserStatus.currentSubModule}
                      userActiveModule={UserStatus.currentModule}
                      onClick={this.handleOnClickSubModule}
                      userActiveSubModuleNum={this.state.userActiveSubModuleNum}
                    />
                  </div>

                  {/* SubModule Note Section */}
                  <SubModuleNote
                    userActiveSubModule={UserStatus.currentSubModule}
                    showResult={this.state.showResult}
                    takeQuiz={this.state.takeQuiz}
                    compareAnswer={this.state.compareAnswer}
                    isEasyModeActive={UserInfo.isEasyModeActive}
                  />

                  {/* {UserStatus.currentModule === "Module6" &&
                    UserInfo.isFinalTestDone === null && (
                      <FinalTest UserStatus={UserStatus} UserInfo={UserInfo} />
                    )} */}

                  {/* SubModule Section */}
                  <SubModule
                    userActiveModule={UserStatus.currentModule}
                    userActiveSubModule={UserStatus.currentSubModule}
                    SubModule1IntroductionVideo={SubModule1IntroductionVideo}
                    SubModule2CourseVideo={SubModule2CourseVideo}
                    SubModule6Detail={SubModule6ExpertVideo}
                    SubModule7QuizQuestionText={
                      SubModule7QuizQuestionFiltered[this.state.questionIndex]
                    }
                    questionIndex={this.state.questionIndex}
                    questionCount={this.state.questionCount}
                    userAnswer={this.state.userAnswer}
                    userFillingAnswer={this.state.userFillingAnswer}
                    userBlankAnswer={this.state.userBlankAnswer}
                    userYesNoAnswer={this.state.userYesNoAnswer}
                    userMultipleChoiceAnswer={
                      this.state.userMultipleChoiceAnswer
                    }
                    HandleYesNoAnswerChange={this.HandleYesNoAnswerChange}
                    HandleMultipleChoiceAnswerChange={
                      this.HandleMultipleChoiceAnswerChange
                    }
                    HandleBlankNextQuestion={this.HandleBlankNextQuestion}
                    showResult={this.state.showResult}
                    correctAnswerCount={this.state.correctAnswerCount}
                    randomAnswers={randomAnswers}
                    AllQuestions={SubModule7QuizQuestionFiltered}
                    SubModule7QuizQuestion={SubModule7QuizQuestion}
                    takeQuiz={this.state.takeQuiz}
                    onClick={this.handleClickSubModuleNext}
                    ExpertIndex={this.state.ExpertIndex}
                    handleClickExpertVideo={this.handleClickExpertVideo}
                    onClickNextModule={this.handleClickModuleNext}
                    getRandomAnswer={this.getRandomAnswer}
                    HandleQuestionAnswerChange={this.HandleQuestionAnswerChange}
                    HandleQuestionFillingAnswerChange={
                      this.HandleQuestionFillingAnswerChange
                    }
                    HandleNextQuestion={this.HandleNextQuestion}
                    HandleFillingNextQuestion={this.HandleFillingNextQuestion}
                    handleBlankAnswerInputChange={
                      this.handleBlankAnswerInputChange
                    }
                    HandlePrevQuestion={this.HandlePrevQuestion}
                    HandleQuestionResult={this.HandleQuestionResult}
                    HandleRetakeQuiz={this.HandleRetakeQuiz}
                    //
                    selectedLanguage={selectedLanguage}
                    userQuizScore={userQuizScore}
                    QuizScore={QuizScore}
                    UserQuizAllAnswers={UserQuizAllAnswers}
                    UserQuizAllAnswersLanguage={UserQuizAllAnswersLanguage}
                    HandleCompareAnswer={this.HandleCompareAnswer}
                    CompareAnswer={this.state.compareAnswer}
                    HandleCompareAnswerNextQuestion={
                      this.HandleCompareAnswerNextQuestion
                    }
                    HandleCompareAnswerPrevQuestion={
                      this.HandleCompareAnswerPrevQuestion
                    }
                    HandleCompareAnswerQuestionResult={
                      this.HandleCompareAnswerQuestionResult
                    }
                    isEasyModeActive={UserInfo.isEasyModeActive}
                    SubModule4ReadingFiltered={SubModule4ReadingFiltered}
                    SubModule5CaseStudyFiltered={SubModule5CaseStudyFiltered}
                    SubModule3Interactive={SubModule3Interactive}
                    SubModule3InteractiveQuestion={
                      SubModule3InteractiveQuestion
                    }
                    UserInfo={UserInfo}
                    UserStatus={UserStatus}
                    passed={passed}
                    SetUserPassed={SetUserPassed}
                  />
                </Col>
              </Row>
            </Container>
          )
        }
        <Footer userActiveModule={UserStatus.currentModule} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // userActiveModule: state.userActiveModule,
  // userActiveSubModule: state.userActiveSubModule,
  //
  SubModule1IntroductionVideo: state.SubModule1IntroductionVideo,
  SubModule2CourseVideo: state.SubModule2CourseVideo,
  SubModule6ExpertVideo: state.SubModule6ExpertVideo,
  //
  SubModule7QuizQuestion: state.SubModule7QuizQuestion,
  SubModule7QuizQuestionFiltered: state.SubModule7QuizQuestionFiltered,
  //
  selectedLanguage: state.selectedLanguage,

  userQuizScore: state.userQuizScore,
  QuizScore: state.QuizScore,
  UserQuizAllAnswers: state.UserQuizAllAnswers,
  UserQuizAllAnswersLanguage: state.UserQuizAllAnswersLanguage,
  //
  EducationWithTasks: state.EducationWithTasks,
  //
  SubModule4Reading: state.SubModule4Reading,
  SubModule4ReadingFiltered: state.SubModule4ReadingFiltered,
  SubModule5CaseStudy: state.SubModule5CaseStudy,
  SubModule5CaseStudyFiltered: state.SubModule5CaseStudyFiltered,
  //
  passed: state.passed,
  UserInfo: state.UserInfo,
  UserStatus: state.UserStatus,
  //
  SubModule3Interactive: state.SubModule3Interactive,
  SubModule3InteractiveQuestion: state.SubModule3InteractiveQuestion,
});

export default connect(mapStateToProps, {
  SelectedSubModule,
  UserActiveModuleSubModule,
  SubModule1Quiz,
  SubModule1QuizFiltered,
  SetQuizScore,
  SetUserQuizAnswer,
  SubModule4ReadingSection,
  SubModule4ReadingSectionFiltered,
  SubModule5CaseStudySection,
  SubModule5CaseStudySectionFiltered,
  SetEmptyRedux,
  SubModule6ExpertVideoSection,
  SubModule1IntroductionVideoSection,
  SubModule2CourseVideoSection,
  SetUserInfo,
  SubModule3InteractiveSection,
  SetUserPassed,
  SelectedLanguage,
})(withRouter(ModuleHome));
