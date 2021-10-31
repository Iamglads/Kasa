import React from 'react';
import './Card.css';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log(this.props);
        return (
            <li
                className="card"
                style={{
                    backgroundImage: `url(${this.props.data.cover})`,
                }}
            >
                <h2 className="card-title">{this.props.data.title}</h2>
            </li>
        );
    }
}

export default Card;
