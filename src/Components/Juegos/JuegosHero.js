import React from 'react';
import logoGreen from '../../Image/LogoGreen.svg';
import juegosThumb from '../../Image/juegosThumb.png';
import useUserApi from "../../Utilities/Hooks/useLandingApi";

const JuegosHero = () => {
    const { landingData } = useUserApi();

    return (
            <>
                <section className="hero radioHero podcastHero">
                    <div className="heroBg heroFixed" style={{backgroundImage: `url(${juegosThumb})`}}>
                        <div className="wrapper heroBg__contents">
                            <div className="heroBg__contents__text">
                                <img src={landingData?.site_logo} alt="site_logo" width="200" height="99" data-aos="fade" data-aos-offset="0" data-aos-delay="400" data-aos-duration="1000" data-aos-once="true"/>
                                <h1 data-aos="fade" data-aos-offset="0" data-aos-delay="600" data-aos-duration="1000" data-aos-once="true">Categorías</h1>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
};

export default JuegosHero;