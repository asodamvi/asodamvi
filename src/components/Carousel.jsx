import React from "react"
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

// Styles
import "../assets/css/carousel.css"

const Carousel = () => {
    const content = [
        "Conoce nuestro trabajo por las viviendas de más de 400 familias caucanas",
        "Desde el año 2008 trabajamos con cientos de familias por una vivienda digna",
        "Una vivienda donde se construyan sueños para todos"
    ]

    return(
        <div className="carousel">
            <div className="container carousel__container">
                <div className="carousel__texto">
                    <Slider autoplay={10000} previousButton="" nextButton="" className="center">
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