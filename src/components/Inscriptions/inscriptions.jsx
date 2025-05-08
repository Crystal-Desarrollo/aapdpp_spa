import React from 'react'
import imagenInscripcion from '../../asssets/img/inscriptions.png'
import documento from '../../asssets/documents/Encuentro_AAPDPP_MDZ_24_25_2024.pdf'
import './inscriptions.css'

function Inscriptions() {
    return (
        <div className="inscriptionsContainer">
            <div className="inscriptionsBanner">
                <div className="text">
                    <h2>¡Inscripciones abiertas!</h2>
                    <p>
                        20° Encuentro nacional de profesores de derecho procesal penal <br /> 18 y 19 de Septiembre
                    </p>
                    <div className="buttons">
                        <a
                            rel='noreferrer'
                            className="btnSecundario"
                            href={documento}
                            target="_blank"
                        >
                            Cronograma
                        </a>
                        <a
                            rel='noreferrer'
                            className="btnPrimario"
                            href="https://forms.gle/F11o1oLFwxVrXQ3s8"
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
