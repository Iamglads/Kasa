import React from 'react';
import Slider from '../../components/Slider/Slider';
import { useParams } from 'react-router-dom';

import './Single.css';

const Single = ({ data }) => {
    const param = useParams('id');

    const noData = () => {
        return (
            <div className="container__single">
                <div className="single__wrappe">
                    <section className="single__content">
                        <p>Aucun bien à afficher</p>
                    </section>
                </div>
            </div>
        );
    };

    return (
        <div className="container__single">
            <div className="single__wrappe">
                <Slider data={pictures} />
                <section className="single__content">
                    <div className="title">
                        <h1>{title}</h1>
                        <address>{location}</address>
                    </div>
                    <div className="user">
                        {/*  <img src={host.picture} alt={host.name} /> */}
                        {/* <h3>{host.name}</h3> */}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Single;
