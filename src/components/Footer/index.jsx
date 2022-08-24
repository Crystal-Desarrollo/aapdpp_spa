import React from 'react'
import { MyFooter } from './styles'

export const Footer = () => {
    return (
        <MyFooter>
            Sitio web desarrollado especialmente para la AAPDPP por
            <strong>
                <a
                    href="https://crystal-desarrollo.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Crystal Desarrollo 💎.
                </a>
            </strong>
            Todos los derechos reservados.
        </MyFooter>
    )
}
