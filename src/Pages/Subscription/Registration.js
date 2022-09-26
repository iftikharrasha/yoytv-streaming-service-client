import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import underlineGreen from "../../Image/underlineGreen.png";
import useAuth from "../../Utilities/Hooks/useAuth";
import caret from "../../Image/caret-below.svg";
import logoGreen from "../../Image/LogoGreen.svg";
import { registerUser } from "Utilities/Actions/Auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addPaymentCard } from "Utilities/Actions/Subscription";

import {
  AUTH_DEVICE_TOKEN,
  AUTH_DEVICE_TYPE,
  AUTH_LOGIN_BY,
} from "Utilities/Constants";

const Registration = ({ registerUser, addPaymentCard, auth: { token } }) => {
  const { error, success, setError, setSuccess } = useAuth();
  const [regData, setRegData] = useState({
    name: "",
    password: "",
    email: "",
    dateOfBirth: "",
    login_by: AUTH_LOGIN_BY,
    device_type: AUTH_DEVICE_TYPE,
    device_token: AUTH_DEVICE_TOKEN,
  });
  const [cardData, setCardData] = useState({
    id: "",
    token: "",
    sub_profile_id: "",
    subscription_id: "",
    payment_mode: "",
    cardNo: "",
    cvv: "",
    month: "",
    year: "",
    login_by: AUTH_LOGIN_BY,
    device_type: AUTH_DEVICE_TYPE,
    device_token: AUTH_DEVICE_TOKEN,
  });
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    const response = await registerUser(regData, true);
    if (response) {
      setError("");
      setSuccess(true);
      setCardData({
        ...cardData,
        id: response.data.id,
        sub_profile_id: response.data.sub_profile_id,
        subscription_id: response.data.sub_profile_id,
        token: response.data.token,
      });
    }
    setError("");
    setSuccess("");
  };

  const cardAdd = async (e) => {
    e.preventDefault();
    const response = await addPaymentCard(cardData);
    if (response) {
      navigate(`/profile/browse/${token}`);
    }
  };

  const cancel = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
  };

  return (
    <>
      <section className="browse registration">
        <div className="wrapper browse__contents">
          {!success ? (
            <div className="registration__form">
              <div className="registration__form__contents">
                <div className="registration__form__contents__top">
                  <img
                    src={logoGreen}
                    className="logo"
                    alt="SiteLogo"
                    width="216"
                    height="71"
                  />
                  <p>STREAMING PARA TODOS</p>
                  <img
                    src={underlineGreen}
                    alt="underlineGreen"
                    width="346"
                    height="19"
                    className="underlineGreen"
                  />
                </div>

                <Form>
                  <Form.Group
                    className="mb-4"
                    controlId="exampleForm.ControlInput1"
                  >
                    <label htmlFor="usario">Usuario</label>
                    <Form.Control
                      type="text"
                      placeholder="Ingresa tu usuario"
                      autoComplete="off"
                      value={regData.name}
                      onChange={(e) =>
                        setRegData({ ...regData, name: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-4"
                    controlId="exampleForm.ControlInput2"
                  >
                    <label htmlFor="usario">Correo electrónico</label>
                    <Form.Control
                      type="email"
                      placeholder="Correo electrónico"
                      autoComplete="off"
                      value={regData.email}
                      onChange={(e) =>
                        setRegData({ ...regData, email: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-4"
                    controlId="exampleForm.ControlInput3"
                  >
                    <label htmlFor="usario">Contraseña</label>
                    <Form.Control
                      type="password"
                      placeholder="Contraseña"
                      autoComplete="off"
                      value={regData.password}
                      onChange={(e) =>
                        setRegData({ ...regData, password: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput4">
                    <label htmlFor="usario">Año de nacimiento</label>
                    <Form.Control
                      type="text"
                      placeholder="Año de nacimiento"
                      autoComplete="off"
                      value={regData.dateOfBirth}
                      onChange={(e) =>
                        setRegData({ ...regData, dateOfBirth: e.target.value })
                      }
                    />
                  </Form.Group>

                  {error ? <p className="error">{error}</p> : null}

                  <button
                    type="submit"
                    className="main-btn secondary"
                    onClick={(e) => register(e)}
                  >
                    Registrarme
                  </button>
                </Form>
              </div>
            </div>
          ) : (
            <div className="registration__form">
              <div className="registration__form__contents">
                <div className="registration__form__contents__top">
                  <img
                    src={logoGreen}
                    className="logo"
                    alt="SiteLogo"
                    width="216"
                    height="71"
                  />
                  <p>STREAMING PARA TODOS</p>
                  <img
                    src={underlineGreen}
                    alt="underlineGreen"
                    width="346"
                    height="19"
                    className="underlineGreen"
                  />
                </div>

                <Form>
                  <Form.Group
                    className="mb-4"
                    controlId="exampleForm.ControlInput1"
                  >
                    <label htmlFor="usario">Pago con tarjeta</label>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                          inline
                          label="Débito"
                          name="group1"
                          type={type}
                          id={`inline-${type}-1`}
                          autoComplete="off"
                          value="card"
                          onClick={(e) =>
                            setCardData({
                              ...cardData,
                              payment_mode: e.target.value,
                            })
                          }
                        />
                        <Form.Check
                          inline
                          label="Crédito"
                          name="group1"
                          type={type}
                          id={`inline-${type}-2`}
                          autoComplete="off"
                          value="card"
                          onClick={(e) =>
                            setCardData({
                              ...cardData,
                              payment_mode: e.target.value,
                            })
                          }
                        />
                      </div>
                    ))}
                  </Form.Group>
                  <Form.Group
                    className="mb-4"
                    controlId="exampleForm.ControlInput2"
                  >
                    <label htmlFor="digits">Nº de tarjeta</label>
                    <Form.Control
                      type="number"
                      placeholder="16 dígitos"
                      value={cardData.cardNo}
                      onChange={(e) =>
                        setCardData({ ...cardData, cardNo: e.target.value })
                      }
                      autoComplete="off"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-4"
                    controlId="exampleForm.ControlInput4"
                  >
                    <label htmlFor="usario">Fecha de vencimiento</label>
                    <div className="select__group">
                      <div className="single__dropdown">
                        <select
                          onChange={(e) =>
                            setCardData({ ...cardData, month: e.target.value })
                          }
                        >
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
                        <img
                          className="caret"
                          width="20"
                          height="20"
                          src={caret}
                          alt="caret"
                        />
                      </div>
                      <div className="single__dropdown">
                        <select
                          onChange={(e) =>
                            setCardData({ ...cardData, year: e.target.value })
                          }
                        >
                          <option value="Año">Año</option>
                          <option value="2022">2022</option>
                          <option value="2023">2023</option>
                          <option value="2024">2024</option>
                          <option value="2025">2025</option>
                        </select>
                        <img
                          className="caret"
                          width="20"
                          height="20"
                          src={caret}
                          alt="caret"
                        />
                      </div>
                    </div>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput3">
                    <label htmlFor="cvv">Código de seguridad</label>
                    <div className="cvv">
                      <Form.Control
                        type="number"
                        placeholder="CVV"
                        value={cardData.cvv}
                        onChange={(e) =>
                          setCardData({ ...cardData, cvv: e.target.value })
                        }
                        autoComplete="off"
                      />
                      <span title="3-digit number at the back of your card">
                        ?
                      </span>
                    </div>
                  </Form.Group>

                  {error ? <p className="error">{error}</p> : null}

                  <div className="reg__button">
                    <button
                      type="submit"
                      className="main-btn secondary"
                      onClick={(e) => cancel(e)}
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="main-btn secondary"
                      onClick={(e) => cardAdd(e)}
                    >
                      Pagar
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          )}
          <h6 className="adfree">
            Si deseas continuar con la versión con anuncios{" "}
            <span>totalmente gratis,</span>{" "}
            <Link to="/ad-free">da click aquí</Link>
          </h6>
        </div>
      </section>
    </>
  );
};

Registration.propTypes = {
  registerUser: PropTypes.func.isRequired,
  addPaymentCard: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { registerUser, addPaymentCard })(
  Registration
);
