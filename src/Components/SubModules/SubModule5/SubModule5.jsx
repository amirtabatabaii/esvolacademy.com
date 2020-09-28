import React, { Component } from "react";

import Scroll from "../../Utility/Scroll";
// import "./SubModule4.css";
import Reading5 from "./Reading5";
import Sub5Button from "./Sub5Button";

class SubModule5 extends Component {
  render() {
    return (
      <div className={`${this.props.userActiveModule}-sub-panel mt-4 app`}>
        <Scroll>
          <Reading5
            userActiveModule={this.props.userActiveModule}
            header='Bulgaria:'
            note='Young Leaders Seminar provides food for thought in Sofia:'
            type='website'
            Link='https://www.european-athletics.org/athletics-community/young-leaders/news/article=young-leaders-seminar-provides-food-for-thought-sofia.html'
          />

          <Reading5
            userActiveModule={this.props.userActiveModule}
            header='Greece:'
            note='The power of volunteers:'
            type='website'
            Link='https://www.olympic.org/news/olympic-legacy/athens-2004/the-power-of-volunteers'
          />

          <Reading5
            userActiveModule={this.props.userActiveModule}
            header='Italy:'
            note='An Olympic Experience: Torino 2006:'
            type='website'
            Link='https://thebudgetmindedtraveler.com/olympic-experience-torino-2006/'
          />

          <Reading5
            userActiveModule={this.props.userActiveModule}
            header='Spain:'
            note='2014 FIBA World Cup volunteers:'
            type='website'
            Link='http://www.fiba.basketball/basketballworldcup/2014/news/FIBA-2014-FIBA-Basketball-World-Cup-volunteers--pro'
          />

          <Reading5
            userActiveModule={this.props.userActiveModule}
            header='Turkey:'
            note=': EOC to launch education project ahead of 2017 European Youth Olympic Festival:'
            type='website'
            Link='https://www.insidethegames.biz/articles/1042178/eoc-to-launch-education-project-ahead-of-2017-european-youth-olympic-festival'
          />

          <Reading5
            userActiveModule={this.props.userActiveModule}
            header='United Kingdom:'
            note='London Olympics: How volunteers made the Games:'
            type='website'
            Link='https://www.bbc.com/news/uk-19201329'
          />

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
