import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { similar } from '../../Data/similar';
import ShowSlider from '../../Components/Custom/Sliders/ShowSlider';
import arrow_left from '../../Image/arrow_left.svg';
import play_fill from '../../Image/play_fill.svg';
import share_icon from '../../Image/share_icon.svg';
import plus_icon from '../../Image/plus_icon.svg';
import love_icon from '../../Image/love_icon.svg';
import spmThumb from '../../Image/BBMockImages/spmThumb.png';
import spidermanThumb from '../../Image/BBMockImages/spidermanThumb.png';

const MovieDetails = () => {
    const navigate = useNavigate();

    return (
        <>
            <section className="hero detailsHero">
                <div className="heroBg heroFixed" style={{backgroundImage: `url(${spidermanThumb})`}}>
                    <div className="detailsHero__wrapper">
                        <Link to="/" onClick={() => navigate(-1)}><img src={arrow_left} alt="close" className="close"/></Link>
                        <div className="detailsHero__wrapper__contents">
                            <div className="detailsHero__wrapper__contents__left">
                                <img src="https://image.tmdb.org/t/p/original/osYbtvqjMUhEXgkuFJOsRYVpq6N.jpg" alt="default_image"/>
                            </div>
                            <div className="detailsHero__wrapper__contents__right moviewRight">
                                <h1>
                                    Spider-Man: No Way Home
                                </h1>
                                <div>
                                <h4>Película - 2008 - EUA</h4> 
                                <h2><span>Categorias:</span> Suspenso, Drama, Acción</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="relativeTop detailsTop2">
                {/* Only for parallex! */}
            </section>

            <section className="allEpisodes moview">
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
                    <h2>Resumen</h2>
                    <p>Peter Parker es desenmascarado y por tanto no es capaz de separar su vida normal de los enormes riesgos que conlleva ser un súper héroe. Cuando pide ayuda a Doctor Strange, los riesgos pasan a ser aún más peligrosos, obligándole a descubrir lo que realmente significa ser Spider-Man.</p>
                </div>
            </section>
            
            <section className="crew moview">
                <div className="crewWrapper">
                    <div className="crewWrapper__single">
                        <div className="crewWrapper__single__left">
                            <div className="crewWrapper__single__left__thumb">
                                <h3>Tráiler</h3>
                                <img src={spmThumb} alt="intro" className="thumb"/>
                            </div>
                        </div>
                        <div className="crewWrapper__single__right">
                            <div className="crewWrapper__single__right__info">
                                <h4>Reparto</h4>
                                <p>Tom Holland, Zendaya, Benedict Cumberbatch,Jacob Batalon,Jon Favreau, Jamie Foxx, Willem Dafoe, Alfred Molina, Benedict Wong.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="allEpisodes moview">
                <div className="allEpisodes__body">
                    <div className="allEpisodes__body__contents">
                        <div className="allEpisodes__body__contents__similar">
                            <h2>Más títulos similares a este</h2>
                            <ShowSlider shows={similar} delay={2500} clicks={true}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MovieDetails;