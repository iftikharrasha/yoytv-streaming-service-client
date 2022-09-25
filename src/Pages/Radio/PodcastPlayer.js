import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { radioData } from '../../Data/radioData';
import play_fill from '../../Image/play_fill.svg';
import Sound from '../../Image/Soundbutton.svg';
import Love from '../../Image/Lovebutton.svg';
import Share from '../../Image/Sharebutton.svg';
import pause from '../../Image/Pausebutton.svg';
import podcastPlayerThumb from '../../Image/RadioMockImages/podcastPlayerThumb.png';
import RadioSlider from '../../Components/Custom/Sliders/RadioSlider.js';
import adbanner3 from '../../Image/adbanner3.png';
import adbanner4 from '../../Image/adbanner4.png';
import arrow from '../../Image/arrow-left-white.svg';

const PodcastPlayer = () => {
    const navigate = useNavigate();
    const {id} = useParams();

    return (
        <>
            <section className="hero detailsHero playerHero">
                <div className="heroBg">
                    <div className="list">
                        <Link to="/" className="title" onClick={() => navigate(-1)}><img src={arrow} alt={arrow} />Podcast</Link>
                    </div>
                    <div className="detailsHero__wrapper">
                        <div className="detailsHero__wrapper__contents">
                            <div className="detailsHero__wrapper__contents__left">
                                <img src={podcastPlayerThumb} alt="radio"/>
                                <h1>
                                    Leyendas Legendarias
                                </h1>
                            </div>
                            <div className="detailsHero__wrapper__contents__right">
                                <h5>Acerca de Leyendas Legendarias</h5>
                                <p>Un podcast de comedia donde cada semana exploraremos historias de asesinos en serie, fantasmas y eventos históricos peculiares, notorios o fantásticos.</p>
                                <h2><span>Categorias:</span> Cuentos |  Crímenes reales | Comedia</h2>
                                <Link to={`/podcast/details/`+id}>
                                    <button>
                                            <img src={play_fill} alt="play_fill" />
                                            <span>Más episodios</span> 
                                    </button>
                                </Link>
                                
                                <ul className="episodes">
                                    <li className="episodes__single">
                                        <div className="episodes__single__left">
                                            <div className="episodes__single__left__thumb">
                                                <img src={podcastPlayerThumb} alt="intro" className="thumb"/>
                                            </div>
                                        </div>
                                        <div className="episodes__single__right">
                                            <div className="episodes__single__right__info">
                                                <h4>Trailer</h4>
                                                <p>2 min 20 s</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='detailsHero__wrapper__settings'>
                            <div className="left">
                                <img src={pause} alt="pause" />
                                <p><span>Ahora suena:</span> E 153 - Bonnie y Clyde Pt 1 | Leyendas Legendarias</p>
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
                    </div>
                </div>
            </section>
        </>
    );
};

export default PodcastPlayer;