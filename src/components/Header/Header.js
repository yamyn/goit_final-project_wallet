import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ user, authenticated, onLogOut }) => (
    <header>
        <h2>Header</h2>
    </header>
);

Header.defaultProps = {
    user: PropTypes.shape({
        name: 'name',
        email: 'email',
    }),
};

Header.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
    }),
    authenticated: PropTypes.bool.isRequired,
    onLogOut: PropTypes.func.isRequired,
};

export default Header;
