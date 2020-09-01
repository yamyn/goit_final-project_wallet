import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Modal from '@material-ui/core/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { hideModal } from '../../redux/app/appAction';
import { isModalSelector } from '../../redux/app/appSelectors';

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 500,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        border: 'none',
        padding: theme.spacing(2, 4, 3),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
}));

const SimpleModal = ({ children }) => {
    const theme = useTheme();
    const isNotMobile = useMediaQuery(theme.breakpoints.up('tablet'));
    const classes = useStyles();
    const dispatch = useDispatch();
    const isModal = useSelector(isModalSelector);


    return (
        <Modal
            onClose={() => dispatch(hideModal())}
            disableBackdropClick={!isNotMobile}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={isModal}
        >
            <div className={classes.paper}>{children}</div>
        </Modal>
    );
};

export default SimpleModal;
