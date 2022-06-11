import React from 'react';
import { Link } from 'react-router-dom';
import YoySvg from '../Image/SvgCodes/YoySvg';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="wrapper">
                    <div className="footer__credit">
                        <div className="footer__credit__logo">
                            <YoySvg/>
                            <p>© 2022 Coppel.  Todos los derechos reservados.</p>
                        </div>
                        <ul>
                            <li>
                                <Link to="/privacy-policy">Política de privacidad</Link>
                            </li>
                            <li>
                                <Link to="/terms-conditions">Términos de uso</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;