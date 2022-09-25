import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { radioData } from '../../Data/radioData';
import Sound from '../../Image/Soundbutton.svg';
import Love from '../../Image/Lovebutton.svg';
import Share from '../../Image/Sharebutton.svg';
import pause from '../../Image/Pausebutton.svg';
import seasonsPlayerThumb from '../../Image/RadioMockImages/seasonsPlayerThumb.png';
import badBunny from '../../Image/RadioMockImages/badBunny.png';
import rauw from '../../Image/RadioMockImages/rauw.png';
import shakira from '../../Image/RadioMockImages/shakira.png';
import RadioSlider from '../../Components/Custom/Sliders/RadioSlider.js';
import adbanner3 from '../../Image/adbanner3.png';
import adbanner4 from '../../Image/adbanner4.png';
import arrow from '../../Image/arrow-left-white.svg';

const EstacionesPlayer = () => {
    const navigate = useNavigate();

    return (
        <>
            <section className="hero detailsHero playerHero">
                <div className="heroBg">
                    <div className="list">
                        <Link to="/" className="title" onClick={() => navigate(-1)}><img src={arrow} alt={arrow} />Estaciones</Link>
                    </div>
                    <div className="detailsHero__wrapper">
                        <div className="detailsHero__wrapper__contents">
                            <div className="detailsHero__wrapper__contents__left">
                                <img src={seasonsPlayerThumb} alt="radio"/>
                                <h1>Pop en Español</h1>
                            </div>
                            <div className="detailsHero__wrapper__contents__right">
                                <h6>Canciones anteriores</h6>
                                
                                <ul className="episodes">
                                    <li className="episodes__single">
                                        <div className="episodes__single__left">
                                            <div className="episodes__single__left__thumb">
                                                <img src={badBunny} alt="badBunny" className="thumb"/>
                                            </div>
                                        </div>
                                        <div className="episodes__single__right">
                                            <div className="episodes__single__right__info">
                                                <h4>Tití Me Preguntó</h4>
                                                <p>Bad Bunny</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="episodes__single">
                                        <div className="episodes__single__left">
                                            <div className="episodes__single__left__thumb">
                                                <img src={rauw} alt="rauw" className="thumb"/>
                                            </div>
                                        </div>
                                        <div className="episodes__single__right">
                                            <div className="episodes__single__right__info">
                                                <h4>Todo De Ti</h4>
                                                <p>Rauw Alejandro</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="episodes__single">
                                        <div className="episodes__single__left">
                                            <div className="episodes__single__left__thumb">
                                                <img src={shakira} alt="shakira" className="thumb"/>
                                            </div>
                                        </div>
                                        <div className="episodes__single__right">
                                            <div className="episodes__single__right__info">
                                                <h4>Te Felicito</h4>
                                                <p>Shakira / Rauw Alejandro</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='detailsHero__wrapper__settings'>
                            <div className="left">
                                <img src={pause} alt="pause" />
                                <p><span>Ahora suena:</span> Ya No Somos Ni Seremos - Christian Nodal</p>
                            </div>
                            <div className="right">
                                <img src={Sound} alt="Sound" className='sound'/>
                                <img src={Love} alt="Love" />
                                <img src={Share} alt="Share" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="allEpisodes podcastDetails playerDetails">
                <div className="allEpisodes__body">
                    <div className="allEpisodes__body__contents">
                        <div className="playerDetails__cards">
                            <div className="playerDetails__cards__slider">
                                <div className="allEpisodes__body__contents__similar">
                                    <div className="playerDetails__cards__slider__title">
                                        <h2>Estaciones recomendadas</h2>
                                        <Link to="/estaciones">{`Ver más>`}</Link>
                                    </div>
                                    <RadioSlider shows={radioData} delay={2500}/>
                                </div>
                                <div className="adbanner">
                                    <img src={adbanner4} alt="adbanner4"/>
                                </div>
                            </div>
                        </div>

                        <div className="playerDetails__cards">
                            <div className="playerDetails__cards__slider">
                                <div className="allEpisodes__body__contents__similar">
                                    <div className="playerDetails__cards__slider__title">
                                        <h2>Podcast recomendados</h2>
                                        <Link to="/podcast">{`Ver más>`}</Link>
                                    </div>
                                    <RadioSlider shows={radioData} delay={2500} clicks={true} podcast={true}/>
                                </div>
                                <div className="adbanner">
                                    <img src={adbanner3} alt="adbanner3"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EstacionesPlayer;