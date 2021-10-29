import React from 'react';
import logo from '../../assets/logo-blanc.png';
import './Footer.css';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="footer">
                <div>
                    <div className="footer-logo">
                        <img src={logo} alt="logo-kasa" />
                    </div>
                    <div className="footer-allRights">
                        <p>© Kasa. All rights reserved</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
