import React, { Component } from "react";

import Scroll from "../../Utility/Scroll";
// import "./SubModule4.css";
import Reading4 from "./Reading4";
import Sub4Button from "./Sub4Button";

class SubModule4 extends Component {
  render() {
    const { userActiveModule, SubModule4ReadingFiltered } = this.props;

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

          <Sub4Button
            className={`${this.props.userActiveModule}-next-btn m-3`}
            txt='SubModule4-Continue'
            onClick={this.props.onClick}
          />
        </Scroll>
      </div>
    );
  }
}
export default SubModule4;
