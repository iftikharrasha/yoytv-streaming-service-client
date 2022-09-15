import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import love from '../../Image/love_icon.svg';
import share from '../../Image/share_icon.svg';
import plus from '../../Image/plus_icon.svg';
import play from '../../Image/play_blue.svg';
import doctorStrange from '../../Image/doctor-strange.png';
import wlakingDead from '../../Image/wlaking-dead.png';
import house from '../../Image/house.png';

const OnDemandHero = ({landingData}) => {
    const { home_page_bg_image, site_logo, home_banner_heading } = landingData;

    return (
            <>
                <section className="hero onDemandHero">
                    <div className="heroFixed">

                        <div className="hero__slider">

                            <Swiper
                                // loop={true}
                                grabCursor={true}
                                centeredSlides={false}
                                pagination={false}
                                breakpoints={{
                                    320: {
                                        slidesPerView: '1',
                                    },
                                    640: {
                                        slidesPerView: '1',
                                    },
                                    992: {
                                        slidesPerView: '1',
                                    },
                                    1300: {
                                        slidesPerView: '1'
                                    }
                                }}
                                navigation
                                autoplay= {{ delay: 5000 }}
                                modules={[Navigation, Pagination, Autoplay]}
                                className="onDemand_slider"
                            >
                                <SwiperSlide>
                                    <div className="heroBg hero__slider__single" style={{backgroundImage: `url(${doctorStrange})`}}>
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
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="heroBg hero__slider__single" style={{backgroundImage: `url(${wlakingDead})`}}>
                                        <div className="heroBg__contents">
                                            <div className="heroBg__contents__text">
                                                <h1>The Walking Dead</h1>
                                                <h2>“The Walking Dead” está ambientada en un futuro apocalíptico con la Tierra devastada por el efecto de un cataclismo, que ha provocado la mutación en zombies de la mayor parte de los habitantes del planeta.</h2>
                                                <h4>2010
                                                    <span>TV-MA</span>
                                                    42m
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
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="heroBg hero__slider__single" style={{backgroundImage: `url(${house})`}}>
                                        <div className="heroBg__contents">
                                            <div className="heroBg__contents__text">
                                                <h1>House</h1>
                                                <h2>House M. D. es un drama médico Estadounidense que se emitió originalmente por la cadena Fox durante ocho temporadas, desde el 16 de noviembre de 2004 al 21 de mayo de 2012. El protagonista de la serie es el Dr. </h2>
                                                <h4>2004
                                                    <span>TV-14</span>
                                                    44m
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
                                </SwiperSlide>
                            </Swiper>

                        </div>

                    </div>
                </section>
            </>
        );
};

export default OnDemandHero;