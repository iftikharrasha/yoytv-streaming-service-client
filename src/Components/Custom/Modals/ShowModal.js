import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import ShowSlider from "../Sliders/ShowSlider";
import { episodes } from "../../../Data/episodes.js";
import arrow_left from "../../../Image/arrow_left.svg";
import banner_image from "../../../Image/stranger_things_cover.png";
import play_fill from "../../../Image/play_fill.svg";
import share_icon from "../../../Image/share_icon.svg";
import plus_icon from "../../../Image/plus_icon.svg";
import minus_icon from "../../../Image/minus_icon.svg";
import plus_icon_green from "../../../Image/plus-greeen.svg";
import love_icon from "../../../Image/love_icon.svg";
import love_icon_green from "../../../Image/loveGreen.svg";
import arrow from "../../../Image/arrow_left_green.svg";
import { similar } from "../../../Data/similar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { SELECT_VIDEO } from "Utilities/Actions/types";
import { VideoSuggestions } from "Utilities/Actions/VideoCategory";
import { getSingleVideo ,getVideoView,getVideoGenre,likeOrDislikeVideoOrSeries,addOrRemoveWishtlist,getOnDemandData} from "Utilities/Actions/Ondemand";
import { getVideoCategoryList } from "Utilities/Actions/VideoCategory";

const ShowModal = (props) => {
  const {
    lgShow,
    setLgShow,
    details,
    VideoSuggestions,
    suggestions,
    getSingleVideo,
    video,
    videoViewState,
    getVideoView,
    getVideoCategoryList,
    videoCategories,
    getVideoGenre,
    videoGenre,
    likeOrDislikeVideoOrSeries,
    addOrRemoveWishtlist,
    getOnDemandData,
    homeFirstSectionData
  } = props;
  const handleClose = () => setLgShow(false);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateToPlayer = (videoId, isTrailer) => {
    dispatch({
      type: SELECT_VIDEO,
      payload: {
        show: true,
        videoId: videoId,
        isTrailer: isTrailer,
      },
    });
    handleClose();
  };
  useEffect(() => {
    VideoSuggestions(details?.admin_video_id);
    getSingleVideo(details?.admin_video_id);
    getVideoView(details?.admin_video_id);
    getVideoCategoryList()
    getVideoGenre({
      categoryId:details?.category_id,
      sub_category_id:details?.sub_category_id,
      genre_id:details?.genre_id
    })
  }, []);
  console.log("homeFirstSectionData", {video,details});
  const isAddInWishlist =(admin_video_id)=>{
    const myList = homeFirstSectionData?.find((i=>i?.title ==="Mi Lista"))
    const videoExists = myList?.data?.find((it)=>it?.admin_video_id===admin_video_id)
    if(videoExists){
      return true
    }
    return false
  }
  const selectedCategory = videoCategories?.data?.data?.find((item)=>item?.category_id === details?.category_id).name
  return (
    <>
      <Modal
        size="lg"
        show={lgShow}
        onHide={handleClose}
        aria-labelledby="example-modal-sizes-title-lg"
        className="show__modal"
      >
        <div className="modal__bg">
          <Modal.Header
            style={{ backgroundImage: `url(${details?.banner_image})` }}
          >
            <img
              src={arrow_left}
              alt="close"
              className="close"
              onClick={handleClose}
            />
            <div className="modal__contents">
              <div className="modal__contents__left">
                <img src={details.default_image} alt="default_image" />
              </div>
              <div className="modal__contents__right">
                <Modal.Title id="example-modal-sizes-title-lg">
                  {details.title}
                </Modal.Title>
                <h5>{videoViewState?.is_series===0 ? "Movie" : "Series"}</h5>
                <h6>{video?.video?.ratings}</h6>
                <h4>
                  {videoViewState?.is_series===0 ? "" : `${videoViewState?.video_playlist?.length} temporadas -`}
                  {details?.publish_time} - EUA
                </h4>
                <p>{details.description}</p>
              </div>
            </div>
            <div className="modal__buttons">
              <ul>
                <li>
                  <button
                    onClick={() =>
                      navigateToPlayer(details.admin_video_id, false)
                    }
                  >
                    <img src={play_fill} alt="play_fill" />
                    <span>Reproducir</span>
                  </button>
                </li>
                <li onClick={()=>{
                  likeOrDislikeVideoOrSeries(
                    video?.video?.admin_video_id,
                    video?.is_liked
                  )
                  getSingleVideo(details?.admin_video_id);
                }}>
                 {video?.is_liked===1 ? <img src={love_icon_green} alt="love" className="love" /> :  <img src={love_icon} alt="love" className="love" />}
                </li>
                {/* <li>
                  <img src={share_icon} alt="play" className="play" />
                </li> */}
                <li onClick={()=>{
                   const myList = homeFirstSectionData?.find((i=>i?.title ==="Mi Lista"))
                   const exist = myList?.data?.find((item)=>item?.admin_video_id === details?.admin_video_id)
                   let data = []
                   if(exist){
                     data = myList?.data?.filter((item)=>item?.admin_video_id !== details?.admin_video_id)
                   }else{
                     data = [...myList?.data,details]
                   }
                   const temp = homeFirstSectionData?.map((item)=>{
                     if(item?.title ==="Mi Lista"){
                       return {...item,data}
                     }
                     return item
                   })
                  addOrRemoveWishtlist(details?.admin_video_id,temp)
                }}>
                 {isAddInWishlist(details?.admin_video_id) ? <img src={minus_icon} alt="add" className="plus"  /> : <img src={plus_icon} alt="add" className="plus"  />}
                </li>
              </ul>
              <h2>
                <span>Categorias:</span>{" "}
                <Link to={`/view-more/${video?.video?.category_id}?name=${selectedCategory}`}>
                  <span style={{color:"#67fe65"}}>{selectedCategory}</span>
                </Link>
              </h2>
            </div>
          </Modal.Header>
          <Modal.Body>
            <div className="body__contents">
              {videoViewState?.is_series===0 ? null : (
                <>
                  <div className="body__contents__title">
                    <h2>Episodios</h2>
                    <div className="input-group">
                      <select
                        className="custom-select"
                        id="selectEpisode"
                        defaultValue={1}
                        onChange={(e)=>{
                          getVideoGenre({
                            categoryId:details?.category_id,
                            sub_category_id:details?.sub_category_id,
                            genre_id:e.target.value
                          })
                        }}
                      >
                        <option  value={details?.genre_id}>
                              {video?.genres?.find((it)=>it?.genre_id===details?.genre_id)?.genre_name}
                              </option>
                        {video?.genres?.filter((i)=>i?.genre_id !==details?.genre_id).map((item)=>{
                            return <option key={item?.genre_id} value={item?.genre_id}>
                              {item?.genre_name}
                              </option>
                        })}
                      </select>
                    </div>
                  </div>
                  <ul className="body__contents__episodes">
                    {videoGenre?.isLoading ? <span>Loading</span> : videoGenre?.data?.map((item) => (
                      <div
                        className="body__contents__episodes__single"
                        key={item.id}
                      >
                        <div className="body__contents__episodes__single__left">
                          <span>{item.no}</span>
                          <div className="body__contents__episodes__single__left__thumb">
                            <img
                              src={item.default_image}
                              alt="intro"
                              className="thumb"
                            />
                          </div>
                        </div>
                        <div className="body__contents__episodes__single__right">
                          <div className="body__contents__episodes__single__right__info">
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                          </div>
                          <span>{item.duration} min</span>
                        </div>
                      </div>
                    ))?.slice(0,3)}
                    <Link
                      to={`/on-demand/series-details/` + details.admin_video_id}
                    >
                      <img
                        src={arrow}
                        alt="details"
                        className="arrow"
                        onClick={handleClose}
                      />
                    </Link>
                  </ul>
                </>
              )}
              <div className="body__contents__similar">
                <h2>Más títulos similares a este</h2>
                {/* TODO: RELATED SHOWS SLIDER FILTERING FUNCTIONALITY NEEDED*/}
                {Array.isArray(suggestions) && suggestions.length > 0 && (
                  <ShowSlider
                    shows={{ data: suggestions }}
                    delay={2500}
                    clicks={true}
                  />
                )}
              </div>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  suggestions: state?.onDemand?.videoSuggestions,
  video: state?.onDemand?.singleVideo,
  videoViewState: state?.onDemand?.videoViewState,
  videoCategories: state.videoCategories,
  videoGenre: state?.onDemand?.genreVideos,
  isLoading:state?.onDemand?.isLoading,
  homeFirstSectionData:state?.onDemand?.homeFirstSectionData
});

export default connect(mapStateToProps, {
  VideoSuggestions,
  getSingleVideo,
  getVideoView,
  getVideoCategoryList,
  getVideoGenre,
  likeOrDislikeVideoOrSeries,
  addOrRemoveWishtlist,
  getOnDemandData
})(ShowModal);
