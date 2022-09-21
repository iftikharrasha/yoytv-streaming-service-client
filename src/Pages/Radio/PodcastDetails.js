import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { podcastEpisodes } from '../../Data/podcastEpisodes.js';
import { radioData } from '../../Data/radioData';
import play_button from '../../Image/play_button.svg';
import arrow_left from '../../Image/arrow_left.svg';
import play_fill from '../../Image/play_fill.svg';
import share_icon from '../../Image/share_icon.svg';
import plus_icon from '../../Image/plus_icon.svg';
import love_icon from '../../Image/love_icon.svg';
import radio from '../../Image/RadioMockImages/radioDetailsLogo.png';
import radioThumb from '../../Image/RadioMockImages/radioThumb.png';
import RadioSlider from '../../Components/Custom/Sliders/RadioSlider.js';

const PodcastDetails = () => {
    const navigate = useNavigate();

    return (
        <>
            <section className="hero detailsHero">
                <div className="heroBg heroFixed" style={{backgroundImage: `url(${radioThumb})`}}>
                    <div className="detailsHero__wrapper">
                        <Link to="/" onClick={() => navigate(-1)}><img src={arrow_left} alt="close" className="close"/></Link>
                        <div className="detailsHero__wrapper__contents">
                            <div className="detailsHero__wrapper__contents__left">
                                <img src={radio} alt="radio"/>
                            </div>
                            <div className="detailsHero__wrapper__contents__right">
                                <h1>
                                    Leyendas Legendarias
                                </h1>
                                <h5>Hermanos Sánchez</h5>
                                <h4>3 temporadas - 2019 - México</h4> 
                                <h2><span>Categorias:</span> Cuentos |  Crímenes reales | Comedia</h2>
                                <p>Un podcast de comedia donde cada semana exploraremos historias de asesinos en serie, fantasmas y eventos históricos peculiares, notorios o fantásticos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="relativeTop detailsTop2">
                {/* Only for parallex! */}
            </section>

            <section className="allEpisodes podcastDetails">
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
                                    <option value="1">De más reciente a más antiguo</option>
                                    <option value="2">De más reciente a más antiguo 2</option>
                                    <option value="3">De más reciente a más antiguo 3</option>
                                    <option value="3">De más reciente a más antiguo 4</option>
                                </select>
                            </div>
                        </div>
                        <ul className="allEpisodes__body__contents__episodes">
                            {
                                podcastEpisodes.map((item) => (
                                <div className="body__contents__episodes__single" key={item.id}>
                                    <div className="body__contents__episodes__single__left">
                                        <div className="body__contents__episodes__single__left__thumb">
                                            <img src={item.thumbnail} alt="intro" className="thumb"/>
                                        </div>
                                    </div>
                                    <div className="body__contents__episodes__single__right">
                                        <div className="body__contents__episodes__single__right__info">
                                            <h4>{item.name}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                        <div className="body__contents__episodes__single__right__time">
                                            <span>{item.time}</span>
                                            <img src={play_button} alt="play_button" className="thumb"/>
                                        </div>
                                    </div>
                                </div>
                                ))
                            }
                        </ul>
                        <div className="allEpisodes__body__contents__similar">
                            <h2>Más títulos similares a este</h2>
                            <RadioSlider shows={radioData} delay={2500} clicks={true}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PodcastDetails;