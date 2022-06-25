import { Section } from '../Common/Section.jsx'
import { H2, H3 } from '../Common/Texts.jsx'
import { TextField } from '../Common/Inputs/TextField.jsx'
import { Button } from '../Common/Inputs/Button.jsx'
import { FormStyled } from './styles.js'
export const Contact = () => {
    return (
        <Section>
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
                <div className="msg-box success">
                    Lo sentimos, algo salió mal
                </div>
            </FormStyled>
        </Section>
    )
}
