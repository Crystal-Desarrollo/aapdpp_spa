import { LinkFormStyled, LinkCardStyled } from './styles'
import { TextField } from '../../Common/Inputs/TextField'
import { H2 } from '../../Common/Texts'
import { Button } from '../../Common/Inputs/Button'
import { useDispatch, useSelector } from 'react-redux'
import { create } from '../../../store/slices/linksSlice'
import { useState } from 'react'
import { Loader } from '../../Loader'
import { toast } from 'react-toastify'
import { LINK_ADDED } from '../../../i18n/links'

export const LinkForm = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState()
    const { loading } = useSelector(store => store.links)

    const handleSubmit = () => {
        dispatch(create(data)).then(() => {
            clearForm()
            toast.success(LINK_ADDED)
        })
    }

    const handleChange = e => {
        const { name, value } = e.target

        setData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const clearForm = () => {
        setData({})
    }

    return (
        <LinkFormStyled>
            <H2>Agregar enlace de interés</H2>
            <LinkCardStyled>
                {loading && <Loader />}
                <TextField
                    name="visible_text"
                    id="visible_text"
                    labelText="Texto visible"
                    onChange={handleChange}
                    value={data?.visible_text || ''}
                />
                <TextField
                    name="url"
                    id="url"
                    labelText="Enlace"
                    onChange={handleChange}
                    value={data?.url || ''}
                />
                <Button onClick={handleSubmit}>Agregar enlace</Button>
            </LinkCardStyled>
        </LinkFormStyled>
    )
}
