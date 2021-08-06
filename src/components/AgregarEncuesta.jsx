import React, { useState } from 'react';
import { firestore } from '../firebase/config';

const AgregarEncuesta = () => {
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [fechaInicio, setFechaInicio] = useState("");
    const [fechaFin, setFechaFin] = useState("");
    const [estado, setEstado] = useState("activa");
    const [message, setMessage] = useState("");

    const cleanFiles = () => {
        setTitulo("");
        setDescripcion("");
        setFechaInicio("");
        setFechaFin("")
        setEstado("activa");
    }

    const handleSubmit = async (__event) => {
        __event.preventDefault();

        if (titulo && descripcion && fechaInicio && fechaFin && estado) {
            try {
                await firestore.collection("encuestas").add({
                    titulo,
                    descripcion,
                    fechaInicio: new Date(fechaInicio),
                    fechaFin: new Date(fechaFin),
                    estado,
                }).then(() => {
                    cleanFiles();
                    console.log("Encuesta registrada exitosamente");
                })
            } catch (error) {
                console.error(error);
            }
        } else {
            console.log("Complete todos los campos por favor");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="login__form validate-form">
            <div className="wrap-input100 validate-input" data-validate="Name is required">
                <span className="label-input100">Título (*)</span>
                <input type="text" id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} className="input100" />
            </div>

            <div className="wrap-input100 validate-input" data-validate="Name is required">
                <span className="label-input100">Description (*)</span>
                <textarea id="titulo" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} className="input100"></textarea>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Name is required">
                <span className="label-input100">Fecha de Inicio (*)</span>
                <input type="datetime-local" id="fecha_inicio" value={fechaInicio} onChange={(e) => setFechaInicio(e.target.value)} className="input100" />
            </div>

            <div className="wrap-input100 validate-input" data-validate="Name is required">
                <span className="label-input100">Fecha de Finalización (*)</span>
                <input type="datetime-local" id="fecha_fin" value={fechaFin} onChange={(e) => setFechaFin(e.target.value)} className="input100" />
            </div>

            <div className="wrap-input100 validate-input" data-validate="Name is required">
                <span className="label-input100">Estado (*)</span>
                <select value={estado} onChange={(e) => setEstado(e.target.value)} className="select__form">
                    <option value="activa">Activa</option>
                    <option value="inactiva">Inactiva</option>
                    <option value="finalizada">Finalizada</option>
                </select>
            </div>

            <p>(*) Campos obligatorios</p>

            {
                message && (
                    <div className="form__message">
                        <p>{message}</p>
                    </div>
                )
            }

            <div className="container__form_btn">
                <div>
                    <input type="submit" value="Agregar" className="form__login_btn" />
                </div>
            </div>
        </form>
    )
}

export default AgregarEncuesta;