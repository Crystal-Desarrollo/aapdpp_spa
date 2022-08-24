import { H2 } from '../../../components/Common/Texts'
import { Section } from '../../../components/Common/Section'
import { Box } from '../../../components/Common/Box'
import { TextField } from '../../../components/Common/Inputs/TextField'
import { Switch } from '../../../components/Common/Inputs/Switch'
import { TextEditor } from '../../../components/Common/Inputs/TextEditor'
import { useState } from 'react'
import styled from 'styled-components'

const BroadCastFormStyled = styled.div`
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
`
export const Broadcast = () => {
    const [email, setEmail] = useState({})
    const [isBroadcast, setIsBroadcast] = useState(false)

    return (
        <Section>
            <H2>Nueva difusión</H2>
            <Box>
                <BroadCastFormStyled className="flex">
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
                    />
                </BroadCastFormStyled>
                <TextField value={email.to} labelText="Asunto" name="subject" />
                <TextEditor onChange={setEmail} name="body" />
            </Box>
        </Section>
    )
}
