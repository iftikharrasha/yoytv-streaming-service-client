import React from 'react';
import {Helmet} from "react-helmet";

const AdJSOption = () => {
    return (
        <>
           <Helmet>
                <meta charSet="utf-8" />
                <title>Ad JS Option</title>

                <ins data-revive-zoneid="6" data-reviveid="6ffd800ce7b4f08322ac40b6ee39f888"></ins>
                <script async src="//ads.streamapp.mx/www/delivery/asyncjs.php"></script>
            </Helmet> 
            
            <section className="notFound">
                <div className="d-flex justify-content-center align-items-center">
                    <h2 className="reg-28">Ad Running</h2>
                    <div className="bar lit-14">
                        <h3>JS Option</h3>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AdJSOption;