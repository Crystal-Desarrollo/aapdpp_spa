import { RegisterCardStyled, RegisterFormStyled } from './styles'
import { TextField } from '../../Common/Inputs/TextField'
import { Button } from '../../Common/Inputs/Button'
import { H2 } from '../../Common/Texts'
import { Switch } from '../../Common/Inputs/Switch'
import { FaUpload } from 'react-icons/fa'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register, update } from '../../../store/slices/usersSlice'
import { toast } from 'react-toastify'
import { USER_CREATED, USER_UPDATED } from '../../../i18n/users'
import { useEffect } from 'react'
import { useAuth } from '../../../hooks/auth/useAuth'
import { SOMETHING_WENT_WRONG } from '../../../i18n/common'

export const RegisterForm = ({ user }) => {
    const loggedUser = useAuth()
    const dispatch = useDispatch()
    const [data, setData] = useState(user)
    const [picturePreview, setPicturePreview] = useState(null)
    const isMyself = user?.id === loggedUser.id

    useEffect(() => {
        setData({
            ...user,
            is_admin: user?.role?.name === 'admin' ? 1 : 0
        })
    }, [user])

    const handleUploadPicture = e => {
        const file = e.target.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(file)

        reader.onload = () => {
            setData(prev => ({ ...prev, picture: file }))
            setPicturePreview(reader.result)
        }
    }

    const onChange = e => {
        setData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = e => {
        e.preventDefault()

        let formData = new FormData()
        Object.entries(data).forEach(x => {
            formData.append(x[0], x[1])
        })

        if (data?.id) {
            dispatch(update(user.id, formData))
                .then(() => toast.success(USER_UPDATED))
                .catch(() => toast.error(SOMETHING_WENT_WRONG))
        } else {
            dispatch(register(formData))
                .then(() => {
                    clearData()
                    toast.success(USER_CREATED)
                })
                .catch(() => toast.error(SOMETHING_WENT_WRONG))
        }
    }

    const clearData = () => {
        setData({})
        setPicturePreview('')
    }

    const handleSetIsAdmin = e => {
        setData(prev => ({
            ...prev,
            [e.target.name]: e.target.checked ? 1 : 0
        }))
    }

    return (
        <RegisterFormStyled>
            {data?.id ? (
                <H2>{isMyself ? 'Mi perfil' : `Perfil de: ${user?.name}`}</H2>
            ) : (
                <H2>Agregar usuario</H2>
            )}

            <RegisterCardStyled>
                <div className="first-section">
                    <div className="picture">
                        {picturePreview ? (
                            <img src={picturePreview} alt="" />
                        ) : (
                            <label
                                className="file-uploader"
                                htmlFor="file-uploader"
                            >
                                <i>
                                    <FaUpload />
                                </i>
                                <p>Agregar foto</p>
                                <input
                                    type="file"
                                    hidden
                                    id="file-uploader"
                                    name="picture"
                                    onChange={handleUploadPicture}
                                    value={data?.picture || ''}
                                />
                            </label>
                        )}
                    </div>

                    <div className="fields">
                        <TextField
                            onChange={onChange}
                            name="name"
                            labelText="Nombre Completo"
                            value={data?.name || ''}
                        />
                        <TextField
                            type="email"
                            onChange={onChange}
                            name="email"
                            labelText="Correo electrónico"
                            value={data?.email || ''}
                        />
                        <TextField
                            onChange={onChange}
                            name="phone"
                            labelText="Teléfono"
                            value={data?.phone || ''}
                        />

                        <TextField
                            onChange={onChange}
                            name="address"
                            labelText="Dirección"
                            value={data?.address || ''}
                        />
                        <TextField
                            onChange={onChange}
                            name="additional_info"
                            labelText="Información adicional"
                            value={data?.additional_info || ''}
                            maxlenght="1"
                        />

                        <Switch
                            name="is_admin"
                            onChange={handleSetIsAdmin}
                            labelText="Administrador"
                            disabled={loggedUser.role?.name !== 'admin'}
                            checked={data?.is_admin || 0}
                        />
                    </div>
                </div>

                <Button onClick={onSubmit}>
                    {data?.id ? 'Guardar cambios' : 'Crear usuario'}
                </Button>
            </RegisterCardStyled>
        </RegisterFormStyled>
    )
}
