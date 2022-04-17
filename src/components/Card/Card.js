import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const id = this.props.data.id;
        console.log(this.props.data.id);
        return (
            <Link
                to={'/single/' + id}
                className="card"
                style={{
                    backgroundImage: `url(${this.props.data.cover})`,
                    textDecoration: 'none',
                }}
            >
                <h2 className="card-title">{this.props.data.title}</h2>
            </Link>
        );
    }
}

export default Card;
