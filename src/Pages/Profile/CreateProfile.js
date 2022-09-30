import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import personal from '../../Image/personal.svg';
import edit from '../../Image/pen-bg.svg';

const CreateProfile = () => {
    const { token } = useParams();
    
    const [editData, setEditData] = useState({
        name: "",
        email: "",
        mobile: "",
        age: "",
        plan: "Familiar",
    });

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
                                                value={editData.name}
                                                placeholder='Nombre completo'
                                                onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                                            />
                                        </div>
                                        
                                        <div className='single__content__input'>
                                            <label htmlFor="age">Edad:</label>
                                            <input 
                                                type="number" 
                                                name="age"
                                                value={editData.age}
                                                placeholder='Edad'
                                                onChange={(e) => setEditData({ ...editData, age: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="button">
                                    <Link to={`/profile/browse/`+token}>
                                        <button type="submit" className="main-btn secondary">Guardar</button>
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

export default CreateProfile;