import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useLandingApi from "../../Utilities/Hooks/useLandingApi";
import TvSlider from "../Custom/Sliders/TvSlider";
import ShowSlider from "../Custom/Sliders/ShowSlider";
import JuegosSlider from "../Custom/Sliders/JuegosSlider";
import RadioSlider from "../Custom/Sliders/RadioSlider";
import CategoriesSlider from "../Custom/Sliders/CategoriesSlider";
import { tvData } from "../../Data/tvData";
import { radioData } from "../../Data/radioData";
import { connect } from "react-redux";
import useGamesData from "../../Utilities/Hooks/useGamesData";
import { getRadioStation } from "Utilities/Actions/Radio";
import {
  getCategoryVideos,
  getOnDemandData,
  getCategories,
  getHomeFirstSection,
} from "Utilities/Actions/Ondemand";

const Categories = ({
  demandPage,
  onDemand,
  getCategoryVideos,
  getOnDemandData,
  getCategories,
  getRadioStation,
  radio,
  getHomeFirstSection,
}) => {
  const { tv } = useLandingApi();
  const { activeGames } = useGamesData();
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    getHomeFirstSection();
    getCategoryVideos();
    getOnDemandData();
    getCategories();
    getRadioStation();
  }, []);

  useEffect(() => {
    if (
      onDemand.homeFirstSectionData.length !== 0 &&
      onDemand.onDemand.length !== 0
    ) {
      setCategoryList(onDemand.homeFirstSectionData.concat(onDemand.onDemand));
    }
  }, [onDemand]);
    return (
    <>
      <section
        className={!demandPage ? "relativeTop" : "relativeTop demandTop"}
      >
        {/* Only for landing parallex! */}
      </section>

      {/* TODO: CATEGORIES SLIDER - CURRENTLY HARDCODED NEED API*/}
      {!onDemand.categories ? null : (
        <section className="shows">
          <div className="shows__title">
            <h2
              data-aos="fade"
              data-aos-offset="0"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              Categorías
            </h2>
            <Link to="/on-demand/all-categories">{`Ver más>`}</Link>
          </div>
          <CategoriesSlider categories={onDemand.categories} delay={1000} />
        </section>
      )}

      {/* TODO: TV EN VIVO SLIDER - CURRENTLY HARDCODED NEED API*/}
      {demandPage ? null : (
        <section className="shows">
          <div className="shows__title">
            <h2
              data-aos="fade"
              data-aos-offset="0"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              TV en vivo
            </h2>
            <Link to="/tv-en-vivo">{`Ver más>`}</Link>
          </div>
          <TvSlider shows={tv} delay={1000} />
        </section>
      )}

      {/* SLIDER FOR ALL THE OTHER CATEGORIES*/}
      {categoryList.map((category, index) => {
        return (
          <section className="shows" key={index}>
            <div className="shows__title">
              <h2
                data-aos="fade"
                data-aos-offset="0"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                {category.title}
              </h2>
              <Link
                to={
                  category.title === "Mi Lista"
                    ? `/profile/mi-lista/123`
                    : `/view-more/` +
                      category.url_page_id +
                      `?name=${category.title}`
                }
              >{`Ver más>`}</Link>
            </div>
            <ShowSlider
              shows={category}
              delay={2500}
            />
          </section>
        );
      })}

      {/* TODO: RADIO SLIDER - CURRENTLY HARDCODED NEED API*/}
      {demandPage ? null : (
        <section className="shows">
          <div className="shows__title">
            <h2
              data-aos="fade"
              data-aos-offset="0"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              Radio
            </h2>
            <Link to="/radio">{`Ver más>`}</Link>
          </div>
          <RadioSlider
            shows={radioData}
            delay={2500}
            radio={radio?.data}
            clicks={true}
          />
        </section>
      )}

      {/* TODO: Podcast SLIDER - CURRENTLY HARDCODED NEED API*/}
      {/* {
            demandPage ? null : 
            <section className="shows">
                <div className="shows__title">
                    <h2 data-aos="fade" data-aos-offset="0" data-aos-delay="200" data-aos-duration="1000">Podcast</h2>
                    <Link to="/radio">{`Ver más>`}</Link>
                </div>
                <RadioSlider shows={radioData} podcast={true} delay={2500} clicks={true}/>
            </section>
        } */}

      {demandPage ? null : (
        <section className="shows">
          <div className="shows__title">
            <h2
              data-aos="fade"
              data-aos-offset="0"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              Juegos
            </h2>
            <Link to="/juegos/categories">{`Ver más>`}</Link>
          </div>
          <JuegosSlider shows={activeGames} delay={6000} />
        </section>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  onDemand: state.onDemand,
  radio: state.radio,
});

export default connect(mapStateToProps, {
  getCategoryVideos,
  getOnDemandData,
  getCategories,
  getRadioStation,
  getHomeFirstSection,
})(Categories);
