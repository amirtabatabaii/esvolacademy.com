import React, { Component } from "react";

import Scroll from "../../Utility/Scroll";
import SubModuleNextButton from "../../Utility/SubModuleNextButton";
// import "./SubModule4.css";
import Reading5 from "./Reading5";

class SubModule5 extends Component {
  render() {
    const {
      userActiveModule,
      userActiveSubModule,
      SubModule5CaseStudyFiltered,
      isEasyModeActive,
      onClick,
    } = this.props;

    return (
      <div className={`${userActiveModule}-sub-panel mt-4 app`}>
        <Scroll>
          {SubModule5CaseStudyFiltered.map((caseStudy, index) => (
            <Reading5
              userActiveModule={this.props.userActiveModule}
              note={caseStudy.title}
              type={caseStudy.urlFormat}
              Link={caseStudy.taskUrl}
            />
          ))}

          {localStorage.getItem("UserModule").substring(6) <
            localStorage.getItem("UserTempModule").substring(6) ||
            (localStorage.getItem("UserModule").substring(6) ===
              localStorage.getItem("UserTempModule").substring(6) &&
              userActiveSubModule.substring(3) ===
                localStorage.getItem("UserSubModule").substring(3) && (
                <SubModuleNextButton
                  // disabled={played.toFixed(2) * 100 <= SubModuleRatio ? true : false}
                  className={`${userActiveModule}-next-btn m-3`}
                  condition={!isEasyModeActive}
                  isEasyModeActive={!isEasyModeActive}
                  NormalNextSubModule='sub6'
                  SubModule6Name='sub7'
                  txt='SubModule5-Continue'
                  onClick={onClick}
                />
              ))}
        </Scroll>
      </div>
    );
  }
}
export default SubModule5;
