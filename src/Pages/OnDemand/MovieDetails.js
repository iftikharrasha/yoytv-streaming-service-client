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
import { getSingleVideo,likeOrDislikeVideoOrSeries ,addOrRemoveWishtlist} from "Utilities/Actions/Ondemand";
import { VideoSuggestions } from "Utilities/Actions/VideoCategory";
import { SELECT_VIDEO } from "Utilities/Actions/types";
const MovieDetails = ({
  getSingleVideo,
  onDemand,
  VideoSuggestions,
  suggestions,
  likeOrDislikeVideoOrSeries,
  addOrRemoveWishtlist,
  homeFirstSectionData
}) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

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

  const isAddInWishlist =(admin_video_id)=>{
    const myList = homeFirstSectionData?.find((i=>i?.title ==="Mi Lista"))
    const videoExists = myList?.data?.find((it)=>it?.admin_video_id===admin_video_id)
    if(videoExists){
      return true
    }
    return false
  }
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
              <div className="detailsHero__wrapper__contents__left">
                <img src={onDemand?.video?.default_image} alt="default_image" />
              </div>
              <div className="detailsHero__wrapper__contents__right moviewRight">
                <h1>{onDemand?.video?.title}</h1>
                <h1>{onDemand?.video?.ratings}</h1>
                <div>
                  <h4>Película - {onDemand?.video?.publish_time}</h4>
                  <h2>
                    <span>Categorias:</span>
                   <Link to={`/view-more/${onDemand?.video?.category_id}?name=${onDemand?.video?.category_name}`}> 
                   <span style={{color:"#67fe65"}}>{onDemand?.video?.category_name}</span></Link>
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
            <li onClick={()=>{
               likeOrDislikeVideoOrSeries(
                onDemand?.video?.admin_video_id,
                onDemand?.is_liked
              )
              getSingleVideo(onDemand?.video?.admin_video_id);
            }}>
             {onDemand?.is_liked===1 ? <img src={love_icon_green} alt="love" className="love" />  : <img src={love_icon} alt="love" className="love" />
 } </li>
            <li>
              {/* <img src={share_icon} alt="play" className="play" /> */}
            </li>
            <li 
              onClick={()=>{
                const myList = homeFirstSectionData?.find((i=>i?.title ==="Mi Lista"))
                const exist = myList?.data?.find((item)=>item?.admin_video_id === onDemand?.video?.admin_video_id)
                let data = []
                if(exist){
                  data = myList?.data?.filter((item)=>item?.admin_video_id !== onDemand?.video?.admin_video_id)
                }else{
                  data = [...myList?.data,onDemand?.video]
                }
                const temp = homeFirstSectionData?.map((item)=>{
                  if(item?.title ==="Mi Lista"){
                    return {...item,data}
                  }
                  return item
                })
               addOrRemoveWishtlist(onDemand?.video,temp)
             }}
            >
              {isAddInWishlist(onDemand?.video?.admin_video_id) ? <img src={minus_icon} alt="add" className="plus" />:
              <img src={plus_icon} alt="add" className="plus" />}
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
                <p className="inline">{onDemand?.cast_crews?.map((cast)=>cast?.name+", ")?.slice(0,10)}</p>
         
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
  homeFirstSectionData:state?.onDemand?.homeFirstSectionData
});

export default connect(mapStateToProps, {
  getSingleVideo,
  VideoSuggestions,
  likeOrDislikeVideoOrSeries,
  addOrRemoveWishtlist
})(MovieDetails);
