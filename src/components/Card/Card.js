import React from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
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
