import React, { useState, useEffect } from 'react';
import Slider from '../../components/Slider/Slider';
import Accodeon from '../../components/Accordeon/Accordeon';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

import './Single.css';

const Single = ({ data }) => {
    const params = useParams();

    const dataID = data.find(({ id }) => id === params.id);

    const {
        pictures,
        title,
        location,
        description,
        equipements,
        host,
        rating,
        tags,
    } = dataID;

    return (
        <div className="container__single">
            <div className="single__wrappe">
                <Slider pictures={pictures} />
                <section className="single__content">
                    <div className="single__content--header">
                        <div className="title">
                            <h1>{title}</h1>
                            <address>{location}</address>
                            <ul className="tags">
                                {tags.map((tag, index) => {
                                    return (
                                        <li className="tag-item" key={index}>
                                            {tag}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="user">
                            <div className="user--name">
                                <h3>{host.name}</h3>
                                <img src={host.picture} alt={host.name} />
                            </div>
                            <div className="reviews">
                                <FaStar className="icon-reviews" />
                                <FaStar className="icon-reviews" />
                                <FaStar className="icon-reviews" />
                                <FaRegStar className="icon-reviews" />
                                <FaRegStar className="icon-reviews" />
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <Accodeon
                            className="description"
                            content={description}
                        />
                        <Accodeon
                            className="equipements"
                            content={description}
                        />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Single;
