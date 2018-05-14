import React from 'react';

import { Card, CardHeader, CardText } from 'material-ui/Card';
import { styles } from './dashboard.styles';

export const Dashboard = () => (
    <Card style={ styles.cardContainer }>
        <CardHeader titleStyle={ styles.cardHeader } title="Administration for Pathfinder Helper Tools" />
        <CardText>Tweak your tools...</CardText>
    </Card>
);
