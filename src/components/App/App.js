import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from '@material-ui/core';
import popTransition from '../../transitions/pop.module.css';

// Pages
import DiagramPage from '../../pages/DiagramPage';
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import SignUpPage from '../../pages/SignupPage';

import ProtectedRoute from '../ProtectedRoute';

import Alert from '../Alert/Alert';

export default class App extends Component {
    static propTypes = {
        alert: PropTypes.string.isRequired,
    };

    componentDidMount() {
        const { fetchTransactions, fetchExchange } = this.props;
        fetchExchange();
        fetchTransactions();
    }

    render() {
        const { alert } = this.props;
        const isAlert = !!alert;

        return (
            <Container disableGutters={true}>
                <Switch>
                    <ProtectedRoute
                        path="/diagram"
                        component={DiagramPage}
                        redirectTo="/login"
                    />
                    <ProtectedRoute
                        path="/home"
                        component={HomePage}
                        redirectTo="/login"
                    />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={SignUpPage} />
                    <Redirect to="/home" />
                </Switch>
                <CSSTransition
                    in={isAlert}
                    timeout={300}
                    classNames={popTransition}
                    unmountOnExit
                >
                    <Alert message={alert} />
                </CSSTransition>
            </Container>
        );
    }
}
