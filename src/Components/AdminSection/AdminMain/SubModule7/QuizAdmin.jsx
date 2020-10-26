import React, { Component } from "react";
import TableQuestion from "./TableQuestion";
import { Divider, Collapse } from "antd";
import QuizAddQuestions from "./QuizAddQuestions";

const { Panel } = Collapse;

class QuizAdmin extends Component {
  render() {
    return (
      <div>
        <Collapse className='mb-3'>
          <Panel header='Add New Question Section' key='1'>
            <QuizAddQuestions
              adminActiveSubModule={this.props.adminActiveSubModule}
              adminActiveModule={this.props.adminActiveModule}
            />
          </Panel>
        </Collapse>

        <Divider className='bg-info' />

        <TableQuestion adminActiveModule={this.props.adminActiveModule} />
      </div>
    );
  }
}

export default QuizAdmin;
