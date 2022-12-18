import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ data }) => {
    const { id, cover, title } = data;
    return (
        <li className="card">
            <Link to={`single/${id}`} className="link">
                <img className="img" src={cover} alt={title} />
                <div className="card-title">
                    <h2>{title || <Skeleton count={1} />}</h2>
                </div>
            </Link>
        </li>
    );
};

export default Card;
