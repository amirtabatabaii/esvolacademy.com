import React, { Component } from "react";

import Scroll from "../../Utility/Scroll";
import Task from "./Task";
import Sub3Button from "./Sub3Button";

class SubModule3 extends Component {
  handleChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className={`${this.props.userActiveModule}-sub-panel mt-4 app`}>
        <Scroll>
          <Task
            userActiveModule={this.props.userActiveModule}
            note='Task-1: Watch the Lausanne 2020 – Become a Volunteer video which you can find below :'
            type='video'
            Link='https://www.youtube.com/watch?v=xInABTGavt8'
            question='Would you apply to be volunteer? If yes, tell us why? If no, again, please tell us why?'
            TextFieldName='task1'
            onChange={this.handleChange}
          />

          <Task
            userActiveModule={this.props.userActiveModule}
            note='Task-2: Read the Council conclusions on the role of voluntary activities in sport in promoting active citizenship.'
            type='pdf'
            Link='https://ec.europa.eu/citizenship/pdf/council_conclusions_on_volunteering_in_sport_en.pdf'
            question='What are the values that the sport volunteers should promote? Write them down in the box :'
            TextFieldName='task2'
            onChange={this.handleChange}
          />

          <Sub3Button
            className={`${this.props.userActiveModule}-next-btn m-3`}
            txt='SubModule3-Continue'
            onClick={this.props.onClick}
          />
        </Scroll>
      </div>
    );
  }
}
export default SubModule3;
