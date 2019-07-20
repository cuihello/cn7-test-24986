import { Table,Icon } from 'choerodon-ui';
import React from 'react'
import {axios} from '@choerodon/boot'
import {observer} from 'mobx-react'
import store4 from '../role/store4'
const columns = [{
    title: '菜单',
    dataIndex: 'name',
    key: 'name',
    render:((text,obj)=>{
        return (<span><Icon type={obj.icon}/>{obj.name}</span>)
    })
}, {
    title: '页面入口',
    dataIndex: 'route',
    key: 'route',
}];


// rowSelection objects indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
    },
};

@observer
export class Table1 extends React.Component{
    componentDidMount() {
        axios.get('http://api.staging.saas.hand-china.com/iam/v1/menus?code=choerodon.code.top.site&source_id=0').
            then(res=>{
                let data=res.subMenus.map(d=>{
                   return({
                           name:d.name,
                           icon:d.icon,
                           children:d.subMenus
                       }

                   )
                })
                store4.setData(data)
        }).catch(err=>{
            alert("error")
            console.log(err)
        })
    }

    render() {
        return(  <Table columns={columns} rowSelection={rowSelection} dataSource={store4.data} />)
    }
}