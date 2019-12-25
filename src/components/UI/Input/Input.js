import React from 'react';
import PropTypes from 'prop-types';

import './Input.css';

const Input = ({ type = 'text', onChange, value, className='Input' }) => (
        <input 
            className={className}
            value={value}
            onChange={onChange}
         />
)

Input.propTypes = {
    value: PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
};

export default Input; 