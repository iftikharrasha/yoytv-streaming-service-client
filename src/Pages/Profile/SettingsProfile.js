import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { notyf } from "../../Utilities/Hooks/useNotification";
import edit from '../../Image/pen-bg.svg';
import logoGreen from '../../Image/LogoGreen.svg';
import useAuth from '../../Utilities/Hooks/useAuth';
import PassModal from '../../Components/Custom/Modals/PassModal';
import DeleteModal from '../../Components/Custom/Modals/DeleteModal';
import { connect } from "react-redux";

const SettingsProfile = ({ auth: { loading, isAuthenticated, data } }) => {
    const [passShow, setPassShow] = useState(false);  //modal popover for password
    const [deleteShow, setdeleteShow] = useState(false);  //modal popover for saving
    const { loggedInUser } = useAuth();
    const navigate = useNavigate();
    const { token } = useParams();

    const [editData, setEditData] = useState({
        name: data.data.name.split('@')[0],
        email: data.data.email,
        mobile: 55554215,
        age: 26,
        plan: "Familiar",
    });
    // console.log(editData);

    const handlePassword = (e) => {
        setPassShow(true);
        e.preventDefault();
    }

    const handleDataDelete = (e) => {
        setdeleteShow(true);
        e.preventDefault();
    }

    const handleSave = (e) => {
        // TODO: do creation functionality here
        
        e.preventDefault();
        navigate(`/profile/browse/`+token);
        notyf.open({
            type: 'success',
            message: 'Profile Updated Successfully.'
        });
    }

    return (
        <>
        {!loading && isAuthenticated && (
            <section className="browse">
                <div className="wrapper browse__contents">
                    <img src={logoGreen} className="logo" alt="SiteLogo" width="216" height="71"/>
                    <h2>Editar perfil</h2>
                    <div className="browse__contents__form">
                        <div className="browse__contents__form__left">
                            <div className="edit">
                                <div className="screen">
                                    <img src={data.data.picture} alt="personal" width="344" height="344"/>
                                </div>
                                <img className="pen" src={edit} alt="edit" width="70" height="70"/>
                            </div>
                        </div>
                        <div className="browse__contents__form__right">
                            <form>
                                <div className="single">
                                    <div className='single__content'>
                                        <div className='single__content__input'>
                                            <label htmlFor="name">Nombre completo:</label>
                                            <input 
                                                type="text" 
                                                name='name'
                                                value={editData.name}
                                                onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                                            />
                                            
                                            <label htmlFor="email">Email:</label>
                                            <input 
                                                type="email" 
                                                name='email'
                                                value={editData.email}
                                                onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                                            />
                                        </div>
                                        
                                        <div className='single__content__input'>
                                            <label htmlFor="age">Edad:</label>
                                            <input 
                                                type="number" 
                                                name="age"
                                                value={editData.age}
                                                onChange={(e) => setEditData({ ...editData, age: e.target.value })}
                                            />
                                            
                                            <label htmlFor="phone">Celular:</label>
                                            <input 
                                                type="phone" 
                                                name='phone'
                                                value={editData.mobile}
                                                onChange={(e) => setEditData({ ...editData, mobile: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="button">
                                        <div>
                                            <button type="submit" className="main-btn secondary" onClick={(e) => handlePassword(e)}>Cambiar contraseña</button>
                                        </div> 
                                    </div>
                                </div>
                                <div className="single">
                                    <h4>Plan</h4>
                                    <p>{editData.plan}</p>
                                    <div className="button">
                                        <Link to="/subscription">
                                            <button type="submit" className="main-btn secondary">Cambiar plan</button>
                                        </Link> 
                                        <Link to={`/profile/payment-details/`+token}>
                                            <button type="submit" className="main-btn secondary">Detalles de pagos</button>
                                        </Link> 
                                    </div>
                                </div>
                                <div className="single">
                                    <div className='single__content inputManage'>
                                        <div className='single__content__input'>
                                            <h4>Cuentas</h4>
                                            <div className="button">
                                                <Link to={`/profile/edit/`+token}>
                                                    <button type="submit" className="main-btn secondary">Administrar</button>
                                                </Link>
                                            </div>
                                        </div>
                                        
                                        <div className='single__content__input'>
                                            <ul className='manage'>
                                                <li>
                                                    <Link to={`/profile/settings/`+token}>
                                                        <div className="screen">
                                                            <img src={data.data.picture} alt="personal" width="344" height="344"/>
                                                        </div>
                                                        <img className="pen" src={edit} alt="edit" width="70" height="70"/>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={`/profile/settings/`+token}>
                                                        <div className="screen">
                                                            <img src={data.data.picture} alt="personal" width="344" height="344"/>
                                                        </div>
                                                        <img className="pen" src={edit} alt="edit" width="70" height="70"/>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="button">
                                    <span>
                                        <button type="submit" className="main-btn secondary" onClick={(e) => handleDataDelete(e)}>Eliminar cuenta</button>
                                    </span> 
                                    <Link to={`/profile/edit/`+token}>
                                        <button type="submit" className="main-btn secondary">Cancelar</button>
                                    </Link> 
                                    <span>
                                        <button type="submit" className="main-btn secondary" onClick={(e) => handleSave(e)}>Guardar cambios</button>
                                    </span> 
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )}

            <PassModal passShow={passShow} setPassShow={setPassShow}/>
            <DeleteModal deleteShow={deleteShow} setdeleteShow={setdeleteShow}/>
        </>
    );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(SettingsProfile);
