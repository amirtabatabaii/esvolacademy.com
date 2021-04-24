import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import TranslateText from "../Translate/TranslateText";

class ModuleStagesNameSmall extends Component {
  state = {
    UserModuleNum: 0,
  };

  componentDidMount = () => {
    let UserModule = localStorage.getItem("UserModule");
    this.setState(
      {
        UserModuleNum: UserModule.substring(6),
      }
      // () => {
      //   console.log(this.state);
      // }
    );
  };

  render() {
    const { userActiveModule, handleOnClickModule } = this.props;
    const { UserModuleNum } = this.state;

    return (
      <div className={`Sub${userActiveModule}-panel-text`}>
        <Row className='w-100 m-2'>
          <Col>
            <span
              className={`${
                userActiveModule === "Module1" || 1 <= UserModuleNum
                  ? "Module-text-active Module1-text-active"
                  : "Module-text"
              }`}
              onClick={() => handleOnClickModule("Module1")}
            >
              <TranslateText txt='Module1-text' />
            </span>
          </Col>

          <Col>
            <span
              className={`${
                userActiveModule === "Module2" || 2 <= UserModuleNum
                  ? "Module-text-active Module2-text-active"
                  : "Module-text"
              }`}
              onClick={() => handleOnClickModule("Module2")}
            >
              <TranslateText txt='Module2-text' />
            </span>
          </Col>

          <Col>
            <span
              className={`${
                userActiveModule === "Module3" || 3 <= UserModuleNum
                  ? "Module-text-active Module3-text-active"
                  : "Module-text"
              }`}
              onClick={() => handleOnClickModule("Module3")}
            >
              <TranslateText txt='Module3-text' />
            </span>
          </Col>

          <Col>
            <span
              className={`${
                userActiveModule === "Module4" || 4 <= UserModuleNum
                  ? "Module-text-active Module4-text-active"
                  : "Module-text"
              }`}
              onClick={() => handleOnClickModule("Module4")}
            >
              <TranslateText txt='Module4-text' />
            </span>
          </Col>

          <Col>
            <span
              className={`${
                userActiveModule === "Module5" || 5 <= UserModuleNum
                  ? "Module-text-active Module5-text-active"
                  : "Module-text"
              }`}
              onClick={() => handleOnClickModule("Module5")}
            >
              <TranslateText txt='Module5-text' />
            </span>
          </Col>
        </Row>
      </div>

      // <Row>
      //   <span
      //     className={`${
      //       userActiveModule === "Module1"
      //         ? "Module-text-active Module1-text-active"
      //         : "Module-text"
      //     }`}
      //     onClick={() => handleOnClickModule("Module1")}
      //   >
      //     <TranslateText txt='Module1-text' />
      //   </span>
      // </Row>
    );
  }
}

export default ModuleStagesNameSmall;
