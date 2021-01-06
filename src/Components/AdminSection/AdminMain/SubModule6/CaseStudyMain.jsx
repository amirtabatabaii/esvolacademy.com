import React, { Component } from "react";
import { Divider, Collapse } from "antd";
import { ApiUrlMainVideo, ApiUrlMain2 } from "../../../Utility/ApiUrl";
import axios from "axios";
import { openNotificationWithIcon } from "../../Utility/Error";

import CaseStudyAddItem from "./CaseStudyAddItem";
import TableCaseStudy from "./TableCaseStudy";

const { Panel } = Collapse;

class CaseStudyMain extends Component {
  state = { CaseStudyList: [] };

  async componentDidMount() {
    this.setState({
      CaseStudyList: [],
    });

    await axios
      .get(
        ApiUrlMain2 +
          `/api/sublevels/search?moduleName=${this.props.adminActiveModule}&subModuleType=Case Study`,
        {
          headers: {
            Authorization: localStorage.getItem("UserInfo"),
          },
        }
      )
      .then((Response) => {
        // console.log(Response.data);
        this.setState({
          CaseStudyList: Response.data,
        });
      });
  }

  render() {
    return (
      <div>
        <Collapse className='mb-3'>
          <Panel header='Add New CaseStudy Section' key='1'>
            <CaseStudyAddItem
              adminActiveSubModule={this.props.adminActiveSubModule}
              adminActiveModule={this.props.adminActiveModule}
            />
          </Panel>
        </Collapse>

        <Divider className='bg-info' />

        <h5>CaseStudy List</h5>
        <TableCaseStudy
          adminActiveModule={this.props.adminActiveModule}
          CaseStudyList={this.state.CaseStudyList}
        />
      </div>
    );
  }
}

export default CaseStudyMain;
