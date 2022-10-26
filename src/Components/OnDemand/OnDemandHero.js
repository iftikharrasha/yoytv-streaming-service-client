import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import PropTypes from "prop-types";
import { connect, useDispatch } from "react-redux";
import {
  getHomeFirstSection,
  addToWishList,
} from "../../Utilities/Actions/Ondemand";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import love from "../../Image/love_icon.svg";
import share from "../../Image/share_icon.svg";
import plus from "../../Image/plus_icon.svg";
import play from "../../Image/play_blue.svg";
import minusIcon from "../../Image/minus_icon.svg";
import doctorStrange from "../../Image/doctor-strange.png";
import wlakingDead from "../../Image/wlaking-dead.png";
import house from "../../Image/house.png";
import { useNavigate } from "react-router-dom";
import { LIKE_SHOW, SELECT_VIDEO } from "Utilities/Actions/types";

const OnDemandHero = ({ onDemand, getHomeFirstSection, addToWishList }) => {
  //   const { home_page_bg_image, site_logo, home_banner_heading } = landingData;

  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getHomeFirstSection();
  }, [onDemand.wishListUpdatedStatus]);

  const convertDuration = (duration) => {
    let timeArray = duration.split(":");
    return timeArray[0] + "h " + timeArray[1] + "m";
  };

  const navigateToPlayer = (videoId, isTrailer) => {
    dispatch({
      type: SELECT_VIDEO,
      payload: {
        show: true,
        videoId: videoId,
        isTrailer: isTrailer,
      },
    });
  };

  const likeModalShow = (item) => {
    dispatch({
      type: LIKE_SHOW,
      payload: {
        isLikeShow: true,
        likeObject: item,
      },
    });
  };

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
                  slidesPerView: "1",
                },
                640: {
                  slidesPerView: "1",
                },
                992: {
                  slidesPerView: "1",
                },
                1300: {
                  slidesPerView: "1",
                },
              }}
              navigation
              autoplay={{ delay: 5000 }}
              modules={[Navigation, Pagination, Autoplay]}
              className="onDemand_slider"
            >
              {onDemand.bannerData &&
                onDemand.bannerData.map((item, i) => {
                  return (
                    <SwiperSlide>
                      <div
                        className="heroBg hero__slider__single"
                        style={{
                          backgroundImage: `url(${item.banner_image})`,
                        }}
                      >
                        <div className="heroBg__contents">
                          <div className="heroBg__contents__text">
                            <h1>{item.title}</h1>
                            <h2>{item.description}</h2>
                            <h4>
                              {item.publish_time}
                              <span>{item.age}</span>
                              {convertDuration(item.duration)}
                            </h4>
                            <ul>
                              <li>
                                <button
                                  onClick={() =>
                                    navigateToPlayer(item.admin_video_id, false)
                                  }
                                >
                                  <span>
                                    <img src={play} alt="play" /> Reproducir
                                  </span>
                                </button>
                              </li>
                              <li>
                                <button
                                  className="secondary"
                                  onClick={() =>
                                    navigateToPlayer(item.admin_video_id, true)
                                  }
                                >
                                  <span>Tráiler</span>
                                </button>
                              </li>
                              <li>
                                <img
                                  src={love}
                                  alt="love"
                                  className="love"
                                  onClick={() => likeModalShow(item)}
                                />
                              </li>
                              <li>
                                <img src={share} alt="share" />
                              </li>
                              <li>
                                {item.wishlist_status === 0 ? (
                                  <img
                                    src={plus}
                                    alt="plus"
                                    onClick={() =>
                                      addToWishList(item.admin_video_id)
                                    }
                                  />
                                ) : (
                                  <img
                                    src={minusIcon}
                                    alt="minusIcon"
                                    className="love"
                                    onClick={() =>
                                      addToWishList(item.admin_video_id)
                                    }
                                  />
                                )}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

OnDemandHero.propTypes = {
  getOnDemandData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  onDemand: state.onDemand,
});

export default connect(mapStateToProps, {
  getHomeFirstSection,
  addToWishList,
})(OnDemandHero);
