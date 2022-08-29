import React from 'react';
import { Link } from 'react-router-dom';
import browse from '../../Image/browse.png';
import edit from '../../Image/edit.svg';
import useAuth from '../../Utilities/Hooks/useAuth';

const EditProfile = () => {
    const { loggedInUser } = useAuth();

    return (
        <>
            <section className="browse">
                <div className="wrapper browse__contents">
                    <img src={process.env.REACT_APP_SITE_LOGO} className="logo" alt="SiteLogo" width="216" height="71"/>
                    <h2>Administración de perfiles</h2>
                    <p>Selecciona el perfil que deseas editar</p>
                    <ul>
                        <li className="edit">
                            <Link to="/profile/edit">
                                <img className="screen" src={loggedInUser.picture} alt="personal" width="344" height="344"/>
                                <h6>{loggedInUser.name[0]}</h6>
                            </Link>
                            <img className="pen" src={edit} alt="edit" width="344" height="344"/>
                        </li>
                        {/* <li className="edit">
                            <Link to="/profile/edit">
                                <img className="screen" src={browse} alt="young" width="344" height="344"/>
                                <h6>Toñito</h6>
                            </Link>
                            <img className="pen" src={edit} alt="edit" width="344" height="344"/>
                        </li> */}
                    </ul>
                    <Link to="/profile/browse">
                        <button type="submit" className="main-btn secondary">Listo</button>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default EditProfile;