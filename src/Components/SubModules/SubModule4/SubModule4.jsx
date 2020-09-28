import React, { Component } from "react";

import Scroll from "../../Utility/Scroll";
// import "./SubModule4.css";
import Reading4 from "./Reading4";
import Sub4Button from "./Sub4Button";

class SubModule4 extends Component {
  handleChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className={`${this.props.userActiveModule}-sub-panel mt-4 app`}>
        <Scroll>
          <Reading4
            userActiveModule={this.props.userActiveModule}
            note='Volunteers: A Key Ingredient for a Successful Sports Event'
            type='website'
            Link='https://sportsplanningguide.com/volunteers-key-ingredient-successful-sports-event'
          />

          <Reading4
            userActiveModule={this.props.userActiveModule}
            note='Doherty, A., The volunteer legacy of a major sport event, 2009.'
            type='website'
            Link='https://www.tandfonline.com/doi/full/10.1080/19407960903204356'
          />

          <Reading4
            userActiveModule={this.props.userActiveModule}
            note='Masterman, G., Strategic Sports Event Management, An international approach, 2004. '
            type='pdf'
            Link='http://pseudology.org/terovanesian/Masterman_Strategic_Sports_Event_Management2.pdf'
          />

          <Reading4
            userActiveModule={this.props.userActiveModule}
            note='Strang, L., Insights of the role of volunteers in public safety at major sporting events, 2018. '
            type='pdf'
            Link='https://rand.org/content/dam/rand/pubs/research_reports/RR2800/RR2804/RAND_RR2804.pdf'
          />

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
