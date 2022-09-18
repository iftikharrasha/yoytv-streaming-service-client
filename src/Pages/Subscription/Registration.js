import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import underlineGreen from "../../Image/underlineGreen.png";
import useAuth from "../../Utilities/Hooks/useAuth";
import caret from "../../Image/caret-below.svg";
import logoGreen from "../../Image/LogoGreen.svg";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Registration = () => {
  const {
    handleRegistration,
    handleCardData,
    error,
    success,
    setError,
    setSuccess,
  } = useAuth();
  const [regData, setRegData] = useState({
    name: "",
    password: "",
    email: "",
    dateOfBirth: "",
    login_by: "manual",
    device_type: "web",
    device_token: 123456,
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
    login_by: "manual",
    device_type: "web",
    device_token: 123456,
  });
  const navigate = useNavigate();

  const register = async e => {
    e.preventDefault();

    setError("");
    setSuccess("");
    const response = await handleRegistration(regData);
    if (response.success) {
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
  };

  const cardAdd = async e => {
    e.preventDefault();

    const response = await handleCardData(cardData);
    if (response.success) {
      navigate("/");
    }
  };

  const cancel = async e => {
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
                      onChange={e =>
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
                      onChange={e =>
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
                      onChange={e =>
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
                      onChange={e =>
                        setRegData({ ...regData, dateOfBirth: e.target.value })
                      }
                    />
                  </Form.Group>

                  {error ? <p className="error">{error}</p> : null}

                  <button
                    type="submit"
                    className="main-btn secondary"
                    onClick={e => register(e)}
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
                    {["radio"].map(type => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                          inline
                          label="Débito"
                          name="group1"
                          type={type}
                          id={`inline-${type}-1`}
                          autoComplete="off"
                          value="card"
                          onClick={e =>
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
                          onClick={e =>
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
                      onChange={e =>
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
                          onChange={e =>
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
                          onChange={e =>
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
                        onChange={e =>
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
                      onClick={e => cancel(e)}
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="main-btn secondary"
                      onClick={e => cardAdd(e)}
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

export default Registration;
