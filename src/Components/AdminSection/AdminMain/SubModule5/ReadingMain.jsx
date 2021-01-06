import React, { Component } from "react";
import { Divider, Collapse } from "antd";
import { ApiUrlMainVideo, ApiUrlMain2 } from "../../../Utility/ApiUrl";
import axios from "axios";
import { openNotificationWithIcon } from "../../Utility/Error";

import ReadingAddItem from "./ReadingAddItem";
import TableReading from "./TableReading";

const { Panel } = Collapse;

class ReadingMain extends Component {
  state = { ReadingList: [] };

  async componentDidMount() {
    this.setState({
      ReadingList: [],
    });

    await axios
      .get(
        ApiUrlMain2 +
          `/api/sublevels/search?moduleName=${this.props.adminActiveModule}&subModuleType=Reading`,
        {
          headers: {
            Authorization: localStorage.getItem("UserInfo"),
          },
        }
      )
      .then((Response) => {
        //console.log(Response.data);
        this.setState({
          ReadingList: Response.data,
        });
      });
  }

  render() {
    return (
      <div>
        <Collapse className='mb-3'>
          <Panel header='Add New Reading Section' key='1'>
            <ReadingAddItem
              adminActiveSubModule={this.props.adminActiveSubModule}
              adminActiveModule={this.props.adminActiveModule}
            />
          </Panel>
        </Collapse>

        <Divider className='bg-info' />

        <h5>Reading List</h5>
        <TableReading
          adminActiveModule={this.props.adminActiveModule}
          ReadingList={this.state.ReadingList}
        />
      </div>
    );
  }
}

export default ReadingMain;
