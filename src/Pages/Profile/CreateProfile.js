import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import personal from '../../Image/personal.svg';
import edit from '../../Image/pen-bg.svg';
import { notyf } from "../../Utilities/Hooks/useNotification";

const CreateProfile = () => {
    const { token } = useParams();
    const navigate = useNavigate();
    
    const [createData, setCreateData] = useState({
        name: "",
        email: "",
        mobile: "",
        age: "",
        plan: "",
    });

    const handleSave = (e) => {
        // TODO: do creation functionality here
        
        e.preventDefault();
        navigate(`/profile/browse/`+token);
        notyf.open({
            type: 'success',
            message: 'Profile created successfully'
        });
    }

    return (
        <>
            <section className="browse">
                <div className="wrapper browse__contents">
                    <h2>Agregar perfil</h2>
                    <div className="browse__contents__form">
                        <div className="browse__contents__form__left">
                            <div className="edit">
                                <div className="screen">
                                    <img src={personal} alt="personal" width="344" height="344"/>
                                </div>
                                <img className="pen" src={edit} alt="edit" width="70" height="70"/>
                            </div>
                        </div>
                        <div className="browse__contents__form__right">
                            <form action="">
                                <div className="single">
                                    <div className='single__content'>
                                        <div className='single__content__input'>
                                            <label htmlFor="name">Nombre completo:</label>
                                            <input 
                                                type="text" 
                                                name='name'
                                                value={createData.name}
                                                placeholder='Nombre completo'
                                                onChange={(e) => setCreateData({ ...createData, name: e.target.value })}
                                            />
                                        </div>
                                        
                                        <div className='single__content__input'>
                                            <label htmlFor="age">Edad:</label>
                                            <input 
                                                type="number" 
                                                name="age"
                                                value={createData.age}
                                                placeholder='Edad'
                                                onChange={(e) => setCreateData({ ...createData, age: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="button">
                                    <span>
                                        <button type="submit" className="main-btn secondary" onClick={(e) => handleSave(e)}>Guardar</button>
                                    </span> 
                                    <Link to={`/profile/browse/`+token}>
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

export default CreateProfile;