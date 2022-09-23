import React from "react";
import { Link, useParams } from "react-router-dom";
import plus from "../../Image/plus-greeen.svg";
import logoGreen from "../../Image/LogoGreen.svg";
import { connect } from "react-redux";

const BrowseProfile = ({ auth: { loading, isAuthenticated, data } }) => {
  const { token } = useParams();

  return (
    <>
      {!loading && isAuthenticated && (
        <section className="browse">
          <div className="wrapper browse__contents">
            <img
              src={logoGreen}
              className="logo"
              alt="SiteLogo"
              width="216"
              height="71"
            />
            <h2>¡Cuenta registrada!</h2>
            <p>
              Bienvenid@ a la plataforma multimedia YOY. Selecciona tu perfil
              para continuar navegando dentro de nuestro contenido exclusivo
            </p>
            <ul>
              <li>
                <Link to="/">
                  <img
                    className="screen"
                    src={data.data.picture}
                    alt="browse"
                    width="344"
                    height="344"
                  />
                  <h6>{data.data.name}</h6>
                </Link>
              </li>
              <li>
                <Link to={`/profile/create/` + token}>
                  <div className="screen plus">
                    <img src={plus} alt="browse" width="127" height="127" />
                  </div>
                  <h6>Agregar perfil</h6>
                </Link>
              </li>
            </ul>
            <Link to={`/profile/edit/` + token}>
              <button type="submit" className="main-btn secondary">
                Gestionar perfiles
              </button>
            </Link>
          </div>
        </section>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(BrowseProfile);
