import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import search_icon from "../Image/search_icon.svg";
import slidein from "../Image/slidein.svg";
import cross_icon from "../Image/cross_icon.svg";
import TvSvg from "../Image/SvgCodes/TvSvg";
import OnDemandSvg from "../Image/SvgCodes/OnDemandSvg";
import RadioSvg from "../Image/SvgCodes/RadioSvg";
import GamesSvg from "../Image/SvgCodes/GamesSvg";
import SearchSvg from "../Image/SvgCodes/SearchSvg";
import logoBlue from "../Image/LogoBlue.svg";
import LoginModal from "../Components/Custom/Modals/LoginModal";
import useAuth from "../Utilities/Hooks/useAuth";
import { connect, useDispatch } from "react-redux";
import { logoutUser } from "Utilities/Actions/Auth";
import { getSubProfiles } from "Utilities/Actions/Profile";
import { Navigate, useNavigate } from "react-router-dom";
import store from "Utilities/Store/store";
import { UPDATE_SUB_PROFILE_ID } from "Utilities/Actions/types";
import useUserApi from "../Utilities/Hooks/useLandingApi";
import { notyf } from "../Utilities/Hooks/useNotification";

const Header = ({
  auth: { isAuthenticated, loading, data, selectedSubProfile, subProfileId },
  profile: { subProfileList },
  logoutUser,
  getSubProfiles,
}) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const state = store.getState();
  const { landingData } = useUserApi();

  const menuLinks = document.querySelectorAll(".menu__link");

  useEffect(() => {
    if (state.auth.userId && !selectedSubProfile) {
      navigate("/profile/browse/" + state.auth.userId);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      getSubProfiles();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    const res = subProfileList.filter((obj) => {
      return obj.sub_profile_id == localStorage.getItem("subProfileId");
    });
    if (res.length > 0) {
      dispatch({
        type: UPDATE_SUB_PROFILE_ID,
        payload: res[0],
      });
    }
  }, [subProfileList]);

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuLinks.forEach((link) => {
        link.classList.remove("is__active");
      });
      link.classList.add("is__active");
    });
  });

  const [query, setQuery] = useState("");

  const handleLogout = async () => {
    const res = await logoutUser();
    if (res) {
      return <Navigate to="/" />;
    }
  };
  
  const handleBuscar = async (e) => {
    e.preventDefault();
    setQuery('');
    const box1 = document.getElementById("activeSearch1");
    const box2 = document.getElementById("activeSearch2");
    box1.classList.toggle("active");
    box2.classList.toggle("active");
  }

  const activeSearch = async (e) => {
    if(query){
      e.preventDefault();
      navigate(`/search?query=${query}`);
    }else {
      notyf.open({
        type: "error",
        message: "Please enter keywords to search!",
      });
    }
  }

  return (
    <>
      <header
        className={
          isAuthenticated && !loading ? "header" : "header public-header"
        }
        id="header"
      >
        <Navbar collapseOnSelect expand="lg" variant="dark" id="mainNavbar">
          <Navbar.Brand as={Link} to="/" className="menu__link">
            <img
              src={landingData?.site_logo}
              alt="logo"
              className="logo"
              width="160"
              height="50"
            />
          </Navbar.Brand>
          {isAuthenticated && !loading && data != null ? (
            <div
              className="d-lg-flex d-none search-box"
              data-aos="flip-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <form 
                id="activeSearch1"
              onSubmit={(e) => activeSearch(e)}
              >
                <img src={search_icon} alt="search" className="bigSearch" onClick={(e) => handleBuscar(e)}/>
                <img src={slidein} alt="slidein" className="slidein" onClick={(e) => handleBuscar(e)}/>
                <input
                  className="search-text"
                  type="text"
                  placeholder="Escribe aquí..."
                  name="query"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <div className="menu__link actions">
                  <img src={cross_icon} alt="cross" onClick={(e) => setQuery('')}/>
                  <img src={search_icon} alt="search" onClick={(e) => activeSearch(e)}/>
                </div>
              </form>
              <label className="pt-lg-2" onClick={(e) => handleBuscar(e)}>Buscar</label>
            </div>
          ) : null}
          <Navbar.Collapse id="responsive-navbar-nav">
            {isAuthenticated && !loading && data != null ? (
              <Nav className="ms-auto">
                <Nav.Link
                  as={Link}
                  to={`/tv-en-vivo/1`}
                  className="mx-lg-2 mx-3 navLink menu__link"
                  data-aos="flip-up"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  <TvSvg className="navIcon" />
                  <span className="pt-1">TV en vivo</span>
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/on-demand"
                  className="mx-lg-2 mx-3 navLink menu__link"
                  data-aos="flip-up"
                  data-aos-delay="250"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  <OnDemandSvg className="navIcon" />
                  <span className="pt-1">OnDemand</span>
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/radio"
                  className="mx-lg-2 mx-3 navLink menu__link"
                  data-aos="flip-up"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  <RadioSvg className="navIcon" />
                  <span className="pt-1">Radio</span>
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="juegos/all"
                  className="mx-lg-2 mx-3 navLink menu__link"
                  data-aos="flip-up"
                  data-aos-delay="400"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  <GamesSvg className="navIcon gameNav" />
                  <span className="pt-1">Juegos</span>
                </Nav.Link>
              </Nav>
            ) : null}

            <Nav
              className="ms-auto auth-dropdown"
              data-aos="flip-up"
              data-aos-offset="0"
              data-aos-delay="500"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              {isAuthenticated && !loading && data != null ? (
                <Dropdown>
                  <Dropdown.Toggle
                    variant=""
                    id="dropdown-basic"
                    className="d-flex align-items-center"
                  >
                    <span>{selectedSubProfile && selectedSubProfile.name}</span>
                    <span className="avatar ms-3">
                      <img
                        alt="user"
                        src={selectedSubProfile && selectedSubProfile.picture}
                      />
                    </span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Link
                      to={`/profile/browse/` + data.data.token}
                      className="dropdown-item menu__link"
                    >
                      Cuenta
                    </Link>
                    <Link
                      to={`/profile/mi-lista/` + data.data.token}
                      className="dropdown-item menu__link"
                    >
                      Mi lista
                    </Link>
                    <Link
                      to={`/profile/settings/` + data.data.token}
                      className="dropdown-item menu__link"
                    >
                      Preferencias
                    </Link>
                    <Link
                      to="/"
                      className="dropdown-item menu__link"
                      onClick={handleLogout}
                    >
                      Cerrar Sesión
                    </Link>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <button className="main-btn" onClick={(e) => setShow(true)}>
                  <span>Iniciar sesión</span>
                </button>
              )}
            </Nav>
          </Navbar.Collapse>

          <div className="mobile-design">
            <Nav
              className="ms-auto auth-dropdown"
              data-aos="flip-up"
              data-aos-offset="0"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              {isAuthenticated && !loading && data != null ? (
                <Dropdown className="d-block d-lg-none">
                  <Dropdown.Toggle
                    variant=""
                    id="dropdown-basic"
                    className="d-flex align-items-center"
                  >
                    <span>{selectedSubProfile && selectedSubProfile.name}</span>
                    <span className="avatar ms-3">
                      <img
                        alt="user"
                        src={selectedSubProfile && selectedSubProfile.picture}
                      />
                    </span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Link
                      to={`/profile/browse/` + data.data.token}
                      className="dropdown-item menu__link"
                    >
                      Cuenta
                    </Link>
                    <Link
                      to={"/profile/mi-lista/id"}
                      className="dropdown-item menu__link"
                    >
                      Mi lista
                    </Link>
                    <Link
                      to={`/profile/settings/` + data.data.token}
                      className="dropdown-item menu__link"
                    >
                      Preferencias
                    </Link>
                    <Link
                      to="/"
                      className="dropdown-item menu__link"
                      onClick={handleLogout}
                    >
                      Cerrar Sesión
                    </Link>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <button
                  className={
                    isAuthenticated && !loading && data != null
                      ? "main-btn me-3 d-block d-lg-none mt-1"
                      : "main-btn me-3 d-block d-lg-none"
                  }
                  onClick={(e) => setShow(true)}
                >
                  <span>Iniciar sesión</span>
                </button>
              )}
            </Nav>
            <div className="menu" id="menu">
            <div
              className="d-lg-none d-flex search-box"
            >
              <form 
                id="activeSearch2"
                onSubmit={(e) => activeSearch(e)}
              >
                <img src={slidein} alt="slidein" className="slidein" onClick={(e) => handleBuscar(e)}/>
                <input
                  className="search-text"
                  type="text"
                  placeholder="Escribe aquí..."
                  name="query"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <div className="menu__link actions">
                  <img src={cross_icon} alt="cross" onClick={(e) => setQuery('')}/>
                  <img src={search_icon} alt="search" onClick={(e) => activeSearch(e)}/>
                </div>
              </form>
            </div>

              
              <ul>
                <li className="menu__item">
                  <Link
                    to={`/tv-en-vivo/1`}
                    className="menu__link"
                    data-aos="flip-up"
                    data-aos-offset="0"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-once="true"
                  >
                    <TvSvg className="navIcon" />
                    <span className="pt-1">TV en vivo</span>
                  </Link>
                </li>
                <li className="menu__item">
                  <Link
                    to="/on-demand"
                    className="menu__link"
                    data-aos="flip-up"
                    data-aos-offset="0"
                    data-aos-delay="250"
                    data-aos-duration="500"
                    data-aos-once="true"
                  >
                    <OnDemandSvg className="navIcon" />
                    <span className="pt-1">OnDemand</span>
                  </Link>
                </li>
                <li className="menu__item">
                  <Link
                    to="/radio"
                    className="menu__link"
                    data-aos="flip-up"
                    data-aos-offset="0"
                    data-aos-delay="400"
                    data-aos-duration="500"
                    data-aos-once="true"
                  >
                    <RadioSvg className="navIcon" />
                    <span className="pt-1">Radio</span>
                  </Link>
                </li>
                <li className="menu__item">
                  <Link
                    to="/juegos/all"
                    className="menu__link"
                    data-aos="flip-up"
                    data-aos-offset="0"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    data-aos-once="true"
                  >
                    <GamesSvg className="navIcon gameNav" />
                    <span className="pt-1">Juegos</span>
                  </Link>
                </li>
                <li className="menu__item">
                  <Link
                    to="/buscar"
                    className="menu__link"
                    data-aos="flip-up"
                    data-aos-offset="0"
                    data-aos-delay="800"
                    data-aos-duration="500"
                    data-aos-once="true"
                    onClick={(e) => handleBuscar(e)}
                  >
                    <SearchSvg className="navIcon" />
                    <span className="menu-name">Buscar</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Navbar>
      </header>

      <LoginModal show={show} setShow={setShow} />
    </>
  );
};

Header.propTypes = {};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { logoutUser, getSubProfiles })(Header);
