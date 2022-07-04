import { useState } from 'react'

import { Section } from '../Common/Section.jsx'
import { H2, H3 } from '../Common/Texts.jsx'
import { TextField } from '../Common/Inputs/TextField.jsx'
import { Button } from '../Common/Inputs/Button.jsx'
import { FormStyled } from './styles.js'
import { MessageLabel } from '../Common/MessageLabel.jsx'
import { Loader } from '../Loader/index.jsx'
import { Box } from '../Common/Box.jsx'
export const Contact = () => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState({
        message: '',
        type: ''
    })

    const handleChange = e => {
        const { name, value } = e.target

        setData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        setLoading(true)
        e.preventDefault()

        //TODO: Send message via API

        setTimeout(() => {
            setLoading(false)
            setResponse({
                message: 'Mensaje Enviado',
                type: 'success'
            })
        }, 1000)
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
                    />
                    <TextField
                        id="email"
                        name="email"
                        type="email"
                        labelText="Correo electrónico"
                        onChange={handleChange}
                    />
                    <TextField
                        id="phone"
                        name="phone"
                        labelText="Teléfono de contacto"
                        onChange={handleChange}
                    />
                    <TextField
                        tag="textarea"
                        className="textarea"
                        labelText="Tu consulta"
                        name="body"
                        id="body"
                        onChange={handleChange}
                    />
                    <Button onClick={handleSubmit}>Enviar</Button>

                    {response.message && (
                        <MessageLabel
                            className="msg-box"
                            text={response.message}
                            status={response.type}
                        />
                    )}

                    {loading && <Loader />}
                </FormStyled>
            </Box>
        </Section>
    )
}
