import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import { Dashboard } from '../dashboard/dashboard';
import { UserList, UserCreate, UserEdit } from '../users/list.users';

const App = () => (
    <Admin
        dashboard={ Dashboard }
        restClient={ jsonServerRestClient('http://localhost:3000/api') }
    >
        <Resource name="users" list={ UserList } create={ UserCreate } edit={ UserEdit } />
        <Resource name="roles" />
    </Admin>
);

export default App;
