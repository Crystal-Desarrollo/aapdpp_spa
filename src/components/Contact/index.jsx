import { Section } from '../Common/Section.jsx'
import { H2, H3 } from '../Common/Texts.jsx'
import { TextField } from '../Common/Inputs/TextField.jsx'
import { Button } from '../Common/Inputs/Button.jsx'
import { FormStyled } from './styles.js'
import { MessageLabel } from '../Common/MessageLabel.jsx'
export const Contact = () => {
    return (
        <Section id="contacto">
            <H2>¿Querés formar parte?</H2>
            <H3>Dejanos tus datos y te responderemos lo antes posible</H3>
            <FormStyled>
                <TextField id="name" name="name" labelText="Nombre completo" />
                <TextField
                    id="email"
                    name="email"
                    type="email"
                    labelText="Correo electrónico"
                />
                <TextField
                    id="phone"
                    name="phone"
                    labelText="Teléfono de contacto"
                />
                <TextField
                    tag="textarea"
                    className="textarea"
                    labelText="Tu consulta"
                    name="body"
                    id="body"
                />
                <Button>Enviar</Button>
                <MessageLabel
                    className="msg-box"
                    text="Success message very long text"
                    status="error"
                />
            </FormStyled>
        </Section>
    )
}
