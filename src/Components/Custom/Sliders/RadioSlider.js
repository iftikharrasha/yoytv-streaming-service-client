import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import PodcastModal from '../Modals/PodcastModal';

const RadioSlider = ({shows, delay, podcast}) => {
    const [lgShow, setLgShow] = useState(false);
    const [details, setDetails] = useState({});
    const [isFetching, setIsFetching] = useState(true);

    const handlePopup = (data) => {
        setDetails(data);
        setIsFetching(false);
        setLgShow(true);
    }

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
                !podcast ? 
                    shows?.data.slice(0,10).map((item, index) => (
                        <SwiperSlide className="radio" key={index} onClick={() => handlePopup(item)}>
                            <Link to={`/podcast/details/`+item.admin_video_id}>
                                <img src={item.default_image} alt="default_image" />
                            </Link>
                            <h6>{item.title}</h6>
                        </SwiperSlide>
                    )) :
                    shows?.data.slice(10,20).map((item, index) => (
                        <SwiperSlide className="radio" key={index} onClick={() => handlePopup(item)}>
                            <Link to={`/podcast/details/`+item.admin_video_id}>
                                <img src={item.default_image} alt="default_image" />
                            </Link>
                            <h6>{item.title}</h6>
                        </SwiperSlide>
                    ))
            }
            </Swiper>

            
            {!isFetching ? <PodcastModal lgShow={lgShow} setLgShow={setLgShow} details={details}/> : null}
        </>
    );
};

export default RadioSlider;