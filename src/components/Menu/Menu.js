import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import HomeIcon from '@material-ui/icons/Home';
import TimelineIcon from '@material-ui/icons/Timeline';
import styles from './Menu.module.css';

// eslint-disable-next-line react/prop-types
export default function Menu({ onClick }) {
    return (
        <div className={styles.root}>
            <Paper elevation={3} />
            <List component="nav" aria-label="menu">
                <ListItem button onClick={onClick}>
                    <ListItemIcon>
                        <HomeIcon className={styles.icon} />
                    </ListItemIcon>
                    <ListItemText className={styles.text} primary="Главная" />
                </ListItem>
                <ListItem button onClick={onClick}>
                    <ListItemIcon className={styles.icon}>
                        <TimelineIcon className={styles.icon} />
                    </ListItemIcon>
                    <ListItemText
                        className={styles.text}
                        primary="Статистика"
                    />
                </ListItem>
            </List>
            <Paper />
        </div>
    );
}
