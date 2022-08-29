import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import play_button from '../../../Image/play_button.svg';
import love_icon from '../../../Image/love_icon.svg';
import arrow_down from '../../../Image/arrow_down.svg';
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import 'swiper/css/navigation';

const TvSlider = ({shows, delay, similar}) => {

    return (
        <>
            <Swiper
                // loop={true}
                grabCursor={true}
                spaceBetween={30}
                centeredSlides={false}
                pagination={false}
                breakpoints={{
                    320: {
                        slidesPerView: 'auto',
                        spaceBetween: 20,
                        pagination: true,
                    },
                    640: {
                        slidesPerView: 'auto',
                        spaceBetween: 20
                    },
                    992: {
                        slidesPerView: 'auto',
                    },
                    1300: {
                        slidesPerView: 'auto'
                    }
                }}
                navigation
                autoplay= {{ delay: delay }}
                modules={[Navigation, Pagination, Autoplay]}
                className="shows__slider"
            >
            {
                shows?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item.default_image} alt="default_image" />
                        <div className="card__buttons">
                            <ul>
                                <li><img src={play_button} alt="play" className="play"/></li>
                                <li><img src={love_icon} alt="love" className="love"/></li>
                                <li><img src={arrow_down} alt="more" className="more"/></li>
                            </ul>
                        </div>
                    </SwiperSlide>
                ))
            }
            </Swiper>
        </>
    );
};

export default TvSlider;