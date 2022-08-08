import { Link } from 'react-router-dom'
import {
    FaBook,
    FaCalendar,
    FaLink,
    FaNewspaper,
    FaUsers
} from 'react-icons/fa'
import { HashLink } from 'react-router-hash-link'
import { SideMenuStyled } from './styles'

export const SideMenu = ({ isOpenSideMenu }) => {
    return (
        <SideMenuStyled isOpenSideMenu={isOpenSideMenu}>
            <ul>
                <li>
                    <HashLink to="/">Inicio</HashLink>
                </li>
                <li>
                    <HashLink to="/#nosotros">Nosotros</HashLink>
                </li>
                <li>
                    <HashLink to="/#noticias">Noticias</HashLink>
                </li>
                <li>
                    <HashLink to="/#enlaces-de-interes">
                        Enlaces de interés
                    </HashLink>
                </li>
                <li>
                    <HashLink to="/#estatuto">Estatuto</HashLink>
                </li>
                <li>
                    <HashLink to="/#contacto">Contacto</HashLink>
                </li>

                <li>
                    <HashLink to="/eventos">Eventos</HashLink>
                </li>
            </ul>
            {/* hacer que el HR no aparezca cuando no es un admin */}
            <hr />
            <ul>
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
        </SideMenuStyled>
    )
}
