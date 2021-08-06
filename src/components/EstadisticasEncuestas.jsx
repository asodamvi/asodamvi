import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase/config';
import { EventAvailable, EventBusy } from '@material-ui/icons';

// MomentsJS
import moment from 'moment';
import 'moment/locale/es'

const EstadisticasEncuestas = (props) => {
    const [preguntasData, setPreguntasData] = useState([]);
    const [loader, setLoader] = useState(true);
    const { encuesta } = props;

    useEffect(() => {
        async function fetchData() {
            try {
                let preguntasList = new Array();
                let preguntas = new Array();
                const preguntasRef = await firestore.collection("preguntas").where("encuesta", "==", encuesta.id).get();

                preguntasRef.forEach(pregunta => {
                    preguntasList.push({id: pregunta.id, ...pregunta.data()});
                })

                for (let index = 0; index < preguntasList.length; index++) {
                    let opciones = new Array();
                    await firestore.collection("opciones").where("pregunta", "==", preguntasList[index].id).get().then((opcionesData) => {
                        opcionesData.forEach(async (opcion) => {
                            const query = firestore.collection("respuestas").where("pregunta", "==", preguntasList[index].id).where("opcion", "==", opcion.id);
                            const snapshot = await query.get();
                            const count = snapshot.size;

                            const object =  Object.create({ id: opcion.id, ...opcion.data(), votos: count })
                            opciones.push(object)
                        });
                    });
                    preguntas.push({ ...preguntasList[index], opciones: opciones });
                }
                setPreguntasData(preguntas);
                setLoader(false);
            } catch (error) {
                console.error("EstadisticasEncuestas - Error: ", error);
            }
        }

        fetchData();

        return () => {
            setLoader(true)
            setPreguntasData([]);
        }
    }, []);

    const preguntaItem = (pregunta) => {
       console.log(pregunta)
    }

    const hola = () => {
        console.log(preguntasData);
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

                <button onClick={hola}>
                    Validar
                </button>

                {loader && <div className="loader"></div>}

                { !loader && (
                    <div className="encuesta__body">
                        {
                            React.Children.toArray(
                                preguntasData.map((preguntaItem))
                            )
                        }
                    </div>
                )}
            </div>
        </div>
    )
}

export default EstadisticasEncuestas;