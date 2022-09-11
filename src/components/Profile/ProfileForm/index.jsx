import { RegisterForm } from '../../Users/RegisterForm'
import { TextField } from '../../Common/Inputs/TextField'
import { Button } from '../../Common/Inputs/Button'
import { Box } from '../../Common/Box'
import { Layout, PasswordForm } from './styles'
import { H3 } from '../../Common/Texts'
import { useState } from 'react'
import { changePassword } from '../../../store/slices/usersSlice'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { PASSWORD_UPDATED } from '../../../i18n/users'
export const ProfileForm = ({ user }) => {
    const [data, setData] = useState({})
    const dispatch = useDispatch()

    const handleChange = e => {
        setData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(changePassword(user.id, data))
            .then(() => {
                toast.success(PASSWORD_UPDATED)
                setData({})
            })
            .catch(e => toast.error(e))
    }

    return (
        <Layout>
            <RegisterForm user={user} />

            <div>
                <H3>Cambio de contraseña</H3>
                <Box>
                    <PasswordForm onSubmit={handleSubmit}>
                        <TextField
                            type="password"
                            name="password"
                            labelText="Nueva contraseña"
                            onChange={handleChange}
                            value={data.password || ''}
                        />
                        <TextField
                            type="password"
                            name="password_confirmation"
                            labelText="Repita la nueva contraseña"
                            onChange={handleChange}
                            value={data.password_confirmation || ''}
                        />
                        <TextField
                            type="password"
                            name="current_password"
                            labelText="Contraseña actual"
                            onChange={handleChange}
                            value={data.current_password || ''}
                        />
                        <Button type="submit"> Cambiar contraseña</Button>
                    </PasswordForm>
                </Box>
            </div>
        </Layout>
    )
}
