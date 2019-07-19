import { Menu, Dropdown, Icon, Button,Avatar } from 'choerodon-ui';
import '../style/nav.less'
import {observer} from 'mobx-react'
import {NavLink} from 'react-router-dom'
import React from 'react'
import store from '../role/store'
import {getPeopleMessage} from '../role/index'
const url2=require("../style/image/ava.jpg")
const menu = (
    <Menu>
        <Menu.Item key="0">
            <NavLink to="/24986/first" target="_parent">
                <div>
                    <div style={{display:"flex"}}>
                    <div><Avatar size="large" src={url2} shape="circle" /></div>
                    <div style={{marginLeft:"15px"}}><span className="setc">{console.log(store.data)}{console.log(store.data.email)}</span><br/>
                    <span className="setc">{store.getData.email}</span></div>
                    </div>
                </div>
            </NavLink>
        </Menu.Item>
        <Menu.Item key="1">
            <Icon className="setc" type="message_notification"/><span className="setc">消息通知</span>
        </Menu.Item>
        <Menu.Item key="2">
            <Icon className="setc" type="person"/><span className="setc">个人信息</span>
        </Menu.Item>
        <Menu.Item key="3">
            <Icon className="setc" type="vpn_key"/><span className="setc">修改密码</span>
        </Menu.Item>
        <Menu.Item key="4">
            <Icon className="setc" type="authority"/><span className="setc">权限信息</span>
        </Menu.Item>
        <Menu.Item key="5">
            <Icon className="setc" type="ballot"/> <span className="setc">授权管理</span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="7">
            <Icon className="setc" type="settings"/> <span className="setc">平台管理</span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="9">
            <Icon className="setc" type="low_priority"/><span className="setc">退出登录</span>
        </Menu.Item>
    </Menu>
);

@observer
export class Avators extends React.Component{
    componentDidMount() {
        getPeopleMessage()
    }
    render(){
        return(<div>
            <Dropdown overlay={menu} trigger={['click']}>
                <a className="ant-dropdown-link" href="#">
                    <Avatar size="large" src={url2}/>
                </a>
            </Dropdown>
        </div>)
    }
}