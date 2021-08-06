import React, { useState } from 'react';

// Firebase
import 'firebase/auth';
import { useFirebaseApp } from 'reactfire';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const firebase = useFirebaseApp();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await firebase.auth().signInWithEmailAndPassword(email, password).then(result => {
            if(!result.user.emailVerified) {
                console.log("Email no verificado");

                firebase.auth().currentUser.sendEmailVerification();
                firebase.auth().signOut();
            }else{
                console.log("Ha iniciado Sesión Exitosamente")
            }
        }).catch(error => {
            console.error(error);
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Correo electrónico:</label>
                <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />

                <button type="submit">Ingresar</button>

                <hr/>
                <Link to="/acerca-de" onClick={hideMenu} className="nav__menu_link">
                    Eres asociado de Asodamvi y no tienes una cuenta. Registrate
                </Link>
            </form>
    </div>
    )
}

export default Login;