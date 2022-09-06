import React, { useState } from 'react';
import './Slider.css';
import nextImage from '../../assets/right.png';
import prevImage from '../../assets/left.png';

const Slider = ({ data }) => {
    const [index, setIndex] = useState([0]);

    const next = () => {
        console.log('next');
    };

    const prev = () => {
        console.log('Prev');
    };

    return (
        <header
            style={{
                backgroundImage: `url(${index})`,
            }}
        >
            <img
                className="image-slider"
                src={prevImage}
                alt="prev"
                onClick={() => prev}
            />
            <img
                className="image-slider"
                src={nextImage}
                alt="next"
                onClick={() => next}
            />
        </header>
    );
};

export default Slider;
