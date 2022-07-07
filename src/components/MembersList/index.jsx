import { Link } from 'react-router-dom'
import { MembersListStyled, MainActionsStyled } from './styles'
import { Section } from '../Common/Section'
import { Button } from '../Common/Inputs/Button'
import { FaTrash, FaPen } from 'react-icons/fa'
import { Loader } from '../Loader'

import { useGetAll } from '../../hooks/users/useGetAll'
import { useAuth } from '../../hooks/auth/useAuth'

const mapUserRole = role => {
    if (role === 'admin') return 'Administrador'
    if (role === 'member') return 'Miembro'
}

export const MembersList = () => {
    const { data, loading } = useGetAll()
    const {
        data: { user: loggedUser }
    } = useAuth()

    return (
        <Section>
            <MainActionsStyled>
                <Button dense as={Link} to="/admin/miembros/agregar">
                    Agregar miembro
                </Button>
            </MainActionsStyled>

            <MembersListStyled>
                {loading && <Loader />}

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
                        {data.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.phone}</td>
                                <td>{user.email}</td>
                                <td>{mapUserRole(user.role?.name)}</td>
                                <td>
                                    <Link to="">
                                        <FaPen />
                                    </Link>
                                    <button
                                        disabled={user.id === loggedUser.id}
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
