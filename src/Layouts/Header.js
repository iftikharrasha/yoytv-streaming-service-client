import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import search_icon from '../Image/search_icon.svg';
import avatar from '../Image/avatar.png';
import TvSvg from '../Image/SvgCodes/TvSvg';
import OnDemandSvg from '../Image/SvgCodes/OnDemandSvg';
import RadioSvg from '../Image/SvgCodes/RadioSvg';
import GamesSvg from '../Image/SvgCodes/GamesSvg';
import YoySvg from '../Image/SvgCodes/YoySvg';

const Header = () => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scrollHeight = window.scrollY;
            setScroll(scrollHeight > 50);
        })
    }, []);

    // const activeAuthToggle = e => {
    //     document.getElementById('mainNavbar').classList.toggle('slidingTop');
    //     e.preventDefault();
    // }

    return (
        <>
           <header className={scroll ? "header fixed-header" : "header"} id="header">
                <Navbar collapseOnSelect expand="lg" variant="dark" id="mainNavbar">
                    <Navbar.Brand as={Link} to="/">
                        <YoySvg/>
                    </Navbar.Brand>
                    <div className="searchBox d-lg-flex d-none">
                        <img src={search_icon} alt="search"/>
                        <label className="pt-1">Buscar</label>
                        {/* <input type="search" /> */}
                    </div>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/tournaments" className="mx-lg-2 mx-3 navLink">
                                <TvSvg/>
                                <span className="pt-1">TV en vivo</span>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/games" className="mx-lg-2 mx-3 navLink">
                                <OnDemandSvg/>
                                <span className="pt-1">OnDemand</span>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/championships" className="mx-lg-2 mx-3 navLink">
                                <RadioSvg/>
                                <span className="pt-1">Radio</span>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/about" className="mx-lg-2 mx-3 navLink">
                                <GamesSvg/>
                                <span className="pt-1">Juegos</span>
                            </Nav.Link>
                        </Nav>
                        <Nav className="ms-auto auth-dropdown"> 
                            <Dropdown className="me-4">
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
                </Navbar>
            </header> 
        </>
    );
};

export default Header;