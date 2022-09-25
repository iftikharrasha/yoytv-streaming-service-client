import React from 'react';
import { Link } from 'react-router-dom';
import { radioData } from '../../Data/radioData';

const EstacionesCards = () => {

    return (
    <>
        <section className="relativeTop radioTop podcastTop">
            {/* Only for landing parallex! */}
        </section>

        <section className="shows radio podcast podcastCard">
            <div className="radio__wrapper">
                <div className="radio__wrapper__card">
                {
                    radioData?.data.slice(0,10).map((item, index) => (
                    <div className="radio__wrapper__card__single" key={index}>
                        <Link className="radio__wrapper__card__single__hyper" to={`/estaciones/player/`+item.admin_video_id}>
                            <img src={item.default_image} alt="default_image"/>
                            <h6>{item.title}</h6>
                        </Link>
                    </div>
                    ))
                }
                </div>
            </div>
        </section>
    </>
    );
};

export default EstacionesCards;