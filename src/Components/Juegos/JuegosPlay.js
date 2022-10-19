import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Sound from '../../Image/Soundbutton.svg';
import fullscreen from '../../Image/fullscreen.svg';
import Love from '../../Image/Lovebutton.svg';
import Share from '../../Image/Sharebutton.svg';
import arrow from '../../Image/arrow-left-white.svg';
import GameModal from "../Custom/Modals/GameModal";
import adbanner3 from '../../Image/adbanner3.png';
import leftClick from '../../Image/left-click.svg';
import gamebtn from '../../Image/game-btn.svg';
import tap from '../../Image/tap.svg';


const JuegosPlay = ({nowPlaying}) => {
    const [gameShow, setGameShow] = useState(false);

    return (
        <>
            <section className="hero detailsHero playerHero gameHero">
                <div className="heroBg">
                    <div className="list">
                        <Link to="/juegos/categories" className="title"><img src={arrow} alt={arrow} />Categorías  |  
                            {
                                nowPlaying.category.map((category, index) => {
                                    return (
                                        <span key={index} className="category"> {category}</span>
                                    )})
                            }
                        </Link>
                    </div>
                    <div className="detailsHero__wrapper game__wrapper">
                        <div className="game__wrapper__left">
                            <div className="detailsHero__wrapper__contents">
                                <div className="detailsHero__wrapper__contents__left" onClick={() => setGameShow(true)}>
                                    <img src={nowPlaying.image} alt="game"/>
                                    <p>
                                        Toca para empezar a jugar
                                    </p>
                                </div>
                                <img src={gamebtn} alt="gamebtn" className="game-btn" onClick={() => setGameShow(true)}/>
                            </div>
                            <div className='detailsHero__wrapper__settings'>
                                <div className="left">
                                    <p><span>{nowPlaying.name}</span></p>
                                    <div className="buttons">
                                        {/* <img src={Sound} alt="Sound" className='sound'/> */}
                                        <img src={Love} alt="Love" />
                                        <img src={Share} alt="Share" />
                                        <img src={fullscreen} alt="fullscreen" onClick={() => setGameShow(true)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="game__wrapper__right">
                            <div className="instructions">
                                <h4>Cómo jugar</h4>

                                <h5>{nowPlaying.desktop_instructions}</h5>

                                <ul>
                                    <li>
                                        <p>Usa el clic del mouse <br />para moverte</p>
                                        <img src={leftClick} alt="leftClick"/>
                                    </li>
                                    <li>
                                        <p>Toca sobre la pantalla<br /> para moverte</p>
                                        <img src={tap} alt="tap"/>
                                    </li>
                                </ul>
                            </div>
                            <div className="adbanner">
                                <img src={adbanner3} alt="adbanner3"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <GameModal gameShow={gameShow} setGameShow={setGameShow} nowPlaying={nowPlaying}/>
        </>
    );
};

export default JuegosPlay;