import React, { Component } from "react";
import { Drawer } from "antd";
import { Button, Table } from "react-bootstrap";

class DrawerFinalTestAns extends Component {
  render() {
    const { onClose, visible } = this.props;

    return (
      <div>
        <Drawer
          title={<h4>User Final-Test</h4>}
          width={1280}
          onClose={onClose}
          visible={visible}
          bodyStyle={{ paddingBottom: 80 }}
          placement='right'
          footer={
            <div
              style={{
                textAlign: "center",
              }}
            >
              <Button onClick={onClose}>{"Close Final-Test Section"}</Button>
            </div>
          }
        >
          <Table responsive striped bordered hover>
            <tr>
              <th>Question</th>
              <th>Answer</th>
            </tr>
            <tr>
              <td>I can describe basic concepts regarding volunteering</td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>I can explain the sports leader-volunteer role</td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>
                I can describe basic concepts regarding social innovation.
              </td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>
                I can explain the relationship between sports and social
                innovation.
              </td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>
                I know how to design / develop social innovation in sports
                organizations.
              </td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>
                I can explain the role of volunteers in social inclusive
                projects.
              </td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>
                I can explain strategies to structure an inclusive environment
                in the sport projects.
              </td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>I understand the topic of social equality.</td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>
                I can explain the role of volunteers in sport-related projects,
                based on the concept of equality.
              </td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>
                I understand the main organizational aspects of sport events.
              </td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>
                I can explain the application of governance standards and
                volunteers involvement in providing quality sport events.
              </td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>
                {" "}
                Do you think the training course is pedagogically and
                academically reliable?
              </td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>
                Do you think the content of the training course is sufficient to
                meet the needs of the field?
              </td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>
                Does the training course have the content and quality to be used
                as a training program in its field?
              </td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>
                Do the intro videos provide sufficient information about the
                learning objectives of the module?
              </td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>
                Are the content and quality of the lecture videos sufficient?
              </td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>
                Do you think it is difficult to implement the interactive tasks
                that have to be completed by you?
              </td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>
                Did you find supportive educational resources such as readings
                and expert videos useful?
              </td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>
                Are the quizzes at the end of the module prepared in accordance
                with the content of the module?
              </td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>
                Write down the weaknesses of the training course and the aspects
                you think need improvement.
              </td>
              <td>-Answer-</td>
            </tr>
          </Table>
        </Drawer>
      </div>
    );
  }
}
export default DrawerFinalTestAns;
