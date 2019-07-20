import React from 'react'
import {SelectSizes} from "./select";
import {Icon,Button,Input, Row, Col} from 'choerodon-ui';
import store3 from '../role/store3'
import {observer} from 'mobx-react'
import {TabsCard} from "./change-table";

@observer
export class Create extends React.Component{
    change=()=>{
        store3.setState()
    }
    render() {
        return(
            <div>
            <div style={{borderBottom:"gray solid 2px",width:"1500px",height:"60px"}}>
               <div style={{lineHeight:"60px"}}>
                   <Button onClick={this.change}><Icon type="arrow_back" style={{fontSize:"15px",color:"blue"}}/></Button>
                   <span style={{marginLeft:"15px"}}>创建全局层角色</span>
                   <span>{console.log(store3.getState)}</span>
               </div>
            </div>
            <div style={{marginLeft:"20px"}}>
                <Row gutter={8}>
                    <Col span={7}>
                        <div style={{display:"flex"}}><Input size="small" prefix="role/site/custom/" required label="角色编码*"  /><span style={{marginLeft:"10px"}}></span>
                            <Input size="small"  required label="角色名称*"  />
                        </div>
                    </Col>
                </Row>
            </div>
            <div style={{marginTop:"40px",marginLeft:"20px"}}><SelectSizes/></div>
                <div><TabsCard/></div>
            </div>)
    }
}