import React, { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import close from '../../../Image/close.svg';
import useAuth from '../../../Utilities/Hooks/useAuth';

const LoginModal = (props) => {
  const { handleLogin, handleRegistration } = useAuth();
  const { show, setShow } = props;
  const [mode, setMode] = useState("login");
  const handleClose = () => setShow(false);
  const handleRegMode = () => setMode("register");
  const handleLogMode = () => setMode("login");

  const [regData, setRegData] = useState({ userName: '', password: '', emailAddress: '', dateOfBirth: ''});
  const [logData, setLogData] = useState({ userName: '', password: ''});

  const login = async () => {
    handleClose();
    handleLogin(logData);
  }

  const register = async () => {
    handleClose();
    handleRegistration(regData);
  }

    return (
        <>
        {
        mode === "login" ?
        <Modal show={show} onHide={handleClose} className="authModal" aria-labelledby="contained-modal-title-vcenter-1" centered>
            <Modal.Header>
                <img src={close} alt="close" width="32" height="32" onClick={handleClose}/>
            </Modal.Header>
            <Modal.Body>
                <img src={process.env.REACT_APP_SITE_LOGO} alt="SiteLogo" width="216" height="221"/>
                <h2>Iniciar Sesión</h2>
                <p>Utiliza tu cuenta Coppel Digital. ¿No tienes membresía?</p>
                <h5 onClick={handleRegMode}>Regístrate aquí</h5>
                <Form>
                    <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                        <Form.Control
                            type="email"
                            placeholder="Ingresa tu usuario"
                            autoFocus
                            value={logData.userName}
                            onChange={(e) => setLogData({ ...logData, userName: e.target.value })}
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
            </Modal.Body>
            <Modal.Footer>
                <button type="submit" className="main-btn" onClick={login}>Entrar</button>
            </Modal.Footer>
        </Modal> :
        <Modal show={show} onHide={handleClose} className="authModal" aria-labelledby="contained-modal-title-vcenter-2" centered>
            <Modal.Header>
                <img src={close} alt="close" width="32" height="32" onClick={handleClose}/>
            </Modal.Header>
            <Modal.Body>
                <img src={process.env.REACT_APP_SITE_LOGO} alt="SiteLogo" width="216" height="221"/>
                <h2>Añadir Breaking Bad a Mi Lista</h2>
                <p>Para guardar tu podcast en favoritos es necesario una membresía ¿Tienes membresía? <span onClick={handleLogMode}>Inicia sesión</span></p>
                <Form>
                    <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                        <Form.Control
                            type="text"
                            placeholder="Ingresa tu usuario"
                            autoFocus
                            value={regData.userName}
                            onChange={(e) => setRegData({ ...regData, userName: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="exampleForm.ControlInput2">
                        <Form.Control
                            type="email"
                            placeholder="Correo electrónico"
                            autoFocus
                            value={regData.emailAddress}
                            onChange={(e) => setRegData({ ...regData, emailAddress: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="exampleForm.ControlInput3">
                        <Form.Control
                            type="password"
                            placeholder="Contraseña"
                            autoComplete="off"
                            value={regData.password}
                            onChange={(e) => setRegData({ ...regData, password: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput4">
                        <Form.Control
                            type="text"
                            placeholder="Año de nacimiento"
                            autoFocus
                            value={regData.dateOfBirth}
                            onChange={(e) => setRegData({ ...regData, dateOfBirth: e.target.value })}
                        />
                    </Form.Group>
                </Form>
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