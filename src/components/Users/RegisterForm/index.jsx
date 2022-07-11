import { RegisterCardStyled, RegisterFormStyled } from './styles'
import { TextField } from '../../Common/Inputs/TextField'
import { Button } from '../../Common/Inputs/Button'
import { MessageLabel } from '../../Common/MessageLabel'
import { Loader } from '../../Loader'
import { H2 } from '../../Common/Texts'

import { FaUpload } from 'react-icons/fa'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../../../store/slices/usersSlice'

export const RegisterForm = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState({})
    const [picturePreview, setPicturePreview] = useState(null)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

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
        setLoading(true)
        e.preventDefault()
        setError('')

        let formData = new FormData()
        Object.entries(data).forEach(x => {
            formData.append(x[0], x[1])
        })

        dispatch(register(formData))
            .then(clearData)
            .catch(e => setError(e))
            .finally(() => setLoading(false))
    }

    const clearData = () => {
        setData({})
        setPicturePreview('')
    }

    return (
        <RegisterFormStyled>
            <H2>Agregar usuario</H2>
            <RegisterCardStyled>
                {loading && <Loader />}

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

                <div className="form-footer">
                    <Button onClick={onSubmit}>Crear usuario</Button>

                    {error && <MessageLabel text={error} status="error" />}
                </div>
            </RegisterCardStyled>
        </RegisterFormStyled>
    )
}
