import { Link } from 'react-router-dom'

import { AdminHeaderStyled } from './styles'

import {
    FaUsers,
    FaNewspaper,
    FaLink,
    FaCalendar,
    FaBook,
    FaTable
} from 'react-icons/fa'

export const AdminHeader = () => {
    return (
        <AdminHeaderStyled>
            <ul>
                <li>
                    <Link to="/admin/panel-general">
                        <i>
                            <FaTable />
                        </i>
                        Panel general
                    </Link>
                </li>
                <li>
                    <Link to="/admin/miembros">
                        <i>
                            <FaUsers />
                        </i>
                        Miembros
                    </Link>
                </li>
                <li>
                    <Link to="/admin/noticias">
                        <i>
                            <FaNewspaper />
                        </i>
                        Noticias
                    </Link>
                </li>
                <li>
                    <Link to="/admin/enlaces">
                        <i>
                            <FaLink />
                        </i>
                        Enlaces
                    </Link>
                </li>
                <li>
                    <Link to="/admin/eventos">
                        <i>
                            <FaCalendar />
                        </i>
                        Eventos
                    </Link>
                </li>
                <li>
                    <Link to="/admin/biblioteca">
                        <i>
                            <FaBook />
                        </i>
                        Biblioteca
                    </Link>
                </li>
            </ul>
        </AdminHeaderStyled>
    )
}
