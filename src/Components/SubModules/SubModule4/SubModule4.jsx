import React, { Component } from "react";

import Scroll from "../../Utility/Scroll";
import SubModuleNextButton from "../../Utility/SubModuleNextButton";
// import "./SubModule4.css";
import Reading4 from "./Reading4";

class SubModule4 extends Component {
  render() {
    const {
      userActiveModule,
      EducationWithTasks,
      onClick,
      SubModule4ReadingFiltered,
    } = this.props;

    return (
      <div className={`${userActiveModule}-sub-panel mt-4 app`}>
        <Scroll>
          {SubModule4ReadingFiltered.map((reading, index) => (
            <Reading4
              userActiveModule={userActiveModule}
              note={reading.title}
              type={reading.urlFormat}
              Link={reading.taskUrl}
            />
          ))}

          <SubModuleNextButton
            // disabled={played.toFixed(2) * 100 <= SubModuleRatio ? true : false}
            className={`${userActiveModule}-next-btn m-3`}
            condition={!EducationWithTasks}
            EducationWithTasks={!EducationWithTasks}
            NormalNextSubModule='sub5'
            SubModule6Name='sub6'
            txt='SubModule4-Continue'
            onClick={onClick}
          />
        </Scroll>
      </div>
    );
  }
}
export default SubModule4;
