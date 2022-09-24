import React from 'react';
import logoGreen from '../../Image/LogoGreen.svg';
import podcastGreen from '../../Image/podcastGreen.png';

const PodcastHero = () => {
    return (
            <>
                <section className="hero radioHero podcastHero">
                    <div className="heroBg heroFixed" style={{backgroundImage: `url(${podcastGreen})`}}>
                        <div className="wrapper heroBg__contents">
                            <div className="heroBg__contents__text">
                                <img src={logoGreen} alt="site_logo" width="200" height="99" data-aos="fade" data-aos-offset="0" data-aos-delay="400" data-aos-duration="1000" data-aos-once="true"/>
                                <h1 data-aos="fade" data-aos-offset="0" data-aos-delay="600" data-aos-duration="1000" data-aos-once="true">Podcast</h1>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
};

export default PodcastHero;