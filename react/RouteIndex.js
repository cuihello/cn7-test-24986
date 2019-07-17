import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { inject } from 'mobx-react';
import { asyncRouter, nomatch } from '@choerodon/boot';
const Nav = asyncRouter(() => import('./component/first'));

@inject('AppState')
class DEMOIndex extends React.Component {
    render() {
        const { match, AppState } = this.props;
        return (
            <Switch>
                <Route path={`${match.url}/nav`} component={Nav} />
                <Route path="*" component={nomatch} />
            </Switch>
        );
    }
}

export default DEMOIndex;