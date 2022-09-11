import React from 'react';
import { Link, useParams } from 'react-router-dom';
import basica from '../../Image/basica.png';
import familiar from '../../Image/familiar.png';
import premium from '../../Image/premium.png';

const Subscription = () => {
    const { token } = useParams();
    
    return (
        <>
            <section className="browse subscription">
                <div className="wrapper browse__contents">
                    <img src={process.env.REACT_APP_SITE_LOGO} className="logo" alt="SiteLogo" width="216" height="71"/>
                    <h2>Selecciona tu tipo deseado de membresía</h2>
                    <p>Disfruta de los beneficios de nuestro contenido sin comerciales y estrenos todos los días</p>
                    <ul>
                        <li>
                            <Link to="/">
                                <h4>Básica <br />$49.00/mes</h4>
                                <img className="screen" src={basica} alt="basica" width="344" height="344"/>
                                <div className="package">
                                    <p>·  1 dispositivo</p>
                                    <p>·  TV en vivo</p>
                                    <p>·  Radio</p>
                                    <p>·  Juegos</p>
                                    <p>·  Publicidad</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <h4>Familiar <br />$79.00/mes</h4>
                                <img className="screen" src={familiar} alt="familiar" width="344" height="344"/>
                                <div className="package">
                                    <p>·  5 dispositivos</p>
                                    <p>·  TV en vivo</p>
                                    <p>·  On Demand</p>
                                    <p>·  Radio</p>
                                    <p>·  Juegos</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <h4>Premium <br />$99.00/mes</h4>
                                <img className="screen" src={premium} alt="premium" width="344" height="344"/>
                                <div className="package">
                                    <p>·  8 dispositivos</p>
                                    <p>·  TV en vivo</p>
                                    <p>·  On Demand</p>
                                    <p>·  Radio</p>
                                    <p>·  Podcast</p>
                                    <p>·  Juegos</p>
                                </div>
                            </Link>
                        </li>
                    </ul>
                    <Link to={`/profile/edit/`+token}>
                        <button type="submit" className="main-btn secondary">Elegir</button>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Subscription;