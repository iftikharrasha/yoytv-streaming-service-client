import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { similar } from "../../Data/similar";
import ShowSlider from "../../Components/Custom/Sliders/ShowSlider";
import arrow_left from "../../Image/arrow_left.svg";
import play_fill from "../../Image/play_fill.svg";
import share_icon from "../../Image/share_icon.svg";
import plus_icon from "../../Image/plus_icon.svg";
import love_icon from "../../Image/love_icon.svg";
import spmThumb from "../../Image/BBMockImages/spmThumb.png";
import spidermanThumb from "../../Image/BBMockImages/spidermanThumb.png";
import { connect, useDispatch } from "react-redux";
import { getSingleVideo } from "Utilities/Actions/Ondemand";
import { VideoSuggestions } from "Utilities/Actions/VideoCategory";
import { SELECT_VIDEO } from "Utilities/Actions/types";
import useUserApi from "../../Utilities/Hooks/useLandingApi";

const MovieDetails = ({
  getSingleVideo,
  onDemand,
  VideoSuggestions,
  suggestions,
}) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { landingData } = useUserApi();

  const navigateToPlayer = (videoId) => {
    dispatch({
      type: SELECT_VIDEO,
      payload: {
        show: true,
        videoId: videoId,
      },
    });
  };
  useEffect(() => {
    if (id) {
      getSingleVideo(id);
      VideoSuggestions(id);
    }
  }, [id]);

  if (!onDemand) {
    return <div>Loading...!</div>;
  }
  const suggestionsVidoe={ 
    data: suggestions,
  }
  return (
    <>
      <section className="hero detailsHero">
        <div
          className="heroBg heroFixed"
          style={{ backgroundImage: `url(${onDemand?.video?.banner_image})` }}
        >
          <div className="detailsHero__wrapper">
            <Link to="/" onClick={() => navigate(-1)}>
              <img src={arrow_left} alt="close" className="close" />
            </Link>
            <div className="detailsHero__wrapper__contents">
              <img src={landingData?.site_logo} alt="site_logo" className='site_logo' width="200" height="99" data-aos="fade" data-aos-offset="0" data-aos-delay="400" data-aos-duration="1000" data-aos-once="true"/>
              <div className="detailsHero__wrapper__contents__left">
                <img src={onDemand?.video?.default_image} alt="default_image" />
              </div>
              <div className="detailsHero__wrapper__contents__right moviewRight">
                <h1>{onDemand?.video?.title}</h1>
                <div>
                  <h4>Película - {onDemand?.video?.publish_time} - EUA</h4>
                  <h2>
                    <span>Categorias:</span>
                    {onDemand?.video?.sub_category_name}
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
                  navigateToPlayer(onDemand?.video?.admin_video_id)
                }
              >
                <img src={play_fill} alt="play_fill" />
                <span>Reproducir</span>
              </button>
            </li>
            <li>
              <img src={love_icon} alt="love" className="love" />
            </li>
            <li>
              <img src={share_icon} alt="play" className="play" />
            </li>
            <li>
              <img src={plus_icon} alt="add" className="plus" />
            </li>
          </ul>
        </div>
        <div className="allEpisodes__body">
          <h2>Resumen</h2>
          <p>{onDemand?.video?.description}</p>
        </div>
      </section>

      <section className="crew moview">
        <div className="crewWrapper">
          <div className="crewWrapper__single">
            <div className="crewWrapper__single__left">
              <div className="crewWrapper__single__left__thumb">
                <h3>Tráiler</h3>
                <img src={onDemand?.video?.video_gif_image} alt="intro" className="thumb" />
              </div>
            </div>
            <div className="crewWrapper__single__right">
              <div className="crewWrapper__single__right__info">
                <h4>Reparto</h4>
                <p>{onDemand?.video?.details}</p>
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
                shows={ suggestionsVidoe? suggestionsVidoe : {data:[]}}
                delay={2500}
                clicks={true}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  onDemand: state.onDemand?.singleVideo,
  suggestions: state?.onDemand?.videoSuggestions,
});

export default connect(mapStateToProps, {
  getSingleVideo,
  VideoSuggestions,
})(MovieDetails);
