import React from 'react';
import { Link } from 'react-router-dom';
import browse from '../../Image/browse.png';
import plus from '../../Image/plus-greeen.svg';

const BrowseProfile = () => {
    return (
        <>
            <section className="browse">
                <div className="wrapper browse__contents">
                    <img src={process.env.REACT_APP_SITE_LOGO} className="logo" alt="SiteLogo" width="216" height="71"/>
                    <h2>¡Cuenta registrada!</h2>
                    <p>Bienvenid@ a la plataforma multimedia YOY. Selecciona tu perfil para continuar navegando dentro de nuestro contenido exclusivo</p>
                    <ul>
                        <li>
                            <Link to="/">
                                <img className="screen" src={browse} alt="browse" width="344" height="344"/>
                                <h6>Alejandra</h6>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <img className="screen" src={browse} alt="browse" width="344" height="344"/>
                                <h6>Toñito</h6>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <div className="screen border-0">
                                    <img className="plus" src={plus} alt="browse" width="127" height="127"/>
                                </div>
                                <h6>Agregar perfil</h6>
                            </Link>
                        </li>
                    </ul>
                    <button type="submit" className="main-btn secondary">Gestionar perfiles</button>
                </div>
            </section>
        </>
    );
};

export default BrowseProfile;