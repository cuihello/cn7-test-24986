import { Card } from 'choerodon-ui';
import {Table1} from "./table1";
import {Table2} from "./table2";
import React from 'react'
const tabList = [{
    key: 'tab1',
    tab: '全局层',
}, {
    key: 'tab2',
    tab: '个人中心',
}];

const contentList = {
    tab1: <Table1/>,
    tab2: <Table2/>,
};


export class TabsCard extends React.Component {
    state = {
        key: 'tab1',
        noTitleKey: 'app',
    }

    onTabChange = (key, type) => {
        console.log(key, type);
        this.setState({ [type]: key });
    }

    render() {
        return (
            <div>
                <Card
                    style={{ width: '100%' }}
                    title="菜单分配"
                    extra={<a href="#">More</a>}
                    tabList={tabList}
                    onTabChange={(key) => { this.onTabChange(key, 'key'); }}
                >
                    {contentList[this.state.key]}
                </Card>
            </div>
        );
    }
}