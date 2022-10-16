import React, { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import close from "../../../Image/close.svg";
import useAuth from "../../../Utilities/Hooks/useAuth";
import { changePassword } from "Utilities/Actions/Auth";
import { connect } from "react-redux";
import { notyf } from "Utilities/Hooks/useNotification";

const PassModal = ({ changePassword, passShow, setPassShow }) => {
  const { setError, setSuccess } = useAuth();

  const [passData, setPassData] = useState({
    password: "",
    old_password: "",
    confirmPass: "",
    login_by: "manual",
    device_type: "web",
    device_token: 123456,
  });

  const handlePassValidation = async () => {
    setError("");
    setSuccess("");
    /* TODO: PASSWORD VALIDATION */
    const res = await changePassword(passData);
    if (res.success) {
      notyf.open({
        type: "success",
        message: `${res.message}`,
      });
      setPassShow(false);
    } else {
      notyf.open({
        type: "error",
        message: `${res.error_messages}`,
      });
    }
  };

  return (
    <>
      <Modal
        show={passShow}
        onHide={() => setPassShow(false)}
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
            onClick={() => setPassShow(false)}
          />
        </Modal.Header>
        <Modal.Body>
          <h2>Cambiar contraseña</h2>
          <p>
            La contraseña debe de ser de por lo menos 10 caracteres e incluir un
            signo.
          </p>
          <Form>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput3">
              <Form.Control
                type="password"
                placeholder="Contraseña actual"
                value={passData.old_password}
                onChange={e =>
                  setPassData({ ...passData, old_password: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput4">
              <Form.Control
                type="password"
                placeholder="Nueva contraseña"
                value={passData.password}
                onChange={e =>
                  setPassData({ ...passData, password: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput5">
              <Form.Control
                type="password"
                placeholder="Confirmar contraseña"
                value={passData.confirmPass}
                onChange={e =>
                  setPassData({ ...passData, confirmPass: e.target.value })
                }
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

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { changePassword })(PassModal);
