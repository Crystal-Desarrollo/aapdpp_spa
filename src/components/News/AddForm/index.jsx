import { NewsCardStyled, NewsFormStyled } from './styles'
import { H2 } from '../../Common/Texts'
import { TextField } from '../../Common/Inputs/TextField'
import { FaUpload } from 'react-icons/fa'
import { useState } from 'react'
import { Button } from '../../Common/Inputs/Button'
import { useSelector, useDispatch } from 'react-redux'
import { create } from '../../../store/slices/articlesSlice'
import { Loader } from '../../Loader'

export const AddNewForm = () => {
    const [data, setData] = useState({})
    const [picturePreview, setPicturePreview] = useState('')
    const { loading } = useSelector(store => store.news)
    const dispatch = useDispatch()

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
        dispatch(create(data)).then(() => {
            setData({})
            setPicturePreview('')
        })
    }

    return (
        <NewsFormStyled>
            <H2>Agregar noticia</H2>
            <NewsCardStyled>
                {loading && <Loader />}
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
                            <p>Agregar portada</p>
                            <input
                                type="file"
                                hidden
                                id="file-uploader"
                                name="cover"
                                onChange={handleUploadPicture}
                                value={data.cover || ''}
                            />
                        </label>
                    )}
                </div>
                <TextField
                    name="title"
                    labelText="Título"
                    onChange={onChange}
                    value={data?.title}
                />
                <TextField
                    name="description"
                    labelText="Descripción"
                    onChange={onChange}
                    value={data?.description}
                />
                <TextField
                    name="body"
                    tag="textarea"
                    labelText="Noticia"
                    onChange={onChange}
                    value={data?.body}
                />
                <Button onClick={onSubmit}>Guardar</Button>
            </NewsCardStyled>
        </NewsFormStyled>
    )
}
