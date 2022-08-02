import { EventCardStyled, EventFormStyled } from './styles'
import { H2 } from '../../Common/Texts'
import { TextField } from '../../Common/Inputs/TextField'
import { useState } from 'react'
import { Button } from '../../Common/Inputs/Button'
import { useSelector, useDispatch } from 'react-redux'
import { create } from '../../../store/slices/eventsSlice'
import { Loader } from '../../Loader'

export const EventForm = () => {
    const [data, setData] = useState({})
    const { loading } = useSelector(store => store.events)
    const dispatch = useDispatch()

    const onChange = e => {
        setData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = e => {
        e.preventDefault()
        dispatch(create(data)).then(() => setData({}))
    }

    return (
        <>
            {loading && <Loader />}

            <EventFormStyled>
                <H2>Agregar evento</H2>
                <EventCardStyled>
                    <TextField
                        name="location"
                        labelText="Lugar"
                        onChange={onChange}
                        value={data?.location}
                    />
                    <TextField
                        type="date"
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
