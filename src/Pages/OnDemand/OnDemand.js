import React from "react";
import Hero from "../../Components/Home/Hero";
import Loader from "../../Components/Custom/Loaders/Loader";
import useUserApi from "../../Utilities/Hooks/useLandingApi";
import useAuth from "../../Utilities/Hooks/useAuth";
import Categories from "../../Components/Home/Categories";

const OnDemand = () => {
    const { landingData } = useUserApi();
    const { loggedInUser } = useAuth();

    return (
        <>
            {
                !landingData ? <Loader/> :
                    <>
                        <Hero landingData={landingData} loggedInUser={loggedInUser}/>
                        <Categories demandPage={true}/>
                    </>
            }
        </>
    );
};

export default OnDemand;