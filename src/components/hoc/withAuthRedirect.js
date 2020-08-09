import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getIsAuthenticated } from '../../redux/session/sessionSelectors';

const withAuthRedirect = BaseComponent => {
    class WithAuthRedirect extends Component {
        componentDidMount() {
            const { authenticated, history } = this.props;

            if (!authenticated) {
                return;
            }

            history.replace('/');
        }

        componentDidUpdate() {
            const { authenticated, history, location } = this.props;
            if (!authenticated) {
                return;
            }

            if (location.state && location.state.from) {
                history.replace(location.state.from);

                return;
            }

            history.replace('/');
        }

        render() {
            return <BaseComponent {...this.props} />;
        }
    }

    const mapStateToProps = state => ({
        authenticated: getIsAuthenticated(state),
    });

    return connect(mapStateToProps)(WithAuthRedirect);
};

export default withAuthRedirect;
