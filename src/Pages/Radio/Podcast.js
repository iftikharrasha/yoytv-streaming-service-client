import React from "react";
import PodcastHero from "../../Components/Podcast/PodcastHero";
import PodcastCards from "../../Components/Podcast/PodcastCards";
import { Helmet } from 'react-helmet-async';

const Podcast = () => {
    return (
        <>
            <Helmet>
                <title>Streamapp | Podcast</title>
                <meta name="description" content={'TV en vivo, on demand, series, películas, radio y más. Todo en un solo lugar gracias a tu cuenta Coppel Digital.'}/>
            </Helmet> 
            <PodcastHero/>
            <PodcastCards/>
        </>
    );
};

export default Podcast;