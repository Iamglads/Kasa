import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-kasa.png';

class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <div>
            <img src={logo} alt="logo-kaza" />
          </div>
          <Link to="/">Accueil</Link>
          <Link to="/about">A Propos</Link>
        </nav>
      </div>
    );
  }
}

export default Nav;
