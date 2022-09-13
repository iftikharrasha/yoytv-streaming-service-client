import React, { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import close from '../../../Image/close.svg';
import logoGreen from '../../../Image/LogoGreen.svg';
import useAuth from '../../../Utilities/Hooks/useAuth';

const LoginModal = (props) => {
  const { handleLogin, handleRegistration, error, setError, success, setSuccess } = useAuth();
  const { show, setShow } = props;
  const [mode, setMode] = useState("login");

  const handleLoginModal = () => {
    setError('');
    setSuccess('');
    setMode("login");
  };
  const handleRegisterModal = () => {
    setError('');
    setSuccess('');
    setMode("register");
  };

  const [regData, setRegData] = useState({ name: '', password: '', email: '', dateOfBirth: '', login_by: 'manual', device_type: 'web', device_token: 123456});
  const [logData, setLogData] = useState({ email: '', password: '', login_by: 'manual', device_type: 'web', device_token: 123456});

  const login = async () => {
    setError('');
    setSuccess('');
    const response = await handleLogin(logData);
    if(response.success){
        setShow(false)
    }
  }

  const register = async () => {
    setError('');
    setSuccess('');
    const response = await handleRegistration(regData);
    if(response.success){
        setError('');
        setMode("login");
    }
  }

    return (
        <>
        {
        mode === "login" ?
        <Modal show={show} onHide={() => setShow(false)} className="authModal" aria-labelledby="contained-modal-title-vcenter-1" centered>
            <Modal.Header>
                <img src={close} alt="close" width="32" height="32" onClick={() => setShow(false)}/>
            </Modal.Header>
            <Modal.Body>
                <img src={logoGreen} alt="SiteLogo" width="216" height="221"/>
                <h2>Iniciar Sesión</h2>
                <p>Utiliza tu cuenta Coppel Digital. ¿No tienes membresía?</p>
                <h5 onClick={handleRegisterModal}>Regístrate aquí</h5>
                <Form>
                    <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                        <Form.Control
                            type="email"
                            placeholder="Ingresa tu usuario"
                            autoFocus
                            value={logData.email}
                            onChange={(e) => setLogData({ ...logData, email: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="exampleForm.ControlInput2">
                        <Form.Control
                            type="password"
                            placeholder="Contrasena"
                            autoComplete="off"
                            value={logData.password}
                            onChange={(e) => setLogData({ ...logData, password: e.target.value })}
                        />
                    </Form.Group>
                </Form>

                {
                    error ? <p>{error}</p> : null
                }

                {
                    success ? <p>{success} <br /> Por favor inicia sesión ahora!</p> : null
                }
                
            </Modal.Body>
            <Modal.Footer>
                <button type="submit" className="main-btn" onClick={login}>Entrar</button>
            </Modal.Footer>
        </Modal> :
        <Modal show={show} onHide={() => setShow(false)} className="authModal" aria-labelledby="contained-modal-title-vcenter-2" centered>
            <Modal.Header>
                <img src={close} alt="close" width="32" height="32" onClick={() => setShow(false)}/>
            </Modal.Header>
            <Modal.Body>
                <img src={logoGreen} alt="SiteLogo" width="216" height="221"/>
                <h2>Añadir Breaking Bad a Mi Lista</h2>
                <p>Para guardar tu podcast en favoritos es necesario una membresía ¿Tienes membresía? <span onClick={handleLoginModal}>Inicia sesión</span></p>
                <Form>
                    <Form.Group className="mb-4" controlId="exampleForm.ControlInput3">
                        <Form.Control
                            type="text"
                            placeholder="Ingresa tu usuario"
                            value={regData.name}
                            onChange={(e) => setRegData({ ...regData, name: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="exampleForm.ControlInput4">
                        <Form.Control
                            type="email"
                            placeholder="Correo electrónico"
                            value={regData.email}
                            onChange={(e) => setRegData({ ...regData, email: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="exampleForm.ControlInput5">
                        <Form.Control
                            type="password"
                            placeholder="Contraseña"
                            value={regData.password}
                            onChange={(e) => setRegData({ ...regData, password: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput6">
                        <Form.Control
                            type="text"
                            placeholder="Año de nacimiento"
                            value={regData.dateOfBirth}
                            onChange={(e) => setRegData({ ...regData, dateOfBirth: e.target.value })}
                        />
                    </Form.Group>
                </Form>

                {
                    error ? <p>{error}</p> : null
                }
            </Modal.Body>
            <Modal.Footer>
                <button className="main-btn" onClick={register}>
                    Registrarme
                </button>
            </Modal.Footer>
        </Modal>
        }
        </>
    );
};

export default LoginModal;