import {Icon, Table} from 'choerodon-ui';
import React from 'react'
import {observer} from 'mobx-react'
import store5 from '../role/store5'
import {axios} from "@choerodon/boot";
const columns = [{
    title: '菜单',
    dataIndex: 'name',
    key: 'name',
    render:((text,ob)=>{
        return (<span><Icon type={ob.icon}/>{ob.name}</span>)
    })
}, {
    title: '页面入口',
    dataIndex: 'route',
    key: 'route',
}];
const data = [{
    key: 1,
    name: 'name.',
   route:'route'

}]
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
export class Table2 extends React.Component{
    componentDidMount() {
        axios.get('http://api.staging.saas.hand-china.com/iam/v1/menus/menu_config?code=choerodon.code.top.user').
        then(res=>{
            console.log(res)
            let data=res.subMenus.map(d=>{
                return({
                        name:d.name,
                        icon:d.icon,
                        children:d.subMenus
                    }

                )
            })
            store5.setData(data)
        }).catch(err=>{
            alert("error")
            console.log(err)
        })
    }

    render() {
        return(  <Table columns={columns} rowSelection={rowSelection} dataSource={store5.getData} />)
    }
}