import React from 'react';
import { Link } from 'react-router-dom';
import './404.css';

const Errors = () => {
    return (
        <div className="bloc-404">
            <div className="wrapper">
                <p className="text-404">404</p>
                <p className="text">
                    Oups! La page que vous demandez n'existe pas.
                </p>
                <Link to="/">
                    <p className="back-home">Retourner à la page d'accueil</p>
                </Link>
            </div>
        </div>
    );
};

export default Errors;
