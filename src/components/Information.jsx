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
                    Lograr que las autoridades investigaran y encontraran los responsables 
                    de la estafa que sufrieron cientos de familias caucanas.
                </div>
                <div className="objetivos__item">
                    Urbanizar el lote propiedad de la asociación para entregarselo a sus asociados
                </div>
                <div className="objetivos__item">
                    Gestionar y construir su propio proyecto de vivienda.
                </div>
            </div>
        </div>
    </section>
)

export default Informacion