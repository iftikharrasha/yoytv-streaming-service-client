import React, { useEffect } from "react";
import RadioHero from "../../Components/Radio/RadioHero";
import RadioCards from "../../Components/Radio/RadioCards";
import { getRadioStation } from "Utilities/Actions/Radio";
import { connect } from "react-redux";

const Radio = ({ radio, getRadioStation }) => {
  useEffect(() => {
    getRadioStation();
  }, []);
  return (
    <>
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
