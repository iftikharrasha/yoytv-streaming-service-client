import React from "react";
import logoGreen from '../../Image/LogoGreen.svg';
import juegosBg from '../../Image/juegosBg.png';
import useGamesData from "../../Utilities/Hooks/useGamesData";
import JuegosMore from "../../Components/Juegos/JuegosMore";
import Loader from "../../Components/Custom/Loaders/Loader";

const Juegos = () => {
    const { allGames, activeGames, loading } = useGamesData();

    return (
        <> 
            <section className="hero radioHero">
                <div className="heroBg heroFixed" style={{backgroundImage: `url(${juegosBg})`}}>
                    <div className="wrapper heroBg__contents">
                        <div className="heroBg__contents__text">
                            <img src={logoGreen} alt="site_logo" width="200" height="99" data-aos="fade" data-aos-offset="0" data-aos-delay="400" data-aos-duration="1000" data-aos-once="true"/>
                            <h1 data-aos="fade" data-aos-offset="0" data-aos-delay="600" data-aos-duration="1000" data-aos-once="true">Juegos retro</h1>
                            <h2 data-aos="fade" data-aos-delay="800" data-aos-offset="0" data-aos-duration="1000" data-aos-once="true"><span>Gratis</span></h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relativeTop radioTop">
                {/* Only for landing parallex! */}
            </section>

            {
                loading ? <Loader /> : 
                <JuegosMore allGames={allGames} activeGames={activeGames}/>
            }
        </>
    );
};

export default Juegos;