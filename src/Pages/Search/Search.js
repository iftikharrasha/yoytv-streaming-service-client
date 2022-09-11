import React from "react";
import Loader from "../../Components/Custom/Loaders/Loader";
import useUserApi from "../../Utilities/Hooks/useLandingApi";
import SearchResult from "../../Components/Common/SearchResult/SearchResult";

const Search = () => {
    const { landingData } = useUserApi();

    return (
        <>
            {
                !landingData ? <Loader/> :
                <>
                    <SearchResult/>
                </>
            }
        </>
    );
};

export default Search;