import React from 'react';
import { jsonServerRestClient, Admin } from 'admin-on-rest';

import { Dashboard } from '../dashboard/dashboard';

const App = () => (
    <Admin
        dashboard={ Dashboard }
        restClient={ jsonServerRestClient('http://jsonplaceholder.typicode.com') }
    >
    </Admin>
);

export default App;
