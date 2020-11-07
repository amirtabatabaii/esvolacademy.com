import React, { Component } from "react";
import TranslateText from "../Translate/TranslateText";

class SubModuleNote extends Component {
  render() {
    const {
      userActiveSubModule,
      showResult,
      takeQuiz,
      compareAnswer,
      isEasyModeActive,
    } = this.props;

    return (
      <p className='Module-note m-3'>
        {userActiveSubModule === "sub1" && (
          <>
            <h4 className='font-weight-bold'>
              <TranslateText txt='SubModule1-header' />
            </h4>
            <TranslateText txt='SubModule1-note' />
          </>
        )}

        {userActiveSubModule === "sub2" && (
          <>
            <h4 className='font-weight-bold'>
              <TranslateText txt='SubModule2-header' />
            </h4>
            <TranslateText txt='SubModule2-note' />
          </>
        )}

        {userActiveSubModule === "sub3" && isEasyModeActive && (
          <>
            <h4 className='font-weight-bold'>
              <TranslateText txt='SubModule3-header' />
            </h4>
            <TranslateText txt='SubModule3-note' />
          </>
        )}

        {userActiveSubModule === "sub4" && isEasyModeActive && (
          <>
            <h4 className='font-weight-bold'>
              <TranslateText txt='SubModule4-header' />
            </h4>
            <TranslateText txt='SubModule4-note' />
          </>
        )}

        {userActiveSubModule === "sub5" && isEasyModeActive && (
          <>
            <h4 className='font-weight-bold'>
              <TranslateText txt='SubModule5-header' />
            </h4>
            <TranslateText txt='SubModule5-note' />
          </>
        )}

        {userActiveSubModule === "sub6" && (
          <>
            <h4 className='font-weight-bold'>
              <TranslateText txt='SubModule6-header' />
            </h4>
            <TranslateText txt='SubModule6-note' />
          </>
        )}

        {userActiveSubModule === "sub7" && (
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
        )}
      </p>
    );
  }
}
export default SubModuleNote;
