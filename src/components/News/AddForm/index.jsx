import { NewsCardStyled, NewsFormStyled } from './styles'
import { H2 } from '../../Common/Texts'
import { TextField } from '../../Common/Inputs/TextField'
import { FaUpload } from 'react-icons/fa'
import { useState } from 'react'
import { Button } from '../../Common/Inputs/Button'
import { useSelector, useDispatch } from 'react-redux'
import { create, edit } from '../../../store/slices/articlesSlice'
import { Loader } from '../../Loader'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useIsLoading } from '../../../hooks/app/useIsLoading'
import { toast } from 'react-toastify'
import { ARTICLE_ADDED, ARTICLE_UPDATED } from '../../../i18n/articles'

export const AddNewForm = () => {
    const { id } = useParams()
    const [data, setData] = useState({})
    const [picturePreview, setPicturePreview] = useState('')
    const news = useSelector(store => store.news)
    const isLoading = useIsLoading()
    const dispatch = useDispatch()

    useEffect(() => {
        if (!id) return
        const article = news.find(x => x.id === Number(id))
        if (!article) return
        setData(article)
        setPicturePreview(article.cover?.path)
    }, [id, news])

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

        const formData = new FormData()

        Object.entries(data).forEach(entry => {
            formData.append(entry[0], entry[1])
        })

        if (data?.cover?.id) {
            formData.delete('cover')
        }

        if (!id) {
            dispatch(create(formData)).then(() => {
                clearForm()
                toast.success(ARTICLE_ADDED)
            })
        } else {
            dispatch(edit(formData, data.id)).then(() =>
                toast.success(ARTICLE_UPDATED)
            )
        }
    }

    const clearForm = () => {
        setData({})
        setPicturePreview('')
    }

    return (
        <NewsFormStyled>
            <H2>{id ? 'Editar noticia' : 'Agregar noticia'}</H2>
            <NewsCardStyled>
                {isLoading && <Loader />}
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
