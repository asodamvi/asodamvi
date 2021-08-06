import React, { useState } from 'react'

// Components
import Layout from '../components/Layout'
import Carousel from '../components/Carousel'
import Informacion from '../components/Information'
import Galery from '../components/Galery'
import Modal from '../components/Modal'

// Assets
import Comunicado from '../assets/img/comunicado.jpg';

const Inicio = () => {
    const [showModal, setShowModal] = useState(true);

    return(
        <Layout>
            <Carousel />
            <Informacion />
            <Galery dataItems="8"/>

            {
                showModal && (
                    <Modal showModal={setShowModal}>
                        <img src={Comunicado}/>
                    </Modal>
                )
            }
        </Layout>
    )
}

export default Inicio