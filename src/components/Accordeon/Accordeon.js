import React from 'react';
import './Accordeon.css';

class CardAbout extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: true };
    }

    ifOpen() {}

    render() {
        return (
            <div>
                <div className="wrappe__title">
                    <h2> {this.props.title}</h2>
                    <span>
                        {this.state.isOpen ? (
                            <i className="fas fa-chevron-down"></i>
                        ) : (
                            <i className="fas fa-chevron-up"></i>
                        )}
                    </span>
                </div>
                <div className="wrappe__text">
                    <p> {this.props.text}</p>
                </div>
            </div>
        );
    }
}

export default CardAbout;
