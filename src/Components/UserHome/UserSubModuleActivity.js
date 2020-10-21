import React from "react";
import TranslateText from "../Translate/TranslateText";

function UserSubModuleActivity(props) {
  const { userActiveSubModule } = props;

  return (
    <>
      {userActiveSubModule === "sub1" && (
        <TranslateText txt='SubModule1-text' />
      )}
      {userActiveSubModule === "sub2" && (
        <TranslateText txt='SubModule2-text' />
      )}
      {userActiveSubModule === "sub3" && (
        <TranslateText txt='SubModule3-text' />
      )}
      {userActiveSubModule === "sub4" && (
        <TranslateText txt='SubModule4-text' />
      )}
      {userActiveSubModule === "sub5" && (
        <TranslateText txt='SubModule5-text' />
      )}
      {userActiveSubModule === "sub6" && (
        <TranslateText txt='SubModule6-text' />
      )}
      {userActiveSubModule === "sub7" && (
        <TranslateText txt='SubModule7-text' />
      )}
    </>
  );
}
export default UserSubModuleActivity;
