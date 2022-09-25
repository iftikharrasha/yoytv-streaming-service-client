import React from 'react';
import logoGreen from '../../Image/LogoGreen.svg';
import estacionesThumb from '../../Image/estacionesThumb.png';

const EstacionesHero = () => {
    return (
            <>
                <section className="hero radioHero podcastHero">
                    <div className="heroBg heroFixed" style={{backgroundImage: `url(${estacionesThumb})`}}>
                        <div className="wrapper heroBg__contents">
                            <div className="heroBg__contents__text">
                                <img src={logoGreen} alt="site_logo" width="200" height="99" data-aos="fade" data-aos-offset="0" data-aos-delay="400" data-aos-duration="1000" data-aos-once="true"/>
                                <h1 data-aos="fade" data-aos-offset="0" data-aos-delay="600" data-aos-duration="1000" data-aos-once="true">Estaciones</h1>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
};

export default EstacionesHero;