import React from "react";
import JuegosHero from "../../Components/Juegos/JuegosHero";
import JuegosCards from "../../Components/Juegos/JuegosCards";
import useGamesData from "../../Utilities/Hooks/useGamesData";
import { Helmet } from 'react-helmet-async';

const JuegosCategories = () => {
    const { gamesCategories } = useGamesData();

    return (
        <>
            <Helmet>
                <title>YOY TV | Juegos Categories</title>
                <meta name="description" content={'TV en vivo, on demand, series, películas, radio y más. Todo en un solo lugar gracias a tu cuenta Coppel Digital.'}/>
            </Helmet> 
            <JuegosHero/>
            <JuegosCards categories={gamesCategories}/>
        </>
    );
};

export default JuegosCategories;