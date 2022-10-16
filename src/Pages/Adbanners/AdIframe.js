import React from 'react';
import {Helmet} from "react-helmet";

const AdIframe = () => {
    return (
        <>
           <Helmet>
                <meta charSet="utf-8" />
                <title>Ad Iframe</title>
            </Helmet> 
            
            <section className="notFound">
                <div className="d-flex justify-content-center align-items-center">
                    <h2 className="reg-28">Ad Running</h2>
                    <div className="bar lit-14">
                        <h3>Iframe</h3>
                    </div>
                    <iframe title="ad_on_demand" id='a59ac1a0' name='a59ac1a0' src='https://ads.streamapp.mx/www/delivery/afr.php?zoneid=6&amp;cb=INSERT_RANDOM_NUMBER_HERE' frameBorder='0' scrolling='no' width='446' height='852' allow='autoplay'>
                        <a href='https://ads.streamapp.mx/www/delivery/ck.php?n=a40254b1&amp;cb=INSERT_RANDOM_NUMBER_HERE' target='_blank' rel="noreferrer">
                            <img src='https://ads.streamapp.mx/www/delivery/avw.php?zoneid=6&amp;cb=INSERT_RANDOM_NUMBER_HERE&amp;n=a40254b1' border='0' alt='' />
                        </a>
                    </iframe>
                </div>
            </section>
        </>
    );
};

export default AdIframe;