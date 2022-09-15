import React from 'react';
import { Link } from 'react-router-dom';
import love from '../../Image/love_icon.svg';
import share from '../../Image/share_icon.svg';
import plus from '../../Image/plus_icon.svg';
import play from '../../Image/play_blue.svg';
import doctorStrange from '../../Image/doctor-strange.png';

const OnDemandHero = ({landingData, loggedInUser}) => {
    const { home_page_bg_image, site_logo, home_banner_heading } = landingData;

    return (
            <>
                <section className="hero onDemandHero">
                    <div className="heroBg heroFixed" style={{backgroundImage: `url(${doctorStrange})`}}>
                        <div className="heroBg__contents">
                            <div className="heroBg__contents__text">
                                <h1>Doctor Strange en el multiverso de la locura</h1>
                                <h2>Viaja a lo desconocido con el Doctor Strange, quien, con la ayuda de tanto antiguos como nuevos aliados místicos, recorre las complejas y peligrosas realidades alternativas del multiverso para enfrentarse a un nuevo y misterioso adversario.</h2>
                                <h4>2022
                                    <span>PG-13</span>
                                    2h 6m
                                </h4>
                                <ul>
                                    <li>
                                        <button>
                                            <span><img src={play} alt="play" /> Reproducir</span> 
                                        </button>
                                    </li>
                                    <li>
                                        <button className='secondary'>
                                            <span>Tráiler</span> 
                                        </button>
                                    </li>
                                    <li>
                                        <img src={love} alt="love" className='love'/>
                                    </li> 
                                    <li>
                                        <img src={share} alt="share" />
                                    </li> 
                                    <li>
                                        <img src={plus} alt="plus" />
                                    </li> 
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
};

export default OnDemandHero;