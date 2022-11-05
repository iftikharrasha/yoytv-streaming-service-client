import React, { useState, useEffect } from "react";
import useGamesData from "../../Utilities/Hooks/useGamesData";
import { useParams } from 'react-router-dom';
import JuegosPlay from "../../Components/Juegos/JuegosPlay";
import JuegosMore from "../../Components/Juegos/JuegosMore";
import Loader from "../../Components/Custom/Loaders/Loader";
import { Helmet } from 'react-helmet-async';

const JuegosGameplay = () => {
    const { activeGames } = useGamesData();
    const [nowPlaying, setNowPlaying] = useState(null);
    const [filterNuevosGames, setFilterNuevosGames] = useState([]);
    const [fiteredActiveGames, setFiteredActiveGames] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        if(activeGames){
            const fitlerGames = async () => {
                const game = activeGames.filter(games => games.id === id);
                setNowPlaying(game[0]);

                const filterActive = activeGames.filter(games => games.id !== id);
                
                const filterNuevos = activeGames.filter(games=>{
                    return games.category.includes('Nuevos') && games.id !== id
                })

                setFiteredActiveGames(filterActive);
                setFilterNuevosGames(filterNuevos);
            };

            fitlerGames();
        }
    }, [id, activeGames]);

    return (
        <> 
            <Helmet>
                <title>Streamapp | Juegos Play</title>
                <meta name="description" content={'TV en vivo, on demand, series, películas, radio y más. Todo en un solo lugar gracias a tu cuenta Coppel Digital.'}/>
            </Helmet> 
            {
                !nowPlaying ? <Loader/> : 
                <>  
                    <JuegosPlay nowPlaying={nowPlaying}/>
                    <JuegosMore activeGames={fiteredActiveGames} nuevosGames={filterNuevosGames}/>
                </>
            }
        </>
    );
};

export default JuegosGameplay;