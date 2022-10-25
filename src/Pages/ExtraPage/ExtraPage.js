import Loader from 'Components/Custom/Loaders/Loader';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import useUserApi from "../../Utilities/Hooks/useLandingApi";

const ExtraPage = () => {
    const {type} = useParams();
    const { pages } = useUserApi();
    const [pageDetails, setPageDetails] = useState({});

    useEffect(() => {
        if(pages){
            const details = pages.filter(page => page.page_type === type);
            setPageDetails(details[0]);
        }
    }, [type, pages])

    return (
        <>
            <Helmet>
                <title>Streamapp | {type}</title>
                <meta name="description" content={'TV en vivo, on demand, series, películas, radio y más. Todo en un solo lugar gracias a tu cuenta Coppel Digital.'}/>
            </Helmet> 
            {
                !pageDetails ? <Loader/>
                : <section className="pageDetails">
                    <h4>{pageDetails.title}</h4>
                    <p>{pageDetails.description}</p>
                </section>
            }
        </>
    );
};

export default ExtraPage;