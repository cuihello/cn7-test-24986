import {Table,Dropdown, Icon, Button, Menu} from 'choerodon-ui';
import {axios} from '@choerodon/boot'
import {Drop} from "./downselect";
import React from 'react'
import store1 from '../role/store1'
import store3 from '../role/store3'
import {observer} from 'mobx-react'
const columns = [{
    title: '名称',
    dataIndex: 'name',
    width:'200px',
    filters: [{
        text: 'Joe',
        value: 'Joe',
    }, {
        text: 'Jim',
        value: 'Jim',
    }],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
}, {
    title: '编码',
    dataIndex: 'code',
    width:"200px",
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.code - b.code,
    filters: [],
    onFilter: (value, record) => record.name.indexOf(value) === 0,
}, {
    title: '层级',
    dataIndex: 'level',
    width:"200px",
    filters: [{
        text: 'London',
        value: 'London',
    }, {
        text: 'New York',
        value: 'New York',
    }],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
}, {
    title: '来源',
    dataIndex: 'source',
    width:"200px",
    filters: [{
        text: 'London',
        value: 'London',
    }, {
        text: 'New York',
        value: 'New York',
    }],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
}, {
    title: '状态',
    dataIndex: 'state',
    width:"200px",
    filters: [{
        text: 'London',
        value: 'London',
    }, {
        text: 'New York',
        value: 'New York',
    }],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
}
];

function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
}

@observer
export class Tables extends React.Component {
    componentDidMount() {
        const des={
            code: '',
            level: '',
            params: [],
            name: '',
            enabled: 'true',
            buildIn: 'true'
        }
        axios.post( `/iam/v1/roles/search?page=1&size=10&sort=id,desc`,des).
        then(data=>{
            store1.setData(data)
        }).catch(error=>{
            alert('请求错误')
            console.log(error)
        })
    }

    state = {
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
    };

    start = () => {
        this.setState({ loading: true });
        // ajax request after empty completing
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 100);
    }

    change=()=>{store3.setState();}
    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    }

    render() {
        const i=0
        const data = store1.getData.list;

        console.log(4444444444)
        for(let i in store1.list){
            console.log(i,2222)
            data.push({
                key:i+1,
                name:store1.list.name,
                code:store1.list.code,
                level:store1.list.level,
                source:"自定义",
                state:"启用",
            });
        }

        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div>
                <div style={{ marginBottom: 16,display:"flex" }}>
                    <span style={{fontSize:"20px", marginRight:"10px",marginLeft:"5px"}}>角色管理</span>
                    <Drop />
                    <Button
                        type="primary"
                        onClick={this.change}
                    >
                        创建角色
                    </Button>
                    <Button
                        type="primary"
                        onClick={this.start}
                        disabled={!hasSelected}
                        loading={loading}
                    >
                        基于所选角色创建
                    </Button>
                    <Button
                        type="primary"
                        onClick={this.start}
                        disabled={hasSelected}
                        loading={loading}
                    >
                        刷新
                    </Button>
                    <span>{console.log(store1.getData.list,66666)}</span>
                    <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
                </div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
            </div>
        );
    }
}
