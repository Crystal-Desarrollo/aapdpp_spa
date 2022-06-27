import { HashLink } from 'react-router-hash-link'
import { StyledMenu } from './styles'

import { useAuth } from '../../../hooks/auth/useAuth'

export const Menu = () => {
    const { user } = useAuth()

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
            <li>{!user && <HashLink to="/ingresar">Ingresar</HashLink>}</li>
        </StyledMenu>
    )
}
