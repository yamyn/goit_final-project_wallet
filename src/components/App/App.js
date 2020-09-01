import React, { Component, lazy, Suspense } from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import moment from 'moment';

import { Container } from '@material-ui/core';
import popTransition from '../../transitions/pop.module.css';

import ProtectedRoute from '../ProtectedRoute';
import Alert from '../Alert/Alert';
import Loader from '../Loader/Loader';

// Pages
const DiagramPage = lazy(() => import('../../pages/DiagramPage'));
const HomePage = lazy(() => import('../../pages/HomePage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const SignUpPage = lazy(() => import('../../pages/SignupPage'));
const ExchangeMobilePage = lazy(() => import('../../pages/ExchangeMobilePage'));
const AddTransMobilePage = lazy(() => import('../../pages/AddTransMobilePage'));

export default class App extends Component {
    static propTypes = {
        alert: PropTypes.string.isRequired,
    };

    componentDidMount() {
        const { fetchTransactions, fetchExchange } = this.props;
        fetchTransactions();
        fetchExchange();
    }

    componentDidUpdate() {
        const lastFiveMin = moment().subtract(3, 'm').valueOf();
        const {
            transUpTime,
            fetchTransactions,
            transCount,
            fetchExchange,
        } = this.props;
        fetchExchange();
        if (lastFiveMin > transUpTime || !transCount) {
            fetchTransactions();
        }
    }

    render() {
        const { alert } = this.props;
        const isAlert = !!alert;

        return (
            <Container
                disableGutters
                style={{
                    background: 'linear-gradient(180deg, #fff 0%, #edeceb 45%)',
                    height: '100vh',
                }}
            >
                <Suspense fallback={<Loader type="BallTriangle" />}>
                    <Switch>
                        <ProtectedRoute
                            path="/diagram"
                            component={DiagramPage}
                            redirectTo="/login"
                        />
                        <ProtectedRoute
                            path="/add-transaction"
                            component={AddTransMobilePage}
                            redirectTo="/login"
                        />

                        <ProtectedRoute
                            path="/home"
                            component={HomePage}
                            redirectTo="/login"
                        />

                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={SignUpPage} />
                        <Route
                            path="/exchange"
                            component={ExchangeMobilePage}
                        />
                        <Redirect to="/home" />
                    </Switch>
                </Suspense>
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
