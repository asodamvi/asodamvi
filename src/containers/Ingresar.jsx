import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom'
import { ArrowRightAlt } from "@material-ui/icons"

// Styles
import "../assets/css/styles.css"
import "../assets/css/ingresar.css"

const Ingresar = () => {
    const [email, setEmail]         = useState('');
    const [password, setPassword]   = useState('');
    const [message, setMessage]     = useState('');
    const { ingresar } = useAuth();
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await ingresar(email, password).then(() => {
            history.push("/dashboard");
        }).catch(error => {
            let message = ''

            switch(error.code) {
                case "auth/wrong-password":
                    message="La contraseña ingresada es incorrecta."
                    break;
                case "auth/user-not-found":
                    message="El usuario ingresado no se encuentra registrado en ASODAMVI"
                    break;
                case "auth/too-many-requests":
                    message="El acceso a esta cuenta se ha deshabilitado temporalmente por demaciados intentos incorrectos."
                    break;
                default: 
                    message="Ups. Ocurrio un error."
                    break;
            }

            setMessage(message);
        });
    }

    return (
        <div>
            <div className="container__login">
                <div className="login__image"></div>

                <div className="form__container">
                    <form onSubmit={handleSubmit} className="login__form validate-form">
                        <h1 className="title">
                            Ingresar
                        </h1>

                        <div className="wrap-input100 validate-input" data-validate="Name is required">
                            <span className="label-input100">Correo electrónico</span>
                            <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} className="input100"/>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                            <span className="label-input100">Contraseña</span>
                            <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} className="input100"/>
                        </div>

                        <div className="container__form_btn">
                            <div>
                                <input type="submit" value="Ingresar" className="form__login_btn" />
                            </div>

                            <NavLink to="/registrarse" className="form__login_link">
                                Registrarse
                                <ArrowRightAlt />
                            </NavLink>
                        </div>

                        <NavLink to="/restaurar-contrasena" className="form__login_link">
                            ¿Olvidó su contraseña?
                        </NavLink>

                        {
                            message && (
                                <div className="form__message">
                                    <p>{ message }</p>
                                </div>
                            )
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Ingresar;