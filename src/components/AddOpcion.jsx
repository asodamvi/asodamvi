import React, {useState} from 'react';
import firebase from 'firebase/app';
import { firestore } from '../firebase/config';

const AddOpcion = (props) => {
    const [opcion, setOpcion] = useState("");
    const { pregunta, showForm } = props;

    const handleAddOpcion = async () => {
        if (opcion) {
            await firestore.collection("opciones").add({
                pregunta: pregunta,
                titulo: opcion,
                create: firebase.firestore.FieldValue.serverTimestamp()
            }).then(() => {
                setOpcion("");
                showForm(false);
            });
        } else {
            console.log("Su pregunta fue añadida exitosamente");
        }
    }

    return (
        <form onSubmit={handleAddOpcion} className="login__form validate-form">
            <div className="wrap-input100 validate-input" data-validate="Name is required">
                <span className="label-input100">Nueva opción: (*)</span>
                <input type="text" id="opcion" value={opcion} onChange={(e) => setOpcion(e.target.value)} className="input100" />
            </div>

            <div className="container__form_btn">
                <div>
                    <input type="submit" value="Agregar" className="form__login_btn" />
                </div>
            </div>
        </form>
    )
}

export default AddOpcion;