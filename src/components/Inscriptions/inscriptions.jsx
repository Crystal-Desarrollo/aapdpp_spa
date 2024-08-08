import React from 'react'
import imagenInscripcion from '../../asssets/img/Evento_24_octubre__2024.png'
import documento from '../../asssets/documents/Encuentro_AAPDPP_MDZ_2024.pdf'
import './inscriptions.css'

function Inscriptions() {
    return (
        <div className="inscriptionsContainer">
            <div className="inscriptionsBanner">
                <div className="text">
                    <h2>¡Inscripciones abiertas!</h2>
                    <p>
                        19° Encuentro nacional de profesores de derecho procesal
                        penal <br /> 24 y 25 de Octubre
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
                            href="https://docs.google.com/forms/d/1FaHz8eKlHDZh8l076uN2DRFBZ-78sUQS8jezwJNhv6w/prefill"
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
