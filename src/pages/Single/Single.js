import React from 'react';

class Single extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <li> {this.props.data.title}</li>
            </div>
        );
    }
}

export default Single;
