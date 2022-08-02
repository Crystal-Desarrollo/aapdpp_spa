import moment from 'moment'
import { Link } from 'react-router-dom'
import { MembersListStyled, MainActionsStyled } from './styles'
import { Section } from '../../Common/Section'
import { Button } from '../../Common/Inputs/Button'
import { FaTrash, FaPen } from 'react-icons/fa'
import { Loader } from '../../Loader'

import { useGetAll } from '../../../hooks/events/useGetAll'
import { useDispatch } from 'react-redux'
import { remove } from '../../../store/slices/eventsSlice'

export const EventsList = () => {
    const dispatch = useDispatch()
    const { data, loading } = useGetAll()

    const handleDelete = id => {
        dispatch(remove(id))
    }

    return (
        <Section>
            <MainActionsStyled>
                <Button as={Link} to="/admin/eventos/agregar">
                    Agregar evento
                </Button>
            </MainActionsStyled>

            <MembersListStyled>
                {loading && <Loader />}

                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Lugar</th>
                            <th>Descripción</th>
                            <th>Fecha</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(event => (
                            <tr key={event.id}>
                                <td>{event.id}</td>
                                <td>{event.location}</td>
                                <td>{event.description}</td>
                                <td>
                                    {moment(event.date).format(
                                        'DD/MM/YYYY h:mm a'
                                    )}
                                </td>
                                <td>
                                    <Link
                                        to={`/admin/eventos/agregar/${event.id}`}
                                    >
                                        <FaPen />
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(event.id)}
                                    >
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </MembersListStyled>
        </Section>
    )
}
