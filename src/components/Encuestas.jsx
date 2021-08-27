import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase/config';
import { ControlPoint, EventAvailable, EventBusy, BarChart, DeleteForever, Visibility } from '@material-ui/icons';
import moment from 'moment';
import 'moment/locale/es';

// Components
import Modal from './Modal';
import AgregarEncuesta from './AgregarEncuesta';

import '../assets/css/encuestas.css';
import EncuestaModal from './EncuestaModal';
import EstadisticasEncuestas from './EstadisticasEncuestas';

const Encuestas = () => {
    moment.locale('es');
    const [loading, setLoading] = useState(true);
    const [encuestas, setEncuestas] = useState([]);
    const [encuesta, setEncuesta] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [showEncuesta, setShowEncuesta] = useState(false);
    const [showData, setShowData] = useState(false);

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

    const handleShowData = (id) => {
        setShowData(true);
        setShowModal(true)
        setShowEncuesta(false);
        setEncuesta(encuestas[id]);
    }

    const addEncuesta = () => {
        setShowModal(true);
        setShowData(false)
        setShowEncuesta(false)
    }

    const modalEncuesta = (index) => {
        setShowEncuesta(true);
        setShowModal(true);
        setShowData(false);
        setEncuesta(encuestas[index]);
    }

    const handleDeleteEncuesta = async (id) => {
        try {
            await firestore.collection("encuestas").doc(id).delete().then(() => {
                console.log("Encuesta Eliminada correctamente");
                showModal(false);
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="header__component">
                <h2 className="subtitle">Encuestas</h2>
                <button className="header__component_btn" onClick={addEncuesta}>
                    <ControlPoint />
                    Agregar
                </button>
            </div>

            { (loading) && <div className="loader"></div> }

            { (!loading) && (
                <div className="body__component">
                    <div className="encuestas__container">
                        {
                            encuestas.map((encuesta, index) => (
                                <div className="encuesta" key={index}>
                                    <h3>{encuesta.titulo} <span className="estado__title">{encuesta.estado.toUpperCase()}</span></h3>
                                    <p>{encuesta.descripcion}</p>

                                    <div className="encuesta__footer">
                                        <div className="encuesta__date">
                                            <div className="encuesta__date_item">
                                                <EventAvailable className="encuesta__date_icon"/>
                                                <span>{moment(encuesta.fechaInicio.toDate()).format('Do MMMM YYYY, h:mm:ss a')}</span>
                                            </div>
                                            <div className="dot"/>
                                            <div className="encuesta__date_item">
                                                <EventBusy className="encuesta__date_icon"/>
                                                <span>{moment(encuesta.fechaFin.toDate()).format('Do MMMM YYYY, h:mm:ss a')}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="encuesta__actions">
                                        {
                                            (encuesta.estado !== "finalizada") && (
                                                <button className="header__component_btn" onClick={() => modalEncuesta(index)}>
                                                    <Visibility />
                                                    Ver
                                                </button>
                                            )
                                        }

                                        <button className="header__component_btn" onClick={() => handleShowData(index)}>
                                            <BarChart />
                                            Resultados
                                        </button>

                                        {
                                            (encuesta.estado !== "finalizada") && (
                                                <button className="btn__delete_component" onClick={() => handleDeleteEncuesta(encuesta.id) }>
                                                    <DeleteForever />
                                                    Eliminar
                                                </button>
                                            )
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            )}

            { (showModal) && (
                <Modal showModal={setShowModal} title={(showModal && !showEncuesta && !showData) ? "Agregar" : "Encuesta"}>
                    { (showEncuesta)  &&  <EncuestaModal encuesta={encuesta} showModal={setShowModal} />}
                    { (!showEncuesta && !showData) &&  <AgregarEncuesta /> }
                    { (showData) && <EstadisticasEncuestas encuesta={encuesta}/> }
                </Modal>
            )}
        </>
    )
}

export default Encuestas;