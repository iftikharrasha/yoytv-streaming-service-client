import React from 'react';
import arrow from '../../Image/subarrow.svg';
import useWindowSize from '../../Utilities/Hooks/useWindowSize';

const Hero = ({landingData, loggedInUser}) => {
    const { windowWidth } = useWindowSize();
    const { home_page_bg_image, site_logo, home_banner_heading } = landingData;

    return (
            <>
                <section className="hero">
                    <div className="heroBg heroFixed" style={{backgroundImage: `url(${home_page_bg_image})`}}>
                        <div className="wrapper heroBg__contents">
                            {
                                windowWidth > 575.98 ? 
                                <img src={site_logo} alt="site_logo" width="200" height="99" data-aos="fade" data-aos-offset="0" data-aos-delay="400" data-aos-duration="1000" data-aos-once="true"/>: null
                            }
                            <h1 data-aos="fade" data-aos-offset="0" data-aos-delay="600" data-aos-duration="1000" data-aos-once="true">TV en vivo, películas, series y más…</h1>
                            <h2 data-aos="fade" data-aos-delay="800" data-aos-offset="0" data-aos-duration="1000" data-aos-once="true">Disfruta de todo el contenido con <br /> tu suscripción <span>Coppel Digital</span></h2>
                            
                            {
                                loggedInUser?.isSignedIn ? 
                                <ul>
                                    <li>
                                        <button data-aos="fade" data-aos-offset="0" data-aos-delay="1200" data-aos-duration="1000" data-aos-once="true">
                                            <span>Mas información</span> 
                                        </button>
                                    </li>
                                </ul> :
                                <ul>
                                    <li>
                                        <button data-aos="fade" data-aos-offset="0" data-aos-delay="1200" data-aos-duration="1000" data-aos-once="true">
                                            <span>Suscribirme</span> 
                                        </button>
                                    </li>
                                </ul>
                            }
                            
                            {
                                loggedInUser?.isSignedIn ? null :
                                    windowWidth > 575.98 ? 
                                    <h6 data-aos="fade" data-aos-offset="0" data-aos-delay="1200" data-aos-duration="1000" data-aos-once="true"><img src={arrow} alt="arrow" width="30" height="22"/> <span>Inicia tu prueba gratuita de 7 días</span></h6> : null
                            }

                        </div>
                    </div>
                </section>
            </>
        );
};

export default Hero;