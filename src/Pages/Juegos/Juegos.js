import React from "react";
import logoGreen from '../../Image/LogoGreen.svg';
import juegosBg from '../../Image/juegosBg.png';
import { Link } from 'react-router-dom';
import { gameData } from '../../Data/juegosData';
import adbanner6 from '../../Image/adbanner6.png';
import adBanner from '../../Image/adbanner1.png';
import JuegosSlider from "../../Components/Custom/Sliders/JuegosSlider";
import useGamesData from "../../Utilities/Hooks/useGamesData";

const Juegos = () => {
    const { allGames, activeGames } = useGamesData();

    return (
        <> 
            <section className="hero radioHero">
                <div className="heroBg heroFixed" style={{backgroundImage: `url(${juegosBg})`}}>
                    <div className="wrapper heroBg__contents">
                        <div className="heroBg__contents__text">
                            <img src={logoGreen} alt="site_logo" width="200" height="99" data-aos="fade" data-aos-offset="0" data-aos-delay="400" data-aos-duration="1000" data-aos-once="true"/>
                            <h1 data-aos="fade" data-aos-offset="0" data-aos-delay="600" data-aos-duration="1000" data-aos-once="true">Juegos retro</h1>
                            <h2 data-aos="fade" data-aos-delay="800" data-aos-offset="0" data-aos-duration="1000" data-aos-once="true"><span>Gratis</span></h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relativeTop radioTop">
                {/* Only for landing parallex! */}
            </section>

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

export default Juegos;