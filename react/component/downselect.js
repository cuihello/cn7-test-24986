import React from 'react'
import { Select } from 'choerodon-ui';
const Option = Select.Option;

function handleChange(value) {
    console.log(`selected ${value}`);
}

export class Drop extends React.Component{
    render() {
        return(
            <div>
            <Select label="Select" placeholder="全局"  style={{ width: 70 }} onChange={handleChange}>
                <Option value="全局">全局</Option>
                <Option value="组织">组织</Option>
                <Option value="项目">项目</Option>
            </Select>
        </div>)
    }
}
