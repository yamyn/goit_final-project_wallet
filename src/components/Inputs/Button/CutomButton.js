import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './CustomButton.module.css';

const CustomButton = ({ title, type, onClick }) => {
    const style = () => {
        return type === 'main' ? styles.main : styles.secondary;
    };

    return (
        <>
            <Button
                className={style()}
                fullWidth
                variant="contained"
                onClick={onClick}
                type={type}
            >
                {title}
            </Button>
        </>
    );
};

export default CustomButton;
