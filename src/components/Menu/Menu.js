import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { ReactSVG } from 'react-svg';
import useStyles from './MenuStyle';
import home from '../../img/icons/home/baseline-home-24px.svg';
import diagram from '../../img/icons/diagrams/baseline-timeline-24px.svg';
import exchange from '../../img/icons/currency exchange/baseline-attach_money-24px.svg';

// eslint-disable-next-line react/prop-types
export default function Menu({ balance }) {
    const { classes, isNotMobile, isDesktop } = useStyles();
    return (
        <>
            <Paper elevation={3} />
            <List component="ul" className={classes.list}>
                <ListItem className={classes.item}>
                    <NavLink
                        to="/home"
                        exact
                        activeClassName={classes.active}
                        className={classes.link}
                    >
                        <ReactSVG src={home} className={classes.icon} />
                        {isNotMobile && (
                            <>
                                <span className={classes.linkText}>
                                    Главная
                                </span>
                                {!isDesktop && (
                                    <Divider
                                        orientation="vertical"
                                        flexItem
                                        className={classes.divider}
                                    />
                                )}
                            </>
                        )}
                    </NavLink>
                </ListItem>
                <ListItem className={classes.item}>
                    <NavLink
                        to="/diagram"
                        exact
                        activeClassName={classes.active}
                        className={classes.link}
                    >
                        <ReactSVG src={diagram} className={classes.icon} />
                        {isNotMobile && (
                            <>
                                <span className={classes.linkText}>
                                    Статистика
                                </span>
                                {!isDesktop && (
                                    <Divider
                                        orientation="vertical"
                                        flexItem
                                        className={classes.divider}
                                    />
                                )}
                            </>
                        )}
                    </NavLink>
                </ListItem>
                {!isDesktop && (
                    <ListItem className={classes.item}>
                        {isNotMobile ? (
                            <span className={classes.balance}>
                                Баланс: {balance}
                            </span>
                        ) : (
                            <NavLink
                                to="/exchange"
                                exact
                                activeClassName={classes.active}
                                className={classes.link}
                            >
                                <ReactSVG
                                    src={exchange}
                                    className={classes.icon}
                                />
                            </NavLink>
                        )}
                    </ListItem>
                )}
            </List>
            <Paper />
        </>
    );
}

Menu.defaultProps = {
    balance: 0,
};

Menu.propTypes = {
    balance: PropTypes.number,
};
