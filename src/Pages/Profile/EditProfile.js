import React from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import edit from "../../Image/edit.svg";
import logoGreen from "../../Image/LogoGreen.svg";
import { Helmet } from 'react-helmet-async';
import useUserApi from "../../Utilities/Hooks/useLandingApi";

const EditProfile = ({
  auth: { loading, isAuthenticated, data },
  profile: { subProfileList, isNewSubProfileAllowed },
}) => {
  const { token } = useParams();
  const { landingData } = useUserApi();

  return (
    <>
      {!loading && isAuthenticated && (
        <>
        <Helmet>
            <title>Streamapp | Editar perfil</title>
            <meta name="description" content='TV en vivo, on demand, series, películas, radio y más. Todo en un solo lugar gracias a tu cuenta Coppel Digital.'/>
        </Helmet> 
        <section className="browse">
          <div className="wrapper browse__contents">
            <img
              src={landingData?.site_logo}
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
                      {/* <img
                        className="pen"
                        src={edit}
                        alt="edit"
                        width="344"
                        height="344"
                      /> */}
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
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, null)(EditProfile);
