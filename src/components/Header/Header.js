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
                <div
                    className="header__wrappe"
                    style={{
                        backgroundImage: `url(${this.props.background})`,
                    }}
                >
                    <div>
                        <h1> {this.props.text} </h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
