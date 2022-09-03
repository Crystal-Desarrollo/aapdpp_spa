import { Link } from 'react-router-dom'
import { MembersListStyled, MainActionsStyled } from './styles'
import { Section } from '../../Common/Section'
import { Button } from '../../Common/Inputs/Button'
import { FaTrash, FaPen } from 'react-icons/fa'
import { useGetUsers } from '../../../hooks/users/useGetUsers'
import { useAuth } from '../../../hooks/auth/useAuth'
import { useDispatch } from 'react-redux'
import { remove } from '../../../store/slices/usersSlice'
import { toast } from 'react-toastify'
import { USER_DELETD } from '../../../i18n/users'
import { TextField } from '../../Common/Inputs/TextField'
import { useState } from 'react'
import { useEffect } from 'react'

const mapUserRole = role => {
    if (role === 'admin') return 'Administrador'
    if (role === 'member') return 'Miembro'
}

export const MembersList = () => {
    const dispatch = useDispatch()
    const users = useGetUsers()
    const loggedUser = useAuth()
    const [query, setQuery] = useState('')
    const [filteredUsers, setFilteredUsers] = useState(() => users, [users])

    const handleDelete = id => {
        dispatch(remove(id)).then(() => toast.success(USER_DELETD))
    }

    const handleSearch = e => {
        setQuery(e.target.value)
    }

    useEffect(() => {
        setFilteredUsers(
            users.filter(x =>
                x.name.toLowerCase().includes(query.toLowerCase())
            )
        )
    }, [query, users])

    return (
        <Section>
            <MainActionsStyled>
                <TextField
                    labelText="Buscar"
                    name="search"
                    autoComplete="off"
                    value={query}
                    onChange={handleSearch}
                />
                <Button as={Link} to="/admin/miembros/agregar">
                    Agregar miembro
                </Button>
            </MainActionsStyled>

            <MembersListStyled>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Teléfono</th>
                            <th>Correo electrónico</th>
                            <th>Tipo</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers?.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.phone}</td>
                                <td>{user.email}</td>
                                <td>{mapUserRole(user.role?.name)}</td>
                                <td>
                                    <Link to={`/admin/miembros/${user.id}`}>
                                        <FaPen />
                                    </Link>
                                    <button
                                        disabled={user.id === loggedUser.id}
                                        onClick={() => handleDelete(user.id)}
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
