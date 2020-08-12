import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const CustomSelect = ({ data }) => {
    const [value, setValue] = React.useState('');

    const handleChange = event => {
        setValue(event.target.value);
    };

    return (
        <Select value={value} onChange={handleChange}>
            {data.map(item => (
                <MenuItem value={item} key={item}>
                    {item}
                </MenuItem>
            ))}
        </Select>
    );
};

export default CustomSelect;
