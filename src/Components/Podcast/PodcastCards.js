import React, { useState } from 'react';
import { radioData } from '../../Data/radioData';
import PodcastModal from '../Custom/Modals/PodcastModal';

const PodcastCards = () => {
    const [lgShow, setLgShow] = useState(false);
    const [details, setDetails] = useState({});
    const [isFetching, setIsFetching] = useState(true);

    const handlePopup = (data) => {
        setDetails(data);
        setIsFetching(false);
        setLgShow(true);
    }

    return (
    <>
        <section className="relativeTop radioTop podcastTop">
            {/* Only for landing parallex! */}
        </section>

        <section className="shows radio podcast podcastCard">
            <div className="radio__wrapper">
                <div className="radio__wrapper__card">
                {
                    radioData?.data.slice(10,20).map((item, index) => (
                    <div className="radio__wrapper__card__single" key={index} onClick={() => handlePopup(item)}>
                        <div className="radio__wrapper__card__single__hyper">
                            <img src={item.default_image} alt="default_image"/>
                            <h6>{item.title}</h6>
                        </div>
                    </div>
                    ))
                }
                </div>
            </div>
        </section>
        
        {!isFetching ? <PodcastModal lgShow={lgShow} setLgShow={setLgShow} details={details}/> : null}
    </>
    );
};

export default PodcastCards;