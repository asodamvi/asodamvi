import React from 'react'

// Components
import Layout from '../components/Layout'
import History from '../components/History'
import Asociacion from '../components/Asociacion'
import Directivos from '../components/Directivos'
import Predio from '../components/Predio'

// Styles
import '../assets/css/nosotros.css'

const Nosotros = () => (
    <Layout>
        <section className="section__nosotros">
            <div className="container">
                <History />
                <Asociacion />
                <Directivos />
                <Predio />
            </div>
        </section>
    </Layout>
)

export default Nosotros 
