import React, { Component } from 'react';
import '../style/nav.less'
import { Icon } from 'choerodon-ui'
import 'choerodon-ui/dist/choerodon-ui.less'
import App from './left-nav'
export default class Home extends Component {
  url1=require("../style/image/nav2.png")
  url2=require("../style/image/nav3.png")
  render() {
    return (
      <div>
        <div className="nav">
          <div className="base first-block"><img className="nav-img" src={this.url1}/></div>
          <div className="base second-block">
            <div className="fir-block"><Icon className="icon"type="sync_user" /><span className="fon">协作链接</span></div>
            <div className="fir-block"><Icon className="icon"type="project_line" /><span className="fon">项目</span></div>
            <div className="fir-block"><Icon className="icon"type="API_market" /><span className="fon">应用市场</span></div>
            <div className="fir-block"><Icon className="icon"type="import_contacts" /><span className="fon">知识</span></div>
          </div>
          <div className="base third-block"><span className="fon">请选择组织<Icon className="icon" type="baseline-arrow_drop_down" /></span></div>
          <div className="base fourth-block">
            <div className="four-block"><Icon className="set" type="settings" /><span className="fon">管理中心</span></div>
            <div className="four-block"><span className="fon"><Icon type="contact_support" /></span></div>
            <div className="four-block"><span className="fon"><Icon type="notification_setting" /></span></div>
            <div className="four-block"><img src={this.url2} /></div>
          </div>
        </div>
        <div className="left-nav">
        <div><App/></div>
        </div>
      </div>
    );
  }
}