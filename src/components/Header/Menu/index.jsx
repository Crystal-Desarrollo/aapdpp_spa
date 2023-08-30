import { HashLink } from 'react-router-hash-link'
import { useDispatch } from 'react-redux'
import { FaSignOutAlt } from 'react-icons/fa'
import { MenuBars, StyledMenu } from './styles'
import { Confirm } from '../../Common/modals/Confirm'
import { logout } from '../../../store/slices/authSlice'
import { useState } from 'react'

export const Menu = ({ user, setIsOpenSideMenu }) => {
    const [confirmShown, setConfirmShown] = useState(false)
    const dispatch = useDispatch()
    const isMember = user?.role?.name === 'member'
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
            <StyledMenu>
                <li>
                    <HashLink to="/#">Inicio</HashLink>
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
                    <HashLink to="/#autoridades">Autoridades</HashLink>
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
            </StyledMenu>
            <MenuBars
                onClick={() => {
                    setIsOpenSideMenu(prevState => !prevState)
                }}
            />
        </>
    )
}
