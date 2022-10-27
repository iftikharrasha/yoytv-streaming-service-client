import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import useLandingApi from "../../../Utilities/Hooks/useLandingApi";
import TvSlider from "../../Custom/Sliders/TvSlider";
import ShowSlider from "../../Custom/Sliders/ShowSlider";
import RadioSlider from "../../Custom/Sliders/RadioSlider";
import arrow from "../../../Image/arrow-left-white.svg";
import { tvData } from "../../../Data/tvData";
import { radioData } from "../../../Data/radioData";
import { connect } from "react-redux";

import { getSearchResults } from "Utilities/Actions/Search";
import { useEffect } from "react";

const SearchResult = ({ getSearchResults, search: { searchResult } }) => {
  const { shows } = useLandingApi();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getSearchResults(searchParams.get("query"));
  }, [searchParams.get("query")]);

  return (
    <>
      <section className="list">
        <Link to="/" className="title">
          <img src={arrow} alt={arrow} /> Resultados - Rock:{" "}
          {searchResult.length} títulos
        </Link>
      </section>

      <section className="shows searchResult">
        <div className="shows__title">
          <h2
            data-aos="fade"
            data-aos-offset="0"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            On Demand
          </h2>
        </div>
        <ShowSlider shows={{ data: searchResult }} delay={2500} />
      </section>

      {/* <section className="shows">
        <div className="shows__title">
          <h2
            data-aos="fade"
            data-aos-offset="0"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            On Demand
          </h2>
        </div>
        <TvSlider shows={searchResult} delay={1000} />
      </section> */}

      {/* TODO: TV EN VIVO SLIDER - CURRENTLY HARDCODED NEED API
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
        </div>
        <TvSlider shows={tvData} delay={1000} />
      </section> */}

      {/* SLIDER FOR ALL THE OTHER CATEGORIES
      {shows.map((category, index) => (
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
          </div>
          <ShowSlider shows={category} delay={2500} />
        </section>
      ))} */}

      {/* TODO: RADIO SLIDER - CURRENTLY HARDCODED NEED API
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
        </div>
        <RadioSlider shows={radioData} delay={2500} clicks={true} />
      </section> */}
    </>
  );
};

SearchResult.propTypes = {};

const mapStateToProps = (state) => ({
  search: state.search,
});

export default connect(mapStateToProps, { getSearchResults })(SearchResult);
