import React, { Component } from "react";
import TranslateText from "../Translate/TranslateText";

class ModuleStagesName extends Component {
  render() {
    const { userActiveModule, handleOnClickModule } = this.props;

    return (
      <div className={`${userActiveModule} Module-panel d-none d-lg-block`}>
        <h3
          className={`${
            userActiveModule === "Module1"
              ? "Module-text-active Module1-text-active"
              : "Module-text"
          }`}
          onClick={() => handleOnClickModule("Module1")}
        >
          <TranslateText txt='Module1-text' />
        </h3>

        <h3
          className={`${
            userActiveModule === "Module2"
              ? "Module-text-active Module2-text-active"
              : "Module-text"
          }`}
          onClick={() => handleOnClickModule("Module2")}
        >
          <TranslateText txt='Module2-text' />
        </h3>

        <h3
          className={`${
            userActiveModule === "Module3"
              ? "Module-text-active Module3-text-active"
              : "Module-text"
          }`}
          onClick={() => handleOnClickModule("Module3")}
        >
          <TranslateText txt='Module3-text' />
        </h3>

        <h3
          className={`${
            userActiveModule === "Module4"
              ? "Module-text-active Module4-text-active"
              : "Module-text"
          }`}
          onClick={() => handleOnClickModule("Module4")}
        >
          <TranslateText txt='Module4-text' />
        </h3>

        <h3
          className={`${
            userActiveModule === "Module5"
              ? "Module-text-active Module5-text-active"
              : "Module-text"
          } pb-5`}
          onClick={() => handleOnClickModule("Module5")}
        >
          <TranslateText txt='Module5-text' />
        </h3>
      </div>
    );
  }
}

export default ModuleStagesName;
