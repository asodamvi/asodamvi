import React from "react";
import { Link } from "react-router-dom";
// Assets

import "../assets/css/footer.css";

const _scrollTop = () => {
    window.scrollTo(0, 0);
};

const Footer = () => (
    <footer className="footer">
        <div className="container footer__container">
            <div className="footer__item">
                <h4 className="footer__item_title">Mapa del Sitio</h4>
                <ul className="footer__item_nav">
                    <li>
                        <Link to="/" onClick={_scrollTop}>
                            <i className="fas fa-angle-right"></i> Inicio
            </Link>
                    </li>
                    <li>
                        <Link to="/acerca-de" onClick={_scrollTop}>
                            <i className="fas fa-angle-right"></i> Acerca de
            </Link>
                    </li>
                    <li>
                        <Link to="/galeria" onClick={_scrollTop}>
                            <i className="fas fa-angle-right"></i> Galería
            </Link>
                    </li>
                    <li>
                        <Link to="/documentos" onClick={_scrollTop}>
                            <i className="fas fa-angle-right"></i> Documentos
            </Link>
                    </li>
                </ul>
            </div>

            <div className="footer__item">
                <h4 className="footer__item_title">Horarios de Atención</h4>

                <p>
                    Lunes a Viernes <br />
                    8am - 12m | 2pm - 6pm
        </p>
                <br />
                <p>
                    Sábados <br />
                    8am - 12m
        </p>
            </div>

            <div className="footer__item">
                <h4 className="footer__item_title">Redes Sociales</h4>

                <div className="footer__item_redes">
                    <a
                        href="https://api.whatsapp.com/send?phone=573125298438"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp"
                    >
                        <i className="fab fa-whatsapp"></i>
                    </a>
                    <a
                        href="https://www.facebook.com/Asociaci%C3%B3n-Asodamvi-857217857947871/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="facebook"
                    >
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                        href="https://m.me/857217857947871"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="messenger"
                    >
                        <i className="fab fa-facebook-messenger"></i>
                    </a>
                </div>
            </div>

            <div className="footer__item">
                <div className="footer__item_derechos">
                    <div className="footer__item_logo">
                        <h1>ASODAMVI</h1>
                        <small>Nit. 900207664-5</small>
                    </div>

                    <div>© Todos los derechos Reservados</div>
                </div>
            </div>

            <button className="btn__swipe_up" onClick={_scrollTop}>
                <i className="fas fa-sort-up"></i>
            </button>
        </div>
    </footer>
);

export default Footer;
