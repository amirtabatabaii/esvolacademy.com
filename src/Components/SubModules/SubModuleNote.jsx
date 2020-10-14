import React, { Component } from "react";
import TranslateText from "../Translate/TranslateText";

class SubModuleNote extends Component {
  render() {
    const {
      userActiveSubModule,
      showResult,
      takeQuiz,
      compareAnswer,
    } = this.props;

    return (
      <p className='Module-note m-3'>
        {userActiveSubModule === "sub1" ? (
          <>
            <h4 className='font-weight-bold'>
              <TranslateText txt='SubModule1-header' />
            </h4>
            <TranslateText txt='SubModule1-note' />
          </>
        ) : null}

        {userActiveSubModule === "sub2" ? (
          <>
            <h4 className='font-weight-bold'>
              <TranslateText txt='SubModule2-header' />
            </h4>
            <TranslateText txt='SubModule2-note' />
          </>
        ) : null}

        {userActiveSubModule === "sub3" ? (
          <>
            <h4 className='font-weight-bold'>
              <TranslateText txt='SubModule3-header' />
            </h4>
            <TranslateText txt='SubModule3-note' />
          </>
        ) : null}

        {userActiveSubModule === "sub4" ? (
          <>
            <h4 className='font-weight-bold'>
              <TranslateText txt='SubModule4-header' />
            </h4>
            <TranslateText txt='SubModule4-note' />
          </>
        ) : null}

        {userActiveSubModule === "sub5" ? (
          <>
            <h4 className='font-weight-bold'>
              <TranslateText txt='SubModule5-header' />
            </h4>
            <TranslateText txt='SubModule5-note' />
          </>
        ) : null}

        {userActiveSubModule === "sub6" ? (
          <>
            <h4 className='font-weight-bold'>
              <TranslateText txt='SubModule6-header' />
            </h4>
            <TranslateText txt='SubModule6-note' />
          </>
        ) : null}

        {userActiveSubModule === "sub7" ? (
          <>
            {showResult && (
              <>
                <h4 className='font-weight-bold'>
                  <TranslateText txt='SubModule7-header' />
                </h4>
                <TranslateText txt='SubModule7-ResultNote' />
              </>
            )}

            {compareAnswer && (
              <>
                <h4 className='font-weight-bold'>
                  <TranslateText txt='SubModule7-header' />
                </h4>
                <TranslateText txt='SubModule7-CompareNote' />
              </>
            )}

            {takeQuiz && (
              <>
                <h4 className='font-weight-bold'>
                  <TranslateText txt='SubModule7-header' />
                </h4>
                <TranslateText txt='SubModule7-note' />
              </>
            )}
          </>
        ) : null}
      </p>
    );
  }
}
export default SubModuleNote;
