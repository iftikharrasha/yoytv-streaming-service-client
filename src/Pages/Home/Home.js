import React from "react";
import Hero from "../../Components/Home/Hero";
import Loader from "../../Components/Custom/Loaders/Loader";
import useUserApi from "../../Utilities/Hooks/useLandingApi";
import LandingContent from "../../Components/Home/LandingContent";
import useAuth from "../../Utilities/Hooks/useAuth";
import Categories from "../../Components/Home/Categories";
import { connect } from "react-redux";

const Home = ({ auth: { isAuthenticated, loading, data } }) => {
  const { landingData, newRelease } = useUserApi();
  const { loggedInUser } = useAuth();

  return (
    <>
      {!landingData ? (
        <Loader />
      ) : !isAuthenticated && !loading ? (
        <>
          <Hero landingData={landingData} />
          <LandingContent landingData={landingData} newRelease={newRelease} />
        </>
      ) : (
        <>
          <Hero landingData={landingData} loggedInUser={loggedInUser} />
          <Categories />
        </>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(Home);
