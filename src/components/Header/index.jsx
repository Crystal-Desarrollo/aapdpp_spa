import { HeaderStyled, AdminHeaderStyle } from './styles'
import { Menu } from './Menu/index.jsx'
import { AdminHeader } from './AdminHeader'

import Logo from '../../asssets/img/logo_apdp.jpg'
import { useAuth } from '../../hooks/auth/useAuth'
import { SideMenu } from './sideMenu'
import { useState } from 'react'

export function Header() {
    const [isOpenSideMenu, setIsOpenSideMenu] = useState(false)
    const {
        data: { user }
    } = useAuth()

    const isAdmin = user?.role?.name === 'admin'

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

                <Menu setIsOpenSideMenu={setIsOpenSideMenu} />
            </div>

            {isAdmin && (
                <>
                    <AdminHeaderStyle />
                    <AdminHeader />
                </>
            )}
            <SideMenu isOpenSideMenu={isOpenSideMenu} />
        </HeaderStyled>
    )
}
