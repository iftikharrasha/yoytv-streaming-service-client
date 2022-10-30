import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

const TvSlider = ({shows, delay}) => {

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
                    <SwiperSlide className="rectangular" key={index}>
                        <Link to={`/tv-en-vivo/${item.uuid}`} className="rectangular">
                            <img src={item.logo} alt="logo" />
                        </Link>
                        {/* <div className="card__buttons">
                            <img src={arrow_down} alt="more" className="more"/>
                        </div> */}
                    </SwiperSlide>
                ))
            }
            </Swiper>
        </>
    );
};

export default TvSlider;