import React, { Component } from "react";
import { Divider, Collapse } from "antd";
import { ApiUrlMainVideo, ApiUrlMain2 } from "../../../Utility/ApiUrl";
import axios from "axios";
import { openNotificationWithIcon } from "../../Utility/Error";

import InteractiveToolAddItem from "./InteractiveToolAddItem";
import TableInteractiveTool from "./TableInteractiveTool";

const { Panel } = Collapse;

class InteractiveMain extends Component {
  state = { InteractiveList: [] };

  async componentDidMount() {
    this.setState({
      InteractiveList: [],
    });

    await axios
      .get(
        ApiUrlMain2 +
          `/users/${"YYzyRXNwRpPCL3U"}/questions/modules/${
            this.props.adminActiveModule
          }`,
        {
          headers: {
            Authorization: localStorage.getItem("UserInfo"),
          },
        }
      )
      .then((Response) => {
        // console.log(Response.data.userAnswers);
        this.setState({
          InteractiveList: Response.data.userAnswers.filter(
            (qst) => qst.question.type === "Interactive"
          ),
        });

        // const QstArray2 = QstArray.filter(
        //   (qst) =>
        //     qst.question.questionDictionaries[0].language ===
        //     this.props.selectedLanguage
        //   //"Tr"
        // );
        // console.log(QstArray2);
      });
  }

  render() {
    return (
      <div>
        <Collapse className='mb-3'>
          <Panel header='Add New InteractiveTool Section' key='1'>
            <InteractiveToolAddItem
              adminActiveSubModule={this.props.adminActiveSubModule}
              adminActiveModule={this.props.adminActiveModule}
            />
          </Panel>
        </Collapse>

        <Divider className='bg-info' />

        <h5>InteractiveTool List</h5>
        <TableInteractiveTool
          adminActiveModule={this.props.adminActiveModule}
          InteractiveList={this.state.InteractiveList}
        />
      </div>
    );
  }
}

export default InteractiveMain;
