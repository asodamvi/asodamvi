import React from "react"
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

// Styles
import "../assets/css/carousel.css"

const Carousel = () => {
    const content = [
        "Asodamvi trabaja de la mano de cada asociado,",
        "logrando su objetivo, construyendo futuro,",
        "invirtiendo en el presente le damos inicio a la ejecución de nuestro proyecto urbanístico de nuestro lote."
    ]

    return(
        <div className="carousel">
            <div className="container carousel__container">
                <div className="carousel__texto">
                    <Slider autoplay={6000} previousButton="" nextButton="" className="center">
                        {content.map((item, index) => (
                            <div key={index}>
                                <div className="center">
                                    <h2>{item}</h2>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="carousel__image">
                </div>
            </div>
        </div>
    )
}

export default Carousel