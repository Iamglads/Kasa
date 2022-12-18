import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-blanc.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <Link to="/" className="footer-logo">
                    <img src={logo} alt="logo-kasa" />
                </Link>
                <div className="footer-allRights">
                    <p>©Kasa. Gladston Aristoverne - All rights reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
