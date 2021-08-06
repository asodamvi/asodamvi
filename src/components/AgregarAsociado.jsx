import React, { useState } from 'react'
import { firestore } from '../firebase/config';
import { useAuth } from '../contexts/AuthContext';

const AgregarAsociado = (props) => {
    const { validateDoc } = useAuth();
    const { asociado } = props;
    const [documento, setDocumento] = useState(asociado.documento || "");
    const [nombres, setNombres] = useState(asociado.nombres || "");
    const [apellidos, setApellidos] = useState(asociado.apellidos || "");
    const [email, setEmail] = useState(asociado.email || "");
    const [direccion, setDireccion] = useState(asociado.direccion || "");
    const [telefono, setTelefono] = useState(asociado.telefono || "");
    const [estado, setEstado] = useState(asociado.estado || true);
    const [message, setMessage] = useState("");

    const resetData = () => {
        setDocumento("")
        setNombres("")
        setApellidos("")
        setEmail("")
        setDireccion("")
        setTelefono("")
        setEstado(true)
    }

    const handleSubmit = async () => {
        setMessage(null);

        if(documento && nombres && apellidos) {

            try {
                if (Object.keys(asociado).length === 0) {
                    await validateDoc(parseInt(documento)).then((querySnapshot) => {
                        if(querySnapshot.size === 0){
                            firestore.collection('asociados').add({
                                documento: parseInt(documento),
                                nombres,
                                apellidos,
                                email,
                                direccion,
                                telefono: parseInt(telefono),
                                estado: (estado.toString() === "true") ? true : false,
                                usuario: null,
                            }).then(() => {
                                setMessage("Asociado registrado exitosamente");
                                resetData();
                            })
                        }else{
                            setMessage(`El Asociado con C.C ${documento} ya se encuentra registrado.`);
                        }
                    })
                }else {
                    await firestore.collection('asociados').doc(asociado.id).update({
                        documento: parseInt(documento),
                        nombres,
                        apellidos,
                        email,
                        direccion,
                        telefono: parseInt(telefono),
                        estado: (estado.toString() === "true") ? true : false,
                        usuario: null,
                    }).then(() => {
                        setMessage("Asociado actualizado exitosamente");
                    })
                }
            } catch (error) {
                setMessage("Ops no se registro el asociado en el sistema.");
                console.log(error);
            }
        }else{
            setMessage("Por favor completa los campos obligatorios (*)");
        }
    }

    return(
        <form onSubmit={handleSubmit} className="login__form validate-form">
            <div className="wrap-input100 validate-input" data-validate="Name is required">
                <span className="label-input100">Cédula de Ciudadanía (*)</span>
                { (Object.keys(asociado).length === 0) ? (
                    <input type="number" id="documento" min="1000000" max="9999999999" value={documento} onChange={(e) => setDocumento(e.target.value)} className="input100"/>
                ) : (
                    <input type="number" id="documento" value={documento} disabled className="input100"/>
                )}
            </div>

            <div className="wrap-input100 validate-input" data-validate="Name is required">
                <span className="label-input100">Nombres (*)</span>
                <input type="text" id="nombres" value={nombres} onChange={(e) => setNombres(e.target.value)} className="input100"/>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Name is required">
                <span className="label-input100">Apellidos (*)</span>
                <input type="text" id="apellidos" value={apellidos} onChange={(e) => setApellidos(e.target.value)} className="input100"/>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Name is required">
                <span className="label-input100">Correo electrónico</span>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input100"/>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Name is required">
                <span className="label-input100">Dirección</span>
                <input type="text" id="direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)} className="input100"/>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Name is required">
                <span className="label-input100">Teléfono</span>
                <input type="number" id="telefono" min="10000000" max="9999999999"  value={telefono} onChange={(e) => setTelefono(e.target.value)} className="input100"/>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Name is required">
                <span className="label-input100">Estado</span>
                <select value={estado.toString()} onChange={(e) => setEstado(e.target.value)} className="select__form">
                    <option value="true">Activo</option>
                    <option value="false">Inactivo</option>
                </select>
            </div>

            <p>(*) Campos obligatorios</p>

            {
                message && (
                    <div className="form__message">
                        <p>{ message }</p>
                    </div>
                )
            }

            <div className="container__form_btn">
                <div>
                    <input type="submit" value={(Object.keys(asociado).length === 0) ? "Registrar" : "Editar"} className="form__login_btn" />
                </div>
            </div>
        </form>
    )
}

export default AgregarAsociado;