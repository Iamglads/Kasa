import React from 'react';
import './App.css';
import Header from '../../components/Header/Header';
import LocationList from '../../components/LocationsList/LocationList';
import background from '../../assets/background.png';
import DataLocation from '../../data.json';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Chez vous, partout et ailleurs',
            data: DataLocation,
        };
    }

    renderLocations() {}
    render() {
        return (
            <div className="App">
                <Header text={this.state.text} background={background} />
                <LocationList data={this.state.data} />
            </div>
        );
    }
}

export default App;
