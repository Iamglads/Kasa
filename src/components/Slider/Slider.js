import React from 'react';
import './Slider.css';
import nextImage from '../../assets/right.png';
import prevImage from '../../assets/left.png';

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    _nextImage() {
        console.log('next');
    }

    _prevImage() {
        console.log('Prev');
    }

    render() {
        return (
            <header>
                <img
                    className="prev"
                    src={prevImage}
                    alt=""
                    onClick={this._prevImage}
                />
                <img
                    className="image-slider"
                    src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
                    alt=""
                />
                <img
                    className="next"
                    src={nextImage}
                    alt=""
                    onClick={this._nextImage}
                />
            </header>
        );
    }
}

export default Slider;
