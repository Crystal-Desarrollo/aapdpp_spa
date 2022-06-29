import { LoginFormStyled, LoginCardStyled } from './styles'
import { TextField } from '../../Common/Inputs/TextField'
import { Button } from '../../Common/Inputs/Button'
import { MessageLabel } from '../../Common/MessageLabel'

import Logo from '../../../asssets/img/logo_apdp.jpg'

export const LoginForm = ({ onChange, onSubmit, error }) => {
    return (
        <LoginFormStyled>
            <img
                src={Logo}
                alt="Logo Asociación Argentina de Profesores de Derecho Procesal Penal"
            />

            <LoginCardStyled>
                <TextField
                    type="email"
                    onChange={onChange}
                    name="email"
                    labelText="Correo electrónico"
                />
                <TextField
                    name="password"
                    type="password"
                    onChange={onChange}
                    labelText="Contraseña"
                />

                <div className="form-footer">
                    <Button onClick={onSubmit}>Ingresar</Button>

                    {error && <MessageLabel text={error} status="error" />}
                </div>
            </LoginCardStyled>
        </LoginFormStyled>
    )
}
