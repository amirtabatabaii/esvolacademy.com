import React, { Component } from "react";
import { Drawer } from "antd";
import { Button, Table } from "react-bootstrap";

class DrawerPreTestAns extends Component {
  render() {
    const { onClose, visible } = this.props;

    return (
      <div>
        <Drawer
          title={<h4>User Pre-Test</h4>}
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
              <Button onClick={onClose}>{"Close Pre-Test Section"}</Button>
            </div>
          }
        >
          <Table responsive striped bordered hover>
            <tr>
              <th>Question</th>
              <th>Answer</th>
            </tr>
            <tr>
              <td>Age</td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>Occupation</td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>Professional Experience (years)</td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>Country</td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>
                Have you completed an online training on volunteering before?
              </td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>Have you ever had a gamification-based online training?</td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>
                Have you completed an online training before and received a
                certificate?
              </td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>
                Do you have any knowledge about social leadership and
                volunteering in sport?
              </td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>
                Do you have any knowledge about social innovation in/through
                sport?
              </td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>
                Do you have any knowledge about social inclusion in sport?
              </td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td> Do you have any knowledge on social equality in sport?</td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>
                Do you have any knowledge on good governance, safety and
                security in sport events?
              </td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>
                What do you think about your level of knowledge and skills in
                social innovation and leadership in sports?
              </td>
              <td>-Answer-</td>
            </tr>
          </Table>
        </Drawer>
      </div>
    );
  }
}
export default DrawerPreTestAns;
