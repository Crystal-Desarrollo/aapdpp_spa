import { LoginFormStyled, LoginCardStyled } from './styles'
import { TextField } from '../../Common/Inputs/TextField'
import { Button } from '../../Common/Inputs/Button'
import { MessageLabel } from '../../Common/MessageLabel'
import { Loader } from '../../Loader'
import { login } from '../../../store/slices/authSlice'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import Logo from '../../../asssets/img/logo_apdp.jpg'

export const LoginForm = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState({})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleChange = e => {
        setData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = e => {
        setLoading(true)
        e.preventDefault()
        setError('')

        dispatch(login(data))
            .catch(() => setError('Credenciales Inválidas'))
            .finally(() => setLoading(false))
    }

    return (
        <LoginFormStyled>
            <img
                src={Logo}
                alt="Logo Asociación Argentina de Profesores de Derecho Procesal Penal"
            />

            <LoginCardStyled>
                {loading && <Loader />}

                <TextField
                    type="email"
                    onChange={handleChange}
                    name="email"
                    labelText="Correo electrónico"
                    value={data.email}
                />
                <TextField
                    name="password"
                    type="password"
                    onChange={handleChange}
                    labelText="Contraseña"
                    value={data.password}
                />

                <div className="form-footer">
                    <Button onClick={handleSubmit}>Ingresar</Button>

                    {error && <MessageLabel text={error} status="error" />}
                </div>
            </LoginCardStyled>
        </LoginFormStyled>
    )
}
