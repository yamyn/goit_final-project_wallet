import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getIsAuthenticated } from '../redux/session/sessionSelectors';

const ProtectedRoute = ({
    authenticated,
    redirectTo = '/',
    component: Component,
    ...rest
}) => (
    <Route
        {...rest}
        render={props =>
            authenticated ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: redirectTo,
                        state: { from: props.location },
                    }}
                />
            )
        }
    />
);

const mapStateToProps = state => ({
    authenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(ProtectedRoute);
