import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { notyf } from "../../Utilities/Hooks/useNotification";
import edit from "../../Image/pen-bg.svg";
import logoGreen from "../../Image/LogoGreen.svg";
import useAuth from "../../Utilities/Hooks/useAuth";
import PassModal from "../../Components/Custom/Modals/PassModal";
import DeleteModal from "../../Components/Custom/Modals/DeleteModal";
import { connect } from "react-redux";
import { useEffect } from "react";
import { editSubProfile, deleteSubProfile } from "Utilities/Actions/Profile";

const SettingsProfile = ({
  auth: { loading, isAuthenticated, data },
  profile: { subProfileList },
  editSubProfile,
  deleteSubProfile,
}) => {
  const [passShow, setPassShow] = useState(false); //modal popover for password
  const [deleteShow, setdeleteShow] = useState(false); //modal popover for saving
  const { loggedInUser } = useAuth();
  const navigate = useNavigate();
  const { token } = useParams();

  const [subProfileId, setSubProfileId] = useState(null);

  useEffect(() => {
    const res = subProfileList.filter(obj => {
      return obj.sub_profile_id == 28;
    });

    if (res.length > 0) {
      setEditData({
        name: res[0].name,
        email: data.data.email,
        mobile: data.data.mobile,
        age: res[0].age,
        plan: "Familiar",
        subProfileId: res[0].sub_profile_id,
      });

      setSubProfileId(res[0].sub_profile_id);
    }
  }, [subProfileId]);

  const [editData, setEditData] = useState({
    name: "",
    email: "",
    mobile: "",
    age: "",
    plan: "Familiar",
    subProfileId: null,
  });

  const handlePassword = e => {
    setPassShow(true);
    e.preventDefault();
  };

  const handleDataDelete = e => {
    setdeleteShow(true);
    e.preventDefault();
  };

  const onDeleteHandle = async () => {
    const res = await deleteSubProfile(subProfileId, subProfileId);
    if (res.success) {
      notyf.open({
        type: "success",
        message: `${res.messages}`,
      });
    } else {
      notyf.open({
        type: "error",
        message: `${res.error_messages}`,
      });
    }
  };

  const handleSave = async e => {
    // TODO: do creation functionality here

    e.preventDefault();
    const response = await editSubProfile(editData);

    if (response.success) {
      navigate(`/profile/browse/` + token);
      notyf.open({
        type: "success",
        message: "Profile Updated Successfully.",
      });
    } else {
      notyf.open({
        type: "error",
        message: `${response.error_messages}`,
      });
    }
  };

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
            <h2>Editar perfil</h2>
            <div className="browse__contents__form">
              <div className="browse__contents__form__left">
                <div className="edit">
                  <div className="screen">
                    <img
                      src={data.data.picture}
                      alt="personal"
                      width="344"
                      height="344"
                    />
                  </div>
                  <img
                    className="pen"
                    src={edit}
                    alt="edit"
                    width="70"
                    height="70"
                  />
                </div>
              </div>
              <div className="browse__contents__form__right">
                <form>
                  <div className="single">
                    <div className="single__content">
                      <div className="single__content__input">
                        <label htmlFor="name">Nombre completo:</label>
                        <input
                          type="text"
                          name="name"
                          value={editData.name}
                          onChange={e =>
                            setEditData({ ...editData, name: e.target.value })
                          }
                        />

                        <label htmlFor="email">Email:</label>
                        <input
                          type="email"
                          name="email"
                          value={editData.email}
                          onChange={e =>
                            setEditData({ ...editData, email: e.target.value })
                          }
                        />
                      </div>

                      <div className="single__content__input">
                        <label htmlFor="age">Edad:</label>
                        <input
                          type="number"
                          name="age"
                          value={editData.age}
                          onChange={e =>
                            setEditData({ ...editData, age: e.target.value })
                          }
                        />

                        <label htmlFor="phone">Celular:</label>
                        <input
                          type="phone"
                          name="phone"
                          value={editData.mobile}
                          onChange={e =>
                            setEditData({ ...editData, mobile: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className="button">
                      <div>
                        <button
                          type="submit"
                          className="main-btn secondary"
                          onClick={e => handlePassword(e)}
                        >
                          Cambiar contraseña
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="single">
                    <h4>Plan</h4>
                    <p>{editData.plan}</p>
                    <div className="button">
                      <Link to="/subscription">
                        <button type="submit" className="main-btn secondary">
                          Cambiar plan
                        </button>
                      </Link>
                      <Link to={`/profile/payment-details/` + token}>
                        <button type="submit" className="main-btn secondary">
                          Detalles de pagos
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="single">
                    <div className="single__content inputManage">
                      <div className="single__content__input">
                        <h4>Cuentas</h4>
                        <div className="button">
                          <Link to={`/profile/edit/` + token}>
                            <button
                              type="submit"
                              className="main-btn secondary"
                            >
                              Administrar
                            </button>
                          </Link>
                        </div>
                      </div>

                      <div className="single__content__input">
                        <ul className="manage">
                          {subProfileList.map((item, index) => (
                            <li
                              key={index}
                              onClick={() =>
                                setSubProfileId(item.sub_profile_id)
                              }
                            >
                              <Link to={`/profile/settings/` + token}>
                                <div className="screen">
                                  <img
                                    src={item.picture}
                                    alt="personal"
                                    width="344"
                                    height="344"
                                  />
                                </div>
                                <img
                                  className="pen"
                                  src={edit}
                                  alt="edit"
                                  width="70"
                                  height="70"
                                />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="button">
                    <span>
                      <button
                        type="submit"
                        className="main-btn secondary"
                        onClick={e => handleDataDelete(e)}
                      >
                        Eliminar cuenta
                      </button>
                    </span>
                    <Link to={`/profile/edit/` + token}>
                      <button type="submit" className="main-btn secondary">
                        Cancelar
                      </button>
                    </Link>
                    <span>
                      <button
                        type="submit"
                        className="main-btn secondary"
                        onClick={e => handleSave(e)}
                      >
                        Guardar cambios
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}

      <PassModal passShow={passShow} setPassShow={setPassShow} />
      <DeleteModal
        deleteShow={deleteShow}
        setdeleteShow={setdeleteShow}
        onDeleteHandle={onDeleteHandle}
      />
    </>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { editSubProfile, deleteSubProfile })(
  SettingsProfile
);
