import React from 'react'

// Components
import Layout from '../components/Layout'
import Documento from '../components/Document'

// Styles
import "../assets/css/documentos.css"

// Documentos
import InformeFinanciero from '../assets/documents/informe-financiero-2021.pdf'
import Acta2022 from '../assets/documents/acta-06-2022.pdf'
import CertificadoExistencia from '../assets/documents/certificado-existencia-representacion-legal.pdf'
import ActaNombramiento from '../assets/documents/acta-nombramiento.pdf'
import ActaExtraordinaria from '../assets/documents/acta-asamblea-extraordinaria.pdf'
import EstatutosAprobados from '../assets/documents/estatutos-aprobados-asamblea.pdf'
import ActaConstitucion from '../assets/documents/acta-de-constitucion.pdf'
import CertificadoDirectivos from '../assets/documents/certificado-de-directivos.pdf'
import DeclaracionRenta from '../assets/documents/declaracion-renta.pdf'
import OficioDian from '../assets/documents/oficio-dian.pdf'
import Demanda from '../assets/documents/demanda-ruben-hurtado.pdf'
import Rut from '../assets/documents/rut-actualizado.pdf'
import Empalme from '../assets/documents/empalme-definitivo.pdf'
import OficioSolidaria from '../assets/documents/oficio-cuota-solidaria.pdf'
import Predial1 from '../assets/documents/planilla-predial-1.pdf'
import Predial2 from '../assets/documents/planilla-predial-2.pdf'
import PazySalvo1 from '../assets/documents/010102770207000.pdf'
import PazySalvo2 from '../assets/documents/010102770212000.pdf'
import Asamblea from '../assets/documents/informacion-asamblea.pdf'

const documentos = [
    { 
        id: 1,
        documento: Predial1,
        name: "PLANILLA PREDIAL 1"
    },
    { 
        id: 2,
        documento: Predial2,
        name: "PLANILLA PREDIAL 2"
    },
    { 
        id: 3,
        documento: OficioSolidaria,
        name: "OFICIO CUOTA SOLIDARIA"
    },
    { 
        id: 4,
        documento: Empalme,
        name: "EMPALME"
    },
    { 
        id: 5,
        documento: Rut,
        name: "RUT ACTUALIZADO"
    },
    { 
        id: 6,
        documento: Demanda,
        name: "DEMANDA - RUBÉN DARIO GOMEZ HURTADO CONTRA ASODAMVI"
    },
    { 
        id: 7,
        documento: OficioDian,
        name: "OFICIO DIAN"
    },
    { 
        id: 8,
        documento: DeclaracionRenta,
        name: "DECLARACIÓN DE RENTA"
    },
    { 
        id: 9,
        documento: CertificadoDirectivos,
        name: "CERTIFICADO DE DIRECTIVOS"
    },
    { 
        id: 10,
        documento: ActaConstitucion,
        name: "ACTA DE CONSTITUCIÓN"
    },
    { 
        id: 11,
        documento: EstatutosAprobados,
        name: "ESTATUTOS APROBADOS POR ASAMBLEA"
    },
    { 
        id: 12,
        documento: ActaExtraordinaria,
        name: "ACTA ASAMBLEA EXTRAORDINARIA - ESTATUTOS"
    },
    { 
        id: 13,
        documento: Acta2022,
        name: "ACTA ASAMBLEA 06-2022"
    },
    { 
        id: 14,
        documento: InformeFinanciero,
        name: "INFORME FINANCIERO PERIODO 2021"
    },
    { 
        id: 15,
        documento: CertificadoExistencia,
        name: "CERTIFICADO DE EXISTENCIA Y REPRESENTACION LEGAL"
    },
    { 
        id: 16,
        documento: ActaNombramiento,
        name: "ACTA DE NOMBRAMIENTO"
    },
    { 
        id: 17,
        documento: Asamblea,
        name: "INFORMACIÓN ASAMBLEA 19 DE SEPTIEMBRE 2021"
    },
    { 
        id: 18,
        documento: PazySalvo1,
        name: "PAZ Y SALVO DE IMPUESTO PREDIAL UNIFICADO Y VALORIZACIÓN - 010102770207000"
    },
    {
        id: 19,
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