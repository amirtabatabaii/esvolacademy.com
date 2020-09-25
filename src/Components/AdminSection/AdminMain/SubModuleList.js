import React, { Component } from "react";
import { Layout } from "antd";
import { Menu } from "antd";
import { FolderOutlined } from "@ant-design/icons";

import { withRouter } from "react-router-dom";
import { AdminActiveModuleSubModule } from "../../../Redux/action";
import { connect } from "react-redux";

import "./AdminMain.css";
import MenuItem from "../Utility/MenuItem";

const { Sider } = Layout;
const { SubMenu } = Menu;

class SubModuleList extends Component {
  handleOnClick(Module, subModule) {
    // console.log(Module, subModule);
    this.props.AdminActiveModuleSubModule(Module, subModule);
  }

  render() {
    const {
      SubModule1Name,
      SubModule2Name,
      SubModule3Name,
      SubModule4Name,
      SubModule5Name,
      SubModule6Name,
      SubModule7Name,
      Module1Name,
      Module2Name,
      Module3Name,
      Module4Name,
      Module5Name,
    } = this.props;

    return (
      <Sider
        collapsible
        collapsed={this.props.collapsed}
        onCollapse={this.props.onCollapse}
      >
        <div className='logo' />
        <Menu theme='dark' defaultSelectedKeys={["1"]} mode='inline'>
          <SubMenu key='1' icon={<FolderOutlined />} title={Module1Name}>
            <Menu.Item>
              <MenuItem
                key='11'
                onClick={() => this.handleOnClick(Module1Name, SubModule1Name)}
                SubModuleName={SubModule1Name}
              />
            </Menu.Item>

            <Menu.Item>
              <MenuItem
                key='12'
                onClick={() => this.handleOnClick(Module1Name, SubModule2Name)}
                SubModuleName={SubModule2Name}
              />
            </Menu.Item>

            <Menu.Item>
              <MenuItem
                key='13'
                onClick={() => this.handleOnClick(Module1Name, SubModule3Name)}
                SubModuleName={SubModule3Name}
              />
            </Menu.Item>

            <Menu.Item>
              <MenuItem
                key='14'
                onClick={() => this.handleOnClick(Module1Name, SubModule4Name)}
                SubModuleName={SubModule4Name}
              />
            </Menu.Item>

            <Menu.Item>
              <MenuItem
                key='15'
                onClick={() => this.handleOnClick(Module1Name, SubModule5Name)}
                SubModuleName={SubModule5Name}
              />
            </Menu.Item>

            <Menu.Item>
              <MenuItem
                key='16'
                onClick={() => this.handleOnClick(Module1Name, SubModule6Name)}
                SubModuleName={SubModule6Name}
              />
            </Menu.Item>

            <Menu.Item>
              <MenuItem
                key='17'
                onClick={() => this.handleOnClick(Module1Name, SubModule7Name)}
                SubModuleName={SubModule7Name}
              />
            </Menu.Item>

            <Menu.Item>
              <MenuItem
                key='18'
                onClick={() =>
                  this.handleOnClick(Module1Name, "Questions Setting")
                }
                SubModuleName={"Questions Setting"}
              />
            </Menu.Item>
          </SubMenu>

          <SubMenu key='2' icon={<FolderOutlined />} title={Module2Name}>
            <Menu.Item>
              <MenuItem
                key='21'
                onClick={() => this.handleOnClick(Module2Name, SubModule1Name)}
                SubModuleName={SubModule1Name}
              />
            </Menu.Item>

            <Menu.Item>
              <MenuItem
                key='22'
                onClick={() => this.handleOnClick(Module2Name, SubModule2Name)}
                SubModuleName={SubModule2Name}
              />
            </Menu.Item>

            <Menu.Item>
              <MenuItem
                key='23'
                onClick={() => this.handleOnClick(Module2Name, SubModule3Name)}
                SubModuleName={SubModule3Name}
              />
            </Menu.Item>

            <Menu.Item>
              <MenuItem
                key='24'
                onClick={() => this.handleOnClick(Module2Name, SubModule4Name)}
                SubModuleName={SubModule4Name}
              />
            </Menu.Item>

            <Menu.Item>
              <MenuItem
                key='25'
                onClick={() => this.handleOnClick(Module2Name, SubModule5Name)}
                SubModuleName={SubModule5Name}
              />
            </Menu.Item>

            <Menu.Item>
              <MenuItem
                key='26'
                onClick={() => this.handleOnClick(Module2Name, SubModule6Name)}
                SubModuleName={SubModule6Name}
              />
            </Menu.Item>

            <Menu.Item>
              <MenuItem
                key='27'
                onClick={() => this.handleOnClick(Module2Name, SubModule7Name)}
                SubModuleName={SubModule7Name}
              />
            </Menu.Item>

            <Menu.Item>
              <MenuItem
                key='28'
                onClick={() =>
                  this.handleOnClick(Module2Name, "Questions Setting")
                }
                SubModuleName={"Questions Setting"}
              />
            </Menu.Item>
          </SubMenu>

          <SubMenu key='3' icon={<FolderOutlined />} title={Module3Name}>
            <Menu.Item>
              <MenuItem
                key='31'
                onClick={() => this.handleOnClick(Module3Name, SubModule1Name)}
                SubModuleName={SubModule1Name}
              />
            </Menu.Item>

            <Menu.Item>
              <MenuItem
                key='32'
                onClick={() => this.handleOnClick(Module3Name, SubModule2Name)}
                SubModuleName={SubModule2Name}
              />
            </Menu.Item>

            <Menu.Item>
              <MenuItem
                key='33'
                onClick={() => this.handleOnClick(Module3Name, SubModule3Name)}
                SubModuleName={SubModule3Name}
              />
            </Menu.Item>

            <Menu.Item>
              <MenuItem
                key='34'
                onClick={() => this.handleOnClick(Module3Name, SubModule4Name)}
                SubModuleName={SubModule4Name}
              />
            </Menu.Item>

            <Menu.Item>
              <MenuItem
                key='35'
                onClick={() => this.handleOnClick(Module3Name, SubModule5Name)}
                SubModuleName={SubModule5Name}
              />
            </Menu.Item>

            <Menu.Item>
              <MenuItem
                key='36'
                onClick={() => this.handleOnClick(Module3Name, SubModule6Name)}
                SubModuleName={SubModule6Name}
              />
            </Menu.Item>

            <Menu.Item>
              <MenuItem
                key='37'
                onClick={() => this.handleOnClick(Module3Name, SubModule7Name)}
                SubModuleName={SubModule7Name}
              />
            </Menu.Item>

            <Menu.Item>
              <MenuItem
                key='38'
                onClick={() =>
                  this.handleOnClick(Module3Name, "Questions Setting")
                }
                SubModuleName={"Questions Setting"}
              />
            </Menu.Item>
          </SubMenu>

          <SubMenu key='4' icon={<FolderOutlined />} title={Module4Name}>
            <Menu.Item>
              <MenuItem
                key='41'
                onClick={() => this.handleOnClick(Module4Name, SubModule1Name)}
                SubModuleName={SubModule1Name}
              />
            </Menu.Item>

            <Menu.Item>
              <MenuItem
                key='42'
                onClick={() => this.handleOnClick(Module4Name, SubModule2Name)}
                SubModuleName={SubModule2Name}
              />
            </Menu.Item>

            <Menu.Item>
              <MenuItem
                key='43'
                onClick={() => this.handleOnClick(Module4Name, SubModule3Name)}
                SubModuleName={SubModule3Name}
              />
            </Menu.Item>

            <Menu.Item>
              <MenuItem
                key='44'
                onClick={() => this.handleOnClick(Module4Name, SubModule4Name)}
                SubModuleName={SubModule4Name}
              />
            </Menu.Item>

            <Menu.Item>
              <MenuItem
                key='45'
                onClick={() => this.handleOnClick(Module4Name, SubModule5Name)}
                SubModuleName={SubModule5Name}
              />
            </Menu.Item>

            <Menu.Item>
              <MenuItem
                key='46'
                onClick={() => this.handleOnClick(Module4Name, SubModule6Name)}
                SubModuleName={SubModule6Name}
              />
            </Menu.Item>

            <Menu.Item>
              <MenuItem
                key='47'
                onClick={() => this.handleOnClick(Module4Name, SubModule7Name)}
                SubModuleName={SubModule7Name}
              />
            </Menu.Item>

            <Menu.Item>
              <MenuItem
                key='48'
                onClick={() =>
                  this.handleOnClick(Module4Name, "Questions Setting")
                }
                SubModuleName={"Questions Setting"}
              />
            </Menu.Item>
          </SubMenu>

          <SubMenu key='5' icon={<FolderOutlined />} title={Module5Name}>
            <Menu.Item>
              <MenuItem
                key='51'
                onClick={() => this.handleOnClick(Module5Name, SubModule1Name)}
                SubModuleName={SubModule1Name}
              />
            </Menu.Item>

            <Menu.Item>
              <MenuItem
                key='52'
                onClick={() => this.handleOnClick(Module5Name, SubModule2Name)}
                SubModuleName={SubModule2Name}
              />
            </Menu.Item>

            <Menu.Item>
              <MenuItem
                key='53'
                onClick={() => this.handleOnClick(Module5Name, SubModule3Name)}
                SubModuleName={SubModule3Name}
              />
            </Menu.Item>

            <Menu.Item>
              <MenuItem
                key='54'
                onClick={() => this.handleOnClick(Module5Name, SubModule4Name)}
                SubModuleName={SubModule4Name}
              />
            </Menu.Item>

            <Menu.Item>
              <MenuItem
                key='55'
                onClick={() => this.handleOnClick(Module5Name, SubModule5Name)}
                SubModuleName={SubModule5Name}
              />
            </Menu.Item>

            <Menu.Item>
              <MenuItem
                key='56'
                onClick={() => this.handleOnClick(Module5Name, SubModule6Name)}
                SubModuleName={SubModule6Name}
              />
            </Menu.Item>

            <Menu.Item>
              <MenuItem
                key='57'
                onClick={() => this.handleOnClick(Module5Name, SubModule7Name)}
                SubModuleName={SubModule7Name}
              />
            </Menu.Item>

            <Menu.Item>
              <MenuItem
                key='58'
                onClick={() =>
                  this.handleOnClick(Module5Name, "Questions Setting")
                }
                SubModuleName={"Questions Setting"}
              />
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}

const mapStateToProps = (state) => ({
  userActiveModule: state.userActiveModule,
  userActiveSubModule: state.userActiveSubModule,
  SubModule1Name: state.SubModule1Name,
  SubModule2Name: state.SubModule2Name,
  SubModule3Name: state.SubModule3Name,
  SubModule4Name: state.SubModule4Name,
  SubModule5Name: state.SubModule5Name,
  SubModule6Name: state.SubModule6Name,
  SubModule7Name: state.SubModule7Name,
  Module1Name: state.Module1Name,
  Module2Name: state.Module2Name,
  Module3Name: state.Module3Name,
  Module4Name: state.Module4Name,
  Module5Name: state.Module5Name,
  //
  SubModule1Title: state.SubModule1Title,
  SubModule1Url: state.SubModule1Url,
  SubModule1Ratio: state.SubModule1Ratio,
  //
  SubModule2Title: state.SubModule2Title,
  SubModule2Url: state.SubModule2Url,
  SubModule2Ratio: state.SubModule2Ratio,
});

export default connect(mapStateToProps, {
  AdminActiveModuleSubModule,
})(withRouter(SubModuleList));
