import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { ControlPoint, EventAvailable, EventBusy } from '@material-ui/icons';
import 'moment/locale/es';
import { firestore } from '../firebase/config';

// Components
import Modal from './Modal';
import EncuestaModal from './EncuestaModal';

const ResponderEncuestas = () => {
    const [encuestas, setEncuestas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [encuesta, setEncuesta] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [showEncuesta, setShowEncuesta] = useState(false);

    useEffect(() => {
        async function fetchData() {
            await firestore.collection("encuestas").onSnapshot((snapshot) => {
                let query = []

                snapshot.forEach(doc => {
                    query.push({ id: doc.id, ...doc.data() })
                })

                setEncuestas(query);
                setLoading(false);
            }, (error) => {
                console.log("Error:", error);
            });
        }

        fetchData();

        return () => {
            setLoading(false)
        }
    }, [])

    const modalEncuesta = (index) => {
        setShowModal(true);
        setShowEncuesta(true);
        setEncuesta(encuestas[index]);
    }

    return (
        <>
            <div className="header__component">
                <h2 className="subtitle">Encuestas</h2>
            </div>

            {(loading) && <div className="loader"></div>}

            {(!loading) && (
                <div className="body__component">
                    <div className="encuestas__container">
                        {
                            encuestas.map((encuesta, index) => (
                                <div className="encuesta" key={index} onClick={() => modalEncuesta(index)}>
                                    <h3>{encuesta.titulo} <span className="estado__title">{encuesta.estado.toUpperCase()}</span></h3>
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
                                </div>
                            ))
                        }
                    </div>
                </div>
            )}

            { (showModal) && (
                <Modal showModal={setShowModal} title="Encuesta">
                    <EncuestaModal encuesta={encuesta} showModal={setShowModal}/>
                </Modal>
            )}
        </>
    )
}

export default ResponderEncuestas;