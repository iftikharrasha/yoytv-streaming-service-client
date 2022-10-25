import React from "react";
import Loader from "../../Components/Custom/Loaders/Loader";
import useUserApi from "../../Utilities/Hooks/useLandingApi";
import SearchResult from "../../Components/Common/SearchResult/SearchResult";
import TvModal from "Components/Custom/Modals/TvModal";
import { Helmet } from 'react-helmet-async';

const Search = () => {
  const { landingData } = useUserApi();

  return (
    <>
      {!landingData ? (
        <Loader />
      ) : (
        <>
          <Helmet>
              <title>Streamapp | Resultados</title>
              <meta name="description" content='TV en vivo, on demand, series, películas, radio y más. Todo en un solo lugar gracias a tu cuenta Coppel Digital.'/>
          </Helmet> 
          <SearchResult />
          <TvModal />
        </>
      )}
    </>
  );
};

export default Search;
