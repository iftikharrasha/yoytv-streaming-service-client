import React from "react";
import Hero from "../../Components/Home/Hero";
import Loader from "../../Components/Custom/Loaders/Loader";
import useUserApi from "../../Utilities/Hooks/useLandingApi";
import LandingContent from "../../Components/Home/LandingContent";
import useAuth from "../../Utilities/Hooks/useAuth";
import Categories from "../../Components/Home/Categories";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import TvModal from "Components/Custom/Modals/TvModal";

const Home = ({ auth: { isAuthenticated, loading, data } }) => {
  const { landingData, newRelease } = useUserApi();
  const { loggedInUser } = useAuth();

  return (
    <>
      {!landingData ? (
        <Loader />
      ) : (
        <>
          <Helmet>
            <title>YOY TV | Home</title>
            <meta
              name="description"
              content={
                landingData.meta_description ||
                "TV en vivo, on demand, series, películas, radio y más. Todo en un solo lugar gracias a tu cuenta Coppel Digital."
              }
            />
          </Helmet>

          {!isAuthenticated ? (
            <>
              <Hero landingData={landingData} />
              <LandingContent
                landingData={landingData}
                newRelease={newRelease}
              />
            </>
          ) : (
            <>
              <Hero landingData={landingData} loggedInUser={loggedInUser} />
              <Categories />
              <TvModal />
            </>
          )}
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(Home);
