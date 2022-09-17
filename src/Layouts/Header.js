import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import search_icon from "../Image/search_icon.svg";
import cross_icon from "../Image/cross_icon.svg";
import TvSvg from "../Image/SvgCodes/TvSvg";
import OnDemandSvg from "../Image/SvgCodes/OnDemandSvg";
import RadioSvg from "../Image/SvgCodes/RadioSvg";
import GamesSvg from "../Image/SvgCodes/GamesSvg";
import SearchSvg from "../Image/SvgCodes/SearchSvg";
import logoBlue from "../Image/LogoBlue.svg";
import LoginModal from "../Components/Custom/Modals/LoginModal";
import useAuth from "../Utilities/Hooks/useAuth";
import { connect } from "react-redux";
import { logoutUser } from "Utilities/Actions/Auth";
import { Navigate } from "react-router-dom";

const Header = ({ auth: { isAuthenticated, loading, data }, logoutUser }) => {
  //   console.log(data);
  //   const { dataAuth, handleLogOut } = useAuth();
  const [show, setShow] = useState(false);

  const menuLinks = document.querySelectorAll(".menu__link");

  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      menuLinks.forEach(link => {
        link.classList.remove("is__active");
      });
      link.classList.add("is__active");
    });
  });

  const handleLogout = async () => {
    const res = await logoutUser();
    if (res) {
      return <Navigate to="/" />;
    }
  };

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
              src={logoBlue}
              alt="logo"
              className="logo"
              width="160"
              height="50"
            />
          </Navbar.Brand>
          {isAuthenticated && !loading && data != null ? (
            <form
              className="d-lg-flex d-none"
              data-aos="flip-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <div className="search-box">
                <img src={search_icon} alt="search" />
                <input
                  className="search-text"
                  type="text"
                  placeholder="Escribe aquí..."
                />
                <Link to="/search" className="menu__link">
                  <img src={cross_icon} alt="cross" />
                </Link>
              </div>
              <label className="pt-lg-2">Buscar</label>
            </form>
          ) : null}
          <Navbar.Collapse id="responsive-navbar-nav">
            {isAuthenticated && !loading && data != null ? (
              <Nav className="ms-auto">
                <Nav.Link
                  as={Link}
                  to="/tv-en-vivo"
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
                  to="/juegos"
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
                    <span>{data.data.name}</span>
                    <span className="avatar ms-3">
                      <img alt="user" src={data.data.picture} />
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
                <button className="main-btn" onClick={e => setShow(true)}>
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
                    <span>{data.data.name[0]}</span>
                    <span className="avatar ms-3">
                      <img alt="user" src={data.data.picture} />
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
                  onClick={e => setShow(true)}
                >
                  <span>Iniciar sesión</span>
                </button>
              )}
            </Nav>
            <div className="menu" id="menu">
              <ul>
                <li className="menu__item">
                  <Link
                    to="/tv-en-vivo"
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
                    to="/juegos"
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

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Header);
