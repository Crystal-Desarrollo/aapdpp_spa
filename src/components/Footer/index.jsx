import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import { MyFooter, Networks } from './styles'

export const Footer = () => {
    return (
        <>
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
            <Networks>
                <a
                    title="Facebook"
                    target="_blank"
                    href="https://www.instagram.com/aapdpp.oficial/?hl=es-la"
                    rel="noreferrer"
                >
                    <FaFacebookF />
                </a>
                <a
                    title="Instagram"
                    target="_blank"
                    href="https://www.instagram.com/aapdpp.oficial/?hl=es-la"
                    rel="noreferrer"
                >
                    <FaInstagram />
                </a>
                <a
                    title="YouTube"
                    target="_blank"
                    href="https://www.youtube.com/channel/UCVn7VGibykL13e35qzSAQ1A"
                    rel="noreferrer"
                >
                    <FaYoutube />
                </a>
            </Networks>
        </>
    )
}
