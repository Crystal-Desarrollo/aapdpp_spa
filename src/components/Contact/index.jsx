import { useState } from 'react'

import { Section } from '../Common/Section.jsx'
import { H2, H3 } from '../Common/Texts.jsx'
import { TextField } from '../Common/Inputs/TextField.jsx'
import { Button } from '../Common/Inputs/Button.jsx'
import { FormStyled } from './styles.js'
import { Box } from '../Common/Box.jsx'
import { useSendContactEmail } from '../../hooks/emails/useSendContactEmail.js'
import { toast } from 'react-toastify'
import { CONTACT_EMAIL_SUCCESS } from '../../i18n/emails.js'
import { SOMETHING_WENT_WRONG } from '../../i18n/common.js'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
export const Contact = () => {
    const sendEmail = useSendContactEmail()
    const [data, setData] = useState({})
    const handleChange = e => {
        const { name, value } = e.target

        setData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()

        sendEmail(data)
            .then(() => {
                toast.success(CONTACT_EMAIL_SUCCESS)
                setData({})
            })
            .catch(() => toast.error(SOMETHING_WENT_WRONG))
    }

    return (
        <Section id="contacto">
            <H2>¿Querés formar parte?</H2>
            <H3>Dejanos tus datos y te responderemos lo antes posible</H3>
            <Box>
                <FormStyled>
                    <TextField
                        id="name"
                        name="name"
                        labelText="Nombre completo"
                        onChange={handleChange}
                        value={data?.name}
                    />
                    <TextField
                        id="email"
                        name="email"
                        type="email"
                        labelText="Correo electrónico"
                        onChange={handleChange}
                        value={data?.email}
                    />
                    <TextField
                        id="phone"
                        name="phone"
                        labelText="Teléfono de contacto"
                        onChange={handleChange}
                        value={data?.phone}
                    />
                    <TextField
                        tag="textarea"
                        className="textarea"
                        labelText="Tu consulta"
                        name="body"
                        id="body"
                        onChange={handleChange}
                        value={data?.body}
                    />
                    <Button onClick={handleSubmit}>Enviar</Button>

                    <div className="networks">
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
                    </div>
                </FormStyled>
            </Box>
        </Section>
    )
}
