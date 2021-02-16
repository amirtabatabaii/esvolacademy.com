import React, { Component } from "react";
import { Drawer } from "antd";
import { Button, Table } from "react-bootstrap";

class DrawerPreTestAns extends Component {
  render() {
    const { onClose, visible } = this.props;

    return (
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
          <tbody>
            <tr>
              <th style={{ width: "1%" }}>#</th>
              <th>Question</th>
              <th>Answer</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Age</td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Gender</td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Occupation</td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Professional Experience (years)</td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Country</td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>6</td>
              <td>
                Have you completed an online training on volunteering before?
              </td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Have you ever had a gamification-based online training?</td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>8</td>
              <td>
                Have you completed an online training before and received a
                certificate?
              </td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>9</td>
              <td>
                Do you have any knowledge about social leadership and
                volunteering in sport?
              </td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>10</td>
              <td>
                Do you have any knowledge about social innovation in/through
                sport?
              </td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>11</td>
              <td>
                Do you have any knowledge about social inclusion in sport?
              </td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>12</td>
              <td> Do you have any knowledge on social equality in sport?</td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>13</td>
              <td>
                Do you have any knowledge on good governance, safety and
                security in sport events?
              </td>
              <td>-Answer-</td>
            </tr>
            <tr>
              <td>14</td>
              <td>
                What do you think about your level of knowledge and skills in
                social innovation and leadership in sports?
              </td>
              <td>-Answer-</td>
            </tr>
          </tbody>
        </Table>
      </Drawer>
    );
  }
}
export default DrawerPreTestAns;
