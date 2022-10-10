import React from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import edit from "../../Image/edit.svg";
import logoGreen from "../../Image/LogoGreen.svg";

const EditProfile = ({
  auth: { loading, isAuthenticated, data },
  profile: { subProfileList, isNewSubProfileAllowed },
}) => {
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
            <h2>Administración de perfiles</h2>
            <p>Selecciona el perfil que deseas editar</p>
            <ul>
              {subProfileList.map((item, index) => {
                return (
                  <li className="edit" key={String(index)}>
                    <Link to={`/profile/settings/` + item.sub_profile_id}>
                      <div className="screen">
                        <img
                          src={item.picture}
                          alt="personal"
                          width="344"
                          height="344"
                        />
                      </div>
                      <h6>{item.name}</h6>
                      <img
                        className="pen"
                        src={edit}
                        alt="edit"
                        width="344"
                        height="344"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link to={`/profile/browse/` + token}>
              <button type="submit" className="main-btn secondary">
                Listo
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

export default connect(mapStateToProps, null)(EditProfile);
