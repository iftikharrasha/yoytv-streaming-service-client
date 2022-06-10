import React from 'react';
import { Link } from 'react-router-dom';
import { shows } from "../../Data/shows.js";
import ShowSlider from '../Custom/Sliders/ShowSlider';

const Recommended = () => {
    const recommendedShows = shows.filter(show => show.recommended === true);
    
    return (
        <>
            <section className="recommended">
                <div className="wrapper">
                    <div className="recommended__title">
                        <h2>Recomendado para ti</h2>
                        <Link to="/recommended">{`Ver máss>`}</Link>
                    </div>
                </div>
                <ShowSlider shows={recommendedShows} delay={2000}/>
            </section>
        </>
    );
};

export default Recommended;