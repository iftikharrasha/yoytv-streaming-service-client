import React from 'react';
import logoGreen from '../../Image/LogoGreen.svg';
import radioHero from '../../Image/radioHero.png';

const RadioHero = () => {
    return (
            <>
                <section className="hero radioHero">
                    <div className="heroBg heroFixed" style={{backgroundImage: `url(${radioHero})`}}>
                        <div className="wrapper heroBg__contents">
                            <div className="heroBg__contents__text">
                                <img src={logoGreen} alt="site_logo" width="200" height="99" data-aos="fade" data-aos-offset="0" data-aos-delay="400" data-aos-duration="1000" data-aos-once="true"/>
                                <h1 data-aos="fade" data-aos-offset="0" data-aos-delay="600" data-aos-duration="1000" data-aos-once="true">Es mío, es tuyo,</h1>
                                <h2 data-aos="fade" data-aos-delay="800" data-aos-offset="0" data-aos-duration="1000" data-aos-once="true"><span>es de todos.</span> Es gratis.</h2>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
};

export default RadioHero;