import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ShowSlider from '../../Components/Custom/Sliders/ShowSlider';
import arrow_left from '../../Image/arrow_left.svg';
import banner_image from '../../Image/stranger_things_cover.png';
import play_fill from '../../Image/play_fill.svg';
import share_icon from '../../Image/share_icon.svg';
import plus_icon from '../../Image/plus_icon.svg';
import love_icon from '../../Image/love_icon.svg';
import { episodes } from '../../Data/episodes.js';
import { similar } from '../../Data/similar';
import { details } from '../../Data/singleDetails';

const Details = () => {
    const navigate = useNavigate();

    return (
        <>
            <section className="hero detailsHero">
                <div className="heroBg heroFixed" style={{backgroundImage: `url(${banner_image})`}}>
                    <div className="detailsHero__wrapper">
                        <Link to="/" onClick={() => navigate(-1)}><img src={arrow_left} alt="close" className="close"/></Link>
                        <div className="detailsHero__wrapper__contents">
                            <div className="detailsHero__wrapper__contents__left">
                                <img src={details.data[0].default_image} alt="default_image"/>
                            </div>
                            <div className="detailsHero__wrapper__contents__right">
                                <h1>
                                    {details.data[0].title}
                                </h1>
                                <h5>Series</h5>
                                <h4>4 temporadas - 2016 - EUA</h4> 
                                <h2><span>Categorias:</span> Terror. Suspenso. Misterio. Fantasía.</h2>
                                <p>{details.data[0].description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="relativeTop">
                {/* Only for landing parallex! */}
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
                                episodes.map((item) => (
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
        </>
    );
};

export default Details;