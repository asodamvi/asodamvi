import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const RestaurarPassword = (props) => {
    const [email, setEmail] = useState('');
    const history = useHistory();
    const { restorePassword } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await restorePassword(email).then(() => {
            history.push("/ingresar"); 
        }).catch(error => {
            console.error(error);
        });
    }

    return (
        <div>
            <div className="container__login">
                <div className="login__image"></div>

                <div className="form__container">
                    <form onSubmit={handleSubmit} className="login__form validate-form">
                        <h1 className="title">
                            Restaurar Contraseña
                        </h1>

                        <div className="wrap-input100 validate-input" data-validate="Name is required">
                            <span className="label-input100">Correo electrónico</span>
                            <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} className="input100"/>
                        </div>

                        <div className="container__form_btn">
                            <div>
                                <input type="submit" value="Enviar" className="form__login_btn" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default RestaurarPassword;