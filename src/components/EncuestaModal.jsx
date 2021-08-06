import React, { useState, useEffect } from 'react';
import { ControlPoint, EventAvailable, EventBusy } from '@material-ui/icons';
import moment from 'moment';
import 'moment/locale/es';
import { firestore } from '../firebase/config';
import AddPregunta from './AddPregunta';
import ListPreguntas from './ListPreguntas';
import { useAuth } from '../contexts/AuthContext';

const EncuestaModal = (props) => {
    const { validateRole, currentUser } = useAuth();
    const role = validateRole();
    const { encuesta, showModal } = props;
    const [showFormPregunta, setShowFormPregunta] = useState(false);
    const [ encuestaRealizada, setEncuestaRealizada ] = useState(false);
    const [showFormOpcion, setShowFormOpcion] = useState(false);
    const [message, setMessage] = useState("");
    const [preguntas, setPreguntas] = useState([]);
    const [opcion, setOpcion] = useState("");
    const [preguntaId, setPreguntaId] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            if(role === "admin") {
                getDataEncuesta();
            }else{
                await firestore.collection("usuarios_encuestas").where("usuario", "==", currentUser.doc).where("encuesta", "==", encuesta.id).limit(1).get().then((query) => {
                    if (query.size) {
                        setEncuestaRealizada(true)
                    } else {
                        setEncuestaRealizada(false)
                        getDataEncuesta();
                    }
                });
            }
        }

        const getDataEncuesta = async () => {
            try {
                await firestore.collection("preguntas").where("encuesta", '==', encuesta.id).onSnapshot((snapshot) => {
                    let query = [];

                    snapshot.forEach(async (doc) => {
                        await firestore.collection("opciones").where("pregunta", "==", doc.id).onSnapshot((querySnapshot) => {
                            let opciones = [];

                            querySnapshot.forEach(doc => {
                                opciones.push({ id: doc.id, ...doc.data() });
                            })

                            query.push({ id: doc.id, ...doc.data(), opciones })
                        });
                    })

                    setPreguntas(query);
                    setLoading(false);
                })
            } catch (error) {
                console.warn("Encuesta Modal - Error: ", error);
            }
        }

        fetchData();

        return () => {
            setShowFormPregunta(false)
            setShowFormOpcion(false);
            setPreguntas([])
        }
    }, [])

    const handleFormPregunta = () => {
        setShowFormPregunta(true)
        setShowFormOpcion(false);
    }

    const validateEncuesta = async (encuesta) => {

    }

    return (
        <div className="encuesta__modal">
            <div className="encuesta">
                <div className="encuesta__estado">
                    <span>{encuesta.estado}</span>
                </div>
                <h3>{encuesta.titulo}</h3>
                <p>{encuesta.descripcion}</p>

                <div className="encuesta__footer">
                    <div className="encuesta__date">
                        <div className="encuesta__date_item">
                            <EventAvailable className="encuesta__date_icon" />
                            <span>{moment(encuesta.fechaInicio.toDate()).format('Do MMMM YYYY, h:mm:ss a')}</span>
                        </div>
                        <div className="dot" />
                        <div className="encuesta__date_item">
                            <EventBusy className="encuesta__date_icon" />
                            <span>{moment(encuesta.fechaFin.toDate()).format('Do MMMM YYYY, h:mm:ss a')}</span>
                        </div>
                    </div>
                </div>

                {
                    (role === "admin") && (
                        <div className="header__encuesta_btns">
                            <button className="header__component_btn" onClick={handleFormPregunta}>
                                <ControlPoint />
                                Agregar Pregunta
                            </button>
                        </div>
                    )
                }

                {   (encuestaRealizada) && (
                        <div class="message__encuesta">
                            <h4>Ya ha realizado esta encuesta...</h4>
                            <p>Cuando finalize la encuesta podrá ver los resultados.</p>
                        </div>
                )}

                { (!encuestaRealizada) && (
                    <ListPreguntas encuesta={encuesta.id} showModal={props.showModal} />
                )}

                {(showFormPregunta && role === "admin") && (
                    <AddPregunta encuesta={encuesta.id} message={setMessage} showForm={setShowFormPregunta} />
                )}
            </div>
        </div>
    )
}

export default EncuestaModal;