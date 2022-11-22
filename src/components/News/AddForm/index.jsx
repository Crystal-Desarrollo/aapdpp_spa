import { NewsCardStyled, NewsFormStyled } from './styles'
import { H2 } from '../../Common/Texts'
import { TextField } from '../../Common/Inputs/TextField'
import { FaUpload } from 'react-icons/fa'
import { useState } from 'react'
import { Button } from '../../Common/Inputs/Button'
import { useDispatch } from 'react-redux'
import { create, edit } from '../../../store/slices/articlesSlice'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ARTICLE_ADDED, ARTICLE_UPDATED } from '../../../i18n/articles'
import { useGetArticle } from '../../../hooks/articles/useGetArticle'
import { TextEditor } from '../../Common/Inputs/TextEditor'

export const AddNewForm = () => {
    const { id } = useParams()
    const [data, setData] = useGetArticle(id)
    const [picturePreview, setPicturePreview] = useState('')
    const dispatch = useDispatch()

    const handleUploadPicture = e => {
        const file = e.target.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(file)

        reader.onload = () => {
            setData(prev => ({ ...prev, cover: file }))
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
        const formData = makeFormData()
        if (!id) {
            dispatch(create(formData)).then(() => {
                clearForm()
                toast.success(ARTICLE_ADDED)
            }).catch(err => toast.error(err))
        } else {
            dispatch(edit(formData, data.id)).then(() =>
                toast.success(ARTICLE_UPDATED)
            ).catch(err => toast.error(err))
        }
    }

    const makeFormData = () => {
        const formData = new FormData()

        Object.entries(data).forEach(([name, value]) => {
            if (name !== 'cover' || value !== null) {
                formData.append(name, value)
            }
        })

        if (data?.cover?.id) {
            formData.delete('cover')
        }

        return formData
    }

    const clearForm = () => {
        setData({})
        setPicturePreview('')
    }

    return (
        <NewsFormStyled>
            <H2>{id ? 'Editar noticia' : 'Agregar noticia'}</H2>
            <NewsCardStyled>
                <div className="picture">
                    {data.cover?.path || picturePreview ? (
                        <img src={data.cover?.path || picturePreview} alt="" />
                    ) : (
                        <label
                            className="file-uploader"
                            htmlFor="file-uploader"
                        >
                            <i>
                                <FaUpload />
                            </i>
                            <p>Agregar portada (jpg, jpeg, png, bmp, gif, svg o webp)</p>
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
                <TextEditor
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
