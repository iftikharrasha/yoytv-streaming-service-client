import React from 'react';
import { Link } from 'react-router-dom';

const LazyCard = () => {
    const loadCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

    return (
        <>
            {
                loadCards.map((index) => {
                    return <div className="single__card lazyLoader" key={index}>
                                <div className="card__top">
                                    <div className="course__name">
                                        <div className="line line1"></div>
                                        <div className="line line2"></div>
                                    </div>
                                    <div className="line line1"></div>
                                </div>
                                <div className="card-bottom">
                                    <div className="course__progress">
                                        <div className="progress__details">
                                            <div className="line line1"></div>
                                            <div className="line line2"></div>
                                        </div>
                                        <div className="progress__bar">
                                            <div className="progress__inner line1">
                                                <hr />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="course__button">
                                        <button><div className="line line1"></div></button>
                                        <button><div className="line line1"></div></button>
                                    </div>
                                </div>
                            </div>
            })}
        </>
    );
};

export default LazyCard;