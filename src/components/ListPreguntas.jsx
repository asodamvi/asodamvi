import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase/config';
import { DeleteForever, PlaylistAddCheck } from '@material-ui/icons';
import { useAuth } from '../contexts/AuthContext';

// Components
import OpcionesPregunta from './OpcionesPregunta';
import AddOpcion from './AddOpcion';

const ListPreguntas = (props) => {
    const { validateRole, currentUser } = useAuth();
    const role = validateRole();
    const { encuesta } = props;

    const [preguntasList, setPreguntasList] = useState([]);
    const [showFormOpcion, setShowFormOpcion] = useState(false);
    const [preguntaId, setPreguntaId] = useState(null);
    const [respuestas, setRespuestas] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        async function fetchData() {
            await firestore.collection("preguntas").where("encuesta", "==", encuesta).onSnapshot((snapshot) => {
                let preguntas = [];

                snapshot.forEach(async doc => {
                    preguntas.push({id: doc.id, ...doc.data()});
                })

                setPreguntasList(preguntas);
            });
        }

        fetchData();

        return () => {
            setPreguntasList([]);
        }
    }, [])

    const handleDeletePregunta = async (id) => {
        try {
            await firestore.collection("preguntas").doc(id).delete().then(() => {
                console.log("Pregunta Eliminada correctamente");
            })
        } catch (error) {
            console.log(error);
        }
    }

    const finalizarEncuesta = async () => {
        if(respuestas.length === preguntasList.length) {
            try {
                await firestore.collection("usuarios_encuestas").add({
                    usuario: currentUser.doc,
                    encuesta: encuesta
                }).then(() => {
                    respuestas.map(async (doc) => {
                        await firestore.collection("respuestas").add(doc).then(() => {
                            props.showModal(false);
                        });
                    })
                })

                setMessage('');
            } catch (error) {
                console.log(error)
            }
        } else {
            setMessage("Por favor responda todas las preguntas para finalizar la encuesta.")
        }
    }

    const handleRespuestas = (obj) => {
        setRespuestas([ ...respuestas, obj ]);
    }

    const handleShowOpcion = (id) => {
        setShowFormOpcion(true);
        setPreguntaId(id);
    }

    return (
        <>
            <div className="encuesta__lista">
                {
                    preguntasList?.map((doc, index) => (
                        <div className="encuesta__pregunta" key={index}>
                            <div className="pregunta__header">
                                <h4>{index + 1}. ¿{doc.titulo.toUpperCase()}?</h4>
                                {(role === "admin") && (
                                    <div>
                                        <PlaylistAddCheck className="btn__option" onClick={() => handleShowOpcion(doc.id)}/>
                                        <DeleteForever className="btn__delete" onClick={() => handleDeletePregunta(doc.id) }/>
                                    </div>
                                )}
                            </div>
                            <div className="lista__preguntas">
                                <OpcionesPregunta pregunta={doc.id} saveRespuesta={handleRespuestas}/>
                            </div>
                        </div>
                    ))
                }

                {
                    (role === "asociado") && (
                        <div className="finalizar__encuesta_footer">
                            <button className="header__component_btn" onClick={finalizarEncuesta}>
                                Finalizar Encuesta
                            </button>
                        </div>
                    )
                }

                {
                    message && (
                        <div className="form__message">
                            <p>{ message }</p>
                        </div>
                    )
                }
            </div>

            { (showFormOpcion && role === "admin") && (
                <AddOpcion pregunta={preguntaId} showForm={setShowFormOpcion}/>
            )}
        </>
    )
}

export default ListPreguntas;