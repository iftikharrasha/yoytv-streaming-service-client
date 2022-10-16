import React from 'react';
import { Link } from 'react-router-dom';
import { juegosData } from '../../Data/juegosCategories';

const JuegosCards = ({categories}) => {

    return (
    <>
        <section className="relativeTop radioTop podcastTop">
            {/* Only for landing parallex! */}
        </section>

        <section className="shows radio podcast podcastCard">
            <div className="radio__wrapper">
                <div className="radio__wrapper__card">
                {
                    juegosData?.message.map((item, index) => (
                    <div className="radio__wrapper__card__single" key={index}>
                        <Link className="radio__wrapper__card__single__hyper" to={`/juegos/gameplay/`+item.admin_video_id}>
                            <img src={item.image} alt="default_image"/>
                            <h6>{item.name}</h6>
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

export default JuegosCards;