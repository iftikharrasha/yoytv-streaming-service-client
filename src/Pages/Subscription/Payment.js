import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import useAuth from '../../Utilities/Hooks/useAuth';
import underlineGreen from '../../Image/underlineGreen.png';
import caret from '../../Image/caret-below.svg';

const Payment = () => {
    const { handleRegistration, error, setError, setSuccess } = useAuth();
    const [regData, setRegData] = useState({ name: '', cvv: '', digits: '', dateOfBirth: '', login_by: 'manual', device_type: 'web', device_token: 123456});
    const navigate = useNavigate();

    const register = async (e) => {
        e.preventDefault();
        navigate('/payment');

        //!registration functionality needed!
    //   setError('');
    //   setSuccess('');
    //   const response = await handleRegistration(regData);
    //   if(response.success){
    //       setError('');
    //   }
    }
    const cancel = async (e) => {
        e.preventDefault();
        navigate('/registration');
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
                                <img src={underlineGreen} alt="underlineGreen" width="346" height="19" className="underlineGreen"/>
                            </div>

                            <Form>
                                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                    <label htmlFor="usario">Pago con tarjeta</label>
                                    {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                            inline
                                            label="Débito"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                            autoComplete="off"
                                        />
                                        <Form.Check
                                            inline
                                            label="Crédito"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                            autoComplete="off"
                                        />
                                    </div>
                                ))}
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="exampleForm.ControlInput2">
                                    <label htmlFor="digits">Nº de tarjeta</label>
                                    <Form.Control
                                        type="number"
                                        placeholder="16 dígitos"
                                        value={regData.digits}
                                        onChange={(e) => setRegData({ ...regData, digits: e.target.value })}
                                        autoComplete="off"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="exampleForm.ControlInput4">
                                    <label htmlFor="usario">Fecha de vencimiento</label>
                                    <div className="select__group">
                                        <div className="single__dropdown">
                                            <select>
                                                <option value="Mes">Mes</option>
                                                <option value="Jan">Jan</option>
                                                <option value="Feb">Feb</option>
                                                <option value="Mar">Mar</option>
                                                <option value="Apr">Apr</option>
                                                <option value="May">May</option>
                                                <option value="Jun">Jun</option>
                                                <option value="Jul">Jul</option>
                                                <option value="Aug">Aug</option>
                                                <option value="Sep">Sep</option>
                                                <option value="Oct">Oct</option>
                                                <option value="Nov">Nov</option>
                                                <option value="Dec">Dec</option>
                                            </select>
                                            <img className="caret" width="20" height="20" src={caret} alt="caret" />
                                        </div>
                                        <div className="single__dropdown">
                                            <select>
                                                <option value="Año">Año</option>
                                                <option value="2022">2022</option>
                                                <option value="2023">2023</option>
                                                <option value="2024">2024</option>
                                                <option value="2025">2025</option>
                                            </select>
                                            <img className="caret" width="20" height="20" src={caret} alt="caret" />
                                        </div>
                                    </div>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput3">
                                    <label htmlFor="cvv">Código de seguridad</label>
                                    <div className="cvv">
                                        <Form.Control
                                            type="number"
                                            placeholder="CVV"
                                            value={regData.cvv}
                                            onChange={(e) => setRegData({ ...regData, cvv: e.target.value })}
                                            autoComplete="off"
                                        />
                                        <span title="3-digit number at the back of your card">?</span>
                                    </div>
                                </Form.Group>
                        
                                <div className="reg__button">
                                    <button type="submit" className="main-btn secondary" onClick={(e) => cancel(e)}>Cancelar</button>
                                    <button type="submit" className="main-btn secondary" onClick={(e) => register(e)}>Pagar</button>
                                </div>
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

export default Payment;