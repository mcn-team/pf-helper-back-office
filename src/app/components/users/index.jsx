import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    Create,
    SimpleForm,
    TextInput,
    ReferenceField,
    SelectInput,
    ReferenceInput,
    Edit,
    DisabledInput,
    EditButton
} from 'admin-on-rest';

const datagridStyles = {
    table: { },
    tbody: { },
    tr: { },
    header: {
        th: { },
        'th:last-child': { }, // special style for the first header column
    },
    cell: {
        td: { },
        'td:last-child': { }, // special style for the first column
    },
};

export const UsersList = (props) => {
    return (
        <List { ...props }>
            <Datagrid styles={ datagridStyles }>
                <TextField source="id"/>
                <TextField source="username"/>
                <ReferenceField label="Role" source="roleId" reference="roles" linkType={ false }>
                    <TextField source="roleName" />
                </ReferenceField>
                <EditButton style={{ textAlign: 'right' }} />
            </Datagrid>
        </List>
    );
};

const UsersTitle = ({ record }) => {
    return <span>Utilisateur {record ? `${record.username}` : ''}</span>;
};

export const UsersCreate = (props) => {
    return (
        <Create { ...props }>
            <SimpleForm>
                <TextInput source="username" />
                <TextInput source="password" />
                <ReferenceInput label="Role" source="roleId" reference="roles">
                    <SelectInput optionText="roleName" />
                </ReferenceInput>
            </SimpleForm>
        </Create>
    );
};

export const UsersEdit = (props) => {
    return (
        <Edit title={<UsersTitle/>} { ...props }>
            <SimpleForm>
                <DisabledInput source="id" />
                <TextInput source="username" />
                <TextInput source="password" />
                <ReferenceInput label="Role" source="roleId" reference="roles">
                    <SelectInput optionText="roleName" />
                </ReferenceInput>
            </SimpleForm>
        </Edit>
    );
};
