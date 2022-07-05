import { HeaderStyled } from './styles'
import { Menu } from './Menu/index.jsx'
import { AdminHeader } from './AdminHeader'

import Logo from '../../asssets/img/logo_apdp.jpg'
import { useAuth } from '../../hooks/auth/useAuth'

export function Header() {
    const { user } = useAuth()

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

            {user?.role?.name === 'admin' && <AdminHeader />}
        </HeaderStyled>
    )
}
