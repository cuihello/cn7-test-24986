import { Menu, Dropdown, Icon, Button } from 'choerodon-ui';
import React from 'react'
const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="#">运营组织</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a href="#">测试组织</a>
        </Menu.Item>
        <Menu.Item key="2">
            <a href="#">敏捷测试</a>
        </Menu.Item>
        <Menu.Item key="3">猪齿鱼</Menu.Item>
        <Menu.Item key="4">
            <a href="https://github.com/choerodon">重新测试组织</a>
        </Menu.Item>
        <Menu.Item key="5">
            <a href="#">猪齿鱼产品运营</a>
        </Menu.Item>
        <Menu.Item key="6">
            <a href="#">演示测试组织</a>
        </Menu.Item>
    </Menu>
);

export class Selects extends React.Component{
    render(){
        return(<div>
            <Dropdown overlay={menu} trigger={['click']}>
                <a className="ant-dropdown-link" href="#">
                    <span style={{color:"white"}}>请选择组织<Icon type="arrow_drop_down" /></span>
                </a>
            </Dropdown>
        </div>)
    }
}