import React from 'react';
import { Link, useParams } from 'react-router-dom';
import edit from '../../Image/pen-bg.svg';
import caret from '../../Image/caret-below.svg';
import useAuth from '../../Utilities/Hooks/useAuth';

const SettingsProfile = () => {
    const { loggedInUser } = useAuth();
    const { token } = useParams();

    return (
        <>
            <section className="browse">
                <div className="wrapper browse__contents">
                    <img src={process.env.REACT_APP_SITE_LOGO} className="logo" alt="SiteLogo" width="216" height="71"/>
                    <h2>Editar perfil</h2>
                    <div className="browse__contents__form">
                        <div className="browse__contents__form__left">
                            <div className="edit">
                                <div className="screen">
                                    <img src={loggedInUser.picture} alt="personal" width="344" height="344"/>
                                </div>
                                <img className="pen" src={edit} alt="edit" width="70" height="70"/>
                            </div>
                        </div>
                        <div className="browse__contents__form__right">
                            <form action="">
                                <div className="single">
                                    <h4 className="mt-0">Usario</h4>
                                    <h6>{loggedInUser.name}</h6>
                                    <h4>Idioma:</h4>
                                    <div className="single__dropdown">
                                        <select>
                                            <option value="Espanol">Español</option>
                                            <option value="English">English</option>
                                            <option value="French">French</option>
                                            <option value="Hindi">Hindi</option>
                                            <option value="Japanese">Japanese</option>
                                        </select>
                                        <img class="caret" width="20" height="20" src={caret} alt="caret" />
                                    </div>
                                </div>
                                <div className="single">
                                    <h4>Configuración por edad:</h4>
                                    <h6>Todas las clasificaciones por edad</h6>
                                    <p>Mostrar títulos de todas las clasificaciones en este perfil</p>
                                    <div className="button">
                                        <Link to={`/profile/browse/`+token}>
                                            <button type="submit" className="main-btn secondary">Editar</button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="single border-0 mb-0">
                                    <h4>Controles de reproducción automática</h4>
                                    <ul class="terms">
                                        <li> 
                                            <input type="checkbox" id="term1" name="term1" value="term1" className="checkbox"/>
                                            <label for="term1">Reproducir automáticamente el siguiente episodio de una serie en todos los dispositivos conectados.</label>
                                        </li>
                                        <li> 
                                            <input type="checkbox" id="term2" name="term2" value="term2" className="checkbox"/>
                                            <label for="term2">Se reproducen automáticamente los avances mientras navegas en todos los dispositivos conectados.</label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="button">
                                    <Link to={`/profile/browse/`+token}>
                                        <button type="submit" className="main-btn secondary">Guardar cambios</button>
                                    </Link> 
                                    <Link to={`/profile/edit/`+token}>
                                        <button type="submit" className="main-btn secondary">Cancelar</button>
                                    </Link> 
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SettingsProfile;