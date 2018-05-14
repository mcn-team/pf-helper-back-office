import React from 'react';
import {
    List, Datagrid, TextField, EditButton,
    Create, SimpleForm, TextInput, SelectInput, ReferenceInput,
    Edit, DisabledInput
} from 'admin-on-rest';
import sha256 from 'sha256';

export const UserList = (props) => {
    return (
        <List { ...props }>
            <Datagrid>
                <TextField source="id" />
                <TextField source="username" />
                <TextField source="roleName" />
                <EditButton />
            </Datagrid>
        </List>
    );
};

export const UserCreate = (props) => {
    return (
        <Create { ...props }>
            <SimpleForm redirect="list">
                <TextInput source="username" />
                <TextInput source="password" type="password" />
                <ReferenceInput label="Role" source="roleId" reference="roles">
                    <SelectInput optionText="roleName" />
                </ReferenceInput>
            </SimpleForm>
        </Create>
    );
};

const UserEditTitle = ({ record }) => {
    return <span>Edit {record ? `${record.username} user` : ''}</span>;
};

export const UserEdit = (props) => {
    return (
        <Edit title={ <UserEditTitle/> } { ...props }>
            <SimpleForm>
                <DisabledInput source="username" />
                <TextInput source="password" type="password" />
                <ReferenceInput label="Role" source="roleId" reference="roles">
                    <SelectInput optionText="roleName" />
                </ReferenceInput>
            </SimpleForm>
        </Edit>
    );
};
