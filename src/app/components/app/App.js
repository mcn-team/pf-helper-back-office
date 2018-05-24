import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import { Dashboard } from '../dashboard/dashboard';
import { GamesList, GamesCreate } from '../games';

const App = () => (
    <Admin
        dashboard={ Dashboard }
        restClient={ jsonServerRestClient('http://localhost:3000/api') }
    >
        <Resource name="games" list={ GamesList } create={ GamesCreate } />
    </Admin>
);

export default App;
