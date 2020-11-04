import React, { Component } from "react";
import Footer from "../Footer/Footer";
import ModuleNavBar from "../Module/ModuleNavBar";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import TranslateText from "../Translate/TranslateText";

class Settings extends Component {
  render() {
    const { userActiveModule } = this.props;

    return (
      <div className='main-bg-color'>
        <div id='page-wrap' className='App'>
          <ModuleNavBar userActiveModule={userActiveModule} />
        </div>

        <Container>
          <h3 className='p-5 text-left user-setting-head '>
            <TranslateText txt='User-Setting' />
          </h3>

          {/* <Row className='w-100 m-auto bg-info'> */}
          {/* <Col lg={6} sm={12} md={12} className='bg-danger '> */}
          <TranslateText txt='User-Name' />
          <br />
          <TranslateText txt='User-surName' />
          <br />
          <TranslateText txt='User-ChooseAvatar' />
          <br />
          <TranslateText txt='User-NewPass' />
          <br />
          <TranslateText txt='User-EducationWithTasks' />
          {/* </Col> */}

          {/* <Col lg={6} sm={12} md={12} className=''>
              <TranslateText txt='User-NewPass' />
              <br />
              <TranslateText txt='User-EducationWithTasks' />
            </Col> */}
          {/* </Row> */}
        </Container>

        <Footer userActiveModule={userActiveModule} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userActiveModule: state.userActiveModule,
  userActiveSubModule: state.userActiveSubModule,
  EducationWithTasks: state.EducationWithTasks,
});

export default connect(mapStateToProps, {})(withRouter(Settings));
