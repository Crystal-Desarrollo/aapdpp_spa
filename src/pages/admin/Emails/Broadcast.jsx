import { H2 } from '../../../components/Common/Texts'
import { Section } from '../../../components/Common/Section'
import { Box } from '../../../components/Common/Box'
import { TextField } from '../../../components/Common/Inputs/TextField'
import { Switch } from '../../../components/Common/Inputs/Switch'
import { TextEditor } from '../../../components/Common/Inputs/TextEditor'
import { Button } from '../../../components/Common/Inputs/Button'
import { useState } from 'react'
import styled from 'styled-components'
import { useSendEmail } from '../../../hooks/emails/useSendEmail'
import { toast } from 'react-toastify'
import {
    BROADCAST_SENT_SUCCCESS,
    EMAIL_SENT_SUCCCESS
} from '../../../i18n/emails'

const BroadCastFormStyled = styled.div`
    display: flex;
    .header {
        background-color: #fff;
        display: flex;
        align-items: center;
        margin-bottom: 1rem;

        > :nth-child(2) {
            width: 450px;
            margin-left: 1rem;
        }

        input:disabled {
            border: 1px solid #ccc;
            cursor: not-allowed;

            ~ label {
                color: #ccc;
                cursor: not-allowed;
            }
        }

        @media (max-width: 1200px) {
            flex-direction: column;
            align-items: stretch;

            > :nth-child(1) {
                margin-bottom: 1rem;
            }

            > :nth-child(2) {
                width: auto;
                margin-left: 0;
            }
        }
    }

    .send-button {
        margin-top: 1rem;
        min-width: 200px;
    }
`
export const Broadcast = () => {
    const [email, setEmail] = useState({})
    const [isBroadcast, setIsBroadcast] = useState(false)
    const sendEmail = useSendEmail()

    const handleChange = e => {
        const { name, value } = e.target

        setEmail(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSend = () => {
        sendEmail().then(() => {
            const message = isBroadcast
                ? BROADCAST_SENT_SUCCCESS
                : EMAIL_SENT_SUCCCESS
            toast.success(message)
        })
    }

    return (
        <Section>
            <H2>Nueva difusión</H2>
            <BroadCastFormStyled>
                <Box>
                    <div className="header">
                        <Switch
                            labelText="Difusión (Enviar a todos los miembros)"
                            onChange={() => setIsBroadcast(prev => !prev)}
                            value={isBroadcast}
                        />
                        <TextField
                            value={email.to}
                            labelText="Destinatario"
                            disabled={isBroadcast}
                            name="to"
                            onChange={handleChange}
                        />
                    </div>
                    <TextField
                        value={email.to}
                        labelText="Asunto"
                        name="subject"
                        onChange={handleChange}
                    />
                    <TextEditor name="body" onChange={handleChange} />
                    <Button className="send-button" onClick={handleSend}>
                        Enviar
                    </Button>
                </Box>
            </BroadCastFormStyled>
        </Section>
    )
}
