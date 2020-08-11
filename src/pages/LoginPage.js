import React from 'react';
import Input from '../components/Inputs/Input/Input';

import withAuthRedirect from '../components/hoc/withAuthRedirect';

const LoginPage = () => (
    <>
        <h1>Login page!</h1>
        <Input
            withIcon
            name="password"
            placeholder="Password"
            type="password"
            errorText="Some error"
        />
        <Input
            withIcon
            name="email"
            placeholder="E-mail"
            type="email"
        />
        <Input
            withIcon
            name="name"
            placeholder="Name"
        />
    </>
);

export default withAuthRedirect(LoginPage);
