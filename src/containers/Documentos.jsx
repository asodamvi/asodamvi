import React from 'react'

// Components
import Layout from '../components/Layout'
import Documento from '../components/Document'

// Styles
import "../assets/css/documentos.css"

// Documentos
import PazySalvo1 from '../assets/documents/010102770207000.pdf'
import PazySalvo2 from '../assets/documents/010102770212000.pdf'
import Asamblea from '../assets/documents/informacion-asamblea.pdf'

const documentos = [
    { 
        id: 1,
        documento: Asamblea,
        name: "INFORMACIÓN ASAMBLEA 19 DE SEPTIEMBRE 2021"
    },
    { 
        id: 2,
        documento: PazySalvo1,
        name: "PAZ Y SALVO DE IMPUESTO PREDIAL UNIFICADO Y VALORIZACIÓN - 010102770207000"
    },
    {
        id: 3,
        documento: PazySalvo2,
        name: "PAZ Y SALVO DE IMPUESTO PREDIAL UNIFICADO Y VALORIZACIÓN - 010102770212000"
    }
]

const Documentos = () => (
    <Layout>
        <section className="section__documentos">
            <div className="container">
                <h3 className="title">Documentos</h3>
                {documentos.map((data) => {
                    return <Documento documento_url={data.documento} name={data.name} key={data.id}/>
                })}
            </div>
        </section>
    </Layout>
)

export default Documentos