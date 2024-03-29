import { HeaderStyled } from './styles'
import { Menu } from './Menu/index.jsx'
import { AdminHeader } from './AdminHeader'

import Logo from '../../asssets/img/logo_apdp.png'
import { useAuth } from '../../hooks/auth/useAuth'
import { SideMenu } from './sideMenu'
import { useState } from 'react'

export function Header() {
    const [isOpenSideMenu, setIsOpenSideMenu] = useState(false)
    const user = useAuth()

    const isAdmin = user?.role?.name === 'admin'

    return (
        <HeaderStyled>
            <div className="content">
                <div>
                    <img
                        src={Logo}
                        alt="Logo Asociación Argentina de Profesores de Derecho Procesal Penal"
                    />
                </div>

                <Menu user={user} setIsOpenSideMenu={setIsOpenSideMenu} />
            </div>

            {isAdmin && <AdminHeader />}
            <SideMenu
                user={user}
                setIsOpenSideMenu={setIsOpenSideMenu}
                isOpenSideMenu={isOpenSideMenu}
            />
        </HeaderStyled>
    )
}
