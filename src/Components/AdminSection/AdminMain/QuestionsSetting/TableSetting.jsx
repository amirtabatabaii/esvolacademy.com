import React, { Component } from "react";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { ApiUrlMain2 } from "../../../Utility/ApiUrl";
import { TextField, Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { openNotificationWithIcon } from "../../Utility/Error";

class TableSetting extends Component {
  state = {
    EditVisible: false,
    QuestionSetting: {},
    questionQuantities: {},
    UpdateQuestionSetting: {
      moduleName: this.props.adminActiveModule,
      minQuizScore: 0,
      questionQuantities: {
        MultipleChoice: 0,
        Filling: 0,
        Boolean: 0,
        Blank: 0,
        Interactive: 0,
      },
    },
  };

  async componentDidMount() {
    await axios
      .get(ApiUrlMain2 + `/api/modules/${this.props.adminActiveModule}`)
      .then((Response) => {
        this.setState({
          QuestionSetting: Response.data,
          questionQuantities: Response.data.questionQuantities,
          UpdateQuestionSetting: {
            minQuizScore: Response.data.minQuizScore,
            moduleName: Response.data.moduleName,
            questionQuantities: Response.data.questionQuantities,
          },
        });
      });
  }

  showEditSection = () => {
    this.setState({ EditVisible: true });
  };

  handleSettingChange = (e) => {
    if (e.target.name === "MultipleChoice")
      this.setState({
        UpdateQuestionSetting: {
          moduleName: this.props.adminActiveModule,
          minQuizScore: this.state.UpdateQuestionSetting.minQuizScore,
          questionQuantities: {
            MultipleChoice: e.target.value,
            Filling: this.state.UpdateQuestionSetting.questionQuantities
              .Filling,
            Boolean: this.state.UpdateQuestionSetting.questionQuantities
              .Boolean,
            Blank: this.state.UpdateQuestionSetting.questionQuantities.Blank,
            Interactive: this.state.UpdateQuestionSetting.questionQuantities
              .Interactive,
          },
        },
      });

    if (e.target.name === "Filling")
      this.setState({
        UpdateQuestionSetting: {
          moduleName: this.props.adminActiveModule,
          minQuizScore: this.state.UpdateQuestionSetting.minQuizScore,
          questionQuantities: {
            MultipleChoice: this.state.UpdateQuestionSetting.questionQuantities
              .MultipleChoice,
            Filling: e.target.value,
            Boolean: this.state.UpdateQuestionSetting.questionQuantities
              .Boolean,
            Blank: this.state.UpdateQuestionSetting.questionQuantities.Blank,
            Interactive: this.state.UpdateQuestionSetting.questionQuantities
              .Interactive,
          },
        },
      });

    if (e.target.name === "Boolean")
      this.setState({
        UpdateQuestionSetting: {
          moduleName: this.props.adminActiveModule,
          minQuizScore: this.state.UpdateQuestionSetting.minQuizScore,
          questionQuantities: {
            MultipleChoice: this.state.UpdateQuestionSetting.questionQuantities
              .MultipleChoice,
            Filling: this.state.UpdateQuestionSetting.questionQuantities
              .Filling,
            Boolean: e.target.value,
            Blank: this.state.UpdateQuestionSetting.questionQuantities.Blank,
            Interactive: this.state.UpdateQuestionSetting.questionQuantities
              .Interactive,
          },
        },
      });

    if (e.target.name === "Blank")
      this.setState({
        UpdateQuestionSetting: {
          moduleName: this.props.adminActiveModule,
          minQuizScore: this.state.UpdateQuestionSetting.minQuizScore,
          questionQuantities: {
            MultipleChoice: this.state.UpdateQuestionSetting.questionQuantities
              .MultipleChoice,
            Filling: this.state.UpdateQuestionSetting.questionQuantities
              .Filling,
            Boolean: this.state.UpdateQuestionSetting.questionQuantities
              .Boolean,
            Blank: e.target.value,
            Interactive: this.state.UpdateQuestionSetting.questionQuantities
              .Interactive,
          },
        },
      });

    if (e.target.name === "Interactive")
      this.setState({
        UpdateQuestionSetting: {
          moduleName: this.props.adminActiveModule,
          minQuizScore: this.state.UpdateQuestionSetting.minQuizScore,
          questionQuantities: {
            MultipleChoice: this.state.UpdateQuestionSetting.questionQuantities
              .MultipleChoice,
            Filling: this.state.UpdateQuestionSetting.questionQuantities
              .Filling,
            Boolean: this.state.UpdateQuestionSetting.questionQuantities
              .Boolean,
            Blank: this.state.UpdateQuestionSetting.questionQuantities.Blank,
            Interactive: e.target.value,
          },
        },
      });

    if (e.target.name === "minQuizScore")
      this.setState({
        UpdateQuestionSetting: {
          moduleName: this.props.adminActiveModule,
          minQuizScore: e.target.value,
          questionQuantities: {
            MultipleChoice: this.state.UpdateQuestionSetting.questionQuantities
              .MultipleChoice,
            Filling: this.state.UpdateQuestionSetting.questionQuantities
              .Filling,
            Boolean: this.state.UpdateQuestionSetting.questionQuantities
              .Boolean,
            Blank: this.state.UpdateQuestionSetting.questionQuantities.Blank,
            Interactive: this.state.UpdateQuestionSetting.questionQuantities
              .Interactive,
          },
        },
      });
  };

  handleSubmit = () => {
    axios
      .put(
        ApiUrlMain2 + `/api/modules/${this.props.adminActiveModule}`,
        {
          moduleName: this.state.UpdateQuestionSetting.moduleName,
          minQuizScore: this.state.UpdateQuestionSetting.minQuizScore,
          questionQuantities: {
            MultipleChoice: this.state.UpdateQuestionSetting.questionQuantities
              .MultipleChoice,
            Filling: this.state.UpdateQuestionSetting.questionQuantities
              .Filling,
            Boolean: this.state.UpdateQuestionSetting.questionQuantities
              .Boolean,
            Blank: this.state.UpdateQuestionSetting.questionQuantities.Blank,
            Interactive: this.state.UpdateQuestionSetting.questionQuantities
              .Interactive,
          },
        },
        // (axios.defaults.headers.common[
        //   "Authorization"
        // ] = this.state.Authorization),
        { "Content-type": "application/json; charset=iso-8859-1" }
      )
      .then((Response) => {
        // console.log("Response --->", );
        if (Response.status === 200) {
          openNotificationWithIcon("success", "Setting", "setting", 10);
          this.setState({ EditVisible: false });
          // document.getElementById("InsertForm").reset();
        }
      });
  };

  render() {
    const { QuestionSetting, questionQuantities } = this.state;

    return (
      <>
        <div className='mt-4'>
          <p>
            View / Set Count of each question type in Quiz Section do you
            have...
          </p>

          <Table responsive striped bordered hover>
            <thead>
              <tr>
                {/* <th>#</th> */}
                <th>Multiple Choice</th>
                {/* <th>Filling</th>
                <th>Boolean</th>
                <th>Blank</th> */}
                <th>Interactive</th>
                <th>minQuizScore</th>
                {!this.state.EditVisible && <th>Update</th>}
              </tr>
            </thead>
            <tbody>
              <tr key={QuestionSetting.id}>
                <td>
                  <TextField
                    style={{ width: "70px" }}
                    variant='outlined'
                    name='MultipleChoice'
                    type='number'
                    required
                    defaultValue={questionQuantities.MultipleChoice}
                    disabled={!this.state.EditVisible}
                    onChange={(e) => this.handleSettingChange(e)}
                  />
                </td>
                {/* <td>
                  <TextField
                    style={{ width: "70px" }}
                    variant='outlined'
                    name='Filling'
                    type='number'
                    required
                    defaultValue={questionQuantities.Filling}
                    disabled={!this.state.EditVisible}
                    onChange={(e) => this.handleSettingChange(e)}
                  />
                </td>
                <td>
                  <TextField
                    style={{ width: "70px" }}
                    variant='outlined'
                    name='Boolean'
                    type='number'
                    required
                    defaultValue={questionQuantities.Boolean}
                    disabled={!this.state.EditVisible}
                    onChange={(e) => this.handleSettingChange(e)}
                  />
                </td>
                <td>
                  <TextField
                    style={{ width: "70px" }}
                    variant='outlined'
                    name='Blank'
                    type='number'
                    required
                    defaultValue={questionQuantities.Blank}
                    disabled={!this.state.EditVisible}
                    onChange={(e) => this.handleSettingChange(e)}
                  />
                </td> */}
                <td>
                  <TextField
                    style={{ width: "70px" }}
                    variant='outlined'
                    name='Interactive'
                    type='number'
                    required
                    defaultValue={questionQuantities.Interactive}
                    disabled={!this.state.EditVisible}
                    onChange={(e) => this.handleSettingChange(e)}
                  />
                </td>
                <td>
                  <TextField
                    style={{ width: "70px" }}
                    variant='outlined'
                    name='minQuizScore'
                    type='number'
                    required
                    defaultValue={QuestionSetting.minQuizScore}
                    disabled={!this.state.EditVisible}
                    onChange={(e) => this.handleSettingChange(e)}
                  />
                </td>
                {!this.state.EditVisible && (
                  <td>
                    <Link onClick={() => this.showEditSection()}>
                      <FontAwesomeIcon
                        className='text-primary ml-2'
                        icon={faEdit}
                        transform='grow-15'
                        fixedWidth
                      />
                    </Link>
                  </td>
                )}
              </tr>
            </tbody>
          </Table>
        </div>

        {this.state.EditVisible && (
          <Button
            variant='contained'
            color='primary'
            type='submit'
            className='mt-2 p-3 w-100'
            size='large'
            startIcon={<SaveIcon />}
            onClick={() => this.handleSubmit()}
          >
            Update Question Setting
          </Button>
        )}

        {/* {this.state.EditVisible && (
          <Collapse className='mb-3' defaultActiveKey={["1"]}>
            <Panel header='Edit Question Setting Section' key='1'>
              <QstSetting
                adminActiveSubModule={this.props.adminActiveSubModule}
                adminActiveModule={this.props.adminActiveModule}
                questionQuantities={questionQuantities}
                QuestionSetting={QuestionSetting}
              />
            </Panel>
          </Collapse>
        )} */}
      </>
    );
  }
}

export default TableSetting;
