import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { breakingEpisodes } from '../../Data/breakingEpisodes.js';
import { similar } from '../../Data/similar';
import ShowSlider from '../../Components/Custom/Sliders/ShowSlider';
import arrow_left from '../../Image/arrow_left.svg';
import play_fill from '../../Image/play_fill.svg';
import share_icon from '../../Image/share_icon.svg';
import plus_icon from '../../Image/plus_icon.svg';
import love_icon from '../../Image/love_icon.svg';
import bbThumb from '../../Image/BBMockImages/bbThumb.png';
import breakingBad from '../../Image/BBMockImages/breakingBad.png';
import breakingBadThumb from '../../Image/BBMockImages/breakingBadThumb.png';
import { connect, useDispatch } from 'react-redux';
import { getSingleVideo,getVideoView ,getVideoGenre} from "Utilities/Actions/Ondemand";
import { VideoSuggestions } from "Utilities/Actions/VideoCategory";
import { SELECT_VIDEO } from "Utilities/Actions/types";
import useUserApi from "../../Utilities/Hooks/useLandingApi";

const SeriesDetails = ({  getSingleVideo,
    onDemand,
    VideoSuggestions,
    suggestions,
    getVideoView,
    videoViewState,
    getVideoGenre,
    videoGenre
}) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { landingData } = useUserApi();

    useEffect(() => {
        if (id) {
          getSingleVideo(id);
          VideoSuggestions(id);
          getVideoView(id);
          getVideoGenre({
            categoryId:onDemand?.video?.category_id,
            sub_category_id:onDemand?.video?.sub_category_id,
            genre_id:onDemand?.video?.genre_id
        })
        }
      }, [id]);
      if (!onDemand) {
        return <div>Loading...!</div>;
      }
    return (
        <>
            <section className="hero detailsHero">
                <div className="heroBg heroFixed" style={{backgroundImage: `url(${onDemand?.video?.banner_image})`}}>
                    <div className="detailsHero__wrapper">
                        <Link to="/" onClick={() => navigate(-1)}><img src={arrow_left} alt="close" className="close"/></Link>
                        <div className="detailsHero__wrapper__contents">
                            <img src={landingData?.site_logo} alt="site_logo" className='site_logo' width="200" height="99" data-aos="fade" data-aos-offset="0" data-aos-delay="400" data-aos-duration="1000" data-aos-once="true"/>
                            <div className="detailsHero__wrapper__contents__left">
                                <img src={onDemand?.video?.default_image} alt="default_image"/>
                            </div>
                            <div className="detailsHero__wrapper__contents__right">
                                <h1>
                                   {onDemand?.video?.title}
                                </h1>
                                <h5>Series</h5>
                                <h4>{videoViewState?.video_playlist?.length} temporadas - {onDemand?.video?.publish_time} - EUA</h4> 
                                <h2><span>Categorias:</span> {onDemand?.video?.sub_category_name}</h2>
                                <p>{onDemand?.video?.description} </p>
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
                            <button>
                                <img src={play_fill} alt="play_fill" />
                                <span>Reproducir</span> 
                            </button>
                        </li>
                        <li><img src={love_icon} alt="love" className="love"/></li>
                        <li><img src={share_icon} alt="play" className="play"/></li>
                        <li><img src={plus_icon} alt="add" className="plus"/></li>
                    </ul>
                </div>
                <div className="allEpisodes__body">
                    <div className="allEpisodes__body__contents">
                        <div className="allEpisodes__body__contents__title">
                            <h2>Episodios</h2>
                            <div className="input-group">
                                <select className="custom-select" id="selectEpisode" defaultValue={1} onChange={(e)=>{
                                    getVideoGenre({
                                        categoryId:onDemand?.video?.category_id,
                                        sub_category_id:onDemand?.video?.sub_category_id,
                                        genre_id:e.target.value
                                    })
                                }}>
                                    {onDemand?.genres?.map((item) =><option key={item?.genre_id} value={item?.genre_id}>{item?.genre_name}</option>)}
                                </select>
                            </div>
                        </div>
                        <ul className="allEpisodes__body__contents__episodes">
                            {
                                videoGenre?.map((item) => (
                                <div className="allEpisodes__body__contents__episodes__single" key={item.id}>
                                    <div className="allEpisodes__body__contents__episodes__single__left">
                                        <span>{item.no}</span>
                                        <div className="allEpisodes__body__contents__episodes__single__left__thumb">
                                            <img src={item.default_image} alt="intro" className="thumb"/>
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
                            }
                        </ul>
                        <div className="allEpisodes__body__contents__similar">
                            <h2>Más títulos similares a este</h2>
                            <ShowSlider shows={{data:suggestions}} delay={2500} clicks={true}/>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="crew">
                <div className="crewWrapper">
                    <div className="crewWrapper__single">
                        <div className="crewWrapper__single__left">
                            <div className="crewWrapper__single__left__thumb">
                                <img src={onDemand?.video?.default_image} alt="intro" className="thumb"/>
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
            </section>
        </>
    );
};

const mapStateToProps = (state) => ({
    onDemand: state.onDemand?.singleVideo,
    suggestions: state?.onDemand?.videoSuggestions,
    videoViewState: state?.onDemand?.videoViewState,
    videoGenre: state?.onDemand?.genreVideos,
  });
  
  export default connect(mapStateToProps, {
    getSingleVideo,
    VideoSuggestions,
    getVideoView,
    getVideoGenre
  })(SeriesDetails);
  