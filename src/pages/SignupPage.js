import React from 'react';

import withAuthRedirect from '../components/hoc/withAuthRedirect';

const SignupPage = () => <h1>SignUp page!</h1>;

export default withAuthRedirect(SignupPage);
