import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Accordeon.css';

const Accordeon = ({ content }) => {
    const [toggle, setToggle] = useState(false);
    const { title, desc } = content;
    return (
        <>
            <div className="wrappe">
                <div className="wrappe__content">
                    <h2> {title}</h2>
                    <button
                        type="button"
                        className="btn-toggle"
                        onClick={() => setToggle(!toggle)}
                    >
                        {toggle ? (
                            <FaChevronDown className="icon" />
                        ) : (
                            <FaChevronUp className="icon" />
                        )}
                    </button>
                </div>
            </div>
            {toggle ? (
                <div className="wrappe__text">
                    <p> {desc}</p>
                </div>
            ) : null}
        </>
    );
};

export default Accordeon;
