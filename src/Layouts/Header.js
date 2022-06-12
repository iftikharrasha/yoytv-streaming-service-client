import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import search_icon from '../Image/search_icon.svg';
import cross_icon from '../Image/cross_icon.svg';
import avatar from '../Image/avatar.png';
import TvSvg from '../Image/SvgCodes/TvSvg';
import OnDemandSvg from '../Image/SvgCodes/OnDemandSvg';
import RadioSvg from '../Image/SvgCodes/RadioSvg';
import GamesSvg from '../Image/SvgCodes/GamesSvg';
import YoySvg from '../Image/SvgCodes/YoySvg';
import SearchSvg from '../Image/SvgCodes/SearchSvg';

const Header = () => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scrollHeight = window.scrollY;
            setScroll(scrollHeight > 50);
        })
    }, []);

    const handlerSearch = (e) => {
        e.target.preventDefault();
        console.log(e);
    }

    // const activeToggle = e => {
    //     document.getElementById('header').classList.toggle('open');
    //     e.preventDefault();
    // }

    const menuLinks = document.querySelectorAll(".menu__link");

    menuLinks.forEach((link) => {
        link.addEventListener("click", () => {
            menuLinks.forEach((link) => {
                link.classList.remove("is__active");
            });
            link.classList.add("is__active");
        });
    });

    return (
        <>
           <header className={scroll ? "header fixed-header" : "header"} id="header">
                <Navbar collapseOnSelect expand="lg" variant="dark" id="mainNavbar">
                    <Navbar.Brand as={Link} to="/">
                        <YoySvg/>
                    </Navbar.Brand>
                    <form action="" onSubmit={handlerSearch} className="d-lg-flex d-none">
                        <div className="search-box">
                            <img src={search_icon} alt="search"/>
                            <input className="search-text" type="text" placeholder="Escribe aquí..."/>
                            <Link to="/search">
                                <img src={cross_icon} alt="cross"/>
                            </Link>
                        </div>
                        <label className="pt-lg-2">Buscar</label>
                    </form>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/tv-en-vivo" className="mx-lg-2 mx-3 navLink">
                                <TvSvg className="navIcon"/>
                                <span className="pt-1">TV en vivo</span>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/on-demand" className="mx-lg-2 mx-3 navLink">
                                <OnDemandSvg className="navIcon"/>
                                <span className="pt-1">OnDemand</span>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/radio" className="mx-lg-2 mx-3 navLink">
                                <RadioSvg className="navIcon"/>
                                <span className="pt-1">Radio</span>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/juegos" className="mx-lg-2 mx-3 navLink">
                                <GamesSvg className="navIcon gameNav"/>
                                <span className="pt-1">Juegos</span>
                            </Nav.Link>
                        </Nav>
                        <Nav className="ms-auto auth-dropdown"> 
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic" className="d-flex align-items-center">
                                    <span>Alejandra</span>
                                    <span className="avatar ms-3">
                                        <img alt="user" src={avatar}/>
                                    </span>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Link to={"/profile/cuenta/id"} className="dropdown-item lit-14">Cuenta</Link>
                                    <Link to={"/profile/preferencias/id"} className="dropdown-item lit-14">Preferencias</Link>
                                    <Link to="/logout" className="dropdown-item lit-14">Cerrar Sesión</Link>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Navbar.Collapse>

                    <div className="mobile-design"> 
                        <Nav className="ms-auto auth-dropdown"> 
                            <Dropdown className="d-block d-lg-none">
                                <Dropdown.Toggle variant="" id="dropdown-basic" className="d-flex align-items-center">
                                    <span>Alejandra</span>
                                    <span className="avatar ms-3">
                                        <img alt="user" src={avatar}/>
                                    </span>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Link to={"/profile/cuenta/id"} className="dropdown-item lit-14">Cuenta</Link>
                                    <Link to={"/profile/preferencias/id"} className="dropdown-item lit-14">Preferencias</Link>
                                    <Link to="/logout" className="dropdown-item lit-14">Cerrar Sesión</Link>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                        <div className="menu" id="menu">
                            <ul>
                                <li className="menu__item">
                                    <Link to="/tv-en-vivo" className="menu__link">
                                        <TvSvg className="navIcon"/>
                                        <span className="pt-1">TV en vivo</span>
                                    </Link>
                                </li>
                                <li className="menu__item">
                                    <Link to="/on-demand" className="menu__link">
                                        <OnDemandSvg className="navIcon"/>
                                        <span className="pt-1">OnDemand</span>
                                    </Link>
                                </li>
                                <li className="menu__item">
                                    <Link to="/radio" className="menu__link">
                                        <RadioSvg className="navIcon"/>
                                        <span className="pt-1">Radio</span>
                                    </Link>
                                </li>
                                <li className="menu__item">
                                    <Link to="/juegos" className="menu__link">
                                        <GamesSvg className="navIcon gameNav"/>
                                        <span className="pt-1">Juegos</span>
                                    </Link>
                                </li>
                                <li className="menu__item">
                                    <Link to="/buscar" className="menu__link">
                                        <SearchSvg className="navIcon"/>
                                        <span className="menu-name">Buscar</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Navbar>
            </header> 
        </>
    );
};

export default Header;