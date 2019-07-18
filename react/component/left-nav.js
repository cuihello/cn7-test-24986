import React from 'react'
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
                    <Menu.Item key="1">
                        <Icon type="pie_chart_outlined" />
                        <span>关联角色</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop_windows" />
                        <span>lable菜单</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="inbox" />
                        <span>文档管理</span>
                    </Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="mail_outline" /><span>信息管理</span></span>}>
                        <Menu.Item key="5">部门信息</Menu.Item>
                        <Menu.Item key="6">员工信息</Menu.Item>
                        <Menu.Item key="7">通知信息</Menu.Item>
                        <Menu.Item key="8">热点信息</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="apps" /><span>其他功能</span></span>}>
                        <Menu.Item key="9">任务管理</Menu.Item>
                        <Menu.Item key="10">应用管理</Menu.Item>
                        <SubMenu key="sub3" title="DevOps管理">
                            <Menu.Item key="11">应用模板</Menu.Item>
                            <Menu.Item key="12">集群管理</Menu.Item>
                            <Menu.Item key="13">证书管理</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}
