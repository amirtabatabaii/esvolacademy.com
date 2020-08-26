import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Scroll from "../../Utility/Scroll";

class SubModule7 extends Component {
  render() {
    return (
      <div className={`${this.props.userActiveModule}-sub-panel mt-4 app`}>
        <Scroll>
          <h1 className='m-5'>
            {this.props.SubModule1QuizQuestion[0].question}
          </h1>
          <h1 className='m-5'>Quiz</h1>

          <Button
            className='m-3'
            size='lg'
            onClick={() =>
              this.props.onClickNextModule(
                `Module${
                  parseInt(this.props.userActiveModule.substring(6)) + 1
                }`,
                "sub1"
              )
            }
          >
            Next Module
          </Button>
        </Scroll>
      </div>
    );
  }
}

export default SubModule7;

// export default connect(
//   {},
//   {
//     UserActiveModuleSubModule,
//   }
// )(withRouter(SubModule7));
