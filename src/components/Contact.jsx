import React from "react";

// Styles
import "../assets/css/contact.css";

const Contact = () => (
  <section className="section__contacto" id="contacto">
    <div className="container">
      <h3 className="title">Contacto</h3>
      <div className="section__contacto_container">
        <div className="contacto__informacion">
          <ul>
            <li>
              <i className="fas fa-map-marked-alt"></i>
              <div>
                <h4 className="contacto__item_title"> Dirección</h4>
                <p>Carrera 11 No. 3N-30 Local 101 Barrio Modelo</p>
                <p>Popayán, Cauca</p>
              </div>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <div>
                <h4 className="contacto__item_title"> Télefonos</h4>
                <p>312 529 8438</p>
                <p>304 630 9822</p>
              </div>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <div>
                <h4 className="contacto__item_title"> E-mail</h4>
                <p>asodamvipopayan@gmail.com</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="contacto__mapa">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1993.0879948365646!2d-76.60944860373439!3d2.448408058677509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3003125ad35f0b%3A0x7fd4fad5f91e44ba!2sCra.%2011%20Nte.%20%233-30%2C%20Popay%C3%A1n%2C%20Cauca!5e0!3m2!1sen!2sco!4v1574893709741!5m2!1sen!2sco"
            width="100%"
            height="100%"
            title="Mapa de Popayán, ASODAMVI Carrera 11 3N-30 Local 101 Barrio Modelo"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
