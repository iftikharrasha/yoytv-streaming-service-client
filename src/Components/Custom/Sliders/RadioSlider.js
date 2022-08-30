import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import gamebtn from '../../../Image/game-btn.svg';

const RadioSlider = ({shows, delay}) => {

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
                shows?.data.map((item, index) => (
                    <SwiperSlide className="radio" key={index}>
                        <Link to="/juegos">
                            <img src={item.default_image} alt="default_image" />
                        </Link>
                        <h6>{item.title}</h6>
                    </SwiperSlide>
                ))
            }
            </Swiper>
        </>
    );
};

export default RadioSlider;