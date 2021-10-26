import React from 'react';
import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="header">
                <div>
                    <h1>Chez vous, partout et ailleurs</h1>
                </div>
            </div>
        );
    }
}

export default Header;
