import React, { useEffect, useState } from "react";
import logoGreen from '../../Image/LogoGreen.svg';
import juegosBg from '../../Image/juegosBg.png';
import useGamesData from "../../Utilities/Hooks/useGamesData";
import JuegosMore from "../../Components/Juegos/JuegosMore";
import Loader from "../../Components/Custom/Loaders/Loader";
import { useParams } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

const Juegos = () => {
    const { allGames, activeGames } = useGamesData();
    const { category } = useParams();
    const [fiteredAllGames, setFiteredAllGames] = useState([]);
    const [fiteredActiveGames, setFiteredActiveGames] = useState([]);
    
    useEffect(() => {
        if(allGames && activeGames){
            const fitlerGames = async () => {
                const filterAll = allGames.filter(el=>{
                    return el.category.includes(category)
                })

                const filterActive = activeGames.filter(el=>{
                    return el.category.includes(category)
                })

                setFiteredAllGames(filterAll);
                setFiteredActiveGames(filterActive);

                //linear category filtering
                // const filterAll = allGames.filter(game => game.category === category);
                // setFiteredAllGames(filterAll);
                // const filterActive = activeGames.filter(game => game.category === category);
                // setFiteredActiveGames(filterActive);
            };

            fitlerGames();
        }
    }, [category, allGames, activeGames]);
 
    return (
        <> 
            <Helmet>
                <title>YOY TV | Juegos {category}</title>
                <meta name="description" content={'TV en vivo, on demand, series, películas, radio y más. Todo en un solo lugar gracias a tu cuenta Coppel Digital.'}/>
            </Helmet> 
            <section className="hero radioHero">
                <div className="heroBg heroFixed" style={{backgroundImage: `url(${juegosBg})`}}>
                    <div className="wrapper heroBg__contents">
                        <div className="heroBg__contents__text">
                            <img src={logoGreen} alt="site_logo" width="200" height="99" data-aos="fade" data-aos-offset="0" data-aos-delay="400" data-aos-duration="1000" data-aos-once="true"/>
                            <h1 data-aos="fade" data-aos-offset="0" data-aos-delay="600" data-aos-duration="1000" data-aos-once="true">{category === "all" ? 'Todos los juegos' : `Juegos ${category}`}</h1>
                            <h2 data-aos="fade" data-aos-delay="800" data-aos-offset="0" data-aos-duration="1000" data-aos-once="true"><span>Gratis</span></h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relativeTop radioTop">
                {/* Only for landing parallex! */}
            </section>

            {
                category === "all" ? 
                    !allGames && !activeGames ? <Loader /> : 
                    <JuegosMore allGames={allGames} activeGames={activeGames} category={category}/>
                    : !fiteredAllGames && !fiteredActiveGames ? <Loader /> : 
                    <JuegosMore allGames={fiteredAllGames} activeGames={fiteredActiveGames} category={category}/>
            }
        </>
    );
};

export default Juegos;