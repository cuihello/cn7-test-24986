import React from 'react'
import {NavLink} from 'react-router-dom'
import { Menu, Icon, Button } from 'choerodon-ui/lib/index';
const SubMenu = Menu.SubMenu;
export default class App extends React.Component {
    state = {
        collapsed: false,
    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <div style={{ width: 256 }}>
                <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                    <Icon type="menu" style={{fontSize: 26}} />
                </Button>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    inlineCollapsed={this.state.collapsed}
                >

                        <Menu.Item key="2">
                            <NavLink to="/24986/role" >
                            <Icon type="pie_chart_outlined" />
                            <span>角色管理</span>
                            </NavLink>
                        </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="desktop_windows" />
                        <span>暂不可用</span>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Icon type="inbox" />
                        <span>暂不可用</span>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Icon type="settings" />
                        <span>暂不可用</span>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}
