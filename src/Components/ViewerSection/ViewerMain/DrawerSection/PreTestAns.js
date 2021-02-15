import React, { Component } from "react";
import { Drawer } from "antd";
import { Button } from "react-bootstrap";

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
            <h5 className='p-2 m-auto'>Age</h5>
            <h5 className='p-2 m-auto'>Gender</h5>
            <h5 className='p-2 m-auto'>Occupation</h5>
            <h5 className='p-2 m-auto'>Professional Experience (years)</h5>
            <h5 className='p-2 m-auto'>Country</h5>
            <h5 className='p-2 m-auto'>Have you completed an online training on volunteering before?</h5>
            <h5 className='p-2 m-auto'>Have you ever had a gamification-based online training?</h5>
            <h5 className='p-2 m-auto'>Have you completed an online training before and received a certificate?</h5>
            <h5 className='p-2 m-auto'>Do you have any knowledge about social leadership and volunteering in sport?</h5>
            <h5 className='p-2 m-auto'>Do you have any knowledge about social innovation in/through sport?</h5>
            <h5 className='p-2 m-auto'>Do you have any knowledge about social inclusion in sport?</h5>
            <h5 className='p-2 m-auto'>Do you have any knowledge on social equality in sport?</h5>
            <h5 className='p-2 m-auto'>Do you have any knowledge on good governance, safety and security in sport events?</h5>
            <h5 className='p-2 m-auto'>What do you think about your level of knowledge and skills in social innovation and leadership in sports?</h5>
         </Drawer>
      </div>
    );
  }
}
export default DrawerPreTestAns;
