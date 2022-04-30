import React from "react"

// Styles
import "../assets/css/informacion.css"

const Informacion = () => (
    <section className="section__information">
        <div className="container">
            <div className="section__information_container">
                <div className="information__title">
                    <h2 className="title_left">Sobre <br />Nosotros</h2>
                </div>
                
                <div className="information__text">
                    La asociación de damnificados proyectos de vivienda "ASODAMVI" nace el 22 de febrero 2008 
                    como una nueva esperanza para más de 400 familias caucanas que buscan ver el sueño de tener su propia 
                    vivienda. Un sueño que se encuentra en planeación por parte de la junta directiva de ASODAMVI, la cual 
                    busca las mejores alternativas para todos sus asociados.
                </div>
            </div>

            <h3 className="title">Objetivos</h3>
            <div className="section__objetivos_container">
                <div className="objetivos__item">
                    Disminuir el grado de dificultad por parte de los asociados de ASODAMVI para formular, 
                    gestionar y ejecutar Proyecto Urbanístico.
                </div>
                <div className="objetivos__item">
                    Aumentar el compromiso de los integrantes de la asociación de vivienda para avanzar 
                    en alcanzar el objetivo central.
                </div>
                <div className="objetivos__item">
                    Disminuir el grado de equivocaciones por parte de Directivos en procura de resolver 
                    necesidades de interés común.
                </div>
            </div>
        </div>
    </section>
)

export default Informacion