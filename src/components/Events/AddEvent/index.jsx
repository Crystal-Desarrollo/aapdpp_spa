import { EventCardStyled, EventFormStyled } from './styles'
import { H2 } from '../../Common/Texts'
import { TextField } from '../../Common/Inputs/TextField'
import { Button } from '../../Common/Inputs/Button'
import { useDispatch } from 'react-redux'
import { create, edit } from '../../../store/slices/eventsSlice'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { EVENT_ADDED, EVENT_MODIFIED } from '../../../i18n/events'
import { useGetEvent } from '../../../hooks/events/useGetEvent'

export const EventForm = () => {
    const { id } = useParams()
    const [data, setData] = useGetEvent(id)
    const dispatch = useDispatch()

    const onChange = e => {
        setData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = e => {
        e.preventDefault()

        if (!id) {
            dispatch(create(data))
                .then(() => setData({}))
                .then(() => {
                    clearForm()
                    toast.success(EVENT_ADDED)
                })
        } else {
            dispatch(edit(data)).then(() => toast.success(EVENT_MODIFIED))
        }
    }

    const clearForm = () => {
        setData({})
    }

    return (
        <EventFormStyled>
            <H2> {id ? 'Editar Evento' : 'Agregar evento'}</H2>
            <EventCardStyled>
                <TextField
                    name="location"
                    labelText="Lugar"
                    onChange={onChange}
                    value={data?.location}
                />
                <TextField
                    type="datetime-local"
                    name="date"
                    labelText="Fecha y hora"
                    onChange={onChange}
                    value={data?.date}
                />
                <TextField
                    name="description"
                    tag="textarea"
                    labelText="Descripción"
                    onChange={onChange}
                    value={data?.description}
                />
                <Button onClick={onSubmit}>Guardar</Button>
            </EventCardStyled>
        </EventFormStyled>
    )
}
