import React from 'react';
import { Link } from 'react-router-dom';
import YoySvg from '../Image/SvgCodes/YoySvg';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="wrapper">
                    <div className="footer__credit">
                        <div className="footer__credit__logo" data-aos="fade" data-aos-offset="0" data-aos-delay="200" data-aos-duration="1000">
                            <YoySvg/>
                            <p>© 2022 Coppel.  Todos los derechos reservados.</p>
                        </div>
                        <ul>
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
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;