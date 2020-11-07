import React, { Component } from "react";

import Scroll from "../../Utility/Scroll";
import SubModuleNextButton from "../../Utility/SubModuleNextButton";
import Task from "./Task";

class SubModule3 extends Component {
  handleChange(event) {
    console.log(event.target.value);
  }

  render() {
    const {
      userActiveModule,
      isEasyModeActive,
      SubModuleRatio,
      onClick,
    } = this.props;

    return (
      <div className={`${userActiveModule}-sub-panel mt-4 app`}>
        <Scroll>
          <Task
            userActiveModule={userActiveModule}
            note='Task-1: Watch the Lausanne 2020 – Become a Volunteer video which you can find below :'
            type='video'
            Link='https://www.youtube.com/watch?v=xInABTGavt8'
            question='Would you apply to be volunteer? If yes, tell us why? If no, again, please tell us why?'
            TextFieldName='task1'
            onChange={this.handleChange}
          />

          <Task
            userActiveModule={userActiveModule}
            note='Task-2: Read the Council conclusions on the role of voluntary activities in sport in promoting active citizenship.'
            type='pdf'
            Link='https://ec.europa.eu/citizenship/pdf/council_conclusions_on_volunteering_in_sport_en.pdf'
            question='What are the values that the sport volunteers should promote? Write them down in the box :'
            TextFieldName='task2'
            onChange={this.handleChange}
          />

          <SubModuleNextButton
            // disabled={played.toFixed(2) * 100 <= SubModuleRatio ? true : false}
            className={`${userActiveModule}-next-btn m-3`}
            condition={!isEasyModeActive}
            isEasyModeActive={!isEasyModeActive}
            NormalNextSubModule='sub4'
            SubModule6Name='sub6'
            txt='SubModule3-Continue'
            onClick={onClick}
          />
        </Scroll>
      </div>
    );
  }
}
export default SubModule3;
