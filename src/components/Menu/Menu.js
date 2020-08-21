import React from 'react';
import { NavLink } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import HomeIcon from '@material-ui/icons/Home';
import { ReactSVG } from 'react-svg';
import TimelineIcon from '@material-ui/icons/Timeline';
import useStyles from './MenuStyle';
import home from '../../img/icons/home/baseline-home-24px.svg';
import diagram from '../../img/icons/diagrams/baseline-timeline-24px.svg';
import exchange from '../../img/icons/currency exchange/baseline-attach_money-24px.svg';

// eslint-disable-next-line react/prop-types
export default function Menu() {
    const { classes, isNotMobile } = useStyles();
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
                    </NavLink>
                </ListItem>
                <ListItem className={classes.item}>
                    <NavLink
                        to="/exchange"
                        exact
                        activeClassName={classes.active}
                        className={classes.link}
                    >
                        <ReactSVG src={exchange} className={classes.icon} />
                    </NavLink>
                </ListItem>
            </List>
            <Paper />
        </>
    );
}
