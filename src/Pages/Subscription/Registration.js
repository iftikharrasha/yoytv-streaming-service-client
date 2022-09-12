import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import underlineGreen from '../../Image/underlineGreen.png';
import useAuth from '../../Utilities/Hooks/useAuth';

const Registration = () => {
    const { handleRegistration, error, setError, setSuccess } = useAuth();
    const [regData, setRegData] = useState({ name: '', password: '', email: '', dateOfBirth: '', login_by: 'manual', device_type: 'web', device_token: 123456});

    const register = async () => {
      setError('');
      setSuccess('');
    //   const response = await handleRegistration(regData);
    //   if(response.success){
    //       setError('');
    //   }
    }

    return (
        <>
            <section className="browse registration">
                <div className="wrapper browse__contents">
                    <div className="registration__form">
                        <div className="registration__form__contents">
                            <div className="registration__form__contents__top">
                                <img src={process.env.REACT_APP_SITE_LOGO} className="logo" alt="SiteLogo" width="216" height="71"/>
                                <p>STREAMING PARA TODOS</p>
                                <img src={underlineGreen} alt="underlineGreen" width="346" height="19"/>
                            </div>

                            <Form>
                                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                    <label for="usario">Usuario</label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ingresa tu usuario"
                                        value={regData.name}
                                        onChange={(e) => setRegData({ ...regData, name: e.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="exampleForm.ControlInput2">
                                    <label for="usario">Correo electrónico</label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Correo electrónico"
                                        value={regData.email}
                                        onChange={(e) => setRegData({ ...regData, email: e.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="exampleForm.ControlInput3">
                                    <label for="usario">Contraseña</label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Contraseña"
                                        value={regData.password}
                                        onChange={(e) => setRegData({ ...regData, password: e.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput4">
                                    <label for="usario">Año de nacimiento</label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Año de nacimiento"
                                        value={regData.dateOfBirth}
                                        onChange={(e) => setRegData({ ...regData, dateOfBirth: e.target.value })}
                                    />
                                </Form.Group>
                            
                                <Link to="/registration" onClick={register}>
                                    <button type="submit" className="main-btn secondary">Registrarme</button>
                                </Link>
                            </Form>

                            {
                                error ? <p>{error}</p> : null
                            }
                        </div>
                    </div>
                    <h6 className="adfree">Si deseas continuar con la versión con anuncios <span>totalmente gratis,</span> <Link to="/ad-free">da click aquí</Link></h6>
                </div>
            </section>
        </>
    );
};

export default Registration;