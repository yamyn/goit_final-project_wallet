import React from 'react';
import PropTypes from 'prop-types';

import { p } from './Alert.module.css';

const Alert = ({ message }) => <p className={p}>{message}!</p>;

Alert.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Alert;
