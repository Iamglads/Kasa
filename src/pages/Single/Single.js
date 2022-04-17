import React from 'react';
import Slider from '../../components/Slider/Slider';
import Accordeon from '../../components/Accordeon/Accordeon';
import './Single.css';

class Single extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: new URLSearchParams(window.location.search),
        };
    }

    render() {
        console.log(this.state);
        const description = 'Description';
        const equipements = 'Équipements';
        return (
            <div className="container__single">
                <div className="single__wrappe">
                    <Slider />
                    <section>
                        <div className="title">
                            <h1>Cozy loft on the Canal Saint-Martin</h1>
                            <address>Paris, Île-de-France</address>
                        </div>
                        <div className="user"></div>
                    </section>
                    <section className="description">
                        <Accordeon title={description} />
                        <Accordeon title={equipements} />
                    </section>
                </div>
            </div>
        );
    }
}

export default Single;
