import React from 'react';
import { Link } from 'react-router-dom';
import logoGreen from '../Image/LogoGreen.svg';
import facebook from '../Image/facebook.svg';
import twitter from '../Image/twitter.svg';
import instagram from '../Image/instagram.svg';
import youtube from '../Image/youtube.svg';
import useUserApi from "../Utilities/Hooks/useLandingApi";

const Footer = () => {
    const { landingData, pages } = useUserApi();

    return (
        <>
            <footer className="footer">
                <div className="wrapper">
                    <div className="footer__credit">
                        <div className="footer__credit__logo" data-aos="fade" data-aos-offset="0" data-aos-delay="200" data-aos-duration="1000">
                            <img src={logoGreen} alt="logo" className="logo" width="80" height="30"/>
                            <p>© 2022 Coppel.  Todos los derechos reservados.</p>
                        </div>
                        <div className="list__items">
                            {/* <ul>
                                <li>
                                    <Link to="/faq" data-aos="fade" data-aos-offset="0" data-aos-delay="200" data-aos-duration="1000">FAQs</Link>
                                </li>
                                <li>
                                    <Link to="/contact" data-aos="fade" data-aos-offset="0" data-aos-delay="400" data-aos-duration="1000">Contacto</Link>
                                </li>
                                <li>
                                    <Link to="/privacy-policy" data-aos="fade" data-aos-offset="0" data-aos-delay="600" data-aos-duration="1000">Aviso de privacidad</Link>
                                </li>
                                <li>
                                    <Link to="/terms-conditions" data-aos="fade" data-aos-offset="0" data-aos-delay="700" data-aos-duration="1000">Términos y Condiciones</Link>
                                </li>
                            </ul> */}
                            <ul>
                                {pages?.map((page, index) => (
                                    <li key={index}>
                                        <Link to={`/streamapp/`+page?.page_type} data-aos="fade" data-aos-offset="0" data-aos-delay="200" data-aos-duration="1000">{page.title}</Link>
                                    </li>
                                ))}
                            </ul>
                            <ul className='socials'>
                                <li>
                                    <a href={landingData?.facebook_link} target="_blank" rel="noreferrer" data-aos="fade" data-aos-offset="0" data-aos-delay="200" data-aos-duration="1000">
                                        <img src={facebook} alt="facebook" width="20px" height="20px"/>
                                    </a>
                                </li>
                                <li>
                                    <a href={landingData?.twitter_link} target="_blank" rel="noreferrer" data-aos="fade" data-aos-offset="0" data-aos-delay="400" data-aos-duration="1000">
                                        <img src={twitter} alt="twitter" width="20px" height="20px"/>
                                    </a>
                                </li>
                                <li>
                                    <a href={landingData?.instagram_link} target="_blank" rel="noreferrer" data-aos="fade" data-aos-offset="0" data-aos-delay="600" data-aos-duration="1000">
                                        <img src={instagram} alt="instagram" width="20px" height="20px"/>
                                    </a>
                                </li>
                                <li>
                                    <a href={landingData?.twitter_link} target="_blank" rel="noreferrer" data-aos="fade" data-aos-offset="0" data-aos-delay="700" data-aos-duration="1000">
                                        <img src={youtube} alt="youtube" width="20px" height="20px"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;