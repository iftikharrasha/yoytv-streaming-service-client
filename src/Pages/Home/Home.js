import React from "react";
import Hero from "../../Components/Home/Hero";
import OnDemands from "../../Components/Home/OnDemands";
import Recents from "../../Components/Home/Recents";

const Home = () => {

    return (
        <>
            <main>
                <Hero/>
                <Recents/>
                <OnDemands/>
            </main>
        </>
    );
};

export default Home;