import React from "react";
import Loader from "../../Components/Custom/Loaders/Loader";
import useUserApi from "../../Utilities/Hooks/useLandingApi";
import useAuth from "../../Utilities/Hooks/useAuth";
import Categories from "../../Components/Home/Categories";
import OnDemandHero from "../../Components/OnDemand/OnDemandHero";

const OnDemand = () => {
    const { landingData } = useUserApi();
    const { loggedInUser } = useAuth();

    return (
        <>
            {
                !landingData ? <Loader/> :
                    <>
                        <OnDemandHero landingData={landingData} loggedInUser={loggedInUser}/>
                        <Categories demandPage={true}/>
                    </>
            }
        </>
    );
};

export default OnDemand;