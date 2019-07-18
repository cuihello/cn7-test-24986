import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { inject } from 'mobx-react';
import { asyncRouter, nomatch } from '@choerodon/boot';
const Admin = asyncRouter(() => import('./component/admin'));
const Project = asyncRouter(() => import('./component/project'));
const Home = asyncRouter(() => import('./home/index'));
const Application = asyncRouter(() => import('./component/application'));
const Knowledge = asyncRouter(() => import('./component/knowledge'));
const Teamwork = asyncRouter(() => import('./component/teamwork'));
const Manage = asyncRouter(() => import('./component/manage'));
@inject('AppState')
class DEMOIndex extends React.Component {
    render() {
        const { match, AppState } = this.props;
        return (
            <Switch>
                <Route path={`${match.url}/adm`} component={Admin} />
                <Route path={`${match.url}/project`} component={Project} />
                <Route path={`${match.url}/home`} component={Home} />
                <Route path={`${match.url}/application`} component={Application} />
                <Route path={`${match.url}/knowledge`} component={Knowledge} />
                <Route path={`${match.url}/teamwork`} component={Teamwork} />
                <Route path={`${match.url}/manage`} component={Manage} />
                <Route path="*" component={nomatch} />
            </Switch>
        );
    }
}

export default DEMOIndex;