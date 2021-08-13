import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase/config';
import { EventAvailable, EventBusy } from '@material-ui/icons';

// MomentsJS
import moment from 'moment';
import 'moment/locale/es'

const EstadisticasEncuestas = (props) => {
    const [encuestasRespondidas, setEncuestasRespondidas] = useState(0);
    const [preguntasList, setPreguntasList] = useState([]);
    const [opcionesList, setOpcionesList] = useState([]);
    const [opcionesVotos, setOpcionesVotos] = useState([]);
    const [loader, setLoader] = useState(true);
    const { encuesta } = props;

    useEffect(() => {
        async function fetchData() {
            try {
                // Obtener número de encuestas respondidas //
                const usuariosEncuestas = firestore.collection("usuarios_encuestas").where("encuesta", "==", encuesta.id);
                const snapshotEncuestas = await usuariosEncuestas.get();
                const numeroEncuestas   = snapshotEncuestas.size;
                setEncuestasRespondidas(numeroEncuestas);
                //____________________________________________//

                // Obtener preguntas de Encuesta //
                const preguntasRef =  firestore.collection("preguntas").where("encuesta", "==", encuesta.id);
                const preguntasData = await preguntasRef.get();
                const preguntasLista = new Array()

                for(const pregunta of preguntasData.docs) {
                    preguntasLista.push({id: pregunta.id, ...pregunta.data()});
                }

                setPreguntasList(preguntasLista);
                //____________________________________________//

                // Obtener opciones de cada pregunta de la encuesta //
                let opcionesPreguntas = new Array();
                let opcionesId = new Array();

                for(const pregunta of preguntasLista) {
                    let opciones = new Array();
                    let opcionesRef = firestore.collection("opciones").where("pregunta", "==", pregunta.id);
                    let opcionesData = await opcionesRef.get();

                    for(const opcion of opcionesData.docs) {
                        opcionesId.push(opcion.id);
                        opciones.push({id: opcion.id, ...opcion.data()});
                    }

                    opcionesPreguntas[pregunta.id] = opciones;
                }

                setOpcionesList(opcionesPreguntas);
                //____________________________________________//

                // Obtener votos de cada opción de las preguntas de la encuesta //
                const opcionesVotos = new Array();

                for(const opcion of opcionesId) {
                    const query = firestore.collection("respuestas").where("opcion", "==", opcion);
                    const snapshot = await query.get();
                    const count = snapshot.size;

                    opcionesVotos[opcion] = count;
                }

                setOpcionesVotos(opcionesVotos);
                //____________________________________________//

                setLoader(false);
            } catch (error) {
                console.error("EstadisticasEncuestas - Error: ", error);
            }
        }

        fetchData();

        return () => {
            setLoader(true)
            setEncuestasRespondidas(0)
            setPreguntasList([]);
        }
    }, []);

    const preguntaItem = (pregunta, index) => {
        return (
            <div key={index}>
                <p>{index+1}. {pregunta.titulo}</p>
                <div className="pregunta__opciones">
                    {
                        opcionesList[pregunta.id].map(opcion => (
                            <div className="pregunta__opcion">
                                <p>{opcion.titulo}</p>
                                <span>{opcionesVotos[opcion.id]}</span  >
                            </div>
                        ))
                    }
                </div><br/>
            </div>
        )
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

                {loader && <div className="loader"></div>}

                { !loader && (
                    <>
                        <div className="encuestas__respondidas">
                            <h3>Encuestas Respondidas: </h3>
                            <span>{encuestasRespondidas}</span>
                        </div>
                        <div className="encuesta__body">
                            {
                                React.Children.toArray(
                                    preguntasList?.map((pregunta, index) => preguntaItem(pregunta, index))
                                )
                            }
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default EstadisticasEncuestas;