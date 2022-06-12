import React from 'react';
import { Link } from 'react-router-dom';
import { shows } from "../../Data/shows.js";
import ShowSlider from '../Custom/Sliders/ShowSlider';

const OnDemands = () => {
    const onDemandShows = shows.filter(show => show.onDemand === true);

    return (
        <>
            <section className="onDemand">
                <div className="wrapper">
                    <div className="onDemand__title">
                        <h2>On Demand</h2>
                        <Link to="/onDemand">{`Ver más>`}</Link>
                    </div>
                </div>
                <ShowSlider shows={onDemandShows} delay={4500}/>
            </section>
        </>
    );
};

export default OnDemands;