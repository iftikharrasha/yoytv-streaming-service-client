import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import plus from "../../Image/plus-greeen.svg";
import logoGreen from "../../Image/LogoGreen.svg";
import { connect, useDispatch } from "react-redux";
import { getSubProfiles } from "../../Utilities/Actions/Profile";
import { loadUser } from "Utilities/Actions/Auth";
import { UPDATE_SUB_PROFILE_ID } from "Utilities/Actions/types";
import { Helmet } from 'react-helmet-async';

const BrowseProfile = ({
  profile: { subProfileList, isNewSubProfileAllowed, loading },
  auth: { userId },
  getSubProfiles,
  loadUser,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getSubProfiles();
    loadUser();
  }, []);

  const selectProfile = (item) => {
    dispatch({
      type: UPDATE_SUB_PROFILE_ID,
      payload: item,
    });
    localStorage.setItem("subProfileId", item.sub_profile_id);
  };

  return (
    <>
      {!loading && (
        <>
        <Helmet>
            <title>Streamapp | Explorar perfil</title>
            <meta name="description" content='TV en vivo, on demand, series, películas, radio y más. Todo en un solo lugar gracias a tu cuenta Coppel Digital.'/>
        </Helmet> 
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
              Bienvenid@ a la plataforma multimedia Streamapp. Selecciona tu perfil
              para continuar navegando dentro de nuestro contenido exclusivo
            </p>
            <ul>
              {subProfileList.map((item, index) => {
                return (
                  <li>
                    <Link to="/home" onClick={() => selectProfile(item)}>
                      <img
                        className="screen"
                        src={item.picture}
                        alt="browse"
                        width="344"
                        height="344"
                      />
                      <h6>{item.name}</h6>
                    </Link>
                  </li>
                );
              })}

              <li>
                {isNewSubProfileAllowed ? (
                  <Link to={`/profile/create/` + userId}>
                    <div className="screen plus">
                      <img src={plus} alt="browse" width="127" height="127" />
                    </div>
                    <h6>Agregar perfil</h6>
                  </Link>
                ) : (
                  <div></div>
                )}
              </li>
            </ul>
            <Link to={`/profile/edit/` + userId}>
              <button type="submit" className="main-btn secondary">
                Gestionar perfiles
              </button>
            </Link>
          </div>
        </section>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getSubProfiles,
  loadUser,
})(BrowseProfile);
