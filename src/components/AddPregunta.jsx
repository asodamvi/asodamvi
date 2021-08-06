import React, {useState} from 'react';
import { firestore } from '../firebase/config';

const AddPregunta = (props) => {
    const [pregunta, setPregunta] = useState("");
    const { encuesta, message, showForm } = props;

    const handleAddPregunta = async (__event) => {
        __event.preventDefault();

        console.log(pregunta);
        if (pregunta) {
            await firestore.collection("preguntas").add({
                encuesta: encuesta,
                titulo: pregunta
            }).then(() => {
                setPregunta("");
                showForm(false);
                message("Su pregunta fue añadida exitosamente");
            });
        } else {
            message("Su pregunta fue añadida exitosamente");
        }
    }

    return (
        <form onSubmit={handleAddPregunta} className="login__form validate-form">
            <div className="wrap-input100 validate-input" data-validate="Name is required">
                <span className="label-input100">Nueva pregunta: (*)</span>
                <input type="text" id="pregunta" value={pregunta} onChange={(e) => setPregunta(e.target.value)} className="input100" />
            </div>

            <div className="container__form_btn">
                <div>
                    <input type="submit" value="Agregar" className="form__login_btn" />
                </div>
            </div>
        </form>
    )
}

export default AddPregunta;