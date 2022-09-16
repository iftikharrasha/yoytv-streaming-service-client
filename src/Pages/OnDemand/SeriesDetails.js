import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { breakingEpisodes } from '../../Data/breakingEpisodes.js';
import { similar } from '../../Data/similar';
import ShowSlider from '../../Components/Custom/Sliders/ShowSlider';
import arrow_left from '../../Image/arrow_left.svg';
import play_fill from '../../Image/play_fill.svg';
import share_icon from '../../Image/share_icon.svg';
import plus_icon from '../../Image/plus_icon.svg';
import love_icon from '../../Image/love_icon.svg';
import bbThumb from '../../Image/BBMockImages/bbThumb.png';
import breakingBad from '../../Image/BBMockImages/breakingBad.png';
import breakingBadThumb from '../../Image/BBMockImages/breakingBadThumb.png';

const SeriesDetails = () => {
    const navigate = useNavigate();

    return (
        <>
            <section className="hero detailsHero">
                <div className="heroBg heroFixed" style={{backgroundImage: `url(${breakingBad})`}}>
                    <div className="detailsHero__wrapper">
                        <Link to="/" onClick={() => navigate(-1)}><img src={arrow_left} alt="close" className="close"/></Link>
                        <div className="detailsHero__wrapper__contents">
                            <div className="detailsHero__wrapper__contents__left">
                                <img src={breakingBadThumb} alt="default_image"/>
                            </div>
                            <div className="detailsHero__wrapper__contents__right">
                                <h1>
                                    Breaking Bad
                                </h1>
                                <h5>Series</h5>
                                <h4>5 temporadas - 2008 - EUA</h4> 
                                <h2><span>Categorias:</span> Suspenso, Drama, Acción</h2>
                                <p>Tras cumplir 50 años, Walter White (Bryan Cranston), un profesor de química de un instituto de Albuquerque, Nuevo México, se entera de que tiene un cáncer de pulmón incurable. Casado con Skyler (Anna Gunn) y con un hijo discapacitado (RJ Mitte), la brutal noticia lo impulsa a dar un drástico cambio a su vida: decide, con la ayuda de un antiguo alumno (Aaron Paul), fabricar anfetaminas y ponerlas a la venta. Lo que pretende es liberar a su familia de problemas económicos cuando se produzca el fatal desenlace.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="relativeTop detailsTop">
                {/* Only for parallex! */}
            </section>

            <section className="allEpisodes">
                <div className="allEpisodes__buttons">
                    <ul>
                        <li>
                            <button>
                                <img src={play_fill} alt="play_fill" />
                                <span>Reproducir</span> 
                            </button>
                        </li>
                        <li><img src={love_icon} alt="love" className="love"/></li>
                        <li><img src={share_icon} alt="play" className="play"/></li>
                        <li><img src={plus_icon} alt="add" className="plus"/></li>
                    </ul>
                </div>
                <div className="allEpisodes__body">
                    <div className="allEpisodes__body__contents">
                        <div className="allEpisodes__body__contents__title">
                            <h2>Episodios</h2>
                            <div className="input-group">
                                <select className="custom-select" id="selectEpisode" defaultValue={1}>
                                    <option value="1">Temporada 1</option>
                                    <option value="2">Temporada 2</option>
                                    <option value="3">Temporada 3</option>
                                    <option value="3">Temporada 4</option>
                                </select>
                            </div>
                        </div>
                        <ul className="allEpisodes__body__contents__episodes">
                            {
                                breakingEpisodes.map((item) => (
                                <div className="allEpisodes__body__contents__episodes__single" key={item.id}>
                                    <div className="allEpisodes__body__contents__episodes__single__left">
                                        <span>{item.no}</span>
                                        <div className="allEpisodes__body__contents__episodes__single__left__thumb">
                                            <img src={item.thumbnail} alt="intro" className="thumb"/>
                                        </div>
                                    </div>
                                    <div className="allEpisodes__body__contents__episodes__single__right">
                                        <div className="allEpisodes__body__contents__episodes__single__right__info">
                                            <h4>{item.name}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                        <span>{item.time} min</span>
                                    </div>
                                </div>
                                ))
                            }
                        </ul>
                        <div className="allEpisodes__body__contents__similar">
                            <h2>Más títulos similares a este</h2>
                            <ShowSlider shows={similar} delay={2500} clicks={true}/>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="crew">
                <div className="crewWrapper">
                    <div className="crewWrapper__single">
                        <div className="crewWrapper__single__left">
                            <div className="crewWrapper__single__left__thumb">
                                <img src={bbThumb} alt="intro" className="thumb"/>
                            </div>
                        </div>
                        <div className="crewWrapper__single__right">
                            <div className="crewWrapper__single__right__info">
                                <h4>Resumen:</h4>
                                <p>A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.</p>
                            </div>
                            <div className="crewWrapper__single__right__info">
                                <h4>Creador:</h4>
                                <p>Vince Gilligan</p>
                            </div>
                            <div className="crewWrapper__single__right__info">
                                <h4>Reparto:</h4>
                                <p>Bryan Cranston ,  Anna Gunn ,  Aaron Paul ,  Dean Norris ,  Betsy Brandt ,  RJ Mitte <br />
                                Bob Odenkirk ,  Giancarlo Esposito , Jonathan Banks ,  Laura Fraser , Jesse Plemons</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SeriesDetails;