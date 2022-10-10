import React, { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import close from "../../../Image/close.svg";
import useAuth from "../../../Utilities/Hooks/useAuth";

const DeleteModal = props => {
  const { setError, setSuccess } = useAuth();
  const { deleteShow, setdeleteShow, onDeleteHandle } = props;

  const [passData, setPassData] = useState({
    pass: "",
    login_by: "manual",
    device_type: "web",
    device_token: 123456,
  });

  const handlePassValidation = async () => {
    setError("");
    setSuccess("");
    /* TODO: PASSWORD VALIDATION */
    onDeleteHandle();
  };

  return (
    <>
      <Modal
        show={deleteShow}
        onHide={() => setdeleteShow(false)}
        className="authModal"
        aria-labelledby="contained-modal-title-vcenter-2"
        centered
      >
        <Modal.Header>
          <img
            src={close}
            alt="close"
            width="32"
            height="32"
            onClick={() => setdeleteShow(false)}
          />
        </Modal.Header>
        <Modal.Body>
          <h2>Eliminar cuenta</h2>
          <p>
            Nota: Una vez que se elimine tu cuenta, perderás tu historial y los
            detalles de la Mi Lista.
          </p>
          <Form>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput3">
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                value={passData.pass}
                onChange={e =>
                  setPassData({ ...passData, pass: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className="main-btn" onClick={handlePassValidation}>
            Eliminar cuenta
          </button>
          <button className="main-btn" onClick={() => setdeleteShow(false)}>
            Cancelar
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteModal;
