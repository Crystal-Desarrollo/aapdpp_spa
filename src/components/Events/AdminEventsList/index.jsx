import moment from 'moment'
import { Link } from 'react-router-dom'
import { MembersListStyled, MainActionsStyled } from './styles'
import { Section } from '../../Common/Section'
import { Button } from '../../Common/Inputs/Button'
import { FaTrash, FaPen } from 'react-icons/fa'
import { useGetEvents } from '../../../hooks/events/useGetEvents'
import { useDispatch } from 'react-redux'
import { remove } from '../../../store/slices/eventsSlice'
import { toast } from 'react-toastify'
import { EVENT_DELETED } from '../../../i18n/events'

export const EventsList = () => {
    const dispatch = useDispatch()
    const events = useGetEvents()

    const handleDelete = id => {
        dispatch(remove(id)).then(() => toast.success(EVENT_DELETED))
    }

    // const trucateDescription = description => {
    //     if (description.length > 128) {
    //         return `${description.slice(0, 125)}...`
    //     }

    //     return description
    // }

    return (
        <Section>
            <MainActionsStyled>
                <Button as={Link} to="/admin/eventos/agregar">
                    Agregar evento
                </Button>
            </MainActionsStyled>

            <MembersListStyled>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Lugar</th>
                            {/* <th>Descripción</th> */}
                            <th>Fecha</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {events?.map(event => (
                            <tr key={event.id}>
                                <td>{event.id}</td>
                                <td>{event.location}</td>
                                {/* <td>
                                    {event?.description && (
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: trucateDescription(
                                                    event.description
                                                )
                                            }}
                                        ></p>
                                    )}
                                </td> */}
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
