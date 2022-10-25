import React, { useEffect } from "react";
import RadioHero from "../../Components/Radio/RadioHero";
import RadioCards from "../../Components/Radio/RadioCards";
import { getRadioStation } from "Utilities/Actions/Radio";
import { connect } from "react-redux";
import { Helmet } from 'react-helmet-async';

const Radio = ({ radio, getRadioStation }) => {
  useEffect(() => {
    getRadioStation();
  }, []);
  return (
    <>
      <Helmet>
          <title>Streamapp | Radio</title>
          <meta name="description" content={'TV en vivo, on demand, series, películas, radio y más. Todo en un solo lugar gracias a tu cuenta Coppel Digital.'}/>
      </Helmet> 
      <RadioHero />
      <RadioCards data={radio.data} />
    </>
  );
};

Radio.prototype = {};
const mapStateToProps = (state) => ({
  radio: state.radio,
});
export default connect(mapStateToProps, { getRadioStation })(Radio);
