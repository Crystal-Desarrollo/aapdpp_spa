import { EventCardStyled, EventFormStyled } from './styles'
import { H2 } from '../../Common/Texts'
import { TextField } from '../../Common/Inputs/TextField'
import { useEffect, useState } from 'react'
import { Button } from '../../Common/Inputs/Button'
import { useSelector, useDispatch } from 'react-redux'
import { create, edit } from '../../../store/slices/eventsSlice'
import { Loader } from '../../Loader'
import { useParams } from 'react-router-dom'

export const EventForm = () => {
    const { id } = useParams()
    const [data, setData] = useState({})
    const { loading, data: events } = useSelector(store => store.events)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!id) return
        const event = events.find(x => x.id === Number(id))
        if (!event) return
        setData(event)
    }, [id, events])

    const onChange = e => {
        setData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = e => {
        e.preventDefault()

        if (!id) {
            dispatch(create(data)).then(() => setData({}))
        } else {
            dispatch(edit(data))
        }
    }

    return (
        <>
            {loading && <Loader />}

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
        </>
    )
}
