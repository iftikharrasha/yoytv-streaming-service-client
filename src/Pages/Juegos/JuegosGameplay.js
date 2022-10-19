import React, { useState, useEffect } from "react";
import useGamesData from "../../Utilities/Hooks/useGamesData";
import { useParams } from 'react-router-dom';
import JuegosPlay from "../../Components/Juegos/JuegosPlay";
import JuegosMore from "../../Components/Juegos/JuegosMore";
import Loader from "../../Components/Custom/Loaders/Loader";
import { Helmet } from 'react-helmet-async';

const JuegosGameplay = () => {
    const { allGames, activeGames } = useGamesData();
    const [nowPlaying, setNowPlaying] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        if(allGames){
            const game = allGames.filter(games => games.id === id);
            setNowPlaying(game[0]);
        }
    }, [id, allGames])

    return (
        <> 
            <Helmet>
                <title>YOY TV | Juegos Play</title>
                <meta name="description" content={'TV en vivo, on demand, series, películas, radio y más. Todo en un solo lugar gracias a tu cuenta Coppel Digital.'}/>
            </Helmet> 
            {
                !nowPlaying ? <Loader/> : 
                <>  
                    <JuegosPlay nowPlaying={nowPlaying}/>
                    <JuegosMore allGames={allGames} activeGames={activeGames}/>
                </>
            }
        </>
    );
};

export default JuegosGameplay;