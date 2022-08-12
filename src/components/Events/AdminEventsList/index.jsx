import moment from 'moment'
import { Link } from 'react-router-dom'
import { MembersListStyled, MainActionsStyled } from './styles'
import { Section } from '../../Common/Section'
import { Button } from '../../Common/Inputs/Button'
import { FaTrash, FaPen } from 'react-icons/fa'
import { Loader } from '../../Loader'
import { useGetEvents } from '../../../hooks/events/useGetEvents'
import { useDispatch } from 'react-redux'
import { remove } from '../../../store/slices/eventsSlice'
import { useIsLoading } from '../../../hooks/app/useIsLoading'
import { toast } from 'react-toastify'
import { EVENT_DELETED } from '../../../i18n/events'

export const EventsList = () => {
    const dispatch = useDispatch()
    const events = useGetEvents()
    const isLoading = useIsLoading()

    const handleDelete = id => {
        dispatch(remove(id)).then(() => toast.success(EVENT_DELETED))
    }

    return (
        <Section>
            <MainActionsStyled>
                <Button as={Link} to="/admin/eventos/agregar">
                    Agregar evento
                </Button>
            </MainActionsStyled>

            <MembersListStyled>
                {isLoading && <Loader />}

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
                        {events?.map(event => (
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
