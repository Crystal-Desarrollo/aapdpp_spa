import { HeaderStyled, AdminHeaderStyle } from './styles'
import { Menu } from './Menu/index.jsx'
import { AdminHeader } from './AdminHeader'

import Logo from '../../asssets/img/logo_apdp.jpg'
import { useIsAdmin } from '../../hooks/auth/useIsAdmin'

export function Header() {
    const isAdmin = useIsAdmin()

    return (
        <HeaderStyled>
            <div className="content">
                <div>
                    <img
                        src={Logo}
                        alt="Logo Asociación Argentina de Profesores de Derecho Procesal Penal"
                    />
                    <h1>AAPDPP</h1>
                </div>

                <Menu />
            </div>

            {isAdmin && (
                <>
                    <AdminHeaderStyle />
                    <AdminHeader />
                </>
            )}
        </HeaderStyled>
    )
}
