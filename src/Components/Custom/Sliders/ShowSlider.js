import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import play_button from '../../../Image/play_button.svg';
import plus_icon from '../../../Image/plus_icon.svg';
import love_icon from '../../../Image/love_icon.svg';
import arrow_down from '../../../Image/arrow_down.svg';

const ShowSlider = ({shows, delay}) => {
    return (
        <>
            <Swiper
                grabCursor={true}
                slidesPerView={6} 
                spaceBetween={30}
                centeredSlides={true}
                pagination={false}
                breakpoints={{
                    320: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    992: {
                        slidesPerView: 4
                    },
                    1300: {
                        slidesPerView: 6
                    }
                }}
                navigation
                autoplay= {{ delay: delay }}
                modules={[Navigation, Pagination, Autoplay]}
                className="recent__slider"
            >
            {
                shows.map((item) => (
                    <SwiperSlide key={item.no}>
                        <img src={item.image} alt="thumbnail" />
                        <div className="card__buttons">
                            <ul>
                                <li><img src={play_button} alt="play" className="play"/></li>
                                <li><img src={plus_icon} alt="add" className="plus"/></li>
                                <li><img src={love_icon} alt="love" className="love"/></li>
                            </ul>
                            <img src={arrow_down} alt="more" className="more"/>
                        </div>
                    </SwiperSlide>
                ))
            }
            </Swiper>
        </>
    );
};

export default ShowSlider;