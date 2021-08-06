import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRightAlt } from "@material-ui/icons"

// Components
import Identificacion from '../components/Identificacion';

const Registrarse = () => {
    const [ documento, setDocumento ] = useState(null);

    const handleSubmit = async (_event) => {
        _event.preventDefault();

        const { identificacion } = _event.target.elements;

        if(identificacion.value) {
            setDocumento(parseInt(identificacion.value));
        }
    }

    return (
        <div>
            <div className="container__login">
                <div className="login__image"></div>

                <div className="form__container">
                    { !documento && (
                        <form onSubmit={handleSubmit} className="login__form validate-form">
                            <h1 className="title">
                                Registrarse
                            </h1>

                            <div className="wrap-input100 validate-input" data-validate="Name is required">
                                <span className="label-input100">Cédula de Ciudadanía</span>
                                <input type="number" id="identificacion" min="1000000" max="9999999999" className="input100"/>
                            </div>

                            <div className="container__form_btn">
                                <div>
                                    <input type="submit" value="Continuar" className="form__login_btn" />
                                </div>

                                <NavLink to="/ingresar" className="form__login_link">
                                    Ingresar
                                    <ArrowRightAlt />
                                </NavLink>
                            </div>
                        </form>
                    )}

                    { documento && (
                        <Identificacion documento={documento} setDocumento={setDocumento}/>
                    )}
                </div>
            </div>
        </div>
    )
}
export default Registrarse;