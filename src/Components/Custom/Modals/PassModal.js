import React, { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import close from '../../../Image/close.svg';
import useAuth from '../../../Utilities/Hooks/useAuth';

const PassModal = (props) => {
  const { setError, setSuccess } = useAuth();
  const { passShow, setPassShow } = props;

  const [passData, setPassData] = useState({ current: '', newPas: '', confirmPass: '', login_by: 'manual', device_type: 'web', device_token: 123456});

  const handlePassValidation = async () => {
    setError('');
    setSuccess('');
    /* TODO: PASSWORD VALIDATION */
  }

    return (
        <>
        <Modal show={passShow} onHide={() => setPassShow(false)} className="authModal" aria-labelledby="contained-modal-title-vcenter-2" centered>
            <Modal.Header>
                <img src={close} alt="close" width="32" height="32" onClick={() => setPassShow(false)}/>
            </Modal.Header>
            <Modal.Body>
                <h2>Cambiar contraseña</h2>
                <p>La contraseña debe de ser de por lo menos 10 caracteres e incluir un signo.</p>
                <Form>
                    <Form.Group className="mb-4" controlId="exampleForm.ControlInput3">
                        <Form.Control
                            type="password"
                            placeholder="Contraseña actual"
                            value={passData.current}
                            onChange={(e) => setPassData({ ...passData, current: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="exampleForm.ControlInput4">
                        <Form.Control
                            type="password"
                            placeholder="Nueva contraseña"
                            value={passData.newPas}
                            onChange={(e) => setPassData({ ...passData, newPas: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="exampleForm.ControlInput5">
                        <Form.Control
                            type="password"
                            placeholder="Confirmar contraseña"
                            value={passData.confirmPass}
                            onChange={(e) => setPassData({ ...passData, confirmPass: e.target.value })}
                        />
                    </Form.Group>
                </Form>
                
            </Modal.Body>
            <Modal.Footer>
                <button className="main-btn" onClick={handlePassValidation}>
                    Cambiar
                </button>
            </Modal.Footer>
        </Modal>
        </>
    );
};

export default PassModal;