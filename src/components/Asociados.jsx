import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase/config';
import { Edit, DeleteForever,ControlPoint, CheckCircle, Cancel } from '@material-ui/icons';

// Component
import Modal from './Modal';
import AgregarAsociado from './AgregarAsociado';

const Asociados = () => {
    const [loading, setLoading] = useState(true);
    const [asociados, setAsociados] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editing, setEditing] = useState(false);
    const [asociado, setAsociado] = useState({})

    const deleteAsociado = (id) => {
        firestore.collection("asociados").doc(id).delete().then(() => {
            setAsociados([])
            console.log("Asociado Eliminado Exitosamente");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

    const editAsociado = (index) => {
        setShowModal(true);
        setAsociado(asociados[index]);
        setEditing(true);
    }

    const addAsociado = () => {
        setEditing(false);
        setAsociado({});
        setShowModal(true);
    }

    useEffect(() => {
        async function fetchData() {
            await firestore.collection('asociados').orderBy("apellidos").onSnapshot((snapshot) => {
                let query = []

                snapshot.forEach(doc => {
                    query.push({ id: doc.id, ...doc.data() })
                })

                setAsociados(query);
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

    return (
        <>
            {   (loading) && <div className="loader"></div> }
            {   (!loading) && (
                    <>
                        <div className="header__component">
                            <h2 className="subtitle">Asociados</h2>
                            <button className="header__component_btn" onClick={addAsociado}>
                                <ControlPoint />
                                Agregar
                            </button>
                        </div>

                        <table className="table">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>C.C</th>
                                    <th>Nombres</th>
                                    <th>Telefono</th>
                                    <th>E-mail</th>
                                    <th>Dirección</th>
                                    <th>Estado</th>
                                    <th>Opciones</th>
                                </tr>
                            </thead>

                            <tbody>
                                { asociados.map((asociado, index) => (
                                    <tr key={asociado.id}>

                                        <td>{index + 1}</td>
                                        <td>{asociado.documento}</td>
                                        <td>{asociado.apellidos} {asociado.nombres}</td>
                                        <td>{asociado.telefono}</td>
                                        <td>{asociado.email}</td>
                                        <td>{asociado.direccion}</td>
                                        <td>{(asociado.estado) ? <CheckCircle className="text__status_ok"/> : <Cancel className="text__status_cancel"/>}</td>
                                        <td className="td__options">
                                            <Edit className="td__options_edit" onClick={() => editAsociado(index) }/>
                                            <DeleteForever className="td__options_delete" onClick={() => deleteAsociado(asociado.id) }/>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {
                            showModal && (
                                <Modal showModal={setShowModal} title={(editing) ? "Editar Asociado" : "Agregar Asociado"}>
                                    <AgregarAsociado asociado={asociado}/>
                                </Modal>
                            )
                        }
                    </>
                )
            }
        </>
    )
}

export default Asociados;