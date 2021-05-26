import React, { Component } from "react";
import { Drawer } from "antd";
import { Button, Table } from "react-bootstrap";
import UserAvatar from "../../Utility/UserAvatar";

class DrawerUserInfo extends Component {
  render() {
    const { onClose, visible, FltUserInfoArray } = this.props;

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
            {/* {console.log(index)} */}
            <tr className='bg-secondary text-white'>
              <th style={{ width: "30%" }}>Title</th>
              <th>Info</th>
            </tr>
            <tr>
              <td>Name</td>
              <td>{FltUserInfoArray.firstName}</td>
            </tr>
            <tr>
              <td>Surname</td>
              <td>{FltUserInfoArray.lastName}</td>
            </tr>
            <tr>
              <td>Mail</td>
              <td>{FltUserInfoArray.email}</td>
            </tr>
            <tr>
              <td>Active Module</td>
              <td>
                {FltUserInfoArray.userStatus.currentModule === "Module6" ? (
                  <span style={{ color: "red" }}>Finished Stages</span>
                ) : (
                  FltUserInfoArray.userStatus.currentModule
                )}
              </td>
            </tr>
            <tr>
              <td>Active SubModule</td>
              <td>
                {FltUserInfoArray.userStatus.currentModule === "Module6" ? (
                  <span style={{ color: "red" }}>Finished Stages</span>
                ) : (
                  FltUserInfoArray.userStatus.currentSubModule
                )}
              </td>
            </tr>
            <tr>
              <td>Score</td>
              <td>{FltUserInfoArray.userStatus.score}</td>
            </tr>
            <tr>
              <td>Registered Date</td>
              <td>{FltUserInfoArray.registeredDate}</td>
            </tr>
            <tr>
              <td>Avatar</td>
              <td>
                <UserAvatar avatarNo={FltUserInfoArray.avatarNo} />
              </td>
            </tr>
          </tbody>
        </Table>
      </Drawer>
    );
  }
}
export default DrawerUserInfo;
