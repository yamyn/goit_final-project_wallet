import React from 'react';
import { TextField, InputAdornment } from '@material-ui/core';
import { Mail, Lock, AccountBox } from '@material-ui/icons';
import styles from './Input.module.css'

const Input = ({ withIcon, type, placeholder, errorText, value, onChange, name }) => {
    const rootStyles = () => {
        return withIcon ? styles.withIcon : styles.default
    }

    return (
        <div className={styles.container}>
            <TextField
                className={rootStyles()}
                variant="outlined"
                placeholder={placeholder}
                type={type}
                fullWidth
                error={!!errorText}
                name={name}
                value={value}
                onChange={onChange}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            {type === 'email' ? <Mail /> : type === 'password' ? <Lock /> : <AccountBox />}
                        </InputAdornment>
                    ),
                }}
            />
            {!!errorText && <span className={styles.errorText}>{ errorText }</span>}
        </div>
    )
};

export default Input;
