import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { ArrowRightAlt } from "@material-ui/icons"

const Registrar = (props) => {
    const { nombres, apellidos, documento, doc } = props.asociado;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { registrarse, updateUser } = useAuth();
    const history = useHistory();

    const handleSubmit = async (_event) => {
        _event.preventDefault();

        try {
            registrarse(email, password).then((data) => {
                updateUser(data.user.uid, doc).then(() => {
                    history.push("/dashboard");
                })
            })
        } catch (error) {
            console.log("Error:", error);
        }
    }

    return(
        <>
            <div className="form__message">
                <h3>Bienvenido:</h3>
                <p>C.C { documento }</p>
                <p>{ nombres } { apellidos }</p><br/>
                <p>Por favor ingrese los siguiente datos para completar su registro:</p>
            </div>

            <form onSubmit={handleSubmit} className="login__form validate-form">
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
                        <input type="submit" value="Registrarse" className="form__login_btn" />
                    </div>

                    <NavLink to="/ingresar" className="form__login_link">
                        Volver
                        <ArrowRightAlt />
                    </NavLink>
                </div>
            </form>
        </>
    )
}

export default Registrar;