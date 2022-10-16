import React from "react";
import JuegosHero from "../../Components/Juegos/JuegosHero";
import JuegosCards from "../../Components/Juegos/JuegosCards";
import useGamesData from "Utilities/Hooks/useGamesData";

const JuegosCategories = () => {
    const { gamesCategories } = useGamesData();

    return (
        <>
            <JuegosHero/>
            <JuegosCards categories={gamesCategories}/>
        </>
    );
};

export default JuegosCategories;