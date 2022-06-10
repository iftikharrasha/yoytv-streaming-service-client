import React from "react";
import Hero from "../../Components/Home/Hero";
import OnDemands from "../../Components/Home/OnDemands";
import Recents from "../../Components/Home/Recents";
import Recommended from "../../Components/Home/Recommended";

const Home = () => {

    return (
        <>
            <main>
                <Hero/>
                <Recents/>
                <Recommended/>
                <OnDemands/>
            </main>
        </>
    );
};

export default Home;