import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import play_button from '../../../Image/play_button.svg';
import love_icon from '../../../Image/love_icon.svg';
import arrow_down from '../../../Image/arrow_down.svg';
import ShowModal from '../Modals/ShowModal';
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import 'swiper/css/navigation';

const ReleaseSlider = ({shows, delay}) => {
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
                slidesPerView={6} 
                spaceBetween={30}
                centeredSlides={false}
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
                className="shows__slider featured__slider"
            >
            {
                shows.map((item) => (
                    <SwiperSlide key={item.no} onClick={() => handlePopup(item)}>
                        <img src={item.default_image} alt="default_image" />
                        <div className="card__buttons">
                            <ul>
                                <li><img src={play_button} alt="play" className="play"/></li>
                                <li><img src={love_icon} alt="love" className="love"/></li>
                                <li><img src={arrow_down} alt="more" className="more" onClick={() => handlePopup(item)}/></li>
                            </ul>
                        </div>
                    </SwiperSlide>
                ))
            }
            </Swiper>

            {!isFetching ? <ShowModal lgShow={lgShow} setLgShow={setLgShow} details={details}/> : null}
        </>
    );
};
export default ReleaseSlider;