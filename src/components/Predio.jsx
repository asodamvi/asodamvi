import React from 'react'

// Images
import ImgPredio from '../assets/img/predio.png'

const Predio = () => (
    <div className="section_predio">
        <h3 className="title">Predio</h3>
        <div className="section__predio_container">
            <div className="section__predio_img">
                <img src={ ImgPredio } alt="Predio Asodamvi"/>
            </div>
            <div className="section_predio_texto">
                <p>
                    A mediados del año 2012 los asociados de ASODAMVI toman la valiente decisión de volver a creer 
                    y empiezan un ahorro individual en el Banco Agrario con el fin de realizar una gran bolsa que 
                    sirviera para la compra de un terreno.
                </p>


                <p>
                    Luego de recorrer la ciudad de Popayán y analizar varias opciones el 25 de enero de 2013 se firma 
                    la escritura No. 110 en la Notaría Segunda del Circulo de Popayán, donde se concluye el segundo
                    objetivo de ASODAMVI. 
                </p>

                <p>
                    El lote se encuentra ubicado en la variante norte de la ciudad, en un sector de gran valorización 
                    y donde se construirá el proyecto de vivienda de los asociados de ASODAMVI.
                </p>
            </div>
        </div>

        <div className="contacto__mapa">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.0398696922875!2d-76.57410210764338!3d2.4937460620360072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMjknMzguMiJOIDc2wrAzNCcyMS45Ilc!5e0!3m2!1sen!2sco!4v1575139578054!5m2!1sen!2sco"
                width="100%"
                height="100%"
                title="Mapa de Popayán, ASODAMVI Carrera 11 3N-30 Local 101 Barrio Modelo"
                style={{ border: 0 }}
            ></iframe>
        </div>
    </div>
)

export default Predio