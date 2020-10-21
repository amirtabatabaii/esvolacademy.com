import React from "react";
import TranslateText from "../Translate/TranslateText";

function UserModuleActivity(props) {
  const { userActiveModule } = props;

  return (
    <>
      {userActiveModule === "Module1" && <TranslateText txt='Module1-text' />}
      {userActiveModule === "Module2" && <TranslateText txt='Module2-text' />}
      {userActiveModule === "Module3" && <TranslateText txt='Module3-text' />}
      {userActiveModule === "Module4" && <TranslateText txt='Module4-text' />}
      {userActiveModule === "Module5" && <TranslateText txt='Module5-text' />}
    </>
  );
}
export default UserModuleActivity;
