import React, { Component } from "react";
import { Drawer } from "antd";
import { Button, Table } from "react-bootstrap";
import UserAvatar from "../../Utility/UserAvatar";

class DrawerUserInfo extends Component {
  render() {
    const { onClose, visible } = this.props;

    return (
      <Drawer
        title={<h4>User Information</h4>}
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
            <Button onClick={onClose}>{"Close User-Info Section"}</Button>
          </div>
        }
      >
        <Table responsive striped bordered hover>
          <tbody>
            <tr className='bg-secondary text-white'>
              <th style={{ width: "30%" }}>Title</th>
              <th>Info</th>
            </tr>
            <tr>
              <td>Name</td>
              <td>-Calka-</td>
            </tr>
            <tr>
              <td>Surname</td>
              <td>-Oktar-</td>
            </tr>
            <tr>
              <td>Mail</td>
              <td>-test@test.com-</td>
            </tr>
            <tr>
              <td>Active Module</td>
              <td>-Module1-</td>
            </tr>
            <tr>
              <td>Active SubModule</td>
              <td>-Introduction Video-</td>
            </tr>
            <tr>
              <td>Score</td>
              <td>-0-</td>
            </tr>
            <tr>
              <td>Registered Date</td>
              <td>-2021-02-15-</td>
            </tr>
            <tr>
              <td>Is Easy Mode Active?</td>
              <td>-true-</td>
            </tr>
            <tr>
              <td>Avatar</td>
              <td>
                <UserAvatar avatarNo='10' />
              </td>
            </tr>
          </tbody>
        </Table>
      </Drawer>
    );
  }
}
export default DrawerUserInfo;
