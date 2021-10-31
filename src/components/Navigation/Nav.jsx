import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-kasa.png';
import './Nav.css';

class Nav extends React.Component {
    render() {
        return (
            <div className="container__nav">
                <nav className="main-nav">
                    <div className="main-nav-img">
                        <img src={logo} alt="logo-kaza" />
                    </div>
                    <div className="links">
                        <Link className="link" to="/">
                            Accueil
                        </Link>
                        <Link className="link" to="/about">
                            A Propos
                        </Link>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;
