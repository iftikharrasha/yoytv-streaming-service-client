import React from 'react';
import { Link } from 'react-router-dom';
import { shows } from "../../Data/shows.js";
import ShowSlider from '../Custom/Sliders/ShowSlider';

const Recents = () => {
    const recentShows = shows.filter(show => show.recent === true);
    
    return (
        <>
            <section className="recent">
                <div className="wrapper">
                    <div className="recent__title">
                        <h2>Lanzamientos recientes</h2>
                        <Link to="/recent">{`Ver más>`}</Link>
                    </div>
                </div>
                <ShowSlider shows={recentShows} delay={4500}/>
            </section>
        </>
    );
};

export default Recents;