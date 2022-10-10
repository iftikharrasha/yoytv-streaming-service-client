import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import plus from "../../Image/plus-greeen.svg";
import logoGreen from "../../Image/LogoGreen.svg";
import { connect, useDispatch } from "react-redux";
import { getSubProfiles } from "../../Utilities/Actions/Profile";
import { UPDATE_SUB_PROFILE_ID } from "Utilities/Actions/types";

const BrowseProfile = ({
  profile: { subProfileList, isNewSubProfileAllowed, loading },
  auth: { userId },
  getSubProfiles,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getSubProfiles();
  }, []);

  const selectProfile = (subProfileId) => {
    dispatch({
      type: UPDATE_SUB_PROFILE_ID,
      payload: subProfileId,
    });
    localStorage.setItem("subProfileId", subProfileId);
  };

  return (
    <>
      {!loading && (
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
              {subProfileList.map((item, index) => {
                return (
                  <li>
                    <Link
                      to="/home"
                      onClick={() => selectProfile(item.sub_profile_id)}
                    >
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
                <Link to={`/profile/create/` + userId}>
                  <div className="screen plus">
                    <img src={plus} alt="browse" width="127" height="127" />
                  </div>
                  <h6>Agregar perfil</h6>
                </Link>
              </li>
            </ul>
            <Link to={`/profile/edit/` + userId}>
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

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getSubProfiles,
})(BrowseProfile);
