import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import {
  getMyWishList,
  getHomeFirstSection,
} from "../../Utilities/Actions/Ondemand";
import arrow from "../../Image/arrow-left-white.svg";
import adBanner from "../../Image/adbanner1.png";
import plusIcon from "../../Image/plus_icon.svg";
import minusIcon from "../../Image/minus_icon.svg";
import play_button from '../../Image/play_button.svg';
import love_icon from '../../Image/love_icon.svg';
import arrow_down from '../../Image/arrow_down.svg';
// import { myList } from "../../Data/myList.js";

const MiLista = ({ getMyWishList, getHomeFirstSection, onDemand }) => {
  const navigate = useNavigate();

  const [myList, setMyList] = useState([]);

  useEffect(() => {
    getHomeFirstSection();
  }, []);

  useEffect(() => {
    // getMyWishList();
    let isExistMyList = false;
    for (let category of onDemand.homeFirstSectionData) {
      if (category.title === "Mi Lista") {
        isExistMyList = true;
        setMyList(category.data);
      }
    }
    if (!isExistMyList) {
      setMyList([]);
    }
  }, [onDemand.homeFirstSectionData]);

  return (
    <>
      <section className="list">
        <Link to={"/"} onClick={() => navigate(-1)} className="title">
          <img src={arrow} alt={arrow} width="28" height="28" /> Mi lista
        </Link>

        <div className="shows">
          <div className="shows__slider adcontainer">
            <div className="swiper-wrapper shows__slider__list">
              {
                /* LIST FOR ALL THE SELECTED ITEMS*/
                myList.map((list, index) => (
                  <div className="swiper-slide" key={index}>
                    <Link to="/on-demand">
                      <img src={list.default_image} alt="default_image" />
                            <div className="card__buttons">
                                <ul>
                                    <li><img src={play_button} alt="play" className="play"/></li>
                                    <li><img src={minusIcon} alt="minusIcon" className="love"/></li>
                                    <li><img src={arrow_down} alt="more" className="more"/></li>
                                </ul>
                            </div>
                    </Link>
                  </div>
                ))
              }
              <div className="swiper-slide shows__slider__list__add">
                <Link to="/on-demand">
                  <img src={plusIcon} alt="plusIcon" className="plusIcon" />
                  <p>Agregar nuevos títulos a mi lista</p>
                </Link>
              </div>
            </div>
            <div className="swiper-slide shows__slider__list__adbanner">
              <h6>
                ¡Conviértete en <br /> <span>Cliente Digital!</span>
              </h6>
              <img src={adBanner} alt="adBanner" />
              <div className="bannerBtn">
                <Link to="/on-demand">{`Hazlo aquí>`}</Link>
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

export default connect(mapStateToProps, {
  getMyWishList,
  getHomeFirstSection,
})(MiLista);
