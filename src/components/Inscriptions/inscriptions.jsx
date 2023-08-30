import React from 'react'
import imagenInscripcion from '../../asssets/img/imagenencuentro.png'
import documento from '../../asssets/documents/encuentronacionalaapdpp.pdf'
import './inscriptions.css'

function Inscriptions() {
    return (
        <div className="inscriptionsContainer">
            <div className="inscriptionsBanner">
                <div className="text">
                    <h2>¡Inscripciones abiertas!</h2>
                    <p>
                        18° Encuentro nacional de profesores de derecho procesal
                        penal <br /> 5 y 6 de Octubre
                    </p>
                    <div className="buttons">
                        <a
                            className="btnSecundario"
                            href={documento}
                            target="_blank"
                        >
                            Cronograma
                        </a>
                        <a
                            className="btnPrimario"
                            href="https://docs.google.com/forms/d/e/1FAIpQLScB4DUqY8mwe7HdocajgBA6Rq4DBCCjJSzNR3Aio7Xa6qfEow/viewform"
                            target="_blank"
                        >
                            {' '}
                            ¡Inscribirme!
                        </a>
                    </div>
                </div>
                <div className="img">
                    <img src={imagenInscripcion} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Inscriptions
