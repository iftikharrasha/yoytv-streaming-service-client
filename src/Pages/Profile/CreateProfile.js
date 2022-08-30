import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ques from '../../Image/ques.svg';
import personal from '../../Image/personal.svg';
import young from '../../Image/young.svg';

const CreateProfile = () => {
    const { token } = useParams();

    return (
        <>
            <section className="browse">
                <div className="wrapper browse__contents">
                    <img src={process.env.REACT_APP_SITE_LOGO} className="logo" alt="SiteLogo" width="216" height="71"/>
                    <h2>Creación de perfiles</h2>
                    <p>Selecciona el tipo de perfil que quieres crear</p>
                    <ul>
                        <li>
                            <Link to={`/profile/browse/`+token}>
                                <img className="screen" src={personal} alt="personal" width="344" height="344"/>
                                <h6>Personal</h6>
                            </Link>
                        </li>
                        <li>
                            <Link to={`/profile/browse/`+token}>
                                <img className="screen" src={young} alt="young" width="344" height="344"/>
                                <h6>Menor de edad</h6>
                            </Link>
                        </li>
                        <li>
                            <Link to={`/profile/browse/`+token}>
                                <div className="screen ques">
                                    <img src={ques} alt="browse" width="172" height="150"/>
                                </div>
                                <h6>Otro</h6>
                            </Link>
                        </li>
                    </ul>
                    <Link to={`/profile/browse/`+token}>
                        <button type="submit" className="main-btn secondary">Elegir</button>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default CreateProfile;