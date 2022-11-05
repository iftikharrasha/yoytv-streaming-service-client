import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Sound from '../../Image/Soundbutton.svg';
import fullscreen from '../../Image/fullscreen.svg';
import Love from '../../Image/Lovebutton.svg';
import Share from '../../Image/Sharebutton.svg';
import arrow from '../../Image/arrow-left-white.svg';
import GameModal from "../Custom/Modals/GameModal";
import adbanner3 from '../../Image/adbanner3.png';
import mouse from '../../Image/left-click.svg';
import keyboard from '../../Image/arrows.svg';
import gamebtn from '../../Image/game-btn.svg';
import touch from '../../Image/tap.svg';
import RectangularAdIframe from "Components/Custom/Ads/RectangularAdIframe";


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

                                <h5>{nowPlaying.description}</h5>

                                <ul>
                                    <li>
                                        <p>{nowPlaying.desktop_instructions}</p>
                                        {
                                            nowPlaying.desktop_control === "1" ? <img src={mouse} alt="mouse"/> :
                                            nowPlaying.desktop_control === "2" ? <img src={keyboard} alt="keyboard"/> :
                                            null
                                        }
                                    </li>
                                    <li>
                                        <p>{nowPlaying.movil_instructions}</p>
                                        {
                                            nowPlaying.movil_control === "1" ? <img src={touch} alt="touch"/> :
                                            nowPlaying.movil_control === "2" ? <img src={touch} alt="touch"/> :
                                            null
                                        }
                                    </li>
                                </ul>
                            </div>
                            <div className="adbanner">
                                {/* <img src={adbanner3} alt="adbanner3"/> */}
                                <RectangularAdIframe/>
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