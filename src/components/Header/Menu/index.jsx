import { HashLink } from 'react-router-hash-link'
import { useDispatch } from 'react-redux'

import { StyledMenu } from './styles'
import { useAuth } from '../../../hooks/auth/useAuth'
import { logout } from '../../../store/slices/authSlice'

export const Menu = () => {
    const dispatch = useDispatch()
    const { user } = useAuth()

    const signOff = () => {
        dispatch(logout())
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
            <li>
                {user ? (
                    <button as="button" onClick={signOff}>
                        Cerrar Sesión
                    </button>
                ) : (
                    <HashLink to="/ingresar">Ingresar</HashLink>
                )}
            </li>
        </StyledMenu>
    )
}
