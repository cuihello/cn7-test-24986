import React from 'react'
import { Menu, Icon, Button } from 'choerodon-ui/lib/index';
const SubMenu = Menu.SubMenu;
export default class Show extends React.Component {
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
                    <Menu.Item key="1">
                        <span>个人中心</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon className="setc" type="message_notification"/><span className="setc">消息通知</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon className="setc" type="person"/><span className="setc">个人信息</span>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Icon className="setc" type="vpn_key"/><span className="setc">修改密码</span>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Icon className="setc" type="authority"/><span className="setc">权限信息</span>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <Icon className="setc" type="ballot"/> <span className="setc">授权管理</span>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}
