import React from 'react';
import { Link, useParams } from 'react-router-dom';
import plus from '../../Image/plus-greeen.svg';
import useAuth from '../../Utilities/Hooks/useAuth';

const BrowseProfile = () => {
    const { loggedInUser } = useAuth();
    const { token } = useParams();
    
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
                                <img className="screen" src={loggedInUser.picture} alt="browse" width="344" height="344"/>
                                <h6>{loggedInUser.name[0]}</h6>
                            </Link>
                        </li>
                        <li>
                            <Link to={`/profile/create/`+token}>
                                <div className="screen plus">
                                    <img src={plus} alt="browse" width="127" height="127"/>
                                </div>
                                <h6>Agregar perfil</h6>
                            </Link>
                        </li>
                    </ul>
                    <Link to={`/profile/edit/`+token}>
                        <button type="submit" className="main-btn secondary">Gestionar perfiles</button>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default BrowseProfile;