import React, { useState, useEffect } from "react";
import useGamesData from "../../Utilities/Hooks/useGamesData";
import { useParams } from 'react-router-dom';
import JuegosPlay from "../../Components/Juegos/JuegosPlay";
import JuegosMore from "../../Components/Juegos/JuegosMore";
import Loader from "../../Components/Custom/Loaders/Loader";

const JuegosGameplay = () => {
    const { allGames, activeGames } = useGamesData();
    const [nowPlaying, setNowPlaying] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        if (allGames) {
            const game = allGames.filter(games => games.id === id);
            setNowPlaying(game[0]);
        }
    }, [id, allGames])

    return (
        <> 
            {
                nowPlaying ? 
                <JuegosPlay nowPlaying={nowPlaying}/> : <Loader/>
            }
            <JuegosMore allGames={allGames} activeGames={activeGames}/>
        </>
    );
};

export default JuegosGameplay;