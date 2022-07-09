import { useDispatch, useSelector } from 'react-redux'
import { update } from '../../../store/slices/usersSlice'
import { H2, H3 } from '../../Common/Texts'
import { TextField } from '../../Common/Inputs/TextField'
import { Button } from '../../Common/Inputs/Button'
import { Box } from '../../Common/Box'
import { useEffect, useState } from 'react'
import { Loader } from '../../Loader'
import { useGetOne } from '../../../hooks/users/useGetOne'

import { ProfileFormStyled } from './styles'

import AVATAR from '../../../asssets/img/default_avatar.png'
export const ProfileForm = ({ userId }) => {
    const { loading } = useSelector(store => store.users)
    const dispatch = useDispatch()
    const user = useGetOne(userId)
    const [data, setData] = useState(user)

    useEffect(() => setData(user), [user])

    const handleChange = e => {
        const { name, value } = e.target

        setData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(update(user.id, data))
    }

    return (
        <ProfileFormStyled>
            <H2>Mi perfil</H2>

            <form onSubmit={handleSubmit}>
                <Box>
                    <div className="change-picture">
                        <div className="picture">
                            <img
                                src={data?.avatar?.path || AVATAR}
                                alt="Imagen de perfil del usuario"
                            />
                        </div>
                        <Button>Cambiar foto</Button>
                    </div>
                </Box>

                <Box>
                    {loading && <Loader />}

                    <div className="grid">
                        <H3>Mis datos</H3>
                        <TextField
                            name="name"
                            onChange={handleChange}
                            labelText="Nombre"
                            value={data?.name || ''}
                        />
                        <TextField
                            name="address"
                            onChange={handleChange}
                            labelText="Dirección"
                            value={data?.address || ''}
                        />
                        <TextField
                            name="email"
                            type="email"
                            onChange={handleChange}
                            labelText="Correo eletrónico"
                            value={data?.email || ''}
                        />
                        <TextField
                            tag="textarea"
                            name="additional_info"
                            onChange={handleChange}
                            labelText="Información Adicional"
                            value={data?.additional_info || ''}
                        />
                        <TextField
                            name="phone"
                            onChange={handleChange}
                            labelText="Teléfono"
                            value={data?.phone || ''}
                        />
                        {/* <TextField
                            name="password"
                            type="password"
                            onChange={handleChange}
                            labelText="Contraseña"
                            value={data?.password}
                        />
                        <TextField
                            name="password_confirmation"
                            type="password"
                            onChange={handleChange}
                            labelText="Confirme la contraseña"
                            value={data?.password_confirmation}
                        /> */}

                        <div>
                            <Button type="submit">Guardar cambios</Button>
                        </div>
                    </div>
                </Box>
            </form>
        </ProfileFormStyled>
    )
}
