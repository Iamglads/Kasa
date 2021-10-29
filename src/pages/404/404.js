import React from 'react';
import { Link } from 'react-router-dom';
import './404.css';
class Errors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div className="bloc-404">
                    <div>
                        <p className="text-404">404</p>
                        <p className="text">
                            Oups! La page que vous demandez n'nexiste pas.
                        </p>
                        <Link to="/">
                            <p className="back-home">
                                Retourner à la page d'accueil
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Errors;
