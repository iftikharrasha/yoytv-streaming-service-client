import React, { useEffect, useState } from "react";
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
import { getCategories } from "../../Utilities/Actions/Ondemand";

const AllCategories = ({ onDemand: { categories }, getCategories }) => {
  const navigate = useNavigate();

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <section className="list">
        <Link to={"/on-demand"} onClick={() => navigate(-1)} className="title">
          <img src={arrow} alt={arrow} width="28" height="28" /> Categorías
        </Link>

        <div className="shows">
          <div className="shows__slider adcontainer">
            <div className="swiper-wrapper shows__slider__list">
              {
                /* LIST FOR ALL THE FILTERED ITEMS*/
                !categories
                  ? null
                  : categories.map((item, index) => (
                      <div className="swiper-slide" key={index}>
                        <Link
                          to={`/view-more/${item.category_id}?name=${item.name}`}
                        >
                          <img src={item.picture} alt="default_image" />
                        </Link>
                      </div>
                    ))
              }
            </div>
            <div className="swiper-slide shows__slider__list__adbanner adLinear">
              <h6>
                Escucha tu <br /> <span>Música favorita!</span>
              </h6>
              <img src={adBanner} alt="adBanner" />
              <div className="bannerBtn">
                <Link to="/ad">{`Hazlo aquí>`}</Link>
              </div>
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

export default connect(mapStateToProps, { getCategories })(AllCategories);
