import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import 'swiper/css/navigation';

const ShowSlider = ({shows, delay}) => {
    return (
        <>
            <Swiper
                grabCursor={true}
                slidesPerView={6} 
                spaceBetween={20}
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
                        {/* <p>{item.name}</p> */}
                    </SwiperSlide>
                ))
            }
            </Swiper>
        </>
    );
};

export default ShowSlider;