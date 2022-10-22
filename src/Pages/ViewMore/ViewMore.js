import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import arrow from '../../Image/arrow-left-white.svg';
import adBanner from '../../Image/adbanner2.png';
import useLandingApi from '../../Utilities/Hooks/useLandingApi';
import { Helmet } from 'react-helmet-async';
import VerticalAdIframe from 'Components/Custom/Ads/VerticalAdIframe';

const ViewMore = () => {
  const navigate = useNavigate();
  const { shows } = useLandingApi();
  const { pageId } = useParams();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (shows) {
      const data = shows.filter(
        (category) => category.url_page_id === parseInt(pageId)
      );
      setFilteredData(data[0]?.data);
    }
  }, [shows, pageId]);

  return (
    <>
      <Helmet>
          <title>YOY TV | Ver Mas</title>
          <meta name="description" content='TV en vivo, on demand, series, películas, radio y más. Todo en un solo lugar gracias a tu cuenta Coppel Digital.'/>
      </Helmet> 

      <section className="list">
          <Link to={"/"} onClick={() => navigate(-1)} className="title"><img src={arrow} alt={arrow} width="28" height="28"/> Lanzamientos recientes</Link>

          <div className="shows">
              <div className="shows__slider adcontainer">
                  <div className="swiper-wrapper shows__slider__list">
                  {
                      /* LIST FOR ALL THE FILTERED ITEMS*/
                      !filteredData ? null :
                      filteredData.map((list, index) => (
                          <div className="swiper-slide" key={index}>
                              <Link to={`/tv-en-vivo/1`}>
                                  <img src={list.default_image} alt="default_image" />
                              </Link>
                          </div>
                      ))
                  }
                  </div>
                  <div className="swiper-slide shows__slider__list__adbanner ">
                      {/* <h6>Escucha tu <br /> <span>Música favorita!</span></h6>
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

export default ViewMore;
