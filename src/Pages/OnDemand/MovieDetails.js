import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { similar } from "../../Data/similar";
import ShowSlider from "../../Components/Custom/Sliders/ShowSlider";
import arrow_left from "../../Image/arrow_left.svg";
import play_fill from "../../Image/play_fill.svg";
import share_icon from "../../Image/share_icon.svg";
import plus_icon from "../../Image/plus_icon.svg";
import minus_icon from "../../Image/minus_icon.svg";
import love_icon from "../../Image/love_icon.svg";
import love_icon_green from "../../Image/loveGreen.svg";
import spmThumb from "../../Image/BBMockImages/spmThumb.png";
import spidermanThumb from "../../Image/BBMockImages/spidermanThumb.png";
import { connect, useDispatch } from "react-redux";
import {
  getSingleVideo,
  likeOrDislikeVideoOrSeries,
  addOrRemoveWishtlist,
  addToWishList,
} from "Utilities/Actions/Ondemand";
import { VideoSuggestions } from "Utilities/Actions/VideoCategory";
import { LIKE_SHOW, SELECT_VIDEO } from "Utilities/Actions/types";
import useUserApi from "../../Utilities/Hooks/useLandingApi";
import TvModal from "Components/Custom/Modals/TvModal";
import LikeModal from "Components/Custom/Modals/LikeModal";

const MovieDetails = ({
  getSingleVideo,
  singleVideo,
  VideoSuggestions,
  suggestions,
  likeOrDislikeVideoOrSeries,
  addToWishList,
  onDemand,
}) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { landingData } = useUserApi();

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
  useEffect(() => {
    if (id) {
      getSingleVideo(id);
      VideoSuggestions(id);
    }
  }, [id]);

  if (!singleVideo) {
    return <div>Loading...!</div>;
  }
  const suggestionsVidoe = {
    data: suggestions,
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
  const likeVideo = (admin_video_id) => {
    likeOrDislikeVideoOrSeries(admin_video_id, singleVideo?.is_liked);
  };
  return (
    <>
      <section className="hero detailsHero">
        <div
          className="heroBg heroFixed"
          style={{
            backgroundImage: `url(${singleVideo?.video?.banner_image})`,
          }}
        >
          <div className="detailsHero__wrapper">
            <Link to="/" onClick={() => navigate(-1)}>
              <img src={arrow_left} alt="close" className="close" />
            </Link>
            <div className="detailsHero__wrapper__contents">
              <img
                src={landingData?.site_logo}
                alt="site_logo"
                className="site_logo"
                width="200"
                height="99"
                data-aos="fade"
                data-aos-offset="0"
                data-aos-delay="400"
                data-aos-duration="1000"
                data-aos-once="true"
              />
              <div className="detailsHero__wrapper__contents__left">
                <img
                  src={singleVideo?.video?.default_image}
                  alt="default_image"
                />
              </div>
              <div className="detailsHero__wrapper__contents__right moviewRight">
                <h1>{singleVideo?.video?.title}</h1>
                <h1 style={{ color: "white" }}>{singleVideo?.video?.age}</h1>
                <div>
                  <h4>Película - {singleVideo?.video?.publish_time}</h4>
                  <h2>
                    <span>Categorias : </span>
                    <Link
                      to={`/view-more/${singleVideo?.video?.category_id}?name=${singleVideo?.video?.category_name}`}
                    >
                      <span style={{ color: "#67fe65" }}>
                        {singleVideo?.video?.category_name}
                      </span>
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relativeTop detailsTop2">
        {/* Only for parallex! */}
      </section>

      <section className="allEpisodes moview">
        <div className="allEpisodes__buttons">
          <ul>
            <li>
              <button
                onClick={() =>
                  navigateToPlayer(singleVideo?.video?.admin_video_id, false)
                }
              >
                <img src={play_fill} alt="play_fill" />
                <span>Reproducir</span>
              </button>
            </li>
            <li
              onClick={() => {
                likeVideo(singleVideo?.video?.admin_video_id);
                likeModalShow(singleVideo.video);
              }}
            >
              {onDemand?.likeArray.find(
                (i) => i === singleVideo?.video?.admin_video_id
              ) ? (
                <img src={love_icon_green} alt="love" className="love" />
              ) : (
                <img src={love_icon} alt="love" className="love" />
              )}
            </li>
            <li></li>
            <li>
              {onDemand?.wishListUpdatedStatus ? (
                <img
                  src={plus_icon}
                  alt="plus"
                  onClick={() =>
                    addToWishList(singleVideo?.video?.admin_video_id)
                  }
                />
              ) : (
                <img
                  src={minus_icon}
                  alt="minusIcon"
                  className="love"
                  onClick={() =>
                    addToWishList(singleVideo?.video?.admin_video_id)
                  }
                />
              )}
            </li>
          </ul>
        </div>
        <div className="allEpisodes__body">
          <h2>Resumen</h2>
          <p>{singleVideo?.video?.description}</p>
        </div>
      </section>

      <section className="crew moview">
        <div className="crewWrapper">
          <div className="crewWrapper__single">
            <div className="crewWrapper__single__left">
              <div className="crewWrapper__single__left__thumb">
                <h3>Tráiler</h3>
                <img
                  src={singleVideo?.video?.video_gif_image}
                  alt="intro"
                  className="thumb"
                  onClick={() => {
                    navigateToPlayer(singleVideo?.video?.admin_video_id, true);
                  }}
                />
              </div>
            </div>
            <div className="crewWrapper__single__right">
              <div className="crewWrapper__single__right__info">
                <h4>Reparto</h4>
                <p className="inline">
                  {singleVideo?.cast_crews
                    ?.map((cast) => cast?.name + ", ")
                    ?.slice(0, 10)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="allEpisodes moview">
        <div className="allEpisodes__body">
          <div className="allEpisodes__body__contents">
            <div className="allEpisodes__body__contents__similar">
              <h2>Más títulos similares a este</h2>
              <ShowSlider
                shows={suggestionsVidoe ? suggestionsVidoe : { data: [] }}
                delay={2500}
                clicks={true}
              />
            </div>
          </div>
        </div>
      </section>
      <TvModal />
      <LikeModal />
    </>
  );
};

const mapStateToProps = (state) => ({
  singleVideo: state.onDemand?.singleVideo,
  onDemand: state.onDemand,
  suggestions: state?.onDemand?.videoSuggestions,
  homeFirstSectionData: state?.onDemand?.homeFirstSectionData,
});

export default connect(mapStateToProps, {
  getSingleVideo,
  VideoSuggestions,
  likeOrDislikeVideoOrSeries,
  addOrRemoveWishtlist,
  addToWishList,
})(MovieDetails);
