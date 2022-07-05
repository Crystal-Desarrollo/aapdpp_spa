import { HashLink } from 'react-router-hash-link'
import { useDispatch } from 'react-redux'
import { FaSignOutAlt } from 'react-icons/fa'

import { StyledMenu } from './styles'
import { useAuth } from '../../../hooks/auth/useAuth'
import { logout } from '../../../store/slices/authSlice'

export const Menu = () => {
    const dispatch = useDispatch()
    const { user } = useAuth()

    const signOff = () => {
        dispatch(logout())
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
                {user.role?.name === 'member' && (
                    <li>
                        <HashLink to="/perfil">Mi perfil</HashLink>
                    </li>
                )}
                <li>
                    <button as="button" onClick={signOff}>
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
        <StyledMenu>
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
                <HashLink to="/#contacto">Contacto</HashLink>
            </li>
            {renderUserBasedLinks()}
        </StyledMenu>
    )
}
