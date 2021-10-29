import React from 'react';
import Header from '../../components/Header/Header';
import background from '../../assets/background2.png';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Header background={background} />
            </div>
        );
    }
}

export default About;
