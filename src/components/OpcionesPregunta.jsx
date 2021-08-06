import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase/config';
import { DeleteForever } from '@material-ui/icons';
import { useAuth } from '../contexts/AuthContext';

const OpcionesPregunta = (props) => {
    const { validateRole } = useAuth();
    const role = validateRole();
    const { pregunta } = props;
    const [opciones, setOpciones] = useState([]);
    const [respuesta, setRespuesta] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                await firestore.collection("opciones").where("pregunta", "==", pregunta).orderBy("create").onSnapshot((querySnapshot) => {
                    let datos = [];

                    querySnapshot.forEach((doc) => {
                        datos.push({ id: doc.id, ...doc.data() });
                    });

                    setOpciones(datos);
                    setLoader(false)
                });
            } catch (error) {
                console.warn("Opciones Preguntas - Error:", error);
            }
        }

        fetchData();

        return () => {
            setOpciones([]);
        }
    }, [])

    const handleRespuesta = () => {
        if (respuesta) {
            setDisabled(true);

            props.saveRespuesta({
                opcion: respuesta,
                pregunta: pregunta
            })
        };
    }

    const handleDeleteOpcion = async (id) => {
        try {
            await firestore.collection("opciones").doc(id).delete().then(() => {
                console.log("Opción Eliminada correctamente");
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            { loader && <div className="loader"></div> }

            {
                opciones?.map((doc, index) => (
                    <div key={index}>
                        <div className="opcion__header">
                            {(role === "admin") && (
                                <>
                                    <p>{index + 1}. {doc.titulo}</p>
                                    <div>
                                        <DeleteForever className="btn__delete" onClick={() => handleDeleteOpcion(doc.id)} />
                                    </div>
                                </>
                            )}

                            {(role === "asociado") && (
                                <button className="opcion__button" onClick={() => setRespuesta(doc.id)} disabled={disabled}>
                                    <span>{index + 1}. </span> {doc.titulo}
                                </button>
                            )}
                        </div>
                    </div>
                ))
            }

            {(role === "asociado") && (
                <div className="save__footer">
                    <button className="header__component_btn" onClick={handleRespuesta} disabled={disabled}>
                        Guardar
                    </button>
                </div>
            )}
        </div>
    )
}

export default OpcionesPregunta;