import React from "react";
import EstacionesHero from "../../Components/Estaciones/EstacionesHero";
import EstacionesCards from "../../Components/Estaciones/EstacionesCards";
import { Helmet } from 'react-helmet-async';

const Estaciones = () => {
    return (
        <>
            <Helmet>
                <title>Streamapp | Estaciones</title>
                <meta name="description" content={'TV en vivo, on demand, series, películas, radio y más. Todo en un solo lugar gracias a tu cuenta Coppel Digital.'}/>
            </Helmet> 
            <EstacionesHero/>
            <EstacionesCards/>
        </>
    );
};

export default Estaciones;