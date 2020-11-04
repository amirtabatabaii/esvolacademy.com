// import React, { useState } from "react";
// import { TextField, Button } from "@material-ui/core";
// import SaveIcon from "@material-ui/icons/Save";
// import { Form } from "react-bootstrap";
// import axios from "axios";
// import { openNotificationWithIcon } from "../../Utility/Error";
// import { ApiUrlMain2 } from "../../../Utility/ApiUrl";

// function QstSetting(props) {
//   const [QuestionSetting, setQuestionSetting] = useState({
//     moduleName: "",
//     minQuizScore: 0,
//     // questionQuantities: {
//     MultipleChoice: 0,
//     Filling: 0,
//     Boolean: 0,
//     Blank: 0,
//     Interactive: 0,
//     // },
//   });

//   const handleSettingChange = (e) => {
//     if (e.target.name === "MultipleChoice")
//       setQuestionSetting({
//         ...QuestionSetting,
//         MultipleChoice: e.target.value,
//       });

//     if (e.target.name === "Filling")
//       setQuestionSetting({
//         ...QuestionSetting,
//         Filling: e.target.value,
//       });

//     if (e.target.name === "Boolean")
//       setQuestionSetting({
//         ...QuestionSetting,
//         Boolean: e.target.value,
//       });

//     if (e.target.name === "Blank")
//       setQuestionSetting({
//         ...QuestionSetting,
//         Blank: e.target.value,
//       });

//     if (e.target.name === "Interactive")
//       setQuestionSetting({
//         ...QuestionSetting,
//         Interactive: e.target.value,
//       });

//     if (e.target.name === "minQuizScore")
//       setQuestionSetting({
//         ...QuestionSetting,
//         minQuizScore: e.target.value,
//       });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     axios
//       .put(
//         ApiUrlMain2 + "/api/modules",
//         {
//           moduleName: props.adminActiveModule,
//           minQuizScore: QuestionSetting.minQuizScore,
//           questionQuantities: {
//             MultipleChoice: QuestionSetting.MultipleChoice,
//             Filling: QuestionSetting.Filling,
//             Boolean: QuestionSetting.Boolean,
//             Blank: QuestionSetting.Blank,
//             Interactive: QuestionSetting.Interactive,
//           },
//         },
//         // (axios.defaults.headers.common[
//         //   "Authorization"
//         // ] = this.state.Authorization),
//         { "Content-type": "application/json; charset=iso-8859-1" }
//       )
//       .then((res) => {
//         console.log("Success res ========>", res);
//         //openNotificationWithIcon("success", "Blank", "Blank", 10);
//       });

//     // document.getElementById("InsertForm").reset();
//   };

//   return (
//     <div>
//       <Form id='InsertForm' className='text-left' onSubmit={handleSubmit}>
//         <div>
//           <TextField
//             className='m-2'
//             variant='outlined'
//             label={"MultipleChoice Count"}
//             name='MultipleChoice'
//             type='number'
//             required
//             value={props.questionQuantities.MultipleChoice}
//             onChange={(e) => handleSettingChange(e)}
//           />

//           <TextField
//             className='m-2'
//             variant='outlined'
//             label={"Filling Questions Count"}
//             name='Filling'
//             type='number'
//             required
//             onChange={(e) => handleSettingChange(e)}
//           />

//           <TextField
//             className='m-2'
//             variant='outlined'
//             label={"Boolean Questions Count"}
//             name='Boolean'
//             type='number'
//             required
//             onChange={(e) => handleSettingChange(e)}
//           />

//           <TextField
//             className='m-2'
//             variant='outlined'
//             label={"Blank Questions Count"}
//             name='Blank'
//             type='number'
//             required
//             onChange={(e) => handleSettingChange(e)}
//           />

//           <TextField
//             className='m-2'
//             variant='outlined'
//             label={"Interactive Task Count"}
//             name='Interactive'
//             type='number'
//             required
//             onChange={(e) => handleSettingChange(e)}
//           />

//           <TextField
//             className='m-2'
//             variant='outlined'
//             label={"Minimum Quiz Score"}
//             name='minQuizScore'
//             type='number'
//             required
//             onChange={(e) => handleSettingChange(e)}
//           />
//           {/* <label className='p-3 font-weight-bold text-center'> % </label> */}

//           <Button
//             variant='contained'
//             color='primary'
//             type='submit'
//             className='mt-5 p-3 w-100'
//             size='large'
//             startIcon={<SaveIcon />}
//           >
//             Save Question Setting
//           </Button>
//         </div>
//       </Form>
//     </div>
//   );
// }

// export default QstSetting;
