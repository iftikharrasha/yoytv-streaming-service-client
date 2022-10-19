import React from 'react';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
    return (
        <>
            <Helmet>
                <title>YOY TV | Not Found</title>
                <meta name="description" content={'TV en vivo, on demand, series, películas, radio y más. Todo en un solo lugar gracias a tu cuenta Coppel Digital.'}/>
            </Helmet> 
            <section className="notFound">
                <div className="d-flex justify-content-center align-items-center">
                    <h2 className="reg-28">404</h2>
                    <div className="bar lit-14">
                        <h3>Not Found!</h3>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NotFound;