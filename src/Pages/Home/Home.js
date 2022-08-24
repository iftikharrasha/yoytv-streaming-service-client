import React from "react";
import Hero from "../../Components/Home/Hero";
import Loader from "../../Components/Custom/Loaders/Loader";
import useUserApi from "../../Utilities/Hooks/useUserApi";
import LandingContent from "../../Components/Home/LandingContent";
import useAuth from "../../Utilities/Hooks/useAuth";
import Categories from "../../Components/Home/Categories";

const Home = () => {
    const { landingData, newRelease } = useUserApi();
    const { loggedInUser } = useAuth();

    return (
        <>
            {
                !landingData ? <Loader/> :
                !loggedInUser ?
                <>  
                    <Hero landingData={landingData}/>
                    <LandingContent landingData={landingData} newRelease={newRelease}/>
                </> : 
                <>
                    <Hero landingData={landingData} loggedInUser={loggedInUser}/>
                    <Categories/>
                </>
            }
        </>
    );
};

export default Home;