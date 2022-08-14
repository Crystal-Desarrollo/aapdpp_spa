import { HashLink } from 'react-router-hash-link'
import { useDispatch } from 'react-redux'
import { SideMenuStyled } from './styles'
import { useState } from 'react'
import { logout } from '../../../store/slices/authSlice'
import { Confirm } from '../../Common/modals/Confirm'
import { Link } from 'react-router-dom'
import {
    FaBook,
    FaCalendar,
    FaLink,
    FaNewspaper,
    FaSignOutAlt,
    FaUsers
} from 'react-icons/fa'

export const SideMenu = ({ user, isOpenSideMenu }) => {
    const [confirmShown, setConfirmShown] = useState(false)
    const dispatch = useDispatch()
    const isMember = user?.role?.name === 'member'
    const isAdmin = user?.role?.name === 'admin'
    const signOff = () => {
        dispatch(logout())
        setConfirmShown(false)
    }

    const renderUserBasedLinks = () => {
        if (!user) {
            return (
                <li>
                    <HashLink to="/ingresar">Ingresar</HashLink>
                </li>
            )
        }

        return (
            <>
                {isMember && (
                    <li>
                        <HashLink to={`/miembros/${user.id}`}>
                            Mi perfil
                        </HashLink>
                    </li>
                )}
                <li>
                    <button as="button" onClick={() => setConfirmShown(true)}>
                        <i>
                            <FaSignOutAlt />
                        </i>
                        Salir
                    </button>
                </li>
            </>
        )
    }

    return (
        <>
            <Confirm
                shown={confirmShown}
                title="Cerrar sesión"
                description="Estas por cerrar tu sesión ¿Deseas continuar?"
                acceptText="Cerrar sesión"
                cancelText="Cancelar"
                onCancel={() => setConfirmShown(false)}
                onAccept={signOff}
            />
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

                    <li>
                        <HashLink to="/biblioteca">Biblioteca</HashLink>
                    </li>

                    {renderUserBasedLinks()}
                </ul>

                {isAdmin && (
                    <>
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
                    </>
                )}
            </SideMenuStyled>
        </>
    )
}
