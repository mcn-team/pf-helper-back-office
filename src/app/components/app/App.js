import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import UserIcon from 'material-ui/svg-icons/social/group';

import { Dashboard } from '../dashboard/dashboard';
import { UsersList, UsersCreate, UsersEdit } from '../users';

import './App.css';

const App = () => (
    <Admin
        theme={ getMuiTheme(darkBaseTheme) }
        dashboard={ Dashboard }
        restClient={ jsonServerRestClient('http://localhost:3000/api') }
    >
        <Resource name="users" list={ UsersList } edit={ UsersEdit } create={ UsersCreate } icon={ UserIcon } />
        <Resource name="roles" />
    </Admin>
);

export default App;
