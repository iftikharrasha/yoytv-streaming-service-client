import React from 'react';
import { Link, useParams } from 'react-router-dom';
import edit from '../../Image/edit.svg';
import useAuth from '../../Utilities/Hooks/useAuth';

const EditProfile = () => {
    const { loggedInUser } = useAuth();
    const { token } = useParams();

    return (
        <>
            <section className="browse">
                <div className="wrapper browse__contents">
                    <img src={process.env.REACT_APP_SITE_LOGO} className="logo" alt="SiteLogo" width="216" height="71"/>
                    <h2>Administración de perfiles</h2>
                    <p>Selecciona el perfil que deseas editar</p>
                    <ul>
                        <li className="edit">
                            <Link to={`/profile/settings/`+token}>
                                <div className="screen">
                                    <img src={loggedInUser.picture} alt="personal" width="344" height="344"/>
                                </div>
                                <h6>{loggedInUser.name[0]}</h6>
                                <img className="pen" src={edit} alt="edit" width="344" height="344"/>
                            </Link>
                        </li>
                    </ul>
                    <Link to={`/profile/browse/`+token}>
                        <button type="submit" className="main-btn secondary">Listo</button>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default EditProfile;