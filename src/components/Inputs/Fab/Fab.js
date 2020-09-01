import React from 'react';
import Fab from '@material-ui/core/Fab';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { showModal } from '../../../redux/app/appAction';

const useStyles = curTheme =>
    makeStyles(theme => ({
        absolute: {
            position: 'fixed',
            bottom: theme.spacing(2),
            left: '50%',
            transform: 'translateX(-50%)',
            [theme.breakpoints.up('tablet')]: {
                position: 'fixed',
                left: '93%',
                bottom: theme.spacing(3),
            },
            [theme.breakpoints.up('desktop')]: {
                bottom: theme.spacing(9),
            },
        },
        link: {
            color: theme.palette.primary.iconActive,
            display: 'block',
            paddingTop: 7,
        },
    }))(curTheme);

const FabBtn = () => {
    const theme = useTheme();
    const isNotMobile = useMediaQuery(theme.breakpoints.up('tablet'));
    const classes = useStyles(theme);
    const dispatch = useDispatch();
    const onClick = isNotMobile ? () => dispatch(showModal()) : () => '';

    return (
        <Fab onClick={onClick} color="primary" className={classes.absolute}>
            {isNotMobile ? (
                <AddIcon />
            ) : (
                <Link
                    to="/add-transaction"
                    exact="true"
                    className={classes.link}
                >
                    <AddIcon />
                </Link>
            )}
        </Fab>
    );
};

export default FabBtn;
