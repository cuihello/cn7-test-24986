import React, { Component } from 'react';
import '../style/home.less'
import { Avatar,Input } from 'choerodon-ui';
import Show from '../component/left-show'
export default class First extends Component {
    render() {
        return(<div style={{display:"flex"}}>
            <div><Show/></div>
            <div>
                <div style={{height:"58px"}}><span>个人信息</span></div>
                <div>
                    <div className="base">
                        <div className="pmesage"> <Avatar size="large" icon="user" />
                        </div>
                        <div style={{marginLeft:"150px"}}>
                            <span>admin</span><br/>
                            <span>认证来源</span><br/>
                            <span>用户名:</span><span>管理员</span>
                        </div>
                    </div>
                    <div className="base">
                        <div className="pmesage"><span>账号信息</span></div>
                        <div style={{marginLeft:"40px"}}>
                            <span >邮箱地址</span><Input/>
                            <span>手机号码</span><Input/>
                            <span>语言</span><Input />
                            <span>时区</span><Input />
                        </div>
                    </div>
                    <div className="base">
                        <div className="pmesage">组织信息</div>
                        <div style={{marginLeft:"40px"}}>
                            <span>组织名称:</span><Input />
                            <span>组织编码:</span><Input />
                        </div>
                    </div>
                </div>
            </div>
        </div>)
            ;
    }
}