import React from 'react';
import { List, Datagrid, TextField, Create, SimpleForm, TextInput } from 'admin-on-rest';

export const GamesList = (props) => {
    return (
        <List { ...props }>
            <Datagrid>
                <TextField source="id"/>
                <TextField source="title"/>
            </Datagrid>
        </List>
    );
};

export const GamesCreate = (props) => {
    return (
        <Create { ...props }>
            <SimpleForm>
                <TextInput source="title" />
            </SimpleForm>
        </Create>
    );
};
