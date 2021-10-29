import React from 'react';
import './App.css';
import Header from '../../components/Header/Header';
import background from '../../assets/background.png';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Chez vous, partout et ailleurs',
        };
    }

    renderList() {}
    render() {
        return (
            <div className="App">
                <Header text={this.state.text} background={background} />
            </div>
        );
    }
}

export default App;
