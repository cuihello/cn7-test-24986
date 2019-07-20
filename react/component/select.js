import React from 'react'
import { Select, Radio } from 'choerodon-ui';
const Option = Select.Option;

const children = [];
for (let i = 10; i < 12; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
    console.log(`Selected: ${value}`);
}

export class SelectSizes extends React.Component {
    state = {
        size: 'small',
    };

    handleSizeChange = (e) => {
        this.setState({ size: e.target.value });
    }

    render() {
        const { size } = this.state;
        return (
            <div>
                <Select
                    mode="tags"
                    size={size}
                    placeholder="角色标签"
                    onChange={handleChange}
                    style={{ width: '29%' }}
                >
                    {children}
                </Select>
            </div>
        );
    }
}
