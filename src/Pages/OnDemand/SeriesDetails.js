import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { breakingEpisodes } from "../../Data/breakingEpisodes.js";
import { similar } from "../../Data/similar";
import ShowSlider from "../../Components/Custom/Sliders/ShowSlider";
import arrow_left from "../../Image/arrow_left.svg";
import play_fill from "../../Image/play_fill.svg";
import share_icon from "../../Image/share_icon.svg";
import plus_icon from "../../Image/plus_icon.svg";
import minus_icon from "../../Image/minus_icon.svg";
import love_icon from "../../Image/love_icon.svg";
import love_icon_green from "../../Image/loveGreen.svg";
import bbThumb from "../../Image/BBMockImages/bbThumb.png";
import breakingBad from "../../Image/BBMockImages/breakingBad.png";
import breakingBadThumb from "../../Image/BBMockImages/breakingBadThumb.png";
import plus_icon_svg from "../../Image/plus-greeen.svg";
import { connect, useDispatch } from "react-redux";
import {
  getSingleVideo,
  getVideoView,
  getVideoGenre,
  likeOrDislikeVideoOrSeries,
  addOrRemoveWishtlist,
  addToWishList,
} from "Utilities/Actions/Ondemand";
import { VideoSuggestions } from "Utilities/Actions/VideoCategory";
import { LIKE_SHOW, SELECT_VIDEO } from "Utilities/Actions/types";
import useUserApi from "../../Utilities/Hooks/useLandingApi";
import TvModal from "Components/Custom/Modals/TvModal.js";
import LikeModal from "Components/Custom/Modals/LikeModal.js";

const SeriesDetails = ({
  getSingleVideo,
  onDemand,
  VideoSuggestions,
  suggestions,
  getVideoView,
  videoViewState,
  getVideoGenre,
  videoGenre,
  likeOrDislikeVideoOrSeries,
  addToWishList,
  singleVideo,
}) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { landingData } = useUserApi();
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      getSingleVideo(id);
      VideoSuggestions(id);
      getVideoView(id);
      getVideoGenre({
        categoryId: singleVideo?.video?.category_id,
        sub_category_id: singleVideo?.video?.sub_category_id,
        genre_id: singleVideo?.video?.genre_id,
      });
    }
  }, [id]);
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
  const likeVideo = (admin_video_id) => {
    likeOrDislikeVideoOrSeries(admin_video_id, singleVideo?.is_liked);
  };

  if (!onDemand) {
    return <div>Loading...!</div>;
  }
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
              <div className="detailsHero__wrapper__contents__right">
                <h1>{singleVideo?.video?.title}</h1>
                <h1>{singleVideo?.video?.age}</h1>
                <h5>Series</h5>a
                <h4>
                  {videoViewState?.video_playlist?.length} temporadas -{" "}
                  {singleVideo?.video?.publish_time}
                </h4>
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
                <p>{singleVideo?.video?.description} </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relativeTop detailsTop">
        {/* Only for parallex! */}
      </section>

      <section className="allEpisodes">
        <div className="allEpisodes__buttons">
          <ul>
            <li>
              <button
                onClick={() => {
                  navigateToPlayer(singleVideo?.video?.admin_video_id, false);
                }}
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
            {/* <li><img src={share_icon} alt="play" className="play"/></li> */}
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
          <div className="allEpisodes__body__contents">
            <div className="allEpisodes__body__contents__title">
              <h2>Episodios</h2>
              <div className="input-group">
                <select
                  className="custom-select"
                  id="selectEpisode"
                  defaultValue={1}
                  onChange={(e) => {
                    getVideoGenre({
                      categoryId: singleVideo?.video?.category_id,
                      sub_category_id: singleVideo?.video?.sub_category_id,
                      genre_id: e.target.value,
                    });
                  }}
                >
                  <option value={singleVideo?.genre_id}>
                    {
                      singleVideo?.genres?.find(
                        (it) => it?.genre_id === singleVideo?.genre_id
                      )?.genre_name
                    }
                  </option>
                  {singleVideo?.genres
                    ?.filter((i) => i?.genre_id !== singleVideo?.genre_id)
                    .map((item) => (
                      <option key={item?.genre_id} value={item?.genre_id}>
                        {item?.genre_name}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <ul className="allEpisodes__body__contents__episodes">
              {videoGenre?.isLoading ? (
                <span>Loading</span>
              ) : (
                videoGenre?.data?.map((item) => (
                  <div
                    className="allEpisodes__body__contents__episodes__single"
                    key={item.id}
                  >
                    <div className="allEpisodes__body__contents__episodes__single__left">
                      <span>{item.no}</span>
                      <div className="allEpisodes__body__contents__episodes__single__left__thumb">
                        <img
                          src={item.default_image}
                          alt="intro"
                          className="thumb"
                          onClick={() => {
                            navigateToPlayer(item?.admin_video_id, false);
                          }}
                        />
                      </div>
                    </div>
                    <div className="allEpisodes__body__contents__episodes__single__right">
                      <div className="allEpisodes__body__contents__episodes__single__right__info">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                      <span>{item.duration} min</span>
                    </div>
                  </div>
                ))
              )}
            </ul>
            <div className="allEpisodes__body__contents__similar">
              <h2>Más títulos similares a este</h2>
              <ShowSlider
                shows={{ data: suggestions }}
                delay={2500}
                clicks={true}
              />
            </div>
          </div>
        </div>
      </section>
      <TvModal />
      <LikeModal />
      {/* <section className="crew">
                <div className="crewWrapper">
                    <div className="crewWrapper__single">
                        <div className="crewWrapper__single__left">
                            <div className="crewWrapper__single__left__thumb">
                                <img src={singleVideo?.video?.default_image} alt="intro" className="thumb"/>
                            </div>
                        </div>
                        <div className="crewWrapper__single__right">
                            <div className="crewWrapper__single__right__info">
                                <h4>Resumen:</h4>
                                <p>{onDemand?.video?.description}</p>
                            </div>
                            <div className="crewWrapper__single__right__info">
                                <h4>Creador:</h4>
                                <p>Vince Gilligan</p>
                            </div>
                            <div className="crewWrapper__single__right__info">
                                <h4>Reparto:</h4>
                                <p>{onDemand?.video?.details}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
    </>
  );
};

const mapStateToProps = (state) => ({
  singleVideo: state.onDemand?.singleVideo,
  onDemand: state.onDemand,
  suggestions: state?.onDemand?.videoSuggestions,
  videoViewState: state?.onDemand?.videoViewState,
  videoGenre: state?.onDemand?.genreVideos,
  homeFirstSectionData: state?.onDemand?.homeFirstSectionData,
});

export default connect(mapStateToProps, {
  getSingleVideo,
  VideoSuggestions,
  getVideoView,
  getVideoGenre,
  likeOrDislikeVideoOrSeries,
  addOrRemoveWishtlist,
  addToWishList,
})(SeriesDetails);
