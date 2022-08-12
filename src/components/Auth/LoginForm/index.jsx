import { Button } from '../../Common/Inputs/Button'
import { Loader } from '../../Loader'
import { login } from '../../../store/slices/authSlice'
import { LoginFormStyled, LoginCardStyled } from './styles'
import { MessageLabel } from '../../Common/MessageLabel'
import { TextField } from '../../Common/Inputs/TextField'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import Logo from '../../../asssets/img/logo_apdp.jpg'
import { useIsLoading } from '../../../hooks/app/useIsLoading'
export const LoginForm = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState({})
    const [error, setError] = useState('')
    const loading = useIsLoading()

    const handleChange = e => {
        setData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = () => {
        dispatch(login(data)).catch(e => {
            setError(e)
        })
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
