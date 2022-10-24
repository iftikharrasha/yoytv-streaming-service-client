import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet-async';
import VerticalAdIframe from 'Components/Custom/Ads/VerticalAdIframe';
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import arrow from "../../Image/arrow-left-white.svg";
import adBanner from "../../Image/adbanner2.png";
import useLandingApi from "../../Utilities/Hooks/useLandingApi";
import { connect } from "react-redux";
import { getSingleCategoryVideos } from "../../Utilities/Actions/Ondemand";

const ViewMore = ({
  onDemand: { singleCategoryVideos },
  getSingleCategoryVideos,
}) => {
  const navigate = useNavigate();
  // const { shows } = useLandingApi();
  const { pageId } = useParams();
  const [filteredData, setFilteredData] = useState([]);
  const [categoryVideos, setCategoryVideos] = useState([]);
  const [title, setTitle] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setCategoryVideos([]);
    setTitle(searchParams.get("name"));
    if (pageId) {
      getSingleCategoryVideos(pageId);
    }
  }, [pageId]);

  useEffect(() => {
    setCategoryVideos([]);
    if (singleCategoryVideos.length > 0) {
      let categoryVideos = [];
      singleCategoryVideos.forEach((subCategory, i) => {
        categoryVideos = categoryVideos.concat(subCategory.videos);
      });
      setCategoryVideos(categoryVideos);
    }
  }, [singleCategoryVideos]);

  return (
    <>
      <Helmet>
          <title>YOY TV | Ver Mas</title>
          <meta name="description" content='TV en vivo, on demand, series, películas, radio y más. Todo en un solo lugar gracias a tu cuenta Coppel Digital.'/>
      </Helmet> 
      <section className="list">
        <Link to={"/on-demand"} onClick={() => navigate(-1)} className="title">
          <img src={arrow} alt={arrow} width="28" height="28" /> {title}
        </Link>

        <div className="shows">
          <div className="shows__slider adcontainer">
            <div className="swiper-wrapper shows__slider__list">
              {
                /* LIST FOR ALL THE FILTERED ITEMS*/
                !categoryVideos
                  ? null
                  : categoryVideos.map((item, index) => (
                      <div className="swiper-slide" key={index}>
                        <Link
                          to={`/on-demand/movie-details/` + item.admin_video_id}
                        >
                          <img src={item.default_image} alt="default_image" />
                        </Link>
                      </div>
                    ))
              }
            </div>
            <div className="swiper-slide shows__slider__list__adbanner">
              {/* <h6>
                Escucha tu <br /> <span>Música favorita!</span>
              </h6>
              <img src={adBanner} alt="adBanner" />
              <div className="bannerBtn">
                <Link to="/ad">{`Hazlo aquí>`}</Link>
              </div> */}
              
              <VerticalAdIframe />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  onDemand: state.onDemand,
});

export default connect(mapStateToProps, { getSingleCategoryVideos })(ViewMore);