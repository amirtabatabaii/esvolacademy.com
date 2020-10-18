import React, { Component } from "react";

import Scroll from "../../Utility/Scroll";
// import "./SubModule4.css";
import Reading5 from "./Reading5";
import Sub5Button from "./Sub5Button";

class SubModule5 extends Component {
  render() {
    const { userActiveModule, SubModule5CaseStudyFiltered } = this.props;

    return (
      <div className={`${userActiveModule}-sub-panel mt-4 app`}>
        <Scroll>
          {SubModule5CaseStudyFiltered.map((caseStudy, index) => (
            <Reading5
              userActiveModule={this.props.userActiveModule}
              // header='Bulgaria:'
              note={caseStudy.title}
              type={caseStudy.urlFormat}
              Link={caseStudy.taskUrl}
            />
            // <Reading4
            //   userActiveModule={userActiveModule}
            //   note={reading.title}
            //   type={reading.urlFormat}
            //   Link={reading.taskUrl}
            // />
          ))}

          {/* <Reading5
            userActiveModule={this.props.userActiveModule}
            header='United Kingdom:'
            note='London Olympics: How volunteers made the Games:'
            type='website'
            Link='https://www.bbc.com/news/uk-19201329'
          /> */}

          <Sub5Button
            className={`${this.props.userActiveModule}-next-btn m-3`}
            txt='SubModule5-Continue'
            onClick={this.props.onClick}
          />
        </Scroll>
      </div>
    );
  }
}
export default SubModule5;
