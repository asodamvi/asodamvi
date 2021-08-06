import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { NavLink } from 'react-router-dom';
import { ArrowRightAlt } from "@material-ui/icons"

// Components
import Registrar from './Registrar';
import "../assets/css/ingresar.css"

const Identificacion = (props) => {
    const { validateDoc } = useAuth();
    const { documento } = props;
    const [ data, setData] = useState(null);
    const [ loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            await validateDoc(documento).then((querySnapshot) => {
                if(querySnapshot.size){
                    setData({...querySnapshot.docs[0].data(), doc: querySnapshot.docs[0].id})
                }

                setLoading(false)
            })
        }

        fetchData();

        return () => {
            setLoading(false)
        }
    }, [])

    return(
        <div>
            { (loading) && <div className="loader"></div> }

            { (!data && !loading) && (
                <div className="form__message">
                    <h3>No eres asociado de ASODAMVI no puedes registrarte en el sistema.</h3>
                    <NavLink to="/" className="form__login_link">
                        Volver
                        <ArrowRightAlt />
                    </NavLink>
                </div>
            )}

            { (data && !data.estado && !loading) && (
                <div className="form__message">
                    <h3>Eres un asociado inactivo contactanos para poder ayudarte.</h3>
                    <NavLink to="/contacto" className="form__login_link">
                        Contáctanos
                        <ArrowRightAlt />
                    </NavLink>
                </div>
            )}

            { (data && data.usuario !== null && data.estado && !loading) && (
                <div className="form__message">
                    <h3>Ya tienes una cuenta registrada en el sistema con el correo eletrónico <span>{data.email}</span></h3>
                    <NavLink to="/ingresar" className="form__login_link">
                        Ingresar
                        <ArrowRightAlt />
                    </NavLink>
                </div>
            )}

            { (data && data.usuario === null && data.estado) && (
                <Registrar asociado={data}/>
            )}
        </div>
    )
}

export default Identificacion;