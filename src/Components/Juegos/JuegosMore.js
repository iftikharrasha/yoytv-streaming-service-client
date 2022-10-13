import React from 'react';
import { Link } from 'react-router-dom';
import adbanner6 from '../../Image/adbanner6.png';
import JuegosSlider from '../Custom/Sliders/JuegosSlider';

const JuegosMore = ({allGames, activeGames}) => {
    return (
        <>
            <section className="allEpisodes podcastDetails playerDetails">
                <div className="allEpisodes__body">
                    <div className="allEpisodes__body__contents">
                        <div className="playerDetails__cards">
                            <div className="playerDetails__cards__slider gamesSlider">
                                <div className="allEpisodes__body__contents__similar">
                                    <div>
                                        <div className="playerDetails__cards__slider__title">
                                            <h2>Destacados</h2>
                                            <Link to="/juegos/categories">{`Ver más>`}</Link>
                                        </div>
                                        <JuegosSlider shows={allGames} delay={6000}/>
                                    </div>
                                    <div>
                                        <div className="playerDetails__cards__slider__title">
                                            <h2>Recomendados</h2>
                                            <Link to="/juegos/categories">{`Ver más>`}</Link>
                                        </div>
                                        <JuegosSlider shows={activeGames} delay={6000}/>
                                    </div>
                                </div>
                                <div className="adbanner">
                                    <div className="adbanner__gamesAd1">
                                        <h6>¡Conviértete en <br /> <span>Cliente Digital!</span></h6>
                                        <img src={adbanner6} alt="adBanner" />
                                        <div className="bannerBtn">
                                            <Link to="/ad">{`Hazlo aquí>`}</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default JuegosMore;