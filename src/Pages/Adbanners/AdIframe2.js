import React from 'react';
import {Helmet} from "react-helmet";

const AdIframe2 = () => {
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
                    <iframe id='aea80f86' name='aea80f86' src='https://ads.streamapp.mx/www/delivery/afr.php?zoneid=2&amp;cb=INSERT_RANDOM_NUMBER_HERE' frameborder='0' scrolling='no' width='516' height='541' allow='autoplay'>
                        <a href='https://ads.streamapp.mx/www/delivery/ck.php?n=a0ffe5c7&amp;cb=INSERT_RANDOM_NUMBER_HERE' target='_blank'>
                            <img src='https://ads.streamapp.mx/www/delivery/avw.php?zoneid=2&amp;cb=INSERT_RANDOM_NUMBER_HERE&amp;n=a0ffe5c7' border='0' alt='' />
                        </a>
                    </iframe>
                </div>
            </section>
        </>
    );
};

export default AdIframe2;