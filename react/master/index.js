import React, { Component } from 'react';
import '../style/nav.less'
import { Icon } from 'choerodon-ui'
import 'choerodon-ui/dist/choerodon-ui.less'
import {NavLink} from 'react-router-dom'
import {Selects} from "../component/select-ogr";
import {Avators} from "../component/avator-flex";
export default class Master extends Component {
  url1=require("../style/image/nav2.png")
  render() {
    const { AutoRouter } = this.props;
    return (
        <div>
          <div>
            <div className="nav">
              <NavLink to="/" className="navlink"><div className="base first-block"><img className="nav-img" src={this.url1}/></div></NavLink>
              <div className="base second-block">
                <NavLink  to="/24986/teamwork" className="navlink"> <div className="fir-block"><Icon className="icon"type="sync_user" /><span className="fon">协作链接</span></div></NavLink>
                <div className="fir-block"><NavLink className="navlink" to="/24986/project"><Icon className="icon"type="project_line" /><span className="fon">项目</span></NavLink></div>
                <NavLink className="navlink" to="/24986/application"><div className="fir-block"><Icon className="icon"type="API_market" /><span className="fon">应用市场</span></div></NavLink>
                <NavLink className="navlink" to="/24986/knowledge"><div className="fir-block"><Icon className="icon"type="import_contacts" /><span className="fon">知识</span></div></NavLink>
              </div>
              <div className="base third-block"><span className="fon"><Selects className="cg" /></span></div>
              <div className="base fourth-block">
                <NavLink className="navlink" to="/24986/manage"><div className="four-block"><Icon className="set" type="settings" /><span className="fon">管理中心</span></div></NavLink>
                <div className="four-block"><span className="fon"><Icon type="contact_support" /></span></div>
                <div className="four-block"><span className="fon"><Icon type="notification_setting" /></span></div>
                <div className="four-block"><Avators /></div>
              </div>
            </div>

          </div>
          <AutoRouter />
        </div>
    );
  }
}