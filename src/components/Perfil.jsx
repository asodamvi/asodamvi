import React, { useState } from 'react';

// Firebase
import { useAuth } from "../contexts/AuthContext";

const Perfil = (props) => {
    const { currentUser, validateRole } = useAuth();
    const role = validateRole();
    const { documento, nombres, apellidos } = currentUser;
    const [email, setEmail] = useState(currentUser.email);
    const [password, setPassword] = useState("****************");
    const [direccion, setDireccion] = useState(currentUser.direccion);
    const [telefono, setTelefono] = useState(currentUser.telefono);

    console.log(currentUser);

    return (
        <>
            {
                (role !== "admin") && (
                    <>
                        <h2>Perfil</h2>

                        <form  className="login__form validate-form">
                            <div className="wrap-input100 validate-input" data-validate="Name is required">
                                <span className="label-input100">Nombres</span>
                                <input type="text" id="documento" value={documento} className="input100" disabled />
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Name is required">
                                <span className="label-input100">Nombres</span>
                                <input type="text" id="nombres" value={nombres} className="input100" disabled />
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Name is required">
                                <span className="label-input100">Apellidos</span>
                                <input type="text" id="apellidos" value={apellidos} className="input100" disabled/>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Name is required">
                                <span className="label-input100">Dirección</span>
                                <input type="text" id="direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)} className="input100"/>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Name is required">
                                <span className="label-input100">Teléfono</span>
                                <input type="number" id="telefono" min="10000000" max="9999999999"  value={telefono} onChange={(e) => setTelefono(e.target.value)} className="input100"/>
                            </div>

                            <div className="container__form_btn">
                                <div>
                                    <input type="submit" value="Actualizar" className="form__login_btn" />
                                </div>
                            </div>
                        </form>
                    </>
                )
            }

            <h2>Cuenta</h2>
            <form  className="login__form validate-form">
                <div className="input__link_form">
                    <div className="wrap-input100 validate-input" data-validate="Name is required">
                        <span className="label-input100">Correo electrónico</span>
                        <input type="email" id="email" value={email} disabled className="input100"/>
                    </div>
                    <div className="container__form_btn">
                        <div>
                            <input type="submit" value="Actualizar correo electrónico" className="form__login_btn" />
                        </div>
                    </div>
                </div>

                <div className="input__link_form">
                    <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                        <span className="label-input100">Contraseña</span>
                        <input type="password" id="password" value={password} disabled className="input100"/>
                    </div>
                    <div className="container__form_btn">
                        <div>
                            <input type="submit" value="Actualizar Contraseña" className="form__login_btn" />
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Perfil;