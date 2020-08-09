import React from 'react';

import withAuthRedirect from '../components/hoc/withAuthRedirect';

const LoginPage = () => <h1>Login page!</h1>;

export default withAuthRedirect(LoginPage);
