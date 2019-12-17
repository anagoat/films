import React from 'react';

import './Footer.css';

const Footer = () => {
    return (
        <div className="Footer">
            <h2>Footer</h2>
            <strong>All Rights Reserved, { new Date().getFullYear() }</strong>
        </div>
    );
};


export default Footer;