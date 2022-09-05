import React, { useState } from 'react';
import './App.css';
import Header from '../../components/Header/Header';
import LocationList from '../../components/LocationsList/LocationList';
import background from '../../assets/background.png';
import DataLocation from '../../data.json';

const App = () => {
    const [headerTitle, setHeaderTitle] = useState(
        'Chez vous, partout et ailleurs'
    );
    const [data, setData] = useState(DataLocation);

    return (
        <main className="App">
            <div className="App-wrappe">
                <Header text={headerTitle} background={background} />
                <LocationList data={data} />
            </div>
        </main>
    );
};

export default App;
