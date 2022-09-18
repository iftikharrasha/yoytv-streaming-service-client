import React from 'react';
import { Link } from 'react-router-dom';
import { radioData } from '../../Data/radioData';
import adbanner3 from '../../Image/adbanner3.png';

const Seasons = () => {
    return (
    <>
        <section className="relativeTop radioTop">
            {/* Only for landing parallex! */}
        </section>

        <section className="shows radio">
            <div className="shows__title">
                <h2 data-aos="fade" data-aos-offset="0" data-aos-delay="200" data-aos-duration="1000">Estaciones</h2>
            </div>

            <div className="radio__wrapper">
                <div className="radio__wrapper__card">
                {
                    radioData?.data.map((item, index) => (
                    <div className="radio__wrapper__card__single" key={index}>
                        <Link to="/juegos">
                            <img src={item.default_image} alt="default_image"/>
                        </Link>
                        <h6>{item.title}</h6>
                    </div>
                    ))
                }
                    <div className="adbanner">
                        <img src={adbanner3} alt="adbanner3"/>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
};

export default Seasons;