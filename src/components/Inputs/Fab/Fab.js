import React from 'react';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch } from 'react-redux';
import { showModal } from '../../../redux/app/appAction';

const useStyles = makeStyles(theme => ({
    absolute: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(3),
    },
}));

const FabBtn = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Fab
            onClick={() => dispatch(showModal())}
            color="primary"
            className={classes.absolute}
        >
            <AddIcon />
        </Fab>
    );
};

export default FabBtn;
