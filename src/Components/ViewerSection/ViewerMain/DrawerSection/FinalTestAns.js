import React, { Component } from "react";
import { Drawer } from "antd";
import { Button, Table } from "react-bootstrap";

class DrawerFinalTestAns extends Component {
  render() {
    const { onClose, visible, FltUserInfoArray } = this.props;

    return (
      <div>
        <Drawer
          title={<h4>User Final-Test</h4>}
          width={1280}
          onClose={onClose}
          visible={visible}
          // bodyStyle={{ paddingBottom: 80 }}
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
            <tbody>
              <tr className='bg-secondary text-white'>
                <td style={{ width: "1%" }}>#</td>
                <th>Question</th>
                <th>Answer</th>
              </tr>
              <tr>
                <td>1</td>
                <td>I can describe basic concepts regarding volunteering</td>
                <td>
                  {FltUserInfoArray.finalTest.finalTestQuestionAnswer.FinalQst1}
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>I can explain the sports leader-volunteer role</td>
                <td>
                  {FltUserInfoArray.finalTest.finalTestQuestionAnswer.FinalQst2}
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  I can describe basic concepts regarding social innovation.
                </td>
                <td>
                  {FltUserInfoArray.finalTest.finalTestQuestionAnswer.FinalQst3}
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  I can explain the relationship between sports and social
                  innovation.
                </td>
                <td>
                  {FltUserInfoArray.finalTest.finalTestQuestionAnswer.FinalQst4}
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  I know how to design / develop social innovation in sports
                  organizations.
                </td>
                <td>
                  {FltUserInfoArray.finalTest.finalTestQuestionAnswer.FinalQst5}
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>
                  I can explain the role of volunteers in social inclusive
                  projects.
                </td>
                <td>
                  {FltUserInfoArray.finalTest.finalTestQuestionAnswer.FinalQst6}
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>
                  I can explain strategies to structure an inclusive environment
                  in the sport projects.
                </td>
                <td>
                  {FltUserInfoArray.finalTest.finalTestQuestionAnswer.FinalQst7}
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>I understand the topic of social equality.</td>
                <td>
                  {FltUserInfoArray.finalTest.finalTestQuestionAnswer.FinalQst8}
                </td>
              </tr>
              <tr>
                <td>9</td>
                <td>
                  I can explain the role of volunteers in sport-related
                  projects, based on the concept of equality.
                </td>
                <td>
                  {FltUserInfoArray.finalTest.finalTestQuestionAnswer.FinalQst9}
                </td>
              </tr>
              <tr>
                <td>10</td>
                <td>
                  I understand the main organizational aspects of sport events.
                </td>
                <td>
                  {
                    FltUserInfoArray.finalTest.finalTestQuestionAnswer
                      .FinalQst10
                  }
                </td>
              </tr>
              <tr>
                <td>11</td>
                <td>
                  I can explain the application of governance standards and
                  volunteers involvement in providing quality sport events.
                </td>
                <td>
                  {
                    FltUserInfoArray.finalTest.finalTestQuestionAnswer
                      .FinalQst11
                  }
                </td>
              </tr>
              <tr>
                <td>12</td>
                <td>
                  Do you think the training course is pedagogically and
                  academically reliable?
                </td>
                <td>
                  {
                    FltUserInfoArray.finalTest.finalTestQuestionAnswer
                      .FinalQst12
                  }
                </td>
              </tr>
              <tr>
                <td>13</td>
                <td>
                  Do you think the content of the training course is sufficient
                  to meet the needs of the field?
                </td>
                <td>
                  {
                    FltUserInfoArray.finalTest.finalTestQuestionAnswer
                      .FinalQst13
                  }
                </td>
              </tr>
              <tr>
                <td>14</td>
                <td>
                  Does the training course have the content and quality to be
                  used as a training program in its field?
                </td>
                <td>
                  {
                    FltUserInfoArray.finalTest.finalTestQuestionAnswer
                      .FinalQst14
                  }
                </td>
              </tr>
              <tr>
                <td>15</td>
                <td>
                  Do the intro videos provide sufficient information about the
                  learning objectives of the module?
                </td>
                <td>
                  {
                    FltUserInfoArray.finalTest.finalTestQuestionAnswer
                      .FinalQst15
                  }
                </td>
              </tr>
              <tr>
                <td>16</td>
                <td>
                  Are the content and quality of the lecture videos sufficient?
                </td>
                <td>
                  {
                    FltUserInfoArray.finalTest.finalTestQuestionAnswer
                      .FinalQst16
                  }
                </td>
              </tr>
              <tr>
                <td>17</td>
                <td>
                  Do you think it is difficult to implement the interactive
                  tasks that have to be completed by you?
                </td>
                <td>
                  {
                    FltUserInfoArray.finalTest.finalTestQuestionAnswer
                      .FinalQst17
                  }
                </td>
              </tr>
              <tr>
                <td>18</td>
                <td>
                  Did you find supportive educational resources such as readings
                  and expert videos useful?
                </td>
                <td>
                  {
                    FltUserInfoArray.finalTest.finalTestQuestionAnswer
                      .FinalQst18
                  }
                </td>
              </tr>
              <tr>
                <td>19</td>
                <td>
                  Are the quizzes at the end of the module prepared in
                  accordance with the content of the module?
                </td>
                <td>
                  {
                    FltUserInfoArray.finalTest.finalTestQuestionAnswer
                      .FinalQst19
                  }
                </td>
              </tr>
              <tr>
                <td>20</td>
                <td>
                  Write down the weaknesses of the training course and the
                  aspects you think need improvement.
                </td>
                <td>
                  {
                    FltUserInfoArray.finalTest.finalTestQuestionAnswer
                      .FinalQst20
                  }
                </td>
              </tr>
            </tbody>
          </Table>
        </Drawer>
      </div>
    );
  }
}
export default DrawerFinalTestAns;
