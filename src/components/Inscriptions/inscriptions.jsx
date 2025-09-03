import React from 'react'
import imagenInscripcion from '../../asssets/img/inscriptions.png'
import './inscriptions.css'

function Inscriptions() {
    return (
        <div className="inscriptionsContainer">
            <div className="inscriptionsBanner">
                <div className="text">
                    <h2>¡Inscripciones abiertas!</h2>
                    <h3>
                        20° Encuentro nacional de profesores de derecho procesal penal <br /> 18 y 19 de Septiembre
                    </h3>
                    <div className="buttons">
                        <a
                            rel='noreferrer'
                            className="btnSecundario"
                            href="https://drive.google.com/file/d/1uuyg8fcYV1L65H-zfvEy3gw4gEr4N58l/view?usp=drive_link"
                            target="_blank"
                        >
                            Programa
                        </a>
                        <a
                            rel='noreferrer'
                            className="btnPrimario"
                            href="https://fundacionformartecursos.com.ar/product/xx-encuentro-de-profesores-de-derecho-procesal-p"
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
