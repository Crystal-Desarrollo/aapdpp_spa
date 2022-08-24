import { RegisterCardStyled, RegisterFormStyled } from './styles'
import { TextField } from '../../Common/Inputs/TextField'
import { Button } from '../../Common/Inputs/Button'
import { H2 } from '../../Common/Texts'

import { FaUpload } from 'react-icons/fa'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../../../store/slices/usersSlice'
import { toast } from 'react-toastify'
import { USER_CREATED } from '../../../i18n/users'

export const RegisterForm = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState({})
    const [picturePreview, setPicturePreview] = useState(null)

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

        dispatch(register(formData))
            .then(() => {
                clearData()
                toast.success(USER_CREATED)
            })
            .catch(e => {
                toast.error(e)
            })
    }

    const clearData = () => {
        setData({})
        setPicturePreview('')
    }

    return (
        <RegisterFormStyled>
            <H2>Agregar usuario</H2>
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
                                    value={data.picture || ''}
                                />
                            </label>
                        )}
                    </div>

                    <div className="fields">
                        <TextField
                            onChange={onChange}
                            name="name"
                            labelText="Nombre Completo"
                            value={data.name || ''}
                        />
                        <TextField
                            type="email"
                            onChange={onChange}
                            name="email"
                            labelText="Correo electrónico"
                            value={data.email || ''}
                        />
                        <TextField
                            onChange={onChange}
                            name="phone"
                            labelText="Teléfono"
                            value={data.phone || ''}
                        />

                        <TextField
                            onChange={onChange}
                            name="address"
                            labelText="Dirección"
                            value={data.address || ''}
                        />
                    </div>
                </div>

                <TextField
                    onChange={onChange}
                    name="additional_info"
                    labelText="Información adicional"
                    tag="textarea"
                    value={data.additional_info || ''}
                />

                <Button onClick={onSubmit}>Crear usuario</Button>
            </RegisterCardStyled>
        </RegisterFormStyled>
    )
}
