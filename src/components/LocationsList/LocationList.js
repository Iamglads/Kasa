import React from 'react';
import Card from '../../components/Card/Card';
import './LocationList.css';

class LocationList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderLocations() {}

    render() {
        return (
            <div className="container">
                <ul className="location__list">
                    {this.props.data.map((single) => (
                        <Card key={single.id} data={single} />
                    ))}
                </ul>
            </div>
        );
    }
}

export default LocationList;
