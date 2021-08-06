import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';

// Assets
import logo from "../assets/img/logo_asodamvi.png";
import "../assets/css/header.css";

const Header = () => {
    const [showMenu, setShowMenu] = useState('');
    const [fixedMenu, setFixedMenu] = useState({ position: "relative" });
    const { currentUser } = useAuth();

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        let scrollTop = window.scrollY;

        if(window.screen.width < 768){
            setFixedMenu({ position: (scrollTop > 80) ? "fixed" : "relative"});
        }else{
            setFixedMenu({ fixed_menu: { position: "relative" } });
        }
    }

    const toogleMenu = () => {
        const activeMenu = showMenu;
        setShowMenu(activeMenu === "active" ? "" : "active");
    };

    const hideMenu = () => {
        const menuMovil = showMenu;
        menuMovil && setShowMenu("")
    };

    return (
            <header className="header" style={fixedMenu}>
                <div className=" container header__container">
                    <Link to="/">
                        <img className="header__container_img" src={logo} alt="Asodamvi Popayán" />
                    </Link>

                    <div className="header__container_menu">
                        <nav className={showMenu}>
                            <ul className="nav__menu">
                                <li>
                                    <Link to="/" onClick={hideMenu} className="nav__menu_link">
                                        Inicio
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/acerca-de" onClick={hideMenu} className="nav__menu_link">
                                        Acerca de
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/galeria" onClick={hideMenu} className="nav__menu_link">
                                        Galería
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/documentos" onClick={hideMenu} className="nav__menu_link">
                                        Documentos
                                    </Link>
                                </li>
                                <li>
                                    <a href="#contacto" className="nav__menu_link" onClick={hideMenu}>
                                        Contáctanos
                                    </a>
                                </li>
                                {
                                    currentUser ? (
                                    <li>
                                        <Link to="/dashboard" onClick={hideMenu} className="nav__menu_btn">
                                            Mi perfil
                                        </Link>
                                    </li>
                                    ) : (
                                    <li>
                                        <Link to="/ingresar" onClick={hideMenu} className="nav__menu_btn">
                                            Ingresar
                                        </Link>
                                    </li>
                                    )
                                }
                            </ul>
                        </nav>

                        <button type="button" className="nav_btn" onClick={toogleMenu}>
                            <i className="fas fa-align-left"></i>
                        </button>
                    </div>
                </div>
            </header>
    );
}

export default Header;
