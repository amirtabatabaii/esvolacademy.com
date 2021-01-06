// import React, { Component } from "react";
// import InsertVideo from "../../Utility/InsertVideo";
// import UploadVideo from "../../Utility/UploadVideo";
// import { Form } from "react-bootstrap";
// import {
//   TextField,
//   MenuItem,
//   Select,
//   InputLabel,
//   FormControl,
//   Button,
// } from "@material-ui/core";
// import SaveIcon from "@material-ui/icons/Save";
// import axios from "axios";
// import { ApiUrlMain2 } from "../../../Utility/ApiUrl";
// import { openNotificationWithIcon } from "../../Utility/Error";

// class ExpertVideo extends Component {
//   state = {
//     url: "",
//     completionRatio: "",
//     videoType: "LinkVideo",
//     uploaded: false,
//     language: "",
//     percentage: 0,
//     fileName: "",
//   };

//   // https://www.cluemediator.com/add-or-remove-input-fields-dynamically-with-reactjs

//   handleSubmitLink = (event) => {
//     event.preventDefault();
//     axios
//       .post(
//         ApiUrlMain2 + `/api/courses/videos`,
//         {
//           courseName: this.props.adminActiveModule,
//           url: this.state.url,
//           completionRatio: this.state.completionRatio,
//           type: "ExpertVideo", //this.props.adminActiveSubModule,
//         },
//         {
//           "Access-Control-Allow-Origin": "*",
//         }
//       )
//       .then((res) => {
//         console.log("res ===> ", res);
//       });
//   };

//   handleSubmitUpload = (event) => {
//     if (
//       parseInt(parseInt(event.target.files[0].size) / parseInt(1024)) >
//       370000000
//     ) {
//       openNotificationWithIcon("error", "SizeError", "Size Err", 5);
//     } else {
//       this.setState({ uploaded: false });

//       const formData = new FormData();
//       for (let i = 0; i < event.target.files.length; i++) {
//         formData.append("file", event.target.files[i]);
//       }
//       axios
//         .post(
//           `http://31.210.91.44:8080/fileup/saveFile?module=${
//             this.props.adminActiveModule
//           }&subModule=${this.state.language + "ExpertVideo"}`,
//           formData,

//           {
//             headers: {
//               "Access-Control-Allow-Origin": "*",
//             },
//             onUploadProgress: (progressEvent) => {
//               this.setState({
//                 percentage: parseInt(
//                   Math.round((progressEvent.loaded * 100) / progressEvent.total)
//                 ),
//               });
//             },
//           }
//         )
//         .then((res) => {
//           //console.log("res ====> ", res);
//           if (res.status === 200) {
//             this.setState({
//               uploaded: true,
//               url: res.data.filePath,
//               fileName: res.data.fileName,
//             });
//           } else {
//             this.setState({ uploaded: false });
//           }
//         });
//     }
//   };

//   handleChange = (event) => {
//     if (event.target.name === "videoType") {
//       if (this.state.videoType !== event.target.name) {
//         this.setState({
//           url: "",
//           completionRatio: "",
//           videoType: event.target.value,
//           uploaded: false,
//           language: "",
//           percentage: 0,
//           fileName: "",
//         });
//       }
//     } else this.setState({ [event.target.name]: event.target.value });
//   };

//   render() {
//     return (
//       <>
//         <FormControl
//           variant='outlined'
//           style={{ width: "15%" }}
//           className='ml-1 mr-1'
//         >
//           <InputLabel id='forVideoType'>Video Type</InputLabel>
//           <Select
//             className='bg-light text-danger font-weight-bold'
//             labelId='forVideoType'
//             // value={x.language}
//             label='Type Of Video'
//             name='videoType'
//             required
//             error={false}
//             defaultValue={"LinkVideo"}
//             onChange={(e) => this.handleChange(e)}
//           >
//             <MenuItem value={"LinkVideo"}>Insert Video Link</MenuItem>
//             <MenuItem value={"UploadVideo"}>Upload Video</MenuItem>
//           </Select>
//         </FormControl>

//         {this.state.videoType === "LinkVideo" && (
//           <Form className='text-left' onSubmit={this.handleSubmitLink}>
//             <InsertVideo
//               handleChange={this.handleChange}
//               videoUrlName='url'
//               ratioName='completionRatio'
//               language='language'
//             />

//             <div className='m-5'>
//               <Button
//                 variant='contained'
//                 color='primary'
//                 type='submit'
//                 className='p-3 w-100'
//                 size='large'
//                 startIcon={<SaveIcon />}
//               >
//                 Save Video
//               </Button>
//             </div>
//           </Form>
//         )}

//         {this.state.videoType === "UploadVideo" && (
//           <Form className='text-left' onSubmit={this.handleSubmitLink}>
//             <UploadVideo
//               adminActiveSubModule={this.props.adminActiveSubModule}
//               adminActiveModule={this.props.adminActiveModule}
//               ratioName='completionRatio'
//               language='language'
//               uploaded={this.state.uploaded}
//               handleChange={this.handleChange}
//               handleSubmitUpload={this.handleSubmitUpload}
//               percentage={this.state.percentage}
//               url={this.state.url}
//               fileName={this.state.fileName}
//             />

//             <div className='m-5'>
//               <Button
//                 variant='contained'
//                 color='primary'
//                 type='submit'
//                 className='p-3 w-100'
//                 size='large'
//                 startIcon={<SaveIcon />}
//               >
//                 Save Video
//               </Button>
//             </div>
//           </Form>
//         )}
//       </>
//     );
//   }
// }
// export default ExpertVideo;
